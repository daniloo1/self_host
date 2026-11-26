// Configurazione: su GitHub Pages owner e repo vengono rilevati automaticamente.
// Per test in locale (localhost), imposta qui i valori di fallback.
const DEFAULT_CONFIG = {
  owner: "daniloo1",
  repo: "self_host",
  rootDir: "documents",
};

const SUPPORTED_EXTS = [".md", ".txt", ".pdf"];
const ACCESS_HASH = "dcf22513755fa9943891995b22ad6ee5f66223ecc5385bdbeee2ad1f06ebe1f5";
const UNLOCK_KEY = "doc_viewer_unlocked";

const state = {
  owner: DEFAULT_CONFIG.owner,
  repo: DEFAULT_CONFIG.repo,
  currentPath: DEFAULT_CONFIG.rootDir,
  entries: [],
  activeFile: null,
  activeBlob: null,
  pdfDoc: null,
  pdfScale: 1.25,
};

const els = {
  authGate: document.getElementById("auth-gate"),
  authForm: document.getElementById("auth-form"),
  pinInput: document.getElementById("pin-input"),
  authError: document.getElementById("auth-error"),
  appLayout: document.getElementById("app-layout"),
  fileList: document.getElementById("file-list"),
  breadcrumbs: document.getElementById("breadcrumbs"),
  searchInput: document.getElementById("search-input"),
  viewerTitle: document.getElementById("current-file-name"),
  viewerMeta: document.getElementById("current-file-meta"),
  viewerContent: document.getElementById("viewer-content"),
  downloadBtn: document.getElementById("download-btn"),
  pdfControls: document.getElementById("pdf-controls"),
  zoomInBtn: document.getElementById("zoom-in-btn"),
  zoomOutBtn: document.getElementById("zoom-out-btn"),
  zoomLabel: document.getElementById("zoom-label"),
  openUploadBtn: document.getElementById("open-upload-btn"),
  uploadDialog: document.getElementById("upload-dialog"),
  closeUploadBtn: document.getElementById("close-upload-btn"),
  uploadForm: document.getElementById("upload-form"),
  uploadTargetPath: document.getElementById("upload-target-path"),
  patInput: document.getElementById("pat-input"),
  fileInput: document.getElementById("file-input"),
  uploadStatus: document.getElementById("upload-status"),
};

function detectRepoFromLocation() {
  const host = window.location.hostname;
  if (host.endsWith(".github.io")) {
    const owner = host.split(".")[0];
    const parts = window.location.pathname.split("/").filter(Boolean);
    const repo = parts[0] || `${owner}.github.io`;
    state.owner = owner;
    state.repo = repo;
  }
}

function getExt(name) {
  const idx = name.lastIndexOf(".");
  return idx === -1 ? "" : name.slice(idx).toLowerCase();
}

function isSupportedFile(item) {
  if (item.type === "dir") return true;
  return SUPPORTED_EXTS.includes(getExt(item.name));
}

function formatBytes(bytes) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

async function fetchDirectory(path) {
  els.fileList.innerHTML = `<li class="status-msg">Caricamento...</li>`;
  state.currentPath = path;
  renderBreadcrumbs();

  const url = `https://api.github.com/repos/${state.owner}/${state.repo}/contents/${encodePath(path)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}`);
    }
    const data = await res.json();
    const items = Array.isArray(data) ? data.filter(isSupportedFile) : [];
    items.sort((a, b) => {
      if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
      return a.name.localeCompare(b.name, "it", { sensitivity: "base" });
    });
    state.entries = items;
    renderFileList();
  } catch (err) {
    // Fallback per test in locale o se la cartella non e' ancora su GitHub
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      els.fileList.innerHTML = `<li class="status-msg">In locale usa i file in <code>${path}/</code> dopo il push su GitHub, oppure verifica il nome repo in <code>app.js</code>. (${err.message})</li>`;
    } else {
      els.fileList.innerHTML = `<li class="status-msg">Impossibile leggere la cartella (${err.message}).</li>`;
    }
  }
}

function renderBreadcrumbs() {
  const parts = state.currentPath.split("/").filter(Boolean);
  els.breadcrumbs.innerHTML = "";

  parts.forEach((part, idx) => {
    if (idx > 0) {
      els.breadcrumbs.appendChild(document.createTextNode(" / "));
    }
    const target = parts.slice(0, idx + 1).join("/");
    const btn = document.createElement("button");
    btn.textContent = idx === 0 ? "Home" : part;
    btn.addEventListener("click", () => fetchDirectory(target));
    els.breadcrumbs.appendChild(btn);
  });
}

function renderFileList() {
  const query = els.searchInput.value.trim().toLowerCase();
  const filtered = state.entries.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    els.fileList.innerHTML = `<li class="status-msg">Nessun file trovato.</li>`;
    return;
  }

  els.fileList.innerHTML = "";
  for (const item of filtered) {
    const li = document.createElement("li");
    li.className = "file-item";
    if (state.activeFile && state.activeFile.path === item.path) {
      li.classList.add("active");
    }

    const badge = document.createElement("span");
    badge.className = "file-icon";
    badge.textContent = item.type === "dir" ? "DIR" : getExt(item.name).slice(1).toUpperCase();

    const label = document.createElement("span");
    label.textContent = item.name;

    li.append(badge, label);
    li.addEventListener("click", () => {
      if (item.type === "dir") {
        fetchDirectory(item.path);
      } else {
        openFile(item);
      }
    });
    els.fileList.appendChild(li);
  }
}

async function fetchFileBuffer(item) {
  // Su GitHub Pages possiamo leggere direttamente il file relativo senza consumare rate limit API
  if (window.location.hostname.endsWith(".github.io") || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    const relRes = await fetch(`./${encodePath(item.path)}`);
    if (relRes.ok) {
      return await relRes.arrayBuffer();
    }
  }
  // Fallback via raw download_url da GitHub API
  const res = await fetch(item.download_url);
  if (!res.ok) throw new Error(`Download fallito (${res.status})`);
  return await res.arrayBuffer();
}

async function openFile(item) {
  state.activeFile = item;
  state.activeBlob = null;
  state.pdfDoc = null;
  renderFileList();

  els.viewerTitle.textContent = item.name;
  els.viewerMeta.textContent = formatBytes(item.size);
  els.downloadBtn.classList.add("hidden");
  els.pdfControls.classList.add("hidden");
  els.viewerContent.innerHTML = `<p class="status-msg">Apertura di ${item.name}...</p>`;

  try {
    const buffer = await fetchFileBuffer(item);
    const ext = getExt(item.name);
    const mime =
      ext === ".pdf"
        ? "application/pdf"
        : ext === ".md"
        ? "text/markdown;charset=utf-8"
        : "text/plain;charset=utf-8";

    state.activeBlob = new Blob([buffer], { type: mime });
    els.downloadBtn.classList.remove("hidden");

    if (ext === ".md") {
      const text = new TextDecoder("utf-8").decode(buffer);
      renderMarkdown(text);
    } else if (ext === ".txt") {
      const text = new TextDecoder("utf-8").decode(buffer);
      renderText(text);
    } else if (ext === ".pdf") {
      await renderPdf(buffer);
    }
  } catch (err) {
    els.viewerContent.innerHTML = `<p class="status-msg">Errore durante l'apertura del file: ${err.message}</p>`;
  }
}

function stripFrontmatter(md) {
  if (!md.startsWith("---\n") && !md.startsWith("---\r\n")) return md;
  const end = md.indexOf("\n---", 3);
  if (end === -1) return md;
  return md.slice(end + 4).replace(/^\s+/, "");
}

function convertWikilinks(md) {
  // Converte [[Nota]] o [[Nota|Etichetta]] in link HTML cliccabili
  return md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const label = alias || target;
    return `<a href="#" class="wikilink" data-wikilink="${target.trim()}">${label.trim()}</a>`;
  });
}

function renderMarkdown(raw) {
  const cleaned = convertWikilinks(stripFrontmatter(raw));
  const html = window.DOMPurify.sanitize(window.marked.parse(cleaned));
  els.viewerContent.innerHTML = `<article class="markdown-body">${html}</article>`;

  els.viewerContent.querySelectorAll(".wikilink").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.wikilink.toLowerCase();
      const match = state.entries.find(
        (entry) =>
          entry.type === "file" &&
          (entry.name.toLowerCase() === `${target}.md` ||
            entry.name.toLowerCase() === target)
      );
      if (match) {
        openFile(match);
      } else {
        alert(`Nota "${link.dataset.wikilink}" non trovata in questa cartella.`);
      }
    });
  });
}

function renderText(text) {
  const pre = document.createElement("pre");
  pre.className = "txt-body";
  pre.textContent = text;
  els.viewerContent.innerHTML = "";
  els.viewerContent.appendChild(pre);
}

async function renderPdf(buffer) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  const loadingTask = window.pdfjsLib.getDocument({ data: buffer });
  state.pdfDoc = await loadingTask.promise;
  els.pdfControls.classList.remove("hidden");
  await drawPdfPages();
}

async function drawPdfPages() {
  if (!state.pdfDoc) return;
  els.zoomLabel.textContent = `${Math.round(state.pdfScale * 100)}%`;
  const container = document.createElement("div");
  container.className = "pdf-container";
  els.viewerContent.innerHTML = "";
  els.viewerContent.appendChild(container);

  for (let num = 1; num <= state.pdfDoc.numPages; num++) {
    const page = await state.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: state.pdfScale });
    const canvas = document.createElement("canvas");
    canvas.className = "pdf-page-canvas";
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    container.appendChild(canvas);

    await page.render({
      canvasContext: canvas.getContext("2d"),
      viewport,
    }).promise;
  }
}

// Download esplicito solo su click dell'utente
els.downloadBtn.addEventListener("click", () => {
  if (!state.activeBlob || !state.activeFile) return;
  const url = URL.createObjectURL(state.activeBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = state.activeFile.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

els.zoomInBtn.addEventListener("click", () => {
  state.pdfScale = Math.min(2.5, state.pdfScale + 0.25);
  drawPdfPages();
});

els.zoomOutBtn.addEventListener("click", () => {
  state.pdfScale = Math.max(0.5, state.pdfScale - 0.25);
  drawPdfPages();
});

els.searchInput.addEventListener("input", renderFileList);

// Upload da web via GitHub API
els.openUploadBtn.addEventListener("click", () => {
  els.uploadTargetPath.textContent = state.currentPath;
  els.uploadStatus.textContent = "";
  els.patInput.value = sessionStorage.getItem("gh_upload_pat") || "";
  els.uploadDialog.showModal();
});

els.closeUploadBtn.addEventListener("click", () => els.uploadDialog.close());

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

els.uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pat = els.patInput.value.trim();
  const files = Array.from(els.fileInput.files || []);
  if (!pat || files.length === 0) return;

  sessionStorage.setItem("gh_upload_pat", pat);
  els.uploadStatus.textContent = "Caricamento in corso...";

  try {
    for (const file of files) {
      const targetPath = `${state.currentPath}/${file.name}`;
      const apiUrl = `https://api.github.com/repos/${state.owner}/${state.repo}/contents/${encodePath(targetPath)}`;
      const headers = {
        Authorization: `Bearer ${pat}`,
        Accept: "application/vnd.github+json",
      };

      // Verifica se il file esiste gia' per ottenere lo sha
      let existingSha;
      const checkRes = await fetch(apiUrl, { headers });
      if (checkRes.ok) {
        const existing = await checkRes.json();
        existingSha = existing.sha;
      }

      const content = arrayBufferToBase64(await file.arrayBuffer());
      const putRes = await fetch(apiUrl, {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Upload ${file.name} via web`,
          content,
          ...(existingSha ? { sha: existingSha } : {}),
        }),
      });

      if (!putRes.ok) {
        const errBody = await putRes.json().catch(() => ({}));
        throw new Error(errBody.message || `Errore ${putRes.status}`);
      }
    }

    els.uploadStatus.textContent = "Caricamento completato! GitHub Pages si aggiornera' in ~30 secondi.";
    els.fileInput.value = "";
    await fetchDirectory(state.currentPath);
  } catch (err) {
    els.uploadStatus.textContent = `Errore: ${err.message}`;
  }
});

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function unlockApp() {
  sessionStorage.setItem(UNLOCK_KEY, "1");
  els.authGate.classList.add("hidden");
  els.appLayout.classList.remove("hidden");
  detectRepoFromLocation();
  fetchDirectory(DEFAULT_CONFIG.rootDir);
}

els.pinInput.addEventListener("input", () => {
  els.pinInput.value = els.pinInput.value.replace(/\D/g, "").slice(0, 6);
  els.authError.classList.add("hidden");
});

els.authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const code = els.pinInput.value.trim();
  const hash = await sha256Hex(code);
  if (hash === ACCESS_HASH) {
    unlockApp();
  } else {
    els.authError.classList.remove("hidden");
    els.pinInput.value = "";
    els.pinInput.focus();
  }
});

if (sessionStorage.getItem(UNLOCK_KEY) === "1") {
  unlockApp();
} else {
  els.pinInput.focus();
}

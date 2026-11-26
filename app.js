// Configurazione: su GitHub Pages owner e repo vengono rilevati automaticamente.
// Per test in locale (localhost), imposta qui i valori di fallback.
const DEFAULT_CONFIG = {
  owner: "daniloo1",
  repo: "self_host",
  rootDir: "documents",
};

const SUPPORTED_EXTS = [".md", ".txt", ".pdf"];
const ACCESS_CODE = "431643";
const UNLOCK_KEY = "doc_viewer_unlocked";

const state = {
  owner: DEFAULT_CONFIG.owner,
  repo: DEFAULT_CONFIG.repo,
  currentPath: DEFAULT_CONFIG.rootDir,
  entries: [],
  activeFile: null,
  activeBlob: null,
  activeRawText: null,
  isEditing: false,
  localCache: new Map(),
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
  editBtn: document.getElementById("edit-btn"),
  saveEditBtn: document.getElementById("save-edit-btn"),
  cancelEditBtn: document.getElementById("cancel-edit-btn"),
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
  openNewBtn: document.getElementById("open-new-btn"),
  newFileDialog: document.getElementById("new-file-dialog"),
  closeNewBtn: document.getElementById("close-new-btn"),
  newFileForm: document.getElementById("new-file-form"),
  newFileTargetPath: document.getElementById("new-file-target-path"),
  newFileName: document.getElementById("new-file-name"),
  newFileContent: document.getElementById("new-file-content"),
  newPatInput: document.getElementById("new-pat-input"),
  newFileStatus: document.getElementById("new-file-status"),
  patDialog: document.getElementById("pat-dialog"),
  patForm: document.getElementById("pat-form"),
  quickPatInput: document.getElementById("quick-pat-input"),
  closePatBtn: document.getElementById("close-pat-btn"),
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
  const pat = sessionStorage.getItem("gh_upload_pat");
  const headers = pat ? { Authorization: `Bearer ${pat}` } : {};
  try {
    const res = await fetch(url, { headers, cache: "no-store" });
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
  // Se il file e' stato appena salvato in questa sessione, usa i dati freschi in memoria
  if (state.localCache.has(item.path)) {
    return state.localCache.get(item.path).slice(0);
  }
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

function updateViewerActionButtons(ext) {
  const isTextEditable = ext === ".md" || ext === ".txt";
  els.editBtn.classList.toggle("hidden", !isTextEditable || state.isEditing);
  els.saveEditBtn.classList.toggle("hidden", !state.isEditing);
  els.cancelEditBtn.classList.toggle("hidden", !state.isEditing);
  els.downloadBtn.classList.toggle("hidden", state.isEditing || !state.activeBlob);
}

async function openFile(item) {
  state.activeFile = item;
  state.activeBlob = null;
  state.activeRawText = null;
  state.isEditing = false;
  state.pdfDoc = null;
  renderFileList();

  els.viewerTitle.textContent = item.name;
  els.viewerMeta.textContent = formatBytes(item.size);
  els.editBtn.classList.add("hidden");
  els.saveEditBtn.classList.add("hidden");
  els.cancelEditBtn.classList.add("hidden");
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
    updateViewerActionButtons(ext);

    if (ext === ".md") {
      const text = new TextDecoder("utf-8").decode(buffer);
      state.activeRawText = text;
      renderMarkdown(text);
    } else if (ext === ".txt") {
      const text = new TextDecoder("utf-8").decode(buffer);
      state.activeRawText = text;
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

async function saveBufferToGitHub(targetPath, buffer, pat, commitMessage) {
  const apiUrl = `https://api.github.com/repos/${state.owner}/${state.repo}/contents/${encodePath(targetPath)}`;
  const headers = {
    Authorization: `Bearer ${pat}`,
    Accept: "application/vnd.github+json",
  };

  let existingSha;
  const checkRes = await fetch(apiUrl, { headers, cache: "no-store" });
  if (checkRes.ok) {
    const existing = await checkRes.json();
    existingSha = existing.sha;
  }

  const content = arrayBufferToBase64(buffer);
  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: commitMessage,
      content,
      ...(existingSha ? { sha: existingSha } : {}),
    }),
  });

  if (!putRes.ok) {
    const errBody = await putRes.json().catch(() => ({}));
    throw new Error(errBody.message || `Errore ${putRes.status}`);
  }

  state.localCache.set(targetPath, buffer.slice(0));
  return await putRes.json();
}

function promptForPat() {
  const saved = sessionStorage.getItem("gh_upload_pat");
  if (saved) return Promise.resolve(saved);

  return new Promise((resolve) => {
    els.quickPatInput.value = "";
    els.patDialog.showModal();

    const cleanup = () => {
      els.patForm.removeEventListener("submit", onSubmit);
      els.closePatBtn.removeEventListener("click", onCancel);
      els.patDialog.removeEventListener("cancel", onCancel);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const pat = els.quickPatInput.value.trim();
      if (!pat) return;
      sessionStorage.setItem("gh_upload_pat", pat);
      cleanup();
      els.patDialog.close();
      resolve(pat);
    };

    const onCancel = () => {
      cleanup();
      els.patDialog.close();
      resolve(null);
    };

    els.patForm.addEventListener("submit", onSubmit);
    els.closePatBtn.addEventListener("click", onCancel);
    els.patDialog.addEventListener("cancel", onCancel);
  });
}

function renderActiveTextPreview() {
  if (!state.activeFile) return;
  const ext = getExt(state.activeFile.name);
  if (ext === ".md") {
    renderMarkdown(state.activeRawText);
  } else {
    renderText(state.activeRawText);
  }
}

function enterEditMode() {
  if (!state.activeFile || state.activeRawText === null) return;
  state.isEditing = true;
  updateViewerActionButtons(getExt(state.activeFile.name));

  const wrap = document.createElement("div");
  wrap.className = "editor-wrap";

  const textarea = document.createElement("textarea");
  textarea.id = "live-editor-textarea";
  textarea.className = "editor-textarea";
  textarea.value = state.activeRawText;

  const status = document.createElement("div");
  status.id = "live-editor-status";
  status.className = "editor-status";
  status.textContent = "Modifica in corso — premi Ctrl+S / Cmd+S o clicca 'Salva su GitHub' per applicare.";

  textarea.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveCurrentEdit();
    }
  });

  wrap.append(textarea, status);
  els.viewerContent.innerHTML = "";
  els.viewerContent.appendChild(wrap);
  textarea.focus();
}

function exitEditMode() {
  if (!state.activeFile) return;
  state.isEditing = false;
  updateViewerActionButtons(getExt(state.activeFile.name));
  renderActiveTextPreview();
}

async function saveCurrentEdit() {
  if (!state.activeFile) return;
  const textarea = document.getElementById("live-editor-textarea");
  const statusEl = document.getElementById("live-editor-status");
  if (!textarea) return;

  const pat = await promptForPat();
  if (!pat) return;

  const newText = textarea.value;
  const buffer = new TextEncoder().encode(newText).buffer;
  els.saveEditBtn.disabled = true;
  if (statusEl) statusEl.textContent = "Salvataggio su GitHub in corso...";

  try {
    const result = await saveBufferToGitHub(
      state.activeFile.path,
      buffer,
      pat,
      `Update ${state.activeFile.name} via web editor`
    );

    state.activeRawText = newText;
    const ext = getExt(state.activeFile.name);
    const mime = ext === ".md" ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8";
    state.activeBlob = new Blob([buffer], { type: mime });
    if (result?.content?.size !== undefined) {
      state.activeFile.size = result.content.size;
      els.viewerMeta.textContent = formatBytes(result.content.size);
    }

    state.isEditing = false;
    updateViewerActionButtons(ext);
    renderActiveTextPreview();
  } catch (err) {
    if (err.message.includes("401") || err.message.includes("Bad credentials")) {
      sessionStorage.removeItem("gh_upload_pat");
    }
    if (statusEl) statusEl.textContent = `Errore durante il salvataggio: ${err.message}`;
  } finally {
    els.saveEditBtn.disabled = false;
  }
}

els.editBtn.addEventListener("click", enterEditMode);
els.cancelEditBtn.addEventListener("click", exitEditMode);
els.saveEditBtn.addEventListener("click", saveCurrentEdit);

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
      const buffer = await file.arrayBuffer();
      await saveBufferToGitHub(targetPath, buffer, pat, `Upload ${file.name} via web`);
    }

    els.uploadStatus.textContent = "Caricamento completato! GitHub Pages si aggiornera' in ~30 secondi.";
    els.fileInput.value = "";
    await fetchDirectory(state.currentPath);
  } catch (err) {
    els.uploadStatus.textContent = `Errore: ${err.message}`;
  }
});

// Creazione nuovo file di testo / Markdown direttamente da web
els.openNewBtn.addEventListener("click", () => {
  els.newFileTargetPath.textContent = state.currentPath;
  els.newFileName.value = "";
  els.newFileContent.value = "";
  els.newFileStatus.textContent = "";
  els.newPatInput.value = sessionStorage.getItem("gh_upload_pat") || "";
  els.newFileDialog.showModal();
  els.newFileName.focus();
});

els.closeNewBtn.addEventListener("click", () => els.newFileDialog.close());

els.newFileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let fileName = els.newFileName.value.trim().replace(/^\/+/, "");
  const pat = els.newPatInput.value.trim();
  const text = els.newFileContent.value;
  if (!fileName || !pat) return;

  if (!fileName.toLowerCase().endsWith(".md") && !fileName.toLowerCase().endsWith(".txt")) {
    fileName += ".md";
  }

  sessionStorage.setItem("gh_upload_pat", pat);
  els.newFileStatus.textContent = "Salvataggio su GitHub in corso...";

  try {
    const targetPath = `${state.currentPath}/${fileName}`;
    const buffer = new TextEncoder().encode(text).buffer;
    const result = await saveBufferToGitHub(
      targetPath,
      buffer,
      pat,
      `Create ${fileName} via web`
    );

    els.newFileDialog.close();
    await fetchDirectory(state.currentPath);

    let createdItem = state.entries.find((entry) => entry.path === targetPath);
    if (!createdItem) {
      createdItem = {
        name: fileName,
        path: targetPath,
        type: "file",
        size: result?.content?.size ?? buffer.byteLength,
        download_url: result?.content?.download_url || "",
      };
      state.entries.push(createdItem);
      state.entries.sort((a, b) => {
        if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
        return a.name.localeCompare(b.name, "it", { sensitivity: "base" });
      });
    }
    await openFile(createdItem);
  } catch (err) {
    els.newFileStatus.textContent = `Errore: ${err.message}`;
  }
});

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

els.authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = els.pinInput.value.trim();
  if (code === ACCESS_CODE) {
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

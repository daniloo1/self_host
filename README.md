# Archivio Documenti (GitHub Pages)

Sito statico minimale per visualizzare da remoto file **Markdown / Obsidian (`.md`)**, **Testo (`.txt`)** e **PDF (`.pdf`)** direttamente nel browser, senza doverli scaricare sul computer locale.

## Come aggiungere documenti
1. **Da computer / Obsidian**: copia i file nella cartella `documents/` (puoi creare sottocartelle) e fai `git add . && git commit -m "Aggiorna documenti" && git push`.
2. **Dall'interfaccia web**: clicca `+ Carica`, inserisci un Personal Access Token (PAT) GitHub con permesso `Contents: Read & Write` sul repository e seleziona i file.

## Come spegnere e riaccendere il sito
1. Vai su GitHub nel tuo repository → **Settings** → **Pages**.
2. Per **spegnere**: imposta **Source** su `None` (il link smette subito di funzionare).
3. Per **riaccendere**: imposta **Branch** su `main` / `/ (root)` e salva.

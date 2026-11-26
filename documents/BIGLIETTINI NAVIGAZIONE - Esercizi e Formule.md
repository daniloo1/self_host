# BIGLIETTINI NAVIGAZIONE — Esercizi & Formule Rapide

> Tutti gli esercizi di calcolo e intercettazione di **Navigazione** (+ virate standard) con **Domanda → Risposta** e **risoluzione lampo con formule**.

---

## FORMULARIO LAMPO (per numeri diversi all'esame)

- **Tempo (min)**: `t = (D / GS) · 60`  *(D in NM, GS in kts)*
- **Distanza (NM)**: `D = (GS · t_min) / 60`
- **Rateo salita/discesa (ft/min)**: `ROC/ROD = ΔQuota / t_min`
- **Sentiero ILS 3°**: `Distanza (NM) ≈ Altezza (ft) / 300`  |  `ROD (ft/min) ≈ GS · 5`
- **LSS & TAS da Mach**: `LSS (kts) = 38.94 · √T(K)`  *(T(K) = °C + 273)*  |  `TAS = Mach · LSS`
- **QDM (Rotta per stazione)**: `QDM = (MH + RB) mod 360°`
- **Crosswind (vento al traverso)**: `CW = Vento · sin(α)`  *(α = |Pista − Vento|; sin 20° ≈ 0.34, sin 30° = 0.5, sin 45° ≈ 0.71, sin 60° ≈ 0.87)*
- **Distanza orizzontale da DME (Slant Range)**: `D_suolo = √(DME² − h_NM²)`  *(1 NM ≈ 6076 ft ≈ 6000 ft)*
- **PET (Point of Equal Time)**: `PET = (D · V2) / (V1 + V2)`  *(V1 = GS andata, V2 = GS ritorno)*
- **Virata Standard (3°/s)**: `t (sec) = ΔPrua° / 3`

---

## ESERCIZI DEL DATABASE

### 1. Rateo di salita (ROCD) da distanza e GS *(ID #103)*
**D:** Guadagnare **5.000 ft** su **16 NM** con **GS = 240 kts**. Quale rateo di salita (ROCD) mantenere?
**R:** **1.250 ft/min**
> **Risoluzione:**
> - Tempo: `t = (D / GS) · 60 = (16 / 240) · 60 = 4 min`
> - Rateo: `ROCD = ΔQuota / t = 5.000 / 4 = 1.250 ft/min`

---

### 2. Distanza su sentiero ILS 3° *(ID #106)*
**D:** Stabilizzato su ILS **3°**, altezza **2.500 ft**. Distanza approssimativa dalla soglia pista?
**R:** **Circa 8,3 NM**
> **Risoluzione:**
> - Regola 1:20 (3° ≈ 300 ft/NM): `D ≈ Altezza / 300 = 2.500 / 300 ≈ 8,3 NM`

---

### 3. Velocità del suono (LSS) e TAS da Mach *(ID #108)*
**D:** **Mach 0.80**, **OAT −55 °C (218 K)**. Calcolare **LSS** e **TAS**.
**R:** **LSS ≈ 575 kts, TAS ≈ 460 kts**
> **Risoluzione:**
> - `LSS = 38.94 · √T(K) = 38.94 · √218 ≈ 38.94 · 14.76 ≈ 575 kts`
> - `TAS = Mach · LSS = 0.80 · 575 = 460 kts`

---

### 4. Rilevamento polare (R.B.) → QDM *(ID #109)*
**D:** Prua magnetica (**MH**) **060°**, rilevamento polare (**R.B.**) **270°**. Quale prua (**QDM**) impostare?
**R:** **Prua 330°**
> **Risoluzione:**
> - `QDM = MH + RB = 060° + 270° = 330°` *(se > 360°, sottrai 360°)*

---

### 5. Tempo di volo da GS e distanza *(ID #112)*
**D:** **GS = 269 kts**, distanza **5 NM**. Tempo di volo stimato?
**R:** **1 min 07 sec**
> **Risoluzione:**
> - `t (sec) = (D / GS) · 3600 = (5 / 269) · 3600 ≈ 66,9 sec = 1 min 07 sec`

---

### 6. Distanza orizzontale in discesa *(ID #114)*
**D:** Vento nullo, discesa da **FL 250** a **FL 100** a **3.000 ft/min**, **GS = 320 kts**. Distanza coperta?
**R:** **26,7 NM**
> **Risoluzione:**
> - Quota da perdere: `25.000 − 10.000 = 15.000 ft`
> - Tempo: `t = ΔQuota / ROD = 15.000 / 3.000 = 5 min`
> - Distanza: `D = (GS · t) / 60 = (320 · 5) / 60 = 26,67 ≈ 26,7 NM`

---

### 7. Vento al traverso (Crosswind) *(ID #115)*
**D:** Pista **210° (Mag)**, vento **230° (Mag) / 30 kts**. Componente di vento al traverso?
**R:** **Circa 10 kts**
> **Risoluzione:**
> - Angolo: `α = |230° − 210°| = 20°`
> - `CW = Vento · sin(20°) ≈ 30 · 0,342 ≈ 10,3 ≈ 10 kts`

---

### 8. Distanza al suolo da Slant Range DME *(ID #116)*
**D:** Altezza **6.000 ft** sulla stazione DME, **slant range = 5,0 NM**. Distanza orizzontale al suolo?
**R:** **Circa 4,9 NM**
> **Risoluzione:**
> - Altezza in NM: `h ≈ 6.000 / 6.076 ≈ 1,0 NM`
> - Pitagora: `D_suolo = √(DME² − h²) = √(5² − 1²) = √24 ≈ 4,9 NM`

---

### 9. Rateo di salita medio da distanza e TAS *(ID #119)*
**D:** Salire **14.000 ft** su **35 NM**, **TAS = 150 kts**, vento nullo. Rateo di salita medio?
**R:** **1.000 ft/min**
> **Risoluzione:**
> - Tempo: `t = (D / GS) · 60 = (35 / 150) · 60 = 14 min`
> - Rateo: `ROC = 14.000 / 14 = 1.000 ft/min`

---

### 10. Punto di Egual Tempo (PET) *(ID #127)*
**D:** Cos'è il **PET** con formula `PET = (D · V2) / (V1 + V2)`?
**R:** **Punto lungo la rotta equidistante in tempo di volo sia per raggiungere la destinazione sia per rientrare alla base**
> **Formula:** `D_PET = (D_totale · GS_ritorno) / (GS_andata + GS_ritorno)`

---

### 11. Intercettazione Fix VOR #1 *(ID #128)*
**D:** **HDG 045°**, su **radiale 135°** a 20 NM, **3.000 ft** → Fix **radiale 045°** a 20 NM, **5.000 ft** (no vento). Manovra?
**R:** **Vira a sinistra per prua NORD (indicativa), salendo di quota**
> **Risoluzione:**
> - Sei a **SE** (rad 135°), devi andare a **NE** (rad 045°): direzione **NORD (360°)**
> - Da HDG **045°** a **360°**: virata a **sinistra** (−45°); da 3.000 a 5.000 ft: **salendo**

---

### 12. Intercettazione Fix VOR #2 *(ID #129)*
**D:** **HDG 315°**, su **radiale 045°** a 20 NM, **5.000 ft** → Fix **radiale 315°** a 20 NM, **3.000 ft** (no vento). Manovra?
**R:** **Vira a sinistra per prua OVEST (indicativa), scendendo di quota**
> **Risoluzione:**
> - Sei a **NE** (rad 045°), devi andare a **NW** (rad 315°): direzione **OVEST (270°)**
> - Da HDG **315°** a **270°**: virata a **sinistra** (−45°); da 5.000 a 3.000 ft: **scendendo**

---

### 13. Intercettazione Fix VOR #3 *(ID #130)*
**D:** **HDG 045°**, su **radiale 315°** a 20 NM, **3.000 ft** → Fix **radiale 135°** a 20 NM, **5.000 ft** (no vento). Manovra?
**R:** **Vira a destra per prua SUD-EST (indicativa), salendo di quota**
> **Risoluzione:**
> - Sei a **NW** (rad 315°), devi andare a **SE** (rad 135°): direzione **SUD-EST (135°)**
> - Da HDG **045°** a **135°**: virata a **destra** (+90°); da 3.000 a 5.000 ft: **salendo**

---

## BONUS — VIRATA STANDARD (3°/sec) *(da Strumenti)*

- **Variazione di 30°** *(ID #209)* → **10 secondi** (`30 / 3 = 10 s`)
- **Inversione di 180°** *(ID #210)* → **60 secondi** (`180 / 3 = 60 s`)
- **Giro completo 360°** *(ID #211)* → **120 secondi** (`360 / 3 = 120 s`)

---

## STRUMENTI — FORMULE, ERRORI & ESERCIZI *(da Note Obsidian)*

### Formule Altimetria — Metodo **PITO**
- **Regola d'oro**: *"From high to low, look out below"* (da alta a bassa P o T, l'altimetro segna **di più** del reale)
- **[P] Pressione (`1 hPa ≈ 30 ft`)**: `ΔP = 1013.25 − QNH`  |  `Corr_P = ΔP · 30 ft` *(se QNH < 1013, sottrai)*
- **[I] Temperatura ISA**: `T_ISA = 15 − (2 · quota_in_migliaia_ft)`
- **[T] Correzione Temperatura (Formula dei 4 piedi)**:
  `Corr_T = 4 · ΔT_ISA · (Δh / 1000)`
  dove `ΔT_ISA = OAT − T_ISA` e `Δh = Quota_indicata − Elevazione_aeroporto` *(⚠️ usa sempre altezza sopra aeroporto/stazione, MAI MSL!)*
- **[O] True Altitude**: `True_Alt = h_ind(QNH) ± Corr_T`

### Esercizio Altimetria & Ostacolo (PITO)
**D:** Quota **8.000 ft** (su 1013), **QNH 980 hPa**, aeroporto **2.000 ft**, **OAT −21 °C**, ostacolo **7.200 ft**. Separazione reale?
**R:** **True Altitude = 6.609 ft → −591 ft dall'ostacolo (IMPATTO!)**
> **Risoluzione:**
> 1. **P:** `1013 − 980 = 33 hPa` → `33 · 30 = 990 ft` da sottrarre → `h_ind = 8.000 − 990 = 7.010 ft`
> 2. **I:** `T_ISA(8.000 ft) = 15 − (2 · 8) = −1 °C` → `ΔT = −21 − (−1) = −20 °C`
> 3. **T:** `Δh = 7.010 − 2.000 = 5.010 ft` → `Corr_T = 4 · (−20) · (5.010 / 1000) = −400,8 ≈ −401 ft`
> 4. **O:** `True_Alt = 7.010 − 401 = 6.609 ft` → `6.609 − 7.200 = −591 ft`

### Formule & Errori Rapidi Strumentazione
- **TAS rapida da quota**: `TAS ≈ IAS + (2% ogni 1.000 ft)` *(es. 100 kt a 5.000 ft → 110 kt)*
- **Pressione dinamica (Anemometro)**: `Pd = Ptot − Ps = ½ ρ V²`
- **Ostruzioni Pitot / Statica**:
  - **Pitot + drenaggio bloccati**: in salita **↑** segna di più; in discesa **↓** segna di meno *(come altimetro)*
  - **Pitot bloccato + drenaggio aperto**: indicazione **cade a 0 kt**
  - **Presa statica bloccata (Pitot OK)**: in salita segna **meno** del reale; in discesa segna **più** del reale
- **Errori Bussola**:
  - **ANDS** *(prue E/W)*: **A**ccelerate **N**orth, **D**ecelerate **S**outh
  - **NOSE** *(prue N/S)*: **N**orth **O**pposite (ritarda), **S**outh **E**xaggerates (anticipa)
- **Precessione apparente giroscopio**: `15° · sin(φ) / ora` *(in Italia ~45° ≈ `10,6°/h`)*
- **CDI / VOR**: **1 dot = 2°** (fondo scala = **10°**)
- **Squawk Emergenza**: **7700** Emergenza | **7600** Avaria Radio | **7500** Dirottamento | **7000** VFR EU


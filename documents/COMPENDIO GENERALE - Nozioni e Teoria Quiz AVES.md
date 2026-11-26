# 📚 COMPENDIO GENERALE — NOZIONI & TEORIA PER L'ESAME CTP AVES
### *Guida Integrata e Sistematica di Studio su tutte le 280 Domande della Banca Dati Ufficiale*

> [!ABSTRACT] Finalità e Struttura del Documento
> Questa nota raccoglie e sintetizza organicamente **tutte le nozioni teoriche, le formule matematiche, i riferimenti normativi e i principi operativi** necessari per comprendere e superare l'esame tecnico-professionale del Corso CTP AVES.
> Il testo integra le note di studio individuali presenti nella cartella `[[1. materie]]`, i manuali operativi ICAO, le dispense ufficiali della **4ª Brigata Telecomunicazioni e Sistemi per la D.A. e l'A.V.**, i documenti di **Potere Aerospaziale** e le direttive di **Sicurezza del Volo**.
> 
> Ogni modulo è direttamente correlato alle domande della banca dati del simulatore web (`Sito_Quiz_AVES`), fornendo non solo la risposta corretta, ma soprattutto la **spiegazione logico-deduttiva** per non sbagliare i quesiti d'esame.

---

## 📑 INDICE GENERALE DEI MODULI

1. [[#Modulo 1 — Procedure del Volo & Concetto PBN (ICAO Doc 8168 / Doc 9613)|Modulo 1: Procedure del Volo & Concetto PBN]] *(15 Domande — ID 1-15)*
2. [[#Modulo 2 — Potere Aerospaziale & Operazioni Congiunte|Modulo 2: Potere Aerospaziale & Dottrina NATO]] *(36 Domande — ID 16-51)*
3. [[#Modulo 3 — Sistemi RADAR di Sorveglianza e Difesa Aerea|Modulo 3: Sistemi RADAR & Sensori]] *(16 Domande — ID 52-65, 279, 280)*
4. [[#Modulo 4 — Radiocomunicazioni Aeronautiche & Propagazione E.M.|Modulo 4: Radiocomunicazioni Aeronautiche & Propagazione]] *(20 Domande — ID 66-85)*
5. [[#Modulo 5 — Fondamenti di Matematica & Meccanica Fisica|Modulo 5: Fondamenti di Matematica & Fisica]] *(10 Domande — ID 86-95)*
6. [[#Modulo 6 — Navigazione Aerea Generale e Strumentale|Modulo 6: Navigazione Aerea Generale & Strumentale]] *(35 Domande — ID 96-130)*
7. [[#Modulo 7 — Diritto Aeronautico & Normativa della Navigazione|Modulo 7: Diritto Aeronautico & Regolamentazione]] *(11 Domande — ID 131-141)*
8. [[#Modulo 8 — Sicurezza del Volo (SV) & Fattore Umano (HF)|Modulo 8: Sicurezza del Volo & Fattore Umano]] *(17 Domande — ID 142-158)*
9. [[#Modulo 9 — Traffico Aereo (ATC) & Regole dell'Aria|Modulo 9: Traffico Aereo (ATC) & Regole dell'Aria]] *(20 Domande — ID 159-178)*
10. [[#Modulo 10 — Radiotelefonia & Fraseologia ICAO / OAT|Modulo 10: Radiotelefonia & Fraseologia ICAO/OAT]] *(15 Domande — ID 179-193)*
11. [[#Modulo 11 — Strumentazione di Bordo & Sistemi Pitot-Statici|Modulo 11: Strumentazione di Bordo & Sistemi Giroscopici]] *(18 Domande — ID 194-211)*
12. [[#Modulo 12 — Formulario Rapido & Regole di Calcolo Mentale|Modulo 12: Formulario Rapido & Regole di Calcolo ("Bonus")]] *(6 Domande — ID 212-217)*
13. [[#Modulo 13 — Aerotecnica, Meccanica del Volo & Teoria delle Eliche|Modulo 13: Aerotecnica, Aerodinamica & Eliche]] *(61 Domande — ID 218-278)*

---

## Modulo 1 — Procedure del Volo & Concetto PBN (ICAO Doc 8168 / Doc 9613)
*Riferimenti note vault:* `[[1 - Servizio spazi aerei e procedure strumentali di volo]]`, `[[Acronimi Procedure Strumentali]]`, `[[LP - LPV - LNAV - VNAV]]`.

### 1.1 I Tre Riferimenti di Nord nella Navigazione
In aeronautica la direzione angolare sul piano orizzontale è sempre misurata rispetto a uno di tre riferimenti:
1. **Nord Vero ($NV$ o Geografico)**: la direzione del polo nord geografico terrestre, punto di intersezione dell'asse di rotazione terrestre con la superficie dell'emisfero boreale. È il riferimento fisso delle carte topografiche e delle rotte ortodromiche.
2. **Nord Magnetico ($NM$)**: la direzione verso cui puntano le linee di forza del campo geomagnetico terrestre locale. È il riferimento su cui sono orientate le piste strumentali, i radiofari VOR/TACAN e le radiali. Differisce dal $NV$ per l'angolo di **Declinazione Magnetica** ($\text{VAR}$):
   $$\text{Rotta Magnetica (RM)} = \text{Rotta Vera (RV)} - (\pm \text{VAR})$$
3. **Nord Bussola ($NB$)**: la direzione indicata dall'ago della bussola magnetica di bordo, influenzata dai campi magnetici ferrosi e dagli apparati elettrici del velivolo. Differisce dal $NM$ per l'angolo di **Deviazione Bussola** ($\text{DEV}$):
   $$\text{Rotta Bussola (RB)} = \text{Rotta Magnetica (RM)} - (\pm \text{DEV})$$

### 1.2 Le Quattro Tipologie Fondamentali di Velocità all'Aria (Airspeed)
1. **IAS (Indicated Airspeed - Velocità Indicata)**: la velocità letta direttamente sull'anemometro di bordo. Misura la pressione dinamica ($q = \frac{1}{2}\rho V^2$) senza alcuna correzione per errori strumentali o di densità. È la velocità di riferimento per il pilotaggio (velocità di stallo, flap, manovra).
2. **CAS (Calibrated Airspeed - Velocità Calibrata)**: la IAS corretta per l'errore di posizione delle prese di pressione (tubo di Pitot e prese statiche) e per l'errore meccanico dello strumento.
3. **EAS (Equivalent Airspeed - Velocità Equivalente)**: la CAS corretta per gli effetti di comprimibilità adiabatica dell'aria ad alte velocità/quote (rilevante sopra i 250 kts e FL 100).
4. **TAS (True Airspeed - Velocità Vera)**: l'effettiva velocità di avanzamento dell'aeromobile rispetto alla massa d'aria indisturbata circostante. Si ottiene correggendo la EAS (o CAS) per la densità reale dell'aria ($\rho$) alla quota di volo:
   $$\text{TAS} = \text{EAS} \cdot \sqrt{\frac{\rho_0}{\rho}}$$

### 1.3 Categorie Aeromobili per Procedure Strumentali (PANS-OPS Doc 8168)
La classificazione degli aeromobili ai fini delle procedure di avvicinamento e decollo strumentale si basa esclusivamente sulla **$V_{at}$** (velocità alla soglia pista in configurazione di atterraggio al massimo peso certificato all'atterraggio):
$$V_{at} = 1.3 \times V_{s0} \quad \text{oppure} \quad 1.23 \times V_{s1g}$$
Le categorie ufficiali ICAO sono:
- **Cat A**: $V_{at} < 91 \text{ kts}$
- **Cat B**: $91 \text{ kts} \le V_{at} < 121 \text{ kts}$
- **Cat C**: $121 \text{ kts} \le V_{at} < 141 \text{ kts}$
- **Cat D**: $141 \text{ kts} \le V_{at} < 166 \text{ kts}$
- **Cat E**: $166 \text{ kts} \le V_{at} < 211 \text{ kts}$ (velivoli militari ad altissime prestazioni)
- **Cat H**: Elicotteri
- **Helicopter PinS (Point in Space)**: procedure specifiche per elicotteri basate su navigazione GNSS che terminano in un punto nello spazio visivo.

### 1.4 Radioassistenze Convenzionali: VOR, TACAN, ILS
- **VOR (VHF Omnidirectional Range)**: opera nella gamma 108.000 - 117.950 MHz. Fornisce informazioni di radiale magnetica (azimut a 360°) rispetto alla stazione di terra a tutti gli utenti (civili e militari).
- **TACAN (Tactical Air Navigation)**: sistema militare operante in banda UHF (960 - 1215 MHz).
  > [!IMPORTANT] Civili vs Militari con il TACAN
  > - **Utenti Civili**: possono ricevere **esclusivamente la componente di distanza DME** dal TACAN (se co-locato come VORTAC).
  > - **Utenti Militari**: ricevono dal TACAN sia l'**azimut (radiale magnetica)** sia la **distanza (slant range)**.
- **ILS (Instrument Landing System)**: sistema di avvicinamento di precisione costituito a terra da 3 componenti essenziali:
  1. **Localizer (LOC)**: antenna a fondo pista in banda VHF (108.10 - 111.95 MHz) che fornisce la guida orizzontale sull'asse della pista.
  2. **Glide Path (GP)**: antenna a lato della soglia pista in banda UHF (329.15 - 335.00 MHz) che fornisce la guida verticale (generalmente sentiero di 3°).
  3. **Marker Beacons** (Outer Marker OM, Middle Marker MM, Inner Marker IM) oppure **DME associato** (DME-P) per la telemetria di distanza lungo il sentiero.

### 1.5 Architettura della Procedura di Avvicinamento Strumentale (IAP)
Una IAP si suddivide in **5 segmenti sequenziali**:
1. **Segmento di Arrivo (Arrival)**: connette la rotta en-route con lo IAF (Initial Approach Fix).
2. **Segmento Iniziale (Initial)**: dallo IAF all'IF (Intermediate Fix); manovre di perdita quota e inversione (es. procedura base, procedura a 45°/180°).
3. **Segmento Intermedio (Intermediate)**: dall'IF al FAF (Final Approach Fix); configurazione del velivolo e livellamento per intercettare il sentiero finale.
4. **Segmento Finale (Final)**: dal FAF al MAPt (Missed Approach Point) o alla soglia pista; guida di precisione o non precisione per l'atterraggio.
5. **Segmento di Mancato Avvicinamento (Missed Approach)**: inizia al MAPt se non si acquisiscono i riferimenti visivi richiesti entro la DA/MDA; garantisce la salita sicura fino a quota di attesa/rotta.

> [!NOTE] Definizione di MOC (Minimum Obstacle Clearance)
> La **MOC** è il margine verticale minimo di sicurezza garantito geometricamente rispetto all'ostacolo critico all'interno dell'area di protezione del segmento considerato.

### 1.6 Classificazione delle Procedure di Avvicinamento
- **PA (Precision Approach)**: avvicinamento strumentale che utilizza la guida laterale e la guida verticale di precisione (ILS Cat I, II, III; MLS; GLS GBAS; radar di precisione PAR). Utilizza la **DA/DH (Decision Altitude/Height)**.
- **NPA (Non-Precision Approach)**: avvicinamento che utilizza esclusivamente una guida laterale (VOR, NDB, LOC, RNAV LNAV). Utilizza la **MDA/MDH (Minimum Descent Altitude/Height)**.
- **APV (Approach with Vertical Guidance)**: avvicinamento che dispone di una guida verticale non conforme ai severi requisiti ICAO Annex 10 per i PA (es. Baro-VNAV LNAV/VNAV, LPV SBAS).

### 1.7 Concetto PBN (Performance-Based Navigation - ICAO Doc 9613)
Il PBN sposta la navigazione dal concetto basato sui singoli sensori al suolo a un concetto basato sulle prestazioni di bordo richieste. Si fonda su **tre elementi cardine**:
1. **NAVAID Infrastructure**: l'infrastruttura di radioassistenze a terra (VOR, DME) e costellazioni satellitari (GNSS).
2. **Navigation Specification**: i requisiti tecnici e operativi (es. RNAV 5, RNAV 1, RNP 4, RNP APCH; le specifiche RNP richiedono obbligatoriamente il monitoraggio e l'allerta di prestazione a bordo - OBPMA).
3. **Navigation Application**: l'applicazione operativa delle specifiche alle rotte ATS e alle procedure terminali/avvicinamento.

#### Waypoint: Fly-by vs Fly-over
- **Fly-by**: il sistema di navigazione anticipa la virata per raccordare tangenzialmente la tratta successiva; **non richiede il sorvolo verticale** del punto.
- **Fly-over**: l'aeromobile **deve obbligatoriamente sorvolare la verticale** del punto prima di iniziare la virata.

#### Sistemi di Potenziamento GNSS (Augmentation)
- **ABAS (Aircraft-Based Augmentation System)**: algoritmi interni al ricevitore di bordo come il RAIM (Receiver Autonomous Integrity Monitoring), che necessita di almeno 5 satelliti visibili per rilevare un satellite guasto (fault detection) e 6 per escluderlo (exclusion).
- **SBAS (Satellite-Based Augmentation System)**: stazioni di terra monitorano la costellazione GNSS e inviano correzioni d'integrità e di ritardo ionosferico a satelliti geostazionari (es. EGNOS in Europa, WAAS negli USA), consentendo avvicinamenti APV/LPV fino a 200 ft di altezza minima.
- **GBAS (Ground-Based Augmentation System)**: stazioni di terra locali aeroportuali (VHF Data Broadcast) per avvicinamenti di precisione CAT I/II/III (GLS).

#### Baro-VNAV
Nelle procedure LNAV/VNAV, la guida sul sentiero verticale è generata dall'altimetro barometrico di bordo (Air Data Computer). Pertanto:
- La pendenza reale del sentiero **dipende dalla temperatura esterna**: con temperature molto inferiori a ISA, il sentiero reale si abbassa drasticamente (rischio impatto ostacoli); per questo le schede pubblicano una *Cold Temperature Limit*.

---

## Modulo 2 — Potere Aerospaziale & Operazioni Congiunte
*Riferimenti note vault:* `[[1 - Intro]]`, `[[99 - Domande Esame]]` (in `Potere Aerospaziale`).

### 2.1 I 10 Principi della Guerra
Nella dottrina militare occidentale e nazionale, i principi fondamentali della guerra sono **10**:
1. **Unicità di comando (Unity of Command)**: tutti gli sforzi sono diretti sotto un unico comandante responsabile.
2. **Obiettivo (Objective)**: orientamento costante verso uno scopo strategico chiaro e raggiungibile.
3. **Offensiva (Offensive)**: azione proattiva per conquistare e mantenere l'iniziativa.
4. **Morale (Morale)**: coesione, volontà di combattere e leadership.
5. **Massa (Mass)**: concentrazione di un potere di combattimento decisivo nel punto e momento critico.
6. **Manovra (Manoeuvre)**: movimento flessibile per porre l'avversario in posizione di svantaggio.
7. **Economia delle forze (Economy of Effort)**: impiego oculato delle risorse nei settori secondari.
8. **Sicurezza (Security)**: prevenzione della sorpresa nemica e protezione delle forze.
9. **Sorpresa (Surprise)**: colpire l'avversario in un luogo, tempo o modo inaspettato.
10. **Semplicità (Simplicity)**: ordini chiari, diretti e piani non complessi.

### 2.2 I Grandi Teorici del Potere Aereo
| Teorico | Visione e Principi Chiave | Elementi Distintivi |
| :--- | :--- | :--- |
| **Giulio Douhet** | Il dominio dell'aria è indipendente e decisivo. Azioni offensive più efficienti delle difensive. Colpire risorse morali e materiali avversario (anche città e centri popolati). Impiego in massa. Guerra di sorpresa. | *"Distruggere nidi e uova"* (distruggere gli aerei nemici al suolo e le loro fabbriche prima che decollino). |
| **Billy Mitchell** | Aviazione ha ruolo strategico dominante; forza aerea indipendente ma cooperante. Impiego in massa su centri vitali. Valorizza la caccia e la difesa aerea; convivono tutte le specialità. | **Non si bombardano le città inermi**; paralisi dei nodi industriali e militari. |
| **Amedeo Mecozzi** | Critica Douhet e il bombardamento terroristico sugli inermi. La guerra non è lotta tra sole due forze aeree: fondamentale la **cooperazione aeroterrestre e aeronavale**. | Nascita dell'**Aviazione d'Assalto** (volo a bassissima quota, supporto tattico ravvicinato, velivoli flessibili). |
| **John Warden** | **Teoria dei 5 cerchi concentrici** per identificare e neutralizzare il Centro di Gravità (CoG) avversario: 1. Leadership (centro), 2. Processi organici (energia/comunicazioni), 3. Infrastrutture, 4. Popolazione, 5. Forze combattenti (cerchio esterno). | Attacco parallelo (colpire simultaneamente tutti i cerchi vitali per indurre la paralisi sistemica). |
| **John Boyd** | **Ciclo OODA**: *Observe (Osservazione) $\rightarrow$ Orient (Orientamento) $\rightarrow$ Decide (Decisione) $\rightarrow$ Act (Azione)*. | Chi completa il ciclo decisionale più velocemente paralizza il processo mentale avversario; alla base del ciclo dell'ATO. |

### 2.3 Livelli di Controllo dell'Aria e Livelli d'Uso del Potere Aereo
I tre livelli dottrinali di controllo dell'aria sono:
1. **Situazione Aerea Favorevole (Favourable Air Situation)**: l'entità delle forze aeree nemiche non è tale da pregiudicare seriamente le operazioni terrestri, navali o aeree amiche.
2. **Superiorità Aerea (Air Superiority)**: grado di predominio nella battaglia aerea che consente la conduzione delle operazioni da parte delle forze amiche senza interferenze proibitive da parte della minaccia.
3. **Supremazia Aerea (Air Supremacy)**: il massimo livello di controllo, in cui l'aviazione nemica è completamente incapace di opporre alcuna efficace interferenza.

I livelli d'impiego del potere aereo sono: **Strategico, Operativo e Tattico**.

### 2.4 Relazioni di Comando e Controllo (C2)
- **Full Command (Comando Pieno)**: autorità militare e responsabilità integrale assegnata a un comandante. **Esiste esclusivamente in ambito nazionale** e non viene mai delegato a comandi alleati o multinazionali.
- **OPCOM (Operational Command)**: autorità di assegnare missioni o compiti, schierare unità, riassegnare forze.
- **OPCON (Operational Control)**: autorità delegata di dirigere le forze assegnate per compiere missioni o compiti specifici, solitamente limitati nel tempo, funzione o spazio.
- **TACOM (Tactical Command)**: autorità di delegare compiti specifici alle forze assegnate.
- **TACON (Tactical Control)**: direzione e controllo dettagliato e locale dei movimenti o manovre tattiche necessarie per assolvere la missione. Ha **carattere di temporaneità** e si applica a compiti specifici.

Le 4 funzioni operative del C2 delle forze aerotattiche:
$$\text{Allotment} \longrightarrow \text{Apportionment} \longrightarrow \text{Allocation} \longrightarrow \text{Tasking}$$

### 2.5 Strutture di Comando e Dottrina NATO
- **NATINAMDS**: *NATO Integrated Air and Missile Defence System*. Sistema integrato e continuo per la sorveglianza e difesa dello spazio aereo alleato contro missili balistici, da crociera e velivoli.
- **CAOC (Combined Air Operations Centre)**: comando tattico/operativo preposto alla pianificazione esecutiva, direzione, coordinamento e controllo in tempo reale delle operazioni aeree della coalizione (es. CAOC Torrejón per il Sud Europa, CAOC Uedem per il Nord).
- **Trattato di Washington (1949)**: composto da **14 articoli**. L'**Articolo 5** stabilisce il principio di **difesa collettiva** (*un attacco armato contro uno Stato membro è considerato un attacco contro tutti*).
- **Core Tasks NATO**: *Collective Defence, Crisis Management, Cooperative Security*.
- **AJP-3.3**: *Allied Joint Doctrine for Air and Space Operations*.

### 2.6 Macro-Operazioni Aeree
- **CSFO (Counter Surface Force Operations)**: operazioni volte a distruggere, neutralizzare o ritardare il potenziale militare di superficie dell'avversario (comprendono *Air Interdiction* e *Close Air Support* - CAS).
- **Strategic Attack**: operazioni offensive mirate a colpire direttamente i centri di gravità avversari (leadership, capacità industriale, C2) indipendentemente dalla linea di contatto terrestre.
- **Air Mobility**: include **Air Transport (AT)** e **Air-to-Air Refuelling (AAR)**. Il trasporto si distingue in *Strategico* (inter-teatro / tra teatri operativi) e *Tattico* (intra-teatro / all'interno del teatro).
- **JPR (Joint Personnel Recovery)**: salvataggio e recupero di personale isolato in territorio ostile articolato in **5 compiti sequenziali**:
  $$\text{Report (Segnalare)} \rightarrow \text{Locate (Localizzare)} \rightarrow \text{Support (Supportare)} \rightarrow \text{Recover (Recuperare)} \rightarrow \text{Reintegrate (Reintegrare)}$$
- **ISR (Intelligence, Surveillance and Reconnaissance)**:
  - *Surveillance*: osservazione sistematica, passiva o attiva, e continuativa nel tempo di uno spazio operativo.
  - *Reconnaissance*: missione mirata, specifica e puntuale per raccogliere informazioni su un obiettivo definito.
- **ACP (Airspace Control Plan)**: documento fondamentale emanato dall'Airspace Control Authority per disciplinare la gestione dello spazio aereo, le procedure di coordinamento e l'identificazione degli assetti per prevenire il fratricidio (*blue on blue*).
- **Flusso Giornaliero Voli Reparti Difesa**:
  - I reparti inviano la **PVG (Programmazione Voli Giornaliera)** alla Sezione ATCC del COA.
  - Il COA approva le missioni con il messaggio **AUTMIX**.
  - Eventuali variazioni all'ATO in corso sono emanate dall'ATO Coordinator con messaggio **ATM (Air Tasking Message)**.
  - I voli tattici **SAT (Servizio Aereo Tattico)** sono coordinati in tempo reale tramite la Scramble Agency e i controllori radar/ATC.

---

## Modulo 3 — Sistemi RADAR di Sorveglianza e Difesa Aerea
*Riferimenti note vault:* `[[99 - Domande Radar]]`.

### 3.1 Concetti Generali del RADAR
Acronimo: **RAdio Detection And Ranging** (rivelazione in azimut e misura della distanza tramite onde radio a radiofrequenza).
- **Azimut ($\theta$)**: angolo orizzontale compreso tra il Nord geografico (o magnetico) e la congiungente radar-bersaglio ($0° - 360°$).
- **Distanza obliqua (Slant Range - $D$)**: misurata tramite il tempo di propagazione $\Delta t$ impiegato dall'impulso radio per raggiungere il bersaglio e tornare all'antenna:
  $$D = \frac{c \cdot \Delta t}{2}$$
  dove $c = 3 \cdot 10^8 \text{ m/s} = 300.000 \text{ km/s}$.

### 3.2 PSR (Primary) vs SSR (Secondary)
- **PSR (Primary Surveillance Radar)**:
  - Emette impulsi ad altissima potenza e riceve l'**eco riflesso passivamente** dalla sagoma metallica del velivolo.
  - È totalmente autonomo (non richiede apparati a bordo), ma non fornisce quota (se 2D) o identità.
- **SSR (Secondary Surveillance Radar)**:
  - Sistema cooperativo. Il radar di terra trasmette una coppia di impulsi codificati di **interrogazione a 1030 MHz**.
  - Il **transponder** di bordo risponde trasmettendo un segnale a **1090 MHz** contenente codice di identificazione (Mode A), quota barometrica (Mode C) o telemetria selettiva e dati di volo (Mode S).

### 3.3 Parametri di Emissione del Radar ad Impulsi
- **$\tau$ (Tau - Pulse Width)**: durata temporale del singolo impulso a radiofrequenza trasmesso (ordine dei microsecondi). Determina la risoluzione in distanza del radar ($\Delta R = \frac{c \cdot \tau}{2}$).
- **PRT (Pulse Repetition Time)**: intervallo di tempo tra l'inizio di due impulsi consecutivi. È composto dal tempo di emissione ($\tau$) e dal tempo di ascolto/ricezione ($T_A$):
  $$\text{PRT} = \tau + T_A$$
- **PRF (Pulse Repetition Frequency)**: numero di impulsi trasmessi al secondo:
  $$\text{PRF} = \frac{1}{\text{PRT}}$$
- **Portata Massima Non Ambigua ($R_{\max}$)**: la massima distanza a cui un bersaglio può trovarsi affinché il suo eco ritorni prima dell'emissione dell'impulso successivo:
  $$R_{\max} = \frac{c \cdot \text{PRT}}{2} = \frac{c}{2 \cdot \text{PRF}}$$
- **DUPLEXER**: commutatore elettronico rapido a gas o a stato solido che isola il sensibilissimo ricevitore (RX) durante la potente trasmissione (TX) e lo ricollega all'antenna durante il tempo di ascolto, consentendo di usare una sola antenna sia per trasmettere che per ricevere.

### 3.4 Geometria dei Fasci d'Antenna e Copertura Spaziale
- **Antenna a Paraboloide (Radar 2D)**:
  - Non possiede capacità tridimensionale intrinseca.
  - Per coprire contemporaneamente quote basse a lungo raggio e quote elevate a corto raggio, modella il lobo di radiazione secondo la legge a **cosecante quadra ($\text{cosec}^2$)**, in modo che la potenza ricevuta da un aereo che vola a quota costante sia indipendente dalla distanza.
  - Genera un **fascio a ventaglio (fan beam)**, largo in verticale e stretto in azimut: **NON consente la determinazione dell'elevazione/quota** (Slide 17).
- **Antenna Phased Array (Radar 3D)**:
  - Antenna a reticolo di fase composta da centinaia di dipoli/moduli radianti indipendenti. Agendo sullo sfasamento elettronico tra i singoli elementi, orienta istantaneamente il lobo nello spazio senza movimento meccanico verticale.
  - Genera **fasci a matita (pencil beam)**, estremamente stretti sia in azimut che in elevazione: **PERMETTE la misura precisa dell'elevazione e della quota**, ma richiede di coprire il volume di ricerca posizionando il fascio su più angoli differenti (scansione verticale elettronica su diversi settori Short Range e Long Range fino a 20° di elevazione - Slide 22).

> [!IMPORTANT] Sintesi Slide 17 & Slide 22 (Domande Radar d'Esame)
> - **Slide 17 (Differenza Fasci)**: Il fascio a ventaglio non consente la determinazione dell'elevazione del bersaglio; il fascio a matita (pencil beam) permette la misura precisa dell'elevazione ma richiede di coprire il volume di ricerca con diverse posizioni angolari del fascio.
> - **Slide 22 (Numero Fasci Phased Array vs Cosec²)**: Con l'antenna Phased Array ho bisogno di **PIÙ FASCI a matita** (scansionati elettronicamente a diverse elevazioni e portate) per coprire in altezza lo stesso volume operativo coperto dal singolo lobo conformato a $\text{cosec}^2$ del paraboloide.

- **Tecnica Monopulse**: confrontando in fase e ampiezza i segnali ricevuti simultaneamente da lobi leggermente disassati (canale somma $\Sigma$ e canale differenza $\Delta$) con **un solo impulso riflesso**, il ricevitore estrae istantaneamente range, azimut ed elevazione/quota del bersaglio con altissima precisione. (**Domanda Quiz:** *In cosa consiste la tecnica di tracciamento radar 'Monopulse'?* -> *Permette di determinare con grande precisione l'angolo, quota e azimut del bersaglio confrontando i segnali ricevuti da un singolo impulso*).

---

## Modulo 4 — Radiocomunicazioni Aeronautiche & Propagazione E.M.

### 4.1 Propagazione delle Onde E.M. e Portata Ottica
- Le onde radio nelle bande **VHF (Very High Frequency: 30 - 300 MHz)** e **UHF (Ultra High Frequency: 300 - 3000 MHz)** si propagano essenzialmente in linea di vista ottica diretta (LOS - *Line of Sight*), non seguendo la curvatura terrestre.
- **Portata Ottica Radio**: è direttamente proporzionale alla radice quadrata dell'altezza delle antenne (stazione di terra e velivolo):
  $$D (\text{km}) = 3.57 \cdot (\sqrt{h_1} + \sqrt{h_2})$$
  *(con altezze $h_1, h_2$ espresse in metri)*.
  *(Formula pratica anglosassone: $D (\text{NM}) = 1.23 \cdot (\sqrt{h_1} + \sqrt{h_2})$ con $h$ in piedi)*.

### 4.2 Comunicazioni Oltre l'Orizzonte (BLOS - Beyond Line Of Sight)
Per comunicare oltre l'orizzonte ottico senza stazioni ripetitrici terrestri si utilizzano:
1. **Banda HF (High Frequency: 3 - 30 MHz, onde corte/decametriche)**: sfrutta la rifrazione e riflessione dell'onda ionosferica da parte degli strati ionizzati dell'alta atmosfera (strati D, E, F1, F2).
2. **SATCOM (Satellite Communications)**: comunicazioni via costellazioni satellitari geostazionarie o LEO (banda L, Inmarsat, Iridium).

### 4.3 Bande di Frequenza e Modulazione in Aeronautica
- **Gamme Standard Assegnate**:
  - **VHF**: $118.000 - 136.975 \text{ MHz}$ (traffico aereo civile GAT e servizi aeroportuali, estesa fino a 156 MHz).
  - **UHF**: $225.000 - 399.975 \text{ MHz}$ (comunicazioni militari tattiche OAT).
- **Modulazione di Ampiezza (AM)**: è lo standard per le trasmissioni fonia VHF/UHF aeronautiche. Modifica l'ampiezza dell'onda portante a radiofrequenza in proporzione all'onda audio del microfono.
  - *Vantaggio della AM*: non ha l'effetto cattura della FM (se due piloti trasmettono assieme in AM si ode un fischio di battimento e frammenti di entrambe le voci, avvisando dell'interferenza; in FM il segnale più forte cancellerebbe completamente il debole senza preavviso).
- **Bande Laterali AM**:
  - Il processo di modulazione genera la frequenza portante ($f_c$) e due bande laterali simmetriche: Upper Sideband ($\text{USB} = f_c + f_m$) e Lower Sideband ($\text{LSB} = f_c - f_m$).
  - Nelle comunicazioni HF si usa la banda laterale unica (**SSB - Single Sideband / USB**), eliminando portante e una banda per dimezzare la larghezza di banda e concentrare tutta la potenza utile.
- **Sicurezza delle Comunicazioni Militari in UHF**:
  - **COMSEC (Communications Security)**: cifratura della voce per impedire l'intercettazione e l'ascolto (crittografia).
  - **TRANSEC (Transmission Security)**: protezione fisica del segnale contro il disturbo elettronico (jamming) mediante salti di frequenza rapidi (*Frequency Hopping*, es. apparati **Have Quick I/II** e SATURN).
- **Apparati Tipici**: apparato aeroportuale **OTE DTR 100**, ricetrasmettitore base per torri di controllo e centri radar operante in VHF/UHF in modulazione AM.

---

## Modulo 5 — Fondamenti di Matematica & Meccanica Fisica

### 5.1 Termodinamica dei Gas
- **Legge di Boyle-Mariotte**: a temperatura costante ($T = \text{cost}$), per una data massa di gas perfetto il volume è inversamente proporzionale alla pressione:
  $$P \cdot V = \text{Costante} \quad \Longleftrightarrow \quad P_1 V_1 = P_2 V_2$$
- **Equazione di Stato dei Gas Perfetti**:
  $$P \cdot V = n \cdot R \cdot T \quad \Longleftrightarrow \quad P = \rho \cdot R_{\text{spec}} \cdot T$$
  dove $P$ è la pressione, $\rho$ la densità, $T$ la temperatura assoluta in Kelvin ($K = °C + 273.15$).

### 5.2 Dinamica del Punto Materiale e Leggi di Newton
1. **Prima Legge (Principio d'Inerzia)**: un corpo mantiene il suo stato di quiete o di moto rettilineo uniforme finché la risultante delle forze agenti su di esso è nulla:
   $$\sum \vec{F} = 0 \Longrightarrow \vec{a} = 0 \quad (\vec{v} = \text{costante})$$
2. **Seconda Legge (Legge Fondamentale della Dinamica)**:
   $$\vec{F} = m \cdot \vec{a} = \frac{d\vec{q}}{dt}$$
3. **Terza Legge (Principio di Azione e Reazione)**: a ogni forza che un corpo A esercita su B corrisponde una forza uguale in modulo e contraria in verso che B esercita su A:
   $$\vec{F}_{AB} = -\vec{F}_{BA}$$
   *(Alla base della spinta dei motori a getto e della portanza alare secondo il principio di deflessione del flusso)*.

### 5.3 Quantità di Moto, Impulso ed Energia
- **Quantità di Moto ($\vec{q}$)**: vettore prodotto della massa per la velocità:
  $$\vec{q} = m \cdot \vec{v} \quad [\text{kg} \cdot \text{m/s}]$$
- **Teorema dell'Impulso**: l'impulso $\vec{I}$ esercitato da una forza costante in un tempo $\Delta t$ è pari alla variazione della quantità di moto del corpo:
  $$\vec{I} = \vec{F} \cdot \Delta t = \Delta \vec{q} = m\vec{v}_2 - m\vec{v}_1$$
- **Lavoro Meccanico ($L$)**: prodotto scalare tra forza costante e spostamento:
  $$L = \vec{F} \cdot \vec{s} = F \cdot s \cdot \cos(\alpha) \quad [\text{Joule}]$$
- **Teorema di Conservazione dell'Energia Meccanica**: in un sistema isolato soggetto a sole forze conservative (es. gravità), la somma dell'energia cinetica ($E_k = \frac{1}{2}mv^2$) e dell'energia potenziale ($E_p = mgh$) rimane costante nel tempo:
  $$E_{\text{tot}} = E_k + E_p = \text{Costante}$$

### 5.4 Meccanica dei Fluidi
- **Legge di Stevino**: la pressione idrostatica esercitata da una colonna di fluido a profondità o quota $h$ è proporzionale alla densità del fluido e all'accelerazione di gravità:
  $$P = P_0 + \rho \cdot g \cdot h$$
- **Principio di Pascal**: la pressione esercitata su un punto qualunque di un fluido incomprimibile racchiuso in un recipiente si trasmette inalterata e con la stessa intensità su tutte le superfici e pareti a contatto con il fluido *(principio dei freni e degli impianti idraulici del velivolo)*.

---

## Modulo 6 — Navigazione Aerea Generale e Strumentale
*Riferimenti note vault:* `[[1 - Fondamenti e Regole di Navigazione]]`, `[[2 - Pianificazione Pre-Volo e Gestione del Rischio]]`, `[[3 - Metodi di Navigazione (Osservata e Stimata)]]`.

### 6.1 Geometria Terrestre e Carte di Navigazione
- **Miglio Nautico (NM - Nautical Mile)**: lunghezza dell'arco di 1 primo di grado ($1'$) di latitudine:
  $$1 \text{ NM} = 1852 \text{ metri} = 1.852 \text{ km}$$
- **Nodo (kt - Knot)**: velocità di 1 miglio nautico all'ora:
  $$1 \text{ kt} = 1 \text{ NM/h} \approx 0.514 \text{ m/s} \approx 1.852 \text{ km/h}$$
- **Rotta Ortodromica (Great Circle Track)**: arco di cerchio massimo che unisce due punti. Rappresenta la **distanza minima** sulla superficie sferica terrestre. Taglia i meridiani con angoli variabili; è una linea curva sulla carta di Mercatore e una retta sulla carta Gnomonica.
- **Rotta Lossodromica (Rhumb Line Track)**: linea che taglia tutti i meridiani con angolo costante. Permette di mantenere una prua costante, ma **non è la distanza minima**. È una linea retta sulla carta conforme di Mercatore.

### 6.2 Altimetria e Q-Codes
- **QNH**: pressione atmosferica rilevata al livello della stazione e ridotta al livello medio del mare (MSL) secondo l'atmosfera standard ISA.
  - Regolando l'altimetro sul QNH: a terra l'altimetro segna l'**elevazione dell'aeroporto**; in volo segna l'**Altitudine (ALT)** sopra il livello del mare.
- **QFE**: pressione atmosferica misurata direttamente al livello del suolo o soglia pista.
  - Regolando l'altimetro sul QFE: a terra l'altimetro segna **0 ft**; in volo segna l'**Altezza (Height)** rispetto all'aerodromo.
  - *Se QFE coincide esattamente con QNH, l'aeroporto si trova esattamente al livello medio del mare (elevazione 0 ft MSL).*
- **QNE (1013.25 hPa / 29.92 inHg)**: regolazione barometrica standard utilizzata al di sopra dell'Altitudine di Transizione (TA). L'altimetro indica il **Livello di Volo (Flight Level - FL)** (es. FL 180 = 18000 ft teorici standard).

> [!CAUTION] Errori Altimetrici Critici (Regole Mnemoniche d'Oro)
> 1. **Dalla Pressione Alta alla Bassa** (*"From High to Low, look out below"*):
>    Volando con altimetro fisso su 1013.25 (o QNH non aggiornato) da un'area di alta pressione a una di bassa pressione, la capsula barometrica si espande: **l'altimetro indicherà una quota più alta di quella reale** $\rightarrow$ il velivolo vola pericolosamente più vicino al suolo di quanto crede il pilota!
> 2. **Dall'Aria Calda all'Aria Fredda** (*"From Hot to Cold, look out below"*):
>    In aria fredda la colonna d'aria si contrae e le superfici isobariche si abbassano: **l'altimetro indica una quota superiore a quella effettiva** $\rightarrow$ rischio impatto ostacoli!

### 6.3 Triangolo delle Velocità
La navigazione stimata (*Dead Reckoning*) si basa sulla risoluzione vettoriale:
$$\vec{GS} = \vec{TAS} + \vec{Vento}$$
- **Prua (Heading)**: direzione verso cui punta il muso del velivolo (lungo la quale si sviluppa la $\vec{TAS}$).
- **Rotta (Track)**: traiettoria effettiva percorsa al suolo dal baricentro del velivolo (lungo la quale si misura la $\vec{GS}$).
- **Angolo di Deriva (Drift Angle - WCA)**: differenza angolare tra Prua e Rotta causata dalla componente trasversale del vento.

### 6.4 Il Sistema DME (Distance Measuring Equipment)
- Opera in banda UHF ($960 - 1215 \text{ MHz}$) mediante coppie di impulsi d'interrogazione da bordo e risposta da terra con ritardo fisso di $50 \mu\text{s}$.
- Misura lo **Slant Range** (distanza obliqua in linea retta tra l'antenna del velivolo e la stazione al suolo).
- Se il velivolo sorvola esattamente la verticale della stazione a FL 60 ($6000 \text{ ft} \approx 1 \text{ NM}$), il DME **non indicherà mai zero**, bensì indicherà **1.0 NM** (la quota dell'aeromobile)!

### 6.5 Tempo e Fusi Orari
- La Terra compie una rotazione di 360° in 24 ore $\rightarrow 15° \text{ di longitudine} = 1 \text{ ora di tempo}$ ($1° = 4 \text{ minuti}$).
- **Zone Time (ZT)**: l'ora civile assegnata al meridiano centrale del fuso orario di 15°.
- In Italia (fuso centrale $15°E$):
  - Inverno (Ora solare): $\text{Locale} = \text{UTC} + 1 \text{ ora}$.
  - Estate (Ora legale / Daylight Saving): $\text{Locale} = \text{UTC} + 2 \text{ ore}$.

---

## Modulo 7 — Diritto Aeronautico & Normativa della Navigazione
*Riferimenti note vault:* `[[1 - Introduzione al diritto aeronautico]]`, `[[2 - Gli Aeromobile e il Personale Aeronautico]]`, `[[3 - Documentazione degli Aeromobili]]`.

### 7.1 L'Articolo 743 del Codice della Navigazione
Fornisce la definizione giuridica formale di aeromobile fondata su **tre pilastri essenziali**:
1. **Mezzo**: qualsiasi macchina destinata al trasporto per aria di persone o cose.
2. **Ambiente**: la navigazione nell'aria / atmosfera.
3. **Comandante**: la presenza o designazione di un soggetto responsabile della condotta e sicurezza del mezzo.

### 7.2 Distinzione Giuridica degli Aeromobili (Art. 744 C.N.)
Gli aeromobili si distinguono in due sole grandi categorie:
1. **Aeromobili di Stato**:
   - Aeromobili militari delle Forze Armate.
   - Aeromobili di proprietà dello Stato impiegati in servizi istituzionali di Polizia, Dogana, Corpo Nazionale dei Vigili del Fuoco.
2. **Aeromobili Civili**: tutti gli altri aeromobili, commerciali, privati, da lavoro aereo o da diporto.

### 7.3 Enti e Organizzazioni Aeronautiche
- **ICAO (International Civil Aviation Organization)**: agenzia specializzata ONU istituita dalla Convenzione di Chicago (1944). Stabilisce gli standard e le pratiche raccomandate (SARPs) contenute in **19 Annessi tecnici**.
- **ENAC (Ente Nazionale per l'Aviazione Civile)**: autorità unica nazionale di regolazione tecnica, certificazione, sorveglianza e licensing nel settore dell'aviazione civile in Italia.
- **ENAV S.p.A.** (ora ENAV Group): società di gestione e fornitura dei servizi del traffico e navigazione aerea civile in Italia.

### 7.4 Investigazione di Sicurezza del Volo (Art. 826 e ss. C.N. e D.P.R. 553/1997)
- In caso di incidente o inconveniente grave che coinvolga un **aeromobile militare**, l'inchiesta è condotta **esclusivamente dagli organi competenti dell'Amministrazione della Difesa** (Ispettorato Sicurezza Volo dell'Aeronautica Militare / Commissione d'Inchiesta Militare).
- **Finalità esclusiva dell'investigazione SV**: determinare le cause e i fattori contribuenti al solo scopo di **prevenzione**, senza finalità di imputazione di colpa o responsabilità giuridica.

---

## Modulo 8 — Sicurezza del Volo (SV) & Fattore Umano (HF)
*Riferimenti note vault:* `[[1 - Concetti Base]]` (in `Fattore Umano`), `[[2 - Decision Making]]`.

### 8.1 Principi Cardine della Sicurezza del Volo
- **Scopo fondamentale**: identificare i pericoli, gestire i rischi e **interrompere la catena degli eventi** prima che si trasformi in incidente.
- **Le Tre Ragioni della Prevenzione**:
  1. *Umana*: salvaguardia della vita e dell'incolumità del personale.
  2. *Economica*: protezione degli ingenti investimenti finanziari dei velivoli e delle infrastrutture.
  3. *Operativa*: preservazione della capacità di combattimento e prontezza della missione.
- **Just Culture**: cultura aziendale in cui gli operatori sono incoraggiati a riportare errori e criticità senza timore di punizioni, purché non si tratti di dolo o colpa grave.
- **Cultura della Sicurezza Volo**: *è innescata al vertice e misurata alla base*. La leadership (Top Management) stabilisce la politica, alloca le risorse e promuove l'etica della sicurezza, ma la sua reale efficacia viene misurata e verificata sul campo (alla base) attraverso la trasparenza dei report operativi, il rispetto spontaneo delle procedure e la proattività degli equipaggi.
- **I Pilastri del FSMS (Flight Safety Management System)**:
  1. *Safety Policy* (Politica e obiettivi di sicurezza)
  2. *Safety Risk Management* (Identificazione dei pericoli e gestione del rischio)
  3. *Safety Assurance* (Valutazione, audit e monitoraggio continuo)
  4. *Safety Promotion* (Addestramento, comunicazione e divulgazione)
  5. *Accident Investigation e Post Accident Management* (Integrazione fondamentale in ambito militare/AVES per l'analisi e gestione post-evento)

### 8.2 Modelli Concettuali di Human Factors
- **Modello SHELL (Edwards / Hawkins)**:
  - **S**oftware: procedure, normative, checklist, manuali, carte.
  - **H**ardware: aeromobile, comandi, avionica, ergonomia.
  - **E**nvironment: condizioni meteo, rumore, vibrazioni, cabina, notte.
  - **L**iveware: l'operatore umano al centro del sistema (limiti fisiologici e cognitivi).
  - **L-L (Liveware-Liveware)**: le relazioni interpersonali, lavoro di squadra, CRM, coordinamento pilota-controllore.
- **Modello di Reason ("Swiss Cheese Model")**:
  Gli incidenti non nascono da un singolo errore isolato, ma dal temporaneo **allineamento delle falle** presenti nelle barriere difensive multilivello. Le falle si dividono in:
  - *Errori Attivi (Active Failures)*: commessi dagli operatori a contatto diretto con la macchina (piloti, tecnici, controllori).
  - *Condizioni Latenti (Latent Conditions)*: difetti strutturali, carenze addestrative o procedurali originate dalle scelte organizzative e manageriali.

### 8.3 Situational Awareness (SA - Mica Endsley)
La percezione della situazione si articola in **3 livelli gerarchici**:
1. **Livello 1 - Percezione**: rilevare gli elementi critici nell'ambiente (lettura strumenti, avvisi radio, traffico visivo).
2. **Livello 2 - Comprensione**: integrare le informazioni percepite per capire cosa sta accadendo (significato tattico).
3. **Livello 3 - Proiezione**: anticipare gli sviluppi futuri e l'evoluzione della situazione nel tempo immediato.

### 8.4 Euristiche e Bias Cognitivi
- **Bias di conferma**: tendenza a cercare, notare e ricordare solo le informazioni che confermano la propria ipotesi iniziale ignorando i segnali d'allarme contrari.
- **Planar Continuity (Get-there-itis)**: ostinazione inconscia a voler completare il piano di volo originario nonostante il deterioramento critico delle condizioni meteo o tecniche.
- **Legge di Yerkes-Dodson (Arousal vs Performance)**:
  La prestazione cresce con l'aumento dell'attivazione emotiva/stress fino a un livello ottimale; al di sopra di tale soglia, un'ulteriore eccitazione/panico causa il tracollo delle funzioni cognitive (*tunnel vision*, paralisi decisionale).

### 8.5 Illusioni Vestibolari e Disorientamento Spaziale
- L'orecchio interno contiene i **canali semicircolari** (accelerazioni angolari) e gli **otoliti** (accelerazioni lineari e gravità).
- In assenza di visibilità esterna (volo IMC/notturno), le accelerazioni prolungate o le forze centrifughe ingannano i sensori vestibolari:
  - *Spirale del Cimitero (Graveyard Spiral)*: il pilota non percepisce una virata continua e, tentando di correggere la discesa cabrando, stringe la virata precipitando.
  - *Illusione Somatogravica*: una forte accelerazione lineare in decollo viene scambiata per una forte cabrata, inducendo il pilota a spingere il muso verso il terreno.
  > [!TIP] Unico Rimedio al Disorientamento Spaziale
  > Ignorare completamente le sensazioni corporee (*seat-of-the-pants*) e affidarsi esclusivamente al **Cross-Check rapido e metodico degli strumenti giroscopici**.

---

## Modulo 9 — Traffico Aereo (ATC) & Regole dell'Aria
*Riferimenti note vault:* `[[1 - 🏢 Organi Principali]]`, `[[2 - 🛫 Aeroporti]]`, `[[2.1 - 🛑 Segnaletica Aeroportuale, Piste e Taxiway]]`, `[[3 - 🧭 Servizi Navigazione Aerea]]`, `[[4 - 📦 Classificazione Degli Spazi Aerei]]`, `[[5 - 💨 Regole dell'aria]]`.

### 9.1 Classificazione ICAO degli Spazi Aerei
Gli spazi aerei sono suddivisi nelle classi da **A a G**:
- **Spazio Aereo Italiano Superiore**: compreso tra **FL 195 (escluso) e FL 660 (compreso)** è classificato come **Classe C**.
  - In Classe C: sono ammessi sia voli IFR sia VFR; tutti i voli sono soggetti ad autorizzazione ATC; i voli IFR sono separati tra loro e dai VFR; i voli VFR ricevono informazioni sul traffico rispetto agli altri VFR.

### 9.2 Struttura dei Volumi di Spazio Aereo ATS
- **CTR (Control Zone)**: spazio aereo controllato che si estende **dalla superficie del suolo/acqua (SFC)** verso l'alto fino a un limite specificato, a protezione dei raccordi terminali aeroportuali.
- **TMA (Terminal Control Area)**: spazio aereo controllato posto alla confluenza di rotte ATS e nelle vicinanze di uno o più aeroporti maggiori; ha una **base ad altitudine positiva** (non parte dal suolo).
- **CTA (Control Area)**: spazio aereo controllato en-route che include le aerovie (AWY).
- **ATZ (Aerodrome Traffic Zone)**: volume cilindrico di dimensioni ridotte posto a protezione specifica del circuito visivo e del traffico d'aerodromo.

### 9.3 Servizi della Navigazione Aerea (ANS)
1. **Servizio di Controllo del Traffico Aereo (ATC)**: diviso in TWR (Controllo di Aerodromo), APP (Controllo di Avvicinamento), ACC (Centro di Controllo d'Area).
2. **Servizio Informazioni Volo (FIS)**: fornisce notizie, avvisi meteo e informazioni utili alla sicurezza del volo.
3. **Servizio di Allarme (ALRS)**: notifica agli organismi di Search and Rescue (SAR/RCC) le situazioni di emergenza. Le tre fasi canoniche sono:
   - **INCERFA (Uncertainty Phase - Incertezza)**: mancata comunicazione entro 30 minuti o mancato arrivo.
   - **ALERFA (Alert Phase - Allarme)**: tentativi di contatto falliti o sicurezza compromessa.
   - **DETRESFA (Distress Phase - Soccorso)**: certezza o fondato timore che il velivolo sia in grave e imminente pericolo o abbia fatto naufragio/incidente.

### 9.4 Diritto di Precedenza in Volo
- **Aeromobili convergenti a circa 90° alla stessa quota**: l'aeromobile che ha l'altro alla propria destra deve dare la precedenza (*chi viene da destra ha la precedenza*).
- **Rotte frontali di collisione (Head-on)**: entrambi gli aeromobili devono virare immediatamente a destra.
- **Fase di Atterraggio**: l'aeromobile che si trova a quota inferiore sul sentiero finale ha sempre la precedenza su quelli a quote superiori.

### 9.5 Segnaletica e Luci Aeroportuali
- **Pista di Volo (Runway)**: strisce e scritte di colore **BIANCO**.
  - Luci bordo pista: bianche.
  - Luci testata/soglia pista: verdi.
  - Luci fine pista: rosse.
- **Vie di Rullaggio (Taxiway)**: linee continue e tratteggiate di colore **GIALLO**.
  - Luci bordo taxiway: blu.
  - Luci asse centrale taxiway: verdi.
- **Aeroporti a Uso Misto (Promiscuo)**: basi militari dell'Aeronautica aperte stabilmente o previa convenzione all'aviazione civile commerciale e generale.

---

## Modulo 10 — Radiotelefonia & Fraseologia ICAO / OAT
*Riferimenti note vault:* `[[1 - 🎙️ Introduzione alla Radiotelefonia e Fraseologia ICAO]]`, `[[2 - 🚨 Emergenze e Urgenze]]`.

### 10.1 Chiamate di Emergenza e Urgenza
- **MAYDAY** (ripetuto tre volte all'inizio della trasmissione): segnale internazionale di **EMERGENZA**. Dichiara che il velivolo è minacciato da un pericolo grave e imminente e richiede assistenza immediata (avaria totale motori, incendio a bordo, cedimento strutturale). Ha priorità assoluta su qualsiasi altra comunicazione.
- **PAN PAN** (ripetuto tre volte): segnale internazionale di **URGENZA**. Dichiara che la sicurezza del velivolo o di persone a bordo è compromessa, ma non sussiste un pericolo grave o immediato che imponga l'abbandono del mezzo (es. passeggero colto da infarto, avaria a un generatore elettrico secondario, perdita temporanea dell'orientamento con autonomia sufficiente).

### 10.2 Scala di Comprensibilità delle Comunicazioni (Readability Scale)
Valutazione standard da 1 a 5:
- **1**: *Unreadable* (Totalmente incomprensibile)
- **2**: *Readable now and then* (Comprensibile a tratti / discontinuo)
- **3**: *Readable but with difficulty* (Comprensibile con difficoltà)
- **4**: *Readable* (Comprensibile / chiaro)
- **5**: *Perfectly readable* (Perfettamente comprensibile / forte e chiaro)

### 10.3 Regole di Trasmissione dei Numeri
- Cifre trasmesse singolarmente per: prue radar (es. Heading 090 = *"Heading zero niner zero"*), livelli di volo (es. FL 180 = *"Flight level one eight zero"*), frequenze radio (es. 122.85 = *"One two two decimal eight five"*), QNH (es. 1012 = *"QNH one zero one two"*).
- Migliaia e centinaia piene espresse in parole: quota 5000 ft = *"Altitude five thousand"*, 800 ft = *"Eight hundred"*.

### 10.4 Obbligo di Readback (Ripetizione delle Istruzioni)
Devono essere tassativamente ripetute dal pilota le autorizzazioni relative a:
- Pista in uso, autorizzazioni a entrare, atterrare, decollare, attraversare (*cross*), attendere fuori (*hold short*).
- Assegnazione di quote, livelli di volo, prue radar, velocità.
- Valore di regolazione altimetrica (QNH/QFE).
- Codici transponder SSR assegnati.

---

## Modulo 11 — Strumentazione di Bordo & Sistemi Pitot-Statici
*Riferimenti note vault:* `[[1 - Avionica e Sistemi di Bordo]]`, `[[2 - Esercizi altimetria e correzioni]]`.

### 11.1 Strumenti Anobarometrici a Capsula
Operano sulle differenze di pressione captate dal sistema Pitot-Statico:
1. **Anemometro (Airspeed Indicator - ASI)**:
   - È l'**unico strumento collegato contemporaneamente sia alla pressione totale (Tubo di Pitot) sia alla pressione statica**.
   - Misura la pressione dinamica ($q = P_{\text{tot}} - P_{\text{statica}} = \frac{1}{2}\rho V^2$) all'interno di una capsula manometrica deformabile.
2. **Altimetro**:
   - Collegato **esclusivamente alle prese statiche**.
   - Contiene una capsula aneroide sigillata sotto vuoto. Al diminuire della pressione statica (salita), la capsula si dilata azionando gli indici di quota.
3. **Variometro (Vertical Speed Indicator - VSI)**:
   - Collegato **esclusivamente alle prese statiche**, ma con una perdita calibrata (*calibrated leak* / strozzatura) tra l'interno della capsula e la cassa dello strumento. Misura il rateo differenziale di salita/discesa in ft/min.

> [!CAUTION] Diagnosi Avarie Prese di Pressione
> - **Ostruzione del Tubo di Pitot (foro frontale ghiacciato con foro di spurgo ostruito)**: l'anemometro resta intrappolato con la pressione interna; **in salita segnerà un aumento fasullo di velocità comportandosi da altimetro**!
> - **Ostruzione delle Prese Statiche**: l'altimetro si blocca alla quota dell'ostruzione, il variometro si azzera permanentemente, l'anemometro indica velocità errata.

### 11.2 Strumenti Giroscopici
Sfruttano un rotore pesante che ruota ad altissima velocità azionato pneumaticamente o elettricamente. I due principi fisici cardine sono:
1. **Rigidità nello Spazio (Inerzia Giroscopica)**: tendenza dell'asse di rotazione del rotore a mantenere la propria orientazione fissa nello spazio inerziale universale.
2. **Precessione Giroscopica**: quando si applica una forza per deflettere l'asse di rotazione del giroscopio, la reazione risultante si manifesta spostata di **90° in avanti nella direzione di rotazione**.

#### I Tre Strumenti Giroscopici Primari
- **Orizzonte Artificiale (Attitude Indicator - AI)**:
  - Giroscopio con asse di rotazione verticale montato su due anelli cardanici (gimbals).
  - Mostra l'assetto di beccheggio e rollio rispetto all'orizzonte terrestre.
  - In volo livellato non accelerato segna 0° di beccheggio e banchina.
  - *Gimbal Limits*: se il velivolo supera i limiti angolari meccanici degli anelli (es. oltre 60°-70° in beccheggio o 100° in rollio su giroscopi convenzionali), il giroscopio entra in ribaltamento (*tumbling*) e deve essere bloccato e riallineato tramite la ghiera di caging.
- **Girobussola (Directional Gyro - DG)**:
  - Giroscopio ad asse di rotazione orizzontale privo di elemento magnetico proprio.
  - Non risente delle accelerazioni e delle virate che disturbano la bussola magnetica, ma è soggetto alla **deriva di precessione** (circa 3° ogni 15 minuti causata dalla rotazione terrestre e dagli attriti meccanici).
  - **Deve essere verificato e riallineato manualmente con la bussola magnetica** in volo orizzontale rettilineo non accelerato.
- **Virosbandometro (Turn and Slip Indicator) / Turn Coordinator**:
  - Il virosbandometro misura il rateo di virata (beccheggio dell'asse del giroscopio a 1 grado di libertà).
  - La pallina (inclinometro/sbandometro) indica la coordinazione della virata: se la pallina è al centro, la forza centrifuga e la componente di peso sono bilanciate (virata corretta); se la pallina è all'interno della virata si ha una **scivolata** (*slip* - insufficiente piede), se all'esterno si ha una **derapata** (*skid* - troppo piede).

---

## Modulo 12 — Formulario Rapido & Regole di Calcolo Mentale ("Bonus")
*Regole pratiche indispensabili per risolvere rapidamente i quesiti numerici dell'esame.*

### 1. Componente Laterale del Vento (Crosswind)
$$\text{Crosswind} = V_{\text{vento}} \cdot \sin(\alpha)$$
*(dove $\alpha$ è la differenza angolare tra la direzione di provenienza del vento e l'asse della pista o rotta)*.
> [!TIP] Regola Mnemonica dell'Orologio per il Vento Trasversale
> - Differenza $30°$: moltiplica per $0.5$ (50% del vento totale)
> - Differenza $45°$: moltiplica per $0.7$ (70% del vento totale)
> - Differenza $60°$ o più: moltiplica per $1.0$ (100% del vento totale)

### 2. Relazione Empirica TAS - IAS con la Quota
La densità dell'aria diminuisce con la quota, quindi per una data pressione dinamica (IAS) la velocità vera (TAS) aumenta di circa il **2% ogni 1000 ft**:
$$\text{TAS} \approx \text{IAS} + \frac{\text{FL}}{2}$$
*Esempio*: a FL 100 con $\text{IAS} = 150 \text{ kts} \Longrightarrow \text{TAS} \approx 150 + \frac{100}{2} = 150 + 50 = 200 \text{ kts}$.

### 3. Velocità Locale del Suono ($LSS$)
La velocità del suono nei gas ideali dipende **esclusivamente dalla temperatura assoluta $T$ in Kelvin**:
$$\text{LSS (in nodi)} = 38.94 \cdot \sqrt{T} \quad (T = 273.15 + t°C)$$
*Al livello del mare in condizioni ISA standard ($+15°C \rightarrow T = 288.15 K$)*:
$$\text{LSS} = 38.94 \cdot \sqrt{288.15} \approx 661.5 \text{ nodi} \approx 1225 \text{ km/h}$$

### 4. Rateo di Discesa su Sentiero Standard di 3° (ft/min)
$$\text{Rateo di Discesa (ft/min)} \approx \text{GS (kts)} \times 5 \quad (\text{oppure } \text{GS} \times 5.3)$$
*Esempi*:
- $\text{GS} = 120 \text{ kts} \Longrightarrow 120 \times 5 = 600 \text{ ft/min}$.
- $\text{GS} = 140 \text{ kts} \Longrightarrow 140 \times 5 = 700 \text{ ft/min}$.

### 5. Rateo Variometrico su Pendenza Percentuale (%)
$$\text{Rateo (ft/min)} = \text{GS (kts)} \times \text{Gradiente \%}$$
*Esempio*: velivolo a $\text{GS} = 100 \text{ kts}$ con pendenza di salita del $5\% \Longrightarrow 100 \times 5 = 500 \text{ ft/min}$.

### 6. Virata Standard (Rate 1 / Standard Rate Turn)
- **Rateo Angolare**: **$3°$ al secondo** (il velivolo compie una virata di $360°$ in esattamente $120 \text{ secondi} = 2 \text{ minuti}$).
- Inversione di rotta di $180°$: impiega esattamente **$60 \text{ secondi}$** ($1 \text{ minuto}$).
- Tempo per virare di un generico angolo $\Delta \alpha$:
  $$\text{Tempo (s)} = \frac{\Delta \alpha}{3°/\text{s}}$$
  *Esempio*: variazione prua di $30° \Longrightarrow \frac{30}{3} = 10 \text{ secondi}$.

---

## Modulo 13 — Aerotecnica, Meccanica del Volo & Teoria delle Eliche
*Riferimenti note vault:* `[[1 - Intro e principi fondamentali]]`, `[[2 - Classificazione degli aeromobili]]`, `[[3 - Struttura dell'Aeroplano e Profilo Alare]]`, `[[4 - Resistenza e Vortici]]`, `[[5 - I Comandi, Manovre, Stabilità]]`.

### 13.1 L'Atmosfera Standard ISA (ICAO Standard Atmosphere)
Parametri di riferimento al livello medio del mare (MSL - 0 m):
- **Temperatura**: $+15°\text{C}$ ($288.15 \text{ K}$)
- **Pressione**: $1013.25 \text{ hPa} = 1013.25 \text{ mbar} = 29.92 \text{ inHg} = 760 \text{ mmHg}$
- **Densità**: $\rho_0 = 1.225 \text{ kg/m}^3$
- **Composizione aria secca**: $78\% \text{ Azoto } (N_2), 21\% \text{ Ossigeno } (O_2), 0.97\% \text{ Argon e gas rari}, 0.03\% \text{ Anidride carbonica } (CO_2)$.
- **Gradiente termico verticale**: $-6.5°\text{C} / 1000 \text{ metri} \approx -1.98°\text{C} / 1000 \text{ piedi}$ (fino alla tropopausa a $11.000 \text{ m} / 36.089 \text{ ft}$, oltre la quale $T = -56.5°\text{C}$ costante).

### 13.2 Teorema di Bernoulli ed Equazione di Continuità
- **Equazione di Continuità**: per un fluido incomprimibile in moto stazionario entro un tubo di flusso:
  $$S_1 \cdot V_1 = S_2 \cdot V_2 = \text{Costante} \quad (\text{Portata volumetrica})$$
  Dove la sezione $S$ si restringe (es. sul dorso curvo del profilo), la velocità $V$ della corrente deve aumentare.
- **Teorema di Bernoulli**:
  $$P_{\text{statica}} + \frac{1}{2}\rho V^2 = \text{Costante} \quad (P_{\text{totale}})$$
  L'accelerazione dell'aria sul dorso dell'ala causa l'aumento della pressione dinamica ($\frac{1}{2}\rho V^2$) e una corrispondente **caduta della pressione statica** (suzione/depressione), che genera circa i 2/3 o 3/4 della portanza totale.

### 13.3 Geometria del Profilo Alare e Forze Aerodinamiche
- **Corda alare ($c$)**: retta congiungente il bordo d'attacco (*Leading Edge*) e il bordo d'uscita (*Trailing Edge*).
- **Angolo d'attacco o d'incidenza ($\alpha$)**: angolo acuto formato tra la corda alare e la direzione del vento relativo asintotico.
- **Portanza (Lift - $L$)**: componente della forza aerodinamica perpendicolare al vento relativo:
  $$L = \frac{1}{2} \rho V^2 S \cdot C_L$$
- **Resistenza (Drag - $D$)**: componente della forza aerodinamica parallela e concorde al vento relativo:
  $$D = \frac{1}{2} \rho V^2 S \cdot C_D$$
- **Stallo Aerodinamico**:
  - Avviene quando l'angolo d'attacco supera l'**angolo critico d'attacco** ($\alpha_{\text{critico}} \approx 15° - 18°$).
  - A questo punto lo strato limite non riesce più a vincere il gradiente di pressione avverso e si separa violentemente dal dorso dell'ala: **la portanza crolla improvvisamente e la resistenza aumenta a dismisura**.
  - *Lo stallo dipende unicamente dall'angolo d'attacco critico*, e può verificarsi a qualunque velocità o assetto spaziale!

### 13.4 Le Componenti della Resistenza Aerodinamica
1. **Resistenza Parassita ($D_p$)**: non legata alla produzione di portanza. Cresce con il quadrato della velocità ($V^2$):
   - *Attrito superficiale (Skin friction)*: attrito vischioso dell'aria sulle superfici bagnate.
   - *Forma (Form drag)*: resistenza dovuta alla scia di separazione del corpo immerso.
   - *Interferenza*: turbolenza generata dall'intersezione tra superfici diverse (ala-fusoliera, carrelli).
2. **Resistenza Indotta ($D_i$)**: costo energetico inevitabile per la generazione di portanza.
   - Ai bordi marginali dell'ala, l'aria a maggior pressione del ventre trafila verso la depressione del dorso generando **vortici d'estremità d'ala** (*wingtip vortices*) che deviano il flusso verso il basso (*downwash*), inclinando la portanza all'indietro.
   - È inversamente proporzionale al quadrato della velocità ($1/V^2$): massima a bassa velocità e alto angolo d'attacco.
   - Si riduce aumentando l'**Allungamento Alare** ($AR = \frac{b^2}{S}$, rapporto apertura alare su corda) e installando alette d'estremità (**Winglets**).
3. **Resistenza Totale ($D_{\text{tot}} = D_p + D_i$)**:
   - Ha un minimo alla velocità di **Massima Efficienza Aerodinamica** ($E_{\max} = (L/D)_{\max}$), punto in cui la resistenza indotta eguaglia esattamente la resistenza parassita!

### 13.5 Comandi di Volo Primari e Assi del Velivolo
| Comando | Asse di Rotazione | Manovra / Movimento | Azione del Pilota | Effetto Secondario |
| :--- | :--- | :--- | :--- | :--- |
| **Alettoni** (*Ailerons*) | **Asse Longitudinale** (dal muso alla coda) | **Rollio** (*Roll / Banchina*) | Barra o Volantino a Dx/Sx (movimento asimmetrico opposto) | **Imbardata Inversa** (*Adverse Yaw*): l'ala che si alza ha più portanza e quindi più resistenza indotta, imbardando il muso contro la virata. Corretto con alettoni differenziali o piede a favore. |
| **Equilibratore** (*Elevator*) | **Asse Trasversale** (da estremità alare a estremità) | **Beccheggio** (*Pitch*) | Barra spinta in avanti (picchiata) / tirata indietro (cabrata) | Variazione dell'angolo d'attacco $\alpha$. |
| **Timone di Direzione** (*Rudder*) | **Asse Verticale** (passante per il baricentro) | **Imbardata** (*Yaw*) | Pedaliera Dx/Sx | Rollio indotto (l'ala esterna all'imbardata accelera generando più portanza). |

### 13.6 Dispositivi Ipersostentatori (Flap & Slat)
- **Flap di bordo d'uscita**: aumentano la curvatura della linea media e, nei modelli complessi (Fowler flaps), la superficie alare utile. Aumentano il $C_{L\max}$ riducendo la velocità di stallo ($V_s$):
  $$V_s \propto \sqrt{\frac{W}{\frac{1}{2}\rho S C_{L\max}}}$$
  - Piccole deflessioni (decollo): aumentano molto la portanza con minimo aumento di drag.
  - Grandi deflessioni (atterraggio): aumentano drasticamente la resistenza, permettendo sentieri di discesa più ripidi senza incrementare la velocità.
- **Slat / Alule di bordo d'attacco**: canali che soffiano aria energizzata nello strato limite sul dorso dell'ala, ritardando il distacco della vena fluida e consentendo angoli d'attacco critici molto superiori.

### 13.7 Teoria, Geometria e Meccanica delle Eliche
- **La pala dell'elica come ala rotante**:
  La pala dell'elica è un profilo alare sagomato soggetto a moto rotatorio e traslatorio.
  - La velocità periferica tangenziale della pala aumenta linearmente dall'asse di rotazione verso l'estremità:
    $$V_{\text{periferica}} = \omega \cdot r = 2\pi n r$$
  - Per evitare che l'estremità superi la velocità del suono e per mantenere un angolo d'attacco aerodinamico e una spinta costanti lungo l'intera pala, l'elica presenta un **svergolamento geometrico continuo**: il **calettamento diminuisce progressivamente dalla radice al tip**.
- **Passo Teorico Geometrico ($p$)**: la distanza rettilinea che l'elica percorrerebbe in un giro completo ($360°$) se si muovesse all'interno di un mezzo solido indeformabile:
  $$p = 2\pi r \cdot \tan(\beta)$$
  *(dove $\beta$ è l'angolo di calettamento della sezione di riferimento al 75% del raggio)*.
- **Avanzo Reale Effettivo ($h$)**: la distanza reale percorsa in avanti dal velivolo nell'aria durante un giro di elica:
  $$h = \frac{V}{n}$$
  *(dove $V$ è la velocità vera di avanzamento del velivolo e $n$ il numero di giri al secondo dell'elica)*.
- **Regresso dell'Elica (Slip)**: la differenza dovuta alla comprimibilità e cedevolezza del mezzo fluido (aria):
  - *In valore assoluto*:
    $$\text{Regresso} = p - h$$
  - *In valore relativo*:
    $$s = \frac{p - h}{p} = 1 - \frac{h}{p}$$
- **Rapporto di Funzionamento ($J$)**: parametro adimensionale di similitudine fluidodinamica per le eliche:
  $$J = \frac{V}{n \cdot D}$$
  *(dove $V$ è la velocità di volo, $n$ i giri/sec e $D$ il diametro del disco dell'elica)*.
- **Eliche a Giri Costanti (Constant Speed Propellers)**:
  - Dotate di un regolatore (*governor*) idraulico a masse centrifughe. La leva del passo seleziona i giri/min motore (RPM) desiderati; il governor varia automaticamente l'angolo di calettamento delle pale per mantenere costanti i giri motore al variare della velocità o manetta.
  - *Passo corto (basso)*: decollo e salita iniziale (massimi RPM, massima spinta a bassa velocità).
  - *Passo lungo (alto)*: crociera veloce (bassi RPM, ottimo rendimento propulsivo, consumi ridotti).
  - *Messa in Bandiera (Feathering)*: rotazione delle pale con calettamento a circa $90°$ (corda parallela al flusso del vento relativo). Si aziona in caso di avaria o spegnimento motore per arrestare la rotazione dell'elica ed **eliminare la devastante resistenza aerodinamica dell'elica in autorotazione (mulino)**.

---

## 🎯 RACCOMANDAZIONI CONCLUSIVE PER L'ESAME

1. **Attenzione alle Parole Trabocchetto**:
   - Distinguere sempre **$V$ (Vera)** da **$IAS$ (Indicata)** e **$GS$ (al suolo)**.
   - Distinguere **QNH** (altitudine MSL), **QFE** (altezza dal campo) e **QNE/1013** (Livello di Volo FL).
   - Distinguere **SSR** (attivo, risponde con transponder a 1090 MHz) da **PSR** (passivo, eco riflesso).
   - Distinguere il fascio a **ventaglio** (radar 2D parabolico, non dà quota) dal fascio a **matita / pencil beam** (radar 3D Phased Array, dà quota ma richiede più fasci in elevazione).
2. **Utilizzo del Simulatore**:
   - Usa la nuova **Modalità Lettura** sul sito web (`Sito_Quiz_AVES/index.html`) per scorrere domanda e risposta corretta a colpo d'occhio.
   - Prima della sessione d'esame, esegui almeno 3 simulazioni complete da 50 domande in **Modalità Esame** per verificare la gestione del tempo e azzerare i dubbi.

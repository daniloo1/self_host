---
title: Spiegazione Quiz AVES - Tutte le Domande
tags:
  - AVES
  - Quiz
  - Esame
  - Studio
source: Sito_Quiz_AVES/quiz_data.json
total_questions: 282
---

# Spiegazione Quiz AVES — Tutte le 282 Domande

> [!info] Guida allo studio e all'esame
> Questa nota raccoglie gli argomenti delle **282 domande** presenti in `Sito_Quiz_AVES/quiz_data.json`, basandosi sulle **slide ufficiali** in `risorse/slides/`, sui **manuali e approfondimenti** del corso e sulle normative ICAO/NATO di riferimento. Ogni scheda evidenzia la risposta di riferimento e spiega in 3–5 righe il **concetto generale** dell'argomento per prepararti a qualsiasi formulazione d'esame.

## Indice delle Materie
- [[#PROCEDURE DEL VOLO (15 domande)]]
- [[#POTERE AEREO (37 domande)]]
- [[#RADAR (16 domande)]]
- [[#RADIO (20 domande)]]
- [[#MATEMATICA E FISICA (10 domande)]]
- [[#NAVIGAZIONE (35 domande)]]
- [[#DIRITTO AERONAUTICO (11 domande)]]
- [[#SICUREZZA VOLO (FATTORE UMANO) (18 domande)]]
- [[#TRAFFICO AEREO (20 domande)]]
- [[#FRASEOLOGIA (15 domande)]]
- [[#STRUMENTI (18 domande)]]
- [[#BONUS (6 domande)]]
- [[#AEROTECNICA (61 domande)]]

---


## PROCEDURE DEL VOLO (15 domande)

### Domanda 1 — Quali sono le tre tipologie principali di riferimento di Nord utilizzate nella navigazione aerea?
> [!check] Risposta corretta
> **Nord Vero (Geografico), Nord Magnetico e Nord Bussola**

**Spiegazione:** Nella navigazione aerea ogni direzione orizzontale (rotta o prua) viene misurata in gradi rispetto a uno dei tre riferimenti fondamentali di Nord. Il **Nord Vero (Geografico)** è la direzione dei meridiani verso il Polo Nord geografico; il **Nord Magnetico** è la direzione indicata dalle linee di forza del campo magnetico terrestre e differisce dal Nord Vero di un angolo detto *declinazione magnetica* (variazione); infine il **Nord Bussola** è l'indicazione fornita dalla bussola di bordo, influenzata dai campi magnetici residui del velivolo per un angolo detto *deviazione magnetica*.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slide 8)*

### Domanda 2 — Quali sono le quattro tipologie fondamentali di velocità all'aria (Airspeed) utilizzate in aeronautica?
> [!check] Risposta corretta
> **IAS (Indicated), CAS (Calibrated), EAS (Equivalent), TAS (True)**

**Spiegazione:** Le quattro velocità all'aria (*Airspeed*) descrivono la catena progressiva di correzioni che lega la lettura dello strumento alla velocità reale del velivolo rispetto alla massa d'aria. La **IAS** (*Indicated Airspeed*) è il valore letto direttamente sull'anemometro; correggendola per gli errori di strumento e di installazione/posizione statica si ottiene la **CAS** (*Calibrated Airspeed*); applicando la correzione per gli effetti di compressibilità dell'aria ad alte velocità e quote si ricava la **EAS** (*Equivalent Airspeed*); infine, correggendo per la densità reale dell'aria (pressione e temperatura in quota), si ottiene la **TAS** (*True Airspeed*), fondamentale per il calcolo della navigazione.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slide 12)*

### Domanda 3 — Secondo la normativa ICAO (PANS-OPS Doc 8168) per le procedure strumentali, quali sono le categorie di aeromobili previste in base alla Vat?
> [!check] Risposta corretta
> **Categorie A, B, C, D, E, H e HPMA**

**Spiegazione:** Nella progettazione e nell'impiego delle procedure strumentali (ICAO Doc 8168 PANS-OPS), gli aeromobili sono suddivisi in categorie prestazionali in base alla velocità indicata alla soglia pista ($V_{at} = 1{,}3 \times V_{so}$ o $1{,}23 \times V_{s1g}$ in configurazione di atterraggio alla massa massima certificata). Le categorie ad ala fissa sono **A** ($<91\text{ kt}$), **B** ($91$–$120\text{ kt}$), **C** ($121$–$140\text{ kt}$), **D** ($141$–$165\text{ kt}$) ed **E** ($166$–$210\text{ kt}$); a queste si affiancano la categoria **H** per gli elicotteri e la categoria militare **HPMA** (*High Performance Military Aircraft*), che determina dimensioni specifiche delle aree protette e dei raggi di virata.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 13, 74)*

### Domanda 4 — Quali informazioni di navigazione fornisce la stazione radioassistita TACAN rispettivamente agli utenti civili e militari?
> [!check] Risposta corretta
> **Agli utenti civili fornisce solo la distanza DME, mentre ai militari fornisce sia radiale che distanza**

**Spiegazione:** Il **TACAN** (*Tactical Air Navigation*) è una radioassistenza tattica militare operante in banda UHF che integra nello stesso apparato di terra sia l'informazione azimutale (radiale magnetica) sia l'informazione distanziometrica (**DME**, *Distance Measuring Equipment*). Gli aeromobili militari equipaggiati con ricevitore TACAN ricavano entrambe le informazioni (radiale e distanza oblique dalla stazione). Gli utenti civili, invece, non dispongono del ricevitore azimutale TACAN e possono interrogare esclusivamente la componente DME, ottenendo la sola distanza; per questo in ambito civile il TACAN viene spesso co-ubicato con un VOR formando una stazione **VORTAC**.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 24–25, 38–39)*

### Domanda 5 — Quale informazione di navigazione fornisce la radioassistenza VOR (VHF Omnidirectional Range) agli utenti civili e militari?
> [!check] Risposta corretta
> **Fornisce informazioni di radiale magnetica (azimut) rispetto alla stazione a entrambe le categorie**

**Spiegazione:** Il **VOR** (*VHF Omnidirectional Range*) è una radioassistenza di navigazione a corto/medio raggio operante in banda VHF ($108{,}0$–$117{,}975\text{ MHz}$) che irradia $360$ radiali magnetiche uscenti dalla stazione rispetto al Nord magnetico. Fornisce esclusivamente informazioni di direzione/azimut (radiale magnetica TO/FROM rispetto alla stazione a terra) ed è fruibile allo stesso modo sia dagli aeromobili civili sia da quelli militari dotati di ricevitore VHF. Per disporre anche del dato di distanza, la stazione VOR deve essere associata a un apparato DME (VOR/DME) o a un TACAN (VORTAC).
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 28–29, 49)*

### Domanda 6 — Quali sono i tre componenti di terra fondamentali che costituiscono il sistema ILS (Instrument Landing System)?
> [!check] Risposta corretta
> **Localizer (LOC), Glide Path (GP) e Marker Beacons / DME associato**

**Spiegazione:** L'**ILS** (*Instrument Landing System*) è il sistema di avvicinamento strumentale di precisione basato su tre sottosistemi fondamentali installati a terra. Il **Localizer (LOC)**, operante in banda VHF ($108$–$111{,}975\text{ MHz}$), fornisce la guida laterale lungo il prolungamento dell'asse pista; il **Glide Path (GP)**, operante in banda UHF ($329$–$335\text{ MHz}$), fornisce la guida verticale sul sentiero di discesa nominale (tipicamente $3^\circ$); infine i **Marker Beacons** ($75\text{ MHz}$, Outer/Middle/Inner Marker) o, nelle installazioni moderne, un **DME associato**, forniscono i punti di verifica o la distanza continua dalla soglia pista.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 40–44, 50)*

### Domanda 7 — Nelle procedure di volo strumentali, cosa rappresenta la sigla MOC (Minimum Obstacle Clearance)?
> [!check] Risposta corretta
> **Il margine verticale minimo di sicurezza garantito rispetto all'ostacolo critico nell'area considerata**

**Spiegazione:** Nel calcolo delle quote minime secondo i criteri ICAO Doc 8168 (PANS-OPS), il **MOC** (*Minimum Obstacle Clearance*) rappresenta il franco verticale minimo di sicurezza garantito al di sopra dell'ostacolo più elevato (ostacolo critico) presente nel corridoio protetto della procedura. Nell'area primaria centrale ($50\%$ della larghezza totale del corridoio) il MOC è applicato al $100\%$ (es. $1000\text{ ft}$ in rotta/iniziale o $2000\text{ ft}$ in area montuosa, $500\text{ ft}$ nel segmento intermedio, $250\text{ ft}$ in finale NPA), mentre nelle due aree secondarie laterali decresce linearmente dal $100\%$ fino a $0\text{ ft}$ sul bordo esterno.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 54–58, 61)*

### Domanda 8 — Quanti e quali sono i segmenti che compongono una procedura di avvicinamento strumentale (IAP)?
> [!check] Risposta corretta
> **5: Arrivo, Iniziale, Intermedio, Finale e Mancato Avvicinamento**

**Spiegazione:** Ogni procedura di avvicinamento strumentale (*Instrument Approach Procedure*, IAP) è suddivisa in **5 segmenti** sequenziali che guidano l'aeromobile dalla struttura di rotta fino all'atterraggio o alla riattaccata: 1) **Arrivo** (dalla rotta ATS/STAR fino all'IAF); 2) **Iniziale** (dall'IAF all'IF, per raccordo, perdita di quota o manovre di inversione); 3) **Intermedio** (dall'IF al FAF/FAP, per l'allineamento e la preparazione alla discesa); 4) **Finale** (dal FAF/FAP al MAPt o alla soglia pista, per l'allineamento e la discesa finale); 5) **Mancato Avvicinamento** (dal MAPt/DA fino a una quota sicura o all'holding, con gradiente di salita minimo standard del $2{,}5\%$).
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 67–68)*

### Domanda 9 — Quali sono le tre funzioni operative principali di una procedura/circuito di attesa (Holding pattern)?
> [!check] Risposta corretta
> **Attesa per gestione del traffico, perdita di quota e inversione di rotta**

**Spiegazione:** Il circuito di attesa (*Holding pattern*, a forma di ippodromo con virate standard a destra, salvo diversa indicazione in carta) costituisce uno spazio aereo protetto intorno a un fix (HF) utilizzato per tre funzioni operative fondamentali: **attendere** in sicurezza per esigenze di regolazione del traffico ATC o miglioramento meteo; **perdere quota** gradualmente tramite orbite successive all'interno di un'area libera da ostacoli fino alla quota di inizio avvicinamento; **invertire la rotta** per allineare l'aeromobile alla direzione di ingresso della procedura strumentale.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slides 75–79)*

### Domanda 10 — Secondo i criteri di classificazione ICAO, quante e quali sono le macro-tipologie di procedure di avvicinamento strumentale?
> [!check] Risposta corretta
> **3: PA (Precision Approach), NPA (Non-Precision Approach) e APV (Approach with Vertical Guidance)**

**Spiegazione:** La classificazione ICAO (Annesso 6) articola le procedure di avvicinamento strumentale in **3 macro-tipologie** in base al tipo di guida (2D vs 3D) e ai requisiti di prestazione: **NPA** (*Non-Precision Approach*), operazioni 2D Type A con sola guida laterale e minima MDA/H (es. VOR, NDB, LOC, LNAV); **APV** (*Approach Procedure with Vertical Guidance*), procedure PBN 3D Type A che offrono sia guida laterale sia guida verticale calcolata (Baro-VNAV o SBAS) e impiegano la DA/H pur non essendo di precisione pura; **PA** (*Precision Approach*), operazioni 3D Type A o Type B basate su sistemi di precisione certificati (ILS, MLS, GLS, SBAS CAT I).
*(Fonte: Slide "LEZIONE PBN 132 AUPC - 8 CTP EI", slide 61)*

### Domanda 11 — Nelle procedure di navigazione d'area (RNAV/PBN), in quali due modi operativi può essere volato un Waypoint?
> [!check] Risposta corretta
> **Fly-by oppure Fly-over**

**Spiegazione:** Nella navigazione d'area (RNAV/PBN), le rotte e le procedure sono definite tramite punti geografici in coordinate Latitudine/Longitudine denominati *Waypoint*. In base al comportamento richiesto durante la transizione da una tratta alla successiva, i waypoint si distinguono in due sole tipologie operative codificate nel database FMS: **Fly-by** (simbolo a stella a 4 punte), che consente l'anticipo della virata prima del punto, e **Fly-over** (stella racchiusa in un cerchio), che impone il sorvolo fisico sulla verticale del punto prima di iniziare la virata.
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slide 104; "LEZIONE PBN", slides 39–40)*

### Domanda 12 — Un Waypoint codificato come 'Fly-by' deve essere obbligatoriamente sorvolato sulla sua verticale dall'aeromobile?
> [!check] Risposta corretta
> **No, il sistema di navigazione anticipa la virata per raccordare la tratta successiva senza sorvolarne la verticale**

**Spiegazione:** Un waypoint codificato come **Fly-by** non richiede il sorvolo sulla verticale del punto: il sistema di gestione del volo (FMS) calcola automaticamente l'anticipo di virata (*Turn Anticipation*) in funzione della velocità al suolo (GS) e dell'angolo di cambio rotta, iniziando la virata prima del waypoint per raccordare con continuità la tratta successiva e restare all'interno dell'area protetta. Al contrario, un waypoint **Fly-over** obbliga il velivolo a sorvolare esattamente la verticale del punto prima di avviare la virata, soluzione adottata quando occorre evitare ostacoli o sconfinamenti in aree adiacenti (come al MAPt o nelle partenze SID).
*(Fonte: Slide "BASICO PROCEDURE 132 CORSO AUPC - 8 CTP EI", slide 104; "LEZIONE PBN", slide 40)*

### Domanda 13 — Quali sono i tre sistemi di potenziamento/integrità (Augmentation) del segnale satellitare previsti nel concetto PBN/GNSS?
> [!check] Risposta corretta
> **ABAS, SBAS e GBAS**

**Spiegazione:** Per soddisfare i rigorosi requisiti aeronautici di accuratezza, integrità, continuità e disponibilità del segnale GNSS (GPS/Galileo), il concetto PBN prevede tre sistemi di potenziamento (*Augmentation*): **ABAS** (*Aircraft-Based Augmentation System*), basato su algoritmi di controllo integrità a bordo del ricevitore (RAIM/AAIM); **SBAS** (*Satellite-Based Augmentation System*), che utilizza stazioni di riferimento a terra e satelliti geostazionari per trasmettere correzioni differenziali su vaste aree geografiche (come EGNOS in Europa o WAAS negli USA, abilitando le procedure LPV); **GBAS** (*Ground-Based Augmentation System*), basato su stazioni locali VHF aeroportuali per avvicinamenti di precisione GLS.
*(Fonte: Slide "LEZIONE PBN 132 AUPC - 8 CTP EI", slides 24, 27)*

### Domanda 14 — Quali sono i tre elementi cardine su cui si articola e si fonda il 'PBN Concept' (ICAO Doc 9613)?
> [!check] Risposta corretta
> **NAVAID Infrastructure, Navigation Specification e Navigation Application**

**Spiegazione:** Secondo l'ICAO Doc 9613, la *Performance-Based Navigation* (PBN) supera la navigazione convenzionale basata sui singoli sensori definendo le prestazioni richieste all'aeromobile in termini di accuratezza, integrità e funzionalità. Il *PBN Concept* si articola su tre pilastri interdipendenti: 1) **NAVAID Infrastructure** (l'infrastruttura fisica dei radioaiuti terrestri VOR/DME, satellitari GNSS o sistemi autonomi INS/IRS); 2) **Navigation Specification** (i requisiti tecnici e operativi espressi come specifiche **RNAV** o **RNP**, distinte dalla presenza del monitoraggio e allarme delle prestazioni a bordo OPMA/OBPMA); 3) **Navigation Application** (l'applicazione concreta della specifica alle rotte ATS e alle procedure terminali SID, STAR e IAP).
*(Fonte: Slide "LEZIONE PBN 132 AUPC - 8 CTP EI", slides 3, 13–14, 19, 28)*

### Domanda 15 — Relativamente alla procedura Baro-VNAV (LNAV/VNAV), quale delle seguenti affermazioni è corretta?
> [!check] Risposta corretta
> **La guida verticale è calcolata dalle informazioni dell'altimetro barometrico**

**Spiegazione:** La procedura RNP APCH ai minimi **LNAV/VNAV** con guida **Baro-VNAV** (*Barometric Vertical Navigation*) è classificata come APV (3D Type A) e utilizza una **DA/H** pur non essendo un avvicinamento di precisione puro. Mentre la guida laterale è fornita dal GNSS, il sentiero di discesa verticale (VPA nominale $3^\circ$, compreso tra $2{,}5^\circ$ e $3{,}5^\circ$) è calcolato dal sistema di bordo a partire dalle informazioni dell'altimetro barometrico (Air Data Computer). Proprio per la sensibilità agli errori barometrici e termici (aria fredda appiattisce il sentiero reale riducendo il franco dagli ostacoli), la procedura impone l'uso obbligatorio del **QNH locale** e il rispetto dei limiti di **temperatura** pubblicati in carta.
*(Fonte: Slide "LEZIONE PBN 132 AUPC - 8 CTP EI", slides 63–65)*


---


## POTERE AEREO (37 domande)

### Domanda 16 — Quali e quanti sono i principi della guerra?
> [!check] Risposta corretta
> **Sono 10: unicità di comando, obiettivo, mentalità offensiva, morale, massa, manovra, economia delle forze, sicurezza, sorpresa e semplicità**

**Spiegazione:** I principi della guerra sono 10 precetti generali, frutto di esperienza e analisi storica, che costituiscono la guida irrinunciabile per la pianificazione e la condotta dell'azione militare; la loro applicabilità ed enfasi variano in base alle circostanze operative. Essi comprendono: **unicità di comando** (un solo comandante con responsabilità univoca), **obiettivo** (chiaro, unico e raggiungibile), **morale** (condizione psicologica, coesione e disciplina del combattente) e **mentalità offensiva** (per acquisire e sfruttare l'iniziativa). Seguono **massa** (concentrazione della potenza nel punto decisivo), **economia delle forze** (distribuzione ponderata e complementare alla massa), **manovra** (movimento e fuoco), **sicurezza** (protezione delle unità senza perdere libertà d'azione), **sorpresa** (moltiplicatore di potenza che disarticola il C2 nemico) e **semplicità** (chiarezza e flessibilità del piano).
*(Fonte: Slide "2. I principi della guerra nelle operazioni aerospaziali")*

---

### Domanda 17 — Come considerava Douhet il potere aereo?
> [!check] Risposta corretta
> **Spazio aereo dominio indipendente e decisivo. Bisogna impedire al nemico di volare. Azioni offensive più efficienti delle difensive. Colpire risorse morali e materiali avversario (anche città). Impiego in massa. Guerra aerea di sorpresa. Distruggere nidi e uova (difesa indiretta)**

**Spiegazione:** Nel trattato *Il Dominio dell'Aria* (1921), il Gen. Giulio Douhet teorizza lo spazio aereo come dominio autonomo e decisivo, ritenendo che la guerra terrestre abbia perso il proprio significato strategico risolutivo. Conquistare il dominio dell'aria significa impedire al nemico di volare conservando per sé tale facoltà, attraverso un'Armata Aerea indipendente basata su bombardieri a lungo raggio impiegati in massa e di sorpresa. Secondo Douhet, le azioni offensive sono intrinsecamente più efficienti di quelle difensive: occorre colpire direttamente le risorse morali e materiali della nazione avversaria (incluse le città, superando la distinzione tra combattenti e non combattenti) e attuare la cosiddetta "difesa indiretta", cioè distruggere "i nidi e le uova" a terra prima che il nemico possa decollare.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 18 — Come considerava Mitchell il potere aereo?
> [!check] Risposta corretta
> **L’aviazione ha un ruolo strategico dominante. Le forze aeree sono indipendenti. Bisogna operare in massa. Bisogna bombardare centri vitali per paralizzare l'avversario. Non si bombardano città. Valorizza velivoli da difesa aerea. Tutte le specialità dell’aria convivono**

**Spiegazione:** Il Gen. Billy Mitchell condivide con Douhet l'idea di una forza aerea indipendente con ruolo strategico dominante, da impiegare in massa per colpire i centri vitali dell'avversario e paralizzarne la capacità bellica, sostenendo che nessuna decisione sul terreno sia possibile senza prima aver conquistato la superiorità aerea. Tuttavia, la sua visione si distingue per un approccio più equilibrato: esclude il bombardamento massiccio delle città e dei civili inermi, valorizza i velivoli da difesa aerea per la conquista del controllo dell'aria e concepisce un'organizzazione aeronautica in cui convivono tutte le specialità (caccia, bombardamento, attacco, ricognizione, sorveglianza e trasporto) senza predominanza assoluta di una sola componente.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 19 — Come considerava Mecozzi il potere aereo?
> [!check] Risposta corretta
> **La guerra non è lotta fra solo 2 forze aeree. Il dominio dell’aria non è l’obiettivo della guerra aerea. Critica alla guerra agli inermi. Indispensabile cooperazione tra forze armate. Bisogna potenziare aviazione da bombardamento, da caccia e d’assalto. Adattabilità del mezzo aereo**

**Spiegazione:** Il Gen. Amedeo Mecozzi elabora una dottrina in netta contrapposizione alle tesi di Douhet: la guerra aerea non è un duello isolato tra due forze aeree e il dominio dell'aria non costituisce il fine ultimo del conflitto, ma un mezzo al servizio della campagna complessiva. Critico fermo della "guerra agli inermi", Mecozzi sostituisce al concetto douhetiano di "massa" quello di **adattabilità** del mezzo aereo e pone al centro l'indispensabile cooperazione tra tutte le Forze Armate (terrestri, navali e aeree). Su questa base articola l'Armata Aerea in tre branche complementari: aviazione da bombardamento (attacco a lunga distanza), aviazione da caccia (difesa aerea) e **aviazione d'assalto** (velivoli multiruolo per supporto alle forze di superficie, scorta, esplorazione e attacco a breve/medio raggio).
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 20 — Su quale modello concettuale si basa la teoria del Potere Aereo elaborata dal Col. John Warden?
> [!check] Risposta corretta
> **Sul modello dei 5 cerchi concentrici per l'individuazione e paralisi del centro di gravità strategico**

**Spiegazione:** Nel saggio *The Air Campaign – Planning for Combat*, il Col. John Warden propone una modellizzazione sistemica dell'avversario basata su **cinque cerchi concentrici**, ordinati dal cuore più critico verso l'esterno: al centro il **Centro decisionale** (leadership), seguito da **Sistema Industriale**, **Infrastrutture**, **Popolazione Nazionale** e, all'anello più esterno, il **Sistema Militare** schierato. La teoria mira a individuare e colpire i **Centri di Gravità strategici (COGs)** dell'avversario per ottenerne la paralisi sistemica anziché logorarne le forze in una guerra d'attrito. La superiorità intrinseca del potere aereo risiede proprio nella capacità di scavalcare il dispositivo difensivo del cerchio esterno per colpire simultaneamente i cerchi interni e il centro decisionale.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 21 — Ciclo OODA (Ciclo di Boyd):
> [!check] Risposta corretta
> **Osservazione, Orientamento, Decisione e Azione. È alla base della produzione dell’ATO**

**Spiegazione:** Ideato dal colonnello John Boyd, il **ciclo OODA** descrive il processo decisionale continuo attraverso quattro fasi sequenziali: **O**sservazione (raccolta dei dati dall'ambiente operativo e dai sensori), **O**rientamento (analisi, sintesi ed elaborazione della *situational awareness* alla luce di dottrina ed esperienza), **D**ecisione (scelta della linea d'azione) e **A**zione (esecuzione operativa, che modifica lo scenario e genera nuove osservazioni). Nella dottrina aerospaziale moderna, questo ciclo iterativo costituisce il fondamento logico e procedurale della pianificazione aerea e della produzione ciclica dell'**Air Tasking Order (ATO)**.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 22 — Qual è la teoria alla base del ciclo OODA?
> [!check] Risposta corretta
> **Chi riesce a sviluppare più rapidamente il ciclo assume il vantaggio portando alla paralisi decisionale dell’avversario**

**Spiegazione:** Il principio cardine della teoria di Boyd risiede nella **velocità relativa ed efficacia** del processo decisionale: completare i cicli OODA più rapidamente ed efficacemente dell'avversario consente di "entrare" nel suo ciclo decisionale, anticipandone le mosse e rendendo le sue reazioni tardive e irrilevanti. Questa asimmetria temporale inibisce le connessioni dell'avversario con l'evoluzione reale degli eventi e ne distrugge l'armonia interna. Il risultato strategico e tattico non è la semplice distruzione fisica, ma la **paralisi dell'avversario nella dimensione fisica e cognitiva**, incapace di adattarsi al ritmo imposto dalle operazioni amiche.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 23 — Cosa persegue il potere aereo?
> [!check] Risposta corretta
> **Principalmente due scopi: contrastare la minaccia e proiettare potenziale militare**

**Spiegazione:** Secondo la dottrina NATO (AJP 3.3), il Potere Aerospaziale rappresenta la capacità di impiegare sistemi aerei e spaziali per modificare il comportamento dell'avversario o il corso degli eventi, perseguendo due scopi principali e complementari: **contrastare la minaccia** (raggiungendo il controllo dell'aria mediante operazioni di controaviazione e difesa aerea/missilistica) e **proiettare potenziale militare** (proiezione di forza attraverso operazioni d'attacco e mobilità aerea). Entrambi gli scopi si integrano nella strategia aerea della *Joint Campaign* e richiedono il costante supporto informativo delle attività **ISR** (*Intelligence, Surveillance and Reconnaissance*).
*(Fonte: Modulo 1 - Il Potere Aereo / Modulo 14 - Le Operazioni Aeree - generalità)*

---

### Domanda 24 — Quali e quanti sono i livelli di controllo dell’aria?
> [!check] Risposta corretta
> **Sono 3: situazione aerea favorevole, superiorità aerea, supremazia aerea**

**Spiegazione:** Il Controllo dell'Aria costituisce il principale contributo delle forze aeree al successo di una *Joint Campaign* e si articola in **3 livelli progressivi**, dal grado più limitato a quello assoluto: **Situazione Aerea Favorevole** (lo sforzo aereo nemico è insufficiente a compromettere il successo delle operazioni amiche), **Superiorità Aerea** (grado di dominio che permette la condotta delle operazioni in un dato tempo e luogo senza interferenze proibitive del nemico) e **Supremazia Aerea** (il livello più elevato, in cui la forza aerea avversaria è incapace di interferire efficacemente sull'intero teatro). Il passaggio tra i livelli dipende dal bilancio delle capacità e dalla durata delle operazioni di controaviazione.
*(Fonte: Modulo 1 - Il Potere Aereo / Modulo 16 - Operazioni di controllo dell'aria)*

---

### Domanda 25 — Qual è la definizione di supremazia aerea?
> [!check] Risposta corretta
> **Quella condizione che permette alle nostre forze aeree di muoversi liberamente, senza proibitive interferenze, nello spazio aereo sovrastante la battaglia**

**Spiegazione:** Nella dottrina del Potere Aereo, la **Supremazia Aerea** rappresenta il massimo grado di controllo dell'aria: è la condizione operativa che consente alle forze aeree amiche di operare e muoversi liberamente, **senza proibitive interferenze** da parte del dispositivo avversario, nello spazio aereo sovrastante l'area della battaglia. Raggiungere tale condizione significa aver neutralizzato o degradato in modo decisivo le capacità aeree e di difesa superficie-aria del nemico, garantendo piena libertà di manovra a tutte le componenti della forza congiunta (aerea, terrestre e marittima).
*(Fonte: Modulo 1 - Il Potere Aereo / Modulo 16 - Operazioni di controllo dell'aria)*

---

### Domanda 26 — Quali sono i livelli di utilizzo del potere aereo?
> [!check] Risposta corretta
> **Livello strategico, operativo e tattico**

**Spiegazione:** Per assicurare il coordinamento efficace delle unità all'interno di una campagna *joint*, la dottrina d'impiego del Potere Aereo si sviluppa su tre livelli gerarchici: il livello **strategico** (che definisce le finalità politiche e gli obiettivi militari generali della campagna), il livello **operativo** (introdotto tra i due livelli classici per pianificare e condurre le operazioni nel teatro operativo con le forze assegnate, traducendo gli obiettivi strategici in azioni concrete) e il livello **tattico** (che riguarda l'esecuzione diretta delle singole missioni e l'impiego dei sistemi d'arma). Grazie alla sua flessibilità, un singolo assetto aereo può produrre effetti a tutti e tre i livelli.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 27 — Quali sono i 5 tipi di relazione di Comando e Controllo (C2)?
> [!check] Risposta corretta
> **Comando pieno (Full Command), OPCOM, OPCON, TACOM, TACON**

**Spiegazione:** La dottrina del Comando e Controllo (C2) definisce cinque livelli progressivi di autorità e responsabilità militare, dal più ampio al più specifico: **Comando Pieno (*Full Command*)** (copre aspetti operativi, amministrativi e logistici ed è esclusivamente nazionale), **OPCOM** (*Operational Command*: autorità di assegnare missioni/compiti, schierare e riassegnare forze, senza responsabilità amministrative o logistiche), **OPCON** (*Operational Control*: autorità delegata per dirigere forze assegnate a specifici compiti limitati nel tempo e nello spazio), **TACOM** (*Tactical Command*: autorità di assegnare compiti alle forze subordinate per la missione assegnata, es. produzione dell'ATO) e **TACON** (*Tactical Control*: direzione dettagliata e locale di movimenti e manovre per eseguire il compito).
*(Fonte: Modulo 3 - Il Comando e Controllo)*

---

### Domanda 28 — Il comando pieno (Full Command) esiste solo in ambito nazionale?
> [!check] Risposta corretta
> **Vero, è prerogativa sovrana nazionale e non viene mai delegato a comandi multinazionali**

**Spiegazione:** Il **Comando Pieno (*Full Command*)** conferisce a un comandante la responsabilità completa su tutti gli aspetti **operativi, amministrativi e logistici** delle forze subordinate. Proprio perché include la sfera disciplinare, amministrativa e logistica legata alla sovranità dello Stato, il *Full Command* **esiste esclusivamente in ambito nazionale** e non viene mai ceduto a comandanti NATO o multinazionali. Quando le nazioni contribuiscono a operazioni dell'Alleanza, mantengono il *Full Command* e trasferiscono ai comandanti NATO solo livelli operativi o tattici (OPCOM, OPCON, TACOM o TACON) tramite il processo di *Transfer of Authority* (TOA).
*(Fonte: Modulo 3 - Il Comando e Controllo)*

---

### Domanda 29 — Il TACON (Controllo Tattico) decentralizzato ha carattere di temporaneità?
> [!check] Risposta corretta
> **Vero, è limitato nel tempo e specifico per singole missioni o compiti operativi assegnati**

**Spiegazione:** Nell'architettura C2 della Difesa Aerea si distinguono tre forme di controllo tattico: **Centralizzato** (la forma normale e ottimale, che conferisce unità al sistema e va ripristinata appena possibile), **Decentralizzato** e **Autonomo** (in caso di perdita totale dei collegamenti *voice* e *link*, dove l'unità decide secondo procedure predefinite). Il **Controllo Decentralizzato** consiste nella delega del TACON a un ente alternato in caso di avarie, malfunzionamenti o esercitazioni, mentre l'ente delegante mantiene la supervisione e alcune funzioni critiche (come le ROE): proprio per la sua natura eccezionale, esso ha sempre **carattere di temporaneità** ed è circoscritto a compiti specifici.
*(Fonte: Modulo 3 - Il Comando e Controllo)*

---

### Domanda 30 — Il C2 delle forze aerotattiche si sviluppa attraverso 4 funzioni:
> [!check] Risposta corretta
> **Allotment, apportionment, allocation e tasking**

**Spiegazione:** Il *force management* (C2) delle forze aerotattiche si articola in una sequenza logica di quattro funzioni fondamentali: **Allotment** (cambio temporaneo di assegnazione di forze tra comandanti subordinati, deciso da chi detiene l'OPCOM tramite TOA per bilanciare le capacità), **Apportionment** (quantificazione e ripartizione percentuale dello sforzo aereo totale previsto tra le varie operazioni e aree geografiche in base alle priorità), **Allocation** (traduzione dell'*apportionment* in numero totale di sortite per tipo di aeromobile disponibile per ogni missione) e **Tasking** (trasformazione dell'*allocation* nell'ordine dettagliato di missione, tipicamente espresso nell'ATO).
*(Fonte: Modulo 3 - Il Comando e Controllo)*

---

### Domanda 31 — Cosa significa la sigla NATINAMDS?
> [!check] Risposta corretta
> **NATO Integrated Air and Missile Defence System**

**Spiegazione:** **NATINAMDS** è l'acronimo di *NATO Integrated Air and Missile Defence System*, il Sistema Integrato di Difesa Aerea e Missilistica dell'Alleanza Atlantica (integrato fin dal tempo di pace in virtù del documento MC 54/1 del 1962). La sua missione fondamentale è continua — in tempo di pace, crisi e conflitto — per salvaguardare e proteggere territorio, popolazione e forze alleate da minacce aeree e missilistiche. In tempo di pace opera principalmente attraverso la sorveglianza continua (ASACS, NAEW, unità navali per produrre la RAP), la **NATO Air Policing** (identificazione, *scramble* e reazione a violazioni dello spazio aereo) e la difesa contro missili balistici (**BMD**).
*(Fonte: Modulo 3 - Il Comando e Controllo / Modulo 4 - IAMD Conops)*

---

### Domanda 32 — Qual è il ruolo primario del CAOC (Combined Air Operations Centre) nelle operazioni alleate?
> [!check] Risposta corretta
> **Costituisce la struttura preposta alla pianificazione esecutiva, direzione e conduzione delle operazioni aeree**

**Spiegazione:** Nella struttura di Comando e Controllo NATO (ACO), mentre il livello operativo è assicurato dai *Joint Force Command* (JFC) e dai comandi di componente, il livello tattico comprende i **CAOC** (*Combined Air Operations Centre*, con sedi permanenti a Torrejón in Spagna e Uedem in Germania) e il *Deployable Air Command and Control Centre* (DACCC di Poggio Renatico). Il CAOC rappresenta il principale centro operativo dal quale le operazioni aeree alleate sono dirette, monitorate, controllate, eseguite e coordinate, avvalendosi delle unità **ASACS** a terra (statiche o rischierabili) per la sorveglianza radar e il controllo tattico in volo.
*(Fonte: Modulo 3 - Il Comando e Controllo)*

---

### Domanda 33 — Le operazioni aeree di attacco si dividono in:
> [!check] Risposta corretta
> **Counter Surface Force Operations (CSFO) e Strategic Attack**

**Spiegazione:** Nella dottrina NATO (AJP 3.3), il pilastro delle operazioni aeree di **Attack** si articola in due macro-categorie: **Strategic Attack** e **Counter Surface Force Operations (CSFO)**. Lo **Strategic Attack** colpisce direttamente i centri vitali militari e civili del nemico (COGs: centri C2, centrali elettriche, industrie, raffinerie) per ottenerne la paralisi strategica e conseguire effetti politici, spesso in modo indipendente dalle altre operazioni. Le **CSFO** rappresentano invece il contributo del potere aereo alle operazioni terrestri (*Counter-Land*: **Air Interdiction - AI** oltre la FEBA e **Close Air Support - CAS** tra FLOT e FEBA a stretto contatto con i FAC) e marittime (*Counter-Maritime*: **ASUW** antinave e **ASW** antisommergibile).
*(Fonte: Modulo 15 - Operazioni di attacco)*

---

### Domanda 34 — Quanti sono gli articoli del Trattato del Nord Atlantico (NATO)?
> [!check] Risposta corretta
> **14**

**Spiegazione:** Il **Trattato del Nord Atlantico** (noto anche come Trattato di Washington, firmato il 4 aprile 1949 dai dodici Paesi fondatori) è l'atto giuridico e politico istitutivo della NATO ed è composto da **14 articoli**. Oltre a sancire i principi di democrazia, libertà individuale e risoluzione pacifica delle controversie in coerenza con la Carta delle Nazioni Unite, il testo definisce i meccanismi di consultazione politica (Art. 4), l'impegno alla difesa collettiva (Art. 5), l'ambito geografico di applicazione (Art. 6), la struttura organizzativa (Art. 9) e l'adesione di nuovi membri (Art. 10).
*(Fonte: Compendio Generale AVES / Trattato del Nord Atlantico)*

---

### Domanda 35 — Cosa sancisce l’articolo 5 del Trattato del Nord Atlantico (NATO)?
> [!check] Risposta corretta
> **Il principio della difesa collettiva: un attacco armato contro uno Stato membro è considerato un attacco contro tutti**

**Spiegazione:** L'**Articolo 5** costituisce il principio cardine del Trattato del Nord Atlantico e dell'intera Alleanza: esso sancisce la **difesa collettiva**, stabilendo che un attacco armato contro uno o più Stati membri in Europa o in Nord America è considerato un attacco diretto contro tutti gli Alleati. Di conseguenza, ciascun membro si impegna ad assistere la Parte o le Parti attaccate, intraprendendo individualmente e di concerto con gli altri Alleati le azioni ritenute necessarie, incluso l'impiego della forza armata, per ristabilire e mantenere la sicurezza nella regione nord-atlantica.
*(Fonte: Compendio Generale AVES / Trattato del Nord Atlantico)*

---

### Domanda 36 — La NATO’s Joint Air Power Strategy ha un ruolo chiave nel raggiungimento dei Core tasks:
> [!check] Risposta corretta
> **Collective defence, crisis management, cooperative security**

**Spiegazione:** La *NATO's Joint Air Power Strategy* attribuisce al Potere Aereo un ruolo determinante nel supportare i tre **Core Tasks** fondamentali dell'Alleanza Atlantica. Nella **Collective Defence** garantisce deterrenza convenzionale e nucleare e la difesa integrata aerea e missilistica (IAMD); nel **Crisis Management** agisce da elemento guida grazie alla flessibilità d'impiego e alle capacità ISR per la prevenzione e gestione delle crisi; nella **Cooperative Security** favorisce la stabilità dei Paesi partner, il monitoraggio degli armamenti tramite assetti ISR e il coordinamento civile-militare dello spazio aereo.
*(Fonte: Modulo 1 - Il Potere Aereo)*

---

### Domanda 37 — Dove si definisce la dottrina NATO per le operazioni aerospaziali (Joint Air and Space Operations)?
> [!check] Risposta corretta
> **AJP 3.3**

**Spiegazione:** La pubblicazione dottrinale NATO di riferimento per la pianificazione e la condotta delle operazioni aeree e spaziali congiunte (*Allied Joint Doctrine for Air and Space Operations*) è la **AJP 3.3** (nella serie alleata, il numero 3 identifica la dottrina delle operazioni e il 3.3 quella specifica dell'ambiente aerospaziale). Essa si raccorda con la dottrina interforze superiore **AJP-01** (*Allied Joint Doctrine*) e con il glossario terminologico **AAP-6**, definendo i pilastri dell'*Air & Space Power* (*Control of the Air, Attack, ISR, Air Mobility* e *JPR*) e la loro integrazione nella *Joint Campaign*.
*(Fonte: Modulo 1 - Il Potere Aereo / Modulo 8 - Meccanica Operativa / Modulo 14 - Le Operazioni Aeree)*

---

### Domanda 38 — L'acronimo ISR nel contesto delle operazioni aerospaziali significa Intelligence, Surveillance and Reconnaissance?
> [!check] Risposta corretta
> **Vero, definisce il ciclo integrato di Intelligence, Surveillance and Reconnaissance**

**Spiegazione:** Nella dottrina AJP 3.3, **ISR** significa **I**ntelligence, **S**urveillance and **R**econnaissance e costituisce uno dei pilastri fondamentali dell'*Air & Space Power*, trasversale e indispensabile a tutte le altre operazioni aeree. Attraverso assetti pilotati e a pilotaggio remoto dotati di sensori visivi, elettronici o fotografici, il ciclo ISR fornisce al comandante informazioni tempestive sulla minaccia e sugli obiettivi (*targeting*), supportando sia la pianificazione strategica e operativa (avvio del ciclo ATO e definizione delle priorità) sia la condotta tattica e la prevenzione delle crisi.
*(Fonte: Modulo 14 - Le Operazioni Aeree - generalità)*

---

### Domanda 39 — Le due macro-operazioni fondamentali di Air Mobility nella dottrina aerospaziale sono:
> [!check] Risposta corretta
> **Air Transport (Trasporto Aereo) e Air-to-Air Refuelling (Rifornimento in Volo)**

**Spiegazione:** Il pilastro dell'**Air Mobility** consente la proiezione e il sostentamento delle forze a grande distanza e si articola in due macro-operazioni complementari: l'**Air Transport** (trasporto aereo ad ala fissa o rotante di personale, equipaggiamenti e rifornimenti, suddiviso in cinque tipologie di missione) e l'**Air-to-Air Refuelling (AAR)** (rifornimento in volo). L'AAR agisce da moltiplicatore di forza perché estende il raggio d'azione dei velivoli tattici, ne aumenta la permanenza in zona d'operazioni e consente il decollo con maggiore carico bellico, pur richiedendo compatibilità di equipaggiamenti (*probe and drogue* o *boom*), procedure e inserimento nell'ATO.
*(Fonte: Modulo 17 - Operazioni di Air Mobility)*

---

### Domanda 40 — In ambito dottrinale militare congiunto, cosa si intende con la sigla JOA?
> [!check] Risposta corretta
> **Joint Operations Area (Area delle Operazioni Congiunte)**

**Spiegazione:** La **JOA** (*Joint Operations Area*) è l'area geografica del teatro operativo in cui il **Joint Force Commander (JFC)**, tramite il *Joint Task Force Headquarters* (JTFHQ), pianifica, dirige e coordina l'impiego integrato delle diverse componenti militari: aerea (**JFAC**), terrestre (**LCC**), marittima (**MCC**) e delle operazioni speciali (**SOCC**). All'interno della JOA, il comandante della componente aerea (COM JFAC) ricopre di norma anche i ruoli di **JFADC** (responsabile della difesa aerea e missilistica e della produzione della RAP) e di **JFACA** (responsabile del controllo e della gestione dello spazio aereo tramite l'ACP).
*(Fonte: Modulo 7 - Organizzazione sistema C2 all'interno teatro operativo (JOA))*

---

### Domanda 41 — L'Air Transport, nelle operazioni di air mobility, contempla 5 missioni:
> [!check] Risposta corretta
> **Routine AT, Air Logistic Support, Airborne Operations, Aeromedical Evacuation, Support to other missions**

**Spiegazione:** Nell'ambito dell'*Air Mobility*, la branca dell'**Air Transport** (condotta con velivoli ad ala fissa e ad ala rotante) si declina in cinque missioni dottrinali specifiche: **Routine AT** (trasporto aereo ordinario per schieramento e rischieramento rapido di forze), **Air Logistic Support** (sostegno logistico, distribuzione, recupero e operazioni di evacuazione di non combattenti - NEO), **Airborne Operations** (lancio o rilascio di forze militari vicino all'obiettivo, spesso in pacchetti COMAO), **Aeromedical Evacuation** (trasporto sanitario specializzato di feriti o malati sotto supervisione medica) e **Support to other missions** (supporto dedicato, incluse le *Special Air Operations* - SAO).
*(Fonte: Modulo 17 - Operazioni di Air Mobility)*

---

### Domanda 42 — In ambito Routine Air Ops (trasporto aereo ordinario), quale distinzione geografica viene applicata?
> [!check] Risposta corretta
> **Trasporto Aereo Strategico (inter-teatro / tra teatri) e Tattico (intra-teatro / nel teatro)**

**Spiegazione:** Le *Routine Air Ops* consentono ai comandanti di schierare, impiegare e rischierare forze ed equipaggiamenti con rapidità su lunghe distanze e si distinguono geograficamente e gerarchicamente in due categorie: **Trasporto Aereo Strategico** (**inter-theatre**, cioè tra diversi teatri operativi o dalla madrepatria al teatro), che rimane di norma sotto Comando e Controllo nazionale, e **Trasporto Aereo Tattico** (**intra-theatre**, cioè all'interno della stessa area operativa), il cui controllo tattico (TACON) può essere delegato al JFC, che lo esercita operativamente tramite l'**ALCC** (*Airlift Coordination Centre*).
*(Fonte: Modulo 17 - Operazioni di Air Mobility)*

---

### Domanda 43 — Le operazioni JPR (Joint Personnel Recovery) si articolano normalmente in cinque compiti sequenziali:
> [!check] Risposta corretta
> **Report (Segnalare), Locate (Localizzare), Support (Supportare), Recover (Recuperare) e Reintegrate (Reintegrare)**

**Spiegazione:** Il **JPR** (*Joint Personnel Recovery*) racchiude gli sforzi militari, diplomatici e civili volti a recuperare il personale militare o civile rimasto isolato dalla propria unità in situazioni critiche, ed è articolato in cinque compiti sequenziali fissi: **Segnalare** (*Report*), **Localizzare** (*Locate*), **Supportare** (*Support*), **Recuperare** (*Recover*) e **Reintegrare** (*Reintegrate*). Le missioni JPR spaziano dal SAR in tempo di pace fino al *Combat-SAR* (CSAR), *Combat Recovery* (CR) e *Non-conventional Assisted Recovery* (NAR) in tempo di conflitto, svolgendo la triplice funzione di sostenere il morale degli equipaggi, negare intelligence al nemico e preservare risorse umane pregiate.
*(Fonte: Modulo 18 - JPR)*

---

### Domanda 44 — Qual è la definizione dottrinale di A.C.P. (Airspace Control Plan)?
> [!check] Risposta corretta
> **Piano che disciplina l'Airspace Management e l'identificazione degli assetti per prevenire il fratricidio (blue on blue)**

**Spiegazione:** L'**ACP** (*Airspace Control Plan*), elaborato dall'*Airspace Control Authority* (ACA) e attuato operativamente tramite l'**Airspace Control Order (ACO)**, è il piano che disciplina l'*Airspace Management* nella JOA per rendere sicuro, spedito ed ordinato il flusso di tutti gli aeromobili delle forze aeree, terrestri e navali. Esso si fonda sull'integrazione complementare tra metodi procedurali — tramite gli **Airspace Control Means (ACM)** come corridoi di transito (TC), corridoi speciali (SC), ROZ e WFZ — e metodi positivi — mediante l'impiego prepianificato dell'**IFF/SIF** — con il duplice scopo di massimizzare l'efficacia del potere aereo e minimizzare il rischio di ingaggi fratricidi (*blue on blue*).
*(Fonte: Modulo 10 - Airspace Control Plan)*

---

### Domanda 45 — Nella dottrina NATO, qual è la distinzione fondamentale tra i concetti di 'Surveillance' e 'Reconnaissance'?
> [!check] Risposta corretta
> **La sorveglianza è un'osservazione sistematica e continua nel tempo; la ricognizione è mirata a un obiettivo specifico**

**Spiegazione:** All'interno del pilastro **ISR** definito dalla AJP 3.3, le tre componenti svolgono ruoli distinti e complementari: la **Surveillance** (sorveglianza) consiste nell'osservazione **continua e sistematica** di un'area geografica o spazio aereo tramite sensori visivi, elettronici, fotografici o di altro tipo per mantenere la consapevolezza situazionale; la **Reconnaissance** (ricognizione) è un'operazione mirata, condotta in aggiunta alla sorveglianza, per acquisire **informazioni specifiche** sulle attività, sul dispositivo e sulle capacità del nemico. L'**Intelligence** rappresenta infine il prodotto derivante dall'analisi, valutazione e interpretazione di tali dati.
*(Fonte: Modulo 14 - Le Operazioni Aeree - generalità)*

---

### Domanda 46 — L'IFF (Identification Friend or Foe) è un sistema elettronico secondario impiegato per distinguere in tempo reale le forze amiche dalle minacce?
> [!check] Risposta corretta
> **Vero, consente l'identificazione rapida e cooperativa dei velivoli mediante interrogatore e transponder**

**Spiegazione:** Nel contesto del controllo dello spazio aereo e della difesa aerea, l'**IFF** (*Identification Friend or Foe*) costituisce il principale strumento di **identificazione positiva** e cooperativa degli assetti in volo. Basato sul dialogo tra un interrogatore (a terra, navale o aviotrasportato) e il *transponder* di bordo, l'IFF consente di distinguere rapidamente in tempo reale i velivoli amici nella JOA, affiancandosi alle misure procedurali previste dall'ACP (come i corridoi di transito, dove è richiesto almeno il Modo 1) per prevenire ingaggi fratricidi da parte di caccia intercettori o unità SBAD.
*(Fonte: Modulo 10 - Airspace Control Plan / Compendio Generale AVES)*

---

### Domanda 47 — L’ATM (Air Tasking Message) è il messaggio emanato per effettuare un ATO CHANGE a cura dell’ATO Coordinator?
> [!check] Risposta corretta
> **Vero, formalizza le modifiche intervenute sull'Air Tasking Order vigente durante la condotta delle operazioni**

**Spiegazione:** L'**Air Tasking Order (ATO)** è l'ordine dettagliato delle missioni aeree giornaliere, prodotto dalla *Combat Plans Division* del JFAC ed eseguito sotto il controllo tattico (TACON) della *Combat Ops Division*. Poiché l'ambiente operativo evolve dinamicamente durante la condotta delle operazioni, qualora si rendano necessarie variazioni rispetto a quanto pianificato (*ATO Changes*), l'**ATO Coordinator** (a supporto della *Combat Ops*) emana un **ATM** (*Air Tasking Message*), che formalizza e dissemina in modo tempestivo e tracciabile le modifiche all'ATO vigente verso tutte le unità interessate.
*(Fonte: Modulo 8 - Meccanica Operativa / Modulo 7 - Organizzazione sistema C2)*

---

### Domanda 48 — Gli Stormi dell'Aeronautica Militare inseriscono le missioni all’interno di una programmazione giornaliera dei voli (PVG)?
> [!check] Risposta corretta
> **Vero, è il documento standard che pianifica e coordina su base giornaliera le attività di volo del reparto**

**Spiegazione:** Nella meccanica operativa nazionale per la pianificazione dell'**OAT** (*Operational Air Traffic*), il processo C2 si articola in due fasi distinte: la *Planning Phase* (svolta il giorno precedente all'esecuzione della missione) e la *Tactical Phase* (a partire da 60 minuti prima dell'ETD). Durante la fase di pianificazione, i reparti di volo (Stormi) dell'Aeronautica Militare raccolgono le esigenze addestrative e operative e inseriscono tutte le missioni previste all'interno della **PVG** (*Programmazione Voli Giornaliera*), documento standard su cui si basano le successive verifiche di compatibilità, approvazione e coordinamento.
*(Fonte: Modulo 8 - Meccanica Operativa)*

---

### Domanda 49 — I PVG sono inviati alla Sezione ATCC del COA che valuta l’attività di volo richiesta anche per la sicurezza del volo?
> [!check] Risposta corretta
> **Vero, il COA coordina e deconfligge le attività di volo assicurando compatibilità operativa e sicurezza**

**Spiegazione:** Una volta compilata dagli Stormi nella *Planning Phase* della pianificazione OAT nazionale, la **PVG** (*Programmazione Voli Giornaliera*) viene trasmessa alla **Sezione ATCC** (*Air Traffic Coordination Centre*) del **COA** (Comando Operazioni Aerospaziali). La Sezione ATCC esamina l'attività di volo richiesta al fine di coordinarla, deconfliggerla rispetto alle altre esigenze dello spazio aereo e verificarne la compatibilità operativa e i requisiti di **sicurezza del volo**, garantendo un impiego ordinato e sicuro del traffico aereo militare.
*(Fonte: Modulo 8 - Meccanica Operativa)*

---

### Domanda 50 — Le richieste di volo degli Stormi vengono formalmente approvate dal COA tramite un messaggio denominato:
> [!check] Risposta corretta
> **AUTMIX**

**Spiegazione:** A conclusione dell'istruttoria condotta nella *Planning Phase* sulla PVG inviata dai reparti di volo, la Sezione ATCC del COA formalizza l'esito positivo della valutazione e autorizza l'esecuzione delle missioni pianificate dagli Stormi mediante l'emissione di uno specifico messaggio operativo denominato **AUTMIX**. Tale autorizzazione chiude la fase di pianificazione preliminare del giorno precedente e abilita l'attività di volo alla successiva fase tattica di controllo e coordinamento.
*(Fonte: Modulo 8 - Meccanica Operativa)*

---

### Domanda 51 — I voli SAT (Servizio Aereo Tattico) sono coordinati in fase tattica tramite la Scramble Agency e le unità ATC?
> [!check] Risposta corretta
> **Vero, il coordinamento tattico in tempo reale garantisce la separazione e la precedenza operativa**

**Spiegazione:** Nella pianificazione OAT nazionale, la **Tactical Phase** prende avvio 60 minuti prima dell'orario stimato di decollo (ETD) e prosegue durante la condotta della missione. In questa finestra temporale, il controllo dell'attività di volo è affidato alle unità **ASACS** e i voli **SAT** (*Servizio Aereo Tattico*) vengono coordinati in tempo reale attraverso l'interazione tra la **Scramble Agency** e le **unità ATC** (*Air Traffic Control*), assicurando la necessaria separazione del traffico e la priorità operativa rispetto al traffico aereo generale.
*(Fonte: Modulo 8 - Meccanica Operativa)*

---

### Domanda 282 — Quali sono le due macro aree delle operazioni di controaviazione (Counter Air / Co.A.)?
> [!check] Risposta corretta
> **Offensive Counter Air (OCA) e Defensive Counter Air (DCA)**

**Spiegazione:** Le operazioni di controaviazione (**Co.A.**, *Counter Air*), finalizzate a ottenere il desiderato grado di Controllo dell'Aria contrastando gli assetti aeronautici e missilistici avversari, si suddividono in due macro-aree: **OCA** (*Offensive Counter Air*) e **DCA** (*Defensive Counter Air*). Le operazioni **OCA** sono condotte su iniziativa delle forze amiche principalmente in territorio nemico, il più vicino possibile alle sorgenti del potere aereo avversario, e includono *Fighter Sweep*, *Escort*, **SEAD** (*Suppression of Enemy Air Defence*, tramite *Hard/Soft Kill*) e *Attacchi di Controaviazione* al suolo. Le operazioni **DCA**, invece, proteggono territorio e forze amiche in risposta a un'azione ostile e si dividono in **Difesa Aerea Attiva** (con *Air Defence Fighter* - ADF e unità *SBAD*) e **Difesa Aerea Passiva** (*early warning*, *camouflage*, *deception*, *dispersion* e *hardening*).
*(Fonte: Modulo 16 - Operazioni di controllo dell'aria)*


---


## RADAR (16 domande)

### Domanda 52 — Cosa significa la sigla RADAR?
> [!check] Risposta corretta
> **Radio Detection and Ranging**

**Spiegazione:** L'acronimo RADAR deriva dall'inglese *Radio Detection and Ranging* e sintetizza le due funzioni fisiche fondamentali dell'apparato: la rivelazione di un bersaglio nello spazio (in direzione/azimut, *Detection*) e la misura della sua distanza (*Ranging*) mediante l'impiego di onde elettromagnetiche a radiofrequenza. Nato storicamente per l'esigenza militare di allerta precoce (*early warning*) nella sorveglianza aerea, oggi trova impiego fondamentale anche nel controllo del traffico aereo (ATC), nella navigazione marittima e nelle osservazioni meteorologiche.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 2–3, 5)*

### Domanda 53 — Che cosa è il PSR?
> [!check] Risposta corretta
> **Primary Surveillance Radar**

**Spiegazione:** Il PSR (*Primary Surveillance Radar*, Radar Primario di Sorveglianza) è il sistema radar convenzionale che localizza i bersagli sfruttando esclusivamente la riflessione passiva delle onde radio ad alta frequenza sulla struttura fisica dell'aeromobile. Essendo un sensore attivo non cooperante, rileva qualsiasi oggetto volante (anche privo di apparati di bordo o con transponder spento), fornendo posizione in distanza (range) e direzione (azimut), ma senza ottenere direttamente dati di identità o quota barometrica dal velivolo.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4)*

### Domanda 54 — Che cosa è il SSR?
> [!check] Risposta corretta
> **Secondary Surveillance Radar**

**Spiegazione:** L'SSR (*Secondary Surveillance Radar*, Radar Secondario di Sorveglianza) è un sistema di sorveglianza attivo cooperante basato sullo scambio di segnali radio codificati tra un interrogatore a terra ($1030\text{ MHz}$) e un transponder installato a bordo del velivolo ($1090\text{ MHz}$). Rispetto al radar primario (PSR), richiede minore potenza di trasmissione (poiché il segnale percorre una sola tratta per ciascuna frequenza anziché attenuarsi in andata e ritorno) e permette di ricevere dal bersaglio informazioni aggiuntive come identità, altitudine, eventuali emergenze o tipologia di missione.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4)*

### Domanda 55 — Qual è il principio di funzionamento del transponder di bordo nel sistema radar?
> [!check] Risposta corretta
> **Risponde alle interrogazioni del radar secondario di terra trasmettendo un segnale radio codificato**

**Spiegazione:** Il transponder (*Transmitting Responder*) è l'apparato di bordo che rende cooperante l'aeromobile nel sistema SSR/IFF. Quando viene raggiunto dal segnale codificato di interrogazione trasmesso dal radar secondario di terra ($1030\text{ MHz}$), il transponder lo decodifica e genera automaticamente una risposta radio codificata ($1090\text{ MHz}$) verso l'interrogatore. A seconda della modalità richiesta (Mode 1, 2, 3/A, C o Modo S), la risposta trasporta dati essenziali per il controllo del traffico aereo e la difesa aerea, quali codice identificativo, altitudine barometrica o segnalazioni di emergenza.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4)*

### Domanda 56 — Quali parametri geometrici fondamentali misura un apparato RADAR di sorveglianza per localizzare un bersaglio?
> [!check] Risposta corretta
> **Rivelazione in azimut e misura della distanza tramite il tempo di propagazione delle onde radio**

**Spiegazione:** Un radar di sorveglianza bidimensionale (2D) localizza un bersaglio sul piano orizzontale misurando due coordinate polari fondamentali: la direzione angolare (**azimut**), definita come l'angolo in gradi formato dalla congiungente radar–bersaglio rispetto al Nord geografico (ricavato dall'orientamento dell'antenna al momento della ricezione), e la **distanza** (*range*), calcolata misurando il tempo impiegato dall'onda elettromagnetica per compiere il percorso di andata e ritorno. I radar 3D aggiungono a queste due misure anche l'angolo di elevazione per determinare la quota del bersaglio.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 5, 8–9)*

### Domanda 57 — Come funziona il radar primario (PSR)?
> [!check] Risposta corretta
> **Un radar primario trasmette un segnale ad alta frequenza che viene riflesso passivamente dall’oggetto bersaglio**

**Spiegazione:** Il funzionamento fisico del radar primario (PSR) si basa sul fenomeno della riflessione elettromagnetica: il trasmettitore irradia tramite l'antenna brevi impulsi ad alta frequenza nello spazio circostante; quando l'onda incontra un ostacolo metallico o un aeromobile, una piccola frazione dell'energia incidente viene riflessa passivamente verso il radar sotto forma di "eco radar". Il ricevitore capta questi echi deboli e, attraverso l'analisi temporale del ritardo rispetto all'impulso trasmesso e l'orientamento dell'antenna, determina la distanza e l'azimut del bersaglio.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4)*

### Domanda 58 — Come funziona il radar secondario (SSR)?
> [!check] Risposta corretta
> **Il radar secondario trasmette un segnale codificato detto “INTERROGAZIONE” a cui risponde attivamente il transponder**

**Spiegazione:** A differenza del PSR che sfrutta la riflessione passiva, il radar secondario (SSR) realizza una comunicazione attiva bidirezionale. L'apparato di terra trasmette un segnale codificato chiamato "interrogazione" ($1030\text{ MHz}$); l'aeromobile, per essere rilevato da questo sistema, deve avere a bordo un transponder funzionante che riceve l'interrogazione e risponde attivamente ($1090\text{ MHz}$) con un treno di impulsi codificati. Questa risposta fornisce all'operatore dati impossibili da ricavare con il solo eco primario, come quota barometrica, codice squawk, problemi tecnici a bordo o allarmi.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4)*

### Domanda 59 — Nel funzionamento di un radar a impulsi, cosa si intende per PRT (Pulse Repetition Time)?
> [!check] Risposta corretta
> **L'intervallo di tempo che intercorre tra l'inizio di due impulsi a radiofrequenza consecutivi**

**Spiegazione:** Un radar a impulsi alterna ciclicamente una brevissima fase di trasmissione (TX, di durata $\tau$) e una fase molto più lunga di ascolto in ricezione (RX, detta tempo di attesa $T_A$). Il **PRT** (*Pulse Repetition Time*, o periodo di ripetizione degli impulsi) è il tempo totale che intercorre tra l'inizio di un impulso trasmesso e l'inizio del successivo ($\text{PRT} = \tau + T_A$), ed è l'inverso della frequenza di ripetizione PRF ($\text{PRF} = 1/\text{PRT}$). Il valore del PRT è un parametro progettuale cruciale perché determina la portata massima teorica non ambigua del radar: un eco che arrivasse dopo l'emissione dell'impulso successivo verrebbe infatti attribuito erroneamente a quest'ultimo.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 6–8)*

### Domanda 60 — Come si calcola la portata/range (D) di un radar in funzione del tempo di andata e ritorno (Δt)?
> [!check] Risposta corretta
> **D = (c · Δt) / 2**

**Spiegazione:** Le onde elettromagnetiche si propagano in atmosfera a velocità costante pari alla velocità della luce ($c \approx 3 \cdot 10^8\text{ m/s}$, ovvero $300.000\text{ km/s}$). Poiché l'impulso radar deve percorrere la distanza $D$ dal radar al bersaglio e l'eco riflesso deve percorrere la stessa distanza $D$ al ritorno prima di raggiungere il ricevitore, lo spazio totale percorso nel tempo misurato $\Delta t$ è $2D = c \cdot \Delta t$. Di conseguenza, la distanza del bersaglio (*Range*) si calcola dimezzando tale prodotto: $\text{Range} = (c \cdot \Delta t) / 2$. Sostituendo $\Delta t$ con il PRT si ottiene la portata massima teorica non ambigua.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 6, 8)*

### Domanda 61 — Cosa rappresenta il parametro τ (tau) nelle caratteristiche di emissione di un apparato RADAR?
> [!check] Risposta corretta
> **La durata temporale del singolo impulso trasmesso (Pulse Width)**

**Spiegazione:** Nel diagramma temporale di un radar a impulsi, $\tau$ (*Pulse Width*) indica la durata dell'impulso a radiofrequenza durante la quale il trasmettitore è attivo (TX) ed emette energia verso lo spazio. Al termine di $\tau$, il radar commuta in ricezione per il tempo di attesa $T_A$ fino all'impulso successivo. Il parametro $\tau$ incide direttamente su due prestazioni chiave: la **portata minima** (durante $\tau$ il ricevitore è isolato dal duplexer e non può ricevere echi vicini) e la **risoluzione in distanza** (capacità di distinguere due bersagli vicini lungo la stessa radiale).
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 7)*

### Domanda 62 — Cosa è il dispositivo DUPLEXER in un impianto radar?
> [!check] Risposta corretta
> **Un commutatore/interruttore elettronico che consente a una sola antenna di funzionare sia in trasmissione (TX) che in ricezione (RX)**

**Spiegazione:** I radar a impulsi utilizzano normalmente un'unica antenna sia per irradiare gli impulsi ad altissima potenza generati dal trasmettitore, sia per captare i debolissimi echi riflessi dai bersagli. Il **Duplexer** è il commutatore elettronico rapido posto tra trasmettitore, ricevitore e antenna: durante la trasmissione dell'impulso ($\tau$) collega il trasmettitore all'antenna isolando il ricevitore per proteggerne i circuiti sensibili dalla distruzione; immediatamente dopo, durante il tempo di attesa ($T_A$), devia i segnali captati dall'antenna verso il ricevitore.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 10–11)*

### Domanda 63 — Qual è la caratteristica funzionale di un diagramma di radiazione a 'cosecante quadra' in un radar di sorveglianza?
> [!check] Risposta corretta
> **Consente una copertura completa di tutto lo spazio radar, utilizzato nell'antenna Paraboloide, compensando la perdita di segnale alle diverse distanze**

**Spiegazione:** Un'antenna a **paraboloide** tradizionale è bidimensionale (2D): misura distanza e azimut, ma non determina la quota del bersaglio. Per evitare zone d'ombra in elevazione e garantire una copertura continua di tutto lo spazio radar di sorveglianza, il riflettore parabolico viene sagomato in modo da generare un diagramma di radiazione a **cosecante quadra** ($\text{cosec}^2$). Questa particolare distribuzione dell'energia irradia maggiore potenza verso l'orizzonte (per i bersagli lontani) e minore potenza verso gli angoli di elevazione più alti (bersagli vicini), mantenendo pressoché costante l'intensità dell'eco ricevuto al variare della distanza a quota costante.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 14–15, 22)*

### Domanda 64 — In cosa consiste la tecnica di tracciamento radar 'Monopulse'?
> [!check] Risposta corretta
> **Permette di determinare con grande precisione l'angolo, quota e azimut del bersaglio confrontando i segnali ricevuti da un singolo impulso**

**Spiegazione:** Nei moderni radar 3D dotati di antenna *Phased Array* con fasci *pencil beam*, la tecnica **Monopulse** consente di ricavare con elevata precisione tutte le coordinate spaziali del bersaglio — distanza (*range*), azimut ed elevazione (da cui la quota) — elaborando l'eco di un **singolo impulso** trasmesso. Confrontando simultaneamente ampiezza e fase dei segnali ricevuti su più lobi adiacenti, il processore determina esattamente la deviazione del bersaglio rispetto all'asse del fascio ($\theta_{oba}$) e applica l'algoritmo di correzione della quota (*height correction algorithm*) che tiene conto della curvatura terrestre e della rifrazione atmosferica ($k = 4/3$).
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 19, 23–25, 28)*

### Domanda 65 — Cosa sono i Pencil Beam?
> [!check] Risposta corretta
> **Fasci radar estremamente stretti e concentrati a forma di matita, tipicamente utilizzati dai radar Phased Array**

**Spiegazione:** I *pencil beam* (fasci a matita) sono lobi di irradiazione molto stretti sia sul piano orizzontale (azimut) sia sul piano verticale (elevazione). Vengono generati dalle antenne **Phased Array** (a reticolo di fase), definite antenne "attive" perché permettono di orientare elettronicamente più fasci nello spazio agendo sullo sfasamento del segnale tra i singoli elementi radianti, senza dover inclinare meccanicamente l'antenna. Grazie alla ridotta apertura verticale di ciascun *pencil beam*, questi radar possono misurare con precisione l'angolo di elevazione e quindi la quota dei velivoli (sensori 3D).
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 12, 18, 21, 26)*

### Domanda 279 — Con riferimento alle misure di posizione fornite da un apparato RADAR (in particolare l'elevazione/quota) e alla conformazione del fascio di irradiazione (Slide 17), quale differenza fondamentale contraddistingue il fascio a ventaglio rispetto al fascio a matita (pencil beam)?
> [!check] Risposta corretta
> **Il fascio a ventaglio non consente la determinazione dell'elevazione del bersaglio, mentre il fascio a matita permette la misura precisa dell'elevazione ma richiede di coprire il volume di ricerca con diverse posizioni del fascio**

**Spiegazione:** La geometria del fascio irradiato determina quali coordinate può misurare il radar. Un radar di ricerca azimutale 2D utilizza un **fascio a ventaglio** (*fan beam*), stretto in azimut ma molto largo in verticale: un bersaglio rilevato al suo interno può trovarsi a qualsiasi angolo di elevazione, rendendo impossibile la misura della quota. Al contrario, il **fascio a matita** (*pencil beam*) è stretto in entrambe le dimensioni e permette di determinare con precisione l'elevazione del bersaglio (radar 3D), ma proprio per la sua sottigliezza richiede di orientare il fascio su più posizioni angolari in elevazione per scandire l'intero volume di ricerca.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 12, 17, 19, 21)*

### Domanda 280 — Nelle antenne radar Phased Array, per coprire in altezza lo stesso spazio di sorveglianza garantito da un'antenna a paraboloide con diagramma a cosecante quadra (cosec²), di quanti fasci si ha bisogno e perché (Slide 22)?
> [!check] Risposta corretta
> **Si ha bisogno di più fasci (pencil beam) distribuiti su diversi settori in elevazione tramite scansione verticale elettronica, poiché ciascun fascio a matita è stretto sia in azimut che in elevazione**

**Spiegazione:** Mentre un'antenna a paraboloide illumina simultaneamente l'intera estensione verticale dello spazio di sorveglianza mediante un unico fascio sagomato a cosecante quadra ($\text{cosec}^2$), un'antenna *Phased Array* impiega **più fasci *pencil beam*** per coprire lo stesso volume in altezza. Poiché ogni singolo *pencil beam* è estremamente stretto sia in azimut sia in elevazione, l'antenna ruota meccanicamente sui $360^\circ$ nel piano azimutale ed esegue simultaneamente una **scansione verticale elettronica**, distribuendo numerosi fasci a diversa elevazione e diversa portata (*Short Range* e *Long Range*) su più settori fino alla quota massima di copertura.
*(Fonte: Slide "RADARTECNICA - Lez. 1", pp. 21–22)*


---


## RADIO (20 domande)

### Domanda 66 — La portata ottica di un collegamento radio è:
> [!check] Risposta corretta
> **Direttamente proporzionale alla radice quadrata dell’altezza della stazione trasmittente e della quota del velivolo**

**Spiegazione:** Nei collegamenti radio ad onda diretta (bande VHF, UHF, SHF, EHF), le onde elettromagnetiche viaggiano in linea retta lungo la visibilità ottica (*Line of Sight*, LOS) e sono limitate geometricamente dalla curvatura terrestre e dagli ostacoli orografici. La distanza massima raggiungibile dipende quindi dalle altezze rispetto al livello del mare delle due antenne — l'altezza della stazione di terra ($h_1$) e la quota dell'aeromobile ($h_2$) — in modo direttamente proporzionale alla somma delle loro radici quadrate. All'aumentare della quota di volo o dell'elevazione del sito radio (come nei teleposti montani), l'orizzonte radio si estende proporzionalmente. Sotto i $3000\text{ ft}$ per VHF/UHF, fenomeni di rifrazione troposferica possono creare un effetto condotto che estende la portata elettromagnetica fino a circa il doppio di quella ottica, migliorando ulteriormente sul mare.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", p. 6)*

### Domanda 67 — La formula della portata ottica radio D (in Km) tra due stazioni ad altezza h1 e h2 (in metri) è:
> [!check] Risposta corretta
> **D = 3.57 · (√h1 + √h2)**

**Spiegazione:** La portata ottica massima $D$ (espressa in chilometri) tra due stazioni prive di ostacoli sulla linea di vista (LOS) è data dalla relazione geometrica $D = 3{,}57 \cdot (\sqrt{h_1} + \sqrt{h_2})$, dove $h_1$ e $h_2$ rappresentano le altezze in metri sul livello del mare dell'antenna trasmittente e di quella ricevente (o la quota del velivolo). Il coefficiente $3{,}57$ deriva geometricamente dal raggio terrestre. In ambito radioelettrico, oltre alla portata geometrica, il segnale subisce un'attenuazione di tratta in $\text{dB}$ data da $32{,}44 + 20\log f + 20\log d$, che cresce all'aumentare della frequenza $f$ ($\text{MHz}$) e della distanza $d$ ($\text{Km}$).
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", p. 6)*

### Domanda 68 — Quali sono le modalità principali per stabilire comunicazioni radio oltre la linea dell’orizzonte (BLOS)?
> [!check] Risposta corretta
> **Banda HF (sfruttando l'onda riflessa dalla ionosfera) e comunicazioni satellitari (SATCOM)**

**Spiegazione:** Quando la curvatura terrestre o i rilievi orografici impediscono la visibilità ottica diretta (*Beyond Line of Sight*, BLOS), si ricorre a due modalità principali di propagazione indiretta. La prima sfrutta la banda HF ($3$–$30\text{ MHz}$), le cui onde vengono riflesse dalla ionosfera ($60$–$400\text{ km}$ di quota) consentendo collegamenti a lunga distanza e intercontinentali tramite rimbalzi multipli Terra–ionosfera–Terra. La seconda utilizza le comunicazioni satellitari (SATCOM) mediante microonde in banda UHF, SHF ed EHF: i terminali a terra o a bordo comunicano con il transponder del satellite (in orbita LEO, MEO o GEO a $36.000\text{ km}$) su una frequenza di salita (*uplink*) e ricevono il segnale ritrasmesso su una frequenza di discesa (*downlink*).
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 5, 8, 12)*

### Domanda 69 — L’onda radio diretta in visibilità ottica si stabilisce tipicamente nelle bande di frequenza:
> [!check] Risposta corretta
> **VHF, UHF, SHF e EHF**

**Spiegazione:** Lo spettro radio è suddiviso in bande perché le onde elettromagnetiche interagiscono diversamente con l'atmosfera in funzione della frequenza. Al di sopra dei $30\text{ MHz}$, i segnali radio non vengono più riflessi dalla ionosfera ma la attraversano, propagandosi essenzialmente per onda diretta in visibilità ottica (LOS). Ciò caratterizza le bande VHF ($30$–$300\text{ MHz}$, onde metriche), UHF ($300\text{ MHz}$–$3\text{ GHz}$, onde decimetriche), SHF ($3$–$30\text{ GHz}$, onde centimetriche) ed EHF ($30$–$300\text{ GHz}$, onde millimetriche). Al contrario, le bande inferiori (LF, MF e HF) sfruttano rispettivamente l'onda di superficie (*ground wave* per diffrazione) e la riflessione ionosferica (*space wave*).
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 6–8)*

### Domanda 70 — Cosa è la modulazione di ampiezza (AM)?
> [!check] Risposta corretta
> **Un processo di modulazione che combina un segnale informativo su una portante radio, variandone l’ampiezza in funzione del segnale**

**Spiegazione:** Per trasmettere a distanza un segnale informativo a bassa frequenza (come la fonia microfonica compresa tra $300$ e $3400\text{ Hz}$), è necessario imprimerlo su un'onda elettromagnetica ad alta frequenza detta portante. Nella modulazione di ampiezza (AM), l'ampiezza istantanea della portante viene fatta variare proporzionalmente all'ampiezza del segnale modulante, mantenendo costante la frequenza della portante stessa. Il processo genera uno spettro composto dalla portante e da due bande laterali (somma e differenza tra frequenza portante e modulante). Nella modulazione di frequenza (FM), invece, è la frequenza della portante a variare in funzione dell'ampiezza del segnale fonico, offrendo maggiore immunità ai disturbi atmosferici.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 13–15)*

### Domanda 71 — Nel contesto delle radiocomunicazioni, cosa si intende per demodulazione?
> [!check] Risposta corretta
> **Il processo di estrazione del segnale informativo originale dall'onda portante a radiofrequenza**

**Spiegazione:** La demodulazione è l'operazione inversa alla modulazione e avviene all'interno del ricevitore per recuperare il segnale informativo originale (ad esempio la voce) trasportato dall'onda a radiofrequenza. Nei ricevitori aeronautici supereterodina AM, il segnale captato dall'antenna viene prima selezionato dal sintonizzatore e convertito dal mixer (tramite oscillatore locale) in una frequenza intermedia (FI) fissa, dove viene amplificato riducendo il rumore termico. Successivamente, lo stadio rivelatore esegue la demodulazione vera e propria, separando il segnale modulante in bassa frequenza dalla portante FI prima dell'amplificazione audio finale.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", p. 16)*

### Domanda 72 — Il trasmettitore a modulazione di ampiezza (AM):
> [!check] Risposta corretta
> **È in grado di modulare i segnali fonici su una portante a radiofrequenza sintetizzata variandone l'ampiezza**

**Spiegazione:** Un trasmettitore AM aeronautico è progettato per trasferire la fonia dell'operatore o del pilota su una portante radio generata da un sintetizzatore di frequenza. Quando viene premuto il comando PTT (*Push-To-Talk*), il sintetizzatore genera la portante alla frequenza selezionata, mentre il segnale fonico proveniente dal microfono viene amplificato e inviato al modulatore AM. Quest'ultimo varia l'ampiezza della portante in funzione del segnale audio; infine, un filtro passa-banda e l'amplificatore di potenza finale forniscono l'energia necessaria per irradiare il segnale tramite l'antenna.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", p. 13)*

### Domanda 73 — Quali sono le gamme di frequenza standard assegnate per le comunicazioni aeronautiche (GAT/OAT)?
> [!check] Risposta corretta
> **VHF (118 - 137 MHz civile / 110-156 MHz estesa) e UHF (225 - 400 MHz militare)**

**Spiegazione:** Le radiocomunicazioni TBT (*Terra-Bordo-Terra*) per il controllo del traffico aereo utilizzano due bande principali in visibilità ottica. La banda VHF civile assegnata ai servizi ATC-ICAO è $118$–$137\text{ MHz}$ (con canalizzazione a $8{,}33\text{ kHz}$ dal 2019 in Europa e frequenza di emergenza $121{,}5\text{ MHz}$), che negli apparati militari è estesa a $110$–$156\text{ MHz}$. La banda UHF militare si estende invece da $225$ a $400\text{ MHz}$ (con frequenza di guardia $243{,}0\text{ MHz}$ e canalizzazione a $25\text{ kHz}$): in questa gamma l'Aeronautica Militare gestisce circa il $90\%$ delle comunicazioni di controllo dei propri aeromobili.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 17–19, 24, 29)*

### Domanda 74 — Che tipo di modulazione utilizzano convenzionalmente le trasmissioni VHF in aviazione?
> [!check] Risposta corretta
> **Modulazione di ampiezza (AM) e le comunicazioni standard avvengono in chiaro**

**Spiegazione:** Le comunicazioni radiotelefoniche convenzionali nella banda VHF aeronautica ($118$–$137\text{ MHz}$) impiegano la modulazione di ampiezza (AM a doppia banda laterale, designazione A3E) e vengono trasmesse in chiaro per garantire la massima interoperabilità tra tutti gli utenti dello spazio aereo (GAT/OAT). L'impiego della modulazione AM, oltre alla semplicità costruttiva storica, offre un vantaggio operativo fondamentale in ambito ATC: se due stazioni trasmettono contemporaneamente sulla stessa frequenza, l'operatore percepisce la sovrapposizione delle due emissioni (fischio di battimento) anziché il fenomeno di cattura tipico della FM che maschererebbe completamente uno dei due interlocutori.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 17, 24, 29)*

### Domanda 75 — Le comunicazioni militari in gamma UHF consentono l'impiego integrato di:
> [!check] Risposta corretta
> **COMSEC (sicurezza delle comunicazioni) e TRANSEC (sicurezza delle trasmissioni, es. Have Quick)**

**Spiegazione:** In ambito militare, i ricetrasmettitori operanti in gamma UHF ($225$–$400\text{ MHz}$, come gli apparati di terra RT-619/NV e gli avionici SRT-651/700) garantiscono comunicazioni sicure integrando due livelli di protezione. La capacità **COMSEC** (*Communication Security*) protegge il contenuto del messaggio tramite cifratura della fonia (AM o FM Baseband/Diphase) contro l'intercettazione. La capacità **TRANSEC** (*Transmission Security*) protegge invece il collegamento radio dai disturbi intenzionali (*jamming*) mediante tecniche *Frequency Hopping* (salto di frequenza), quali **Have Quick II** ($8\text{ salti/s}$ su $1000$ frequenze sincronizzate tramite parametri WOD, TOD da GPS e NET) e **SATURN** (digitale a oltre $100\text{ salti/s}$).
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 27, 29)*

### Domanda 76 — Quale gamma di frequenza consente contatti radio oltre l'orizzonte sfruttando la riflessione ionosferica senza supporto satellitare?
> [!check] Risposta corretta
> **Gamma HF (High Frequency) da 3 a 30 MHz**

**Spiegazione:** La ionosfera, lo strato atmosferico tra $60$ e $400\text{ km}$ di quota ionizzato dalle radiazioni solari (strati D, E, F1, F2), funge da schermo naturale riflettendo verso la Terra le onde radio con frequenza inferiore a $30\text{ MHz}$. Per questo la gamma HF ($3$–$30\text{ MHz}$, onde decametriche) permette collegamenti BLOS intercontinentali a salti multipli (Terra–ionosfera–Terra) senza necessità di satelliti. Poiché la propagazione HF varia con il ciclo solare, l'ora del giorno e le *skip zone* (zone d'ombra), gli apparati moderni (come gli SRT-2007 di terra e gli RT-200/400 avionici) impiegano la tecnica **ALE** (*Automatic Link Establishment*) per sondare automaticamente i canali e selezionare la frequenza migliore.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 8–11, 28, 34)*

### Domanda 77 — Nella modulazione di ampiezza (AM), quali configurazioni di bande laterali si possono realizzare?
> [!check] Risposta corretta
> **Double Sideband (DSB), Single Sideband (SSB), Upper Sideband (USB) e Lower Sideband (LSB)**

**Spiegazione:** Lo spettro di un segnale modulato in ampiezza è costituito da tre componenti: la portante e due bande laterali simmetriche, corrispondenti alle frequenze somma e differenza tra portante e segnale modulante. Poiché l'informazione è interamente contenuta in ciascuna banda laterale, si possono adottare diverse configurazioni: **DSB** (*Double Sideband*), che trasmette entrambe le bande laterali (con portante presente nell'AM convenzionale TBT o soppressa); oppure **SSB** (*Single Sideband*), molto usata in gamma HF, in cui si sopprimono la portante e una banda laterale tramite filtro per concentrare la potenza e ridurre l'occupazione di banda, ottenendo **USB** (*Upper Sideband*) o **LSB** (*Lower Sideband*).
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 14, 24, 28)*

### Domanda 78 — L'apparato ricetrasmettitore aeroportuale OTE DTR 100 opera in:
> [!check] Risposta corretta
> **Gamme di frequenza VHF (118-137/156 MHz) e UHF (225-400 MHz) in modulazione di ampiezza (AM) per comunicazioni convenzionali**

**Spiegazione:** Il ricetrasmettitore aeroportuale OTE DTR 100 è l'apparato TBT standard impiegato dall'Aeronautica Militare per assicurare comunicazioni radio convenzionali (in chiaro) in fonia o dati in modalità simplex. Opera nelle gamme VHF ($110$–$156\text{ MHz}$, inclusa la banda civile $118$–$137\text{ MHz}$) e UHF ($225$–$400\text{ MHz}$) utilizzando la modulazione AM a doppia banda laterale (A3E), con potenza irradiata di $30\text{ W}$ e canalizzazione selezionabile a $25\text{ kHz}$ oppure $8{,}33\text{ kHz}$. È integrato nei rack pluricanali delle sale operative e telecomandato tramite il Sistema Multifono e supervisionato dalla rete ONM100.
*(Fonte: Slide "Impianti Radio dell'Aeronautica Militare", pp. 24–25, 35)*

### Domanda 79 — Dove è installato fisicamente il transponder?
> [!check] Risposta corretta
> **A bordo dell'aeromobile**

**Spiegazione:** Il transponder (*Transmitting Responder*) è l'apparato avionico installato a bordo dell'aeromobile che costituisce l'elemento cooperante del sistema radar secondario (SSR/IFF). Quando l'aeromobile entra nel lobo di copertura del radar secondario di terra, il transponder riceve gli impulsi di interrogazione sulla frequenza di $1030\text{ MHz}$, li decodifica e trasmette automaticamente un treno di impulsi di risposta sulla frequenza di $1090\text{ MHz}$ contenente il codice identificativo assegnato, la quota barometrica o eventuali codici di emergenza.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4; Appunti "Avionica e Sistemi di Bordo", § 2)*

### Domanda 80 — Quali sono le frequenze operative standard del sistema radar secondario (SSR) per interrogazione e risposta?
> [!check] Risposta corretta
> **1030 MHz in interrogazione (TX da terra) e 1090 MHz in risposta (TX di bordo), fisse e non invertibili**

**Spiegazione:** Il sistema radar secondario di sorveglianza (SSR) e la sua controparte militare IFF operano universalmente su una coppia di frequenze fisse e non invertibili in banda L/UHF: **$1030\text{ MHz}$** per l'interrogazione trasmessa dalla stazione di terra verso l'aeromobile e **$1090\text{ MHz}$** per la risposta trasmessa dal transponder di bordo verso terra. La separazione netta di $60\text{ MHz}$ tra le due portanti impedisce che i ricevitori vengano saturati dalle proprie trasmissioni o dagli echi passivi (clutter) del radar primario, garantendo l'interoperabilità mondiale tra tutti gli enti ATC e gli aeromobili.
*(Fonte: Appunti "Avionica e Sistemi di Bordo", § 2; "Compendio Generale", p. 191)*

### Domanda 81 — Cos'è operativamente il sistema militare IFF (Identification Friend or Foe)?
> [!check] Risposta corretta
> **Un sistema di identificazione cooperativo integrato con il radar secondario per distinguere assetti amici da minacce**

**Spiegazione:** L'IFF (*Identification Friend or Foe*) è l'estensione militare del radar secondario di sorveglianza (SSR) ed è impiegato nei sistemi di difesa aerea e controllo del traffico per identificare in modo certo i velivoli amici rispetto a tracce sconosciute o ostili. Operativamente funziona come sistema attivo cooperativo basato sul dialogo interrogatore–transponder sulle frequenze $1030/1090\text{ MHz}$: oltre ai modi civili (3/A e C) e al Modo S, integra modi militari dedicati (Modi 1, 2 e modi cifrati 4/5) che forniscono identificazione criptata e resistente alle contromisure elettroniche.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4; Appunti "Avionica e Sistemi di Bordo", § 2)*

### Domanda 82 — Come si chiama l'apparato a terra del sistema SSR/IFF che trasmette le interrogazioni?
> [!check] Risposta corretta
> **Interrogatore / Ricevitore (Interrogator)**

**Spiegazione:** L'architettura del radar secondario (SSR/IFF) si compone di due apparati distinti in dialogo costante: a bordo dell'aeromobile si trova il *Transponder* (che risponde), mentre presso la stazione radar a terra è installato l'**Interrogatore / Ricevitore** (*Interrogator*). L'Interrogatore genera e trasmette attraverso l'antenna SSR (spesso montata solidalmente sopra l'antenna del radar primario) gli impulsi codificati a $1030\text{ MHz}$ e riceve, decodifica ed elabora i segnali di risposta a $1090\text{ MHz}$ provenienti dai transponder dei velivoli nel proprio volume di copertura.
*(Fonte: Appunti "Domande Radar" & "Avionica e Sistemi di Bordo", § 2)*

### Domanda 83 — Il sistema SSR (Secondary Surveillance Radar) si classifica operativamente come:
> [!check] Risposta corretta
> **Sistema Attivo Cooperante (richiede apparato attivo e cooperante a bordo)**

**Spiegazione:** Dal punto di vista operativo e fisico, i sistemi radar di sorveglianza si dividono in base alla partecipazione del bersaglio. Il radar primario (PSR) è un sistema *attivo non cooperante*, poiché emette energia elettromagnetica e rileva il bersaglio tramite la sola riflessione passiva sulla fusoliera, senza richiedere apparati a bordo. Il radar secondario (SSR) si classifica invece come **sistema attivo cooperante**: è "attivo" perché l'interrogatore di terra trasmette un segnale radio a $1030\text{ MHz}$, ed è "cooperante" perché richiede la presenza e l'attivazione a bordo di un transponder funzionante che collabori rispondendo a $1090\text{ MHz}$.
*(Fonte: Slide "RADARTECNICA - Lez. 1", p. 4; Appunti "Avionica e Sistemi di Bordo", § 2)*

### Domanda 84 — Nel sistema SSR/IFF, come fa il transponder di bordo a riconoscere la modalità di interrogazione (Mode 1, 2, 3/A, C)?
> [!check] Risposta corretta
> **Misurando l'intervallo temporale in microsecondi tra l'impulso P1 e l'impulso P3**

**Spiegazione:** Le interrogazioni convenzionali del sistema SSR/IFF a $1030\text{ MHz}$ sono formate da una sequenza di impulsi denominati P1, P2 e P3. La tipologia di informazione richiesta al transponder (la modalità di interrogazione) viene codificata esattamente dall'intervallo di tempo in microsecondi ($\mu\text{s}$) che separa l'impulso P1 dall'impulso P3: ad esempio $3\,\mu\text{s}$ per il Mode 1, $5\,\mu\text{s}$ per il Mode 2, $8\,\mu\text{s}$ per il Mode 3/A (codice squawk di identificazione) e $21\,\mu\text{s}$ per il Mode C (quota barometrica). L'impulso P2, posto a $2\,\mu\text{s}$ da P1 e trasmesso da un'antenna omnidirezionale, serve invece per la soppressione dei lobi laterali (SLS), evitando risposte spurie fuori dal fascio principale.
*(Fonte: Web / Standard ICAO & NATO SSR/IFF)*

### Domanda 85 — Per consentire il funzionamento della modalità MODO S nel sistema radar secondario:
> [!check] Risposta corretta
> **Sia il transponder di bordo sia l'interrogatore radar a terra devono essere abilitati al Modo S**

**Spiegazione:** Il Modo S (*Select*) rappresenta l'evoluzione digitale e selettiva del radar secondario rispetto ai modi convenzionali A e C: assegna a ciascun aeromobile un indirizzo ICAO univoco a 24 bit, riduce il sovraffollamento delle frequenze ($1030/1090\text{ MHz}$) interrogando selettivamente i singoli velivoli e consente lo scambio di dati avanzati (quota con risoluzione a $25\text{ ft}$, identificativo volo, parametri di volo EHS e supporto al sistema anticollisione ACAS/TCAS). Trattandosi di un protocollo di dialogo bidirezionale dedicato, entrambi gli estremi del collegamento — l'interrogatore di terra e il transponder di bordo — devono essere abilitati al Modo S.
*(Fonte: Appunti "Avionica e Sistemi di Bordo", § 2 & "Servizi Navigazione Aerea")*


---


## MATEMATICA E FISICA (10 domande)

### Domanda 86 — La legge di Boyle enuncia:
> [!check] Risposta corretta
> **a temperatura costante, il volume della massa di gas è inversamente proporzionale alla sua pressione (PV=costante)**

**Spiegazione:** L'equazione di stato dei gas perfetti ($PV = nRT$) unifica le leggi fondamentali dei gas. La **legge di Boyle** descrive in particolare le trasformazioni **isotermiche** (a temperatura $T$ costante): il volume $V$ occupato da una massa fissa di gas è inversamente proporzionale alla sua pressione $P$, ovvero $P \cdot V = \text{costante}$ (se la pressione raddoppia, il volume si dimezza). Completano il quadro le due leggi di Gay-Lussac, secondo cui a pressione costante il volume è direttamente proporzionale alla temperatura e a volume costante la pressione è direttamente proporzionale alla temperatura.
*(Fonte: Fisica_ITA.pptx, Slide 22)*

### Domanda 87 — Il teorema di conservazione dell'energia afferma che:
> [!check] Risposta corretta
> **l’energia meccanica di un sistema soggetto solo a forze conservative non cambia nel tempo (Ka+Ua=Et)**

**Spiegazione:** Un campo di forze è detto **conservativo** quando il lavoro compiuto per spostare un punto materiale tra due posizioni $A$ e $B$ è indipendente dal cammino percorso ed è esprimibile tramite la variazione di energia potenziale ($L_{A,B} = -\Delta U = U_A - U_B$). Combinando questa proprietà con il teorema dell'energia cinetica ($L_{A,B} = \Delta K = K_B - K_A$), si ricava che la somma di energia cinetica $K$ ed energia potenziale $U$ rimane costante nel tempo: $K_A + U_A = K_B + U_B = E_T$. Pertanto, in assenza di forze dissipative (come l'attrito, che trasforma parte dell'energia in calore), l'energia meccanica totale $E_T$ si conserva.
*(Fonte: Fisica_ITA.pptx, Slide 18)*

### Domanda 88 — La quantità di moto di un punto materiale libero viene scritta:
> [!check] Risposta corretta
> **q=mv (vettore su q e v)**

**Spiegazione:** La **quantità di moto** $\vec{q}$ di un punto materiale libero è una grandezza **vettoriale** definita come il prodotto tra la massa scalare $m$ e il vettore velocità $\vec{v}$: $\vec{q} = m\vec{v}$, misurata nel Sistema Internazionale in $\text{kg}\cdot\text{m/s}$ (o $\text{N}\cdot\text{s}$). Essa possiede sempre la stessa direzione e lo stesso verso del moto del corpo. Per il teorema dell'impulso, l'impulso di una forza agente in un intervallo di tempo ($\vec{I}_{1,2} = \int_{t_1}^{t_2}\vec{f}\,dt$) eguaglia esattamente la variazione della quantità di moto ($\vec{q}_2 - \vec{q}_1 = m\vec{v}_2 - m\vec{v}_1$).
*(Fonte: Fisica_ITA.pptx, Slide 13)*

### Domanda 89 — Secondo principio della dinamica
> [!check] Risposta corretta
> **L’accelerazione prodotta su un punto materiale è direttamente proporzionale in modulo all’intensità della risultante delle forze applicate ed è diretta lungo la risultante stessa. (f=ma)**

**Spiegazione:** In un sistema di riferimento inerziale, il **secondo principio della dinamica** mette in relazione la causa del moto (la risultante delle forze $\vec{f}$) con il suo effetto (l'accelerazione $\vec{a}$) attraverso la massa inerziale $m$ del corpo: $\vec{f} = m\vec{a}$. L'accelerazione risulta quindi direttamente proporzionale all'intensità della forza risultante e diretta lungo la stessa retta e verso; nel S.I. la forza si misura in Newton ($1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$). Insieme al primo principio (inerzia del punto libero) e al terzo principio (azione e reazione), costituisce il fondamento della meccanica classica.
*(Fonte: Fisica_ITA.pptx, Slide 12)*

### Domanda 90 — Qual è l’unità di misura della potenza?
> [!check] Risposta corretta
> **Watt (W)**

**Spiegazione:** La **potenza** $W$ rappresenta il lavoro compiuto nell'unità di tempo, definita come $W = \frac{dL}{dt}$ (e per un punto materiale in movimento sotto una forza $\vec{f}$ a velocità $\vec{v}$, equivale a $W = \vec{f} \cdot \vec{v}$). Nel Sistema Internazionale, poiché il lavoro si misura in Joule ($\text{J}$) e il tempo in secondi ($\text{s}$), l'unità di misura della potenza è il $\text{J/s}$, denominato **Watt (W)**. In ambito motoristico e aeronautico è molto diffuso anche il cavallo vapore ($\text{HP}$), legato al Watt dal fattore di conversione $1\text{ HP} = 735\text{ W}$.
*(Fonte: Fisica_ITA.pptx, Slide 24)*

### Domanda 91 — Come sono rappresentati i numeri reali?
> [!check] Risposta corretta
> **Come punti su una retta e quindi sono un insieme continuo**

**Spiegazione:** L'insieme dei **numeri reali** $\mathbb{R}$ nasce dall'unione dei numeri razionali $\mathbb{Q}$ (esprimibili come frazioni) e dei numeri irrazionali (come $\sqrt{2}$ o $\pi$, con rappresentazione decimale infinita non periodica). Geometricamente, i numeri reali sono in corrispondenza biunivoca con tutti i punti di una retta orientata (detta **retta reale**): ogni punto individua un unico numero reale e viceversa. Questa proprietà di completezza rende $\mathbb{R}$ un insieme **continuo**, privo di interruzioni lungo la retta.
*(Fonte: Analisi Matematica di base)*

### Domanda 92 — Dato un certo numero 1111 (base 2) trasformalo in base 10
> [!check] Risposta corretta
> **15**

**Spiegazione:** Il sistema binario (base $2$) è un sistema di numerazione posizionale che impiega solo le cifre $0$ e $1$, in cui ogni posizione verso sinistra corrisponde a una potenza crescente di $2$ a partire da $2^0$. Per convertire un numero binario in decimale (base $10$) si moltiplica ciascuna cifra per la rispettiva potenza di $2$ e si sommano i termini: $1\cdot 2^3 + 1\cdot 2^2 + 1\cdot 2^1 + 1\cdot 2^0 = 8 + 4 + 2 + 1 = 15$. Come regola generale, una stringa di $n$ bit tutti uguali a $1$ vale sempre $2^n - 1$ (per $4$ bit, $2^4 - 1 = 15$).
*(Fonte: Aritmetica / Sistemi di numerazione)*

### Domanda 93 — Cosa è una funzione?
> [!check] Risposta corretta
> **Dati due insiemi A e B, è una legge che trasforma ogni elemento di x di A in elemento Y di B**

**Spiegazione:** Dati due insiemi non vuoti $A$ (detto **dominio** o insieme di partenza) e $B$ (detto **codominio** o insieme di arrivo), una **funzione** $f: A \to B$ è una legge che associa a **ogni** elemento $x \in A$ **uno e un solo** elemento $y \in B$, scritto $y = f(x)$. L'elemento $y$ è detto immagine di $x$, mentre $x$ è la controimmagine di $y$. La condizione fondamentale di definizione richiede quindi che tutti gli elementi del dominio abbiano un'immagine nel codominio e che tale associazione sia univoca.
*(Fonte: Analisi Matematica di base)*

### Domanda 94 — Quanti tipi di discontinuità esistono?
> [!check] Risposta corretta
> **3 (tipo 1, 2 e 3)**

**Spiegazione:** Una funzione $f(x)$ è continua in un punto $x_0$ se $\lim_{x \to x_0} f(x) = f(x_0)$; quando questa uguaglianza non vale, in $x_0$ si verifica una discontinuità, classificabile in **3 specie (tipi)**. Si ha discontinuità di **1ª specie** (di salto) quando i limiti destro e sinistro sono entrambi finiti ma diversi tra loro; di **2ª specie** (essenziale) quando almeno uno dei due limiti è infinito oppure non esiste; di **3ª specie** (eliminabile) quando il limite esiste finito ma è diverso da $f(x_0)$ oppure la funzione non è definita in $x_0$.
*(Fonte: Analisi Matematica di base)*

### Domanda 95 — Come si rappresenta il teorema di Carnot nel triangolo ABC? (naturale estensione del teorema di Pitagora)
> [!check] Risposta corretta
> **Naturale estensione del teorema di Pitagora AC2=BC2+AB2-2BC AB cos(β)**

**Spiegazione:** Il **teorema di Carnot** (o **teorema del coseno**) estende il teorema di Pitagora a un triangolo qualsiasi $ABC$, legando le lunghezze dei tre lati al coseno di uno degli angoli. Esso afferma che il quadrato di un lato è uguale alla somma dei quadrati degli altri due lati, diminuita del loro doppio prodotto per il coseno dell'angolo tra essi compreso: $AC^2 = BC^2 + AB^2 - 2 \cdot BC \cdot AB \cdot \cos(\beta)$. Quando l'angolo $\beta$ è retto ($90^\circ$), $\cos(90^\circ) = 0$ e la formula si riduce al classico teorema di Pitagora ($AC^2 = BC^2 + AB^2$).
*(Fonte: Trigonometria di base)*


---


## NAVIGAZIONE (35 domande)

### Domanda 96 — Volando con altimetro regolato su 1013.25 hPa da un'area di alta pressione verso un'area di bassa pressione senza correggere il regolaggio, l'altimetro:
> [!check] Risposta corretta
> **Indicherà una quota superiore a quella reale (pericolo di volare più bassi di quanto indicato)**

**Spiegazione:** L'altimetro barometrico misura la quota rispetto a una superficie isobarica di riferimento impostata nella finestrella di Kollsman (ad esempio $1013.25\text{ hPa}$). Volando da un'area di alta pressione verso una di bassa pressione senza aggiornare il regolaggio, le superfici isobariche si abbassano progressivamente verso il suolo. Mantenendo costante la quota indicata sullo strumento, il velivolo segue la superficie isobarica discendente e si ritrova a una quota reale inferiore rispetto al livello medio del mare (*"From high to low, look out below"*); viceversa, volando da bassa ad alta pressione, l'altitudine reale risulta superiore a quella indicata.
*(Fonte: Approfondimento Quote, Temperature e Velocità; FAA PHAK Cap. 8)*

### Domanda 97 — Il DME, accoppiato a una stazione VOR, fornisce al pilota:
> [!check] Risposta corretta
> **La distanza obliqua (slant range) tra la stazione e l'aeromobile misurata in NM**

**Spiegazione:** Il DME (*Distance Measuring Equipment*) opera in banda UHF misurando il tempo di propagazione di coppie di impulsi radio scambiati tra l'interrogatore di bordo e il transponder a terra, ricavando la distanza diretta in linea d'aria (*slant range*) espressa in miglia nautiche (NM). La differenza tra *slant range* e distanza orizzontale al suolo è trascurabile a grande distanza dalla stazione, ma diventa sensibile vicino alla verticale ad alta quota (sorvolando la stazione a $6000\text{ ft}$, il DME indica circa $1\text{ NM}$). Quando il DME è accoppiato a un VOR (VOR/DME), la sintonizzazione della frequenza VHF del VOR seleziona automaticamente il corrispondente canale UHF del DME.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 8-9; FAA IFH Cap. 9)*

### Domanda 98 — L'ora del fuso (Zone Time - ZT) è definita come:
> [!check] Risposta corretta
> **L'ora assegnata al meridiano centrale del fuso orario di appartenenza**

**Spiegazione:** La Terra compie una rotazione completa di $360^\circ$ in $24\text{ ore}$, corrispondente a $15^\circ$ di longitudine per ogni ora ($1^\circ = 4\text{ minuti}$). Per uniformare l'orario civile, la superficie terrestre è suddivisa in 24 fusi orari larghi $15^\circ$ di longitudine, centrati sui meridiani multipli di $15^\circ$. L'ora del fuso (*Zone Time - ZT*) corrisponde all'ora media locale (*LMT*) del meridiano centrale del fuso stesso, consentendo a tutte le località comprese nello stesso fuso di adottare il medesimo scarto intero rispetto al tempo UTC/GMT.
*(Fonte: FAA Flight Navigator Handbook, Cap. 1)*

### Domanda 99 — Volando da una zona di aria calda verso una zona di aria fredda, se viene mantenuta costante l'indicazione dell'altimetro:
> [!check] Risposta corretta
> **L'altitudine reale dell'aeromobile sul livello medio del mare decresce ("da caldo a freddo l'altimetro segna alto")**

**Spiegazione:** Poiché l'aria fredda è più densa dell'aria calda, la sua colonna verticale risulta compressa e la pressione diminuisce più rapidamente con la quota. Di conseguenza, una medesima superficie isobarica si trova a un'altitudine reale più bassa sul livello medio del mare in aria fredda rispetto all'aria calda. Mantenendo costante l'indicazione dell'altimetro mentre si entra in una massa d'aria più fredda, l'altitudine reale del velivolo diminuisce (*"Hot to cold, look out below"*), riducendo il margine sugli ostacoli; il fenomeno opposto si verifica volando da aria fredda verso aria calda.
*(Fonte: Approfondimento Quote, Temperature e Velocità; FAA Flight Instruments General Cap. 3)*

### Domanda 100 — Il Radio Magnetic Indicator (RMI) è uno strumento integrato che:
> [!check] Risposta corretta
> **Fornisce informazioni di prua magnetica del velivolo e di rilevamenti angolari riferiti a radiofari NDB o stazioni VOR**

**Spiegazione:** L'RMI (*Radio Magnetic Indicator*) combina in un unico quadrante una rosa bussola rotante (asservita al girodirezionale/valvola di flusso, che indica la prua magnetica del velivolo sotto l'indice superiore) con una o due lancette (*bearing pointers*) selezionabili sui ricevitori ADF (NDB) o VOR. La punta di ciascuna lancetta indica direttamente il rilevamento magnetico *verso* la stazione (QDM), mentre la coda indica il rilevamento magnetico *dalla* stazione (QDR o radiale VOR), offrendo una lettura immediata dell'orientamento del velivolo rispetto alle radioassistenze.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 7; FAA Flight Instruments General Cap. 3)*

### Domanda 101 — Il numero di Mach indicato dal Machmetro viene calcolato dal rapporto tra:
> [!check] Risposta corretta
> **Pd (pressione dinamica) / Ps (pressione statica)**

**Spiegazione:** In cinematica il numero di Mach è definito come il rapporto tra velocità vera e velocità locale del suono ($M = \text{TAS} / \text{LSS}$). Dalle equazioni aerodinamiche per fluidi compressibili in regime subsonico emerge che il numero di Mach è funzione diretta del rapporto tra la pressione dinamica d'impatto ($P_d = P_t - P_s$) e la pressione statica ambiente ($P_s$). Per questo motivo il machmetro combina una capsula manometrica sensibile a $P_t - P_s$ e una capsula aneroide sensibile a $P_s$, fornendo un'indicazione indipendente dalla temperatura esterna.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 2, par. 13)*

### Domanda 102 — I rilevamenti radioelettrici possono essere tracciati sulla carta conforme di Lambert con linee rette perché:
> [!check] Risposta corretta
> **Il rilevamento radio si propaga secondo un arco di cerchio massimo (ortodromia) che sulla carta di Lambert è ottimamente approssimato da una retta**

**Spiegazione:** Le onde radio si propagano lungo il percorso più breve sulla superficie terrestre, ovvero lungo un arco di cerchio massimo (ortodromia). Nella proiezione conica conforme di Lambert (basata su un cono secante su due paralleli standard), le deformazioni di scala sono minime e gli archi di cerchio massimo risultano rettificati con ottima approssimazione. Ciò consente di tracciare direttamente i rilevamenti radio (QDM/QDR o radiali VOR) sulla carta come segmenti rettilinei con una comune riga.
*(Fonte: FAA Flight Navigator Handbook, Cap. 1 & 4; Dispensa Martini, Sez. 6)*

### Domanda 103 — Un aeromobile deve guadagnare 5000 ft di quota su una distanza al suolo di 16 NM con GS di 240 kts. Quale rateo di salita (ROCD) medio deve mantenere?
> [!check] Risposta corretta
> **1250 ft/min**

**Spiegazione:** Per determinare il rateo medio di salita o discesa a partire da dislivello ($\Delta h$), distanza al suolo ($D$) e Ground Speed ($\text{GS}$), si calcola dapprima il tempo disponibile in minuti con $t = \frac{D}{\text{GS}} \times 60$, quindi si divide la variazione di quota per il tempo ottenuto: $\text{ROC} = \frac{\Delta h}{t}$. Nel caso specifico, $t = \frac{16\text{ NM}}{240\text{ kts}} \times 60 = 4\text{ min}$, da cui $\text{ROC} = \frac{5000\text{ ft}}{4\text{ min}} = 1250\text{ ft/min}$.
*(Fonte: Calcolo aeronautico standard / FAA PHAK)*

### Domanda 104 — Nelle linee caratteristiche di navigazione, l'ORTODROMIA è:
> [!check] Risposta corretta
> **L'arco di cerchio massimo che congiunge due punti sulla sfera terrestre e rappresenta la distanza più breve**

**Spiegazione:** L'ortodromia (o arco di cerchio massimo) è la linea ottenuta intersecando la superficie sferica terrestre con un piano passante per il centro della Terra e contenente i due punti considerati. Rappresenta il percorso geometricamente più breve tra due località sulla sfera. Ad eccezione dell'Equatore e dei meridiani, l'ortodromia interseca i meridiani terrestri con angoli variabili, richiedendo continue variazioni di prua lungo le rotte oceaniche o a lungo raggio.
*(Fonte: FAA Flight Navigator Handbook, Cap. 1)*

### Domanda 105 — I principali requisiti costruttivi ed operativi di una bussola magnetica sono:
> [!check] Risposta corretta
> **Sensibilità, tranquillità e stabilità statica**

**Spiegazione:** Nella teoria classica della bussola magnetica aeronautica a liquido, lo strumento deve soddisfare tre requisiti fondamentali: **stabilità statica** (mantenimento del piano orizzontale della rosa grazie al baricentro posto al di sotto del punto di sospensione), **sensibilità** (prontezza dell'ago nel tornare in equilibrio dopo una perturbazione, legata al momento magnetico e alla componente orizzontale $H$ del campo terrestre) e **tranquillità** (rapido smorzamento delle oscillazioni dovute a vibrazioni o turbolenze mediante il liquido interno).
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 3, par. 4)*

### Domanda 106 — Un aeromobile è stabilizzato su un sentiero ILS standard a 3°. Se l'altezza sul sentiero è 2500 ft, a quale distanza approssimativa dalla soglia pista si trova?
> [!check] Risposta corretta
> **Circa 8.3 NM**

**Spiegazione:** Un sentiero di discesa standard di $3^\circ$ corrisponde a un gradiente verticale approssimativo di $300\text{ ft/NM}$ (dalla regola pratica dell'$1:60$, secondo cui $1^\circ \approx 100\text{ ft/NM}$). Dividendo l'altezza rispetto alla soglia pista per $300\text{ ft/NM}$ si ricava rapidamente la distanza in miglia nautiche: $\frac{2500\text{ ft}}{300\text{ ft/NM}} \approx 8.3\text{ NM}$. La stessa geometria permette di stimare il rateo di discesa su un sentiero a $3^\circ$ con la relazione pratica $\text{ROD (ft/min)} \approx 5 \times \text{GS (kts)}$.
*(Fonte: Regola pratica 1:60 / FAA Instrument Flying Handbook Cap. 9)*

### Domanda 107 — Cosa si intende per Equivalent Air Speed (EAS)?
> [!check] Risposta corretta
> **La Calibrated Air Speed (CAS) corretta per l'errore di compressibilità dell'aria**

**Spiegazione:** Nella sequenza standard delle velocità aeronautiche ($\text{IAS} \to \text{CAS} \to \text{EAS} \to \text{TAS}$), la *Equivalent Air Speed* (EAS) si ottiene applicando alla CAS la correzione per l'errore di compressibilità adiabatica dell'aria all'imbocco del tubo di Pitot. A basse velocità e basse quote la compressibilità è trascurabile ($\text{EAS} \approx \text{CAS}$), mentre alle alte velocità subsoniche (oltre circa $200\text{–}220\text{ kts}$) e ad alta quota l'aria si comprime comprimendo la capsula manometrica in eccesso, rendendo necessaria tale correzione.
*(Fonte: Approfondimento Quote, Temperature e Velocità; Dispensa Martini, Sez. 2)*

### Domanda 108 — Dati: Mach 0.80, OAT -55°C (218 K). Calcolare la velocità locale del suono (LSS) e la velocità vera (TAS):
> [!check] Risposta corretta
> **LSS ≈ 575 kts, TAS ≈ 460 kts**

**Spiegazione:** La velocità locale del suono (LSS) nell'aria dipende esclusivamente dalla temperatura assoluta in Kelvin ($T_K = T_{^\circ\text{C}} + 273$) secondo la formula $\text{LSS} \approx 38.96 \times \sqrt{T_K}\text{ kts}$. Con $T_K = 218\text{ K}$, $\sqrt{218} \approx 14.765$, da cui $\text{LSS} \approx 38.96 \times 14.765 \approx 575\text{ kts}$. Poiché il numero di Mach è definito come $M = \frac{\text{TAS}}{\text{LSS}}$, la velocità vera si ricava moltiplicando Mach per LSS: $\text{TAS} = 0.80 \times 575 = 460\text{ kts}$.
*(Fonte: Approfondimento Quote, Temperature e Velocità; Dispensa Martini, Sez. 2)*

### Domanda 109 — Un aeromobile naviga con prua magnetica 060° e rileva un NDB con rilevamento polare (R.B.) di 270°. Per dirigere direttamente sulla stazione, quale rotta (QDM) deve impostare?
> [!check] Risposta corretta
> **Prua 330°**

**Spiegazione:** Il rilevamento polare relativo (R.B.) misura l'angolo in senso orario dall'asse longitudinale (muso) del velivolo fino alla congiungente con la stazione. Per ottenere il rilevamento magnetico *verso* la stazione (QDM), si somma la prua magnetica del velivolo (HDG) al rilevamento polare: $\text{QDM} = (\text{HDG} + \text{R.B.}) \bmod 360^\circ$. In questo caso, $060^\circ + 270^\circ = 330^\circ$; in assenza di vento, accostando su prua magnetica $330^\circ$ il velivolo dirige direttamente sull'NDB.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 6)*

### Domanda 110 — In un avvicinamento strumentale, se il pilota non acquisisce i riferimenti visivi entro la quota minima (DA/MDA):
> [!check] Risposta corretta
> **Deve eseguire immediatamente la procedura di mancato avvicinamento (Missed Approach) pubblicata**

**Spiegazione:** Ogni procedura di avvicinamento strumentale stabilisce una quota minima operativa: la *Decision Altitude/Height* (DA/DH) negli avvicinamenti di precisione e la *Minimum Descent Altitude/Height* (MDA/MDH) con relativo *Missed Approach Point* (MAPt) in quelli di non precisione. Se entro la DA o al raggiungimento del MAPt il pilota non ha acquisito i riferimenti visivi richiesti per proseguire l'atterraggio, è obbligatorio iniziare immediatamente la riattaccata seguendo la procedura di *Missed Approach* pubblicata, che garantisce la separazione dagli ostacoli.
*(Fonte: FAA Instrument Procedures Handbook H-8083-16B, Cap. 4; Dispensa Martini)*

### Domanda 111 — In una procedura di circuito di attesa (Holding) STANDARD, le virate sono effettuate:
> [!check] Risposta corretta
> **Sempre verso destra**

**Spiegazione:** Per convenzione internazionale ICAO e FAA, un circuito di attesa (*holding pattern*) **standard** prevede esclusivamente **virate verso destra** (in senso orario), con tratti di allontanamento (*outbound*) di $1\text{ minuto}$ fino a $14.000\text{ ft}$ (FL 140) inclusi e di $1.5\text{ minuti}$ oltre tale quota. L'ingresso nel circuito avviene scegliendo tra tre manovre codificate (diretta, a goccia o parallela) in funzione della prua di arrivo rispetto alla radiale o rotta di avvicinamento (*inbound track*).
*(Fonte: FAA Instrument Procedures Handbook H-8083-16B, Cap. 2 & 3)*

### Domanda 112 — Dati: Ground Speed = 269 kts, distanza = 5 NM. Determinare il tempo di volo stimato:
> [!check] Risposta corretta
> **1 min 07 sec**

**Spiegazione:** Il tempo di percorrenza di una tratta si calcola dividendo la distanza per la velocità al suolo ($t = \frac{D}{\text{GS}}$ in ore). Per ottenere direttamente il risultato in secondi si moltiplica per $3600$: $t_{(\text{s})} = \frac{5\text{ NM} \times 3600}{269\text{ kts}} = \frac{18000}{269} \approx 66.91\text{ s}$, equivalenti a $1\text{ min } 07\text{ sec}$. Moltiplicando invece per $60$ si ottengono minuti decimali ($1.115\text{ min}$), la cui parte decimale moltiplicata per $60$ ($0.115 \times 60 \approx 7\text{ s}$) fornisce i secondi.
*(Fonte: Calcolo aeronautico standard)*

### Domanda 113 — Le linee che uniscono sulla superficie terrestre i punti aventi la medesima declinazione magnetica sono dette:
> [!check] Risposta corretta
> **Isogone**

**Spiegazione:** La declinazione magnetica (*variation*) è l'angolo orizzontale compreso tra la direzione del Nord Vero e quella del Nord Magnetico locale, variabile nello spazio e nel tempo. Sulle carte aeronautiche, le **isogone** (linee isogoniche) uniscono tutti i punti caratterizzati dalla stessa declinazione magnetica, mentre la linea a declinazione nulla è chiamata *agona*. Conoscere la declinazione locale è indispensabile per convertire tra rotte o prue vere e magnetiche ($\text{RM} = \text{RV} \pm \text{VAR}$).
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 3, par. 2)*

### Domanda 114 — Assumendo vento nullo, quale distanza orizzontale copre un aeromobile che scende da FL 250 a FL 100 con rateo di 3000 ft/min e GS media di 320 kts?
> [!check] Risposta corretta
> **26.7 NM**

**Spiegazione:** Per calcolare la distanza orizzontale coperta durante una salita o una discesa, si determina dapprima la variazione di quota ($\Delta h = 25.000 - 10.000 = 15.000\text{ ft}$) e la si divide per il rateo verticale per ricavare il tempo: $t = \frac{15.000\text{ ft}}{3000\text{ ft/min}} = 5\text{ min} = \frac{5}{60}\text{ h}$. Moltiplicando la Ground Speed per il tempo espresso in ore si ottiene la distanza al suolo: $D = 320\text{ kts} \times \frac{5}{60}\text{ h} \approx 26.7\text{ NM}$.
*(Fonte: Calcolo aeronautico standard)*

### Domanda 115 — Dati: Direzione pista 210°(Mag), Vento W/V 230°(Mag)/30 kts. Determinare la componente di vento al traverso (Crosswind):
> [!check] Risposta corretta
> **Circa 10 kts**

**Spiegazione:** La componente di vento al traverso (*crosswind*) dipende dall'intensità del vento ($W$) e dall'angolo ($\alpha$) formato tra la direzione di provenienza del vento e l'orientamento della pista: $\text{XW} = W \times \sin(\alpha)$. Qui $\alpha = 230^\circ - 210^\circ = 20^\circ$, quindi $\text{XW} = 30 \times \sin(20^\circ) \approx 30 \times 0.342 \approx 10.3\text{ kts}$. Per un calcolo mentale rapido fino a circa $30^\circ$ si può usare la regola dell'$1:60$: $\text{XW} \approx W \times \frac{\alpha}{60} = 30 \times \frac{20}{60} = 10\text{ kts}$.
*(Fonte: Calcolo trigonometrico / Regolo E6B)*

### Domanda 116 — Volando a 6000 ft di altezza rispetto a una stazione DME che indica uno slant range di 5.0 NM, qual è la distanza orizzontale al suolo dall'apparato?
> [!check] Risposta corretta
> **Circa 4.9 NM**

**Spiegazione:** Il DME misura la distanza obliqua (*slant range*, $S$), che costituisce l'ipotenusa di un triangolo rettangolo avente per cateti l'altezza del velivolo sulla stazione ($h$) e la distanza orizzontale al suolo ($D$). Applicando il teorema di Pitagora si ricava $D = \sqrt{S^2 - h^2}$. Poiché $1\text{ NM} \approx 6076\text{ ft}$, un'altezza di $6000\text{ ft}$ equivale a circa $1.0\text{ NM}$, pertanto $D = \sqrt{5.0^2 - 1.0^2} = \sqrt{24} \approx 4.9\text{ NM}$.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 8; FAA IFH Cap. 9)*

### Domanda 117 — In una procedura di circuito di attesa (Holding) NON STANDARD, le virate sono effettuate:
> [!check] Risposta corretta
> **Sempre verso sinistra**

**Spiegazione:** Un circuito di attesa (*holding pattern*) **non standard** è definito dall'esecuzione di **tutte le virate verso sinistra** (in senso antiorario). Questa configurazione viene adottata quando la presenza di ostacoli, spazi aerei vincolati o esigenze di traffico impedisce di collocare l'area di protezione del circuito sul lato destro della rotta di avvicinamento, ed è sempre riportata esplicitamente sulle carte strumentali o nell'autorizzazione ATC.
*(Fonte: FAA Instrument Procedures Handbook H-8083-16B, Cap. 2 & 3)*

### Domanda 118 — Cosa si intende per Calibrated Air Speed (CAS)?
> [!check] Risposta corretta
> **La Indicated Air Speed (IAS) corretta dell'errore strumentale e dell'errore di posizione del tubo di Pitot**

**Spiegazione:** La velocità indicata (IAS) letta direttamente sul quadrante dell'anemometro è influenzata dalle tolleranze meccaniche interne (errore strumentale) e dalle perturbazioni aerodinamiche del flusso attorno alle prese statiche e al tubo di Pitot al variare di assetto e configurazione (errore di posizione o installazione). Applicando le correzioni tabulate nel manuale di volo (POH) per eliminare entrambi questi errori si ottiene la **Calibrated Air Speed (CAS)**.
*(Fonte: Approfondimento Quote, Temperature e Velocità; Slide Lezioni BAK Anemometro)*

### Domanda 119 — Un aeromobile deve salire di 14000 ft su una distanza al suolo di 35 NM con TAS di 150 kts e vento nullo. Quale rateo di salita medio è necessario?
> [!check] Risposta corretta
> **1000 ft/min**

**Spiegazione:** In assenza di vento, la Ground Speed coincide con la True Airspeed ($\text{GS} = \text{TAS} = 150\text{ kts}$). Il tempo disponibile per percorrere la tratta al suolo è $t = \frac{D}{\text{GS}} \times 60 = \frac{35\text{ NM}}{150\text{ kts}} \times 60 = 14\text{ min}$. Dividendo il dislivello totale da guadagnare per il tempo in minuti si determina il rateo di salita medio richiesto: $\text{ROC} = \frac{14000\text{ ft}}{14\text{ min}} = 1000\text{ ft/min}$.
*(Fonte: Calcolo aeronautico standard)*

### Domanda 120 — Un avvicinamento di precisione ILS di Categoria I (CAT I) prevede una Decision Height (DH) minima standard non inferiore a:
> [!check] Risposta corretta
> **200 ft**

**Spiegazione:** Le procedure di avvicinamento strumentale di precisione ILS sono suddivise in categorie (CAT I, II, III) in base alle minime operative di *Decision Height* (DH) e visibilità di pista (RVR). Secondo gli standard ICAO e FAA, un avvicinamento **ILS CAT I** prevede una DH minima standard non inferiore a **$200\text{ ft}$** sopra l'elevazione della zona di contatto pista (TDZE), associata a una RVR minima standard di $550\text{ m}$ ($1800\text{ ft}$ / $\frac{1}{2}\text{ SM}$).
*(Fonte: FAA Instrument Procedures Handbook H-8083-16B, Cap. 4; Dispensa Martini, Sez. 10)*

### Domanda 121 — La Rotta Vera (RV) o True Course (TC) è definita come:
> [!check] Risposta corretta
> **L’angolo compreso tra la direzione del Nord Vero (NV) e la linea di rotta dell'aeromobile, misurato in senso orario a partire dal NV**

**Spiegazione:** In navigazione aerea tutti gli angoli direzionali (rotte, prue, rilevamenti) si misurano da $000^\circ$ a $360^\circ$ in **senso orario** a partire dal meridiano di riferimento. La **Rotta Vera (RV / TC)** ha origine dalla direzione del **Nord Vero (geografico)** e definisce l'orientamento della traiettoria pianificata o seguita rispetto al suolo; si distingue dalla Prua Vera (PV / TH), che misura invece l'orientamento dell'asse longitudinale del velivolo rispetto al Nord Vero.
*(Fonte: Dispensa Navigazione Aerea Martini; FAA PHAK Cap. 16)*

### Domanda 122 — In un avvicinamento strumentale, a seguito di mancato avvicinamento (Missed Approach), quali sono le condizioni per ripetere la procedura?
> [!check] Risposta corretta
> **È consentito effettuare un nuovo tentativo solo se il carburante residuo garantisce la riserva per l'alternato**

**Spiegazione:** Dopo aver eseguito una procedura di mancato avvicinamento, il comandante può richiedere l'autorizzazione per tornare allo *Initial Approach Fix* (IAF) e ripetere l'avvicinamento solo a condizione che l'autonomia residua consenta comunque di raggiungere l'aeroporto alternato designato mantenendo intatte le riserve regolamentari di carburante. Qualora il carburante residuo non garantisca tale margine di sicurezza, è obbligatorio procedere immediatamente verso l'alternato.
*(Fonte: Dispensa Navigazione Aerea Martini, Sez. 11 - Condotta del volo strumentale)*

### Domanda 123 — Il sistema anticollisione di bordo ACAS (Airborne Collision Avoidance System):
> [!check] Risposta corretta
> **Interroga i transponder Modo C e Modo S degli aeromobili vicini tramite segnali SSR e ne traccia posizione e traiettoria**

**Spiegazione:** L'ACAS (implementato commercialmente come TCAS) è un sistema anticollisione autonomo di bordo che trasmette interrogazioni sulla frequenza SSR ($1030\text{ MHz}$) verso i transponder Modo C e Modo S degli aeromobili circostanti. Ricevendo le risposte a $1090\text{ MHz}$, il sistema calcola distanza, rilevamento, quota barometrica relativa e tasso di avvicinamento del traffico, generando avvisi di traffico (TA) e, nel TCAS II, avvisi di risoluzione verticale (RA) per evitare collisioni.
*(Fonte: FAA Instrument Flying Handbook H-8083-15B, Cap. 5; ICAO Annex 10)*

### Domanda 124 — Durante un avvicinamento radar di precisione PAR (Precision Approach Radar):
> [!check] Risposta corretta
> **Un controllore del traffico aereo a terra fornisce istruzioni radio continue di prua e rateo di discesa per mantenere centerline e glide**

**Spiegazione:** Il PAR è una procedura di avvicinamento strumentale di precisione guidata interamente da terra: il controllore radar osserva su schermi ad alta precisione sia la posizione laterale (*azimuth*) sia il profilo verticale (*elevation*) del velivolo rispetto all'asse pista e al sentiero ideale. Via radio, il controllore trasmette in modo continuo correzioni di prua e indicazioni sul rateo di discesa (*talk-down*) per mantenere l'aeromobile su *centerline* e *glide path* fino alla minima di avvicinamento.
*(Fonte: FAA Instrument Procedures Handbook H-8083-16B, Cap. 4)*

### Domanda 125 — La linea LOSSODROMICA è definita come:
> [!check] Risposta corretta
> **La linea che taglia tutti i meridiani terrestri sotto un angolo costante, consentendo di navigare con prua costante**

**Spiegazione:** La **lossodromia** (*rhumb line*) è una curva sulla superficie terrestre che interseca tutti i meridiani formando sempre il medesimo angolo, permettendo così di mantenere una rotta e una prua vere costanti lungo l'intero tragitto. Rappresentata come segmento rettilineo sulla carta conforme di Mercatore, la lossodromia risulta comoda per la navigazione a breve e medio raggio, pur sviluppando una distanza leggermente maggiore rispetto all'arco di cerchio massimo (ortodromia).
*(Fonte: FAA Flight Navigator Handbook, Cap. 1)*

### Domanda 126 — Il Raggio di Azione (Radius of Action - RA) di un aeromobile rappresenta:
> [!check] Risposta corretta
> **La massima distanza lungo una rotta stabilita con la possibilità di ritornare alla base di partenza con la riserva prescritta**

**Spiegazione:** Il **Raggio di Azione (RA)** indica la massima distanza percorribile lungo una determinata rotta di andata disponendo del carburante necessario per invertire la rotta e rientrare alla base di partenza (o a una base alternata prestabilita) conservando la riserva regolamentare nel serbatoio. Nel calcolo operativo intervengono l'autonomia utilizzabile e le Ground Speed di andata ($V_1$) e di ritorno ($V_2$) determinate dal vento.
*(Fonte: Teoria della Navigazione / FAA Flight Navigator Handbook, Cap. 2)*

### Domanda 127 — Il Punto di Egual Tempo (PET - Point of Equal Time), con formula PET = (D · V2) / (V1 + V2):
> [!check] Risposta corretta
> **È il punto lungo la rotta equidistante in tempo di volo sia per raggiungere la destinazione sia per rientrare alla base di partenza**

**Spiegazione:** Il **Punto di Egual Tempo (PET / ETP)** individua lungo una tratta di lunghezza $D$ la posizione critica da cui il tempo necessario per proseguire verso la destinazione (con Ground Speed di andata $V_1$) è esattamente uguale al tempo richiesto per rientrare alla base di partenza (con Ground Speed di ritorno $V_2$). Poiché dipende esclusivamente dalla distanza e dalle velocità al suolo influenzate dal vento, il PET funge da riferimento decisionale in caso di emergenza o avaria in rotta.
*(Fonte: FAA Flight Navigator Handbook, Cap. 2 - Equal Time Point)*

### Domanda 128 — Un aeromobile con HDG 045° è sulla radiale 135° a 20 NM da un VOR a 3000 ft. Deve intercettare il fix radiale 045° a 20 NM a 5000 ft (senza vento):
> [!check] Risposta corretta
> **Vira a sinistra per prua NORD (indicativa), salendo di quota**

**Spiegazione:** Le radiali VOR si irradiano sempre *dalla* stazione verso l'esterno e indicano il quadrante in cui si trova l'aeromobile: la radiale $135^\circ$ colloca il velivolo a **Sud-Est (SE)** del VOR, mentre il fix sulla radiale $045^\circ$ si trova a **Nord-Est (NE)** alla medesima distanza ($20\text{ NM}$). Per spostarsi da SE verso NE occorre dirigere indicativamente verso **Nord** ($\sim 000^\circ$); partendo da prua $045^\circ$, la virata più breve per assumere $000^\circ$ è a **sinistra**, accompagnata da una salita da $3000\text{ ft}$ a $5000\text{ ft}$.
*(Fonte: Geometria radionavigazione VOR / Dispensa Martini, Sez. 7)*

### Domanda 129 — Un aeromobile con HDG 315° è sulla radiale 045° a 20 NM da un VOR a 5000 ft. Deve intercettare il fix radiale 315° a 20 NM a 3000 ft (senza vento):
> [!check] Risposta corretta
> **Vira a sinistra per prua OVEST (indicativa), scendendo di quota**

**Spiegazione:** Visualizzando le posizioni rispetto al VOR tramite le radiali, la radiale $045^\circ$ colloca l'aeromobile a **Nord-Est (NE)** della stazione, mentre il fix sulla radiale $315^\circ$ si trova a **Nord-Ovest (NW)** alla stessa distanza di $20\text{ NM}$. Per muoversi da NE verso NW la direzione risultante è indicativamente verso **Ovest** ($\sim 270^\circ$); trovandosi con prua $315^\circ$, per raggiungere $270^\circ$ è necessario **virare a sinistra** di $45^\circ$, scendendo contestualmente da $5000\text{ ft}$ a $3000\text{ ft}$.
*(Fonte: Geometria radionavigazione VOR / Dispensa Martini, Sez. 7)*

### Domanda 130 — Un aeromobile con HDG 045° è sulla radiale 315° a 20 NM da un VOR a 3000 ft. Deve intercettare il fix radiale 135° a 20 NM a 5000 ft (senza vento):
> [!check] Risposta corretta
> **Vira a destra per prua SUD-EST (indicativa), salendo di quota**

**Spiegazione:** Sulla base della geometria delle radiali VOR, la radiale $315^\circ$ posiziona il velivolo a **Nord-Ovest (NW)** della stazione, mentre il fix target sulla radiale $135^\circ$ è diametralmente opposto, a **Sud-Est (SE)** del VOR. Per dirigere da NW verso SE occorre una prua indicativa verso **Sud-Est** ($\sim 135^\circ$); partendo da prua $045^\circ$, si imposta $135^\circ$ effettuando una **virata a destra** di $90^\circ$, salendo contemporaneamente da $3000\text{ ft}$ a $5000\text{ ft}$.
*(Fonte: Geometria radionavigazione VOR / Dispensa Martini, Sez. 7)*


---


## DIRITTO AERONAUTICO (11 domande)

### Domanda 131 — In caso di incidente o inconveniente di volo grave occorso a un aeromobile militare, l’inchiesta tecnica è svolta da:
> [!check] Risposta corretta
> **Dai competenti organi dell'Amministrazione della Difesa (Commissione d'inchiesta militare / ISV)**

**Spiegazione:** In base all'art. 826 del Codice della Navigazione, all'art. 3 del D.Lgs. 66/1999 e all'art. 140 del Codice dell'Ordinamento Militare (COM), esiste una netta ripartizione di competenze nelle inchieste tecniche sugli incidenti aerei. Mentre l'**ANSV** (Agenzia Nazionale per la Sicurezza del Volo) investiga gli eventi occorsi agli aeromobili civili/privati, per gli incidenti o inconvenienti gravi che coinvolgono **aeromobili militari o di Stato** la competenza spetta **ai competenti organi dell'Amministrazione della Difesa** (Commissione d'inchiesta militare coordinata dall'ISV).
*(Fonte: Slide Contesto Giuridico / Compendio AVES)*

### Domanda 132 — La finalità dell’investigazione di sicurezza del volo condotta ai sensi della direttiva ISV 002 è:
> [!check] Risposta corretta
> **L’accertamento delle cause e dei fattori contribuenti per esclusivi scopi di prevenzione, senza attribuire colpe**

**Spiegazione:** A seguito di un incidente di volo militare si attivano procedimenti distinti con finalità diverse (giudiziaria/penale, amministrativo-contabile, disciplinare e tecnica). L'investigazione tecnica di Sicurezza del Volo, disciplinata dalla **direttiva ISV 002**, ha l'unico scopo di **accertare le cause e i fattori contribuenti** dell'evento per **esclusive finalità di prevenzione**, escludendo rigorosamente ogni ricerca o attribuzione di colpa e responsabilità giuridica.
*(Fonte: Slide Contesto Giuridico / ISV 002)*

### Domanda 133 — Quali sono i tre pilastri giuridici dell'articolo 743 del Codice della Navigazione per la definizione di aeromobile?
> [!check] Risposta corretta
> **Mezzo, ambiente (aria/atmosfera) e comandante**

**Spiegazione:** Il Diritto Aeronautico (art. 743 del Codice della Navigazione e inquadramento generale della navigazione aerea) definisce la navigazione aerea come il movimento o la circolazione di un aeromobile nello spazio atmosferico e organizza l'intera realtà operativa attorno a tre pilastri costitutivi indissolubili: **il mezzo** (l'aeromobile destinato al trasporto per aria di persone o cose), **l'ambiente** (lo spazio aereo/atmosfera) e **il comandante** (l'elemento umano, centro di gravità giuridico del volo).
*(Fonte: Slide Diritto Aeronautico - Magg. Laperuta)*

### Domanda 134 — In base all’articolo 744 del Codice della Navigazione, quali aeromobili sono considerati aeromobili di Stato?
> [!check] Risposta corretta
> **Gli aeromobili delle Forze Armate e delle forze di polizia/soccorso (CC, PdS, GdF, VVF, Dogane)**

**Spiegazione:** L'ordinamento italiano (art. 744 del Codice della Navigazione) distingue gli aeromobili in **privati** (definiti per esclusione) e **di Stato**, ai quali è riservata una disciplina autonoma e privilegiata (esenzione da tasse aeroportuali, priorità d'uso, regime di sicurezza militare). Sono **aeromobili di Stato** quelli militari (Forze Armate) e quelli di proprietà dello Stato impiegati in servizi istituzionali di **polizia, dogana, Vigili del Fuoco, Protezione Civile** o altro servizio di Stato, oltre ai mezzi equiparati per la sicurezza nazionale.
*(Fonte: Slide Diritto Aeronautico / Normativa OAT)*

### Domanda 135 — Qual è il ruolo e la responsabilità legale del Pilota in Comando (PIC) durante la missione?
> [!check] Risposta corretta
> **Ha l'autorità decisionale suprema per la sicurezza del volo, la condotta della missione ed è responsabile dell'aeromobile**

**Spiegazione:** Ai sensi dell'art. 887 del Codice della Navigazione, il **Pilota in Comando (PIC)** è il centro di gravità giuridico del volo: non è soltanto un tecnico di condotta, ma un organo d'autorità investito di funzioni pubbliche. Dal momento in cui prende in carico l'aeromobile fino alla riconsegna, egli esercita l'**autorità decisionale suprema** per la sicurezza del volo, dell'equipaggio, dei passeggeri e del carico, dirige la condotta della missione e può derogare alle norme di circolazione solo in caso di assoluta emergenza.
*(Fonte: Slide Diritto Aeronautico - Magg. Laperuta)*

### Domanda 136 — Che cos’è la "colpa lieve" nell’ambito dell’attività di volo militare?
> [!check] Risposta corretta
> **Un errore umano o svista commesso operando con dovuta diligenza, che non comporta danno erariale ed è gestito in ottica preventiva**

**Spiegazione:** Il comandante di aeromobile militare beneficia del cosiddetto **filtro della colpa grave**: a differenza della responsabilità civile ordinaria, non risponde patrimonialmente dei danni materiali arrecati al mezzo aereo per un semplice errore o svista commesso operando con la dovuta diligenza nel rispetto di procedure e manuali (**colpa lieve**). La colpa lieve riflette il rischio fisiologico dell'attività di volo, **non comporta addebito di danno erariale** ed è gestita in chiave preventiva (Safety / Just Culture), mentre la responsabilità amministrativo-contabile scatta solo per **dolo o colpa grave**.
*(Fonte: Slide Diritto Aeronautico / Approfondimento Responsabilità militare)*

### Domanda 137 — Qual è l’obiettivo primario dell’Ispettorato per la Sicurezza del Volo (ISV)?
> [!check] Risposta corretta
> **Prevenire il verificarsi di incidenti di volo, operando in ottica preventiva senza finalità sanzionatorie**

**Spiegazione:** Istituito nel 1991 alle dirette dipendenze del Capo di Stato Maggiore dell'Aeronautica Militare (art. 140 COM), l'**Ispettorato per la Sicurezza del Volo (ISV)** è l'organo di vertice incaricato di tutelare l'integrità del personale e dei mezzi attraverso la **prevenzione degli incidenti di volo**. Le sue quattro funzioni fondamentali — prevenzione e consulenza, investigazione tecnica sugli incidenti, gestione post-incidente e formazione — sono esercitate **senza alcuna finalità sanzionatoria o punitiva**.
*(Fonte: Slide Diritto Aeronautico / Contesto Giuridico)*

### Domanda 138 — Secondo il principio della Just Culture, l’operatore che segnala un errore o inconveniente di volo:
> [!check] Risposta corretta
> **È tutelato da sanzioni punitive per errori commessi in buona fede, favorendo la trasparenza e la prevenzione**

**Spiegazione:** La **Just Culture** (sancita dal Regolamento UE 376/2014 e dalla dottrina ICAO) è il fondamento di una moderna cultura della sicurezza: in un ambiente *Just*, gli operatori in prima linea sono incoraggiati a segnalare errori, omissioni o inconvenienti commessi **in buona fede** sulla base della propria esperienza e formazione, essendo **tutelati da sanzioni punitive**. Questa trasparenza permette all'organizzazione di raccogliere dati reali sui pericoli latenti e prevenire il ripetersi di eventi critici.
*(Fonte: Slide Cultura SV / Diritto Aeronautico)*

### Domanda 139 — In materia di Security e tutela delle informazioni, qual è il grave rischio della pubblicazione di foto o selfie scattati nel cockpit o in linea volo?
> [!check] Risposta corretta
> **La divulgazione involontaria di dati classificati, frequenze operative, schermate avioniche e software di bordo**

**Spiegazione:** La tutela delle informazioni operative (OPSEC e Security) vieta l'uso improprio di dispositivi personali, smartphone o *action cam* in volo e in linea volo senza autorizzazione. Pubblicare foto o selfie dal cockpit o vicino agli aeromobili militari comporta il grave rischio di **divulgare involontariamente dati classificati, frequenze operative, schermate avioniche, parametri di missione, software di bordo** e dettagli di infrastrutture sensibili, esponendo il personale e la Forza Armata ad attività di intelligence avversaria e *social engineering*.
*(Fonte: Slide Diritto Aeronautico / Approfondimento Riservatezza operativa)*

### Domanda 140 — L’uso di smartwatch e app di fitness con GPS da parte del personale all’interno di basi militari o teatri operativi è rischioso perché:
> [!check] Risposta corretta
> **Può generare mappe di calore pubbliche (heatmaps) rivelando perimetri, infrastrutture sensibili e routine di vigilanza**

**Spiegazione:** Smartwatch, smartphone e applicazioni per il fitness registrano costantemente tracce GPS, quote, velocità e orari degli spostamenti. Quando questi dati vengono sincronizzati automaticamente su piattaforme cloud o app pubbliche all'interno di basi militari o teatri operativi, possono generare **mappe di calore pubbliche (*heatmaps*)** che rivelano **perimetri delle installazioni, infrastrutture sensibili, rotte addestrative, profili di missione e routine di vigilanza**.
*(Fonte: Slide Diritto Aeronautico - Magg. Laperuta)*

### Domanda 141 — In quali casi il principio della Just Culture non trova applicazione e lascia spazio ad azioni sanzionatorie o penali?
> [!check] Risposta corretta
> **In presenza di dolo, colpa grave, violazioni deliberate o condotte sconsiderate e temerarie**

**Spiegazione:** La **Just Culture** non significa impunità né assenza di responsabilità: essa traccia una linea chiara tra l'errore umano onesto (tutelato) e i comportamenti inaccettabili. Come previsto dal Regolamento (UE) 376/2014 e dal *Culpability Decision Tree* di James Reason, la tutela della Just Culture **non si applica** in presenza di **dolo** (atti intenzionali o lesivi), **colpa grave** (negligenza marcata), **violazioni deliberate** delle procedure operative o **condotte sconsiderate e temerarie** (come l'impiego sotto l'effetto di alcol o droghe).
*(Fonte: Slide Cultura SV / Compendio AVES)*


---


## SICUREZZA VOLO (FATTORE UMANO) (18 domande)

### Domanda 142 — Cosa cerca l’investigazione di Sicurezza del Volo al posto dell'attribuzione della colpa?
> [!check] Risposta corretta
> **Le cause radice e i fattori contribuenti dell'evento per scopi esclusivi di prevenzione**

**Spiegazione:** La filosofia moderna della **Sicurezza del Volo (SV)** supera la domanda tradizionale e punitiva *"di chi è la colpa?"* per adottare un approccio sistemico orientato all'apprendimento. L'investigazione SV ricerca **le cause radice e i fattori contribuenti** (umani, tecnici, ambientali e organizzativi) che hanno permesso all'evento di verificarsi, con l'obiettivo esclusivo di formulare raccomandazioni di sicurezza e **prevenire** futuri incidenti, lasciando ad altre sedi (Magistratura, comando disciplinare) eventuali accertamenti di responsabilità.
*(Fonte: Slide Basic Concepts - Ten. Col. Fauci / Note Fattore Umano)*

### Domanda 143 — Qual è lo scopo fondamentale della Sicurezza del Volo (SV)?
> [!check] Risposta corretta
> **Interrompere la catena degli eventi ed evitare il verificarsi di futuri incidenti**

**Spiegazione:** Secondo la **teoria del domino / catena degli eventi**, un incidente non nasce mai da un singolo fatto isolato, ma è l'esito finale di una sequenza di eventi e fattori concatenati nel tempo. Lo scopo fondamentale della **Sicurezza del Volo** è proprio **interrompere la catena degli eventi** agendo preventivamente sulle falle del sistema, così da evitare futuri incidenti e consentire il raggiungimento della missione e degli obiettivi di Forza Armata con il massimo grado di sicurezza compatibile con le circostanze operative.
*(Fonte: Slide Basic Concepts - Ten. Col. Fauci)*

### Domanda 144 — Quali sono le tre motivazioni fondamentali per cui si fa prevenzione nella SV?
> [!check] Risposta corretta
> **Umana (salvaguardia della vita), economica (tutela dei beni) e operativa (efficacia della missione)**

**Spiegazione:** Nelle dottrine dell'ISSV, l'attività di prevenzione in Sicurezza del Volo si fonda su tre pilastri motivazionali complementari: la motivazione **umana/morale** (l'immunità dal pericolo è un bisogno fondamentale e la salvaguardia della vita del personale è prioritaria), la motivazione **economica** (gli incidenti comportano costi enormi per perdita di aeromobili, recuperi, risarcimenti e fermi flotta) e la motivazione **operativa** (preservare l'efficienza dei mezzi, la prontezza degli equipaggi e l'efficacia complessiva della missione).
*(Fonte: Slide Basic Concepts - Ten. Col. Fauci)*

### Domanda 145 — Quali sono i tre livelli/approcci temporali della prevenzione nella sicurezza del volo?
> [!check] Risposta corretta
> **Reattivo (dopo l'evento), proattivo (individuazione attiva pericoli) e predittivo (analisi trend futuri)**

**Spiegazione:** L'*Accident Prevention Loop* moderno articola la prevenzione su tre livelli temporali progressivi: l'approccio **reattivo** interviene *dopo* che un incidente o inconveniente si è verificato, tramite inchieste e analisi delle cause; l'approccio **proattivo** monitora e analizza il *presente* per individuare e mitigare i pericoli prima che causino danni (audit, segnalazioni spontanee, *risk assessment*); l'approccio **predittivo** guarda al *futuro*, anticipando i rischi emergenti attraverso l'analisi dei trend, *big data* e simulazioni (*what-if*).
*(Fonte: Slide Basic Concepts - Ten. Col. Fauci / Note Fattore Umano)*

### Domanda 146 — Quali sono i principali processi cognitivi umani coinvolti nel pilotaggio?
> [!check] Risposta corretta
> **Sono 5: attenzione, percezione, memoria, apprendimento e processi decisionali**

**Spiegazione:** Nella psicologia cognitiva applicata all'aviazione (*Information Processing*), i processi cognitivi sono le funzioni mentali attraverso cui il pilota acquisisce, organizza, elabora e utilizza le conoscenze per interagire con l'ambiente di volo. Essi **sono 5**: **apprendimento** (modifica continua delle conoscenze tramite l'esperienza), **memoria** (immagazzinamento e rievocazione dei dati), **attenzione** (gestione delle risorse mentali limitate), **percezione** (riconoscimento cosciente degli stimoli sensoriali) e **processi decisionali**.
*(Fonte: Slide Information Processing - Ten. Col. Fauci)*

### Domanda 147 — Quali sono i tipi principali di memoria secondo la psicologia cognitiva?
> [!check] Risposta corretta
> **Sensoriale, a breve termine (di lavoro), a lungo termine e remota**

**Spiegazione:** La memoria non è una funzione unitaria, ma un sistema di elaborazione composto da più stadi interconnessi. Il modello del corso distingue quattro tipi principali: **memoria sensoriale** (di supporto alla percezione, durata 0,5–2 secondi, soggetta a interferenza), **memoria a breve termine / di lavoro** (trattiene i dati per 15–30 secondi con capacità limitata), **memoria a lungo termine** (capacità virtualmente illimitata, suddivisa in semantica, episodica e procedurale) e **memoria remota**.
*(Fonte: Slide Information Processing - Ten. Col. Fauci)*

### Domanda 148 — Quali sono i tre livelli di comportamento/prestazione decisionale del modello di Rasmussen (SRK)?
> [!check] Risposta corretta
> **Skill-based (abilità), Rule-based (regole) e Knowledge-based (conoscenza)**

**Spiegazione:** Il modello **SRK** di Jens Rasmussen descrive come l'operatore umano elabora le decisioni in base alla familiarità della situazione e al carico cognitivo richiesto: il livello **Skill-based** riguarda comportamenti automatici e programmi motori consolidati a basso sforzo conscio; il livello **Rule-based** si applica a situazioni note gestite tramite regole e procedure (*IF-THEN*); il livello **Knowledge-based** interviene in situazioni nuove o impreviste, richiedendo analisi conscia, ragionamento e valutazione di ipotesi di soluzione.
*(Fonte: Slide Information Processing / Note Fattore Umano)*

### Domanda 149 — Quali sono i principali modelli sociotecnici di analisi degli incidenti utilizzati nell'aviazione?
> [!check] Risposta corretta
> **Il modello del formaggio svizzero di Reason e la tassonomia HFACS**

**Spiegazione:** Nei sistemi sociotecnici complessi come l'aviazione, gli incidenti non sono spiegati da un singolo errore isolato, ma dall'interazione tra fattori individuali e organizzativi. I due riferimenti principali sono il **modello del formaggio svizzero (*Swiss Cheese Model*) di James Reason** — secondo cui l'incidente si verifica quando le falle nelle barriere difensive (tra *errori attivi* in prima linea e *condizioni latenti* organizzative) si allineano — e la tassonomia **HFACS** (*Human Factors Analysis and Classification System*), che traduce il modello di Reason in categorie operative di analisi.
*(Fonte: Note Fattore Umano - Concetti Base)*

### Domanda 150 — Quali sono le due contrapposte filosofie di Error Management nella sicurezza del volo?
> [!check] Risposta corretta
> **Person Approach (focalizzato sull'individuo) e System Approach (focalizzato sulle difese del sistema)**

**Spiegazione:** James Reason individua due modi opposti di affrontare l'errore umano: il **Person Approach** attribuisce gli errori a disattenzione, negligenza o scarsa motivazione del singolo individuo, rispondendo con biasimo e sanzioni; il **System Approach** parte invece dal presupposto che gli esseri umani siano intrinsecamente fallibili (*Human Limitations*) e che gli errori siano conseguenze di condizioni lavorative e organizzative, concentrandosi quindi sul rafforzamento delle **difese del sistema** per prevenire l'errore o assorbirne gli effetti.
*(Fonte: Note Fattore Umano / Teoria di Reason)*

### Domanda 151 — Quali sono i pilastri del FSMS?
> [!check] Risposta corretta
> **Safety Policy, Safety Risk Management, Safety Assurance, Safety Promotion, Accident Investigation e Post Accident Management**

**Spiegazione:** Il **FSMS (Flight Safety Management System)** rappresenta l'architettura organizzativa con cui la Forza Armata gestisce sistematicamente la sicurezza del volo. Esso integra i quattro pilastri fondamentali dell'SMS ICAO — **Safety Policy** (politica e obiettivi), **Safety Risk Management** (identificazione pericoli e valutazione rischi), **Safety Assurance** (monitoraggio continuo delle prestazioni di sicurezza) e **Safety Promotion** (formazione e diffusione della cultura SV) — con due pilastri specifici dell'ambito militare: **Accident Investigation** e **Post Accident Management**.
*(Fonte: Compendio AVES - Modulo Sicurezza del Volo)*

### Domanda 152 — Cosa indica l’acronimo UPA nella sicurezza dello spazio aereo?
> [!check] Risposta corretta
> **Unauthorized Penetration of Airspace (penetrazione non autorizzata di spazio aereo)**

**Spiegazione:** Nella gestione della sicurezza dello spazio aereo (ATM/SV), l'acronimo **UPA** indica l'**Unauthorized Penetration of Airspace**, ovvero l'ingresso non autorizzato di un aeromobile all'interno di uno spazio aereo controllato o riservato (come CTR, TMA o zone vietate/regolamentate/pericolose attive) senza la prescritta autorizzazione ATC. Le UPA costituiscono eventi critici monitorati dal sistema di sicurezza perché possono generare perdite di separazione o conflitti imprevisti con altro traffico.
*(Fonte: Note Fattore Umano - Domande esame)*

### Domanda 153 — Che cos’è una Runway Incursion?
> [!check] Risposta corretta
> **Ogni presenza non autorizzata o errata di un aeromobile, veicolo o persona sull’area protetta designata per il decollo e l'atterraggio**

**Spiegazione:** Secondo la definizione standard ICAO, una **Runway Incursion** è **qualsiasi presenza non autorizzata o errata** di un aeromobile, di un veicolo o di una persona all'interno dell'area protetta di un aeroporto designata per il decollo e l'atterraggio. Si distingue dalla *Runway Excursion* (uscita involontaria di pista durante il decollo o l'atterraggio) e rappresenta uno dei rischi operativi più critici in ambito aeroportuale, prevenuto tramite fraseologia rigorosa, read-back obbligatorio e segnaletica di pista.
*(Fonte: Note Fattore Umano - Domande esame / Segnaletica Aeroportuale)*

### Domanda 154 — Qual è il compito del transponder di bordo nella sicurezza del volo?
> [!check] Risposta corretta
> **Rispondere agli impulsi interrogatori del radar secondario (SSR) fornendo codice identificativo e quota barometrica**

**Spiegazione:** Il **transponder** di bordo è l'apparato fondamentale della sorveglianza cooperativa nel traffico aereo e costituisce la base su cui opera anche il sistema anticollisione TCAS. Quando viene interrogato dal **radar secondario di sorveglianza (SSR)** di terra (sulla frequenza 1030 MHz), il transponder risponde automaticamente (su 1090 MHz) trasmettendo il **codice identificativo assegnato (Modo A)** e la **quota barometrica (Modo C)**, oltre a ulteriori dati identificativi e cinematici nei sistemi Modo S.
*(Fonte: Note Fattore Umano / Compendio AVES)*

### Domanda 155 — Qual è il compito operativo del sistema TCAS (Traffic Alert and Collision Avoidance System)?
> [!check] Risposta corretta
> **Monitorare lo spazio circostante fornendo avvisi di traffico (TA) e comandi di risoluzione verticale (RA)**

**Spiegazione:** Il **TCAS** è un sistema di bordo indipendente dagli enti di terra che interroga i transponder degli aeromobili vicini per prevenire collisioni in volo (*mid-air collision*). Quando rileva un potenziale conflitto, fornisce dapprima un **avviso di traffico (TA - *Traffic Advisory*)** per allertare l'equipaggio alla ricerca visiva e, se il rischio di collisione diventa critico, emette un **comando di risoluzione esclusivamente sul piano verticale (RA - *Resolution Advisory*)** (es. salire o scendere), che ha la priorità sulle istruzioni di quota ordinarie.
*(Fonte: Note Fattore Umano / Compendio AVES)*

### Domanda 156 — Quali sono le quattro componenti interconnesse del modello SHELL di Hawkins?
> [!check] Risposta corretta
> **Software (procedure), Hardware (macchina), Environment (ambiente), Liveware (uomo)**

**Spiegazione:** Il **modello SHELL** (ideato da Edwards e sviluppato da Frank Hawkins) è il riferimento concettuale ICAO per analizzare il Fattore Umano e le sue interfacce operative. Al centro del sistema è posto l'operatore umano (**Liveware**), le cui prestazioni dipendono dall'adattamento e dall'interazione con quattro blocchi: **Software** (norme, procedure, checklist, manuali), **Hardware** (macchina, strumenti, ergonomia), **Environment** (ambiente fisico, meteo, condizioni di lavoro) e altri **Liveware** (comunicazione, lavoro di squadra, CRM).
*(Fonte: Note Fattore Umano - Concetti Base / Compendio AVES)*

### Domanda 157 — Quali sono le 6 fasi del processo decisionale aeronautico ADM (modello DECIDE)?
> [!check] Risposta corretta
> **Detect, Estimate, Choose, Identify, Do, Evaluate**

**Spiegazione:** L'*Aeronautical Decision Making* (ADM) è un approccio strutturato per prendere decisioni efficaci in condizioni dinamiche riducendo l'errore cognitivo. Il modello **DECIDE** guida il pilota attraverso 6 fasi sequenziali: **D**etect (rilevare un cambiamento nella situazione), **E**stimate (valutare la necessità di intervenire), **C**hoose (scegliere l'esito desiderato per la sicurezza del volo), **I**dentify (individuare le azioni possibili), **D**o (eseguire l'azione scelta) ed **E**valuate (verificare gli effetti della decisione presa).
*(Fonte: Note Fattore Umano - Decision Making)*

### Domanda 158 — Cosa sono i Bias cognitivi nell'ambito del fattore umano in aviazione?
> [!check] Risposta corretta
> **Distorsioni o scorciatoie mentali sistematiche del giudizio che alterano la valutazione oggettiva della situazione**

**Spiegazione:** I **bias cognitivi** sono **distorsioni o scorciatoie mentali sistematiche** (*euristiche* mal applicate) con cui il cervello umano elabora rapidamente le informazioni, compromettendo l'obiettività del giudizio e la percezione del rischio. In aviazione fenomeni inconsci come il *confirmation bias* (cercare solo dati che confermano la propria idea), il *get-there-itis* (voler raggiungere la destinazione a ogni costo) o l'effetto tunnel possono degradare la consapevolezza situazionale (*Situational Awareness*) e indurre decisioni errate.
*(Fonte: Compendio AVES - Modulo Sicurezza del Volo)*

### Domanda 281 — La cultura sicurezza volo è:
> [!check] Risposta corretta
> **È innescata al vertice e misurata alla base**

**Spiegazione:** La cultura della Sicurezza del Volo riflette il reale atteggiamento di tutti i livelli di un'organizzazione nei confronti del rischio e della prevenzione (*"come un'organizzazione si comporta quando nessuno guarda"*). Secondo la dottrina ISSV, essa **è innescata al vertice** — attraverso politiche, regole, processi, risorse ed esempio forniti dalla leadership che si propagano verso il basso — ed **è misurata alla base**, osservando i comportamenti quotidiani, il rispetto spontaneo delle norme, la segnalazione degli errori e le pratiche operative del personale in prima linea.
*(Fonte: Slide Cultura SV - T.Col. Porri / Compendio AVES)*


---


## TRAFFICO AEREO (20 domande)

### Domanda 159 — In Italia, lo spazio aereo tra FL 195 escluso e FL 660 compreso è classificato…
> [!check] Risposta corretta
> **…C**

**Spiegazione:** In Italia lo spazio aereo è suddiviso verticalmente in spazio aereo inferiore (FIR, fino a FL 195 compreso) e spazio aereo superiore (UIR, da FL 195 escluso a FL 660 compreso). Lo spazio aereo superiore è classificato come **classe C** (controllato): sono ammessi sia voli IFR che VFR (questi ultimi solo su specifica autorizzazione oltre FL 195), tutti soggetti a clearance ATC; i voli IFR ricevono separazione da altri IFR e dai VFR, mentre i VFR sono separati dagli IFR e ricevono informazioni di traffico rispetto ad altri VFR.
*(Fonte: Slide Classificazione Spazi Aerei / Regolamento SERA)*

### Domanda 160 — Quale Organizzazione Internazionale si occupa della standardizzazione delle norme per il trasporto aereo civile internazionale?
> [!check] Risposta corretta
> **ICAO**

**Spiegazione:** L'**ICAO** (*International Civil Aviation Organization*) è l'agenzia specializzata delle Nazioni Unite istituita con la Convenzione di Chicago del 1944 per promuovere lo sviluppo sicuro, ordinato ed efficiente dell'aviazione civile internazionale. Il suo compito principale è definire e aggiornare gli standard e le pratiche raccomandate (**SARPs**), raccolti in 19 Annessi tecnici, affinché le regole di circolazione, le licenze, i servizi ATS, le comunicazioni e la sicurezza siano uniformi in tutto il mondo.
*(Fonte: Slide Organizzazioni Internazionali / Diritto Aeronautico)*

### Domanda 161 — Il CTR è uno spazio aereo controllato ...
> [!check] Risposta corretta
> **...che si estende verso l'alto a partire dalla superficie del suolo fino a un determinato limite superiore**

**Spiegazione:** La **Control Zone (CTR)** è uno spazio aereo controllato istituito attorno a uno o più aeroporti per proteggere le procedure strumentali di partenza e di avvicinamento. Per definizione ICAO/SERA, il CTR si estende sempre verso l'alto **a partire dalla superficie del suolo o dell'acqua (SFC/GND)** fino a un determinato limite superiore specificato in AIP; all'interno del CTR il servizio di controllo è garantito dall'ente competente (APP o TWR) per il traffico IFR e VFR secondo la classe assegnata.
*(Fonte: Slide Struttura degli Spazi Aerei / Compendio AVES)*

### Domanda 162 — L'ente regolatore per il traffico aereo generale (GAT) in Italia è...
> [!check] Risposta corretta
> **...ENAC**

**Spiegazione:** In Italia l'autorità unica di regolazione tecnica, certificazione, vigilanza e controllo per l'aviazione civile e il **Traffico Aereo Generale (GAT)** è l'**ENAC** (Ente Nazionale per l'Aviazione Civile), sotto la vigilanza del Ministero delle Infrastrutture e dei Trasporti. Nel sistema nazionale vige una netta separazione tra chi regola e controlla (**ENAC**) e chi fornisce operativamente i servizi alla navigazione aerea per il GAT (**ENAV**).
*(Fonte: Slide Organizzazioni Nazionali / Compendio AVES)*

### Domanda 163 — In funzione del tipo di aeromobil che li utilizzano, gli aeroporti possono essere classificati in… verticale od orizzontale deve essere applicata...
> [!check] Risposta corretta
> **…eliporti, idroscali, aviosuperfici**

**Spiegazione:** Gli aerodromi possono essere classificati secondo diversi criteri (utenza, stato giuridico, caratteristiche costruttive o impiego). In funzione del **tipo di aeromobile** che li utilizza, si distinguono gli aeroporti convenzionali (per velivoli ad ala fissa), gli **eliporti** (dedicati all'ala rotante/elicotteri), gli **idroscali** (specchi d'acqua attrezzati per idrovolanti), gli aeroscali e le **aviosuperfici** (aree idonee non demaniali destinate al decollo e atterraggio di aeromobili con caratteristiche compatibili).
*(Fonte: Slide Aeroporti / Note Controllo Spazio Aereo)*

### Domanda 164 — Le regole dell'Aria sanciscono che Il pilota comandante…
> [!check] Risposta corretta
> **…ha l'autorità finale sull'aeromobile**

**Spiegazione:** Secondo le Regole dell'Aria (Annesso 2 ICAO e Regolamento europeo SERA), il **Pilota in Comando (PIC)** detiene l'**autorità finale** sulla condotta e sulla disposizione dell'aeromobile per l'intera durata del volo. Egli è direttamente responsabile dell'osservanza delle regole dell'aria e può derogarvi esclusivamente nei casi in cui ciò sia assolutamente necessario nell'interesse immediato della sicurezza del volo.
*(Fonte: Slide Regole dell'Aria / Diritto Aeronautico)*

### Domanda 165 — L'altimetro regolato sul QFE indicherà:
> [!check] Risposta corretta
> **altezza**

**Spiegazione:** In altimetria aeronautica esistono tre principali calaggi barometrici, ciascuno riferito a un diverso piano di riferimento. Il **QFE** è la pressione atmosferica misurata al livello della pista (o del punto di riferimento aeroportuale): impostandolo sull'altimetro, lo strumento indica **0 ft** a terra e fornisce in volo l'**altezza (Height - AGL)** sopra l'aeroporto. Diversamente, il **QNH** (pressione ridotta al livello medio del mare) fa leggere l'**altitudine (AMSL)**, mentre il **QNE** (pressione standard 1013.25 hPa) fa leggere il **livello di volo (FL)**.
*(Fonte: Slide ATM2 Altimetria / Note Altimetria)*

### Domanda 166 — Secondo le Regole VFR- Visual Flight Rules…
> [!check] Risposta corretta
> **…la separazione dagli ostacoli è responsabilità del pilota**

**Spiegazione:** Nelle **Regole del Volo a Vista (VFR)** il pilota conduce il volo mantenendo il contatto visivo con la superficie terrestre e operando in condizioni meteorologiche di volo a vista (**VMC**). Principio cardine del VFR è che il pilota è direttamente responsabile della navigazione, del rispetto delle minime VMC, della separazione dal terreno e dagli ostacoli, nonché della separazione visiva dagli altri traffici (*see and avoid*) laddove non fornita dal controllo del traffico aereo.
*(Fonte: Slide Regole dell'Aria)*

### Domanda 167 — Quale tra le seguenti tipologie di volo seguono seguono le regole OAT?
> [!check] Risposta corretta
> **AIB**

**Spiegazione:** Il **Traffico Aereo Operativo (OAT)** comprende i movimenti di aeromobili di Stato che non seguono le procedure ICAO del traffico generale (GAT), ma operano secondo regole specifiche emanate dall'autorità militare (direttiva SMA USA 101). Le quattro tipologie di volo OAT previste in Italia sono: **SAT** (*Security Air Traffic*, difesa aerea/scramble), **SAR** (*Search & Rescue* reale), **BAT** (*Buster Air Traffic*, pronto intervento, ordine pubblico, dogana, protezione civile) e **AIB** (*Antincendi Boschivi*).
*(Fonte: Slide Normativa OAT)*

### Domanda 168 — Fanno parte dell'uso flessibile dello Spazio Aereo…
> [!check] Risposta corretta
> **…TSA**

**Spiegazione:** Il concetto di **FUA (Flexible Use of Airspace)**, introdotto nell'ambito del Cielo Unico Europeo (Reg. CE 2150/2005), considera lo spazio aereo come una risorsa unica da gestire in modo flessibile tra utenza civile e militare in base alle esigenze reali. Gli strumenti operativi principali del FUA sono le aree temporaneamente segregate (**TSA**, riservate a un utente specifico), le aree temporaneamente riservate (**TRA**), le rotte condizionali (**CDR**) e le aree transfrontaliere (**CBA**).
*(Fonte: Slide ATM 1.7 FUA)*

### Domanda 169 — Fanno parte delle Regole dell'aria, in paritcolare delle regole generali…
> [!check] Risposta corretta
> **…norme per evitare collisione;**

**Spiegazione:** Le **Regole dell'Aria** (Annesso 2 ICAO e Regolamento SERA) si articolano in tre macro-sezioni: **regole generali**, regole del volo a vista (VFR) e regole del volo strumentale (IFR). Le **regole generali** stabiliscono i principi validi per tutti i voli, tra cui l'applicabilità territoriale, l'autorità del pilota comandante, le **norme per evitare collisioni** (diritto di precedenza, luci di navigazione, vicinanza di altri aeromobili e di aeroporti), la presentazione del piano di volo, le segnalazioni e l'intercettazione.
*(Fonte: Slide Regole dell'Aria)*

### Domanda 170 — In caso di due aeromobili convergenti:
> [!check] Risposta corretta
> **L'aeromobile che viene da destra ha la precedenza.**

**Spiegazione:** Le norme sul diritto di precedenza per evitare collisioni in volo stabiliscono che, quando due aeromobili convergono approssimativamente alla stessa quota, **quello che ha l'altro alla propria destra deve dare la precedenza** (quindi l'aeromobile che proviene da destra ha la precedenza). Fanno eccezione le categorie con minore manovrabilità (nell'ordine: palloni, alianti, dirigibili, aeromobili a motore, con precedenza ai mezzi che trainano), mentre in caso di rotte frontali (*head-on*) entrambi gli aeromobili devono virare a destra.
*(Fonte: Slide Regole dell'Aria / Compendio AVES)*

### Domanda 171 — Al fine di evitare collisioni nelle vicinanze dell'aereoporto…
> [!check] Risposta corretta
> **…bisogna evitare o conformarsi ai circuiti di traffico;**

**Spiegazione:** Per garantire la sicurezza e prevenire collisioni nelle vicinanze di un aeroporto, un aeromobile in volo sull'aeroporto o nelle sue prossimità deve osservare attentamente il traffico locale ed **evitare il circuito di traffico** formato dagli altri velivoli oppure **conformarsi ad esso**. Inoltre, salvo diverse istruzioni o procedure pubblicate, tutte le virate in circuito vanno eseguite a sinistra e i decolli e gli atterraggi devono essere effettuati controvento.
*(Fonte: Slide Regole dell'Aria)*

### Domanda 172 — Un volo VFR può essere condotto fino a FL...
> [!check] Risposta corretta
> **…195**

**Spiegazione:** In Italia i voli condotti secondo le Regole del Volo a Vista (**VFR**) possono operare ordinariamente fino a **FL 195 compreso**, che segna il limite superiore della FIR (spazio aereo inferiore). Oltre FL 195 inizia la UIR (spazio aereo superiore, classificato C fino a FL 660 compreso), nella quale l'attività VFR è di norma preclusa e consentita solo in casi particolari previa specifica autorizzazione dell'ente competente.
*(Fonte: Slide Classificazione Spazi Aerei / Regole dell'Aria)*

### Domanda 173 — Da quale convenzione internazionale nasce l'ICAO?
> [!check] Risposta corretta
> **Convenzione di Chicago**

**Spiegazione:** L'**ICAO** (*International Civil Aviation Organization*) è stata istituita formalmente dalla **Convenzione di Chicago sull'Aviazione Civile Internazionale**, firmata il 7 dicembre 1944 da 52 Stati. Tale trattato rappresenta la carta fondamentale del diritto aeronautico moderno: oltre a creare l'ICAO, ha sancito il principio della sovranità piena ed esclusiva di ogni Stato sul proprio spazio aereo, le regole sulla nazionalità degli aeromobili e la struttura degli Annessi tecnici.
*(Fonte: Slide Organizzazioni Internazionali / Diritto Aeronautico)*

### Domanda 174 — La zona di traffico aeroportuale (ATZ) è uno spazio aereo di definite dimensioni, istituito attorno all'aeroporto per…
> [!check] Risposta corretta
> **…la protezione del traffico di aeroporto;**

**Spiegazione:** L'**ATZ (Aerodrome Traffic Zone)** è uno spazio aereo di dimensioni definite istituito attorno a un aeroporto con lo scopo specifico di **proteggere il traffico di aeroporto** (circuiti visivi, decolli, atterraggi e movimenti in prossimità della pista). L'ATZ può essere istituita sia su aeroporti controllati (dove opera una Torre di Controllo) sia su aeroporti non controllati (dove opera un ente AFIS o non è presente alcun ente ATS).
*(Fonte: Slide Struttura degli Spazi Aerei / Compendio AVES)*

### Domanda 175 — L'ente Regolatore per il traffico aereo operativo in Italia è…
> [!check] Risposta corretta
> **AM**

**Spiegazione:** In Italia la regolamentazione strategica, normativa e procedurale del **Traffico Aereo Operativo (OAT)** e la gestione ATM negli spazi aerei di interesse militare competono all'**Aeronautica Militare (AM)** (tramite lo Stato Maggiore Aeronautica / UCAM). Questa competenza si affianca in modo coordinato a quella di ENAC ed ENAV per il Traffico Aereo Generale (GAT), garantendo l'integrazione sicura tra attività operative militari e traffico civile.
*(Fonte: Slide Organizzazioni Nazionali / Normativa OAT)*

### Domanda 176 — Gli aeroporti misti sono:
> [!check] Risposta corretta
> **Aeroporti militari aperti al traffico civile**

**Spiegazione:** Sotto il profilo giuridico-demaniale, gli aeroporti italiani si distinguono in aeroporti civili (statali o privati), aeroporti militari e **aeroporti misti**. Questi ultimi sono **aeroporti militari aperti anche al traffico civile** (commerciale e/o generale), nei quali convivono reparti delle Forze Armate e attività civile, e dove i servizi di assistenza al volo su pista e area di manovra sono di norma assicurati dall'Aeronautica Militare.
*(Fonte: Slide Aeroporti / Note Controllo Spazio Aereo)*

### Domanda 177 — Il NOTAM con validità EST …
> [!check] Risposta corretta
> **...deve essere cancellato da un altro NOTAM**

**Spiegazione:** Il **NOTAM** (*Notice to Airmen*) è un avviso diffuso tramite rete AFTN per comunicare informazioni aeronautiche urgenti o temporanee essenziali per le operazioni di volo. Quando nel campo C (fine validità) è riportato il suffisso **EST** (*Estimated*), significa che l'orario di cessazione dell'evento è solo stimato: per normativa AIS, un NOTAM con validità `EST` non decade automaticamente allo scadere dell'ora indicata, ma resta in vigore finché non viene formalmente **cancellato (NOTAMC) o sostituito (NOTAMR) da un altro NOTAM**.
*(Fonte: Slide LAW 3.2 Pubblicazioni AIS)*

### Domanda 178 — L’AIP  in Italia viene pubblicato da…
> [!check] Risposta corretta
> **…ENAV (Ente Nazionale di Assistenza al Volo)**

**Spiegazione:** L'**AIP** (*Aeronautical Information Publication*) è la pubblicazione fondamentale del Servizio Informazioni Aeronautiche (AIS) che raccoglie le informazioni permanenti essenziali alla navigazione aerea, articolata nelle tre parti GEN (Generale), ENR (In rotta) e AD (Aeroporti). In Italia l'AIP civile è compilato, pubblicato e aggiornato da **ENAV**, mentre per gli aspetti e gli aeroporti di competenza militare l'Aeronautica Militare (tramite il CIGA) pubblica il **MILAIP**.
*(Fonte: Slide LAW 3.2 Pubblicazioni AIS / Diritto Aeronautico)*


---


## FRASEOLOGIA (15 domande)

### Domanda 179 — Il nominativo OAT di acft militari è composto da…
> [!check] Risposta corretta
> **…nominativo operativo del reparto volo + numero di missione**

**Spiegazione:** Nelle comunicazioni radiotelefoniche aeronautiche, il nominativo di chiamata (*callsign*) identifica univocamente l'aeromobile in frequenza. Quando un aeromobile militare opera secondo le regole **OAT** (Traffico Aereo Operativo), il suo nominativo è composto dal **nominativo operativo assegnato al reparto di volo seguito dal numero di missione** (es. *DAGA 01*, *FALCO 13*) e, a differenza di altri nominativi, non deve mai essere abbreviato durante il volo.
*(Fonte: Slide 3 Sistema Orario e Nominativi)*

### Domanda 180 — L'ora locale in Italia è:
> [!check] Risposta corretta
> **2 ore in anticipo rispetto all'UTC durante il periodo estivo**

**Spiegazione:** In tutto il mondo aeronautico l'orario di riferimento unico per pianificazione, piani di volo, NOTAM, bollettini meteo e comunicazioni è l'**UTC** (*Coordinated Universal Time*, spesso indicato come *Zulu time*, riferito al meridiano di Greenwich). Per convertire in ora locale italiana occorre considerare lo scostamento di fuso orario: **UTC +2 ore** durante il periodo estivo (ora legale, dall'ultima domenica di marzo all'ultima domenica di ottobre) e **UTC +1 ora** durante il periodo invernale (ora solare).
*(Fonte: Slide 3 Sistema Orario)*

### Domanda 181 — Il segnale PAN PAN ripetuto 3 volte indica una situazione di:
> [!check] Risposta corretta
> **priorità**

**Spiegazione:** La fraseologia ICAO distingue nettamente due livelli di criticità nelle chiamate anomale. Il segnale **PAN PAN** (pronunciato tre volte all'inizio della chiamata) identifica una condizione di **urgenza / priorità** (*Urgency*): riguarda la sicurezza dell'aeromobile o di una persona a bordo, ma non richiede assistenza immediata per pericolo grave e imminente (condizione di **soccorso/emergenza** *Distress*, segnalata invece con **MAYDAY** ripetuto tre volte).
*(Fonte: Note Fraseologia ICAO / Emergenze e Urgenze)*

### Domanda 182 — La frase “un errore è stato commesso in questa trasmissione; la versione corretta è..." si riferisce alla parola della fraseologia standard...
> [!check] Risposta corretta
> **...CORRECTION;**

**Spiegazione:** In fraseologia standard ICAO (Annesso 10 Vol. II / Doc 9432), quando un operatore o un pilota si accorge di aver commesso un errore durante una trasmissione radio, deve utilizzare la parola convenzionale **CORRECTION** seguita dall'ultima parola o gruppo trasmesso correttamente e poi dalla **versione corretta** del messaggio. Questo evita ambiguità in frequenza e garantisce che il destinatario sostituisca subito il dato errato.
*(Fonte: Note Fraseologia ICAO / Doc 9432)*

### Domanda 183 — Fra tutti i messaggi del Servizio Mobile Aeronautico, ha la massima priorità il messaggio di…
> [!check] Risposta corretta
> **…soccorso**

**Spiegazione:** L'**ICAO Annex 10 Vol. II** stabilisce un ordine rigoroso di priorità per le comunicazioni sul Servizio Mobile Aeronautico, affinché i traffici critici non vengano mai ostacolati. Al **1° posto assoluto** si collocano i **messaggi di soccorso** (*Distress* - MAYDAY), seguiti nell'ordine da: 2° messaggi di **urgenza** (*Urgency* - PAN PAN), 3° comunicazioni relative al rilevamento radiogoniometrico, 4° messaggi di **sicurezza del volo**, 5° messaggi meteorologici e 6° messaggi di **regolarità del volo**.
*(Fonte: Note Fraseologia ICAO / ICAO Annex 10 Vol. II)*

### Domanda 184 — Le prove sulla frequenza di emergenza possono essere effettuate...
> [!check] Risposta corretta
> **...durante i primi 5 minuti di ogni ora;**

**Spiegazione:** Le frequenze internazionali di emergenza (121.500 MHz VHF e 243.000 MHz UHF) devono restare il più possibile libere da traffico non essenziale per non interferire con reali chiamate di soccorso o con i segnali satellitari dei trasmettitori di emergenza (ELT). Per questo motivo, eventuali prove tecniche o test ELT su tali frequenze sono rigorosamente consentiti **solo durante i primi 5 minuti di ogni ora** (e per una durata massima di pochi secondi, previa verifica dell'assenza di emergenze in corso).
*(Fonte: Note Fraseologia ICAO)*

### Domanda 185 — Per una corretta tecnica di trasmissione impone di...
> [!check] Risposta corretta
> **…evitare i suoni di esitazione**

**Spiegazione:** Una corretta tecnica di trasmissione radiotelefonica è essenziale per la chiarezza e la sicurezza delle comunicazioni T/B/T. Le norme ICAO prescrivono di utilizzare la fraseologia standard, mantenere un tono di conversazione normale e costante (senza gridare), parlare con un ritmo regolare non superiore a circa 100 parole al minuto, scandire chiaramente le parole e i numeri, ed **evitare qualsiasi suono di esitazione** (come *"uhm"*, *"eeh"*), premendo il microfono solo dopo aver formulato mentalmente il messaggio.
*(Fonte: Note Fraseologia ICAO / Doc 9432)*

### Domanda 186 — Nelle comunicazioni radio, devono essere sempre ripetute le informazioni di…
> [!check] Risposta corretta
> **…cambi frequenza**

**Spiegazione:** Il **read-back** (ripetizione integrale da parte del pilota) è la procedura di sicurezza che consente al controllore di verificare che un'istruzione critica sia stata ricevuta e compresa correttamente. Tra gli elementi soggetti a read-back obbligatorio rientrano sempre: **i cambi di frequenza**, le autorizzazioni di rotta, le istruzioni relative alla pista in uso (ingresso, decollo, atterraggio, attesa), le quote o i livelli di volo, le prue, le velocità, i calaggi altimetrici (QNH/QFE), il livello di transizione e i codici transponder (SSR).
*(Fonte: Note Fraseologia ICAO / Compendio AVES)*

### Domanda 187 — Nelle prove radio, in accordo alla scala di comprensibilità, il valore 4 corrisponde a…
> [!check] Risposta corretta
> **…"Comprensibile"**

**Spiegazione:** Quando si effettua una prova radio (*radio check*), la qualità della ricezione viene valutata tramite la **Scala di Intelligibilità/Comprensibilità ICAO** (*Readability Scale*) da 1 a 5: **`1`** = Incomprensibile (*Unreadable*), **`2`** = Comprensibile a tratti (*Readable now and then*), **`3`** = Comprensibile con difficoltà (*Readable but with difficulty*), **`4`** = **Comprensibile** (*Readable*) e **`5`** = Perfettamente comprensibile (*Perfectly readable*).
*(Fonte: Note Fraseologia ICAO / Compendio AVES)*

### Domanda 188 — SAY AGAIN in fraseologia standard sta ad indicare…
> [!check] Risposta corretta
> **…"ripetete la vostra ultima trasmissione"**

**Spiegazione:** In fraseologia standard ICAO, **SAY AGAIN** è l'espressione utilizzata da chi riceve per chiedere all'interlocutore di **ripetere tutta o parte dell'ultima trasmissione** non compresa o disturbata. In radiotelefonia aeronautica si usa sempre *SAY AGAIN* (mai *"repeat"*, che in ambito militare ha il significato specifico di ripetizione del fuoco d'artiglieria), mentre chi sta per ripetere volontariamente una propria frase utilizza *I SAY AGAIN*.
*(Fonte: Note Fraseologia ICAO / Doc 9432)*

### Domanda 189 — Le frequenze 121.500/243.000 sono…
> [!check] Risposta corretta
> **…di emergenza utilizzate in radiotelefonia**

**Spiegazione:** Le frequenze **121.500 MHz** (in banda VHF, per l'aviazione civile internazionale) e **243.000 MHz** (in banda UHF, per l'aviazione militare) sono le **frequenze internazionali di emergenza utilizzate in radiotelefonia**. Esse sono costantemente monitorate dagli enti del traffico aereo, dai centri di coordinamento soccorso e dagli aeromobili in volo quando possibile, e sono inoltre impiegate per la localizzazione dei segnali di soccorso emessi dagli ELT.
*(Fonte: Note Fraseologia ICAO / Emergenze e Urgenze)*

### Domanda 190 — Ogni messaggio trasmesso in frequenza deve contenere gli elementi nell'ordine specificato
> [!check] Risposta corretta
> **nominativo radio stazione chiamata-proprio nominativo-messaggio**

**Spiegazione:** Per rendere immediate e prive di ambiguità le comunicazioni su frequenze spesso congestionate, ogni trasmissione radiotelefonica deve rispettare una sequenza rigorosa: **1) nominativo radio della stazione chiamata** (per catturare subito l'attenzione del destinatario), **2) proprio nominativo (callsign)** (per identificarsi) e **3) testo del messaggio** (istruzione, richiesta o riporto).
*(Fonte: Note Fraseologia ICAO / ICAO Annex 10 Vol. II)*

### Domanda 191 — I piloti devono ripetere
> [!check] Risposta corretta
> **pista in uso**

**Spiegazione:** Per prevenire gravi errori operativi quali le incursioni di pista (*runway incursion*), le norme ICAO impongono il **read-back obbligatorio** di tutte le informazioni e autorizzazioni critiche per la sicurezza del volo. Tra queste rientrano sempre la **pista in uso** e ogni autorizzazione ad entrare, atterrare, decollare, attendere prima di, attraversare o percorrere in senso inverso (*back-track*) qualsiasi pista.
*(Fonte: Note Fraseologia ICAO / Compendio AVES)*

### Domanda 192 — Secondo la scala di intellegibilità, 2/5 corrisponde a…
> [!check] Risposta corretta
> **comprensibile a tratti**

**Spiegazione:** La scala di intelligibilità/comprensibilità ICAO classifica la qualità del segnale radio ricevuto su 5 livelli crescenti: `1/5` indica un segnale *incomprensibile*, **`2/5`** indica un segnale **comprensibile a tratti** (*Readable now and then*, ovvero intellegibile solo in modo discontinuo), `3/5` *comprensibile con difficoltà*, `4/5` *comprensibile* e `5/5` *perfettamente comprensibile*.
*(Fonte: Note Fraseologia ICAO / Compendio AVES)*

### Domanda 193 — Nella fraseologia standard in umeri si pronunciano uno per volta ad eccezione di…
> [!check] Risposta corretta
> **…visibilità**

**Spiegazione:** La regola generale della fraseologia ICAO prevede che tutti i numeri (livelli di volo, prue, frequenze, velocità, vento, trasponder) siano pronunciati **una cifra alla volta** (es. *FL 180* = *"one eight zero"*). Fanno **eccezione** esclusivamente i valori tondi espressi in centinaia e migliaia riferiti ad **altitudine**, **altezza della base delle nubi**, **visibilità** e **portata visuale di pista (RVR)**, che si pronunciano per intero (es. *visibility 5000* = *"five thousand"*).
*(Fonte: Note Fraseologia ICAO / Doc 9432)*


---


## STRUMENTI (18 domande)

### Domanda 194 — Quali sono le due macro-famiglie principali in cui si suddividono gli strumenti di volo tradizionali di base?
> [!check] Risposta corretta
> **Strumenti giroscopici e strumenti a capsula (anobarometrici)**

**Spiegazione:** Il pannello di volo tradizionale di base (*six-pack*) si articola in due grandi famiglie fisiche: gli **strumenti a capsula o pitot-statici** (anemometro, altimetro e variometro), che misurano la pressione statica e/o dinamica dell'aria tramite capsule deformabili, e gli **strumenti giroscopici** (orizzonte artificiale, girodirezionale/girobussola e virosbandometro), che sfruttano le proprietà di rigidità nello spazio e precessione di un rotore ad alta velocità.
*(Fonte: FAA Flight Instruments General Cap. 3; Dispensa Navigazione Aerea Martini)*

### Domanda 195 — Durante il volo orizzontale rettilineo livellato, quale indicazione fornirà l'orizzonte artificiale (Attitude Indicator)?
> [!check] Risposta corretta
> **Lo strumento indicherà 0 gradi (assetto neutro di beccheggio e rollio)**

**Spiegazione:** L'orizzonte artificiale impiega un giroscopio ad asse di rotazione verticale montato su sospensione cardanica doppia, mantenendo il proprio piano di riferimento rigido rispetto all'orizzonte reale. In volo orizzontale rettilineo livellato e non accelerato, gli assi di beccheggio e rollio del velivolo risultano paralleli all'orizzonte terrestre: l'indice superiore di rollio segna quindi $0^\circ$ e la sagoma stilizzata del velivolo coincide con la barra dell'orizzonte.
*(Fonte: FAA Flight Instruments General Cap. 3; AIRCRAFT_GYRO_INSTRUMENTS)*

### Domanda 196 — Se l'orizzonte artificiale (Attitude Indicator - AI) perde il proprio allineamento o va in 'tumbling', quale può essere la causa tipica?
> [!check] Risposta corretta
> **Superamento dei limiti meccanici di escursione (gimbal limits) di beccheggio o rollio**

**Spiegazione:** Negli orizzonti artificiali giroscopici convenzionali, gli anelli cardanici (*gimbals*) possiedono limiti meccanici di escursione angolare (tipicamente intorno a $\pm 60^\circ\text{–}70^\circ$ di beccheggio e $\pm 100^\circ$ di rollio). Quando il velivolo supera tali limiti in manovre estreme senza aver bloccato lo strumento (*caging*), la cassa del rotore urta i finecorsa cardanici generando una coppia di precessione che fa ribaltare (*tumbling*) il giroscopio, rendendo l'indicazione inaffidabile fino al riallineamento.
*(Fonte: FAA Flight Instruments General Cap. 3; AIRCRAFT_GYRO_INSTRUMENTS)*

### Domanda 197 — Nella girobussola dotata di selettore DG / SLAVED, se viene selezionata la modalità DG (Directional Gyro), qual è la sorgente primaria di informazione della prua?
> [!check] Risposta corretta
> **Il giroscopio (funziona come giroscopio libero con correzione periodica manuale)**

**Spiegazione:** Le girobussole asservite dispongono di un selettore tra modalità **SLAVED** e **DG** (*Free Gyro*). Selezionando **DG**, il giroscopio direzionale viene scollegato dal segnale magnetico della valvola di flusso e mantiene l'orientamento unicamente per rigidità giroscopica nello spazio. A causa della deriva apparente (dovuta alla rotazione terrestre e agli attriti interni, tipicamente circa $3^\circ$ ogni $15\text{ minuti}$ alle medie latitudini), lo strumento deve essere verificato e riallineato manualmente con la bussola magnetica.
*(Fonte: FAA Flight Instruments General Cap. 3 - Remote Indicating Compass)*

### Domanda 198 — In quali condizioni operative è corretto selezionare e utilizzare la modalità SLAVED sulla girobussola?
> [!check] Risposta corretta
> **Quando non ci si trova nelle regioni polari (a latitudini dove il campo magnetico è affidabile)**

**Spiegazione:** In modalità **SLAVED**, la girobussola si aggiorna continuamente rispetto al Nord Magnetico tramite i segnali della *flux valve*. Alle alte latitudini polari (tipicamente oltre $70^\circ$ N o S), la componente orizzontale del campo magnetico terrestre diventa troppo debole e l'inclinazione magnetica troppo elevata per fornire un riferimento direzionale stabile: in tali regioni si passa alla modalità DG (giroscopio libero), mentre a tutte le latitudini ordinarie si opera in **SLAVED**.
*(Fonte: FAA Flight Instruments General Cap. 3; Dispensa Martini, Sez. 4)*

### Domanda 199 — Come opera e si aggiorna la girobussola quando è impostata in modalità SLAVED?
> [!check] Risposta corretta
> **Il giroscopio si aggiorna e si corregge continuamente tramite il segnale della valvola di flusso (flux valve)**

**Spiegazione:** Nella modalità **SLAVED**, una valvola di flusso (*flux valve*), solitamente installata all'estremità alare per evitare interferenze magnetiche della cellula, rileva l'orientamento del campo magnetico terrestre e trasmette un segnale elettrico proporzionale alla prua magnetica. Tale segnale alimenta un motore di coppia (*torque motor*) che precessiona in modo continuo il giroscopio, compensando automaticamente la deriva apparente e mantenendo la rosa allineata al Nord Magnetico.
*(Fonte: FAA Flight Instruments General Cap. 3 - Remote Indicating Compass)*

### Domanda 200 — Qual è lo scopo principale del virosbandometro (Turn and Slip Indicator / Turn Coordinator)?
> [!check] Risposta corretta
> **Indicare la direzione della virata, l'esecuzione di virate coordinate e il rispetto della virata standard (standard rate turn)**

**Spiegazione:** Il virosbandometro integra due indicazioni complementari in un unico quadrante: un giroscopio a un grado di libertà basato sulla **precessione** che mostra il verso e il rateo angolare di virata (con i riferimenti tarati sulla virata standard di $3^\circ/\text{s}$), e un inclinometro a pallina in liquido smorzante che verifica il coordinamento tra angolo di inclinazione alare e rateo di imbardata. Lo strumento fornisce esclusivamente informazioni di virata e coordinamento, senza indicare l'assetto di beccheggio.
*(Fonte: FAA Flight Instruments General Cap. 3; AIRCRAFT_GYRO_INSTRUMENTS)*

### Domanda 201 — Durante l'esecuzione di una virata, se la pallina del virosbandometro si sposta all'interno della virata stessa, che condizione di volo si sta verificando?
> [!check] Risposta corretta
> **Scivolata (Slip - l'aeromobile scivola verso l'interno della virata per insufficiente forza centrifuga)**

**Spiegazione:** La pallina dell'inclinometro si posiziona lungo la risultante tra forza di gravità e forza centrifuga. Quando l'inclinazione alare (*bank*) è eccessiva rispetto al rateo di imbardata (o viene applicato troppo poco timone interno), la gravità prevale sulla forza centrifuga e la pallina cade verso l'**interno** della virata: il velivolo è in **scivolata** (*slip*). Per coordinare la virata si applica piede dal lato in cui si trova la pallina (*"step on the ball"*) oppure si riduce l'angolo di bank.
*(Fonte: FAA Flight Instruments General Cap. 3; AIRCRAFT_GYRO_INSTRUMENTS)*

### Domanda 202 — Durante una virata, se la pallina del virosbandometro si sposta verso l'esterno della virata, cosa indica?
> [!check] Risposta corretta
> **Derapata (Skid - forza centrifuga prevalente che spinge l'aeromobile verso l'esterno)**

**Spiegazione:** Quando il rateo di imbardata è eccessivo rispetto all'angolo di inclinazione alare (troppo timone interno o bank insufficiente), la forza centrifuga supera la componente laterale della gravità e spinge la pallina dell'inclinometro verso l'**esterno** della virata: si verifica una **derapata** (*skid*). Secondo la regola pratica *"step on the ball"*, il pilota riporta la pallina al centro riducendo il piede interno (o applicando piede esterno / aumentando leggermente il bank).
*(Fonte: FAA Flight Instruments General Cap. 3; AIRCRAFT_GYRO_INSTRUMENTS)*

### Domanda 203 — A velivolo fermo al suolo posizionato su un piazzale/aerodromo di quota nota, qual è lo scostamento massimo tollerabile dell'altimetro rispetto all'altitudine reale?
> [!check] Risposta corretta
> **± 75 ft**

**Spiegazione:** Nei controlli pre-volo a terra (in particolare prima di operazioni IFR), impostando nella finestrella di Kollsman il QNH locale aggiornato su un aerodromo di elevazione nota, la lettura dell'altimetro deve coincidere con l'elevazione topografica entro una tolleranza massima ammissibile di **$\pm 75\text{ ft}$**. Uno scostamento superiore a $75\text{ ft}$ indica che lo strumento non è affidabile per il volo strumentale e richiede intervento manutentivo.
*(Fonte: FAA Flight Instruments General Cap. 3 - Altimeter Errors / Preflight)*

### Domanda 204 — Se regolando l'altimetro di bordo si osserva che il valore QFE e il valore QNH coincidono esattamente, che cosa si deduce?
> [!check] Risposta corretta
> **L'aerodromo si trova al livello medio del mare (MSL, elevazione 0 ft)**

**Spiegazione:** Il **QFE** rappresenta la pressione atmosferica misurata al livello dell'aeroporto (che porta l'altimetro a segnare $0\text{ ft}$ di altezza al suolo), mentre il **QNH** è la pressione riportata al livello medio del mare (MSL) secondo il gradiente barico dell'atmosfera standard. Se i valori di QFE e QNH coincidono esattamente, non sussiste alcuna colonna d'aria di correzione tra il campo e il livello del mare, indicando che l'aerodromo si trova a **elevazione $0\text{ ft}$ MSL**.
*(Fonte: Slide Lezioni BAK Altimetro; Approfondimento Quote, Temperature e Velocità)*

### Domanda 205 — Cosa accade all'indicazione dell'anemometro se la presa dinamica (tubo di Pitot) e il relativo foro di scarico si ostruiscono completamente durante il volo?
> [!check] Risposta corretta
> **L'anemometro si comporta come un altimetro (la velocità indicata aumenta in salita e diminuisce in discesa)**

**Spiegazione:** L'anemometro misura la pressione dinamica ($P_t - P_s$) confrontando la pressione totale del tubo di Pitot all'interno della capsula manometrica con la pressione statica presente nella cassa dello strumento. Se sia l'imbocco anteriore del Pitot sia il foro di drenaggio posteriore si ostruiscono, la pressione totale resta intrappolata nella capsula mentre la pressione statica esterna continua a variare con la quota: salendo, $P_s$ diminuisce e la capsula si espande segnando un falso aumento di velocità; scendendo, $P_s$ aumenta e l'indicazione cala, facendo comportare l'anemometro come un **altimetro**.
*(Fonte: Slide Lezioni BAK Anemometro; FAA Flight Instruments General Cap. 3)*

### Domanda 206 — Qual è la corretta sequenza logica di correzione per risalire dalla velocità indicata (IAS) alla velocità vera (TAS)?
> [!check] Risposta corretta
> **Da IAS a CAS per errore di posizione/installazione; da CAS a EAS per errore di compressibilità; da EAS a TAS per errore di densità/quota**

**Spiegazione:** Il passaggio dalla velocità letta sullo strumento alla velocità effettiva rispetto alla massa d'aria segue una catena ordinata di correzioni fisiche: dalla **IAS** si eliminano gli errori strumentali e di posizione delle prese per ricavare la **CAS**; dalla **CAS** si applica la correzione per la compressibilità adiabatica dell'aria nel tubo di Pitot per ottenere la **EAS**; infine, dalla **EAS** si corregge per la densità reale dell'aria (funzione di quota e temperatura, $\text{TAS} = \text{EAS}\sqrt{\rho_0/\rho}$) per ottenere la **TAS**.
*(Fonte: Approfondimento Quote, Temperature e Velocità; Dispensa Martini, Sez. 2)*

### Domanda 207 — Sull'anemometro, quali sono i limiti operativi identificati dall'arco giallo (intervallo di cautela)?
> [!check] Risposta corretta
> **Da Vno (velocità massima strutturale di crociera) a Vne (velocità da non superare mai)**

**Spiegazione:** La codifica cromatica dell'anemometro delimita gli inviluppi operativi del velivolo: l'**arco giallo** (*caution range*) è compreso tra la **$V_{NO}$** (velocità massima strutturale di crociera, limite superiore dell'arco verde) e la linea radiale rossa **$V_{NE}$** (*Never Exceed Speed*, velocità da non superare mai). All'interno dell'arco giallo è consentito volare esclusivamente in aria calma, evitando manovre brusche dei comandi che potrebbero generare sovraccarichi strutturali.
*(Fonte: Slide Lezioni BAK Anemometro, Slide 12-13)*

### Domanda 208 — Qual è il rateo angolare di virata di una virata standard (Rate 1 / Standard Rate Turn)?
> [!check] Risposta corretta
> **3 gradi al secondo**

**Spiegazione:** Per convenzione aeronautica internazionale, una virata standard (*Rate 1* o *Standard Rate Turn*) corrisponde a un rateo di variazione della prua pari a **$3^\circ$ al secondo**, equivalenti a $180^\circ$ al minuto. Sul quadrante del virosbandometro o del *Turn Coordinator*, questo rateo si ottiene allineando la lancetta o l'aletta del velivolo simbolico con gli appositi indici laterali di riferimento.
*(Fonte: AIRCRAFT_GYRO_INSTRUMENTS; FAA Flight Instruments General Cap. 3)*

### Domanda 209 — A rateo di virata standard (3°/s), quanto tempo impiega un aeromobile a effettuare una variazione di prua di 30 gradi?
> [!check] Risposta corretta
> **10 secondi**

**Spiegazione:** Mantenendo una virata standard al rateo costante di $3^\circ/\text{s}$, il tempo necessario per compiere una determinata variazione di prua $\Delta\psi$ si ricava direttamente da $t = \frac{\Delta\psi}{3^\circ/\text{s}}$. Per un'accostata di $30^\circ$ occorrono quindi $t = \frac{30^\circ}{3^\circ/\text{s}} = 10\text{ secondi}$, relazione ampiamente impiegata nel volo strumentale per eseguire variazioni di prua temporizzate.
*(Fonte: Calcolo virata standard Rate 1)*

### Domanda 210 — A rateo di virata standard (3°/s), quanto tempo impiega un aeromobile a effettuare una virata di 180 gradi (inversione di rotta)?
> [!check] Risposta corretta
> **60 secondi**

**Spiegazione:** Applicando il rateo angolare standard di $3^\circ/\text{s}$, il tempo richiesto per un'inversione di rotta di $180^\circ$ è pari a $t = \frac{180^\circ}{3^\circ/\text{s}} = 60\text{ secondi}$ ($1\text{ minuto}$). Questa relazione sta alla base della geometria dei circuiti di attesa (*holding pattern*) e delle virate di procedura, i cui tratti curvi di $180^\circ$ hanno durata nominale di un minuto.
*(Fonte: Calcolo virata standard Rate 1; FAA IPH)*

### Domanda 211 — A rateo di virata standard (3°/s), quanto tempo impiega un aeromobile a compiere un giro completo di 360 gradi?
> [!check] Risposta corretta
> **120 secondi**

**Spiegazione:** Al rateo standard di $3^\circ/\text{s}$, il tempo necessario per completare un giro di $360^\circ$ è $t = \frac{360^\circ}{3^\circ/\text{s}} = 120\text{ secondi}$ ($2\text{ minuti}$). Per questo motivo gli indicatori di virata tradizionali riportano sul quadrante la dicitura **"2 MIN TURN"**, a indicare che mantenendo l'indice sul riferimento di virata standard si completa un'orbita intera in due minuti.
*(Fonte: AIRCRAFT_GYRO_INSTRUMENTS; FAA Flight Instruments General Cap. 3)*


---


## BONUS (6 domande)

### Domanda 212 — Come si calcola la componente laterale del vento (Crosswind) rispetto alla pista o alla rotta?
> [!check] Risposta corretta
> **Crosswind = Velocità del Vento · sen(α)**

**Spiegazione:** Nella scomposizione vettoriale del vento rispetto all'asse della pista o alla rotta seguita dal velivolo, indicando con $\alpha$ l'angolo acuto compreso tra la direzione di provenienza del vento e la direzione della pista/rotta, il vettore vento si divide in due componenti ortogonali. La componente perpendicolare al traverso (**Crosswind**), responsabile della deriva o dello scarrocciamento laterale in decollo e atterraggio, si calcola moltiplicando l'intensità del vento per il **seno** dell'angolo $\alpha$ (`Velocità del Vento · sen(α)`), mentre la componente longitudinale (vento frontale o in coda) è proporzionale al coseno (`cos(α)`).
*(Fonte: Compendio Generale AVES - Modulo 12)*

---

### Domanda 213 — Qual è la formula empirica rapida per stimare la TAS a partire dalla IAS e dal Flight Level (FL)?
> [!check] Risposta corretta
> **TAS ≈ IAS + (FL / 2)**

**Spiegazione:** Salendo di quota la densità dell'aria diminuisce progressivamente; di conseguenza, a parità di pressione dinamica letta dallo strumento (IAS, *Indicated Airspeed*), la velocità vera del velivolo rispetto alla massa d'aria circostante (**TAS**, *True Airspeed*) risulta maggiore. In condizioni standard, questo incremento è stimabile in circa il **2% ogni 1.000 piedi** di quota: esprimendo la quota in *Flight Level* (FL, centinaia di piedi), la regola pratica in volo consente di ottenere la TAS sommando alla IAS la metà del valore del Flight Level (`TAS ≈ IAS + FL / 2`).
*(Fonte: Compendio Generale AVES - Modulo 12)*

---

### Domanda 214 — Qual è la formula per calcolare la velocità locale del suono LSS (in nodi) in funzione della temperatura assoluta T (in Kelvin)?
> [!check] Risposta corretta
> **LSS = 38.94 · √T**

**Spiegazione:** Nei gas ideali, la velocità locale del suono (**LSS**, *Local Speed of Sound*) dipende esclusivamente dalla radice quadrata della temperatura assoluta $T$ espressa in Kelvin ($T = 273.15 + t_{°C}$), ed è quindi indipendente dalla pressione e dalla densità dell'aria. Utilizzando la costante di conversione **38.94**, la formula `LSS = 38.94 · √T` fornisce direttamente la velocità del suono espressa in **nodi** (ad esempio, in aria tipo al livello del mare con $t = +15\,°\text{C}$, ossia $T = 288.15\text{ K}$, si ottiene $\text{LSS} \approx 661\text{ kts}$). Conoscere la LSS è fondamentale per determinare il numero di Mach ($M = \text{TAS} / \text{LSS}$).
*(Fonte: Compendio Generale AVES - Modulo 12 / 1. materie/Navigazione/99 - Domande Esame.md)*

---

### Domanda 215 — Qual è la formula empirica per calcolare la velocità variometrica di discesa (ft/min) per mantenere un sentiero standard di 3°?
> [!check] Risposta corretta
> **Rateo di discesa (ft/min) ≈ GS · 5**

**Spiegazione:** Un sentiero di discesa strumentale standard (ILS/glide path) inclinato di **3°** corrisponde trigonometricamente a una pendenza di circa il **5%** ($\tan 3° \approx 0.052$, pari a circa $300\text{ ft/NM}$). Poiché la velocità variometrica in piedi al minuto ($\text{ft/min}$) è approssimativamente uguale al prodotto tra la **Ground Speed (GS)** espressa in nodi e il gradiente percentuale della traiettoria, per mantenere un sentiero di 3° si applica la regola pratica immediata `GS · 5` (ad esempio, con una GS di 120 kts occorre impostare un rateo di discesa di circa 600 ft/min).
*(Fonte: Compendio Generale AVES - Modulo 12)*

---

### Domanda 216 — Come si calcola la velocità variometrica richiesta in salita in funzione del gradiente percentuale (% climb gradient) e della Ground Speed?
> [!check] Risposta corretta
> **Rateo variometrico (ft/min) = GS · Gradiente %**

**Spiegazione:** Il gradiente di salita percentuale (*% climb gradient*) indica la quota guadagnata in piedi ogni 100 piedi di percorso orizzontale rispetto al suolo. Poiché una velocità di 1 nodo ($1\text{ NM/h}$) equivale a $6076\text{ ft}/60\text{ min} \approx 101.3\text{ ft/min}$ (approssimabile a $100\text{ ft/min}$), il fattore $100$ della conversione si semplifica con il denominatore della percentuale: pertanto, moltiplicando direttamente la **Ground Speed (in nodi)** per il **Gradiente %** si ottiene in modo rapido il rateo variometrico di salita richiesto in **ft/min**.
*(Fonte: Compendio Generale AVES - Modulo 12)*

---

### Domanda 217 — Come si stima l'angolo di correzione del vento (Wind Correction Angle - WCA) in navigazione stimata?
> [!check] Risposta corretta
> **WCA (gradi) ≈ (Componente Vento al Traverso · 60) / TAS**

**Spiegazione:** L'angolo di correzione del vento (**WCA**, *Wind Correction Angle*) è l'angolo di cui occorre orientare la prua del velivolo controvento rispetto alla rotta desiderata per compensare la deriva laterale. Applicando la **regola dell'1 su 60** (basata sull'approssimazione per piccoli angoli in cui $1\text{ radiante} \approx 57.3° \approx 60°$) al triangolo del vento, il WCA in gradi risulta proporzionale al rapporto tra la componente trasversale del vento (*Crosswind*) e la **TAS**, moltiplicato per **60**: `WCA ≈ (Crosswind · 60) / TAS`.
*(Fonte: Navigazione Aerea / Regola dell'1 su 60)*


---


## AEROTECNICA (61 domande)

### Domanda 218 — Qual è la composizione chimica dell'aria secca al livello del suolo?
> [!check] Risposta corretta
> **78% azoto molecolare (N2), 21% ossigeno (O2), 0,97% argon e gas rari, 0,03% anidride carbonica (CO2)**

**Spiegazione:** L'atmosfera terrestre al livello del suolo, considerata come **aria secca** (cioè priva di vapore acqueo), è una miscela omogenea di gas dominata da azoto molecolare ($\text{N}_2$, $78\%$) e ossigeno ($\text{O}_2$, $21\%$), che insieme costituiscono il $99\%$ del volume totale. Il restante $1\%$ è formato da argon e altri gas rari ($0{,}97\%$) e da anidride carbonica ($\text{CO}_2$, $0{,}03\%$), oltre a tracce variabili di ozono. Nell'aria umida reale si aggiunge inoltre una percentuale variabile di vapore acqueo, che riduce leggermente la densità dell'aria a parità di pressione e temperatura.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 2-3)*

### Domanda 219 — Quali sono le grandezze fisiche fondamentali (parametri di stato) che descrivono un gas?
> [!check] Risposta corretta
> **Pressione, Volume, Temperatura (e quantità/massa)**

**Spiegazione:** Secondo la teoria cinetico-molecolare e la termodinamica dei gas, lo stato fisico di equilibrio di un gas racchiuso in un volume è completamente individuato dai suoi **parametri di stato**: **Pressione** ($P$), **Volume** ($V$), **Temperatura** ($T$) e **quantità di materia** (espressa come massa $m$ o numero di moli $n$). Queste grandezze non sono indipendenti tra loro, ma risultano legate dall'equazione di stato dei gas perfetti. Conoscendo tre di questi parametri (per una data massa di gas, due tra $P, V, T$), lo stato termodinamico del fluido è univocamente determinato.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 5; Fisica_ITA.pptx, Slide 21)*

### Domanda 220 — Qual è l'equazione di stato dei gas perfetti usata in aerodinamica?
> [!check] Risposta corretta
> **PV = nRT oppure P = ρ R T (la densità è direttamente proporzionale alla pressione e inversamente proporzionale alla temperatura)**

**Spiegazione:** L'equazione di stato dei gas perfetti in forma molare è $PV = nRT$; dividendo per il volume $V$ ed esprimendo la quantità di gas tramite la densità $\rho = m/V$, si ottiene la forma aerodinamica $P = \rho R T$, dove per l'aria la costante specifica vale $R \approx 287\text{ J/(kg}\cdot\text{K)}$ e $T$ è espressa in Kelvin. Esplicitando la densità si ricava $\rho = \frac{P}{RT}$: la densità dell'aria è quindi **direttamente proporzionale** alla pressione e **inversamente proporzionale** alla temperatura assoluta. Questo legame spiega perché in giornate calde o ad alta quota (bassa pressione) l'aria sia meno densa, riducendo portanza e prestazioni del motore.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 9-10)*

### Domanda 221 — Cosa stabilisce il principio di conservazione della massa in un condotto a sezione variabile?
> [!check] Risposta corretta
> **La portata di massa è costante: sezione e velocità sono inversamente proporzionali (A1 · V1 = A2 · V2); se la sezione diminuisce, la velocità aumenta**

**Spiegazione:** In un flusso stazionario lungo un condotto, la massa di fluido che attraversa ogni sezione nell'unità di tempo (portata massica $\dot{m} = \rho A V$) rimane costante in base al principio di conservazione della massa. In regime subsonico incomprimibile ($\rho = \text{costante}$), l'equazione si riduce all'**equazione di continuità** $A_1 V_1 = A_2 V_2$: sezione $A$ e velocità $V$ sono **inversamente proporzionali**. Pertanto, quando il condotto si restringe (convergente), il fluido accelera; quando il condotto si allarga (divergente), il fluido rallenta.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 14-15)*

### Domanda 222 — Cosa afferma il Teorema di Bernoulli per una linea di corrente di un fluido incomprimibile?
> [!check] Risposta corretta
> **La somma di pressione statica e dinamica è costante (p + ½ ρ V² = costante); se la velocità aumenta, la pressione statica diminuisce**

**Spiegazione:** Il **Teorema di Bernoulli** esprime la conservazione dell'energia meccanica per un fluido ideale e incomprimibile in moto stazionario lungo una linea di corrente: trascurando le piccole variazioni di quota geodetica, la somma della **pressione statica** ($p$) e della **pressione dinamica** ($\frac{1}{2}\rho V^2$), detta pressione totale, si mantiene costante ($p + \frac{1}{2}\rho V^2 = \text{costante}$). Ne consegue che dove la velocità del flusso aumenta, la pressione statica diminuisce, e viceversa. Questo principio governa il funzionamento del tubo di Venturi, dell'anemometro e la generazione della depressione sul dorso del profilo alare.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 16-18)*

### Domanda 223 — Quali sono i valori standard ISA al livello medio del mare (MSL)?
> [!check] Risposta corretta
> **Pressione: 1.013,25 hPa; Temperatura: +15 °C (288,15 K); Densità: 1,225 kg/m³; Velocità del suono: 340,3 m/s (661 kts)**

**Spiegazione:** L'**Atmosfera Standard Internazionale (ISA)** definita dall'ICAO fornisce un modello di riferimento convenzionale per la taratura degli strumenti e il calcolo delle prestazioni aeronautiche, assumendo aria secca, assenza di vento e legge dei gas perfetti. Al livello medio del mare (MSL, quota $0$), i valori standard sono: pressione $P_0 = 1013{,}25\text{ hPa}$ ($29{,}92\text{ inHg}$), temperatura $T_0 = +15\text{ °C}$ ($288{,}15\text{ K}$), densità $\rho_0 = 1{,}225\text{ kg/m}^3$ e velocità del suono $a_0 = 340{,}3\text{ m/s}$ ($661\text{ kts}$). Le condizioni reali vengono poi confrontate con lo standard ISA tramite scostamenti di temperatura ($\Delta\text{ISA}$).
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 19-20, 23)*

### Domanda 224 — Qual è la corretta suddivisione in strati dell'atmosfera terrestre dal basso verso l'alto?
> [!check] Risposta corretta
> **Troposfera, stratosfera, mesosfera, termosfera, esosfera**

**Spiegazione:** In base all'andamento verticale della temperatura, l'atmosfera terrestre è suddivisa dal basso verso l'alto in cinque strati principali separati da zone di transizione ("-pause"). Partendo dal suolo si incontrano: la **Troposfera** (fino a circa $11\text{ km}$ alle medie latitudini, sede dei fenomeni meteorologici), la **Stratosfera** (fino a circa $50\text{ km}$, dove si trova lo strato di ozono), la **Mesosfera** ($50\text{–}85\text{ km}$), la **Termosfera** ($85\text{–}500\text{ km}$) e infine l'**Esosfera**, che sfuma gradualmente nello spazio interplanetario.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 24-27)*

### Domanda 225 — Quanto vale il gradiente termico verticale standard nella troposfera?
> [!check] Risposta corretta
> **La temperatura diminuisce di circa 2 °C ogni 1.000 piedi (o 6,5 °C ogni 1.000 metri) fino a 11 km**

**Spiegazione:** Nel modello ISA, all'interno della troposfera la temperatura decresce linearmente con l'aumentare della quota secondo un gradiente termico verticale standard di **$1{,}98\text{ °C}$ (circa $2\text{ °C}$) ogni $1.000\text{ piedi}$**, che corrisponde a **$6{,}5\text{ °C}$ ogni $1.000\text{ metri}$**. Questa diminuzione prosegue regolarmente fino alla tropopausa, posta in atmosfera standard a $11\text{ km}$ ($36.090\text{ ft}$), dove la temperatura raggiunge il valore di $-56{,}5\text{ °C}$ ($216{,}65\text{ K}$). Oltre tale quota, nella bassa stratosfera, la temperatura si mantiene costante fino a $20\text{ km}$.
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 20, 25)*

### Domanda 226 — Come variano pressione, densità e temperatura con l'aumentare della quota nella troposfera?
> [!check] Risposta corretta
> **Pressione e densità diminuiscono continuamente; la temperatura diminuisce regolarmente fino a 11 km, dove poi si stabilizza**

**Spiegazione:** Salendo di quota nell'atmosfera, il peso della colonna d'aria sovrastante si riduce progressivamente: di conseguenza sia la **pressione** sia la **densità** diminuiscono sempre in modo continuo (con andamento approssimativamente esponenziale). La **temperatura**, invece, diminuisce in modo lineare nella troposfera fino alla tropopausa ($11\text{ km}$ in ISA, dove raggiunge $-56{,}5\text{ °C}$), per poi stabilizzarsi su tale valore costante nella prima fascia della stratosfera (fino a $20\text{ km}$).
*(Fonte: Aerotecnica 1 - Introduzione e principi fondamentali, Slide 20, 25-26)*

### Domanda 227 — Su quale principio fisico si basano gli aerostati per sostenersi in volo?
> [!check] Risposta corretta
> **Principio di Archimede (sostentazione statica; sono più leggeri dell'aria)**

**Spiegazione:** Gli aeromobili si classificano in due grandi categorie in base al principio di sostentazione: gli **aerostati** (come mongolfiere e dirigibili) sono più leggeri dell'aria e si sostengono tramite **sostentazione statica**, regolata dal **Principio di Archimede**, secondo cui ricevono una spinta verso l'alto pari al peso del volume d'aria spostato. Le **aerodine** (velivoli, elicotteri, alianti), invece, sono più pesanti dell'aria e generano sostentazione dinamica grazie al moto relativo rispetto all'aria e alle leggi della dinamica dei fluidi.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 2-3)*

### Domanda 228 — Qual è l'effetto dell'azionamento delle superfici di controllo mobili?
> [!check] Risposta corretta
> **Varia la curvatura del profilo alare, modificando la portanza locale per controllare e manovrare il velivolo**

**Spiegazione:** Le superfici di controllo mobili (alettoni, equilibratore, timone di direzione, ipersostentatori) sono incernierate sul bordo d'uscita delle superfici portanti o stabilizzanti. La loro deflessione altera la **curvatura effettiva** del profilo alare e l'andamento del flusso attorno ad esso, modificando l'intensità e la direzione della forza aerodinamica (portanza) generata localmente. Questa variazione crea i momenti aerodinamici attorno al baricentro necessari per governare l'assetto, la traiettoria e l'equilibrio del velivolo nelle varie fasi del volo.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 14-15)*

### Domanda 229 — Quali sono i principali parametri geometrici dell'ala?
> [!check] Risposta corretta
> **Allungamento alare (AR = b² / S), Rapporto di rastremazione (λ = ct / cr), Apertura alare (b), Superficie alare (S)**

**Spiegazione:** La geometria in pianta di un'ala è caratterizzata da quattro parametri fondamentali: l'**apertura alare** $b$ (distanza da un'estremità all'altra), la **superficie alare** $S$ (area in pianta comprensiva della parte interna alla fusoliera), l'**allungamento alare** $AR = b^2 / S$ (indice di snellezza dell'ala: valori alti riducono la resistenza indotta) e il **rapporto di rastremazione** $\lambda = c_t / c_r$, definito come rapporto tra la corda all'estremità ($c_t$) e la corda alla radice ($c_r$). Questi parametri determinano direttamente le prestazioni aerodinamiche e strutturali dell'ala.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 23, 27-29)*

### Domanda 230 — Cos'è la linea media del profilo alare?
> [!check] Risposta corretta
> **La linea dei punti equidistanti tra dorso (estradosso) e ventre (intradosso)**

**Spiegazione:** Nella geometria di un profilo alare, la **linea media** (o *camber line*) è il luogo geometrico dei punti equidistanti dal dorso (estradosso) e dal ventre (intradosso), tracciata dal bordo d'attacco al bordo d'uscita. Essa descrive la curvatura intrinseca del profilo: nei profili simmetrici la linea media è rettilinea e coincide con la corda alare, mentre nei profili asimmetrici (portanti) la linea media risulta arcuata verso l'alto rispetto alla corda.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 25)*

### Domanda 231 — Cos'è la freccia del profilo alare (curvatura)?
> [!check] Risposta corretta
> **La distanza massima tra la linea media e la corda del profilo alare**

**Spiegazione:** La **freccia** (o curvatura) di un profilo alare rappresenta la distanza massima, misurata perpendicolarmente alla corda, tra la linea media del profilo e la corda stessa (spesso espressa in percentuale della corda). Un profilo simmetrico ha freccia nulla, mentre un profilo curvo o asimmetrico possiede una freccia positiva che gli consente di generare portanza anche ad angolo di incidenza nullo e di incrementare il coefficiente di portanza massimo rispetto a un profilo simmetrico.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 25-26)*

### Domanda 232 — Cos'è il carico alare e qual è la sua formula?
> [!check] Risposta corretta
> **Il rapporto tra il peso del velivolo (o peso massimo al decollo) e la superficie alare (W / S)**

**Spiegazione:** Il **carico alare** è definito dal rapporto tra il peso del velivolo $W$ (tipicamente riferito al peso massimo al decollo) e la superficie alare $S$: $\text{Carico alare} = W / S$, misurato in $\text{kg/m}^2$ o $\text{N/m}^2$. Esso indica quanto peso deve sostenere ogni metro quadrato di ala in volo rettilineo orizzontale. Un carico alare elevato comporta velocità di stallo, di decollo e di atterraggio più alte, ma offre migliore penetrazione alle alte velocità e minore sensibilità alle raffiche; un carico alare basso favorisce invece manovrabilità e basse velocità minime.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 30)*

### Domanda 233 — Cos'è l'angolo di freccia alare e rispetto a quale linea si misura?
> [!check] Risposta corretta
> **L'angolo che il bordo d'attacco (o la linea che congiunge i punti a ¼ della corda alare) forma con l'asse di beccheggio**

**Spiegazione:** Osservando l'ala in pianta dall'alto, l'**angolo di freccia alare** ($\Lambda$) è l'angolo formato tra il bordo d'attacco (oppure la linea che unisce i punti a $1/4$ della corda lungo l'apertura) e l'asse trasversale del velivolo (asse di beccheggio). La freccia positiva (ali inclinate all'indietro) viene adottata nei velivoli veloci per ritardare gli effetti di compressibilità e la formazione delle onde d'urto alle alte velocità subsoniche e transoniche, riducendo la componente di velocità perpendicolare al bordo d'attacco; contribuisce inoltre alla stabilità laterale.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 34-35)*

### Domanda 234 — Cos'è l'angolo diedro e che funzione ha principalmente?
> [!check] Risposta corretta
> **L'angolo che nella vista frontale l'ala forma con l'orizzontale; se positivo conferisce stabilità laterale (al rollio)**

**Spiegazione:** Nella vista frontale del velivolo, l'**angolo diedro** è l'inclinazione del piano alare rispetto al piano orizzontale di riferimento. Quando il diedro è **positivo** (estremità alari rivolte verso l'alto), conferisce **stabilità laterale (al rollio)**: se il velivolo si inclina lateralmente ed entra in scivolata d'ala verso il lato abbassato, la componente laterale del vento relativo investe l'ala bassa con un angolo d'attacco effettivo maggiore rispetto all'ala alta, generando una portanza differenziale che produce un momento raddrizzante.
*(Fonte: Aerotecnica 2 - Classificazione degli aeromobili, Slide 36-37; Aerotecnica 4, Slide 28)*

### Domanda 235 — Cos'è la linea di corrente o linea di flusso?
> [!check] Risposta corretta
> **La curva la cui tangente in ogni punto coincide con il vettore velocità del fluido (traiettoria delle particelle in moto stazionario)**

**Spiegazione:** In fluidodinamica, una **linea di corrente** è definita in un determinato istante come la curva la cui tangente in ogni punto ha la stessa direzione e verso del vettore velocità locale del fluido. Quando il moto del fluido è **stazionario** (cioè le caratteristiche del flusso in ogni punto non variano nel tempo), le linee di corrente coincidono con le traiettorie effettivamente percorse dalle singole particelle fluide (linee di flusso). Un insieme chiuso di linee di corrente forma un tubo di flusso, attraverso le cui pareti laterali non vi è passaggio di massa.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 8)*

### Domanda 236 — Cos'è l'angolo di incidenza (o angolo d'attacco, α)?
> [!check] Risposta corretta
> **L'angolo formato tra la corda del profilo alare e la direzione del vento relativo**

**Spiegazione:** L'**angolo di incidenza** o **angolo d'attacco** ($\alpha$) è l'angolo compreso tra la corda del profilo alare e la direzione del **vento relativo** (che è parallelo e opposto alla traiettoria di volo del velivolo). È il parametro aerodinamico fondamentale controllato dal pilota tramite l'equilibratore: al crescere di $\alpha$ aumenta il coefficiente di portanza $C_L$ fino al raggiungimento dell'angolo critico, oltre il quale si verifica lo stallo.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 9-10)*

### Domanda 237 — Cos'è l'angolo di rampa (γ)?
> [!check] Risposta corretta
> **L'angolo compreso tra la traiettoria di volo del velivolo e il piano dell'orizzonte**

**Spiegazione:** L'**angolo di rampa** ($\gamma$, o angolo di traiettoria) è l'angolo compreso tra la direzione della traiettoria reale di volo del velivolo (ovvero il vettore velocità) e il piano orizzontale dell'orizzonte. Esso è positivo in salita, nullo in volo orizzontale e negativo in discesa o planata. L'angolo di assetto (o beccheggio, $\theta$) equivale invece alla somma dell'angolo di rampa $\gamma$, dell'angolo di incidenza $\alpha$ e dell'eventuale angolo di calettamento $i$.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 9-10; Aerotecnica 5, Slide 13)*

### Domanda 238 — Cos'è l'angolo di calettamento (i)?
> [!check] Risposta corretta
> **L'angolo fisso compreso tra la corda alare alla radice e l'asse longitudinale della fusoliera**

**Spiegazione:** L'**angolo di calettamento** ($i$) è un angolo geometrico costruttivo e **fisso**, definito in sede di progetto come l'inclinazione tra la corda della sezione alare alla radice e l'asse longitudinale della fusoliera. Viene scelto in modo che, alla velocità e quota di crociera di progetto, la fusoliera risulti allineata orizzontalmente al flusso d'aria (minimizzando la resistenza parassita) mentre l'ala lavora all'angolo di incidenza ottimale.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 9-10)*

### Domanda 239 — Cos'è il Numero di Reynolds (Re) e a cosa serve principalmente?
> [!check] Risposta corretta
> **Rapporto tra forze d'inerzia e forze viscose; serve a determinare se il flusso nello strato limite è laminare o turbolento**

**Spiegazione:** Il **Numero di Reynolds** ($Re = \frac{\rho V l}{\mu}$, dove $\rho$ è la densità, $V$ la velocità, $l$ una lunghezza caratteristica come la corda alare e $\mu$ la viscosità dinamica) è un parametro adimensionale che esprime il rapporto tra le **forze d'inerzia** e le **forze viscose** agenti nel fluido. In aerodinamica viene utilizzato principalmente per prevedere il regime di moto nello **strato limite**: a bassi valori di $Re$ prevalgono gli effetti viscosi e il flusso tende a rimanere **laminare**, mentre oltre un valore critico di $Re$ prevale l'inerzia e il flusso transita al regime **turbolento**.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 44-45)*

### Domanda 240 — Come si sposta il Centro di Pressione (CP) di un profilo curvo all'aumentare dell'angolo di incidenza?
> [!check] Risposta corretta
> **All'aumentare dell'angolo di incidenza si sposta in avanti verso il bordo d'attacco; allo stallo arretra bruscamente**

**Spiegazione:** Il **Centro di Pressione (CP)** è il punto lungo la corda alare in cui è applicata la risultante delle forze aerodinamiche. Nei profili asimmetrici (curvi), a piccoli angoli d'attacco il $CP$ è situato attorno al $40\text{–}50\%$ della corda; all'aumentare dell'angolo di incidenza $\alpha$, il picco di depressione sul dorso si sposta verso il bordo d'attacco e il $CP$ **avanza** fino a circa il $25\%$ della corda (generando una tendenza cabrante instabile per il profilo isolato). Superato l'angolo critico di stallo, il distacco della vena fluida fa **arretrare bruscamente** il $CP$, producendo un momento picchiante.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 26-27)*

### Domanda 241 — Qual è la formula della portanza (L) e dov'è racchiuso l'angolo di incidenza?
> [!check] Risposta corretta
> **L = ½ ρ V² S CL; l'angolo di incidenza è racchiuso all'interno del coefficiente di portanza CL**

**Spiegazione:** La formula fondamentale della **portanza** ($L$, Lift) è $L = \frac{1}{2}\rho V^2 S C_L$, dove $\frac{1}{2}\rho V^2$ rappresenta la pressione dinamica del flusso, $S$ è la superficie alare e $C_L$ è il coefficiente di portanza adimensionale. La portanza cresce quindi linearmente con la densità dell'aria, con la superficie alare e con il quadrato della velocità. L'effetto dell'angolo di incidenza $\alpha$ e della forma del profilo è interamente racchiuso all'interno di $C_L$, che aumenta proporzionalmente ad $\alpha$ nel tratto lineare fino al valore massimo $C_{L,\max}$ all'angolo di stallo.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 24-25)*

### Domanda 242 — Con quale unità di misura si esprime l'angolo di incidenza e in che modo si differenzia dal coefficiente CL?
> [!check] Risposta corretta
> **L'angolo di incidenza si esprime in gradi (°) o radianti; il coefficiente CL è un numero puro (adimensionale)**

**Spiegazione:** L'**angolo di incidenza** $\alpha$ è una grandezza geometrica angolare e si misura pertanto in **gradi ($^\circ$)** o **radianti ($\text{rad}$)**. Il **coefficiente di portanza $C_L$**, invece, è un **numero puro (adimensionale)** determinato sperimentalmente in galleria del vento per ogni profilo o velivolo al variare di $\alpha$: esso rappresenta il rapporto tra la portanza generata e il prodotto della pressione dinamica per la superficie alare ($C_L = \frac{L}{\frac{1}{2}\rho V^2 S}$), risultando quindi privo di unità di misura.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 24)*

### Domanda 243 — Come nascono i vortici di estremità alare e cosa provocano?
> [!check] Risposta corretta
> **Dal travaso d'aria dal ventre (alta pressione) al dorso (depressione) attorno alle estremità dell'ala; provocano il downwash e la resistenza indotta**

**Spiegazione:** In un'ala di apertura finita che genera portanza, sul ventre (intradosso) si stabilisce una zona di pressione maggiore rispetto al dorso (estradosso). In prossimità delle estremità alari, questo gradiente di pressione spinge l'aria a **travasare dal ventre verso il dorso** aggirando il margine dell'ala; combinandosi con il flusso principale diretto all'indietro, il moto genera due **vortici di estremità** controrotanti (antiorario sull'ala destra e orario sulla sinistra, visti da dietro). Tali vortici deviano il flusso verso il basso (**downwash**) e sono la causa fisica diretta della **resistenza indotta**.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 30-34, 59)*

### Domanda 244 — Cos'è il fenomeno del downwash (deflessione verso il basso)?
> [!check] Risposta corretta
> **La deflessione del flusso d'aria verso il basso dietro l'ala; riduce l'angolo d'attacco effettivo e inclina la portanza all'indietro**

**Spiegazione:** Il **downwash** è la deviazione verso il basso impressa al flusso d'aria dall'ala e dai vortici di estremità nella scia dietro al profilo. Poiché la portanza si sviluppa sempre perpendicolarmente al vento relativo locale effettivo, la presenza di una componente di velocità verso il basso riduce l'angolo d'attacco effettivo rispetto a quello geometrico e **inclina all'indietro** il vettore portanza. La proiezione all'indietro di questa portanza inclinata lungo la direzione del moto costituisce la **resistenza indotta**.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 35, 40, 60-61)*

### Domanda 245 — Quali sono le caratteristiche aerodinamiche dell'ala a pianta ellittica?
> [!check] Risposta corretta
> **Minima resistenza indotta, ma stallo simultaneo su tutta l'apertura alare**

**Spiegazione:** L'**ala a pianta ellittica** produce una distribuzione ellittica della portanza lungo l'apertura e un *downwash* uniforme su tutta l'ala, condizione teorica ideale che garantisce la **minima resistenza indotta** possibile a parità di apertura alare. Tuttavia, lavorando tutte le sezioni alari allo stesso angolo di incidenza effettivo, quando si raggiunge l'angolo critico lo **stallo avviene simultaneamente** su tutta l'apertura alare (senza preavviso progressivo dalla radice alle estremità), oltre a comportare una maggiore complessità costruttiva.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 36)*

### Domanda 246 — A cosa servono i dispositivi di estremità alare denominati winglet?
> [!check] Risposta corretta
> **A ridurre la resistenza indotta, attenuando l'intensità dei vortici di estremità d'ala**

**Spiegazione:** Le **winglet** sono appendici aerodinamiche pressoché verticali installate alle estremità alari con lo scopo di ostacolare il travaso d'aria tra ventre e dorso dell'ala. Riducendo l'intensità dei vortici di estremità e il conseguente *downwash*, esse abbattono la **resistenza indotta** (con un beneficio aerodinamico analogo a quello di un aumento dell'allungamento alare, ma con minor incremento di momento flettente alla radice rispetto a un semplice allungamento fisico dell'ala), migliorando efficienza e autonomia in crociera e in salita.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 65)*

### Domanda 247 — Quali sono le caratteristiche del flusso nello strato limite laminare e turbolento?
> [!check] Risposta corretta
> **Laminare: sottile, a basso attrito superficiale, ma stacca facilmente; Turbolento: più spesso, maggiore attrito, ma ritarda il distacco del flusso**

**Spiegazione:** Lo **strato limite** è il sottile strato d'aria adiacente alla superficie del corpo in cui la velocità passa da zero (a contatto con la parete) al valore del flusso indisturbato. Nel regime **laminare** i filetti fluidi scorrono in lamine ordinate parallele: lo strato è sottile e produce un **basso attrito superficiale**, ma possiede poca energia cinetica vicino alla parete e si separa facilmente in presenza di gradienti di pressione avversi. Nel regime **turbolento** il flusso presenta vorticosità e rimescolamento: lo strato limite è più spesso e genera **maggiore attrito**, ma il continuo scambio di energia dagli strati esterni mantiene energizzata l'aria vicino alla superficie, **ritardando il distacco** (stallo).
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 41-43, 48-49)*

### Domanda 248 — Quali sono le due componenti principali della resistenza aerodinamica totale?
> [!check] Risposta corretta
> **Resistenza di profilo/parassita (attrito, forma, interferenza) che aumenta con V², e Resistenza indotta (dalla portanza) che diminuisce con V²**

**Spiegazione:** La **resistenza aerodinamica totale** ($D$) di un velivolo in volo subsonico si compone di due termini principali con andamento opposto rispetto alla velocità: (1) la **resistenza di profilo/parassita** (dovuta ad attrito superficiale, resistenza di forma/scia e interferenza tra i componenti), che aumenta proporzionalmente a $V^2$; (2) la **resistenza indotta**, legata alla generazione della portanza e ai vortici di estremità, che è massima alle basse velocità (dove servono alti angoli d'attacco) e diminuisce proporzionalmente a $1/V^2$. La somma delle due curve forma una curva a "U" il cui minimo ($D_{\min}$, punto di massima efficienza) si verifica quando le due componenti si eguagliano.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 46-47, 61)*

### Domanda 249 — Qual è la formula della resistenza aerodinamica (D)?
> [!check] Risposta corretta
> **D = ½ ρ V² S CD**

**Spiegazione:** La **resistenza aerodinamica** ($D$, Drag) è la componente della forza aerodinamica totale parallela e opposta alla direzione del moto (cioè parallela al vento relativo). Si calcola con la formula $D = \frac{1}{2}\rho V^2 S C_D$, prodotto tra la pressione dinamica ($\frac{1}{2}\rho V^2$), la superficie alare di riferimento ($S$) e il coefficiente di resistenza adimensionale ($C_D$). Il coefficiente $C_D$ raccoglie sia il contributo parassita ($C_{D0}$) sia quello indotto ($C_{Di} = \frac{C_L^2}{\pi \cdot AR \cdot e}$).
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 55-57)*

### Domanda 250 — A cosa è dovuto il fenomeno dello stallo aerodinamico?
> [!check] Risposta corretta
> **Al distacco dei filetti fluidi dal dorso dell'ala per via del gradiente di pressione avverso quando si supera l'angolo di incidenza critico**

**Spiegazione:** Sul dorso di un'ala, dopo il picco di depressione verso il bordo d'attacco, la pressione statica deve risalire verso il bordo d'uscita (gradiente di pressione avverso), frenando le particelle d'aria nello strato limite. Quando si supera l'**angolo di incidenza critico** (tipicamente intorno a $15^\circ$ per profili convenzionali), l'aria nello strato limite perde la sua energia cinetica, si arresta e inverte il moto provocando il **distacco dei filetti fluidi** dal dorso: la portanza crolla bruscamente e la resistenza cresce rapidamente. Poiché lo stallo dipende esclusivamente dal superamento dell'angolo critico, un velivolo può stallare a qualsiasi velocità (ad esempio ad alta velocità in manovre ad alto fattore di carico).
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 66-68)*

### Domanda 251 — Come è definita l'efficienza aerodinamica (E o rapporto L/D)?
> [!check] Risposta corretta
> **Il rapporto tra portanza e resistenza (E = L / D = CL / CD); in volo librato coincide con il rapporto di planata**

**Spiegazione:** L'**efficienza aerodinamica** ($E$) esprime la bontà aerodinamica di un profilo o di un intero velivolo, misurando quanta portanza viene prodotta per ogni unità di resistenza: $E = \frac{L}{D} = \frac{C_L}{C_D}$. In condizioni di volo librato (planata a motore spento in aria calma), l'efficienza coincide geometricamente con il **rapporto di planata** (distanza orizzontale percorsa diviso quota persa): volando all'angolo d'attacco di massima efficienza ($E_{\max}$), il velivolo raggiunge la massima distanza planabile indipendentemente dal proprio peso.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 69-70, 73)*

### Domanda 252 — Cos'è la curva polare dell'ala o del velivolo?
> [!check] Risposta corretta
> **Il diagramma cartesiano che traccia il coefficiente di portanza CL in funzione del coefficiente di resistenza CD ai vari angoli di incidenza**

**Spiegazione:** La **curva polare** è il diagramma cartesiano che rappresenta il coefficiente di portanza $C_L$ (sull'asse verticale) in funzione del coefficiente di resistenza $C_D$ (sull'asse orizzontale) al variare dell'angolo di incidenza $\alpha$ (riportato come parametro lungo la curva). Questo grafico sintetizza le caratteristiche aerodinamiche complete dell'ala o del velivolo: permette di individuare immediatamente i punti di $C_{D,\min}$, $C_{L,\max}$ (stallo) e, tracciando la retta dall'origine tangente alla curva, il punto di **massima efficienza** $(C_L/C_D)_{\max}$.
*(Fonte: Aerotecnica 3 - Il fenomeno del volo, Slide 70-72)*

### Domanda 253 — Quali sono gli organi primari di controllo del velivolo e quali movimenti controllano?
> [!check] Risposta corretta
> **Alettoni -> Rollio (asse longitudinale); Equilibratore -> Beccheggio (asse trasversale); Timone di direzione -> Imbardata (asse verticale)**

**Spiegazione:** Il velivolo ruota nello spazio attorno a tre assi ortogonali passanti per il baricentro, governati dai tre **comandi primari di volo**: gli **alettoni** (poste alle estremità posteriori delle semiali, a movimento differenziale) controllano il **rollio** attorno all'asse longitudinale; l'**equilibratore** (o piano orizzontale interamente mobile, stabilatore) controlla il **beccheggio** attorno all'asse trasversale; il **timone di direzione** (incernierato sulla deriva verticale) controlla l'**imbardata** attorno all'asse verticale.
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 2-6; Aerotecnica 2, Slide 13, 15, 17)*

### Domanda 254 — Quali superfici fanno parte degli organi secondari di controllo del volo?
> [!check] Risposta corretta
> **Ipersostentatori (flap e slat), Spoiler (diruttori/aerofreni) e Alette compensatrici (trim tabs)**

**Spiegazione:** Oltre ai tre comandi primari, gli **organi secondari di controllo** assistono il pilota nel modificare le caratteristiche aerodinamiche del velivolo o nel ridurre gli sforzi alla barra e alla pedaliera. Essi comprendono: gli **ipersostentatori** (flap al bordo d'uscita e slat al bordo d'attacco, per aumentare la portanza alle basse velocità), gli **spoiler** (diruttori e aerofreni sul dorso alare, per ridurre portanza o frenare) e le **alette compensatrici** (*trim tabs*, *balance/antibalance tabs*, per mantenere l'assetto desiderato senza sforzo continuo sui comandi).
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 8-14)*

### Domanda 255 — Qual è l'effetto dell'estensione dei soli Flap al bordo d'uscita dell'ala?
> [!check] Risposta corretta
> **Aumentano il CL,max (riducendo la velocità di stallo), ma riducono l'angolo critico di stallo e aumentano la resistenza**

**Spiegazione:** L'estensione dei **flap** al bordo d'uscita aumenta la curvatura effettiva (e in alcuni tipi anche la corda/superficie) del profilo alare, incrementando il coefficiente di portanza $C_L$ a parità di angolo d'attacco e innalzando il $C_{L,\max}$. Ciò permette al velivolo di volare a una **velocità di stallo inferiore**, riducendo le distanze di decollo e atterraggio; tuttavia, la maggiore curvatura accentua il gradiente di pressione avverso sul dorso, causando una **riduzione dell'angolo critico di stallo** e un sensibile **aumento della resistenza** aerodinamica.
*(Fonte: Aerotecnica 2, Slide 18; Aerotecnica 4 - Manovrabilità e stabilità, Slide 8-11)*

### Domanda 256 — Qual è l'effetto combinato dell'estensione simultanea di Flap e Slat?
> [!check] Risposta corretta
> **Aumentano al massimo il CL,max e contemporaneamente ritardano lo stallo ad angoli di incidenza molto più elevati (20°-25°)**

**Spiegazione:** L'impiego combinato di **flap** (al bordo d'uscita) e **slat** (al bordo d'attacco) ottimizza le prestazioni alle basse velocità. Mentre i flap incrementano la curvatura e il $C_{L,\max}$, gli slat si estendono in avanti aprendo una fessura che incanala aria ad alta pressione dal ventre al dorso dell'ala: questo getto rienergizza lo strato limite rallentando il distacco dei filetti fluidi e **ritardando lo stallo fino ad angoli di incidenza di $20^\circ\text{–}25^\circ$**, consentendo così di raggiungere valori di $C_{L,\max}$ molto superiori rispetto ai soli flap.
*(Fonte: Aerotecnica 2, Slide 18-19; Aerotecnica 4 - Manovrabilità e stabilità, Slide 8-11)*

### Domanda 257 — Cosa sono gli spoiler e a quali funzioni possono assolvere nelle diverse fasi del volo?
> [!check] Risposta corretta
> **Piastre sul dorso alare che distruggono la portanza: fungono da roll spoiler, aerofreni in volo (speedbrakes) e diruttori a terra (ground spoiler)**

**Spiegazione:** Gli **spoiler** sono pannelli incernierati sul dorso dell'ala che, sollevandosi nel flusso, disturbano lo strato limite riducendo localmente la portanza e aumentando la resistenza. Possono svolgere tre funzioni distinte: azionati asimmetricamente su una sola semiala assistono gli alettoni nella virata (**roll spoiler**, riducendo l'imbardata inversa); azionati simmetricamente in volo agiscono come **aerofreni (speedbrakes)** per incrementare il rateo di discesa senza aumentare la velocità; estratti completamente al contatto col suolo (**ground spoiler / lift dumper**) annullano la portanza residua per caricare il peso sulle ruote e massimizzare l'efficacia dei freni.
*(Fonte: Aerotecnica 2, Slide 17, 19; Aerotecnica 4 - Manovrabilità e stabilità, Slide 12-13)*

### Domanda 258 — Da quale organo aerodinamico è garantita principalmente la stabilità longitudinale del velivolo?
> [!check] Risposta corretta
> **Dall'impennaggio orizzontale di coda (genera un momento riequilibrante attorno all'asse trasversale)**

**Spiegazione:** Poiché un profilo alare portante isolato è intrinsecamente instabile a cabrare (il suo centro di pressione avanza al crescere dell'incidenza), la **stabilità longitudinale statica** attorno all'asse trasversale (beccheggio) è assicurata principalmente dall'**impennaggio orizzontale di coda**. Posto a distanza dietro il baricentro, esso genera un momento aerodinamico riequilibrante opposto a qualsiasi variazione accidentale dell'angolo d'attacco, riportando spontaneamente il velivolo all'assetto di equilibrio. Contribuisce inoltre alla stabilità longitudinale una corretta posizione del baricentro davanti al punto neutro del velivolo.
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 19-21)*

### Domanda 259 — Da quali elementi è assicurata principalmente la stabilità laterale (al rollio) del velivolo?
> [!check] Risposta corretta
> **Dall'ala (angolo diedro positivo, configurazione ad ala alta, freccia) e dall'impennaggio verticale di coda**

**Spiegazione:** La **stabilità laterale (al rollio)** è la tendenza del velivolo a generare un momento raddrizzante quando viene inclinato lateralmente da una perturbazione ed entra in scivolata d'ala. Essa è assicurata principalmente dalle caratteristiche geometriche dell'**ala** — in particolare dall'**angolo diedro positivo**, dalla configurazione ad **ala alta** (effetto pendolo/flusso sulla fusoliera) e dall'**angolo di freccia positivo** (che aumenta la portanza sull'ala avanzata) — con il contributo dell'**impennaggio verticale di coda**, il cui centro aerodinamico posto sopra l'asse longitudinale genera anch'esso una coppia raddrizzante durante la scivolata.
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 25-28)*

### Domanda 260 — Quale organo interviene per raddrizzare il velivolo se una raffica di vento fa alzare improvvisamente il muso (raffica cabrante)?
> [!check] Risposta corretta
> **L'impennaggio orizzontale di coda (l'aumento locale d'incidenza crea portanza verso l'alto in coda, generando momento picchiante)**

**Spiegazione:** In seguito a una raffica cabrante che alza il muso del velivolo (aumentando l'angolo di incidenza $\alpha$), la coda si abbassa e l'**impennaggio orizzontale** viene investito dal vento relativo con un angolo d'attacco maggiore. Ciò genera una forza di portanza verso l'alto (o una riduzione della deportanza) sullo stabilizzatore: applicata dietro il baricentro, questa forza produce un **momento picchiante** che riporta il muso verso la posizione di equilibrio iniziale.
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 20-21)*

### Domanda 261 — Quali organi aerodinamici intervengono per riequilibrare il velivolo in caso di raffica laterale di imbardata?
> [!check] Risposta corretta
> **L'impennaggio verticale di coda (deriva) per effetto banderuola e la resistenza differenziale dell'ala avanzata**

**Spiegazione:** La stabilità direzionale (attorno all'asse verticale) entra in gioco quando una raffica laterale crea un angolo di deriva $\beta$ (il muso non è più allineato al vento relativo). L'**impennaggio verticale di coda (deriva)**, comportandosi come una banderuola dietro il baricentro, sviluppa una forza aerodinamica laterale (devianza) che ruota la coda e riallinea il muso al flusso d'aria; concorre al riequilibrio anche la **resistenza differenziale dell'ala avanzata** (soprattutto nelle ali a freccia), che frena il lato avanzato generando un momento d'imbardata stabilizzante.
*(Fonte: Aerotecnica 4 - Manovrabilità e stabilità, Slide 22-24)*

### Domanda 262 — Quali sono le equazioni di equilibrio nel volo orizzontale rettilineo uniforme (VORU)?
> [!check] Risposta corretta
> **Portanza uguale al Peso (L = W) e Spinta uguale alla Resistenza (T = D)**

**Spiegazione:** Nel **volo orizzontale rettilineo uniforme (VORU)** la velocità è costante in modulo e direzione, quindi l'accelerazione è nulla e la risultante delle forze applicate al velivolo è pari a zero su entrambi gli assi del piano verticale. Lungo l'asse verticale la **Portanza** eguaglia esattamente il **Peso** ($L = W$), mentre lungo l'asse longitudinale della traiettoria la **Spinta** (o Trazione) eguaglia esattamente la **Resistenza** ($T = D$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 2)*

### Domanda 263 — Cos'è la potenza necessaria (Pn) e come varia la sua curva con l'aumentare della quota?
> [!check] Risposta corretta
> **Pn = D · V; all'aumentare della quota la curva trasla a velocità più alte e la potenza minima richiesta aumenta**

**Spiegazione:** La **potenza necessaria** ($P_n$) al volo orizzontale è la potenza che occorre applicare per vincere la resistenza aerodinamica alla velocità vera $V$: $P_n = T_n \cdot V = D \cdot V$. Poiché all'aumentare della quota la densità dell'aria $\rho$ diminuisce, per mantenere $L = W$ a parità di $C_L$ il velivolo deve volare a una velocità vera $V$ più elevata ($V \propto 1/\sqrt{\rho}$). Di conseguenza, salendo di quota l'intera curva di $P_n$ **trasla verso destra (velocità maggiori) e verso l'alto**, facendo aumentare anche la potenza minima richiesta ($P_{n,\min} \propto 1/\sqrt{\rho}$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 5-6)*

### Domanda 264 — Cos'è la potenza disponibile (Pd) e da cosa dipende la salita di un velivolo?
> [!check] Risposta corretta
> **La potenza fornita dal motore (Pd); la salita dipende dall'eccesso (esubero) di potenza (Pd - Pn > 0)**

**Spiegazione:** La **potenza disponibile** ($P_d$) è la potenza utile effettivamente erogata dal gruppo motopropulsore (motore ed elica, o getto) nelle diverse condizioni di velocità e quota, e dipende principalmente dalle caratteristiche del propulsore e dalla densità dell'aria. Un velivolo può effettuare una salita stazionaria solo se dispone di un **eccesso (esubero) di potenza**, cioè quando la potenza disponibile supera quella necessaria al volo orizzontale ($P_d - P_n > 0$): maggiore è tale esubero, maggiore è il rateo di salita ottenibile.
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 7, 13)*

### Domanda 265 — Cos'è la quota di tangenza teorica (Absolute Ceiling)?
> [!check] Risposta corretta
> **L'altitudine alla quale la velocità verticale di salita è uguale a zero (RC = 0 ft/min, ovvero Pd = Pn)**

**Spiegazione:** Salendo di quota, la potenza disponibile $P_d$ diminuisce (per il calo della densità dell'aria) mentre la potenza necessaria $P_n$ aumenta, riducendo progressivamente l'eccesso di potenza. La **quota di tangenza teorica (*Absolute Ceiling*)** è l'altitudine limite alla quale le due curve diventano tangenti ($P_d = P_n$): l'eccesso di potenza si annulla e il rateo di salita scende a **$0\text{ ft/min}$**. Poiché avvicinarsi a questo limite richiede un tempo teoricamente infinito, nell'impiego operativo si fa riferimento alla tangenza pratica (*Service Ceiling*), dove permane un rateo di salita residuo.
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 14)*

### Domanda 266 — Cos'è la quota di tangenza pratica (Service Ceiling) per velivoli ad elica/pistoni?
> [!check] Risposta corretta
> **L'altitudine alla quale la velocità di salita residua scende a 100 ft/min (circa 0,5 m/s)**

**Spiegazione:** Poiché raggiungere la tangenza teorica ($RC = 0\text{ ft/min}$) richiederebbe un tempo infinito, per definire il limite operativo utilizzabile di un aeromobile si introduce la **quota di tangenza pratica (*Service Ceiling*)**. Per i velivoli ad elica e motori a pistoni, essa è definita convenzionalmente come l'altitudine alla quale la velocità verticale di salita residua (rateo di salita massimo disponibile) scende a **$100\text{ ft/min}$** (equivalenti a circa **$0{,}5\text{ m/s}$**). Nei velivoli a getto, per le maggiori velocità di salita operative, tale soglia convenzionale è invece fissata a $500\text{ ft/min}$.
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 14)*

### Domanda 267 — Da cosa dipende la velocità verticale di salita (Vz) e da cosa dipende l'angolo di rampa (γ)?
> [!check] Risposta corretta
> **Vz dipende dall'eccesso di potenza ((Pd - Pn)/W); l'angolo di rampa sin(γ) dipende dall'eccesso di spinta ((Td - Tn)/W)**

**Spiegazione:** Proiettando le forze lungo la traiettoria in salita rettilinea uniforme si ottiene $T_d - D = W \sin\gamma$, da cui $\sin\gamma = \frac{T_d - T_n}{W}$: il massimo **angolo di rampa $\gamma$** (salita più ripida, $V_x$) si ottiene quindi in corrispondenza del massimo **eccesso di spinta** ($T_d - T_n$). Moltiplicando entrambi i membri per la velocità $V$, si ricava la **velocità verticale di salita** $V_z = V\sin\gamma = \frac{P_d - P_n}{W}$: il massimo rateo di salita ($V_y$) dipende invece dal massimo **eccesso di potenza** ($P_d - P_n$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 13)*

### Domanda 268 — Cos'è l'autonomia oraria (di durata) di un velivolo?
> [!check] Risposta corretta
> **Il tempo massimo di permanenza in volo con un dato combustibile; si ottiene rendendo minimo il consumo orario**

**Spiegazione:** L'**autonomia oraria** (o di durata, *endurance*) indica il tempo massimo per cui un velivolo può rimanere in volo con una determinata quantità di combustibile a bordo. Per massimizzarla occorre volare nella condizione aerodinamica e motoristica che rende **minimo il consumo orario** di carburante (chilogrammi o litri per ora), condizione tipicamente utilizzata durante le attese in circuito (*holding*). Essa si distingue dall'autonomia chilometrica (*range*), che massimizza invece la distanza percorsa riducendo al minimo il consumo per unità di distanza.
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 15)*

### Domanda 269 — In quale condizione aerodinamica si ottiene la massima autonomia oraria per un velivolo ad elica?
> [!check] Risposta corretta
> **In condizioni di minima potenza richiesta (Pn,min, massimo rapporto CL^(3/2) / CD)**

**Spiegazione:** Nei velivoli propulsi da motore a pistoni ed elica, il consumo orario di carburante è direttamente proporzionale alla potenza erogata dal motore. Di conseguenza, per rendere minimo il consumo orario e ottenere la **massima autonomia oraria (*endurance*)**, occorre volare alla velocità di **minima potenza necessaria** ($P_{n,\min}$), che corrisponde all'assetto aerodinamico in cui è massimo il rapporto $C_L^{3/2} / C_D$. Questa velocità è inferiore rispetto a quella di massima efficienza ($C_L/C_D$, usata invece per la massima autonomia chilometrica dell'elica).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 16-18)*

### Domanda 270 — In quale condizione aerodinamica si ottiene la massima autonomia oraria per un velivolo a getto (jet)?
> [!check] Risposta corretta
> **In condizioni di minima spinta richiesta / minima resistenza (massima efficienza aerodinamica CL / CD)**

**Spiegazione:** Nei motori a getto (turbogetto/turbofan), il consumo orario di carburante è approssimativamente proporzionale alla **spinta** erogata ($T$) anziché alla potenza. Pertanto, per minimizzare il consumo orario e conseguire la **massima autonomia oraria (*endurance*)**, un velivolo a getto deve volare alla velocità di **minima spinta richiesta**, che in volo orizzontale coincide con la **minima resistenza aerodinamica** ($D_{\min}$), ovvero in condizioni di **massima efficienza aerodinamica** ($C_L / C_D$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 19-21)*

### Domanda 271 — Cos'è il fattore di carico (n) e quanto vale in virata corretta livellata con angolo di inclinazione φ?
> [!check] Risposta corretta
> **Il rapporto tra portanza e peso (n = L / W); in virata corretta livellata vale n = 1 / cos(φ)**

**Spiegazione:** Il **fattore di carico** ($n$) è definito come il rapporto adimensionale tra la portanza totale generata dall'ala e il peso del velivolo ($n = L / W$, espresso spesso in "$g$"): in volo rettilineo orizzontale vale $n = 1$. Durante una **virata corretta livellata** (senza perdita né guadagno di quota) con angolo di inclinazione laterale (*bank*) $\phi$, la componente verticale della portanza ($L \cos\phi$) deve bilanciare il peso $W$, per cui $L \cos\phi = W \implies n = \frac{L}{W} = \frac{1}{\cos\phi}$ (ad esempio, con $\phi = 60^\circ$ il fattore di carico raddoppia a $n = 2$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 23-26)*

### Domanda 272 — Cos'è il diagramma V-n di manovra e quali limiti stabilisce per il velivolo?
> [!check] Risposta corretta
> **Diagramma che correla fattore di carico e velocità; è delimitato da curva di stallo, limiti strutturali (n_max) e velocità limite (VNE)**

**Spiegazione:** Il **diagramma $V$-$n$ (inviluppo di manovra)** è il grafico che delimita il campo operativo sicuro del velivolo ponendo la velocità $V$ in ascissa e il fattore di carico $n$ in ordinata. La regione ammissibile è racchiusa da tre confini fondamentali: a sinistra dalle **curve di stallo** (positiva e negativa, oltre le quali l'ala stalla prima di raggiungere i limiti strutturali), superiormente e inferiormente dai **limiti strutturali** di progetto ($n_{\max}$ positivo e negativo, definiti per la categoria del velivolo), e a destra dalla **velocità massima strutturale / limite** ($V_{NE}$ o $V_D$).
*(Fonte: Aerotecnica 5 - Elementi di meccanica del volo, Slide 31-33, 35)*

### Domanda 273 — Come varia la velocità del suono con la quota e da quale parametro fisico dipende?
> [!check] Risposta corretta
> **Dipende esclusivamente dalla temperatura assoluta (a = √(γ R T)) e quindi diminuisce con la quota fino a 11 km dove poi si stabilizza**

**Spiegazione:** In un gas perfetto come l'aria, la velocità di propagazione delle piccole perturbazioni di pressione (**velocità del suono**, $a$) è espressa dalla formula $a = \sqrt{\gamma R T}$ (con $\gamma = 1{,}4$ ed $R = 287\text{ J/(kg}\cdot\text{K)}$) e dipende **esclusivamente dalla temperatura assoluta $T$** (poiché pressione e densità variano in modo tale da mantenere costante il loro rapporto a parità di $T$). Di conseguenza, salendo di quota nella troposfera dove la temperatura diminuisce, anche la velocità del suono decresce progressivamente fino alla tropopausa ($11\text{ km}$ in ISA), dove si stabilizza a circa $295\text{ m/s}$ ($574\text{ kts}$) nella bassa stratosfera.
*(Fonte: Aerotecnica 6 - Volo ad alte velocità, Slide 2-3)*

### Domanda 274 — Cosa succede ai parametri del fluido attraverso un'onda d'urto?
> [!check] Risposta corretta
> **Pressione, temperatura e densità aumentano; velocità del flusso e volume specifico diminuiscono**

**Spiegazione:** Un'**onda d'urto** è una superficie di discontinuità sottilissima che si forma nei flussi supersonici (o localmente supersonici in regime transonico) quando il flusso viene bruscamente rallentato o deviato su una superficie concava. Attraversando l'onda d'urto, il fluido subisce una compressione quasi istantanea e irreversibile: **pressione statica, temperatura e densità aumentano** nettamente, mentre la **velocità del flusso e il volume specifico diminuiscono** (con conseguente perdita di pressione totale e incremento della resistenza d'onda).
*(Fonte: Aerotecnica 6 - Volo ad alte velocità, Slide 14-16)*

### Domanda 275 — Cosa sono il passo geometrico, l'avanzo e il regresso di un'elica aeronautica?
> [!check] Risposta corretta
> **Passo geometrico: avanzamento teorico in un mezzo solido ad ogni giro; Avanzo: avanzamento reale in volo; Regresso: differenza tra passo geometrico e avanzo**

**Spiegazione:** Il funzionamento cinematico di un'elica si descrive tramite tre grandezze riferite a una rotazione completa ($1$ giro): il **passo geometrico** ($p$) è la distanza teorica che l'elica percorrerebbe in avanti se si avvitasse in un mezzo solido indeformabile; l'**avanzo** ($h = V/n$, con $V$ velocità di volo e $n$ giri al secondo) è la distanza reale percorsa dal velivolo in aria; il **regresso** ($p - h$) è lo scarto tra i due valori dovuto alla cedevolezza dell'aria, necessario affinché le pale lavorino con un angolo d'attacco positivo e generino trazione.
*(Fonte: Aerotecnica 7 - Eliche, Slide 8)*

### Domanda 276 — Cos'è il rapporto di funzionamento dell'elica (parametro adimensionale J)?
> [!check] Risposta corretta
> **Rapporto tra la velocità di volo (avanzamento) e la velocità periferica all'estremità dell'elica (J = V / (n · D))**

**Spiegazione:** Il **rapporto di funzionamento** (o rapporto di avanzamento) $J = \frac{V}{n \cdot D}$ è un parametro **adimensionale** che mette in relazione la velocità di avanzamento del velivolo ($V$) con il prodotto tra il numero di giri al secondo ($n$) e il diametro dell'elica ($D$), proporzionale alla velocità periferica della punta delle pale. Esso determina l'angolo d'attacco effettivo delle sezioni della pala e governa la curva del rendimento propulsivo $\eta$ dell'elica al variare della velocità di volo.
*(Fonte: Aerotecnica 7 - Eliche, Slide 13-14)*

### Domanda 277 — Come si definisce la differenza tra il passo geometrico teorico e l'avanzo reale di un'elica?
> [!check] Risposta corretta
> **Regresso dell'elica (rappresenta lo scorrimento o slittamento rispetto all'avanzamento in un mezzo solido ideale)**

**Spiegazione:** Poiché l'aria è un fluido cedevole, durante ogni giro l'elica avanza di una distanza reale $h$ (avanzo) inferiore al proprio passo geometrico teorico $p$ (che avrebbe in un mezzo solido ideale). Questa differenza ($p - h$) è chiamata **regresso dell'elica** e rappresenta lo slittamento del fluido rispetto al moto teorico della vite: esso consente alle pale di mantenere un angolo d'attacco positivo rispetto al vento relativo e accelerare l'aria all'indietro per produrre la trazione necessaria al volo.
*(Fonte: Aerotecnica 7 - Eliche, Slide 8, 14)*

### Domanda 278 — Come si calcola il regresso dell'elica in valore assoluto e in valore relativo?
> [!check] Risposta corretta
> **In valore assoluto: Regresso = Passo - Avanzo (p - h); in valore relativo: 1 - h/p oppure (p - h)/p**

**Spiegazione:** Indicando con $p$ il passo geometrico dell'elica e con $h = V/n$ l'avanzo reale in volo per ciascun giro, il **regresso assoluto** si calcola come differenza lineare $\text{Regresso} = p - h$ (espresso in unità di lunghezza, come metri o piedi). Dividendo tale scarto per il passo geometrico $p$, si ottiene il **regresso relativo** (spesso espresso in percentuale), una grandezza adimensionale data dalla formula $\frac{p - h}{p} = 1 - \frac{h}{p}$.
*(Fonte: Aerotecnica 7 - Eliche, Slide 8)*


---

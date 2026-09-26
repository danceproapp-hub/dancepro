import type { Dictionary } from "./en";

// I nomi delle discipline e delle divisioni restano nella forma
// internazionale che i ballerini usano su ogni pista del mondo.
export const it: Dictionary = {
  nav: {
    howItWorks: "Come funziona",
    danceStyles: "Stili di ballo",
    foundingMembers: "Membri fondatori",
    joinWaitlist: "Iscriviti alla lista",
    home: "Home di DancePro",
  },
  footer: {
    tagline: "Una rete professionale per ballerini.",
  },
  home: {
    metaTitle: "DancePro — Trova il tuo prossimo partner di ballo",
    metaDescription:
      "La rete professionale per ballerini di ballroom e latino: partner, coaching, gare e un marketplace di scarpe, abiti e vestiti da gara. Unisciti ai membri fondatori.",
    heroTitle: "Trova il tuo prossimo partner di ballo.",
    heroSubtitle:
      "La rete professionale per ballerini di ballroom e latino. Partner, coaching, gare e il marketplace, tutto in un unico posto.",
    heroCta: "Unisciti ai membri fondatori",
    socialProof: "Unisciti a {count} ballerini già in lista.",

    ideaEyebrow: "Com'è",
    ideaTitle: "Immagina di trovare il tuo partner in un pomeriggio.",
    ideaBody:
      "Di' cosa balli, il tuo livello e il tuo ruolo, e guarda chi cerca esattamente questo: nella tua scuola, dall'altra parte del mondo o qualcuno che si trasferirebbe dove sei tu. Niente post nei gruppi, niente attese che un insegnante chieda in giro. Qualcuno che si allena allo stesso modo, vuole le stesse vittorie e ha libere le stesse sere.",

    pillarsEyebrow: "Più di una ricerca di partner",
    pillarsTitle: "Tutto il mondo della danza, in un unico posto.",
    pillarsIntro:
      "Trovare un partner è dove DancePro inizia, non dove finisce. È una rete per tutto ciò di cui un ballerino ha bisogno.",
    pillarPartnerTitle: "Ricerca del partner",
    pillarPartnerBody:
      "Trova un partner da gara, da allenamento o sociale per stile, livello, ruolo e città in cui balla.",
    pillarMarketTitle: "Marketplace",
    pillarMarketBody:
      "Abiti da gara messi in vendita o in noleggio da altri ballerini, insieme a scarpe, abiti e abbigliamento da allenamento nuovi delle marche con cui già balli.",
    pillarCoachingTitle: "Coaching",
    pillarCoachingBody:
      "Gli insegnanti indicano cosa insegnano e dove. Gli allievi li trovano per stile, livello e città.",
    pillarCompsTitle: "Gare",
    pillarCompsBody: "Guarda cosa arriva, chi ci va e per cosa ti stai allenando.",

    stepsEyebrow: "Come funzionerà",
    stepsTitle: "Quattro passi, senza rumore.",
    step1Title: "Crea il tuo profilo",
    step1Body:
      "I tuoi stili, il ruolo, il livello e dove balli: tutto quello che un partner ha davvero bisogno di sapere.",
    step2Title: "Cerca o farti trovare",
    step2Body:
      "Trova ballerini compatibili vicino a te o in tutto il mondo, oppure lascia che siano loro a trovarti.",
    step3Title: "Collegati",
    step3Body:
      "Invii una richiesta di collegamento. La accettano. I collegamenti sono reciproci, quindi ogni conversazione inizia da un sì.",
    step4Title: "Scrivetevi dentro l'app",
    step4Body:
      "Organizza allenamenti, gare e collaborazioni in un unico posto.",
    stepsLink: "Vedi il quadro completo",

    benefitsEyebrow: "Membri fondatori",
    benefitsTitle: "Cosa ottieni ad arrivare presto.",
    benefitBadgeTitle: "Badge Membro Fondatore",
    benefitBadgeBody:
      "Un segno permanente sul tuo profilo che mostra che c'eri dall'inizio.",
    benefitAccessTitle: "Accesso anticipato",
    benefitAccessBody: "A DancePro prima che apra a tutti gli altri.",
    benefitPricingTitle: "Prezzo speciale di lancio",
    benefitPricingBody: "Bloccato per tutto il tempo in cui resti membro.",
    benefitVoteTitle: "Voce in capitolo su cosa arriva",
    benefitVoteBody:
      "Quello che chiedono i membri fondatori viene costruito prima.",

    formTitle: "Unisciti ai membri fondatori",
    formSubtitle: "Prenota il tuo posto prima che apriamo al pubblico.",
  },
  signup: {
    firstName: "Nome",
    email: "Email",
    danceStyles: "Stili di ballo",
    submit: "Unisciti ai membri fondatori",
    submitting: "Iscrizione...",
    footnote: "Ci vogliono dieci secondi. Puoi aggiungere i dettagli dopo.",
    errName: "Il nome è obbligatorio.",
    errEmail: "L'email è obbligatoria.",
    errEmailInvalid: "Inserisci un indirizzo email valido.",
    errStyles: "Scegli almeno uno stile.",
    errGeneric:
      "Qualcosa è andato storto nell'invio del modulo. Riprova tra un momento.",
  },
  profile: {
    inviteTitle: "Vuoi i tuoi primi contatti pronti al lancio?",
    inviteBody:
      "Aggiungi dove balli, il tuo ruolo e cosa cerchi, e avremo partner compatibili pronti il giorno in cui ottieni l'accesso. Ci vogliono circa 15 secondi.",
    inviteCta: "Aggiungi i miei dettagli",
    savedTitle: "Grazie.",
    savedBody:
      "I tuoi dettagli di ballo sono salvati. Li useremo per preparare i tuoi primi contatti prima del lancio.",
    editCta: "Modifica i miei dettagli",
    location: "Località",
    locationPlaceholder: "Inizia a scrivere la tua città",
    locationSearching: "Ricerca in corso...",
    locationNoMatch: "Nessun risultato: useremo quello che hai scritto.",
    role: "Ruolo",
    level: "Livello",
    levelPlaceholder: "Seleziona il tuo livello",
    division: "La tua divisione",
    lookingFor: "Cerco",
    save: "Salva i miei dettagli",
    saving: "Salvataggio...",
    cancel: "Annulla",
    errLocation: "Aggiungi la tua città così possiamo trovarti contatti in zona.",
    errRole: "Scegli il ruolo che balli.",
    errGeneric: "Non è stato possibile salvare adesso. Riprova tra un momento.",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "Entrambi",
  },
  levels: {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzato",
    competitive: "Agonistico",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "Partner da gara",
    "Practice partner": "Partner di allenamento",
    "Social dance partner": "Partner per ballo sociale",
    "Performance partner": "Partner per esibizioni",
    Coach: "Insegnante",
    Students: "Allievi",
    Other: "Altro",
  },
  welcome: {
    metaTitle: "Benvenuti",
    metaDescription:
      "Sei nella lista d'attesa dei membri fondatori di DancePro.",
    youreIn: "Ci sei",
    position: "Sei il #{position}.",
    total: {
      one: "1 ballerino si è iscritto alla lista dei membri fondatori finora.",
      few: "{total} ballerini si sono iscritti alla lista dei membri fondatori finora.",
      many: "{total} ballerini si sono iscritti alla lista dei membri fondatori finora.",
      other: "{total} ballerini si sono iscritti alla lista dei membri fondatori finora.",
    },
    moveUp: "Sali nella lista",
    copyLink: "Copia link",
    copied: "Copiato!",
    back: "Torna a DancePro",
    notFoundTitle: "Non abbiamo trovato quel link",
    notFoundBody:
      "Il tuo link della lista d'attesa potrebbe essere scaduto o scritto male. Iscriviti ai membri fondatori dalla homepage.",
    tierMsgToFirst:
      "Hai invitato {referred}. Ancora {remaining} e sali nella lista d'attesa.",
    tierMsgToPriority:
      "Hai invitato {referred} e ora sei più in alto nella lista. Ancora {remaining} per l'accesso prioritario al lancio.",
    tierMsgToVip:
      "Hai invitato {referred} e hai sbloccato l'accesso prioritario al lancio. Ancora {remaining} per lo status fondatore VIP.",
    tierMsgMax:
      "Hai invitato {referred} e hai ottenuto lo status fondatore VIP. Grazie per costruire questo progetto con noi.",
    dancers: {
      one: "ballerino",
      few: "ballerini",
      many: "ballerini",
      other: "ballerini",
    },
  },
  howItWorks: {
    metaTitle: "Come funziona",
    metaDescription:
      "Come DancePro collega i ballerini di ballroom e latino: crea un profilo, cerca o farti trovare, invia una richiesta di collegamento e scrivi dentro l'app.",
    eyebrow: "Come funziona",
    title: "Come funziona DancePro",
    intro:
      "Ogni parte di DancePro è costruita intorno a una cosa sola: trovare il partner giusto per i tuoi obiettivi di allenamento e di gara.",
    s1Body:
      "Il tuo nome, la tua città, gli stili che balli, il tuo ruolo, il tuo livello e che tipo di coppia cerchi. Più preciso è il tuo profilo, migliori sono i ballerini che trovi.",
    s2Body:
      "Sfoglia i ballerini che corrispondono a quello che cerchi, filtrati per stile, ruolo, livello e località, oppure lascia semplicemente il profilo aperto e fatti trovare dalle persone giuste.",
    s3Body:
      "Scrivi in modo diretto: possono vedere cosa balli e cosa cerchi prima di risponderti. I collegamenti sono reciproci, quindi nessuno entra nella tua rete né vede i tuoi dati senza aver prima accettato.",
    s4Body:
      "Una volta collegati, organizzate allenamenti, piani di gara e logistica in un unico posto pensato per i ballerini.",
    cta: "Unisciti ai membri fondatori",
  },
  danceStyles: {
    metaTitle: "Stili di ballo",
    metaDescription:
      "Trova un partner per International Latin, International Ballroom, American Smooth, American Rhythm, Argentine Tango e ballo sociale su DancePro.",
    eyebrow: "Discipline",
    title: "Gli stili di ballo su DancePro",
    intro:
      "Imposta i tuoi stili con precisione e DancePro ti aiuterà a trovare partner che li ballano anche loro, sia che tu stia inseguendo un titolo agonistico o una serata sociale del venerdì.",
    catInternational: "International Style",
    catInternationalBlurb:
      "Lo standard agonistico internazionale ballato in tutto il mondo.",
    catAmerican: "American Style",
    catAmericanBlurb:
      "Il programma americano, con più coreografia aperta e lavoro da soli.",
    catOther: "Balli sociali e latini di coppia",
    catOtherBlurb: "Piste sociali, serate e tutto quello che sta fuori dal programma.",
    styleDescriptions: {
      "International Latin":
        "Cha Cha, Samba, Rumba, Paso Doble e Jive: lo standard latino a cinque balli, ballato secondo le regole delle gare internazionali, costruito su tecnica affilata e precisione ritmica.",
      "International Ballroom":
        "Waltz, Tango, Viennese Waltz, Foxtrot e Quickstep, ballati in posizione chiusa con il frame morbido e viaggiante che definisce la disciplina più classica del ballroom agonistico.",
      "American Smooth":
        "La versione americana di Waltz, Tango, Foxtrot e Viennese Waltz, con coreografia aperta e lavoro da soli intrecciati alla posizione chiusa.",
      "American Rhythm":
        "Cha Cha, Rumba, East Coast Swing, Bolero e Mambo, ballati con lo stile radicato ed espressivo del programma americano.",
      "Argentine Tango":
        "Il tango improvvisato e guidato dall'abbraccio delle milonghe di Buenos Aires, apprezzato per la connessione e la musicalità più che per figure fisse.",
      "Social Dance":
        "Salsa, Bachata, Merengue e il resto della pista sociale: si balla per la serata, non per il foglio dei punteggi, guidando e seguendo sul momento.",
      Other:
        "West Coast Swing, Zouk, Country Two-Step e qualsiasi altro ballo di coppia. Dicci cosa balli quando ti iscrivi.",
    },
    closing:
      "Non vedi il tuo stile in elenco? Iscriviti comunque: dicci cosa balli e aiutaci a dare forma alla rete dall'inizio.",
    cta: "Unisciti ai membri fondatori",
  },
  foundingMembers: {
    metaTitle: "Membri fondatori",
    metaDescription:
      "Cosa ottengono i membri fondatori di DancePro, perché la community viene prima e perché iscriversi prima del lancio batte iscriversi dopo.",
    eyebrow: "Il programma",
    title: "Il programma membri fondatori",
    intro:
      "I membri fondatori sono i ballerini che si iscrivono prima che DancePro apra al pubblico. Ecco cosa significa e cosa ottieni a essere uno di loro.",
    perksTitle: "Cosa ottengono i membri fondatori",
    perkBadgeTitle: "Badge Membro Fondatore",
    perkBadgeBody:
      "Un segno permanente sul tuo profilo, visibile per tutto il tempo in cui resti membro: la prova che c'eri dal primo giorno.",
    perkAccessTitle: "Accesso anticipato",
    perkAccessBody: "Accesso a DancePro prima di tutti gli altri.",
    perkPricingTitle: "Prezzo speciale di lancio",
    perkPricingBody:
      "Bloccato per i membri fondatori, per tutto il tempo in cui mantieni attiva l'iscrizione.",
    perkVoteTitle: "Voce in capitolo su cosa arriva",
    perkVoteBody:
      "Quello che chiedono i membri fondatori viene costruito prima. Sei tu a dirci di cosa ha bisogno la rete.",
    laterTitle: "Perché adesso batte più tardi",
    laterBody:
      "Lo status di membro fondatore si chiude il giorno in cui DancePro apre al pubblico: non è qualcosa che si possa guadagnare dopo. Il prezzo di lancio, il badge e la voce su cosa viene costruito appartengono a questo gruppo e solo a questo gruppo. Chi si iscrive dopo parte da zero.",
    cta: "Unisciti ai membri fondatori",
  },
  language: {
    label: "Lingua",
  },
};

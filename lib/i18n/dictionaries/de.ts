import type { Dictionary } from "./en";

// Disziplin- und Divisionsnamen bleiben in der internationalen Form, die
// Tänzer auf jedem Parkett der Welt verwenden.
export const de: Dictionary = {
  nav: {
    close: "Schließen",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    howItWorks: "So funktioniert's",
    danceStyles: "Tanzstile",
    foundingMembers: "Gründungsmitglieder",
    joinWaitlist: "Auf die Liste",
    home: "DancePro Startseite",
  },
  footer: {
    tagline: "Ein professionelles Netzwerk für Tänzer.",
  },
  home: {
    metaTitle: "DancePro — Finde deinen nächsten Tanzpartner",
    metaDescription:
      "Das professionelle Netzwerk für Ballroom- und Latin-Tänzer: Partner, Coaching, Turniere und ein Marktplatz für Schuhe, Kleider und Turnierkleidung. Werde Gründungsmitglied.",
    heroTitle: "Finde deinen nächsten Tanzpartner.",
    heroSubtitle:
      "Das professionelle Netzwerk für Ballroom- und Latin-Tänzer. Partner, Coaching, Turniere und der Marktplatz — alles an einem Ort.",
    heroCta: "Werde Gründungsmitglied",
    socialProof: "Schließe dich {count} Tänzern an, die schon auf der Liste sind.",

    ideaEyebrow: "Wie es sich anfühlt",
    ideaTitle: "Weniger suchen. Mehr tanzen.",
    ideaBody:
      "Sag, was du tanzt, dein Niveau und deine Rolle, und sieh, wer genau das sucht — in deinem Studio, am anderen Ende der Welt oder bereit, dorthin zu ziehen, wo du bist. Keine Gruppenposts, kein Warten, bis ein Trainer sich umhört.",

    pillarsEyebrow: "Mehr als eine Partnersuche",
    pillarsTitle: "Die ganze Tanzwelt, an einem Ort.",
    pillarPartnerTitle: "Partnersuche",
    pillarPartnerBody:
      "Finde einen Turnier-, Trainings- oder Social-Partner nach Stil, Niveau, Rolle und Ort.",
    pillarMarketTitle: "Marktplatz",
    pillarMarketBody:
      "Turnierkleider, die andere Tänzer zum Verkauf oder zur Miete anbieten, dazu neue Schuhe, Kleider und Trainingskleidung der Marken, in denen du schon tanzt.",
    pillarCoachingTitle: "Coaching",
    pillarCoachingBody:
      "Trainer geben an, was sie unterrichten und wo. Schüler finden sie nach Stil, Niveau und Stadt.",
    pillarCompsTitle: "Turniere",
    pillarCompsBody:
      "Sieh, was ansteht, wer hinfährt und worauf du trainierst.",

    stepsEyebrow: "So wird es funktionieren",
    stepsTitle: "Vier Schritte, kein Rauschen.",
    step1Title: "Erstelle dein Profil",
    step1Body:
      "Deine Stile, deine Rolle, dein Niveau und wo du tanzt — alles, was ein Partner wirklich wissen muss.",
    step2Title: "Suchen oder gefunden werden",
    step2Body:
      "Finde passende Tänzer in der Nähe oder auf der ganzen Welt, oder lass sie dich finden.",
    step3Title: "Verbinde dich",
    step3Body:
      "Schicke eine Kontaktanfrage. Sie wird angenommen. Kontakte sind gegenseitig, jedes Gespräch beginnt also mit einem Ja.",
    step4Title: "Schreibt euch in der App",
    step4Body:
      "Stimmt Training, Turniere und Partnerschaften an einem Ort ab.",
    stepsLink: "Das ganze Bild ansehen",

    benefitsEyebrow: "Gründungsmitglieder",
    benefitsTitle: "Was du dafür bekommst, früh dabei zu sein.",
    benefitBadgeTitle: "Gründungsmitglied-Abzeichen",
    benefitBadgeBody:
      "Ein dauerhaftes Zeichen auf deinem Profil, das zeigt, dass du von Anfang an dabei warst.",
    benefitAccessTitle: "Früher Zugang",
    benefitAccessBody: "Zu DancePro, bevor es für alle anderen öffnet.",
    benefitPricingTitle: "Besonderer Startpreis",
    benefitPricingBody: "Festgeschrieben, solange du Mitglied bleibst.",

    formTitle: "Werde Gründungsmitglied",
    formSubtitle: "Sichere dir deinen Platz, bevor wir öffentlich öffnen.",
  },
  signup: {
    errEmailFailed:
      "Die Bestätigungs-E-Mail konnte nicht gesendet werden. Schreib an danceproapp@gmail.com, dann tragen wir dich von Hand ein.",
    captchaSentTitle: "Sieh in deiner Mail-App nach",
    captchaSentBody:
      "Eine Nachricht mit deinen Angaben sollte sich geöffnet haben. Schick sie ab, und wir tragen dich von Hand ein.",
    captchaSentNothing: "Es hat sich nichts geöffnet? Schreib uns an:",
    captchaCopy: "Adresse kopieren",
    captchaCopied: "Kopiert",
    alreadyTitle: "Du bist schon dabei",
    alreadyBody:
      "Du bist den Gründungsmitgliedern von diesem Gerät aus beigetreten. Dein Platz ist gesichert — eine zweite Anmeldung ist nicht nötig.",
    alreadyCta: "Meinen Platz ansehen",
    alreadyNotYou: "Jemand anderen anmelden? Zum Formular",
    captchaEmailIntro:
      "Die Sicherheitsprüfung hat mich nicht durchgelassen. Bitte nehmt mich in die Liste der Gründungsmitglieder auf:",
    errCaptcha:
      "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Das kann mit einem VPN oder in einem eingeschränkten Netz passieren — es heißt nicht, dass du abgewiesen wurdest.",
    captchaRetry: "Erneut versuchen",
    captchaEmail: "Stattdessen per E-Mail beitreten",
    captchaEmailSubject: "Beitritt zu den DancePro-Gründungsmitgliedern",
    firstName: "Vorname",
    email: "E-Mail",
    danceStyles: "Tanzstile",
    submit: "Werde Gründungsmitglied",
    submitting: "Wird gesendet...",
    footnote: "Dauert zehn Sekunden. Deine Angaben kannst du danach ergänzen.",
    errName: "Vorname ist erforderlich.",
    errEmail: "E-Mail ist erforderlich.",
    errEmailInvalid: "Gib eine gültige E-Mail-Adresse ein.",
    errStyles: "Wähle mindestens einen Stil.",
    errGeneric:
      "Beim Senden des Formulars ist etwas schiefgegangen. Bitte versuche es gleich noch einmal.",
    ageLabel: "Dein Alter",
    age16: "16 oder älter",
    ageUnder16: "Unter 16",
    parentEmail: "E-Mail eines Elternteils oder Vormunds",
    errAge: "Wähle deine Altersgruppe.",
    errParentEmail: "Gib die E-Mail eines Elternteils oder Vormunds ein.",
    pendingTitle: "Noch ein Schritt",
    pendingBody: "Wir haben an {email} geschrieben. Dein Platz ist gesichert, sobald ein Elternteil oder Vormund bestätigt.",
    minorsUnavailable: "Unter 16 können wir noch niemanden aufnehmen. Schau bald wieder vorbei.",
  },
  consent: {
    back: "Zurück zu DancePro",
    metaTitle: "Einwilligung der Eltern",
    title: "Platz einer Tänzerin oder eines Tänzers bestätigen",
    body: "Jemand hat deine Adresse als die eines Elternteils oder Vormunds angegeben, um auf die DancePro-Gründungsmitgliederliste zu kommen. Bis zu deiner Bestätigung wird nichts gespeichert.",
    confirm: "Ich bestätige",
    confirming: "Wird bestätigt...",
    okTitle: "Danke — bestätigt.",
    okBody: "Der Platz auf der Gründungsmitgliederliste ist gesichert.",
    badTitle: "Dieser Link hat nicht funktioniert",
    badBody: "Er ist vielleicht abgelaufen oder schon benutzt. Eine neue Anmeldung ist über die Startseite möglich.",
    emailSubject: "Platz von {name} bei DancePro bestätigen",
    emailIntro: "{name} möchte auf die DancePro-Gründungsmitgliederliste und hat deine Adresse als die eines Elternteils oder Vormunds angegeben. Wenn das für dich in Ordnung ist, bestätige hier:",
    emailIgnore: "Wenn du das nicht erwartet hast, ignoriere diese E-Mail — es wird nichts gespeichert.",
  },
  profile: {
    inviteTitle: "Sollen deine ersten Treffer zum Start bereitliegen?",
    inviteBody:
      "Gib an, wo du tanzt, welche Rolle du tanzt und was du suchst — dann haben wir passende Partner bereit, sobald du Zugang bekommst. Dauert etwa 15 Sekunden.",
    inviteCta: "Angaben ergänzen",
    savedTitle: "Danke.",
    savedBody:
      "Deine Tanzangaben sind gespeichert. Wir nutzen sie, um deine ersten Treffer vor dem Start vorzubereiten.",
    editCta: "Angaben bearbeiten",
    location: "Ort",
    locationPlaceholder: "Fang an, deine Stadt zu tippen",
    locationSearching: "Suche...",
    locationNoMatch: "Kein Treffer — wir nehmen, was du eingegeben hast.",
    role: "Rolle",
    level: "Niveau",
    levelPlaceholder: "Wähle dein Niveau",
    division: "Deine Division",
    lookingFor: "Ich suche",
    save: "Angaben speichern",
    saving: "Wird gespeichert...",
    cancel: "Abbrechen",
    errLocation: "Gib deine Stadt an, damit wir dich vor Ort vermitteln können.",
    errRole: "Wähle die Rolle, die du tanzt.",
    errGeneric:
      "Das konnte gerade nicht gespeichert werden. Bitte versuche es gleich noch einmal.",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "Beide",
  },
  levels: {
    beginner: "Anfänger",
    intermediate: "Mittelstufe",
    advanced: "Fortgeschritten",
    competitive: "Turniertanz",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "Turnierpartner",
    "Practice partner": "Trainingspartner",
    "Social dance partner": "Partner für Social Dance",
    "Performance partner": "Partner für Showtanz",
    Coach: "Trainer",
    Students: "Schüler",
    Other: "Sonstiges",
  },
  welcome: {
    metaTitle: "Willkommen",
    metaDescription:
      "Du stehst auf der Warteliste für DancePro-Gründungsmitglieder.",
    youreIn: "Du bist dabei",
    position: "Du bist #{position}.",
    total: {
      one: "1 Tänzer ist bisher auf der Liste der Gründungsmitglieder.",
      few: "{total} Tänzer sind bisher auf der Liste der Gründungsmitglieder.",
      many: "{total} Tänzer sind bisher auf der Liste der Gründungsmitglieder.",
      other: "{total} Tänzer sind bisher auf der Liste der Gründungsmitglieder.",
    },
    moveUp: "Rücke auf der Liste vor",
    copyLink: "Link kopieren",
    copied: "Kopiert!",
    back: "Zurück zu DancePro",
    notFoundTitle: "Diesen Link konnten wir nicht finden",
    notFoundBody:
      "Dein Wartelisten-Link ist vielleicht abgelaufen oder falsch eingegeben. Werde stattdessen über die Startseite Gründungsmitglied.",
    referralMsg:
      "Du hast {referred} empfohlen. Jeder Tänzer, der über deinen Link beitritt, bringt dich auf der Liste nach oben.",
    dancers: { one: "Tänzer", few: "Tänzer", many: "Tänzer", other: "Tänzer" },
  },
  howItWorks: {
    metaTitle: "So funktioniert's",
    metaDescription:
      "Wie DancePro Ballroom- und Latin-Tänzer verbindet: Profil anlegen, suchen oder gefunden werden, Kontaktanfrage senden und in der App schreiben.",
    eyebrow: "So funktioniert's",
    title: "So funktioniert DancePro",
    intro:
      "Jeder Teil von DancePro ist um eine Sache herum gebaut: den richtigen Partner für deine Trainings- und Turnierziele zu finden.",
    s1Body:
      "Name, Stadt, die Stile, die du tanzt, deine Rolle, dein Niveau und welche Art von Partnerschaft du suchst. Je präziser dein Profil, desto besser die Tänzer, die du findest.",
    s2Body:
      "Durchsuche Tänzer, die zu deiner Suche passen, gefiltert nach Stil, Rolle, Niveau und Ort — oder lass einfach dein Profil offen und die richtigen Leute finden dich.",
    s3Body:
      "Melde dich direkt: Sie sehen, was du tanzt und was du suchst, bevor sie antworten. Kontakte sind gegenseitig, also landet niemand in deinem Netzwerk und sieht niemand deine Angaben, ohne vorher zugestimmt zu haben.",
    s4Body:
      "Sobald ihr verbunden seid, stimmt ihr Trainingszeiten, Turnierpläne und Organisation an einem Ort ab, der für Tänzer gemacht ist.",
    cta: "Werde Gründungsmitglied",
  },
  danceStyles: {
    metaTitle: "Tanzstile",
    metaDescription:
      "Finde auf DancePro einen Partner für International Latin, International Ballroom, American Smooth, American Rhythm, Argentine Tango und Social Dance.",
    eyebrow: "Disziplinen",
    title: "Tanzstile auf DancePro",
    intro:
      "Gib deine Stile genau an, und DancePro hilft dir, Partner zu finden, die sie auch tanzen — ob du einem Turniertitel nachjagst oder einem Freitagabend auf dem Parkett.",
    catInternational: "International Style",
    catInternationalBlurb:
      "Der internationale Turnierstandard, der weltweit getanzt wird.",
    catAmerican: "American Style",
    catAmericanBlurb:
      "Das amerikanische Programm, mit mehr offener Choreografie und Solo-Arbeit.",
    catOther: "Social & Latin Paartänze",
    catOtherBlurb:
      "Social-Parketts, Tanzabende und alles außerhalb des Programms.",
    styleDescriptions: {
      "International Latin":
        "Cha Cha, Samba, Rumba, Paso Doble und Jive — der Fünf-Tänze-Latin-Standard nach internationalen Turnierregeln, gebaut auf scharfer Technik und rhythmischer Präzision.",
      "International Ballroom":
        "Waltz, Tango, Viennese Waltz, Foxtrot und Quickstep, in geschlossener Haltung getanzt, mit dem weichen, raumgreifenden Frame, der die klassischste Disziplin des Turnier-Ballrooms ausmacht.",
      "American Smooth":
        "Die amerikanische Lesart von Waltz, Tango, Foxtrot und Viennese Waltz, mit offener Choreografie und Solo-Arbeit, die in die geschlossene Haltung eingewoben wird.",
      "American Rhythm":
        "Cha Cha, Rumba, East Coast Swing, Bolero und Mambo, getanzt im bodennahen, ausdrucksstarken Stil des amerikanischen Programms.",
      "Argentine Tango":
        "Der improvisierte, aus der Umarmung geführte Tango der Milongas von Buenos Aires, geschätzt für Verbindung und Musikalität statt für feste Figuren.",
      "Social Dance":
        "Salsa, Bachata, Merengue und der Rest des Social-Parketts — getanzt für den Abend, nicht für den Wertungsbogen, spontan geführt und gefolgt.",
      Other:
        "West Coast Swing, Zouk, Country Two-Step und alles andere, wofür man sich zu zweit zusammentut. Sag uns bei der Anmeldung, was du tanzt.",
    },
    closing:
      "Dein Stil steht nicht dabei? Melde dich trotzdem an — sag uns, was du tanzt, und präge das Netzwerk von Anfang an mit.",
    cta: "Werde Gründungsmitglied",
  },
  foundingMembers: {
    metaTitle: "Gründungsmitglieder",
    metaDescription:
      "Was DancePro-Gründungsmitglieder bekommen, warum die Community zuerst kommt und warum es besser ist, vor dem Start dabei zu sein als danach.",
    eyebrow: "Das Programm",
    title: "Das Gründungsmitglied-Programm",
    intro:
      "Gründungsmitglieder sind die Tänzer, die dabei sind, bevor DancePro öffentlich öffnet. Das bedeutet es, und das bekommst du dafür, eines von ihnen zu sein.",
    perksTitle: "Was Gründungsmitglieder bekommen",
    perkBadgeTitle: "Gründungsmitglied-Abzeichen",
    perkBadgeBody:
      "Ein dauerhaftes Zeichen auf deinem Profil, sichtbar solange du Mitglied bist — der Beweis, dass du vom ersten Tag an dabei warst.",
    perkAccessTitle: "Früher Zugang",
    perkAccessBody: "Zugang zu DancePro vor allen anderen.",
    perkPricingTitle: "Besonderer Startpreis",
    perkPricingBody:
      "Für Gründungsmitglieder festgeschrieben, solange deine Mitgliedschaft aktiv bleibt.",
    laterTitle: "Warum jetzt besser ist als später",
    laterBody:
      "Der Status als Gründungsmitglied schließt an dem Tag, an dem DancePro öffentlich öffnet — man kann ihn sich nicht nachträglich verdienen. Startpreis, Abzeichen und früher Zugang gehören dieser Gruppe und nur dieser Gruppe. Alle, die später dazukommen, fangen bei null an.",
    cta: "Werde Gründungsmitglied",
  },
  privacy: {
    metaTitle: "Datenschutz",
    metaDescription:
      "Was DancePro erhebt, wenn du der Liste der Gründungsmitglieder beitrittst, warum wir es erheben und wer es sonst noch sieht.",
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert am 26. September 2026",
    intro:
      "DancePro ist eine Warteliste für ein Netzwerk, das noch nicht geöffnet hat. Diese Seite beschreibt, was die Website tatsächlich tut — nicht, was eine längere Erklärung ihr später erlauben könnte.",

    collectTitle: "Was wir erheben",
    collectBody:
      "Beim Beitritt: deinen Vornamen, deine E-Mail-Adresse und die Tanzstile, die du ausgewählt hast. Danach kannst du Stadt und Land, deine Rolle, dein Niveau oder deine Turnierklassen und das, wonach du suchst, ergänzen. Alle diese späteren Angaben sind freiwillig, und die Liste funktioniert auch ohne sie.",
    collectAgeBody:
      "Wir fragen außerdem nach deiner Altersgruppe. Wenn du unter 16 bist, fragen wir nach der E-Mail-Adresse eines Elternteils oder einer erziehungsberechtigten Person — und sonst nichts über diese Person.",
    collectRefBody:
      "Wenn du über den Einladungslink einer anderen tanzenden Person gekommen bist, halten wir fest, um welchen Link es sich handelte, damit deren Einladungen zählen.",

    whyTitle: "Warum wir es erheben",
    whyBody:
      "Um dir zu sagen, wann DancePro öffnet, und um gelegentlich über den Fortschritt zu berichten. Wenn du deine Tanzangaben ergänzt hast, nutzen wir sie, um passende Partnerinnen und Partner vorzubereiten, bevor du Zugang bekommst. Wir bewerben dir nichts anderes, und wir verkaufen, vermieten oder tauschen deine Adresse nicht.",

    sharingTitle: "Wer es sonst sieht",
    sharingBody:
      "Niemand erhält diese Angaben für eigene Zwecke. Sie laufen über die Unternehmen, die die Website für uns betreiben, und nur damit diese ihre Arbeit tun können:",
    sharingSupabase: "Supabase — speichert die Datenbank der Warteliste.",
    sharingVercel: "Vercel — hostet die Website und liefert diese Seiten aus.",
    sharingCloudflare:
      "Cloudflare — führt die Prüfung \"bestätige, dass du ein Mensch bist\" im Formular aus. Cloudflare sieht deine IP-Adresse, nicht das, was du eingegeben hast.",
    sharingOpenMeteo:
      "Open-Meteo — wenn du das freiwillige Städtefeld nutzt, wird der eingegebene Text an deren Dienst gesendet, um passende Ortsnamen zu finden.",
    sharingGmail:
      "Gmail — stellt die Bestätigungs-E-Mail an einen Elternteil oder eine erziehungsberechtigte Person zu, im einzigen Fall, in dem wir eine versenden.",

    minorsTitle: "Tanzende unter 16",
    minorsBody:
      "Wenn du angibst, unter 16 zu sein, wird dein Platz freigehalten, zählt aber für nichts, bis ein Elternteil oder eine erziehungsberechtigte Person ihn per E-Mail bestätigt. Bis dahin erscheinst du nicht in der Mitgliederzahl, hast keine Position auf der Liste und zählst für niemandes Einladungen. Bestätigt niemand, bleibt der Eintrag wirkungslos. Ein Elternteil oder eine erziehungsberechtigte Person kann uns jederzeit schreiben, um ihn löschen zu lassen, ohne Begründung.",

    keepTitle: "Wie lange wir es aufbewahren",
    keepBody:
      "Bis DancePro öffnet und du eine faire Gelegenheit hattest, ein Konto anzulegen, oder bis du uns bittest, es zu löschen — je nachdem, was zuerst eintritt. Wird das Projekt nicht weitergeführt, wird die gesamte Liste gelöscht.",

    cookiesTitle: "Cookies und das Zählen von Besuchen",
    cookiesBody:
      "Ein einziges Cookie, das sich merkt, in welcher Sprache du die Website liest. Außerdem zählen wir Seitenaufrufe über Vercel Analytics, damit wir wissen, wie viele Tanzende die Seite gefunden haben — gezählt werden Besuche, nicht Personen: kein Cookie, kein Fingerabdruck, nichts, was dir auf eine andere Seite folgt oder dich hier identifiziert. Werbung gibt es auf dieser Website nirgends.",

    rightsTitle: "Deine Möglichkeiten",
    rightsBody:
      "Schreib uns, und wir sagen dir, was wir über dich gespeichert haben, berichtigen es oder löschen es. Du musst keinen Grund nennen, und Löschen heißt Löschen — wir behalten keine stille Kopie.",

    contactTitle: "Kontakt",
    contactBody: "Für alles auf dieser Seite oder alles, was wir hier nicht beantwortet haben:",

    link: "Datenschutz",
  },
  notFound: {
    metaTitle: "Seite nicht gefunden",
    title: "Diese Seite konnten wir nicht finden",
    body: "Der Link ist vielleicht veraltet oder leicht falsch geschrieben.",
    back: "Zurück zu DancePro",
  },
  language: {
    label: "Sprache",
  },
};

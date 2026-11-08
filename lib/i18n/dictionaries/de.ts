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
      "Wie DancePro die personenbezogenen Daten erhebt, verwendet, speichert und weitergibt, die du bei der Eintragung in die Liste der Gründungsmitglieder angibst.",
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert am 26. September 2026",

    collectTitle: "Erhobene Daten",
    collectBody:
      "Bei der Eintragung in die Liste erheben wir deinen Vornamen, deine E-Mail-Adresse und die von dir ausgewählten Tanzstile. Darüber hinaus kannst du Stadt und Land, deine Rolle, dein Niveau oder deine Turnierklassen sowie dein Suchziel angeben. Diese zusätzlichen Angaben sind freiwillig.",
    collectAgeBody:
      "Wir erheben außerdem die von dir ausgewählte Altersgruppe. Gibst du an, unter 16 Jahre alt zu sein, erheben wir die E-Mail-Adresse eines Elternteils oder einer erziehungsberechtigten Person. Weitere Daten zu dieser Person erheben wir nicht.",
    collectRefBody:
      "Gelangst du über den Einladungslink eines anderen Mitglieds auf die Website, halten wir fest, welcher Link verwendet wurde, um die Empfehlung zuzuordnen.",

    whyTitle: "Verwendung der Daten",
    whyBody:
      "Wir verwenden deine Daten, um dich zu benachrichtigen, sobald DancePro verfügbar ist, und um dir in regelmäßigen Abständen Informationen zum Entwicklungsstand zu senden. Soweit du Angaben zum Tanzen gemacht hast, verwenden wir diese, um bereits vor deinem Zugang passende Partnerinnen und Partner zu ermitteln. Wir verwenden deine Daten nicht zu Werbezwecken und verkaufen, vermieten oder tauschen sie nicht.",

    sharingTitle: "Dienstleister",
    sharingBody:
      "Wir geben deine Daten nicht zu eigenen Zwecken Dritter weiter. Sie werden von den folgenden Dienstleistern ausschließlich zum Betrieb der Website in unserem Auftrag verarbeitet:",
    sharingSupabase:
      "Supabase — betreibt die Datenbank, in der die Liste gespeichert wird.",
    sharingVercel: "Vercel — hostet die Website und liefert diese Seiten aus.",
    sharingCloudflare:
      "Cloudflare — stellt die Bot-Prüfung des Anmeldeformulars bereit. Dabei wird deine IP-Adresse übermittelt, nicht jedoch der von dir eingegebene Inhalt.",
    sharingOpenMeteo:
      "Open-Meteo — stellt die Ortsnamensuche bereit. Nutzt du das optionale Feld für die Stadt, wird der eingegebene Text an diesen Dienst übermittelt, um passende Orte zurückzugeben.",
    sharingGmail:
      "Gmail — stellt die Bestätigungs-E-Mail an einen Elternteil oder eine erziehungsberechtigte Person zu, in den unten beschriebenen Fällen.",

    minorsTitle: "Nutzerinnen und Nutzer unter 16 Jahren",
    minorsBody:
      "Gibst du an, unter 16 Jahre alt zu sein, wird dein Eintrag gespeichert, bleibt jedoch inaktiv, bis ein Elternteil oder eine erziehungsberechtigte Person ihn per E-Mail bestätigt. Bis zum Eingang der Bestätigung wird der Eintrag nicht in die Mitgliederzahl einbezogen, belegt keinen Platz auf der Liste und wird keiner Empfehlung zugeordnet. Nicht bestätigte Einträge bleiben dauerhaft inaktiv. Ein Elternteil oder eine erziehungsberechtigte Person kann die Löschung des Eintrags jederzeit und ohne Angabe von Gründen verlangen.",

    keepTitle: "Speicherdauer",
    keepBody:
      "Wir speichern deine Daten, bis DancePro verfügbar ist und du angemessene Gelegenheit hattest, ein Konto anzulegen, oder bis du ihre Löschung verlangst — je nachdem, was zuerst eintritt. Wird das Projekt nicht weitergeführt, wird die Liste vollständig gelöscht.",

    cookiesTitle: "Cookies und Reichweitenmessung",
    cookiesBody:
      "Wir setzen ein einziges Cookie ein, das die Sprache speichert, in der du die Website ansiehst. Außerdem messen wir Seitenaufrufe über Vercel Analytics. Diese Messung erfolgt aggregiert und zählt Aufrufe, nicht Personen: Sie setzt kein Cookie, erstellt keinen Geräte-Fingerabdruck und identifiziert dich weder hier noch auf anderen Websites. Die Website enthält keine Werbung.",

    rightsTitle: "Deine Rechte",
    rightsBody:
      "Du kannst Auskunft über die zu deiner Person gespeicherten Daten, deren Berichtigung oder deren Löschung verlangen. Eine Begründung ist nicht erforderlich. Die Löschung ist endgültig; wir behalten keine Kopie.",

    contactTitle: "Kontakt",
    contactBody:
      "Bei Fragen zu dieser Erklärung oder zu Punkten, die auf dieser Seite nicht behandelt werden, wende dich an:",

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

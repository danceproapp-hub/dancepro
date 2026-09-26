// Dance disciplines, divisions and roles keep their international names in
// every language: competitive dancers say "International Latin" and "Pro-Am"
// worldwide, so translating them would obscure rather than clarify.
export const en = {
  nav: {
    howItWorks: "How It Works",
    danceStyles: "Dance Styles",
    foundingMembers: "Founding Members",
    joinWaitlist: "Join Waitlist",
    home: "DancePro home",
  },
  footer: {
    tagline: "A professional network for dancers.",
  },
  home: {
    metaTitle: "DancePro — Find Your Next Dance Partner",
    metaDescription:
      "The professional network for ballroom and Latin dancers — partners, coaching, competitions, and a marketplace for shoes, dresses, and gowns. Join the founding members.",
    heroTitle: "Find Your Next Dance Partner.",
    heroSubtitle:
      "The professional network for ballroom and Latin dancers. Partners, coaching, competitions, and the marketplace — all in one place.",
    heroCta: "Join the Founding Members",
    socialProof: "Join {count} dancers already on the list.",

    ideaEyebrow: "What it's like",
    ideaTitle: "Imagine finding your partner in an afternoon.",
    ideaBody:
      "Say what you dance, your level, and your role, and see who's looking for exactly that — at your studio, on the other side of the world, or ready to move to wherever you are. No group posts, no waiting for a coach to ask around. Someone who trains the same way, wants the same wins, and keeps the same nights.",

    pillarsEyebrow: "More than a partner search",
    pillarsTitle: "The whole dance world, in one place.",
    pillarsIntro:
      "Finding a partner is where DancePro starts, not where it ends. It's a network for everything a dancer needs.",
    pillarPartnerTitle: "Partner search",
    pillarPartnerBody:
      "Find a competition, practice, or social partner by style, level, role, and where they dance.",
    pillarMarketTitle: "Marketplace",
    pillarMarketBody:
      "Competition gowns listed by other dancers for sale or for rent, alongside new shoes, dresses, and practice wear from the brands you already dance in.",
    pillarCoachingTitle: "Coaching",
    pillarCoachingBody:
      "Instructors list what they teach and where. Students find them by style, level, and city.",
    pillarCompsTitle: "Competitions",
    pillarCompsBody:
      "See what's coming up, who's going, and what you're training toward.",

    stepsEyebrow: "How it will work",
    stepsTitle: "Four steps, no noise.",
    step1Title: "Create your profile",
    step1Body:
      "Your styles, role, level, and where you dance — everything a partner actually needs to know.",
    step2Title: "Search or get discovered",
    step2Body:
      "Find compatible dancers nearby or across the world, or let them find you.",
    step3Title: "Connect",
    step3Body:
      "Send a connection request. They accept. Connections are mutual, so every conversation starts with a yes.",
    step4Title: "Message inside the app",
    step4Body: "Coordinate practice, competitions, and partnerships in one place.",
    stepsLink: "See the full picture",

    benefitsEyebrow: "Founding members",
    benefitsTitle: "What you get for being early.",
    benefitBadgeTitle: "Founding Member badge",
    benefitBadgeBody: "A permanent mark on your profile showing you were here first.",
    benefitAccessTitle: "Early access",
    benefitAccessBody: "Into DancePro before it opens to everyone else.",
    benefitPricingTitle: "Special launch pricing",
    benefitPricingBody: "Locked in for as long as you remain a member.",
    benefitEventsTitle: "Exclusive events",
    benefitEventsBody: "Founding member meetups and DancePro-hosted socials.",
    benefitVoteTitle: "A say in what comes next",
    benefitVoteBody: "What founding members ask for gets built first.",

    formTitle: "Join the founding members",
    formSubtitle: "Reserve your place before we open to the public.",
  },
  signup: {
    firstName: "First name",
    email: "Email",
    danceStyles: "Dance styles",
    submit: "Join the Founding Members",
    submitting: "Joining...",
    footnote: "Takes ten seconds. You can add your details after.",
    errName: "First name is required.",
    errEmail: "Email is required.",
    errEmailInvalid: "Enter a valid email address.",
    errStyles: "Pick at least one style.",
    errGeneric:
      "Something went wrong submitting the form. Please try again in a moment.",
  },
  profile: {
    inviteTitle: "Want your first matches ready at launch?",
    inviteBody:
      "Add where you dance, your role and what you're looking for, and we'll have compatible partners lined up the day you get access. Takes about 15 seconds.",
    inviteCta: "Add my details",
    savedTitle: "Thank you.",
    savedBody:
      "Your dance details are saved. We'll use them to line up your first matches before launch.",
    editCta: "Edit my details",
    location: "Location",
    locationPlaceholder: "Start typing your city",
    locationSearching: "Searching...",
    locationNoMatch: "No match — we'll use what you typed.",
    role: "Role",
    level: "Level",
    levelPlaceholder: "Select your level",
    division: "Your division",
    lookingFor: "Looking for",
    save: "Save my details",
    saving: "Saving...",
    cancel: "Cancel",
    errLocation: "Add your city so we can match you locally.",
    errRole: "Pick the role you dance.",
    errGeneric: "Couldn't save that just now. Please try again in a moment.",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "Both",
  },
  levels: {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    competitive: "Competitive",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "Competition partner",
    "Practice partner": "Practice partner",
    "Social dance partner": "Social dance partner",
    "Performance partner": "Performance partner",
    Coach: "Coach",
    Students: "Students",
    Other: "Other",
  },
  welcome: {
    metaTitle: "Welcome",
    metaDescription: "You're on the DancePro founding members waitlist.",
    youreIn: "You're in",
    position: "You are #{position}.",
    total: {
      one: "1 dancer has joined the founding members list so far.",
      few: "{total} dancers have joined the founding members list so far.",
      many: "{total} dancers have joined the founding members list so far.",
      other: "{total} dancers have joined the founding members list so far.",
    },
    moveUp: "Move up the list",
    copyLink: "Copy link",
    copied: "Copied!",
    tier3: "Move up the list",
    tier10: "Priority access at launch",
    tier25: "VIP founding status",
    referralsLabel: "{count} referrals",
    back: "Back to DancePro",
    notFoundTitle: "We couldn't find that link",
    notFoundBody:
      "Your waitlist link may have expired or been typed incorrectly. Join the founding members from the homepage instead.",
    // {referred} = how many they've brought in, {remaining} = to the next tier
    tierMsgToFirst:
      "You've referred {referred}. {remaining} more and you move up the waitlist.",
    tierMsgToPriority:
      "You've referred {referred} and moved up the list. {remaining} more for priority access at launch.",
    tierMsgToVip:
      "You've referred {referred} and unlocked priority access at launch. {remaining} more for VIP founding status.",
    tierMsgMax:
      "You've referred {referred} and earned VIP founding status. Thank you for building this with us.",
    dancers: { one: "dancer", few: "dancers", many: "dancers", other: "dancers" },
  },
  howItWorks: {
    metaTitle: "How It Works",
    metaDescription:
      "How DancePro connects ballroom and Latin dancers: build a profile, search or get discovered, send a connection request, and message inside the app.",
    eyebrow: "How it works",
    title: "How DancePro works",
    intro:
      "Every part of DancePro is built around one thing: finding the right partner for your training and competition goals.",
    s1Title: "Create your profile",
    s1Body:
      "Set up a professional dancer profile: your name, city, the styles you dance, your competitive level, and what kind of partnership you're looking for.",
    s2Title: "Set your styles, role, and level",
    s2Body:
      "Be specific. Leader, follower, or both. Beginner through professional. International Latin or Argentine Tango. The more precise your profile, the better the dancers you find.",
    s3Title: "Search for compatible dancers, or get discovered",
    s3Body:
      "Browse dancers who fit what you're looking for, filtered by style, role, level, and location — or simply keep your profile open and let the right people find you.",
    s4Title: "Send a connection request",
    s4Body:
      "Reach out directly and professionally. They can see what you dance and what you're looking for before they answer.",
    s5Title: "They accept",
    s5Body:
      "Connections are mutual. Nobody is added to your network, and nobody sees your details, without agreeing to connect first.",
    s6Title: "You message inside the app",
    s6Body:
      "Once connected, coordinate practice schedules, competition plans, and logistics in one place built for dancers.",
    cta: "Join the Founding Members",
  },
  danceStyles: {
    metaTitle: "Dance Styles",
    metaDescription:
      "Find a partner for International Latin, International Ballroom, American Smooth, American Rhythm, Argentine Tango and social dance on DancePro.",
    eyebrow: "Disciplines",
    title: "Dance styles on DancePro",
    intro:
      "Set your styles precisely and DancePro will help you find partners who dance them too — whether you're chasing a competitive title or a Friday-night social.",
    catInternational: "International Style",
    catInternationalBlurb: "The international competitive standard danced worldwide.",
    catAmerican: "American Style",
    catAmericanBlurb:
      "The American syllabus, with more open choreography and solo work.",
    catOther: "Social & Latin Partner Dances",
    catOtherBlurb: "Social floors, socials, and everything outside the syllabus.",
    styleDescriptions: {
      "International Latin":
        "Cha Cha, Samba, Rumba, Paso Doble, and Jive — the five-dance Latin standard danced under international competition rules, built on sharp technique and rhythmic precision.",
      "International Ballroom":
        "Waltz, Tango, Viennese Waltz, Foxtrot, and Quickstep, danced in closed hold with the smooth, traveling frame that defines competitive ballroom's most classical discipline.",
      "American Smooth":
        "The American take on Waltz, Tango, Foxtrot, and Viennese Waltz, with open choreography and solo work woven into the closed-hold frame.",
      "American Rhythm":
        "Cha Cha, Rumba, East Coast Swing, Bolero, and Mambo, danced with the grounded, expressive style of the American syllabus.",
      "Argentine Tango":
        "The improvisational, embrace-led tango of Buenos Aires milongas, prized for its connection and musicality rather than fixed patterns.",
      "Social Dance":
        "Salsa, Bachata, Merengue and the rest of the social floor — danced for the night out rather than the scoresheet, led and followed on the spot.",
      Other:
        "West Coast Swing, Zouk, Country Two-Step and anything else you partner up for. Tell us what you dance when you join.",
    },
    closing:
      "Don't see your style listed? Join anyway — tell us what you dance and help shape the network from the start.",
    cta: "Join the Founding Members",
  },
  foundingMembers: {
    metaTitle: "Founding Members",
    metaDescription:
      "What DancePro founding members get, why the community comes first, and why joining before launch beats joining after.",
    eyebrow: "The program",
    title: "The founding member program",
    intro:
      "Founding members are the dancers who join before DancePro opens to the public. Here's what that means, and what you get for being one of them.",
    firstTitle: "What being first actually means",
    firstPara1:
      "Founding members shape what DancePro becomes — the cities it's strongest in, the styles best represented, what gets built next. Join now and you're not just on the network, you're part of the reason it's worth being on.",
    firstPara2:
      "You'll be among the first profiles other dancers see when they arrive, with a badge that never gets handed out again.",
    perksTitle: "What founding members get",
    perkBadgeTitle: "Founding Member badge",
    perkBadgeBody:
      "A permanent mark on your profile, visible for as long as you're a member — proof you were here from the very beginning.",
    perkAccessTitle: "Early access",
    perkAccessBody: "First access to DancePro, ahead of everyone else.",
    perkPricingTitle: "Special launch pricing",
    perkPricingBody:
      "Locked in for founding members, for as long as you keep your membership active.",
    perkEventsTitle: "Exclusive events",
    perkEventsBody:
      "Founding member meetups, socials, and a first look at what's coming before anyone else sees it.",
    perkVoteTitle: "A say in what comes next",
    perkVoteBody:
      "What founding members ask for gets built first. You tell us what the network needs.",
    laterTitle: "Why now beats later",
    laterBody:
      "Founding member status closes the day DancePro opens to the public — it isn't something you can earn after the fact. Launch pricing, the badge, and the say in what gets built all belong to this group and this group only. Everyone who joins afterwards starts from zero.",
    cta: "Join the Founding Members",
  },
  language: {
    label: "Language",
  },
};

// English is the source of truth for the shape. Every other dictionary is
// annotated `: Dictionary`, so a missing or misspelled key fails the build
// rather than falling back to a blank on the page.
export type Dictionary = typeof en;

import type { Dictionary } from "./en";

// Nazwy dyscyplin i kategorii pozostają w formie międzynarodowej — tak
// mówią o nich tancerze na każdym parkiecie na świecie.
export const pl: Dictionary = {
  nav: {
    howItWorks: "Jak to działa",
    danceStyles: "Style tańca",
    foundingMembers: "Członkowie założyciele",
    joinWaitlist: "Dołącz do listy",
    home: "Strona główna DancePro",
  },
  footer: {
    tagline: "Profesjonalna sieć dla tancerzy.",
  },
  home: {
    metaTitle: "DancePro — znajdź swojego następnego partnera",
    metaDescription:
      "Profesjonalna sieć dla tancerzy ballroom i latin: partnerzy, trenerzy, turnieje i marketplace z butami, sukniami i frakami. Dołącz do członków założycieli.",
    heroTitle: "Znajdź swojego następnego partnera.",
    heroSubtitle:
      "Profesjonalna sieć dla tancerzy ballroom i latin. Partnerzy, trenerzy, turnieje i marketplace — wszystko w jednym miejscu.",
    heroCta: "Dołącz do członków założycieli",
    socialProof: "Dołącz do {count} tancerzy, którzy już są na liście.",

    ideaEyebrow: "Jak to wygląda",
    ideaTitle: "Wyobraź sobie, że znajdujesz partnera w jedno popołudnie.",
    ideaBody:
      "Podaj, co tańczysz, swój poziom i swoją rolę, i zobacz, kto szuka dokładnie tego — w twoim klubie, na drugim końcu świata albo wśród tych, którzy przeprowadzą się tam, gdzie jesteś. Bez postów w grupach, bez czekania, aż trener popyta. Ktoś, kto trenuje tak samo, chce tych samych zwycięstw i ma wolne te same wieczory.",

    pillarsEyebrow: "Więcej niż szukanie partnera",
    pillarsTitle: "Cały świat tańca w jednym miejscu.",
    pillarsIntro:
      "Znalezienie partnera to miejsce, w którym DancePro się zaczyna, a nie kończy. To sieć dla wszystkiego, czego potrzebuje tancerz.",
    pillarPartnerTitle: "Szukanie partnera",
    pillarPartnerBody:
      "Znajdź partnera na turniej, trening lub tańce towarzyskie według stylu, poziomu, roli i miasta.",
    pillarMarketTitle: "Marketplace",
    pillarMarketBody:
      "Suknie turniejowe wystawione przez innych tancerzy na sprzedaż lub do wynajęcia, a obok nowe buty, sukienki i odzież treningowa marek, w których już tańczysz.",
    pillarCoachingTitle: "Trenerzy",
    pillarCoachingBody:
      "Instruktorzy podają, czego i gdzie uczą. Uczniowie znajdują ich według stylu, poziomu i miasta.",
    pillarCompsTitle: "Turnieje",
    pillarCompsBody:
      "Zobacz, co przed tobą, kto jedzie i do czego trenujesz.",

    stepsEyebrow: "Jak to będzie działać",
    stepsTitle: "Cztery kroki, bez zbędnego szumu.",
    step1Title: "Załóż profil",
    step1Body:
      "Twoje style, rola, poziom i miasto — wszystko, co partner naprawdę musi wiedzieć.",
    step2Title: "Szukaj albo daj się znaleźć",
    step2Body:
      "Znajduj pasujących tancerzy w pobliżu lub na całym świecie — albo pozwól, żeby to oni znaleźli ciebie.",
    step3Title: "Nawiąż kontakt",
    step3Body:
      "Wyślij zaproszenie. Zostaje przyjęte. Kontakt jest zawsze obustronny, więc każda rozmowa zaczyna się od zgody.",
    step4Title: "Piszcie w aplikacji",
    step4Body:
      "Ustalajcie treningi, turnieje i współpracę w jednym miejscu.",
    stepsLink: "Zobacz całość",

    benefitsEyebrow: "Członkowie założyciele",
    benefitsTitle: "Co zyskujesz, będąc na początku.",
    benefitBadgeTitle: "Odznaka członka założyciela",
    benefitBadgeBody:
      "Stały znak w twoim profilu pokazujący, że jesteś tu od samego początku.",
    benefitAccessTitle: "Wcześniejszy dostęp",
    benefitAccessBody: "Do DancePro, zanim otworzy się dla wszystkich.",
    benefitPricingTitle: "Specjalna cena na start",
    benefitPricingBody: "Zablokowana tak długo, jak pozostajesz członkiem.",

    formTitle: "Dołącz do członków założycieli",
    formSubtitle: "Zajmij miejsce, zanim otworzymy się dla wszystkich.",
  },
  signup: {
    firstName: "Imię",
    email: "E-mail",
    danceStyles: "Style tańca",
    submit: "Dołącz do członków założycieli",
    submitting: "Wysyłamy...",
    footnote: "Zajmuje dziesięć sekund. Resztę możesz dodać później.",
    errName: "Imię jest wymagane.",
    errEmail: "E-mail jest wymagany.",
    errEmailInvalid: "Podaj poprawny adres e-mail.",
    errStyles: "Wybierz co najmniej jeden styl.",
    errGeneric:
      "Coś poszło nie tak przy wysyłaniu formularza. Spróbuj ponownie za chwilę.",
  },
  profile: {
    inviteTitle: "Chcesz, żeby pierwsze dopasowania czekały na starcie?",
    inviteBody:
      "Podaj, gdzie tańczysz, swoją rolę i czego szukasz, a przygotujemy pasujących partnerów na dzień, w którym dostaniesz dostęp. Zajmuje około 15 sekund.",
    inviteCta: "Dodaj swoje dane",
    savedTitle: "Dziękujemy.",
    savedBody:
      "Twoje dane taneczne są zapisane. Wykorzystamy je, żeby przygotować pierwsze dopasowania przed startem.",
    editCta: "Edytuj swoje dane",
    location: "Miasto",
    locationPlaceholder: "Zacznij wpisywać swoje miasto",
    locationSearching: "Szukamy...",
    locationNoMatch: "Brak wyników — zostawimy wpisany tekst.",
    role: "Rola",
    level: "Poziom",
    levelPlaceholder: "Wybierz swój poziom",
    division: "Twoja kategoria",
    lookingFor: "Szukam",
    save: "Zapisz moje dane",
    saving: "Zapisujemy...",
    cancel: "Anuluj",
    errLocation: "Podaj miasto, żebyśmy mogli dopasować kogoś w pobliżu.",
    errRole: "Wybierz rolę, którą tańczysz.",
    errGeneric: "Nie udało się teraz zapisać. Spróbuj ponownie za chwilę.",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "Obie",
  },
  levels: {
    beginner: "Początkujący",
    intermediate: "Średnio zaawansowany",
    advanced: "Zaawansowany",
    competitive: "Turniejowy",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "Partner turniejowy",
    "Practice partner": "Partner treningowy",
    "Social dance partner": "Partner do tańców towarzyskich",
    "Performance partner": "Partner do pokazów",
    Coach: "Trener",
    Students: "Uczniowie",
    Other: "Inne",
  },
  welcome: {
    metaTitle: "Witamy",
    metaDescription: "Jesteś na liście członków założycieli DancePro.",
    youreIn: "Jesteś na liście",
    position: "Jesteś #{position}.",
    total: {
      one: "Do listy członków założycieli dołączył na razie {total} tancerz.",
      few: "Do listy członków założycieli dołączyli już {total} tancerze.",
      many: "Do listy członków założycieli dołączyło już {total} tancerzy.",
      other: "Do listy członków założycieli dołączyło już {total} tancerza.",
    },
    moveUp: "Awansuj na liście",
    copyLink: "Kopiuj link",
    copied: "Skopiowano!",
    back: "Wróć do DancePro",
    notFoundTitle: "Nie znaleźliśmy takiego linku",
    notFoundBody:
      "Twój link mógł wygasnąć albo został wpisany z błędem. Dołącz do członków założycieli ze strony głównej.",
    referralMsg:
      "Twoje zaproszenia: {referred}. Każdy tancerz, który dołączy z twojego linku, podnosi cię na liście.",
    // Counting form for "Twoje zaproszenia: 1 tancerz / 2 tancerze /
    // 5 tancerzy", not the accusative used after a verb.
    dancers: {
      one: "tancerz",
      few: "tancerze",
      many: "tancerzy",
      other: "tancerza",
    },
  },
  howItWorks: {
    metaTitle: "Jak to działa",
    metaDescription:
      "Jak DancePro łączy tancerzy ballroom i latin: profil, szukanie lub bycie znalezionym, zaproszenie do kontaktu i rozmowa w aplikacji.",
    eyebrow: "Jak to działa",
    title: "Jak działa DancePro",
    intro:
      "Wszystko w DancePro jest zbudowane wokół jednej rzeczy: znalezienia właściwego partnera do twoich celów treningowych i turniejowych.",
    s1Body:
      "Imię, miasto, style, które tańczysz, twoja rola, twój poziom i to, jakiej pary szukasz. Im dokładniejszy profil, tym lepszych tancerzy znajdziesz.",
    s2Body:
      "Przeglądaj tancerzy z filtrami według stylu, roli, poziomu i miasta — albo po prostu zostaw profil otwarty i pozwól właściwym osobom znaleźć ciebie.",
    s3Body:
      "Pisz wprost: widzą, co tańczysz i czego szukasz, jeszcze zanim odpowiedzą. Kontakt jest zawsze obustronny, więc nikt nie trafia do twojej sieci ani nie widzi twoich danych bez zgody.",
    s4Body:
      "Po nawiązaniu kontaktu ustalajcie grafik treningów, plany turniejowe i organizację w jednym miejscu zrobionym dla tancerzy.",
    cta: "Dołącz do członków założycieli",
  },
  danceStyles: {
    metaTitle: "Style tańca",
    metaDescription:
      "Znajdź partnera do International Latin, International Ballroom, American Smooth, American Rhythm, Argentine Tango i tańców towarzyskich w DancePro.",
    eyebrow: "Dyscypliny",
    title: "Style tańca w DancePro",
    intro:
      "Podaj swoje style dokładnie, a DancePro pomoże ci znaleźć partnerów, którzy tańczą to samo — czy gonisz za tytułem turniejowym, czy za piątkowym wieczorem na parkiecie.",
    catInternational: "International Style",
    catInternationalBlurb:
      "Międzynarodowy standard turniejowy tańczony na całym świecie.",
    catAmerican: "American Style",
    catAmericanBlurb:
      "Program amerykański, z większą swobodą choreografii i pracą solo.",
    catOther: "Tańce towarzyskie i latynoamerykańskie w parze",
    catOtherBlurb:
      "Parkiety towarzyskie, imprezy i wszystko poza programem.",
    styleDescriptions: {
      "International Latin":
        "Cha Cha, Samba, Rumba, Paso Doble i Jive — latynoamerykańska piątka według przepisów turniejów międzynarodowych, zbudowana na ostrej technice i rytmicznej precyzji.",
      "International Ballroom":
        "Waltz, Tango, Viennese Waltz, Foxtrot i Quickstep — w pozycji zamkniętej, z miękkim posuwistym prowadzeniem, które definiuje najbardziej klasyczną dyscyplinę turniejowego ballroom.",
      "American Smooth":
        "Amerykańskie odczytanie Waltz, Tango, Foxtrot i Viennese Waltz, gdzie otwarta choreografia i praca solo wplatają się w pozycję zamkniętą.",
      "American Rhythm":
        "Cha Cha, Rumba, East Coast Swing, Bolero i Mambo — w osadzonym i ekspresyjnym stylu programu amerykańskiego.",
      "Argentine Tango":
        "Improwizowane tango z milong Buenos Aires, prowadzone z objęcia i cenione za kontakt i muzykalność, a nie za ustalone figury.",
      "Social Dance":
        "Salsa, Bachata, Merengue i reszta parkietu towarzyskiego — tańczy się dla samego wieczoru, a nie dla kartki sędziowskiej, prowadzi i podąża na bieżąco.",
      Other:
        "West Coast Swing, Zouk, Country Two-Step i wszystko inne, co tańczy się w parze. Powiedz nam, co tańczysz, przy zapisie.",
    },
    closing:
      "Nie ma twojego stylu na liście? Zapisz się mimo to — powiedz nam, co tańczysz, i pomóż nadać sieci kierunek od samego początku.",
    cta: "Dołącz do członków założycieli",
  },
  foundingMembers: {
    metaTitle: "Członkowie założyciele",
    metaDescription:
      "Co dostają członkowie założyciele DancePro, dlaczego społeczność jest na pierwszym miejscu i dlaczego warto dołączyć przed startem.",
    eyebrow: "Program",
    title: "Program członków założycieli",
    intro:
      "Członkowie założyciele to tancerze, którzy dołączyli, zanim DancePro otworzył się dla wszystkich. Oto co to znaczy i co zyskujesz, będąc jednym z nich.",
    perksTitle: "Co dostają członkowie założyciele",
    perkBadgeTitle: "Odznaka członka założyciela",
    perkBadgeBody:
      "Stały znak w profilu, widoczny przez cały czas twojego członkostwa — dowód obecności od pierwszego dnia.",
    perkAccessTitle: "Wcześniejszy dostęp",
    perkAccessBody: "Dostęp do DancePro przed wszystkimi innymi.",
    perkPricingTitle: "Specjalna cena na start",
    perkPricingBody:
      "Zablokowana dla członków założycieli tak długo, jak twoje członkostwo pozostaje aktywne.",
    laterTitle: "Dlaczego teraz jest lepiej niż później",
    laterBody:
      "Status członka założyciela zamyka się w dniu, w którym DancePro otwiera się dla wszystkich — nie da się go zdobyć później. Cena startowa, odznaka i wcześniejszy dostęp należą do tej grupy i tylko do niej. Wszyscy, którzy dołączą później, zaczynają od zera.",
    cta: "Dołącz do członków założycieli",
  },
  language: {
    label: "Język",
  },
};

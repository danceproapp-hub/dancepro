import type { Dictionary } from "./en";

// Discipline names, divisions and competitive vocabulary stay in the
// international form dancers use on every floor in the world.
export const es: Dictionary = {
  nav: {
    howItWorks: "Cómo funciona",
    danceStyles: "Estilos de baile",
    foundingMembers: "Miembros fundadores",
    joinWaitlist: "Únete a la lista",
    home: "Inicio de DancePro",
  },
  footer: {
    tagline: "Una red profesional para bailarines.",
  },
  home: {
    metaTitle: "DancePro — Encuentra tu próxima pareja de baile",
    metaDescription:
      "La red profesional para bailarines de ballroom y latino: parejas, entrenamiento, competiciones y un marketplace de zapatos, vestidos y trajes. Únete a los miembros fundadores.",
    heroTitle: "Encuentra tu próxima pareja de baile.",
    heroSubtitle:
      "La red profesional para bailarines de ballroom y latino. Parejas, entrenamiento, competiciones y el marketplace, todo en un solo lugar.",
    heroCta: "Únete a los miembros fundadores",
    socialProof: "Únete a {count} bailarines que ya están en la lista.",

    ideaEyebrow: "Cómo se siente",
    ideaTitle: "Imagina encontrar tu pareja en una tarde.",
    ideaBody:
      "Di qué bailas, tu nivel y tu rol, y mira quién busca exactamente eso: en tu academia, al otro lado del mundo o alguien que se mudaría a donde tú estés. Sin publicaciones en grupos, sin esperar a que un profesor pregunte por ahí. Alguien que entrena de la misma manera, quiere las mismas victorias y tiene libres las mismas noches.",

    pillarsEyebrow: "Más que una búsqueda de pareja",
    pillarsTitle: "Todo el mundo del baile, en un solo lugar.",
    pillarsIntro:
      "Encontrar pareja es donde empieza DancePro, no donde acaba. Es una red para todo lo que un bailarín necesita.",
    pillarPartnerTitle: "Búsqueda de pareja",
    pillarPartnerBody:
      "Encuentra pareja de competición, de práctica o social por estilo, nivel, rol y dónde baila.",
    pillarMarketTitle: "Marketplace",
    pillarMarketBody:
      "Vestidos de competición publicados por otros bailarines para venta o alquiler, junto a zapatos, vestidos y ropa de práctica nuevos de las marcas con las que ya bailas.",
    pillarCoachingTitle: "Entrenamiento",
    pillarCoachingBody:
      "Los profesores publican qué enseñan y dónde. Los alumnos los encuentran por estilo, nivel y ciudad.",
    pillarCompsTitle: "Competiciones",
    pillarCompsBody:
      "Mira qué viene, quién va y para qué estás entrenando.",

    stepsEyebrow: "Cómo funcionará",
    stepsTitle: "Cuatro pasos, sin ruido.",
    step1Title: "Crea tu perfil",
    step1Body:
      "Tus estilos, tu rol, tu nivel y dónde bailas: todo lo que una pareja necesita saber de verdad.",
    step2Title: "Busca o deja que te encuentren",
    step2Body:
      "Encuentra bailarines compatibles cerca de ti o en cualquier parte del mundo, o deja que ellos te encuentren.",
    step3Title: "Conecta",
    step3Body:
      "Envía una solicitud de conexión. La aceptan. Las conexiones son mutuas, así que toda conversación empieza con un sí.",
    step4Title: "Escríbele dentro de la app",
    step4Body:
      "Coordina prácticas, competiciones y parejas en un solo lugar.",
    stepsLink: "Ver el panorama completo",

    benefitsEyebrow: "Miembros fundadores",
    benefitsTitle: "Lo que consigues por llegar primero.",
    benefitBadgeTitle: "Distintivo de Miembro Fundador",
    benefitBadgeBody:
      "Una marca permanente en tu perfil que muestra que estuviste aquí desde el principio.",
    benefitAccessTitle: "Acceso anticipado",
    benefitAccessBody: "A DancePro antes de que se abra a todos los demás.",
    benefitPricingTitle: "Precio especial de lanzamiento",
    benefitPricingBody: "Fijo mientras sigas siendo miembro.",
    benefitVoteTitle: "Voz en lo que viene",
    benefitVoteBody:
      "Lo que piden los miembros fundadores se construye primero.",

    formTitle: "Únete a los miembros fundadores",
    formSubtitle: "Reserva tu lugar antes de que abramos al público.",
  },
  signup: {
    firstName: "Nombre",
    email: "Correo electrónico",
    danceStyles: "Estilos de baile",
    submit: "Únete a los miembros fundadores",
    submitting: "Uniéndote...",
    footnote: "Tarda diez segundos. Puedes añadir tus datos después.",
    errName: "El nombre es obligatorio.",
    errEmail: "El correo electrónico es obligatorio.",
    errEmailInvalid: "Introduce un correo electrónico válido.",
    errStyles: "Elige al menos un estilo.",
    errGeneric:
      "Algo salió mal al enviar el formulario. Inténtalo de nuevo en un momento.",
  },
  profile: {
    inviteTitle: "¿Quieres tus primeras coincidencias listas para el lanzamiento?",
    inviteBody:
      "Añade dónde bailas, tu rol y qué buscas, y tendremos parejas compatibles preparadas el día que consigas acceso. Tarda unos 15 segundos.",
    inviteCta: "Añadir mis datos",
    savedTitle: "Gracias.",
    savedBody:
      "Tus datos de baile están guardados. Los usaremos para preparar tus primeras coincidencias antes del lanzamiento.",
    editCta: "Editar mis datos",
    location: "Ubicación",
    locationPlaceholder: "Empieza a escribir tu ciudad",
    locationSearching: "Buscando...",
    locationNoMatch: "Sin resultados: usaremos lo que has escrito.",
    role: "Rol",
    level: "Nivel",
    levelPlaceholder: "Selecciona tu nivel",
    division: "Tu división",
    lookingFor: "Busco",
    save: "Guardar mis datos",
    saving: "Guardando...",
    cancel: "Cancelar",
    errLocation: "Añade tu ciudad para que podamos emparejarte localmente.",
    errRole: "Elige el rol que bailas.",
    errGeneric: "No se ha podido guardar ahora mismo. Inténtalo en un momento.",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "Ambos",
  },
  levels: {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
    competitive: "Competitivo",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "Pareja de competición",
    "Practice partner": "Pareja de práctica",
    "Social dance partner": "Pareja de baile social",
    "Performance partner": "Pareja de exhibición",
    Coach: "Entrenador",
    Students: "Alumnos",
    Other: "Otro",
  },
  welcome: {
    metaTitle: "Bienvenida",
    metaDescription:
      "Estás en la lista de espera de miembros fundadores de DancePro.",
    youreIn: "Ya estás dentro",
    position: "Eres el #{position}.",
    total: {
      one: "1 bailarín se ha unido a la lista de miembros fundadores hasta ahora.",
      few: "{total} bailarines se han unido a la lista de miembros fundadores hasta ahora.",
      many: "{total} bailarines se han unido a la lista de miembros fundadores hasta ahora.",
      other: "{total} bailarines se han unido a la lista de miembros fundadores hasta ahora.",
    },
    moveUp: "Sube en la lista",
    copyLink: "Copiar enlace",
    copied: "¡Copiado!",
    back: "Volver a DancePro",
    notFoundTitle: "No hemos encontrado ese enlace",
    notFoundBody:
      "Tu enlace de la lista puede haber caducado o estar mal escrito. Únete a los miembros fundadores desde la página de inicio.",
    tierMsgToFirst:
      "Has invitado a {referred}. {remaining} más y subes en la lista de espera.",
    tierMsgToPriority:
      "Has invitado a {referred} y has subido en la lista. {remaining} más para acceso prioritario en el lanzamiento.",
    tierMsgToVip:
      "Has invitado a {referred} y has desbloqueado el acceso prioritario en el lanzamiento. {remaining} más para el estatus fundador VIP.",
    tierMsgMax:
      "Has invitado a {referred} y te has ganado el estatus fundador VIP. Gracias por construir esto con nosotros.",
    dancers: {
      one: "bailarín",
      few: "bailarines",
      many: "bailarines",
      other: "bailarines",
    },
  },
  howItWorks: {
    metaTitle: "Cómo funciona",
    metaDescription:
      "Cómo DancePro conecta a bailarines de ballroom y latino: crea un perfil, busca o deja que te encuentren, envía una solicitud de conexión y escribe dentro de la app.",
    eyebrow: "Cómo funciona",
    title: "Cómo funciona DancePro",
    intro:
      "Cada parte de DancePro está construida alrededor de una sola cosa: encontrar la pareja adecuada para tus objetivos de entrenamiento y competición.",
    s1Body:
      "Tu nombre, tu ciudad, los estilos que bailas, tu rol, tu nivel y qué tipo de pareja buscas. Cuanto más preciso sea tu perfil, mejores serán los bailarines que encuentres.",
    s2Body:
      "Explora bailarines que encajan con lo que buscas, filtrando por estilo, rol, nivel y ubicación, o simplemente deja tu perfil abierto y que las personas adecuadas te encuentren.",
    s3Body:
      "Escribe directamente: pueden ver qué bailas y qué buscas antes de responder. Las conexiones son mutuas, así que nadie entra en tu red ni ve tus datos sin aceptar primero.",
    s4Body:
      "Una vez conectados, coordinad horarios de práctica, planes de competición y logística en un solo lugar hecho para bailarines.",
    cta: "Únete a los miembros fundadores",
  },
  danceStyles: {
    metaTitle: "Estilos de baile",
    metaDescription:
      "Encuentra pareja para International Latin, International Ballroom, American Smooth, American Rhythm, Argentine Tango y baile social en DancePro.",
    eyebrow: "Disciplinas",
    title: "Estilos de baile en DancePro",
    intro:
      "Define tus estilos con precisión y DancePro te ayudará a encontrar parejas que también los bailen, ya persigas un título competitivo o una social de viernes noche.",
    catInternational: "International Style",
    catInternationalBlurb:
      "El estándar competitivo internacional que se baila en todo el mundo.",
    catAmerican: "American Style",
    catAmericanBlurb:
      "El programa americano, con más coreografía abierta y trabajo en solo.",
    catOther: "Bailes sociales y latinos en pareja",
    catOtherBlurb: "Pistas sociales, fiestas y todo lo que queda fuera del programa.",
    styleDescriptions: {
      "International Latin":
        "Cha Cha, Samba, Rumba, Paso Doble y Jive: el estándar latino de cinco bailes que se baila bajo las reglas de competición internacional, construido sobre una técnica afilada y precisión rítmica.",
      "International Ballroom":
        "Waltz, Tango, Viennese Waltz, Foxtrot y Quickstep, bailados en posición cerrada con el frame suave y viajero que define la disciplina más clásica del ballroom competitivo.",
      "American Smooth":
        "La versión americana del Waltz, Tango, Foxtrot y Viennese Waltz, con coreografía abierta y trabajo en solo entretejidos en la posición cerrada.",
      "American Rhythm":
        "Cha Cha, Rumba, East Coast Swing, Bolero y Mambo, bailados con el estilo asentado y expresivo del programa americano.",
      "Argentine Tango":
        "El tango improvisado y guiado desde el abrazo de las milongas de Buenos Aires, valorado por su conexión y musicalidad más que por figuras fijas.",
      "Social Dance":
        "Salsa, Bachata, Merengue y el resto de la pista social: se baila por la noche que tienes delante, no por la hoja de puntuación, guiando y siguiendo en el momento.",
      Other:
        "West Coast Swing, Zouk, Country Two-Step y cualquier otro baile en pareja. Cuéntanos qué bailas al unirte.",
    },
    closing:
      "¿No ves tu estilo en la lista? Únete igualmente: cuéntanos qué bailas y ayuda a dar forma a la red desde el principio.",
    cta: "Únete a los miembros fundadores",
  },
  foundingMembers: {
    metaTitle: "Miembros fundadores",
    metaDescription:
      "Qué reciben los miembros fundadores de DancePro, por qué la comunidad va primero y por qué unirse antes del lanzamiento gana a unirse después.",
    eyebrow: "El programa",
    title: "El programa de miembros fundadores",
    intro:
      "Los miembros fundadores son los bailarines que se unen antes de que DancePro abra al público. Esto es lo que significa y lo que consigues por ser uno de ellos.",
    perksTitle: "Qué reciben los miembros fundadores",
    perkBadgeTitle: "Distintivo de Miembro Fundador",
    perkBadgeBody:
      "Una marca permanente en tu perfil, visible mientras seas miembro: la prueba de que estuviste aquí desde el primer día.",
    perkAccessTitle: "Acceso anticipado",
    perkAccessBody: "Acceso a DancePro antes que nadie.",
    perkPricingTitle: "Precio especial de lanzamiento",
    perkPricingBody:
      "Fijo para los miembros fundadores mientras mantengas tu membresía activa.",
    perkVoteTitle: "Voz en lo que viene",
    perkVoteBody:
      "Lo que piden los miembros fundadores se construye primero. Tú nos dices qué necesita la red.",
    laterTitle: "Por qué ahora gana a más tarde",
    laterBody:
      "El estatus de miembro fundador se cierra el día que DancePro abre al público: no es algo que puedas ganar después. El precio de lanzamiento, el distintivo y la voz sobre lo que se construye pertenecen a este grupo y solo a este grupo. Todos los que se unan después empiezan de cero.",
    cta: "Únete a los miembros fundadores",
  },
  language: {
    label: "Idioma",
  },
};

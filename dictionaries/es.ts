import type { Dictionary } from "@/lib/i18n/types";

const es: Dictionary = {
  meta: {
    title: "Viñeta Bélgica 2027 | Precios, normas y novedades | Tolls.be",
    description:
      "Todo lo que necesita saber sobre la viñeta digital belga que se introducirá en 2027. Precios, requisitos, exenciones, periodos de validez y control.",
    ogAlt: "Tolls.be — portal de información sobre la viñeta belga 2027",
  },
  header: {
    subtitle: "Información sobre peajes en Bélgica",
    languageLabel: "Idioma",
    nav: [
      { label: "Viñeta belga", href: "#what" },
      { label: "Precios", href: "#prices" },
      { label: "Requisitos", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Guía de la viñeta belga",
    headline: "Viñeta belga 2027",
    subheadline:
      "Todo lo que necesita saber sobre la nueva viñeta de carretera digital de Bélgica para turismos.",
    supporting:
      "Encuentre información sobre precios, periodos de validez, requisitos de los vehículos, exenciones y control.",
    primaryCta: "Ver información de la viñeta",
    secondaryCta: "Últimas novedades",
    disclaimer:
      "Tolls.be es un sitio web de información independiente. El sistema de la viñeta belga aún está siendo finalizado por las autoridades belgas.",
    visualAlt:
      "Ilustración conceptual que resume la viñeta digital belga prevista: tipo de vehículo, estado, sistema y lanzamiento previsto",
    visualTitle: "Concepto de viñeta digital",
    visualSubtitle: "Viñeta de carretera belga · 2027",
    visualBadge: "Vista previa",
    visualCaption: "Concepto ilustrativo — no es un documento oficial",
    visualRows: [
      { label: "Vehículo", value: "Turismo" },
      { label: "Estado", value: "Vista previa informativa" },
      { label: "Sistema", value: "Vinculada a la matrícula" },
      { label: "Lanzamiento previsto", value: "Mayo de 2027" },
    ],
  },
  infoBox: {
    title: "La viñeta digital belga de un vistazo",
    note: "Datos clave sobre el sistema previsto. Los detalles pueden cambiar antes del lanzamiento oficial.",
    rows: [
      { label: "Lanzamiento", value: "Mayo de 2027" },
      { label: "Se aplica a", value: "Turismos de hasta 3,5 toneladas" },
      {
        label: "Sistema",
        value: "Viñeta digital vinculada a la matrícula",
      },
      { label: "Control", value: "Controles con cámaras ANPR" },
      { label: "Vehículos extranjeros", value: "Obligatoria" },
    ],
  },
  sections: {
    what: {
      title: "¿Qué es la viñeta belga?",
      paragraphs: [
        "Bélgica tiene previsto introducir una viñeta de carretera digital para los turismos que circulan por sus autopistas y carreteras regionales. En lugar de una pegatina física en el parabrisas, la viñeta sería un registro electrónico vinculado directamente a la matrícula del vehículo.",
        "En el sistema previsto, una viñeta adquirida se almacenaría en una base de datos central, sin nada que mostrar en el vehículo. El control se realizaría automáticamente comparando las matrículas leídas en la carretera con el registro de viñetas válidas.",
        "La medida pretende garantizar que todos los conductores que utilizan las carreteras belgas — incluidos los visitantes del extranjero — contribuyan de forma justa al mantenimiento de la red viaria. Tanto los turismos matriculados en Bélgica como en el extranjero necesitarían una viñeta válida.",
      ],
    },
    prices: {
      title: "Precios de la viñeta belga",
      intro:
        "Los siguientes precios son orientativos y se basan en la planificación actual. Las tarifas anuales dependen del vehículo, y hay periodos de validez más cortos disponibles para usuarios ocasionales y visitantes.",
      annualHeading: "Tarifas anuales y por vehículo",
      shortHeading: "Periodos de validez de corta duración",
      columns: { period: "Categoría", price: "Precio" },
      annual: [
        { label: "Anual", price: "100 €" },
        { label: "Vehículos eléctricos", price: "90 €", note: "Tarifa reducida" },
        { label: "Vehículos más antiguos", price: "125 €", note: "Mayores emisiones" },
      ],
      short: [
        { label: "1 día", price: "9 €" },
        { label: "10 días", price: "12 €" },
        { label: "1 mes", price: "19 €" },
        { label: "2 meses", price: "30 €" },
      ],
      disclaimer:
        "Los precios son provisionales y se muestran solo a título informativo. Las tarifas definitivas serán confirmadas por las autoridades belgas competentes antes del lanzamiento.",
    },
    who: {
      title: "¿Quién necesita una viñeta belga?",
      intro:
        "Se prevé que la viñeta se aplique a la mayoría de los turismos. Se espera que algunas categorías de vehículos estén exentas.",
      requiredTitle: "Obligatoria",
      required: [
        "Turismos de hasta 3,5 toneladas",
        "Vehículos matriculados en Bélgica",
        "Vehículos matriculados en el extranjero",
      ],
      exemptTitle: "Exentos",
      exempt: [
        "Motocicletas",
        "Tractores",
        "Autocares",
        "Vehículos de emergencia",
        "Vehículos de policía y defensa",
      ],
    },
    enforcement: {
      title: "¿Cómo funcionará el control?",
      intro:
        "El cumplimiento se comprobaría de forma digital, sin necesidad de inspección física ni peajes.",
      points: [
        {
          title: "Sistema digital",
          description:
            "Cada viñeta se registraría electrónicamente en un registro central, sin pegatina que mostrar.",
        },
        {
          title: "Vinculación con la matrícula",
          description:
            "La viñeta estaría vinculada a la matrícula del vehículo, de modo que la validez queda asociada a la propia matrícula.",
        },
        {
          title: "Cámaras ANPR",
          description:
            "Las cámaras de reconocimiento automático de matrículas (ANPR) leerían las matrículas y las compararían con el registro.",
        },
        {
          title: "Unidades de control móviles",
          description:
            "Las unidades de control móviles podrían realizar controles adicionales en la carretera por toda la red.",
        },
        {
          title: "Posibles multas",
          description:
            "Circular sin una viñeta válida puede conllevar una multa una vez finalizado el periodo de tolerancia.",
        },
      ],
    },
    timeline: {
      title: "Cronología",
      intro: "Hitos clave para la introducción de la viñeta belga.",
      steps: [
        {
          date: "2026",
          title: "Fase de preparación",
          description:
            "Se preparan y prueban los sistemas, la plataforma de registro y la infraestructura de control.",
        },
        {
          date: "Mayo de 2027",
          title: "Introducción de la viñeta",
          description:
            "Se prevé que la viñeta digital esté disponible y sea obligatoria para los turismos en las carreteras cubiertas.",
        },
        {
          date: "Julio de 2027",
          title: "Comienzo del control",
          description:
            "Se prevé que finalice el periodo de tolerancia, tras lo cual podrían aplicarse multas a los vehículos sin viñeta válida.",
        },
      ],
    },
  },
  faq: {
    title: "Preguntas frecuentes",
    intro: "Respuestas a las preguntas más habituales sobre la viñeta belga.",
    items: [
      {
        question: "¿Qué es la viñeta belga?",
        answer:
          "La viñeta belga es una viñeta de carretera digital prevista para los turismos que circulan por las autopistas y carreteras regionales belgas. Está vinculada electrónicamente a la matrícula del vehículo, por lo que no hay que mostrar ninguna pegatina física.",
      },
      {
        question: "¿Cuándo introducirá Bélgica la viñeta?",
        answer:
          "Según la planificación actual, se prevé que la viñeta digital se lance en mayo de 2027, y que el control y las multas comiencen tras un periodo de tolerancia a partir de julio de 2027.",
      },
      {
        question: "¿Necesitan los coches extranjeros una viñeta belga?",
        answer:
          "Sí. Se prevé que los turismos matriculados en el extranjero necesiten una viñeta válida para circular por las carreteras belgas cubiertas, al igual que los vehículos matriculados en Bélgica. Habría periodos de corta duración disponibles para los visitantes.",
      },
      {
        question: "¿Cuánto cuesta la viñeta belga?",
        answer:
          "Los precios anuales orientativos parten de unos 100 €, con 90 € para los vehículos eléctricos y 125 € para los vehículos más antiguos y contaminantes. Se prevén opciones de corta duración desde 9 € por un día hasta 30 € por dos meses. Las tarifas definitivas se confirmarán antes del lanzamiento.",
      },
      {
        question: "¿Necesitan las motocicletas una viñeta belga?",
        answer:
          "No. Se prevé que las motocicletas estén exentas de la viñeta, junto con los tractores, los autocares, los vehículos de emergencia y los vehículos de policía y defensa.",
      },
      {
        question: "¿Cómo se controla la viñeta?",
        answer:
          "El cumplimiento se comprobaría automáticamente mediante cámaras ANPR (reconocimiento automático de matrículas) y unidades de control móviles. Las matrículas leídas en la carretera se compararían con el registro central de viñetas válidas.",
      },
      {
        question: "¿Qué ocurre si circula sin viñeta?",
        answer:
          "Una vez finalizado el periodo de tolerancia en julio de 2027, circular sin una viñeta válida puede conllevar una multa. Los importes exactos de las sanciones serán fijados por las autoridades belgas competentes.",
      },
    ],
  },
  sources: {
    title: "Fuentes y verificación",
    paragraphs: [
      "La información de este sitio web se basa en anuncios de acceso público de las autoridades belgas.",
      "Los detalles de la viñeta prevista aún pueden cambiar. Antes de comprar una viñeta, verifique siempre los requisitos más recientes a través de los canales oficiales.",
    ],
  },
  newsletter: {
    badge: "Manténgase informado",
    title: "Reciba novedades sobre el lanzamiento de la viñeta belga",
    description:
      "Reciba un aviso cuando se confirmen los precios, las fechas y las normas oficiales. Solo enviamos novedades relevantes sobre la viñeta belga.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "usted@ejemplo.es",
    button: "Suscribirse",
    consentBefore:
      "Al suscribirse, acepta recibir novedades ocasionales por correo electrónico sobre la viñeta belga. Consulte nuestra ",
    consentAfter:
      " para saber cómo almacenamos y usamos su dirección de correo. Puede darse de baja en cualquier momento.",
    success: "Gracias. Está suscrito a las novedades sobre la viñeta belga.",
    error: "Algo salió mal. Inténtelo de nuevo en un momento.",
    submitting: "Suscribiendo…",
  },
  footer: {
    description:
      "Tolls.be es un servicio de información independiente sobre peajes de carretera y la viñeta digital belga. No está afiliado a ningún organismo público.",
    linksTitle: "Información",
    links: [
      { label: "Acerca de", href: "#" },
      { label: "Contacto", href: "mailto:info@tolls.be" },
      { label: "Política de privacidad", href: "#privacy" },
    ],
    languagesTitle: "Idiomas",
    disclaimerTitle: "Aviso importante",
    disclaimer:
      "Este sitio web solo ofrece información general. El sistema de la viñeta belga aún se está finalizando y los detalles pueden cambiar. Consulte siempre las fuentes oficiales del gobierno belga para obtener información confirmada.",
    rights: "Todos los derechos reservados.",
  },
  breadcrumb: {
    home: "Inicio",
    current: "Viñeta belga 2027",
  },
  cookies: {
    bannerTitle: "Preferencias de cookies",
    bannerDescription:
      "Usamos almacenamiento esencial para recordar su elección de cookies. Con su consentimiento, usamos herramientas de análisis para entender las visitas a páginas, tipos de dispositivo y ubicaciones aproximadas. Puede cambiar su elección en cualquier momento.",
    privacyLink: "Política de privacidad",
    acceptAll: "Aceptar todas",
    rejectNonEssential: "Rechazar no esenciales",
    managePreferences: "Gestionar preferencias",
    preferencesTitle: "Gestionar preferencias de cookies",
    savePreferences: "Guardar preferencias",
    close: "Cerrar",
    essentialTitle: "Esenciales",
    essentialDescription:
      "Guarda su elección de cookies en el navegador para no volver a preguntar en cada visita.",
    essentialAlwaysOn: "Siempre activas",
    analyticsTitle: "Análisis",
    analyticsDescription:
      "Nos ayuda a entender cómo usan el sitio los visitantes, incluidas visitas a páginas, tipos de dispositivo y ubicación aproximada. Solo se carga si usted lo acepta.",
    services: {
      vercel:
        "Vercel Analytics — estadísticas de visitas respetuosas con la privacidad (sin cookies publicitarias).",
      google:
        "Google Analytics — estadísticas de visitantes opcionales si las activa el propietario del sitio.",
      bing:
        "Microsoft Clarity — información de sesión opcional para análisis relacionados con Bing si está activado.",
    },
    manageLabel: "Gestionar cookies",
  },
};

export default es;

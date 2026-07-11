import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Política de privacidad",
    breadcrumb: "Política de privacidad",
    meta: {
      title: "Política de privacidad | Tolls.be",
      description:
        "Cómo Tolls.be recopila y utiliza datos personales: newsletter, cookies, analítica y servicios de terceros.",
    },
    h1: "Política de privacidad",
    updated: "Última actualización: 11 de julio de 2026",
    intro: [
      "Tolls.be es un sitio web informativo independiente sobre la viñeta digital belga. Esta política de privacidad explica qué datos personales recopilamos, por qué los usamos y qué derechos tiene usted según la legislación aplicable de protección de datos, incluido el RGPD.",
      "No vendemos datos personales. Solo tratamos datos necesarios para operar el sitio, responder consultas, enviar actualizaciones opcionales y — con su consentimiento — entender cómo se utiliza el sitio.",
    ],
    sections: [
      {
        heading: "¿Quién es responsable de sus datos?",
        paragraphs: [
          "El responsable del tratamiento de este sitio web es Tolls.be, contactable en info@tolls.be. Tolls.be no es un sitio gubernamental ni está afiliado a las autoridades belgas.",
        ],
      },
      {
        heading: "Qué datos recopilamos",
        bullets: [
          "Dirección de correo electrónico — si se suscribe a actualizaciones sobre la viñeta",
          "Preferencia de idioma — inferida de la URL que utiliza (p. ej. /en, /es)",
          "Elección de consentimiento de cookies — almacenada en su navegador para recordar su preferencia",
          "Datos de uso — solo si acepta cookies de analítica (visitas a páginas, ubicación aproximada, tipo de dispositivo/navegador)",
          "Datos técnicos — registros estándar de servidor y seguridad procesados por nuestro proveedor de alojamiento",
        ],
      },
      {
        heading: "Newsletter y actualizaciones por correo",
        paragraphs: [
          "Si se suscribe para recibir actualizaciones sobre la viñeta belga, recopilamos su dirección de correo y la versión de idioma del sitio que utilizó al registrarse.",
          "Usamos su correo solo para enviar actualizaciones ocasionales sobre la viñeta belga — por ejemplo cuando se confirmen precios, fechas o normas oficiales. No enviamos marketing no relacionado.",
          "Al enviar el formulario, su dirección de correo se almacena de forma segura en nuestra base de datos Supabase (alojada en la UE). Solo administradores autorizados del sitio pueden acceder a los registros de suscriptores. Puede darse de baja en cualquier momento contactando info@tolls.be.",
          "La base legal para el tratamiento de datos del newsletter es su consentimiento, otorgado al enviar el formulario. Puede retirar el consentimiento en cualquier momento.",
        ],
      },
      {
        heading: "Cookies y analítica",
        paragraphs: [
          "Usamos almacenamiento esencial del navegador para recordar su elección de consentimiento de cookies. Esto es necesario para no preguntarle en cada visita.",
          "Las herramientas de analítica solo se cargan si usted acepta mediante el banner de cookies. Nos ayudan a entender cómo los visitantes usan el sitio.",
        ],
        bullets: [
          "Vercel Analytics — estadísticas de visitas orientadas a la privacidad (tipo de dispositivo, país, páginas visitadas). Solo se carga con consentimiento.",
          "Google Analytics — estadísticas de visitantes opcionales si las habilita el propietario del sitio. Solo se carga con consentimiento.",
          "Microsoft Clarity — información opcional de sesiones para analítica relacionada con Bing si está habilitada. Solo se carga con consentimiento.",
        ],
      },
      {
        heading: "Servicios de terceros",
        paragraphs: [
          "Utilizamos encargados de confianza para operar el sitio web. Tratan datos según nuestras instrucciones y solo en la medida necesaria para prestar su servicio.",
        ],
        bullets: [
          "Vercel — alojamiento web, CDN e infraestructura de analítica",
          "Supabase — almacenamiento seguro en base de datos de direcciones de correo del newsletter",
          "Google — analítica opcional (Google Analytics) si está habilitada y consentida",
          "Microsoft — analítica opcional (Clarity) si está habilitada y consentida; la verificación de Bing usa solo una meta etiqueta y no establece cookies de analítica",
        ],
      },
      {
        heading: "Enlaces de afiliados y externos",
        paragraphs: [
          "Tolls.be es principalmente un sitio informativo. En el futuro podemos enlazar a servicios de terceros (por ejemplo canales oficiales de compra de viñetas o socios). Esos sitios tienen sus propias políticas de privacidad y pueden establecer sus propias cookies cuando los visite.",
          "Actualizaremos esta política si se introducen relaciones de afiliados.",
        ],
      },
      {
        heading: "Cuánto tiempo conservamos los datos",
        bullets: [
          "Direcciones de correo del newsletter — hasta que se dé de baja o nos pida eliminarlas",
          "Preferencia de consentimiento de cookies — hasta que borre el almacenamiento del navegador o actualicemos la versión de consentimiento",
          "Datos de analítica — conservados según la configuración de cada proveedor (normalmente agregados, retención limitada)",
          "Registros del servidor — retención a corto plazo por nuestro host por seguridad y fiabilidad",
        ],
      },
      {
        heading: "Sus derechos",
        paragraphs: [
          "Según su ubicación, puede tener derecho a acceder, rectificar, eliminar o restringir el tratamiento de sus datos personales, oponerse al tratamiento y a la portabilidad de datos. Cuando el tratamiento se basa en el consentimiento, puede retirarlo en cualquier momento sin afectar la licitud del tratamiento anterior.",
          "También tiene derecho a presentar una reclamación ante una autoridad de control. En Bélgica, es la Autoridad de Protección de Datos (Gegevensbeschermingsautoriteit / APD).",
          "Para ejercer sus derechos, contacte info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Contacto",
    contactText: "¿Preguntas sobre esta política de privacidad o sus datos personales? Contáctenos en",
  },
};

export default legal;

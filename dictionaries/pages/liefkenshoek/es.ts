import type { PageContent } from "@/lib/i18n/pages-types";

const liefkenshoekTunnel: PageContent = {
  navLabel: "Túnel Liefkenshoek",
  breadcrumb: "Peaje túnel Liefkenshoek",
  meta: {
    title: "Peaje túnel Liefkenshoek 2026 | Tarifas Amberes | Tolls.be",
    description:
      "Tarifas oficiales 2026 del túnel Liefkenshoek cerca de Amberes. Categoría 1 desde 4,40 €. Pago Teletol, tarjeta o efectivo. Las autopistas belgas son gratuitas para turismos.",
  },
  h1: "Peaje del túnel Liefkenshoek",
  lastUpdated: "Última actualización: julio de 2026",
  intro: [
    "Las autopistas belgas y la mayoría de carreteras regionales son gratuitas para turismos y vehículos de hasta 3,5 toneladas. La principal excepción es el túnel Liefkenshoek cerca de Amberes — una ruta de peaje bajo el Escalda.",
    "Esta página explica quién paga, las tarifas oficiales 2026 de NV Tunnel Liefkenshoek y cómo difiere este peaje del futuro viñeta digital previsto para 2027.",
  ],
  tollTable: {
    title: "Tarifas oficiales 2026",
    intro:
      "La tabla reproduce la tarifa publicada por NV Tunnel Liefkenshoek para 2026. Categoría 1: vehículos de hasta 3 m de altura (24 h). Categoría 2: más de 3 m, con tarifas diurnas más altas entre 06:01 y 21:59.",
    paymentMethod: "Forma de pago",
    category1: "Categoría 1 (24 h)",
    category2Night: "Categoría 2 (22:00–06:00)",
    category2Day: "Categoría 2 (06:01–21:59)",
    paymentTeletol: "Teletol badge y OBU",
    paymentCard: "Banco / gasolinera / tarjeta",
    paymentCash: "Efectivo",
    sourceNote:
      "Tarifas tomadas del sitio oficial del túnel Liefkenshoek para {year}. Los precios pueden cambiar — confirme las tarifas vigentes antes de viajar.",
    officialLink: "Ver tarifas oficiales en liefkenshoektunnel.be →",
  },
  blocks: [
    {
      heading: "¿Son gratuitas las autopistas belgas para coches?",
      paragraphs: [
        "Sí. Para turismos, motos y vehículos de hasta 3,5 t no hay peaje general en autopistas belgas.",
        "Los camiones de mercancías de más de 3,5 t — y ciertos N1 con código BC — tienen un peaje por kilómetro vía Viapass. No aplica a turismos normales.",
      ],
    },
    {
      heading: "¿Qué es el túnel Liefkenshoek?",
      paragraphs: [
        "El túnel Liefkenshoek (Liefkenshoektunnel) al oeste de Amberes une las orillas del Escalda. Lo opera NV Tunnel Liefkenshoek.",
        "A diferencia de la mayoría de autopistas, su uso tiene coste.",
      ],
    },
    {
      heading: "Categorías y altura",
      bullets: [
        "Categoría 1 — hasta 3 m: tarifa única 24 h",
        "Categoría 2 — más de 3 m: tarifa nocturna reducida, diurna más alta",
        "Autocaravanas y furgonetas altas en categoría 2",
      ],
    },
    {
      heading: "Pago",
      bullets: [
        "Teletol — tarifa más baja para coches frecuentes",
        "Tarjeta automática — banco, gasolinera o crédito",
        "Efectivo — tarifa publicada más alta",
        "OBU — común en camiones; aceptado al precio más bajo",
      ],
    },
    {
      heading: "Peaje de camiones (Viapass)",
      paragraphs: [
        "Viapass aplica a vehículos de mercancías de más de 3,5 t, no a turismos. Satellic es uno de seis proveedores OBU acreditados.",
      ],
    },
    {
      heading: "No es la viñeta de 2027",
      paragraphs: [
        "Desde mayo de 2027 se prevé una viñeta digital para turismos — distinta del peaje actual del túnel Liefkenshoek.",
      ],
    },
    {
      heading: "Fuentes",
      bullets: ["NV Tunnel Liefkenshoek — liefkenshoektunnel.be", "Viapass — viapass.be"],
    },
  ],
  faq: [
    {
      question: "¿Pago peaje en autopistas belgas con un coche normal?",
      answer: "No, en general hasta 3,5 t. El túnel Liefkenshoek cerca de Amberes es una excepción conocida.",
    },
    {
      question: "¿Cuánto cuesta el túnel para un coche normal?",
      answer: "Categoría 1 (hasta 3 m) 2026: 4,40 € (Teletol/OBU), 6,20 € (tarjeta), 8,00 € (efectivo) — 24 h.",
    },
    {
      question: "¿Por qué más caro de día para vehículos altos?",
      answer: "Categoría 2 de día: 17,60 € / 21,90 € / 25,00 €. De noche, tarifas como categoría 1.",
    },
    {
      question: "¿Mismo peaje para matrículas extranjeras?",
      answer: "Sí — importan altura y forma de pago.",
    },
    {
      question: "¿Es lo mismo que la viñeta 2027?",
      answer: "No — el túnel es peaje actual; la viñeta 2027 es un sistema futuro distinto.",
    },
  ],
  relatedTitle: "Información relacionada",
  cta: {
    title: "Viñeta belga prevista (2027)",
    text: "Consulte precios y calendario en nuestra guía principal.",
    button: "Ver guía de viñeta",
  },
};

export default liefkenshoekTunnel;

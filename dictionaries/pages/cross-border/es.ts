import type { PagesDictionary } from "@/lib/i18n/pages-types";

const crossBorder: Pick<
  PagesDictionary,
  | "belgium-vignette-netherlands"
  | "belgium-vignette-germany"
  | "belgium-vignette-france"
> = {
  "belgium-vignette-netherlands": {
    navLabel: "Conductores holandeses",
    breadcrumb: "Viñeta belga para conductores holandeses",
    meta: {
      title: "Viñeta belga para conductores holandeses 2027 | Tolls.be",
      description:
        "Guía para conductores de Países Bajos: viñeta belga desde mayo de 2027, opciones cortas desde 9 €, controles ANPR en matrículas NL y consejos en la frontera.",
    },
    h1: "Viñeta belga para conductores holandeses",
    intro: [
      "Si conduces desde Países Bajos hacia Bélgica — por trabajo, compras, vacaciones o tránsito — la viñeta digital belga prevista aplicará a tu coche desde mayo de 2027, igual que a los belgas.",
      "Esta página explica qué deben esperar los conductores holandeses: por qué existe la viñeta, qué opciones cortas convienen a viajes ocasionales y cómo funcionarán los controles automáticos de matrículas.",
    ],
    blocks: [
      {
        heading: "Por qué importa a los holandeses",
        paragraphs: [
          "Bélgica es un país de tránsito importante. Una gran parte de los kilómetros en autopistas y carreteras regionales belgas los recorren conductores extranjeros, incluidos decenas de miles de vehículos holandeses cada día.",
          "Las normas de la UE impiden cobrar solo a extranjeros, pero la viñeta afecta a todo coche holandés en las vías cubiertas. No hay régimen reducido para pendulares del sur de Países Bajos en los planes publicados.",
        ],
      },
      {
        heading: "Viajes cortos: viñetas de 1 y 10 días",
        paragraphs: [
          "La mayoría de visitantes holandeses no necesitarán viñeta anual. Los productos de corta duración están pensados para uso ocasional:",
        ],
        bullets: [
          "1 día — unos 9 € (ideal para un cruce o excursión)",
          "10 días — unos 12 € (vacaciones cortas o visita de varios días)",
          "1 mes — unos 19 € · 2 meses — unos 30 €",
        ],
      },
      {
        heading: "Patrones de viaje frecuentes",
        bullets: [
          "Excursiones de un día a Amberes, Gante o zonas comerciales belgas",
          "Tránsito a Francia, Luxemburgo o Alemania por Bélgica",
          "Rutas de fin de semana o vacaciones por E19, E40 o E25",
          "Desplazamientos transfronterizos desde Limburgo u otras provincias del sur",
        ],
      },
      {
        heading: "Control de matrículas holandesas",
        paragraphs: [
          "La viñeta es digital y vinculada a la matrícula — sin pegatina. Las cámaras ANPR en autopistas y carreteras regionales leerán matrículas NL y las compararán con el registro central.",
          "Compra y registra la viñeta antes de usar las vías cubiertas. Tras el periodo de tolerancia en julio de 2027, circular sin viñeta válida puede acarrear multa.",
        ],
      },
      {
        heading: "Mantente informado",
        paragraphs: [
          "Los planes pueden cambiar antes de la aprobación de la UE y la legislación belga definitiva. Noticias y resúmenes de fuentes: sitio hermano BelgiumVignette.be. Esta página de Tolls.be ofrece hechos de referencia estables para conductores holandeses.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Los coches holandeses necesitan viñeta belga?",
        answer:
          "Sí. Los turismos matriculados en Países Bajos hasta 3,5 t deberán llevar viñeta válida en las vías belgas cubiertas desde mayo de 2027.",
      },
      {
        question: "¿Puedo comprar solo una viñeta de un día?",
        answer:
          "Está prevista una viñeta de un día por unos 9 € para usuarios ocasionales. Los productos y precios finales se confirmarán antes del lanzamiento.",
      },
      {
        question: "¿Hay descuento para residentes fronterizos?",
        answer:
          "No hay régimen especial para pendulares del sur de Países Bajos en los planes publicados actualmente, aunque el debate político continúa.",
      },
    ],
    relatedTitle: "Información relacionada",
    cta: {
      title: "Guía de referencia completa",
      text: "Consulta precios, exenciones, controles y calendario en las páginas principales.",
      button: "Ver toda la información sobre la viñeta",
    },
  },
  "belgium-vignette-germany": {
    navLabel: "Conductores alemanes",
    breadcrumb: "Viñeta belga para conductores alemanes",
    meta: {
      title: "Viñeta belga para conductores alemanes 2027 | Tolls.be",
      description:
        "Guía para conductores de Alemania: viñeta digital desde mayo de 2027, tarifas cortas, rutas de tránsito y controles ANPR para matrículas DE.",
    },
    h1: "Viñeta belga para conductores alemanes",
    intro: [
      "Los conductores alemanes que usen autopistas o carreteras regionales belgas — en tránsito a Francia, Benelux, puertos de ferry o vacaciones — necesitarán la viñeta digital belga prevista desde mayo de 2027.",
      "Esta guía cubre opciones de validez, precios orientativos y cómo se aplica el control a vehículos matriculados en Alemania.",
    ],
    blocks: [
      {
        heading: "Bélgica como corredor de tránsito",
        paragraphs: [
          "Muchas rutas alemanas hacia Francia, los puertos del Canal o Europa occidental pasan por Bélgica. La viñeta aplica a las vías del sistema, no solo a quienes paran en Bélgica.",
          "Afecta a turismos hasta 3,5 t. Motos, camiones (sistema por kilómetro aparte) y emergencias deberían estar exentos.",
        ],
      },
      {
        heading: "Qué periodo elegir",
        paragraphs: ["Elige según la frecuencia de uso de carreteras belgas:"],
        bullets: [
          "Anual — unos 100 € si conduces con regularidad en Bélgica",
          "10 días — unos 12 € para vacaciones o viaje de negocios",
          "1 día — unos 9 € para un tránsito único",
        ],
      },
      {
        heading: "Rutas típicas desde Alemania",
        bullets: [
          "Aquisgrán → Lieja → oeste (corredor E40)",
          "Colonia/Düsseldorf → Bruselas o Amberes",
          "Sarre → Luxemburgo/Bélgica",
          "Tránsito a Calais o Dunkerque por Bélgica",
        ],
      },
      {
        heading: "Registro digital de matrículas DE",
        paragraphs: [
          "Registras tu matrícula alemana online al comprar. Controles ANPR previstos en autopistas y carreteras regionales seleccionadas. La viñeta aún no está a la venta.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Los coches alemanes necesitan viñeta belga?",
        answer:
          "Sí. Los turismos extranjeros, incluidos los matriculados en Alemania, deberán llevar viñeta válida en las vías cubiertas.",
      },
      {
        question: "Solo transito Bélgica un día — ¿qué necesito?",
        answer:
          "Está prevista una viñeta de un día para uso ocasional. Confirma los productos finales cuando el sistema esté activo.",
      },
      {
        question: "¿Mi viñeta austriaca o suiza cubre Bélgica?",
        answer:
          "No. Bélgica tendrá su propio sistema digital, separado de Austria, Suiza u otros países.",
      },
    ],
    relatedTitle: "Información relacionada",
    cta: {
      title: "Guía de referencia completa",
      text: "Consulta precios, exenciones, controles y calendario en las páginas principales.",
      button: "Ver toda la información sobre la viñeta",
    },
  },
  "belgium-vignette-france": {
    navLabel: "Conductores franceses",
    breadcrumb: "Viñeta belga para conductores franceses",
    meta: {
      title: "Viñeta belga para conductores franceses 2027 | Tolls.be",
      description:
        "Guía para conductores de Francia: viñeta digital desde mayo de 2027, rutas por Valonia, precios cortos y control por matrícula.",
    },
    h1: "Viñeta belga para conductores franceses",
    intro: [
      "Los conductores franceses que entren en Bélgica — desde Lille y Hauts-de-France o rutas vacacionales por Valonia — necesitarán la viñeta digital prevista para turismos desde mayo de 2027.",
      "Esta página resume opciones de corta duración y el control para vehículos matriculados en Francia.",
    ],
    blocks: [
      {
        heading: "Viajes transfronterizos desde Francia",
        paragraphs: [
          "Valonia comparte una larga frontera con Francia. Muchos franceses cruzan a diario por trabajo, familia o compras. La viñeta debería aplicar a matrículas belgas y extranjeras en las vías cubiertas.",
          "Al ser digital, los conductores franceses registran la matrícula antes del viaje — sin pegatina en la frontera.",
        ],
      },
      {
        heading: "Viñetas de corta duración",
        bullets: [
          "1 día — unos 9 €",
          "10 días — unos 12 €",
          "1 mes — unos 19 € · 2 meses — unos 30 €",
          "Anual — unos 100 € (usuarios habituales)",
        ],
      },
      {
        heading: "Puntos de entrada frecuentes",
        bullets: [
          "Lille → corredor Kortrijk / Gante",
          "Charleville-Mézières → Namur / Lieja",
          "Reims → Bruselas vía E411/E42",
          "Tráfico vacacional a la costa belga por E40",
        ],
      },
      {
        heading: "Multas",
        paragraphs: [
          "Tras el periodo de tolerancia hasta julio de 2027, circular sin viñeta válida puede acarrear multas desde 70 €. Controles previstos con cámaras ANPR y unidades móviles leyendo matrículas francesas.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Los coches franceses necesitan viñeta belga?",
        answer:
          "Sí. Los turismos matriculados en Francia hasta 3,5 t deberán llevar viñeta en las vías belgas cubiertas desde mayo de 2027.",
      },
      {
        question: "Cruzo la frontera cada semana — ¿qué producto?",
        answer:
          "Los usuarios habituales pueden preferir viñeta anual; visitantes ocasionales, de 10 días o mensual.",
      },
      {
        question: "¿Cuándo podré comprar la viñeta?",
        answer:
          "La venta no está abierta. Lanzamiento previsto en mayo de 2027. Sigue las noticias en BelgiumVignette.be.",
      },
    ],
    relatedTitle: "Información relacionada",
    cta: {
      title: "Guía de referencia completa",
      text: "Consulta precios, exenciones, controles y calendario en las páginas principales.",
      button: "Ver toda la información sobre la viñeta",
    },
  },
};

export default crossBorder;

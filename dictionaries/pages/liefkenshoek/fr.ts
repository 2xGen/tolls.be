import type { PageContent } from "@/lib/i18n/pages-types";

const liefkenshoekTunnel: PageContent = {
  navLabel: "Tunnel Liefkenshoek",
  breadcrumb: "Péage tunnel Liefkenshoek",
  meta: {
    title: "Péage tunnel Liefkenshoek 2026 | Tarifs Anvers | Tolls.be",
    description:
      "Tarifs officiels 2026 du tunnel Liefkenshoek près d'Anvers. Catégorie 1 dès 4,40 €. Paiement Teletol, carte ou espèces. Les autoroutes belges restent gratuites pour les voitures.",
  },
  h1: "Péage du tunnel Liefkenshoek",
  lastUpdated: "Dernière mise à jour : juillet 2026",
  intro: [
    "Les autoroutes belges et la plupart des routes régionales sont sans péage pour les voitures particulières et les véhicules jusqu'à 3,5 tonnes. La principale exception pour le trafic automobile est le tunnel Liefkenshoek près d'Anvers — un itinéraire payant sous l'Escaut.",
    "Cette page explique qui paie, les tarifs officiels 2026 publiés par NV Tunnel Liefkenshoek, et en quoi ce péage existant diffère de la future vignette routière numérique prévue pour 2027.",
  ],
  tollTable: {
    title: "Tarifs officiels 2026",
    intro:
      "Le tableau reprend la grille publiée par NV Tunnel Liefkenshoek pour 2026. Catégorie 1 : véhicules jusqu'à 3 m de hauteur (24 h/24). Catégorie 2 : véhicules de plus de 3 m, avec tarifs de jour plus élevés entre 06 h 01 et 21 h 59.",
    paymentMethod: "Mode de paiement",
    category1: "Catégorie 1 (24 h/24)",
    category2Night: "Catégorie 2 (22 h 00–06 h 00)",
    category2Day: "Catégorie 2 (06 h 01–21 h 59)",
    paymentTeletol: "Badge Teletol & OBU",
    paymentCard: "Banque / station / carte bancaire",
    paymentCash: "Espèces",
    sourceNote:
      "Tarifs repris du site officiel du tunnel Liefkenshoek pour {year}. Les prix peuvent changer — vérifiez toujours les tarifs en vigueur avant de partir.",
    officialLink: "Voir les tarifs officiels sur liefkenshoektunnel.be →",
  },
  blocks: [
    {
      heading: "Les autoroutes belges sont-elles gratuites pour les voitures ?",
      paragraphs: [
        "Oui. Pour les voitures particulières, motos et véhicules jusqu'à 3,5 tonnes, il n'y a pas de péage autoroutier général en Belgique aujourd'hui.",
        "Les poids lourds de transport de marchandises de plus de 3,5 tonnes — et certains véhicules N1 code carrosserie BC — sont soumis à une redevance kilométrique distincte via Viapass. Ce système PL n'est pas requis pour les voitures particulières ordinaires.",
      ],
    },
    {
      heading: "Qu'est-ce que le tunnel Liefkenshoek ?",
      paragraphs: [
        "Le tunnel Liefkenshoek (Liefkenshoektunnel) est un tunnel à l'ouest d'Anvers reliant les rives gauche et droite de l'Escaut. Il est exploité par NV Tunnel Liefkenshoek.",
        "Contrairement à la plupart des autoroutes belges, son utilisation est payante. D'autres traversées de l'Escaut peuvent exister selon votre itinéraire.",
      ],
    },
    {
      heading: "Catégories de véhicules et hauteur",
      paragraphs: [
        "Le péage dépend de la hauteur du véhicule et du mode de paiement, pas du pays d'immatriculation.",
      ],
      bullets: [
        "Catégorie 1 — véhicules jusqu'à 3 m : tarif unique 24 h/24",
        "Catégorie 2 — véhicules de plus de 3 m : tarif nuit réduit (22 h 00–06 h 00), tarif jour plus élevé (06 h 01–21 h 59)",
        "Camping-cars, utilitaires et camions de plus de 3 m relèvent de la catégorie 2",
      ],
    },
    {
      heading: "Comment payer",
      paragraphs: [
        "NV Tunnel Liefkenshoek accepte plusieurs modes de paiement. Le badge Teletol ou l'OBU offre le tarif le plus bas ; la carte bancaire aux voies automatiques est intermédiaire ; les espèces correspondent au tarif publié le plus élevé.",
      ],
      bullets: [
        "Badge Teletol — abonnement pour usagers fréquents (tarifs voiture les plus bas)",
        "Voies automatiques carte — banque, station-service ou carte bancaire",
        "Espèces — aux voies prévues",
        "OBU — courant pour les poids lourds ; accepté au tarif le plus bas au tunnel",
      ],
    },
    {
      heading: "Péage poids lourds (Viapass) — distinct du tunnel",
      paragraphs: [
        "La redevance kilométrique Viapass s'applique aux véhicules de marchandises de plus de 3,5 tonnes (et N1/BC éligibles), pas aux voitures particulières sur le réseau routier général.",
        "Viapass est l'entité interrégionale qui organise cette redevance en Flandre, Wallonie et Bruxelles. Six prestataires agréés délivrent les OBU — Satellic en est un, pas le seul.",
      ],
    },
    {
      heading: "Différent de la vignette 2027 prévue",
      paragraphs: [
        "La Belgique prévoit une nouvelle vignette numérique pour les voitures à partir de mai 2027, distincte du péage actuel du tunnel Liefkenshoek.",
      ],
    },
    {
      heading: "Sources et liens officiels",
      bullets: [
        "NV Tunnel Liefkenshoek — tarifs et Teletol : liefkenshoektunnel.be",
        "Viapass — redevance kilométrique PL : viapass.be",
      ],
    },
  ],
  faq: [
    {
      question: "Paie-t-on un péage sur les autoroutes belges en voiture ?",
      answer:
        "Non, en règle générale pour les voitures jusqu'à 3,5 t. Le tunnel Liefkenshoek près d'Anvers est une exception notable.",
    },
    {
      question: "Combien coûte le tunnel pour une voiture normale ?",
      answer:
        "Catégorie 1 (hauteur jusqu'à 3 m) en 2026 : 4,40 € (Teletol/OBU), 6,20 € (carte), 8,00 € (espèces) — 24 h/24.",
    },
    {
      question: "Pourquoi plus cher le jour pour les grands véhicules ?",
      answer:
        "Catégorie 2 (plus de 3 m) : 17,60 € / 21,90 € / 25,00 € entre 06 h 01 et 21 h 59. La nuit (22 h 00–06 h 00), les tarifs catégorie 2 correspondent à la catégorie 1.",
    },
    {
      question: "Les voitures étrangères paient-elles le même tarif ?",
      answer: "Oui — hauteur et mode de paiement comptent, pas le pays d'immatriculation.",
    },
    {
      question: "Est-ce la même chose que la vignette 2027 ?",
      answer: "Non. Le tunnel est un péage existant pour cet itinéraire ; la vignette 2027 est un système futur distinct.",
    },
  ],
  relatedTitle: "Informations connexes",
  cta: {
    title: "Vignette Belgique prévue (2027)",
    text: "Consultez prix, conditions et calendrier dans notre guide principal.",
    button: "Voir le guide vignette",
  },
};

export default liefkenshoekTunnel;

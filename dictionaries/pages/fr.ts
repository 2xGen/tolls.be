import type { PagesDictionary } from "@/lib/i18n/pages-types";
import crossBorder from "./cross-border/fr";
import liefkenshoekTunnel from "./liefkenshoek/fr";

const pages = {
  "belgium-vignette": {
    navLabel: "Vignette Belgique",
    breadcrumb: "Vignette Belgique",
    meta: {
      title: "Vignette Belgique : guide complet 2027 | Tolls.be",
      description:
        "Un guide complet sur la vignette belge — la vignette routière numérique prévue pour les voitures particulières. Ce qu'elle est, qui la doit, prix et contrôle.",
    },
    h1: "La vignette Belgique",
    intro: [
      "La vignette Belgique est une vignette routière numérique prévue pour les voitures particulières empruntant les autoroutes et routes régionales belges. Au lieu d'un autocollant physique sur le pare-brise, elle devrait être un enregistrement électronique lié directement à votre plaque d'immatriculation.",
      "Ce guide rassemble tout ce que l'on sait actuellement sur la vignette Belgique : ce qu'elle est, qui en aura besoin, combien elle devrait coûter et comment la conformité sera contrôlée.",
    ],
    blocks: [
      {
        heading: "Ce qu'est la vignette Belgique",
        paragraphs: [
          "Dans le système prévu, l'achat d'une vignette enregistre votre plaque d'immatriculation dans une base de données centrale. Il n'y a aucun autocollant à afficher ni rien à apposer sur votre pare-brise.",
          "Comme la vignette est liée à la plaque, la validité suit le véhicule. Le contrôle devrait être entièrement automatique, comparant les plaques lues sur la route au registre des vignettes valides.",
        ],
      },
      {
        heading: "Qui aura besoin d'une vignette Belgique",
        paragraphs: [
          "La vignette devrait s'appliquer aux voitures particulières jusqu'à 3,5 tonnes, qu'elles soient immatriculées en Belgique ou à l'étranger.",
        ],
        bullets: [
          "Voitures particulières jusqu'à 3,5 tonnes",
          "Véhicules immatriculés en Belgique",
          "Véhicules immatriculés à l'étranger",
          "Les motos, tracteurs, autocars et véhicules de secours devraient être exemptés",
        ],
      },
      {
        heading: "Prix attendus",
        paragraphs: [
          "Les prix annuels indicatifs commencent autour de 100 €, avec un tarif réduit pour les véhicules électriques et un tarif plus élevé pour les voitures plus anciennes et plus polluantes. Des périodes plus courtes sont prévues pour les usagers occasionnels et les visiteurs.",
          "Consultez la page dédiée au prix de la vignette Belgique pour le détail complet des tarifs annuels et de courte durée.",
        ],
      },
      {
        heading: "Comment fonctionnera le contrôle",
        paragraphs: [
          "La conformité devrait être contrôlée à l'aide de caméras ANPR (reconnaissance automatique des plaques d'immatriculation) et d'unités de contrôle mobiles, sans postes de péage ni inspections physiques.",
          "Une fois la période de tolérance terminée, rouler sans vignette valide peut entraîner une amende.",
        ],
      },
    ],
    faq: [
      {
        question: "Quand la vignette Belgique sera-t-elle lancée ?",
        answer:
          "La planification actuelle prévoit un lancement en mai 2027, le contrôle et les amendes débutant après une période de tolérance à partir de juillet 2027.",
      },
      {
        question: "La vignette Belgique est-elle un autocollant physique ?",
        answer:
          "Non. Elle devrait être un enregistrement numérique lié à votre plaque d'immatriculation, il n'y a donc rien à afficher dans le véhicule.",
      },
      {
        question: "Les voitures étrangères ont-elles besoin d'une vignette Belgique ?",
        answer:
          "Oui. Les voitures particulières immatriculées à l'étranger devraient avoir besoin d'une vignette valide, tout comme les véhicules belges.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Consultez toutes les informations sur la vignette Belgique",
      text: "Découvrez les prix, les conditions, les exemptions, le calendrier et les questions fréquentes sur la page d'information principale.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
  "belgium-vignette-price": {
    navLabel: "Prix de la vignette",
    breadcrumb: "Prix vignette Belgique",
    meta: {
      title: "Prix vignette Belgique 2027 | Tarifs annuels et courte durée | Tolls.be",
      description:
        "Prix de la vignette Belgique pour 2027 : tarifs annuels indicatifs à partir de 100 €, tarif réduit pour les voitures électriques et options courtes dès 9 €.",
    },
    h1: "Prix de la vignette Belgique",
    intro: [
      "Combien coûtera la vignette Belgique ? Cette page présente les prix indicatifs de la vignette Belgique selon la planification actuelle, couvrant à la fois les tarifs annuels et les périodes de courte durée pour les conducteurs occasionnels et les visiteurs.",
      "Tous les montants sont provisoires. Les tarifs définitifs seront confirmés par les autorités belges compétentes avant le lancement.",
    ],
    blocks: [
      {
        heading: "Tarifs annuels et selon le véhicule",
        paragraphs: [
          "La vignette annuelle standard devrait coûter environ 100 €. Les véhicules électriques devraient bénéficier d'un tarif réduit, tandis que les voitures plus anciennes et plus polluantes paieraient davantage.",
        ],
      },
      {
        heading: "Vignettes de courte durée",
        paragraphs: [
          "Pour les visiteurs et les usagers occasionnels, des périodes de validité plus courtes sont prévues — d'une seule journée à deux mois — afin de ne payer que pour le temps où vous utilisez réellement les routes belges.",
        ],
      },
      {
        heading: "Ce qui influence le prix",
        bullets: [
          "Le type de véhicule (par exemple électrique par rapport aux voitures plus polluantes)",
          "La période de validité choisie (annuelle ou courte durée)",
          "Le recours à des options visiteurs de courte durée plutôt qu'à une vignette annuelle",
        ],
      },
      {
        heading: "Ces prix sont-ils définitifs ?",
        paragraphs: [
          "Non. Les prix indiqués ici sont indicatifs et fournis à titre d'information uniquement. Confirmez toujours les tarifs en vigueur via les canaux officiels avant d'acheter une vignette.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte la vignette Belgique par an ?",
        answer:
          "Le prix annuel indicatif est d'environ 100 €, avec environ 90 € pour les véhicules électriques et 125 € pour les voitures plus anciennes et plus polluantes. Les chiffres sont provisoires.",
      },
      {
        question: "Existe-t-il une vignette Belgique de courte durée ?",
        answer:
          "Oui. Des périodes de courte durée sont prévues à partir de 9 € pour un jour, 12 € pour dix jours, 19 € pour un mois et 30 € pour deux mois.",
      },
      {
        question: "Les voitures électriques paieront-elles moins ?",
        answer:
          "Un tarif réduit pour les véhicules électriques est attendu, mais les tarifs définitifs seront confirmés avant le lancement.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Consultez toutes les informations sur la vignette Belgique",
      text: "Découvrez les conditions, les exemptions, le calendrier et les questions fréquentes sur la page d'information principale.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
  "belgium-vignette-foreign-cars": {
    navLabel: "Véhicules étrangers",
    breadcrumb: "Vignette pour véhicules étrangers",
    meta: {
      title: "Vignette Belgique pour véhicules étrangers | Règles 2027 | Tolls.be",
      description:
        "Les voitures étrangères ont-elles besoin d'une vignette Belgique ? Les voitures immatriculées à l'étranger devraient avoir besoin d'une vignette numérique valide.",
    },
    h1: "Vignette Belgique pour véhicules étrangers",
    intro: [
      "Les voitures étrangères ont-elles besoin d'une vignette Belgique ? Selon la planification actuelle, oui : les voitures particulières immatriculées à l'étranger devraient avoir besoin d'une vignette valide pour emprunter les routes belges concernées, exactement comme les véhicules immatriculés en Belgique.",
      "Cette page explique ce que le système prévu signifie pour les visiteurs qui entrent en Belgique depuis l'étranger.",
    ],
    blocks: [
      {
        heading: "La vignette s'applique aux véhicules étrangers",
        paragraphs: [
          "La vignette Belgique devrait s'appliquer quel que soit le pays d'immatriculation d'une voiture. Les visiteurs des pays voisins et d'ailleurs auraient besoin d'une vignette valide au même titre que les conducteurs locaux.",
        ],
      },
      {
        heading: "Options de courte durée pour les visiteurs",
        paragraphs: [
          "Comme de nombreux conducteurs étrangers n'utilisent les routes belges que pour un court trajet, des vignettes de courte durée sont prévues afin que les visiteurs n'aient pas à acheter une année complète.",
        ],
        bullets: [
          "1 jour — pour une traversée rapide ou une excursion",
          "10 jours — pour un court séjour",
          "1 ou 2 mois — pour des séjours plus longs",
        ],
      },
      {
        heading: "Comment se déroulent les contrôles pour les plaques étrangères",
        paragraphs: [
          "La vignette est liée à la plaque d'immatriculation, et les caméras ANPR devraient lire les plaques étrangères comme elles lisent les plaques belges. Il n'y a rien à afficher dans la voiture.",
        ],
      },
      {
        heading: "Avant de voyager",
        paragraphs: [
          "Les détails du système prévu peuvent encore changer. Avant d'entrer en Belgique, confirmez toujours les conditions en vigueur et achetez toute vignette requise via les canaux officiels.",
        ],
      },
    ],
    faq: [
      {
        question: "Les voitures étrangères ont-elles besoin d'une vignette Belgique ?",
        answer:
          "Oui. Les voitures particulières immatriculées à l'étranger devraient avoir besoin d'une vignette valide pour emprunter les routes belges concernées, au même titre que les véhicules immatriculés en Belgique.",
      },
      {
        question: "Les visiteurs peuvent-ils acheter une vignette de courte durée ?",
        answer:
          "Oui. Des périodes de courte durée d'un jour à deux mois sont prévues afin que les visiteurs ne paient que pour le temps où ils utilisent les routes belges.",
      },
      {
        question: "Comment les plaques étrangères sont-elles contrôlées ?",
        answer:
          "Les caméras ANPR devraient lire les plaques d'immatriculation étrangères et les comparer au registre central des vignettes valides.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Consultez toutes les informations sur la vignette Belgique",
      text: "Découvrez les prix, les conditions, les exemptions, le calendrier et les questions fréquentes sur la page d'information principale.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
  ...crossBorder,
  "liefkenshoek-tunnel": liefkenshoekTunnel,
  "buy-belgium-vignette": {
    navLabel: "Acheter la vignette",
    breadcrumb: "Acheter une vignette Belgique",
    meta: {
      title: "Acheter une vignette Belgique 2027 | Comment et où | Tolls.be",
      description:
        "Comment acheter une vignette Belgique lors du lancement du système numérique en 2027. Les étapes prévues, ce qu'il vous faut et comment rester informé.",
    },
    h1: "Comment acheter une vignette Belgique",
    intro: [
      "La vignette Belgique n'est pas encore en vente. Le système numérique devrait être lancé en mai 2027, et cette page explique comment l'achat d'une vignette fonctionnera probablement une fois qu'elle sera disponible.",
      "Comme la vignette est numérique et liée à votre plaque d'immatriculation, la procédure devrait être rapide et entièrement en ligne.",
    ],
    blocks: [
      {
        heading: "La vignette n'est pas encore en vente",
        paragraphs: [
          "Il n'existe actuellement aucune vignette Belgique officielle à acheter. Méfiez-vous de tout site prétendant en vendre une avant le lancement officiel. Cette page sera mise à jour dès que les canaux de vente officiels seront confirmés.",
        ],
      },
      {
        heading: "Comment l'achat devrait fonctionner",
        paragraphs: [
          "Une fois en service, vous devriez saisir votre plaque d'immatriculation, choisir une période de validité, payer en ligne et voir la vignette enregistrée électroniquement — sans autocollant envoyé ni affiché.",
        ],
        bullets: [
          "Saisissez votre plaque d'immatriculation et le pays d'immatriculation",
          "Choisissez une période annuelle ou de courte durée",
          "Payez en ligne",
          "Votre plaque est enregistrée — rien à afficher",
        ],
      },
      {
        heading: "Ce dont vous aurez besoin",
        bullets: [
          "Le numéro de plaque d'immatriculation de votre véhicule",
          "Le pays où le véhicule est immatriculé",
          "Un moyen de paiement pour l'achat en ligne",
        ],
      },
      {
        heading: "Restez informé du lancement",
        paragraphs: [
          "Inscrivez-vous ci-dessous pour être averti dès que les prix, dates et canaux de vente officiels de la vignette Belgique seront confirmés.",
        ],
      },
    ],
    faq: [
      {
        question: "Puis-je acheter une vignette Belgique maintenant ?",
        answer:
          "Non. La vignette Belgique n'est pas encore disponible. Le système numérique devrait être lancé en mai 2027.",
      },
      {
        question: "Où pourrai-je l'acheter ?",
        answer:
          "Les canaux de vente officiels n'ont pas encore été confirmés. Cette page sera mise à jour dès qu'ils seront annoncés par les autorités belges.",
      },
      {
        question: "Vais-je recevoir un autocollant ?",
        answer:
          "Non. La vignette devrait être numérique et liée à votre plaque d'immatriculation, il n'y a donc rien à recevoir ni à afficher.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Consultez toutes les informations sur la vignette Belgique",
      text: "Découvrez les prix, les conditions, les exemptions, le calendrier et les questions fréquentes sur la page d'information principale.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
} satisfies PagesDictionary;

export default pages;

import type { PagesDictionary } from "@/lib/i18n/pages-types";

const crossBorder: Pick<
  PagesDictionary,
  | "belgium-vignette-netherlands"
  | "belgium-vignette-germany"
  | "belgium-vignette-france"
> = {
  "belgium-vignette-netherlands": {
    navLabel: "Conducteurs néerlandais",
    breadcrumb: "Vignette Belgique pour les Néerlandais",
    meta: {
      title: "Vignette Belgique pour conducteurs néerlandais 2027 | Tolls.be",
      description:
        "Guide pour les automobilistes néerlandais : vignette Belgique dès mai 2027, options courtes dès 9 €, contrôles ANPR sur plaques NL et conseils pratiques aux frontières.",
    },
    h1: "Vignette Belgique pour les conducteurs néerlandais",
    intro: [
      "Si vous roulez des Pays-Bas vers la Belgique — pour le travail, les courses, les vacances ou en transit — la vignette numérique belge prévue s'appliquera à votre voiture dès mai 2027, comme pour les automobilistes belges.",
      "Cette page explique ce que les conducteurs néerlandais doient savoir : pourquoi la vignette existe, quelles options courtes conviennent aux trajets occasionnels et comment les contrôles automatiques de plaques fonctionneront pour les véhicules immatriculés aux Pays-Bas.",
    ],
    blocks: [
      {
        heading: "Pourquoi c'est important pour les Néerlandais",
        paragraphs: [
          "La Belgique est un pays de transit majeur. Une large part des kilomètres parcourus sur les autoroutes et routes régionales belges l'est par des automobilistes étrangers, dont des dizaines de milliers de véhicules néerlandais chaque jour.",
          "Les règles de l'UE imposent que la Belgique ne facture pas uniquement les étrangers — mais la vignette concerne tout de même chaque voiture particulière néerlandaise sur les routes concernées. Aucun régime réduit pour les pendulaires du sud des Pays-Bas n'est prévu dans les plans publiés.",
        ],
      },
      {
        heading: "Courts trajets : vignettes 1 jour et 10 jours",
        paragraphs: [
          "La plupart des visiteurs néerlandais n'auront pas besoin d'une vignette annuelle. Des produits de courte durée sont prévus pour un usage occasionnel :",
        ],
        bullets: [
          "1 jour — environ 9 € (idéal pour une traversée ou une journée)",
          "10 jours — environ 12 € (court séjour ou week-end)",
          "1 mois — environ 19 € · 2 mois — environ 30 €",
        ],
      },
      {
        heading: "Trajets fréquents depuis les Pays-Bas",
        bullets: [
          "Journées à Anvers, Gand ou zones commerciales belges",
          "Transit vers la France, le Luxembourg ou l'Allemagne via la Belgique",
          "Week-ends ou vacances via l'E19, l'E40 ou l'E25",
          "Navette transfrontalière depuis le Limbourg ou d'autres provinces du sud",
        ],
      },
      {
        heading: "Contrôle des plaques néerlandaises",
        paragraphs: [
          "La vignette est numérique et liée à la plaque — pas d'autocollant. Des caméras ANPR sur autoroutes et routes régionales devraient lire les plaques NL et les comparer au registre central.",
          "Achetez et enregistrez la vignette avant d'emprunter les routes concernées. Après la période de tolérance en juillet 2027, rouler sans vignette valide peut entraîner une amende.",
        ],
      },
      {
        heading: "Restez informé",
        paragraphs: [
          "Les plans peuvent encore évoluer avant l'approbation de l'UE et la législation belge définitive. Pour l'actualité et les résumés de sources : le site sœur BelgiumVignette.be. Cette page Tolls.be présente les faits de référence stables pour les conducteurs néerlandais.",
        ],
      },
    ],
    faq: [
      {
        question: "Les voitures néerlandaises ont-elles besoin d'une vignette belge ?",
        answer:
          "Oui. Les voitures particulières immatriculées aux Pays-Bas (jusqu'à 3,5 t) devraient avoir une vignette valide sur les routes belges concernées dès mai 2027.",
      },
      {
        question: "Puis-je acheter uniquement une vignette d'un jour ?",
        answer:
          "Une vignette d'un jour d'environ 9 € est prévue pour les usagers occasionnels. Les produits et tarifs définitifs seront confirmés avant le lancement.",
      },
      {
        question: "Existe-t-il une réduction pour les habitants près de la frontière ?",
        answer:
          "Aucun régime spécial pour les pendulaires du sud des Pays-Bas n'est inclus dans les plans publiés actuellement, bien que le débat politique se poursuive.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Guide de référence complet",
      text: "Consultez les prix, exemptions, contrôles et le calendrier sur les pages principales.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
  "belgium-vignette-germany": {
    navLabel: "Conducteurs allemands",
    breadcrumb: "Vignette Belgique pour les Allemands",
    meta: {
      title: "Vignette Belgique pour conducteurs allemands 2027 | Tolls.be",
      description:
        "Guide pour les automobilistes allemands : vignette numérique dès mai 2027, tarifs courts, routes de transit et contrôles ANPR pour plaques DE.",
    },
    h1: "Vignette Belgique pour les conducteurs allemands",
    intro: [
      "Les automobilistes allemands qui empruntent les autoroutes ou routes régionales belges — en transit vers la France, le Benelux, les ports ferry ou en vacances — auront besoin de la vignette numérique belge prévue dès mai 2027.",
      "Ce guide couvre les options de validité, les prix indicatifs et l'application des contrôles aux véhicules immatriculés en Allemagne.",
    ],
    blocks: [
      {
        heading: "La Belgique comme corridor de transit",
        paragraphs: [
          "De nombreuses routes allemandes vers la France, les ports de la Manche ou l'Europe occidentale passent par la Belgique. La vignette s'applique aux routes du système, pas seulement aux véhicules qui s'arrêtent en Belgique.",
          "Sont concernées les voitures jusqu'à 3,5 t. Motos, camions (système au kilomètre séparé) et véhicules de secours devraient être exemptés.",
        ],
      },
      {
        heading: "Quelle durée choisir",
        paragraphs: ["Choisissez selon la fréquence d'utilisation des routes belges :"],
        bullets: [
          "Annuelle — environ 100 € si vous roulez régulièrement en Belgique",
          "10 jours — environ 12 € pour vacances ou déplacement professionnel",
          "1 jour — environ 9 € pour un transit unique",
        ],
      },
      {
        heading: "Itinéraires typiques depuis l'Allemagne",
        bullets: [
          "Région d'Aix-la-Chapelle → Liège → ouest (corridor E40)",
          "Cologne/Düsseldorf → Bruxelles ou Anvers",
          "Sarre → Luxembourg/Belgique",
          "Transit vers Calais ou Dunkerque via la Belgique",
        ],
      },
      {
        heading: "Enregistrement numérique des plaques DE",
        paragraphs: [
          "Vous enregistrez votre plaque allemande en ligne lors de l'achat. Contrôles ANPR prévus sur autoroutes et routes régionales sélectionnées. La vignette n'est pas encore en vente.",
        ],
      },
    ],
    faq: [
      {
        question: "Les voitures allemandes ont-elles besoin d'une vignette belge ?",
        answer:
          "Oui. Les voitures particulières immatriculées à l'étranger, y compris en Allemagne, devraient avoir une vignette valide sur les routes concernées.",
      },
      {
        question: "Je ne traverse la Belgique qu'un jour — que faut-il ?",
        answer:
          "Une vignette d'un jour est prévue pour un usage occasionnel. Confirmez les produits définitifs une fois le système actif.",
      },
      {
        question: "Ma vignette autrichienne ou suisse couvre-t-elle la Belgique ?",
        answer:
          "Non. La Belgique prévoit son propre système numérique, distinct de l'Autriche, de la Suisse ou d'autres pays.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Guide de référence complet",
      text: "Consultez les prix, exemptions, contrôles et le calendrier sur les pages principales.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
  "belgium-vignette-france": {
    navLabel: "Conducteurs français",
    breadcrumb: "Vignette Belgique pour les Français",
    meta: {
      title: "Vignette Belgique pour conducteurs français 2027 | Tolls.be",
      description:
        "Guide pour les automobilistes français : vignette numérique dès mai 2027, routes via la Wallonie, tarifs courts et contrôles par plaque.",
    },
    h1: "Vignette Belgique pour les conducteurs français",
    intro: [
      "Les automobilistes français qui entrent en Belgique — depuis Lille et les Hauts-de-France, ou par des itinéraires de vacances en Wallonie — auront besoin de la vignette numérique prévue pour les voitures particulières dès mai 2027.",
      "Cette page résume les options courtes et le contrôle de conformité pour les véhicules immatriculés en France.",
    ],
    blocks: [
      {
        heading: "Voyages transfrontaliers depuis la France",
        paragraphs: [
          "La Wallonie partage une longue frontière avec la France. De nombreux Français traversent quotidiennement pour le travail, la famille ou les courses. La vignette devrait s'appliquer aux plaques belges et étrangères sur les routes concernées.",
          "Le système étant numérique, les conducteurs français enregistrent leur plaque avant le trajet — pas d'autocollant à retirer à la frontière.",
        ],
      },
      {
        heading: "Vignettes de courte durée",
        bullets: [
          "1 jour — environ 9 €",
          "10 jours — environ 12 €",
          "1 mois — environ 19 € · 2 mois — environ 30 €",
          "Annuelle — environ 100 € (usagers réguliers)",
        ],
      },
      {
        heading: "Points d'entrée fréquents",
        bullets: [
          "Lille → corridor Courtrai / Gand",
          "Charleville-Mézières → Namur / Liège",
          "Reims → Bruxelles via E411/E42",
          "Trafic vacances vers la côte belge via E40",
        ],
      },
      {
        heading: "Contrôles et amendes",
        paragraphs: [
          "Après la période de tolérance jusqu'en juillet 2027, rouler sans vignette valide peut entraîner des amendes à partir de 70 €. Contrôles prévus par caméras ANPR et unités mobiles lisant les plaques françaises.",
        ],
      },
    ],
    faq: [
      {
        question: "Les voitures françaises ont-elles besoin d'une vignette belge ?",
        answer:
          "Oui. Les voitures particulières immatriculées en France (jusqu'à 3,5 t) devraient avoir une vignette sur les routes belges concernées dès mai 2027.",
      },
      {
        question: "Je traverse la frontière chaque semaine — quel produit ?",
        answer:
          "Les usagers réguliers peuvent préférer une vignette annuelle ; les visiteurs occasionnels une vignette 10 jours ou mensuelle.",
      },
      {
        question: "Quand pourrai-je acheter la vignette ?",
        answer:
          "Les ventes ne sont pas ouvertes. Lancement prévu en mai 2027. Suivez l'actualité sur BelgiumVignette.be.",
      },
    ],
    relatedTitle: "Informations connexes",
    cta: {
      title: "Guide de référence complet",
      text: "Consultez les prix, exemptions, contrôles et le calendrier sur les pages principales.",
      button: "Voir toutes les informations sur la vignette",
    },
  },
};

export default crossBorder;

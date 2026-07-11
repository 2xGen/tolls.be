import type { Dictionary } from "@/lib/i18n/types";

const fr: Dictionary = {
  meta: {
    title: "Vignette Belgique 2027 | Prix, règles et mises à jour | Tolls.be",
    description:
      "Tout ce qu'il faut savoir sur la vignette numérique belge qui entrera en vigueur en 2027. Prix, conditions, exemptions, périodes de validité et contrôle.",
    ogAlt: "Tolls.be — portail d'information sur la vignette belge 2027",
  },
  header: {
    subtitle: "Informations sur le péage routier belge",
    languageLabel: "Langue",
    skipToContent: "Aller au contenu principal",
    nav: [
      { label: "Vignette belge", href: "#what" },
      { label: "Prix", href: "#prices" },
      { label: "Conditions", href: "#requirements" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Guide de la vignette belge",
    headline: "Vignette belge 2027",
    subheadline:
      "Tout ce que vous devez savoir sur la nouvelle vignette routière numérique belge pour les voitures particulières.",
    supporting:
      "Trouvez des informations sur les prix, les périodes de validité, les conditions relatives aux véhicules, les exemptions et le contrôle.",
    primaryCta: "Voir les informations sur la vignette",
    secondaryCta: "Dernières mises à jour",
    disclaimer:
      "Tolls.be est un site d'information indépendant. Le système de vignette belge est encore en cours d'élaboration par les autorités belges.",
    visualAlt:
      "Illustration conceptuelle résumant la vignette numérique belge prévue : type de véhicule, statut, système et lancement prévu",
    visualTitle: "Concept de vignette numérique",
    visualSubtitle: "Vignette routière belge · 2027",
    visualBadge: "Aperçu",
    visualCaption: "Concept illustratif — pas un document officiel",
    visualRows: [
      { label: "Véhicule", value: "Voiture particulière" },
      { label: "Statut", value: "Aperçu informatif" },
      { label: "Système", value: "Lié à la plaque" },
      { label: "Lancement prévu", value: "Mai 2027" },
    ],
  },
  infoBox: {
    title: "La vignette numérique belge en bref",
    note: "Faits essentiels sur le système prévu. Les détails peuvent changer avant le lancement officiel.",
    rows: [
      { label: "Lancement", value: "Mai 2027" },
      { label: "Concerne", value: "Voitures particulières jusqu'à 3,5 tonnes" },
      {
        label: "Système",
        value: "Vignette numérique liée à la plaque d'immatriculation",
      },
      { label: "Contrôle", value: "Contrôles par caméras ANPR" },
      { label: "Véhicules étrangers", value: "Obligatoire" },
    ],
  },
  sections: {
    what: {
      title: "Qu'est-ce que la vignette belge ?",
      paragraphs: [
        "La Belgique prévoit d'introduire une vignette routière numérique pour les voitures particulières empruntant ses autoroutes et ses routes régionales. Au lieu d'un autocollant physique sur le pare-brise, la vignette serait un enregistrement électronique directement lié à la plaque d'immatriculation du véhicule.",
        "Dans le système prévu, une vignette achetée serait enregistrée dans une base de données centrale, sans rien à afficher dans le véhicule. Le contrôle serait effectué automatiquement en comparant les plaques d'immatriculation lues sur la route au registre des vignettes valides.",
        "La mesure vise à garantir que tous les conducteurs qui utilisent les routes belges — y compris les visiteurs venant de l'étranger — contribuent équitablement à l'entretien du réseau routier. Les voitures particulières immatriculées en Belgique comme à l'étranger devraient avoir besoin d'une vignette valide.",
      ],
    },
    prices: {
      title: "Prix de la vignette belge",
      intro:
        "Les prix ci-dessous sont indicatifs et fondés sur la planification actuelle. Les tarifs annuels dépendent du véhicule, et des périodes de validité plus courtes sont disponibles pour les usagers occasionnels et les visiteurs.",
      annualHeading: "Tarifs annuels et selon le véhicule",
      shortHeading: "Périodes de validité de courte durée",
      columns: { period: "Catégorie", price: "Prix" },
      annual: [
        { label: "Annuel", price: "100 €" },
        { label: "Véhicules électriques", price: "90 €", note: "Tarif réduit" },
        { label: "Véhicules plus anciens", price: "125 €", note: "Émissions élevées" },
      ],
      short: [
        { label: "1 jour", price: "9 €" },
        { label: "10 jours", price: "12 €" },
        { label: "1 mois", price: "19 €" },
        { label: "2 mois", price: "30 €" },
      ],
      disclaimer:
        "Les prix sont provisoires et fournis à titre informatif uniquement. Les tarifs définitifs seront confirmés par les autorités belges compétentes avant le lancement.",
    },
    who: {
      title: "Qui a besoin d'une vignette belge ?",
      intro:
        "La vignette devrait s'appliquer à la plupart des voitures particulières. Certaines catégories de véhicules devraient être exemptées.",
      requiredTitle: "Obligatoire",
      required: [
        "Voitures particulières jusqu'à 3,5 tonnes",
        "Véhicules immatriculés en Belgique",
        "Véhicules immatriculés à l'étranger",
      ],
      exemptTitle: "Exempté",
      exempt: [
        "Motos",
        "Tracteurs",
        "Autocars",
        "Véhicules de secours",
        "Véhicules de police et de la défense",
      ],
    },
    enforcement: {
      title: "Comment le contrôle fonctionnera-t-il ?",
      intro:
        "La conformité serait vérifiée de manière numérique, sans contrôle physique ni postes de péage.",
      points: [
        {
          title: "Système numérique",
          description:
            "Chaque vignette serait enregistrée électroniquement dans un registre central, sans autocollant à afficher.",
        },
        {
          title: "Lien avec la plaque d'immatriculation",
          description:
            "La vignette serait liée à la plaque d'immatriculation du véhicule, de sorte que la validité est rattachée à la plaque elle-même.",
        },
        {
          title: "Caméras ANPR",
          description:
            "Des caméras de reconnaissance automatique des plaques d'immatriculation (ANPR) liraient les plaques et les compareraient au registre.",
        },
        {
          title: "Unités de contrôle mobiles",
          description:
            "Des unités de contrôle mobiles pourraient effectuer des contrôles supplémentaires sur la route à travers le réseau.",
        },
        {
          title: "Amendes possibles",
          description:
            "Conduire sans vignette valide peut entraîner une amende une fois la période de tolérance terminée.",
        },
      ],
    },
    timeline: {
      title: "Chronologie",
      intro: "Principales étapes de l'introduction de la vignette belge.",
      steps: [
        {
          date: "2026",
          title: "Phase de préparation",
          description:
            "Les systèmes, la plateforme d'enregistrement et l'infrastructure de contrôle sont préparés et testés.",
        },
        {
          date: "Mai 2027",
          title: "Introduction de la vignette",
          description:
            "La vignette numérique devrait devenir disponible et obligatoire pour les voitures particulières sur les routes concernées.",
        },
        {
          date: "Juillet 2027",
          title: "Début des contrôles",
          description:
            "La période de tolérance devrait prendre fin, après quoi des amendes pourraient s'appliquer aux véhicules sans vignette valide.",
        },
      ],
    },
  },
  faq: {
    title: "Questions fréquentes",
    intro: "Réponses aux questions les plus courantes sur la vignette belge.",
    items: [
      {
        question: "Qu'est-ce que la vignette belge ?",
        answer:
          "La vignette belge est une vignette routière numérique prévue pour les voitures particulières empruntant les autoroutes et routes régionales belges. Elle est liée électroniquement à la plaque d'immatriculation du véhicule, de sorte qu'aucun autocollant physique ne doit être affiché.",
      },
      {
        question: "Quand la Belgique introduira-t-elle la vignette ?",
        answer:
          "Selon la planification actuelle, la vignette numérique devrait être lancée en mai 2027, le contrôle et les amendes commençant après une période de tolérance à partir de juillet 2027.",
      },
      {
        question: "Les voitures étrangères ont-elles besoin d'une vignette belge ?",
        answer:
          "Oui. Les voitures particulières immatriculées à l'étranger devraient avoir besoin d'une vignette valide pour emprunter les routes belges concernées, au même titre que les véhicules immatriculés en Belgique. Des périodes de courte durée seraient disponibles pour les visiteurs.",
      },
      {
        question: "Combien coûte la vignette belge ?",
        answer:
          "Les prix annuels indicatifs débutent autour de 100 €, avec 90 € pour les véhicules électriques et 125 € pour les véhicules plus anciens et plus polluants. Des options de courte durée sont prévues à partir de 9 € pour une journée jusqu'à 30 € pour deux mois. Les tarifs définitifs seront confirmés avant le lancement.",
      },
      {
        question: "Les motos ont-elles besoin d'une vignette belge ?",
        answer:
          "Non. Les motos devraient être exemptées de la vignette, tout comme les tracteurs, les autocars, les véhicules de secours et les véhicules de police et de la défense.",
      },
      {
        question: "Comment la vignette est-elle contrôlée ?",
        answer:
          "La conformité serait vérifiée automatiquement à l'aide de caméras ANPR (reconnaissance automatique des plaques d'immatriculation) et d'unités de contrôle mobiles. Les plaques lues sur la route seraient comparées au registre central des vignettes valides.",
      },
      {
        question: "Que se passe-t-il si vous roulez sans vignette ?",
        answer:
          "Une fois la période de tolérance terminée en juillet 2027, conduire sans vignette valide peut entraîner une amende. Les montants exacts des sanctions seront fixés par les autorités belges compétentes.",
      },
    ],
  },
  sources: {
    title: "Sources et vérification",
    paragraphs: [
      "Les informations de ce site reposent sur des annonces publiques des autorités belges.",
      "Les détails de la vignette prévue peuvent encore changer. Avant d'acheter une vignette, vérifiez toujours les conditions les plus récentes via les canaux officiels.",
    ],
  },
  newsletter: {
    badge: "Restez informé",
    title: "Recevez des mises à jour sur le lancement de la vignette belge",
    description:
      "Soyez averti dès que les prix, dates et règles officiels sont confirmés. Nous n'envoyons que des mises à jour pertinentes sur la vignette belge.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.be",
    button: "S'abonner",
    consentBefore:
      "En vous abonnant, vous acceptez de recevoir occasionnellement des mises à jour par e-mail sur la vignette belge. Consultez notre ",
    consentAfter:
      " pour savoir comment nous stockons et utilisons votre adresse e-mail. Vous pouvez vous désabonner à tout moment.",
    success: "Merci. Vous êtes abonné aux mises à jour sur la vignette belge.",
    error: "Une erreur s'est produite. Veuillez réessayer dans un instant.",
    submitting: "Inscription…",
  },
  footer: {
    description:
      "Tolls.be est un service d'information indépendant sur les péages routiers et la vignette numérique belge. Il n'est affilié à aucun organisme public.",
    linksTitle: "Informations",
    links: [
      { label: "À propos", href: "#" },
      { label: "Contact", href: "mailto:info@tolls.be" },
      { label: "Politique de confidentialité", href: "#privacy" },
    ],
    languagesTitle: "Langues",
    disclaimerTitle: "Avis important",
    disclaimer:
      "Ce site fournit uniquement des informations générales. Le système de vignette belge est encore en cours d'élaboration et les détails peuvent changer. Consultez toujours les sources officielles du gouvernement belge pour obtenir des informations confirmées.",
    rights: "Tous droits réservés.",
  },
  breadcrumb: {
    home: "Accueil",
    current: "Vignette belge 2027",
  },
  cookies: {
    bannerTitle: "Préférences en matière de cookies",
    bannerDescription:
      "Nous utilisons un stockage essentiel pour mémoriser votre choix en matière de cookies. Avec votre consentement, nous utilisons des outils d'analyse pour comprendre les pages vues, les types d'appareils et les localisations approximatives. Vous pouvez modifier votre choix à tout moment.",
    privacyLink: "Politique de confidentialité",
    acceptAll: "Tout accepter",
    rejectNonEssential: "Refuser les non essentiels",
    managePreferences: "Gérer les préférences",
    preferencesTitle: "Gérer les préférences de cookies",
    savePreferences: "Enregistrer les préférences",
    close: "Fermer",
    essentialTitle: "Essentiels",
    essentialDescription:
      "Enregistre votre choix de cookies dans votre navigateur afin de ne pas vous redemander à chaque visite.",
    essentialAlwaysOn: "Toujours actif",
    analyticsTitle: "Analyse",
    analyticsDescription:
      "Nous aide à comprendre comment les visiteurs utilisent le site, y compris les pages vues, les types d'appareils et la localisation approximative. Chargé uniquement si vous y consentez.",
    services: {
      vercel:
        "Vercel Analytics — statistiques de pages vues respectueuses de la vie privée (pas de cookies publicitaires).",
      google:
        "Google Analytics — statistiques de visiteurs optionnelles si activées par le propriétaire du site.",
      bing:
        "Microsoft Clarity — informations de session optionnelles pour l'analyse liée à Bing si activé.",
    },
    manageLabel: "Gérer les cookies",
  },
};

export default fr;

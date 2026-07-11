import type { LegalDictionary } from "@/lib/i18n/legal-types";

const legal: LegalDictionary = {
  privacy: {
    navLabel: "Politique de confidentialité",
    breadcrumb: "Politique de confidentialité",
    meta: {
      title: "Politique de confidentialité | Tolls.be",
      description:
        "Comment Tolls.be collecte et utilise les données personnelles : newsletter, cookies, analytics et services tiers.",
    },
    h1: "Politique de confidentialité",
    updated: "Dernière mise à jour : 11 juillet 2026",
    intro: [
      "Tolls.be est un site d'information indépendant sur la vignette numérique belge. Cette politique de confidentialité explique quelles données personnelles nous collectons, pourquoi nous les utilisons et quels droits vous avez en vertu de la législation applicable en matière de protection des données, y compris le RGPD.",
      "Nous ne vendons pas de données personnelles. Nous ne traitons que les données nécessaires au fonctionnement du site, à la réponse aux demandes, à l'envoi d'actualisations optionnelles et — avec votre consentement — à la compréhension de l'utilisation du site.",
    ],
    sections: [
      {
        heading: "Qui est responsable de vos données ?",
        paragraphs: [
          "Le responsable du traitement pour ce site est Tolls.be, joignable à info@tolls.be. Tolls.be n'est pas un site gouvernemental et n'est pas affilié aux autorités belges.",
        ],
      },
      {
        heading: "Quelles données nous collectons",
        bullets: [
          "Adresse e-mail — si vous vous abonnez aux actualités sur la vignette",
          "Préférence linguistique — déduite de l'URL utilisée (p. ex. /en, /fr)",
          "Choix de consentement aux cookies — stocké dans votre navigateur pour mémoriser votre préférence",
          "Données d'utilisation — uniquement si vous acceptez les cookies analytics (pages vues, localisation approximative, type d'appareil/navigateur)",
          "Données techniques — journaux serveur et de sécurité standard traités par notre hébergeur",
        ],
      },
      {
        heading: "Newsletter et mises à jour par e-mail",
        paragraphs: [
          "Si vous vous abonnez pour recevoir des actualités sur la vignette belge, nous collectons votre adresse e-mail et la version linguistique du site utilisée lors de l'inscription.",
          "Nous utilisons votre e-mail uniquement pour envoyer occasionnellement des actualités sur la vignette belge — par exemple lorsque les prix, dates ou règles officiels sont confirmés. Nous n'envoyons pas de marketing non lié.",
          "Lorsque vous soumettez le formulaire, votre adresse e-mail est stockée de manière sécurisée dans notre base de données Supabase (hébergée dans l'UE). Seuls les administrateurs autorisés du site peuvent accéder aux inscriptions. Vous pouvez vous désabonner à tout moment en contactant info@tolls.be.",
          "La base juridique du traitement des données de newsletter est votre consentement, donné en soumettant le formulaire. Vous pouvez retirer ce consentement à tout moment.",
        ],
      },
      {
        heading: "Cookies et analytics",
        paragraphs: [
          "Nous utilisons un stockage navigateur essentiel pour mémoriser votre choix de consentement aux cookies. Cela est nécessaire pour ne pas vous redemander à chaque visite.",
          "Les outils d'analyse ne sont chargés que si vous y consentez via la bannière cookies. Ils nous aident à comprendre comment les visiteurs utilisent le site.",
        ],
        bullets: [
          "Vercel Analytics — statistiques de pages vues orientées confidentialité (type d'appareil, pays, pages visitées). Chargé uniquement avec consentement.",
          "Google Analytics — statistiques de visiteurs optionnelles si activées par le propriétaire du site. Chargé uniquement avec consentement.",
          "Microsoft Clarity — informations de session optionnelles pour l'analytics liée à Bing si activé. Chargé uniquement avec consentement.",
        ],
      },
      {
        heading: "Services tiers",
        paragraphs: [
          "Nous utilisons des sous-traitants de confiance pour exploiter le site. Ils traitent les données selon nos instructions et uniquement dans la mesure nécessaire à leur service.",
        ],
        bullets: [
          "Vercel — hébergement du site, CDN et infrastructure analytics",
          "Supabase — stockage sécurisé en base de données des adresses e-mail de la newsletter",
          "Google — analytics optionnel (Google Analytics) si activé et consenti",
          "Microsoft — analytics optionnel (Clarity) si activé et consenti ; la vérification Bing utilise uniquement une balise meta et ne dépose pas de cookies analytics",
        ],
      },
      {
        heading: "Liens affiliés et sortants",
        paragraphs: [
          "Tolls.be est avant tout un site d'information. À l'avenir, nous pourrions lier vers des services tiers (par exemple des canaux officiels d'achat de vignettes ou des partenaires). Ces sites ont leurs propres politiques de confidentialité et peuvent déposer leurs propres cookies lorsque vous les visitez.",
          "Nous mettrons à jour cette politique si des relations d'affiliation sont introduites.",
        ],
      },
      {
        heading: "Durée de conservation des données",
        bullets: [
          "Adresses e-mail de la newsletter — jusqu'à désabonnement ou demande de suppression",
          "Préférence de consentement aux cookies — jusqu'à effacement du stockage navigateur ou mise à jour de la version de consentement",
          "Données analytics — conservées selon les paramètres de chaque fournisseur (généralement agrégées, durée limitée)",
          "Journaux serveur — conservation de courte durée par notre hébergeur pour la sécurité et la fiabilité",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Selon votre localisation, vous pouvez avoir le droit d'accéder à vos données, de les rectifier, de les supprimer ou d'en limiter le traitement, de vous opposer au traitement et à la portabilité des données. Lorsque le traitement est fondé sur le consentement, vous pouvez le retirer à tout moment sans affecter la licéité du traitement antérieur.",
          "Vous avez également le droit d'introduire une réclamation auprès d'une autorité de contrôle. En Belgique, il s'agit de l'Autorité de protection des données (APD).",
          "Pour exercer vos droits, contactez info@tolls.be.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactText: "Des questions sur cette politique de confidentialité ou vos données personnelles ? Contactez-nous à",
  },
};

export default legal;

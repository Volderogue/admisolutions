export type NewsCategory = 'Actus' | 'Équipe';

export interface NewsArticle {
  id: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
  images: string[];
  thumbnail?: string;
  externalLink?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '2025-06-24-medef-yvelines',
    category: 'Actus',
    date: '24/06/2025',
    title: "Admin Solution mise à l'honneur dans un article du MEDEF Yvelines",
    excerpt:
      "Une belle reconnaissance de notre engagement pour simplifier la vie des dirigeants de TPE et PME.",
    content: [
      "Nous sommes très fiers de voir notre entreprise mise en lumière par la principale organisation patronale du département, qui consacre un article à notre vision, notre engagement et notre accompagnement des dirigeants de TPE/PME.",
      "Une belle reconnaissance de notre travail au quotidien : simplifier la vie des entrepreneurs, leur faire gagner du temps et leur permettre de se concentrer sur l'essentiel.",
      "Un grand merci au MEDEF Yvelines pour ce coup de projecteur.",
    ],
    images: ['/images/actu/actu-2025-06-24-medef.jpg'],
    externalLink: 'https://lnkd.in/erGd6_QE',
  },
  {
    id: '2025-07-29-recruter-ou-externaliser',
    category: 'Actus',
    date: '29/07/2025',
    title:
      'Vous hésitez entre recruter ou externaliser pour votre gestion administrative ?',
    excerpt:
      'CDI/CDD ou expertise à la carte : une comparaison claire pour choisir la solution la plus adaptée.',
    content: [
      'CDI / CDD = une équipe intégrée, mais des coûts fixes et des obligations sociales.',
      'Admin Solution = une expertise à la carte, sans engagement, sans charges, sans imprévus.',
      'À vous de choisir la solution la plus adaptée à votre organisation. Nos clients TPE & PME ont déjà fait le choix de la simplicité et de la flexibilité.',
    ],
    images: ['/images/actu/actu-2025-07-29-recruter-ou-externaliser.jpg'],
  },
  {
    id: '2025-08-12-assistante-ou-office-manager',
    category: 'Actus',
    date: '12/08/2025',
    title: 'Assistante administrative ou office manager ?',
    excerpt:
      'Deux profils complémentaires, mais des rôles différents selon la taille et les objectifs de votre structure.',
    content: [
      "L'assistante administrative soutient l'activité au quotidien : gestion des tâches courantes, appui administratif et rigueur opérationnelle.",
      "L'office manager structure et pilote : elle intervient de façon plus transversale, optimise les processus et accompagne la croissance de votre organisation.",
      "Chez Admin Solution, nous vous aidons à clarifier vos besoins et à choisir l'accompagnement adapté.",
    ],
    images: ['/images/actu/actu-2025-08-12-assistante-vs-office-manager.jpg'],
  },
  {
    id: '2025-10-14-facturation-electronique',
    category: 'Actus',
    date: '14/10/2025',
    title: 'Facturation électronique : ce que la plateforme ne fera pas pour vous',
    excerpt:
      "La réforme arrive, mais l'automatisation ne remplacera pas le suivi humain, surtout pour les petites structures.",
    content: [
      'À partir de septembre 2026, la réglementation de la facturation électronique commencera à entrer en vigueur.',
      'Automatisation, transparence, digitalisation... sur le papier, tout est parfait. Mais dans les faits, un suivi rigoureux restera indispensable.',
      "Bonne nouvelle : ce travail-là, on peut le faire pour vous. Septembre 2026, c'est demain. Préparez-vous et anticipez pour être prêt à temps.",
    ],
    images: [
      '/images/actu/actu-2025-10-14-facturation-electronique-1.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-2.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-3.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-4.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-5.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-6.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-7.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-8.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-9.jpg',
      '/images/actu/actu-2025-10-14-facturation-electronique-10.jpg',
    ],
  },
  {
    id: '2025-11-11-partenariat-obat',
    category: 'Actus',
    date: '11/11/2025',
    title: 'Nouveau partenariat : Admin Solution x Obat',
    excerpt:
      'Une gestion BTP simplifiée avec un accompagnement opérationnel de nos assistantes spécialisées.',
    content: [
      "Admin Solution devient partenaire d'Obat, le logiciel de gestion 100 % dédié aux entreprises du BTP.",
      "Nos clients artisans, TPE et PME profitent d'une solution complète : devis, factures, suivi de chantier, planification et outils mobiles.",
      "Offre partenaire : essai gratuit de 14 jours et -20 % sur l'abonnement la première année en passant par Admin Solution.",
    ],
    images: ['/images/logo_obat.png'],
    thumbnail: '/images/logo_obat.png',
    externalLink: 'https://partenariats.obat.fr/admin-solution',
  },
  {
    id: '2026-02-05-offre-essentiel',
    category: 'Actus',
    date: '05/02/2026',
    title: 'Nouvelle offre chez Admin Solution : ESSENTIEL',
    excerpt:
      'Une solution administrative clé en main, opérationnelle rapidement, dès 276,50 EUR HT/mois.',
    content: [
      'Nous lançons notre offre ESSENTIEL, pensée pour les dirigeants, indépendants et TPE.',
      'Missions clés : facturation clients, suivi des encaissements, traitement des factures fournisseurs, pré-comptabilité et coordination comptable.',
      'Notre approche : une assistante dédiée, des process structurés et une organisation fiable pour vous libérer durablement de la charge administrative.',
    ],
    images: [
      '/images/actu/actu-2026-02-05-offre-essentiel-1.png',
      '/images/actu/actu-2026-02-05-offre-essentiel-2.png',
      '/images/actu/actu-2026-02-05-offre-essentiel-3.png',
      '/images/actu/actu-2026-02-05-offre-essentiel-4.png',
      '/images/actu/actu-2026-02-05-offre-essentiel-5.png',
      '/images/actu/actu-2026-02-05-offre-essentiel-6.png',
    ],
  },
  {
    id: '2025-11-21-equipe-admin-solution',
    category: 'Équipe',
    date: '21/11/2025',
    title: "Retour sur un moment convivial avec l'équipe",
    excerpt:
      "Le collectif grandit et l'énergie aussi, avec une force collective qui accompagne chaque jour nos clients.",
    content: [
      "Retour sur un moment convivial partagé avec l'équipe d'Admin Solution et une partie de nos assistantes.",
      "Le collectif grandit, l'énergie aussi, surtout grâce à celles qui accompagnent et soutiennent nos clients dirigeants au quotidien.",
      'Avec les nouvelles arrivées, notre force collective continue de monter en puissance. Ensemble, on fait vraiment la différence.',
    ],
    images: ['/images/actu/equipe-2025-11-21-moment-convivial.jpg'],
  },
];

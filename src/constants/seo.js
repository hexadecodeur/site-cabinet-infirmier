export const SITE_URL = 'https://cabinetinfirmiervalence81.vercel.app';
export const SITE_NAME = "Cabinet Infirmier Valence d'Albigeois";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SEO_BY_PATH = {
  '/': {
    title: 'Cabinet Infirmier Valence 81 | Soins à domicile 7j/7',
    description:
      "Cabinet infirmier à Valence d'Albigeois (81). Soins à domicile 7j/7, PRADO Cardio, ICOPE. Professionnels bienveillants et à l'écoute.",
  },
  '/equipe': {
    title: 'Notre équipe | Cabinet Infirmier Valence 81',
    description:
      "Rencontrez l'équipe d'infirmiers diplômés d'État du cabinet de Valence d'Albigeois : soins à domicile et au cabinet.",
  },
  '/missions': {
    title: 'PRADO Cardio & ICOPE | Cabinet Infirmier Valence 81',
    description:
      "Suivi PRADO Cardio, programme ICOPE et constatation de décès à domicile à Valence d'Albigeois (81).",
  },
  '/contact': {
    title: 'Contact & rendez-vous | Cabinet Infirmier Valence 81',
    description:
      "Contactez le cabinet : 05 63 45 57 54 · 80 Grand Rue, 81340 Valence d'Albigeois. Soins à domicile 7j/7.",
  },
  '/liensutiles': {
    title: 'Liens utiles santé | Cabinet Infirmier Valence 81',
    description:
      'Ressources officielles : ICOPE, PRADO Ameli, annuaire santé, vaccination — utiles aux patients du Tarn.',
  },
  '/mentions-legales': {
    title: 'Mentions légales & RGPD | Cabinet Infirmier Valence 81',
    description:
      'Mentions légales, hébergement et informations RGPD du site du Cabinet Infirmier de Valence d\'Albigeois.',
  },
};

export function getSeoForPath(pathname) {
  return SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];
}

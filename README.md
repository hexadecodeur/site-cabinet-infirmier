# Cabinet Infirmier Valence d'Albigeois

Site vitrine du **Cabinet infirmier de la Place du Foirail** (SCM) à Valence d'Albigeois (81), développé par **Hello_Dev0ps**.

**Site :** [https://cabinetinfirmiervalence81.fr/](https://cabinetinfirmiervalence81.fr/)

Présentation de l'équipe, des missions (PRADO Cardio, ICOPE…), des coordonnées et des ressources utiles pour les patients.

## Stack

| Couche | Techno |
|--------|--------|
| Frontend | React 19 + Vite |
| Routing | React Router DOM |
| Styles | CSS global (Poppins via Google Fonts) |
| SEO | Meta dynamiques (`react-helmet-async`), Open Graph, JSON-LD, sitemap |
| Analytics | Google Analytics 4 (après consentement) + Vercel Analytics |
| Package manager | pnpm |
| Domaine | OVH — `cabinetinfirmiervalence81.fr` |
| Hébergement | Vercel |

## Démarrage

```bash
pnpm install
pnpm dev        # serveur de développement
pnpm build      # build production → dist/
pnpm preview    # prévisualiser le build
pnpm test       # Vitest
```

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil, CTAs contact, météo locale |
| `/equipe` | Présentation de l'équipe |
| `/missions` | Soins, PRADO Cardio, ICOPE, certificat de décès |
| `/contact` | Téléphone, email, adresse, carte Google Maps |
| `/liensutiles` | Liens officiels (ARS, Ameli, etc.) |
| `/mentions-legales` | Mentions légales LCEN + RGPD |

## Fonctionnalités

- Navigation responsive (menu burger mobile)
- Bannière cookies : accepter / refuser Google Analytics
- SEO par page (title, description, canonical, OG/Twitter)
- Images optimisées (WebP) + image Open Graph dédiée
- Suivi des clics contact (tel / mailto / Maps) si GA accepté
- Mentions légales complètes (SCM, SIRET, RPPS, hébergeur, domaine)

## RGPD

- Pas de formulaire de collecte de données de santé
- Google Analytics chargé **uniquement après consentement**
- Choix mémorisé en `localStorage`
- Détails dans `/mentions-legales`

## Structure

```
src/
  analytics/     # Chargement GA + consentement
  components/    # Header, Footer, Seo, CookieBanner…
  constants/     # Contact, meta SEO
  pages/         # Pages de l'app
  styles/        # global, layout, components
public/          # favicon, sitemap, robots, og-image
```

---

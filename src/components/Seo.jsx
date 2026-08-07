import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getSeoForPath } from '../constants/seo';

function Seo() {
  const { pathname } = useLocation();
  const { title, description } = getSeoForPath(pathname);
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}

export default Seo;

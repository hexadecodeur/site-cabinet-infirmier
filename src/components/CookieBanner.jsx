import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAnalyticsConsent,
  loadGoogleAnalytics,
  setAnalyticsConsent,
} from '../analytics/ga';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getAnalyticsConsent();
    if (consent === 'accepted') {
      loadGoogleAnalytics();
      return;
    }
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    setAnalyticsConsent('accepted');
    loadGoogleAnalytics();
    setVisible(false);
  };

  const refuse = () => {
    setAnalyticsConsent('refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentement cookies">
      <p className="cookie-banner-text">
        Ce site utilise Google Analytics pour mesurer l&apos;audience, uniquement si vous
        acceptez. Aucune publicité n&apos;est diffusée.{' '}
        <Link to="/mentions-legales">En savoir plus</Link>
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-primary btn-sm" onClick={accept}>
          Accepter
        </button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={refuse}>
          Refuser
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;

const GA_ID = 'G-1V5MT35VD2';
const CONSENT_KEY = 'cookies-consent';

export function getAnalyticsConsent() {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'true') return 'accepted';
  if (value === 'refused') return 'refused';
  return null;
}

export function setAnalyticsConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
}

let gaLoaded = false;

export function loadGoogleAnalytics() {
  if (gaLoaded || typeof window === 'undefined') return;
  if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) {
    gaLoaded = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.dataset.gaId = GA_ID;
  document.head.appendChild(script);

  gaLoaded = true;
}

export function trackContactClick(href) {
  if (getAnalyticsConsent() !== 'accepted') return;
  window.gtag?.('event', 'click', {
    event_category: 'Contact',
    event_label: href,
  });
}

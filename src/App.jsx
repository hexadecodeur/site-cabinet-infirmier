import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Accueil from './pages/Accueil';
import Equipe from './pages/Equipe';
import Missions from './pages/Missions';
import Contact from './pages/Contact';
import Header from './components/Header';
import LiensUtiles from './pages/LiensUtiles';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import Seo from './components/Seo';
import CookieBanner from './components/CookieBanner';
import { trackContactClick } from './analytics/ga';

function App() {
  useEffect(() => {
    const trackClick = (event) => {
      const target = event.target.closest('a');
      const href = target?.href;
      if (href && (href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('google.com/maps'))) {
        trackContactClick(href);
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return (
    <Router>
      <Seo />
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/liensutiles" element={<LiensUtiles />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

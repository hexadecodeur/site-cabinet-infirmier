import cabinetImage from '../assets/cabinet.webp';
import MeteoWidget from '../components/MeteoWidget';
import Button from '../components/Button';
import { PHONE, PHONE_DISPLAY, EMAIL } from '../constants/contact';

function Accueil() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenue au cabinet infirmier de Valence d'Albigeois</h1>
          <p className="page-intro">
            Soins infirmiers à domicile ou au cabinet, avec professionnalisme et bienveillance.
            Prise de rendez-vous 7j/7.
          </p>
          <p>
            Situé au cœur de Valence d'Albigeois (Tarn), notre cabinet accompagne les patients
            et leurs proches pour les soins techniques, le suivi à domicile, le programme PRADO
            Cardio et le dispositif ICOPE. Une équipe d'infirmiers diplômés d'État, à votre écoute
            toute la semaine.
          </p>
          <div className="btn-group">
            <Button href={`tel:${PHONE}`} variant="primary">
              Appeler — {PHONE_DISPLAY}
            </Button>
            <Button href={`mailto:${EMAIL}`} variant="secondary">
              Envoyer un email
            </Button>
            <Button to="/contact" variant="secondary">
              Voir l'adresse
            </Button>
          </div>
        </div>
        <div>
          <img
            src={cabinetImage}
            alt="Cabinet infirmier de Valence d'Albigeois"
            className="hero-image"
            width={1200}
            height={735}
            decoding="async"
            fetchPriority="high"
          />
          <div className="meteo-sidebar">
            <MeteoWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;

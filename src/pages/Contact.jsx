import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS } from '../constants/contact';

function Contact() {
  return (
    <div className="container">
      <h1 className="page-title">Contact & rendez-vous</h1>
      <p className="page-intro">
        Pour prendre rendez-vous ou nous joindre, utilisez l'un des moyens ci-dessous.
      </p>

      <div className="contact-cards">
        <a href={`tel:${PHONE}`} className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">📞</span>
          <div>
            <p className="contact-card-label">Téléphone</p>
            <p className="contact-card-value">{PHONE_DISPLAY}</p>
          </div>
        </a>

        <a href={`mailto:${EMAIL}`} className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">✉️</span>
          <div>
            <p className="contact-card-label">Email</p>
            <p className="contact-card-value">{EMAIL}</p>
          </div>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=80+Grand+Rue+81340+Valence+d'Albigeois"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card-icon" aria-hidden="true">📍</span>
          <div>
            <p className="contact-card-label">Adresse</p>
            <p className="contact-card-value">{ADDRESS}</p>
          </div>
        </a>
      </div>

      <div className="map-container">
        <iframe
          title="Cabinet Infirmier Valence"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2869.027563046941!2d2.405510376683401!3d44.020824928575806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1748940664271!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 260 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Contact;

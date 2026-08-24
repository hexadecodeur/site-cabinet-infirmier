import { Link } from 'react-router-dom';
import { EMAIL, ADDRESS_SHORT } from '../constants/contact';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        {' · '}
        {ADDRESS_SHORT}
      </p>
      <p className="footer-credit">
        Site créé par <strong>Hexa Décodeur</strong> —{' '}
        <Link to="/mentions-legales">Mentions légales</Link>
      </p>
    </footer>
  );
}

export default Footer;

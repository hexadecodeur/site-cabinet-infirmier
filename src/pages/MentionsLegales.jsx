import { EMAIL, PHONE_DISPLAY, PHONE, ADDRESS } from '../constants/contact';

const TEAM_RPPS = [
  { name: 'EXARTIER Anthony', rpps: '10103635180' },
  { name: 'ARGENCE Julie', rpps: '10104666465' },
  { name: 'HUMBLOT Marion', rpps: '10106669392' },
  { name: 'PRAT Chloé', rpps: '10103399191' },
  { name: 'GUERY David', rpps: '10108050484' },
];

function MentionsLegales() {
  return (
    <div className="container">
      <h1 className="page-title">Mentions légales & RGPD</h1>
      <p className="page-intro">
        Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
        numérique (LCEN) et au Règlement général sur la protection des données (RGPD).
      </p>

      <section className="legal-section">
        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Cabinet infirmier de la Place du Foirail</strong>
          <br />
          Société civile de moyens (SCM)
          <br />
          SIRET : 841 623 531 00024
          <br />
          {ADDRESS}
          <br />
          Téléphone :{' '}
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <br />
          Email : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Responsable de la publication</h2>
        <p>
          EXARTIER Anthony, infirmier diplômé d&apos;État
          <br />
          Contact : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Professionnels de santé</h2>
        <p>
          Les infirmiers exerçant au sein du cabinet sont identifiés par les numéros RPPS suivants :
        </p>
        <ul>
          {TEAM_RPPS.map((member) => (
            <li key={member.rpps}>
              {member.name} — RPPS {member.rpps}
            </li>
          ))}
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Hébergement</h2>
        <p>
          Le site est hébergé par :
          <br />
          <strong>Vercel Inc.</strong>
          <br />
          440 Terry Avenue North
          <br />
          Seattle, WA 98109
          <br />
          États-Unis
          <br />
          Site :{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Conception et réalisation</h2>
        <p>
          Site conçu et réalisé par <strong>Hello_Dev0ps</strong>
          <br />
          Email :{' '}
          <a href="mailto:hello_dev0ps@protonmail.com">hello_dev0ps@protonmail.com</a>
          <br />
          GitHub :{' '}
          <a href="https://github.com/hellOdevOps-bit" target="_blank" rel="noopener noreferrer">
            hellOdevOps-bit
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Objet du site</h2>
        <p>
          Ce site présente l&apos;activité du cabinet infirmier, ses missions (notamment PRADO Cardio
          et ICOPE), l&apos;équipe et les moyens de contact. Les informations publiées ont un
          caractère général et informatif. Elles ne constituent pas un avis médical personnalisé et
          ne remplacent pas une consultation.
        </p>
        <p>
          En cas d&apos;urgence vitale, composez le <strong>15</strong> (SAMU) ou le{' '}
          <strong>112</strong>.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, photographies, éléments graphiques, logo)
          est protégé. Toute reproduction, représentation ou diffusion, totale ou partielle, sans
          autorisation préalable de l&apos;éditeur, est interdite.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Données personnelles (RGPD)</h2>
        <p>
          <strong>Responsable du traitement :</strong> Cabinet infirmier de la Place du Foirail
          (SCM), joignable à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <p>
          <strong>Données concernées :</strong> ce site ne propose pas de formulaire de contact
          collectant des données de santé. Les données éventuellement traitées concernent
          principalement la mesure d&apos;audience (voir cookies ci-dessous) et les échanges que
          vous initiez volontairement (appel, e-mail).
        </p>
        <p>
          <strong>Finalités :</strong> répondre à vos demandes de contact et de rendez-vous ;
          mesurer l&apos;audience du site afin d&apos;améliorer son contenu (uniquement si vous
          acceptez Google Analytics).
        </p>
        <p>
          <strong>Base légale :</strong> intérêt légitime et/ou exécution de mesures
          précontractuelles pour les échanges de contact ; consentement pour Google Analytics.
        </p>
        <p>
          <strong>Destinataires :</strong> l&apos;équipe du cabinet ; prestataires techniques
          (hébergeur Vercel ; Google pour Analytics en cas de consentement). Ces traitements
          peuvent impliquer un transfert de données hors de l&apos;Union européenne, encadré par
          les mécanismes prévus par la réglementation applicable.
        </p>
        <p>
          <strong>Durée de conservation :</strong> les e-mails et échanges sont conservés le temps
          nécessaire au traitement de votre demande, puis selon les obligations légales
          applicables. Les données d&apos;audience sont conservées selon la configuration Google
          Analytics / Vercel Analytics.
        </p>
        <p>
          <strong>Vos droits :</strong> vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition et, le cas échéant,
          de portabilité. Pour les exercer :{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            CNIL
          </a>{' '}
          (Commission nationale de l&apos;informatique et des libertés).
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Cookies et mesure d&apos;audience</h2>
        <p>Ce site utilise les traceurs / outils suivants :</p>
        <ul>
          <li>
            <strong>Choix de consentement</strong> — enregistrement local dans votre navigateur
            (<code>localStorage</code>) de votre acceptation ou refus de Google Analytics. Ce
            stockage est nécessaire pour respecter votre choix.
          </li>
          <li>
            <strong>Google Analytics (GA4)</strong> — mesure d&apos;audience, chargé{' '}
            <strong>uniquement après votre consentement</strong> via la bannière. L&apos;adresse
            IP est anonymisée. Vous pouvez accepter ou refuser. Aucune publicité n&apos;est
            diffusée via cet outil sur le site.
          </li>
          <li>
            <strong>Vercel Analytics</strong> — mesure d&apos;audience agrégée liée à
            l&apos;hébergement, sans cookies publicitaires.
          </li>
        </ul>
        <p>
          Pour modifier votre choix concernant Google Analytics : effacez les données du site dans
          les paramètres de votre navigateur, puis rechargez la page afin de faire réapparaître la
          bannière.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Limitation de responsabilité</h2>
        <p>
          L&apos;éditeur s&apos;efforce de fournir des informations exactes et à jour. Il ne
          saurait toutefois garantir l&apos;absence d&apos;erreur ou d&apos;omission, ni être tenu
          responsable de l&apos;usage qui serait fait des informations présentes sur le site, ni
          des contenus des sites tiers vers lesquels des liens peuvent renvoyer.
        </p>
      </section>
    </div>
  );
}

export default MentionsLegales;

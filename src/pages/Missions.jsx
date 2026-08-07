import instrumentsImage from '../assets/instruments.webp';
import Accordion from '../components/Accordion';

const MISSION_SECTIONS = [
  {
    title: 'PRADO Cardio',
    content: (
      <>
        <p>
          Notre cabinet est formé au PRADO Cardio (Programme de Retour À Domicile — pathologies
          cardiovasculaires), un dispositif de l'Assurance Maladie pour un suivi coordonné après une
          hospitalisation cardiaque (infarctus, insuffisance cardiaque, etc.).
        </p>
        <p>Concrètement, nous intervenons à domicile dès la sortie d'hospitalisation pour :</p>
        <ul>
          <li>Surveiller les constantes (tension, pulsations, saturation)</li>
          <li>Accompagner la prise des traitements prescrits</li>
          <li>Renforcer l'éducation thérapeutique (hygiène de vie, régime, activité)</li>
          <li>Assurer une coordination avec le médecin traitant et les cardiologues</li>
        </ul>
        <p>
          Objectif : éviter les réhospitalisations, détecter les signes d'alerte précocement, et
          garantir un retour à la maison en toute sérénité.
        </p>
      </>
    ),
  },
  {
    title: 'ICOPE',
    content: (
      <>
        <p>
          Notre cabinet participe au programme ICOPE (Integrated Care for Older People), un dispositif
          porté par l'OMS pour accompagner le vieillissement en bonne santé.
        </p>
        <p>Ce programme permet d'anticiper la perte d'autonomie grâce au repérage de 6 fonctions clés :</p>
        <ul>
          <li>Mobilité</li>
          <li>Mémoire</li>
          <li>Nutrition</li>
          <li>Vision</li>
          <li>Audition</li>
          <li>Bien-être mental</li>
        </ul>
        <p>
          Lors de nos passages à domicile, nous réalisons des évaluations simples pour identifier les
          fragilités, alerter le médecin traitant et mettre en place un accompagnement personnalisé.
        </p>
      </>
    ),
  },
  {
    title: 'Constatation de décès et certificat de décès',
    content: (
      <>
        <p>
          D'après le Décret n° 2025-371 du 22 avril 2025, et compte tenu de la pénurie de médecins
          traitants, nous sommes autorisés et formés à constater les décès non violents et non
          suspects de personnes majeures ainsi qu'à en établir le certificat.
        </p>
        <p>
          Cette démarche permet de réduire les délais d'attente imposés aux familles pour engager
          les démarches funéraires, et d'accompagner pleinement les proches dans le deuil.
        </p>
      </>
    ),
  },
];

function Missions() {
  return (
    <div className="container">
      <h1 className="page-title">Nos missions</h1>

      <div className="missions-intro">
        <p>
          Soins techniques, injections, perfusions, pansements, accompagnement dans vos soins
          d'hygiène ou suivi médicamenteux personnalisé : notre mission est de vous soigner avec
          humanité et respect de la dignité.
        </p>
        <img
          src={instrumentsImage}
          alt="Instruments de soins infirmiers"
          className="missions-image"
          width={800}
          height={534}
          loading="lazy"
          decoding="async"
        />
      </div>

      <h2>Formation continue</h2>
      <p>
        Dans une démarche d'accompagnement optimale, notre équipe se forme régulièrement aux
        bonnes pratiques. Nous avons notamment suivi les formations suivantes :
      </p>

      <Accordion items={MISSION_SECTIONS} />
    </div>
  );
}

export default Missions;

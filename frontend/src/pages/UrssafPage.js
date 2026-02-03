import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onClick}>
      {question}
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

const UrssafPage = () => {
  const [openFaq, setOpenFaq] = useState(-1);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="page urssaf-page" data-testid="urssaf-page">
      <section className="page-header">
        <span className="page-badge">Démarches administratives</span>
        <h1>URSSAF et Services à la Personne</h1>
        <p>Tout ce que vous devez savoir sur les démarches administratives et l'avance immédiate du crédit d'impôt.</p>
      </section>

      <section className="urssaf-intro">
        <h2>Qu'est-ce que l'URSSAF ?</h2>
        <p>L'URSSAF (Union de Recouvrement des cotisations de Sécurité Sociale et d'Allocations Familiales) est l'organisme chargé de collecter les cotisations sociales en France. Dans le cadre des services à la personne, l'URSSAF propose également le service d'avance immédiate du crédit d'impôt.</p>
        
        <div className="sap-image-container">
          <img src={SITE_CONFIG.sapImage} alt="Services à la personne" className="sap-image" />
        </div>
        
        <div className="agrement-box">
          <Shield size={24} />
          <div>
            <strong>{SITE_CONFIG.companyName} est une entreprise agréée</strong>
            <p>Agrément Services à la Personne n° {SITE_CONFIG.agrementNumber}</p>
          </div>
        </div>
      </section>

      <section className="avance-immediate">
        <span className="section-badge">Nouveauté</span>
        <h2>L'Avance Immédiate du Crédit d'Impôt</h2>
        <p>Depuis 2022, vous pouvez bénéficier de l'avance immédiate du crédit d'impôt. Concrètement, vous ne payez que <strong>50% du montant réel</strong> de vos prestations, l'URSSAF verse directement l'autre moitié à votre prestataire.</p>

        <div className="steps-horizontal">
          <div className="step-h">
            <span className="step-num">1</span>
            <h4>Activez le service</h4>
            <p>Créez votre compte sur particulier.urssaf.fr</p>
          </div>
          <div className="step-h">
            <span className="step-num">2</span>
            <h4>Liez votre prestataire</h4>
            <p>Associez {SITE_CONFIG.companyName} à votre compte</p>
          </div>
          <div className="step-h">
            <span className="step-num">3</span>
            <h4>Payez 50% uniquement</h4>
            <p>L'URSSAF verse automatiquement le reste</p>
          </div>
        </div>

        <a href="https://www.urssaf.fr/portail/home/services-a-la-personne.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Accéder au site URSSAF <ExternalLink size={16} />
        </a>
      </section>

      <section className="demarches-simplifiees">
        <h2>Vos démarches simplifiées avec {SITE_CONFIG.companyName}</h2>
        <p>En faisant appel à une entreprise agréée comme {SITE_CONFIG.companyName}, vos démarches sont considérablement simplifiées. Nous nous occupons de tout !</p>

        <div className="comparison-grid">
          <div className="comparison-card green">
            <h4>Ce que nous faisons</h4>
            <ul>
              <li><CheckCircle size={16} /> Déclarations sociales</li>
              <li><CheckCircle size={16} /> Cotisations URSSAF</li>
              <li><CheckCircle size={16} /> Attestation fiscale</li>
              <li><CheckCircle size={16} /> Factures conformes</li>
            </ul>
          </div>
          <div className="comparison-card blue">
            <h4>Ce que vous faites</h4>
            <ul>
              <li><CheckCircle size={16} /> Reporter le montant sur vos impôts</li>
              <li><CheckCircle size={16} /> (Optionnel) Activer l'avance immédiate</li>
              <li><CheckCircle size={16} /> Profiter de vos services !</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Questions fréquentes</h2>
        <FaqItem
          question="Dois-je créer un compte URSSAF ?"
          answer="Non, ce n'est pas obligatoire. Si vous ne souhaitez pas bénéficier de l'avance immédiate, vous déclarerez simplement vos dépenses lors de votre déclaration annuelle d'impôts et recevrez votre crédit d'impôt l'année suivante."
          isOpen={openFaq === 0}
          onClick={() => toggleFaq(0)}
        />
        <FaqItem
          question="Quelle est la différence entre CESU et prestataire agréé ?"
          answer={`Avec le CESU, vous êtes employeur et devez gérer les bulletins de paie. Avec un prestataire agréé comme ${SITE_CONFIG.companyName}, nous sommes l'employeur, vous n'avez aucune démarche administrative à effectuer.`}
          isOpen={openFaq === 1}
          onClick={() => toggleFaq(1)}
        />
        <FaqItem
          question="Comment obtenir mon attestation fiscale ?"
          answer="Nous vous envoyons automatiquement votre attestation fiscale au début de chaque année pour les prestations de l'année précédente. Elle est également disponible dans votre espace client."
          isOpen={openFaq === 2}
          onClick={() => toggleFaq(2)}
        />
      </section>

      <section className="useful-links">
        <div className="links-grid">
          <div className="links-card">
            <h4>Liens utiles</h4>
            <a href="https://www.urssaf.fr/" target="_blank" rel="noopener noreferrer">Site officiel URSSAF <ExternalLink size={14} /></a>
            <a href="https://www.impots.gouv.fr/" target="_blank" rel="noopener noreferrer">impots.gouv.fr <ExternalLink size={14} /></a>
            <a href="https://www.servicesalapersonne.gouv.fr/" target="_blank" rel="noopener noreferrer">Services à la personne <ExternalLink size={14} /></a>
          </div>
          <div className="links-card">
            <h4>Nos agréments</h4>
            <p><strong>Agrément SAP</strong><br/>Services à la Personne</p>
            <p><strong>SIRET</strong><br/>{SITE_CONFIG.siret}</p>
            <p><strong>Déclaration DREETS</strong><br/>Bourgogne-Franche-Comté</p>
          </div>
          <div className="links-card highlight">
            <h4>Besoin d'aide ?</h4>
            <p>Notre équipe est là pour vous accompagner dans toutes vos démarches.</p>
            <Link to="/contact" className="btn-outline">Nous contacter</Link>
          </div>
        </div>
      </section>

      <section className="urssaf-cta">
        <h2>Prêt à simplifier votre quotidien ?</h2>
        <p>Faites confiance à {SITE_CONFIG.companyName} pour vos services à domicile. Nous nous occupons de toutes les démarches administratives.</p>
        <Link to="/devis" className="btn-primary btn-large">Demander un devis gratuit</Link>
      </section>
    </div>
  );
};

export default UrssafPage;

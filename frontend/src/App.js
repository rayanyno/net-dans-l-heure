import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Star, Shield, Zap, Home as HomeIcon, Scissors, Baby, Leaf, Wrench, Heart, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Configuration du site - MODIFIABLE
const SITE_CONFIG = {
  phone: "0660083818",
  phoneFormatted: "06 60 08 38 18",
  email: "contact@netdanslheure.fr",
  address: "23 Rue des Champs sous la Chaux",
  city: "25600 Sochaux",
  companyName: "Net Dans L'Heure",
  agrementNumber: "994435865",
  siret: "994 435 865"
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/credit-impot', label: 'Crédit d\'impôt' },
    { path: '/urssaf', label: 'URSSAF' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav-container" data-testid="main-navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">{SITE_CONFIG.companyName}</span>
        </Link>

        <div className="nav-links-desktop">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href={`tel:${SITE_CONFIG.phone}`} className="nav-phone" data-testid="nav-phone">
            <Phone size={18} />
            <span>{SITE_CONFIG.phoneFormatted}</span>
          </a>
          <Link to="/devis" className="btn-primary" data-testid="nav-devis-btn">
            Devis gratuit
          </Link>
        </div>

        <button 
          className="nav-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          data-testid="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="nav-mobile-menu" data-testid="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/devis" className="btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
            Devis gratuit
          </Link>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>{SITE_CONFIG.companyName}</h3>
        <p>Services à la personne agréés dans la région Belfort - Montbéliard - Mulhouse.</p>
        <div className="footer-contact">
          <a href={`tel:${SITE_CONFIG.phone}`}><Phone size={16} /> {SITE_CONFIG.phoneFormatted}</a>
          <a href={`mailto:${SITE_CONFIG.email}`}><Mail size={16} /> {SITE_CONFIG.email}</a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Services</h4>
        <Link to="/services">Ménage & Entretien</Link>
        <Link to="/services">Garde d'enfants</Link>
        <Link to="/services">Jardinage</Link>
        <Link to="/services">Aide aux seniors</Link>
      </div>
      <div className="footer-section">
        <h4>Informations</h4>
        <Link to="/credit-impot">Crédit d'impôt</Link>
        <Link to="/urssaf">URSSAF</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/devis">Devis gratuit</Link>
      </div>
      <div className="footer-section">
        <h4>Agréments</h4>
        <p>Agrément SAP n° {SITE_CONFIG.agrementNumber}</p>
        <p>SIRET: {SITE_CONFIG.siret}</p>
        <p>Déclaration DREETS Bourgogne-Franche-Comté</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 {SITE_CONFIG.companyName}. Tous droits réservés.</p>
    </div>
  </footer>
);

// Home Page
const HomePage = () => (
  <div className="page home-page" data-testid="home-page">
    {/* Hero Section */}
    <section className="hero" data-testid="hero-section">
      <div className="hero-badge">50% Crédit d'impôt immédiat</div>
      <h1>Votre quotidien simplifié, votre sérénité préservée</h1>
      <p className="hero-subtitle">
        Services à la personne agréés dans la région Belfort - Montbéliard - Mulhouse. 
        Ménage, garde d'enfants, jardinage et plus encore.
      </p>
      <div className="hero-actions">
        <Link to="/devis" className="btn-primary btn-large" data-testid="hero-devis-btn">
          Obtenir un devis gratuit
        </Link>
        <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary btn-large" data-testid="hero-phone-btn">
          <Phone size={20} /> {SITE_CONFIG.phoneFormatted}
        </a>
      </div>
      <div className="hero-badges">
        <div className="badge"><Shield size={20} /> Agréé par l'État</div>
        <div className="badge"><Zap size={20} /> Intervention 24/48h</div>
        <div className="badge"><Star size={20} /> 100% Satisfait</div>
      </div>
    </section>

    {/* Services Section */}
    <section className="services-section" data-testid="services-section">
      <h2>Nos services à domicile</h2>
      <p className="section-subtitle">Des intervenants qualifiés et de confiance pour tous vos besoins du quotidien</p>
      
      <div className="services-grid">
        <div className="service-card featured" data-testid="service-menage">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" alt="Ménage" />
          <span className="service-badge">Le plus demandé</span>
          <h3>Ménage & Entretien</h3>
          <p>Entretien complet de votre maison, repassage inclus</p>
          <Link to="/services" className="service-link">En savoir plus <ArrowRight size={16} /></Link>
        </div>
        <div className="service-card" data-testid="service-garde">
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400" alt="Garde d'enfants" />
          <h3>Garde d'enfants</h3>
          <p>Garde ponctuelle ou régulière, sortie d'école</p>
        </div>
        <div className="service-card" data-testid="service-jardinage">
          <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400" alt="Jardinage" />
          <h3>Jardinage</h3>
          <p>Entretien de jardin, taille, tonte de pelouse</p>
        </div>
        <div className="service-card" data-testid="service-bricolage">
          <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400" alt="Petit bricolage" />
          <h3>Petit bricolage</h3>
          <p>Petits travaux, montage de meubles</p>
        </div>
        <div className="service-card" data-testid="service-seniors">
          <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400" alt="Aide aux seniors" />
          <h3>Aide aux seniors</h3>
          <p>Accompagnement, aide au quotidien</p>
        </div>
      </div>
      <Link to="/services" className="btn-outline" data-testid="voir-services-btn">
        Voir tous nos services
      </Link>
    </section>

    {/* How it works */}
    <section className="how-it-works" data-testid="how-it-works-section">
      <h2>Comment ça marche ?</h2>
      <p className="section-subtitle">Un processus simple et rapide pour bénéficier de nos services</p>
      
      <div className="steps-grid">
        <div className="step">
          <span className="step-number">1</span>
          <h3>Demandez un devis</h3>
          <p>Remplissez notre formulaire en ligne ou appelez-nous. C'est gratuit et sans engagement.</p>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <h3>Recevez votre devis</h3>
          <p>Nous vous recontactons sous 24h avec un devis personnalisé adapté à vos besoins.</p>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <h3>Profitez du service</h3>
          <p>Un intervenant qualifié se déplace chez vous aux horaires convenus.</p>
        </div>
      </div>
    </section>

    {/* Credit impot section */}
    <section className="credit-impot-preview" data-testid="credit-impot-preview">
      <div className="credit-content">
        <span className="section-badge">Avantage fiscal</span>
        <h2>Bénéficiez de 50% de crédit d'impôt</h2>
        <p>En tant qu'entreprise agréée services à la personne, toutes nos prestations vous permettent de bénéficier d'un crédit d'impôt de 50% sur les sommes versées.</p>
        <ul className="credit-list">
          <li><CheckCircle size={20} /> Crédit d'impôt immédiat ou remboursé</li>
          <li><CheckCircle size={20} /> Jusqu'à 6 000€ de réduction par an</li>
          <li><CheckCircle size={20} /> Attestation fiscale fournie</li>
        </ul>
        <Link to="/credit-impot" className="btn-primary" data-testid="credit-impot-link">En savoir plus</Link>
      </div>
      <div className="credit-visual">
        <div className="credit-badge">50%</div>
        <span>de crédit d'impôt</span>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section" data-testid="cta-section">
      <h2>Prêt à vous libérer du temps ?</h2>
      <p>Demandez votre devis gratuit dès maintenant et découvrez comment nos services peuvent simplifier votre quotidien.</p>
      <div className="cta-actions">
        <Link to="/devis" className="btn-primary btn-large">Demander un devis gratuit</Link>
        <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary btn-large">
          <Phone size={20} /> Nous appeler
        </a>
      </div>
    </section>
  </div>
);

// Services Page
const ServicesPage = () => {
  const services = [
    {
      id: 'menage',
      icon: <HomeIcon size={32} />,
      title: 'Ménage & Entretien',
      description: 'Entretien complet de votre intérieur par des professionnels qualifiés.',
      details: ['Nettoyage des sols', 'Dépoussiérage', 'Nettoyage des sanitaires', 'Repassage', 'Nettoyage des vitres'],
      price: 'À partir de 25€/h'
    },
    {
      id: 'garde',
      icon: <Baby size={32} />,
      title: 'Garde d\'enfants',
      description: 'Garde à domicile par des intervenants expérimentés et de confiance.',
      details: ['Sortie d\'école', 'Garde ponctuelle', 'Baby-sitting', 'Aide aux devoirs', 'Activités ludiques'],
      price: 'À partir de 20€/h'
    },
    {
      id: 'jardinage',
      icon: <Leaf size={32} />,
      title: 'Jardinage',
      description: 'Entretien de vos espaces verts par des jardiniers professionnels.',
      details: ['Tonte de pelouse', 'Taille de haies', 'Désherbage', 'Plantation', 'Entretien saisonnier'],
      price: 'À partir de 30€/h'
    },
    {
      id: 'bricolage',
      icon: <Wrench size={32} />,
      title: 'Petit bricolage',
      description: 'Petits travaux et réparations à domicile.',
      details: ['Montage de meubles', 'Fixations murales', 'Petites réparations', 'Installation d\'équipements'],
      price: 'À partir de 35€/h'
    },
    {
      id: 'seniors',
      icon: <Heart size={32} />,
      title: 'Aide aux seniors',
      description: 'Accompagnement bienveillant pour le maintien à domicile.',
      details: ['Aide aux repas', 'Accompagnement sorties', 'Aide administrative', 'Compagnie', 'Courses'],
      price: 'À partir de 22€/h'
    }
  ];

  return (
    <div className="page services-page" data-testid="services-page">
      <section className="page-header">
        <h1>Nos Services</h1>
        <p>Des prestations de qualité pour simplifier votre quotidien</p>
      </section>

      <section className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-detail-card" data-testid={`service-detail-${service.id}`}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}><CheckCircle size={16} /> {detail}</li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
            </div>
            <Link to="/devis" className="btn-primary">Demander un devis</Link>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Besoin d'un service personnalisé ?</h2>
        <p>Contactez-nous pour discuter de vos besoins spécifiques.</p>
        <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary btn-large">
          <Phone size={20} /> {SITE_CONFIG.phoneFormatted}
        </a>
      </section>
    </div>
  );
};

// Credit Impot Page
const CreditImpotPage = () => (
  <div className="page credit-impot-page" data-testid="credit-impot-page">
    <section className="page-header">
      <span className="page-badge">Avantage fiscal</span>
      <h1>Crédit d'impôt de 50%</h1>
      <p>Bénéficiez d'un avantage fiscal immédiat sur toutes nos prestations de services à la personne.</p>
    </section>

    <section className="credit-explanation">
      <h2>Qu'est-ce que le crédit d'impôt ?</h2>
      <p>Le crédit d'impôt pour l'emploi d'un salarié à domicile est un avantage fiscal accordé aux particuliers qui font appel à des services à la personne. Il permet de récupérer <strong>50% des sommes versées</strong> pour ces services.</p>
      
      <div className="example-box">
        <h4>Exemple concret</h4>
        <p>Pour 200€ de prestations de ménage, vous bénéficiez de 100€ de crédit d'impôt. Votre coût réel est donc de seulement 100€ !</p>
      </div>
    </section>

    <section className="who-benefits">
      <h2>Qui peut en bénéficier ?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <CheckCircle size={32} />
          <h3>Tous les contribuables</h3>
          <p>Que vous soyez imposable ou non, vous pouvez bénéficier du crédit d'impôt.</p>
        </div>
        <div className="benefit-card">
          <CheckCircle size={32} />
          <h3>Résidence principale ou secondaire</h3>
          <p>Les services peuvent être effectués dans votre résidence principale ou secondaire en France.</p>
        </div>
        <div className="benefit-card">
          <CheckCircle size={32} />
          <h3>Pour vous ou vos ascendants</h3>
          <p>Vous pouvez également en bénéficier si vous payez des services pour vos parents ou grands-parents.</p>
        </div>
      </div>
    </section>

    <section className="plafonds">
      <h2>Plafonds et limites</h2>
      <table className="plafonds-table">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Plafond annuel</th>
            <th>Crédit max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cas général</td>
            <td>12 000 €</td>
            <td>6 000 €</td>
          </tr>
          <tr>
            <td>+ 1 500 € par enfant à charge</td>
            <td>jusqu'à 15 000 €</td>
            <td>7 500 €</td>
          </tr>
          <tr>
            <td>Personne invalide dans le foyer</td>
            <td>20 000 €</td>
            <td>10 000 €</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section className="how-to-benefit">
      <h2>Comment en bénéficier ?</h2>
      <div className="steps-vertical">
        <div className="step-item">
          <span className="step-num">1</span>
          <div>
            <h4>Faites appel à nos services</h4>
            <p>Demandez un devis et réservez vos prestations</p>
          </div>
        </div>
        <div className="step-item">
          <span className="step-num">2</span>
          <div>
            <h4>Recevez votre attestation</h4>
            <p>Nous vous envoyons une attestation fiscale annuelle</p>
          </div>
        </div>
        <div className="step-item">
          <span className="step-num">3</span>
          <div>
            <h4>Déclarez vos dépenses</h4>
            <p>Reportez le montant sur votre déclaration d'impôts</p>
          </div>
        </div>
      </div>
    </section>

    <section className="simulator">
      <h3>Simulateur</h3>
      <p>Calculez rapidement votre économie grâce au crédit d'impôt</p>
      <div className="simulator-result">
        <span className="simulator-example">Exemple : 300€/mois</span>
        <div className="simulator-value">1 800€</div>
        <span>d'économie par an</span>
      </div>
      <Link to="/devis" className="btn-primary">Obtenir un devis personnalisé</Link>
    </section>

    <section className="urssaf-link">
      <h3>Avance immédiate</h3>
      <p>Grâce au service URSSAF, vous pouvez bénéficier de l'avance immédiate du crédit d'impôt et ne payer que 50% du montant réel.</p>
      <Link to="/urssaf" className="btn-outline">En savoir plus <ArrowRight size={16} /></Link>
    </section>
  </div>
);

// URSSAF Page
const UrssafPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Dois-je créer un compte URSSAF ?",
      answer: "Non, ce n'est pas obligatoire. Si vous ne souhaitez pas bénéficier de l'avance immédiate, vous déclarerez simplement vos dépenses lors de votre déclaration annuelle d'impôts et recevrez votre crédit d'impôt l'année suivante."
    },
    {
      question: "Quelle est la différence entre CESU et prestataire agréé ?",
      answer: `Avec le CESU, vous êtes employeur et devez gérer les bulletins de paie. Avec un prestataire agréé comme ${SITE_CONFIG.companyName}, nous sommes l'employeur, vous n'avez aucune démarche administrative à effectuer.`
    },
    {
      question: "Comment obtenir mon attestation fiscale ?",
      answer: "Nous vous envoyons automatiquement votre attestation fiscale au début de chaque année pour les prestations de l'année précédente. Elle est également disponible dans votre espace client."
    }
  ];

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
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item" data-testid={`faq-item-${idx}`}>
            <button 
              className="faq-question" 
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              {faq.question}
              {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openFaq === idx && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
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

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '', email: '', telephone: '', sujet: '', message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="page contact-page" data-testid="contact-page">
      <section className="page-header">
        <span className="page-badge">Contactez-nous</span>
        <h1>Nous sommes à votre écoute</h1>
        <p>Une question ? Besoin d'un renseignement ? N'hésitez pas à nous contacter, nous vous répondons sous 24h.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card" data-testid="contact-phone">
            <Phone size={24} />
            <h3>Téléphone</h3>
            <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phoneFormatted}</a>
          </div>
          <div className="info-card" data-testid="contact-email">
            <Mail size={24} />
            <h3>Email</h3>
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
          </div>
          <div className="info-card" data-testid="contact-address">
            <MapPin size={24} />
            <h3>Adresse</h3>
            <p>{SITE_CONFIG.address}<br/>{SITE_CONFIG.city}</p>
          </div>
          <div className="info-card" data-testid="contact-hours">
            <Clock size={24} />
            <h3>Horaires</h3>
            <p>Lundi - Vendredi<br/>8h00 - 18h00</p>
          </div>

          <div className="zone-intervention">
            <h3>Zone d'intervention</h3>
            <p>Nous intervenons dans toute la région :</p>
            <ul>
              <li>Belfort et environs</li>
              <li>Montbéliard et Pays de Montbéliard</li>
              <li>Mulhouse et alentours</li>
              <li>Héricourt, Sochaux, Audincourt...</li>
            </ul>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="form-group">
            <label>Nom complet *</label>
            <input 
              type="text" 
              value={formData.nom} 
              onChange={(e) => setFormData({...formData, nom: e.target.value})}
              required 
              data-testid="contact-input-nom"
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              data-testid="contact-input-email"
            />
          </div>
          <div className="form-group">
            <label>Téléphone *</label>
            <input 
              type="tel" 
              value={formData.telephone} 
              onChange={(e) => setFormData({...formData, telephone: e.target.value})}
              required 
              data-testid="contact-input-telephone"
            />
          </div>
          <div className="form-group">
            <label>Sujet *</label>
            <input 
              type="text" 
              value={formData.sujet} 
              onChange={(e) => setFormData({...formData, sujet: e.target.value})}
              required 
              data-testid="contact-input-sujet"
            />
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea 
              value={formData.message} 
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required 
              rows={5}
              data-testid="contact-input-message"
            />
          </div>
          <button type="submit" className="btn-primary" disabled={status === 'loading'} data-testid="contact-submit-btn">
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
          {status === 'success' && <p className="success-message">Message envoyé avec succès !</p>}
          {status === 'error' && <p className="error-message">Une erreur est survenue. Veuillez réessayer.</p>}
        </form>
      </section>
    </div>
  );
};

// Devis Page
const DevisPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [],
    frequence: '',
    adresse: '',
    code_postal: '',
    ville: '',
    nom: '',
    email: '',
    telephone: '',
    commentaire: ''
  });
  const [status, setStatus] = useState(null);

  const services = [
    { id: 'menage', label: 'Ménage & Entretien', icon: <HomeIcon size={24} /> },
    { id: 'garde', label: 'Garde d\'enfants', icon: <Baby size={24} /> },
    { id: 'jardinage', label: 'Jardinage', icon: <Leaf size={24} /> },
    { id: 'bricolage', label: 'Petit bricolage', icon: <Wrench size={24} /> },
    { id: 'seniors', label: 'Aide aux seniors', icon: <Heart size={24} /> }
  ];

  const frequences = [
    { id: 'ponctuel', label: 'Intervention ponctuelle' },
    { id: 'hebdo', label: '1 fois par semaine' },
    { id: 'bi-hebdo', label: '2 fois par semaine' },
    { id: 'mensuel', label: '1 fois par mois' }
  ];

  const toggleService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      await fetch(`${API}/devis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const canProceed = () => {
    switch(step) {
      case 1: return formData.services.length > 0;
      case 2: return formData.frequence !== '';
      case 3: return formData.adresse && formData.code_postal && formData.ville;
      case 4: return formData.nom && formData.email && formData.telephone;
      default: return false;
    }
  };

  if (status === 'success') {
    return (
      <div className="page devis-page" data-testid="devis-page">
        <div className="devis-success">
          <CheckCircle size={64} />
          <h2>Demande envoyée avec succès !</h2>
          <p>Nous vous recontacterons sous 24h avec votre devis personnalisé.</p>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page devis-page" data-testid="devis-page">
      <section className="page-header">
        <span className="page-badge">Devis gratuit et sans engagement</span>
        <h1>Demander un devis</h1>
        <p>Remplissez le formulaire et recevez votre devis personnalisé sous 24h</p>
      </section>

      <div className="devis-progress">
        <div className="progress-bar" style={{width: `${(step/4)*100}%`}}></div>
        <span>Étape {step} sur 4 — {(step/4)*100}%</span>
      </div>

      <div className="devis-form" data-testid="devis-form">
        {step === 1 && (
          <div className="devis-step" data-testid="devis-step-1">
            <h2>Quel service vous intéresse ?</h2>
            <div className="services-select">
              {services.map(service => (
                <button
                  key={service.id}
                  className={`service-option ${formData.services.includes(service.id) ? 'selected' : ''}`}
                  onClick={() => toggleService(service.id)}
                  data-testid={`service-option-${service.id}`}
                >
                  {service.icon}
                  <span>{service.label}</span>
                  {formData.services.includes(service.id) && <CheckCircle size={20} />}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="devis-step" data-testid="devis-step-2">
            <h2>À quelle fréquence ?</h2>
            <div className="frequence-select">
              {frequences.map(freq => (
                <button
                  key={freq.id}
                  className={`freq-option ${formData.frequence === freq.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, frequence: freq.id})}
                  data-testid={`freq-option-${freq.id}`}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="devis-step" data-testid="devis-step-3">
            <h2>Où intervenons-nous ?</h2>
            <div className="form-group">
              <label>Adresse</label>
              <input 
                type="text" 
                value={formData.adresse}
                onChange={(e) => setFormData({...formData, adresse: e.target.value})}
                placeholder="Numéro et rue"
                data-testid="devis-input-adresse"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Code postal</label>
                <input 
                  type="text" 
                  value={formData.code_postal}
                  onChange={(e) => setFormData({...formData, code_postal: e.target.value})}
                  placeholder="25000"
                  data-testid="devis-input-cp"
                />
              </div>
              <div className="form-group">
                <label>Ville</label>
                <input 
                  type="text" 
                  value={formData.ville}
                  onChange={(e) => setFormData({...formData, ville: e.target.value})}
                  placeholder="Ville"
                  data-testid="devis-input-ville"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="devis-step" data-testid="devis-step-4">
            <h2>Vos coordonnées</h2>
            <div className="form-group">
              <label>Nom complet</label>
              <input 
                type="text" 
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                data-testid="devis-input-nom"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                data-testid="devis-input-email"
              />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input 
                type="tel" 
                value={formData.telephone}
                onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                data-testid="devis-input-telephone"
              />
            </div>
            <div className="form-group">
              <label>Commentaire (optionnel)</label>
              <textarea 
                value={formData.commentaire}
                onChange={(e) => setFormData({...formData, commentaire: e.target.value})}
                rows={3}
                data-testid="devis-input-commentaire"
              />
            </div>
          </div>
        )}

        <div className="devis-actions">
          {step > 1 && (
            <button className="btn-secondary" onClick={() => setStep(step - 1)} data-testid="devis-btn-prev">
              Précédent
            </button>
          )}
          {step < 4 ? (
            <button 
              className="btn-primary" 
              onClick={() => setStep(step + 1)} 
              disabled={!canProceed()}
              data-testid="devis-btn-next"
            >
              Suivant
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={handleSubmit} 
              disabled={!canProceed() || status === 'loading'}
              data-testid="devis-btn-submit"
            >
              {status === 'loading' ? 'Envoi...' : 'Envoyer ma demande'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/credit-impot" element={<CreditImpotPage />} />
            <Route path="/urssaf" element={<UrssafPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devis" element={<DevisPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

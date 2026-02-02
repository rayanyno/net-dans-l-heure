import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const HomePage = () => (
  <div className="page home-page" data-testid="home-page">
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

export default HomePage;

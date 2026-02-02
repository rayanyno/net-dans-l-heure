import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config';

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

export default Footer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/credit-impot', label: "Crédit d'impôt" },
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

export default Navigation;

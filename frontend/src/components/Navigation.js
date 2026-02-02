import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const NavLink = ({ to, label, isActive, onClick }) => (
  <Link
    to={to}
    className={`nav-link ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, isActive, onClick }) => (
  <Link
    to={to}
    className={`nav-mobile-link ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-container" data-testid="main-navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          <img src={SITE_CONFIG.logo} alt={SITE_CONFIG.companyName} className="logo-image" />
        </Link>

        <div className="nav-links-desktop">
          <NavLink to="/" label="Accueil" isActive={path === '/'} />
          <NavLink to="/services" label="Services" isActive={path === '/services'} />
          <NavLink to="/credit-impot" label="Crédit d'impôt" isActive={path === '/credit-impot'} />
          <NavLink to="/urssaf" label="URSSAF" isActive={path === '/urssaf'} />
          <NavLink to="/contact" label="Contact" isActive={path === '/contact'} />
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
          <MobileNavLink to="/" label="Accueil" isActive={path === '/'} onClick={closeMenu} />
          <MobileNavLink to="/services" label="Services" isActive={path === '/services'} onClick={closeMenu} />
          <MobileNavLink to="/credit-impot" label="Crédit d'impôt" isActive={path === '/credit-impot'} onClick={closeMenu} />
          <MobileNavLink to="/urssaf" label="URSSAF" isActive={path === '/urssaf'} onClick={closeMenu} />
          <MobileNavLink to="/contact" label="Contact" isActive={path === '/contact'} onClick={closeMenu} />
          <Link to="/devis" className="btn-primary mobile-cta" onClick={closeMenu}>
            Devis gratuit
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

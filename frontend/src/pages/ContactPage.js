import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, API } from '../config';

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

export default ContactPage;

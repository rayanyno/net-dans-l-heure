import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home as HomeIcon, Baby, Leaf, Wrench, Heart } from 'lucide-react';
import { API } from '../config';

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
    { id: 'garde', label: "Garde d'enfants", icon: <Baby size={24} /> },
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

export default DevisPage;

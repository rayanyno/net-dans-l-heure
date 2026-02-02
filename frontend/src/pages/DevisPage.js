import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home as HomeIcon, Baby, Leaf, Wrench, Heart } from 'lucide-react';
import { API } from '../config';

const DevisPage = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [frequence, setFrequence] = useState('');
  const [adresse, setAdresse] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [status, setStatus] = useState(null);

  const toggleService = (serviceId) => {
    if (selectedServices.indexOf(serviceId) >= 0) {
      setSelectedServices(selectedServices.filter(s => s !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const isServiceSelected = (serviceId) => {
    return selectedServices.indexOf(serviceId) >= 0;
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      await fetch(`${API}/devis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services: selectedServices,
          frequence,
          adresse,
          code_postal: codePostal,
          ville,
          nom,
          email,
          telephone,
          commentaire
        })
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const canProceed = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return frequence !== '';
    if (step === 3) return adresse && codePostal && ville;
    if (step === 4) return nom && email && telephone;
    return false;
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

  const progressWidth = `${(step/4)*100}%`;

  return (
    <div className="page devis-page" data-testid="devis-page">
      <section className="page-header">
        <span className="page-badge">Devis gratuit et sans engagement</span>
        <h1>Demander un devis</h1>
        <p>Remplissez le formulaire et recevez votre devis personnalisé sous 24h</p>
      </section>

      <div className="devis-progress">
        <div className="progress-bar" style={{width: progressWidth}}></div>
        <span>Étape {step} sur 4</span>
      </div>

      <div className="devis-form" data-testid="devis-form">
        {step === 1 && (
          <div className="devis-step" data-testid="devis-step-1">
            <h2>Quel service vous intéresse ?</h2>
            <div className="services-select">
              <button
                className={`service-option ${isServiceSelected('menage') ? 'selected' : ''}`}
                onClick={() => toggleService('menage')}
                data-testid="service-option-menage"
              >
                <HomeIcon size={24} />
                <span>Ménage & Entretien</span>
                {isServiceSelected('menage') && <CheckCircle size={20} />}
              </button>
              <button
                className={`service-option ${isServiceSelected('garde') ? 'selected' : ''}`}
                onClick={() => toggleService('garde')}
                data-testid="service-option-garde"
              >
                <Baby size={24} />
                <span>Garde d'enfants</span>
                {isServiceSelected('garde') && <CheckCircle size={20} />}
              </button>
              <button
                className={`service-option ${isServiceSelected('jardinage') ? 'selected' : ''}`}
                onClick={() => toggleService('jardinage')}
                data-testid="service-option-jardinage"
              >
                <Leaf size={24} />
                <span>Jardinage</span>
                {isServiceSelected('jardinage') && <CheckCircle size={20} />}
              </button>
              <button
                className={`service-option ${isServiceSelected('bricolage') ? 'selected' : ''}`}
                onClick={() => toggleService('bricolage')}
                data-testid="service-option-bricolage"
              >
                <Wrench size={24} />
                <span>Petit bricolage</span>
                {isServiceSelected('bricolage') && <CheckCircle size={20} />}
              </button>
              <button
                className={`service-option ${isServiceSelected('seniors') ? 'selected' : ''}`}
                onClick={() => toggleService('seniors')}
                data-testid="service-option-seniors"
              >
                <Heart size={24} />
                <span>Aide aux seniors</span>
                {isServiceSelected('seniors') && <CheckCircle size={20} />}
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="devis-step" data-testid="devis-step-2">
            <h2>À quelle fréquence ?</h2>
            <div className="frequence-select">
              <button
                className={`freq-option ${frequence === 'ponctuel' ? 'selected' : ''}`}
                onClick={() => setFrequence('ponctuel')}
                data-testid="freq-option-ponctuel"
              >
                Intervention ponctuelle
              </button>
              <button
                className={`freq-option ${frequence === 'hebdo' ? 'selected' : ''}`}
                onClick={() => setFrequence('hebdo')}
                data-testid="freq-option-hebdo"
              >
                1 fois par semaine
              </button>
              <button
                className={`freq-option ${frequence === 'bi-hebdo' ? 'selected' : ''}`}
                onClick={() => setFrequence('bi-hebdo')}
                data-testid="freq-option-bi-hebdo"
              >
                2 fois par semaine
              </button>
              <button
                className={`freq-option ${frequence === 'mensuel' ? 'selected' : ''}`}
                onClick={() => setFrequence('mensuel')}
                data-testid="freq-option-mensuel"
              >
                1 fois par mois
              </button>
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
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder="Numéro et rue"
                data-testid="devis-input-adresse"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Code postal</label>
                <input 
                  type="text" 
                  value={codePostal}
                  onChange={(e) => setCodePostal(e.target.value)}
                  placeholder="25000"
                  data-testid="devis-input-cp"
                />
              </div>
              <div className="form-group">
                <label>Ville</label>
                <input 
                  type="text" 
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
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
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                data-testid="devis-input-nom"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="devis-input-email"
              />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input 
                type="tel" 
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                data-testid="devis-input-telephone"
              />
            </div>
            <div className="form-group">
              <label>Commentaire (optionnel)</label>
              <textarea 
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
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

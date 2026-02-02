import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Home as HomeIcon, Baby, Leaf, Wrench, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const ServiceCard = ({ icon, title, description, details, price }) => (
  <div className="service-detail-card">
    <div className="service-icon">{icon}</div>
    <div className="service-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="service-details">
        {details.split('|').map((detail, idx) => (
          <li key={idx}><CheckCircle size={16} /> {detail}</li>
        ))}
      </ul>
      <div className="service-price">{price}</div>
    </div>
    <Link to="/devis" className="btn-primary">Demander un devis</Link>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="page services-page" data-testid="services-page">
      <section className="page-header">
        <h1>Nos Services</h1>
        <p>Des prestations de qualité pour simplifier votre quotidien</p>
      </section>

      <section className="services-list">
        <ServiceCard
          icon={<HomeIcon size={32} />}
          title="Ménage & Entretien"
          description="Entretien complet de votre intérieur par des professionnels qualifiés."
          details="Nettoyage des sols|Dépoussiérage|Nettoyage des sanitaires|Repassage|Nettoyage des vitres"
          price="À partir de 25€/h"
        />
        <ServiceCard
          icon={<Baby size={32} />}
          title="Garde d'enfants"
          description="Garde à domicile par des intervenants expérimentés et de confiance."
          details="Sortie d'école|Garde ponctuelle|Baby-sitting|Aide aux devoirs|Activités ludiques"
          price="À partir de 20€/h"
        />
        <ServiceCard
          icon={<Leaf size={32} />}
          title="Jardinage"
          description="Entretien de vos espaces verts par des jardiniers professionnels."
          details="Tonte de pelouse|Taille de haies|Désherbage|Plantation|Entretien saisonnier"
          price="À partir de 30€/h"
        />
        <ServiceCard
          icon={<Wrench size={32} />}
          title="Petit bricolage"
          description="Petits travaux et réparations à domicile."
          details="Montage de meubles|Fixations murales|Petites réparations|Installation d'équipements"
          price="À partir de 35€/h"
        />
        <ServiceCard
          icon={<Heart size={32} />}
          title="Aide aux seniors"
          description="Accompagnement bienveillant pour le maintien à domicile."
          details="Aide aux repas|Accompagnement sorties|Aide administrative|Compagnie|Courses"
          price="À partir de 22€/h"
        />
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

export default ServicesPage;

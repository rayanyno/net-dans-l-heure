import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Home as HomeIcon, Baby, Leaf, Wrench, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config';

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
      title: "Garde d'enfants",
      description: 'Garde à domicile par des intervenants expérimentés et de confiance.',
      details: ["Sortie d'école", 'Garde ponctuelle', 'Baby-sitting', 'Aide aux devoirs', 'Activités ludiques'],
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
      details: ['Montage de meubles', 'Fixations murales', 'Petites réparations', "Installation d'équipements"],
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

export default ServicesPage;

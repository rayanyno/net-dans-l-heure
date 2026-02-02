import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

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

export default CreditImpotPage;

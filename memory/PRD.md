# Net Dans L'Heure - Services à la Personne

## Problem Statement Original
Recréer le site complet de Net Dans L'Heure (https://homecare-services-2.preview.emergentagent.com/urssaf) avec toutes les pages et modifier le numéro de contact par 0660083818.

## Architecture

### Frontend (React)
- **Pages**: Accueil, Services, Crédit d'impôt, URSSAF, Contact, Devis
- **Components**: Navigation, Footer
- **Configuration**: Centralisée dans `/app/frontend/src/config.js`
- **Styling**: CSS personnalisé avec design moderne

### Backend (FastAPI)
- **API Contact**: POST/GET `/api/contact`
- **API Devis**: POST/GET `/api/devis`
- **Base de données**: MongoDB

## Core Requirements (Static)
- ✅ Site de services à la personne agréé
- ✅ Numéro de contact: 0660083818 (affiché 06 60 08 38 18)
- ✅ Formulaire de contact fonctionnel
- ✅ Formulaire de devis multi-étapes
- ✅ Informations URSSAF et crédit d'impôt
- ✅ Design professionnel et responsive

## User Personas
1. **Particuliers** cherchant des services à domicile (ménage, jardinage, garde d'enfants)
2. **Seniors** nécessitant de l'aide au quotidien
3. **Familles** avec enfants nécessitant garde d'enfants

## What's Been Implemented (2 Feb 2026)

### Pages créées
- ✅ **Accueil**: Hero section, services preview, how it works, crédit d'impôt preview, CTA
- ✅ **Services**: Liste détaillée des 5 services avec tarifs
- ✅ **Crédit d'impôt**: Explications, plafonds, simulateur, étapes
- ✅ **URSSAF**: Avance immédiate, FAQ, agréments, liens utiles
- ✅ **Contact**: Coordonnées complètes, formulaire, zone d'intervention
- ✅ **Devis**: Formulaire 4 étapes (services, fréquence, adresse, coordonnées)

### APIs Backend
- ✅ POST/GET `/api/contact` - Gestion des messages de contact
- ✅ POST/GET `/api/devis` - Gestion des demandes de devis

### Configuration Site
```javascript
SITE_CONFIG = {
  phone: "0660083818",
  phoneFormatted: "06 60 08 38 18",
  email: "contact@netdanslheure.fr",
  address: "23 Rue des Champs sous la Chaux",
  city: "25600 Sochaux",
  companyName: "Net Dans L'Heure",
  agrementNumber: "994435865",
  siret: "994 435 865"
}
```

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Recréer toutes les pages du site
- [x] Modifier le numéro de contact

### P1 (High Priority) - Future
- [ ] Panneau d'administration pour modifier le contenu
- [ ] Système de notification par email pour les demandes
- [ ] Espace client avec suivi des demandes

### P2 (Medium Priority) - Future
- [ ] Intégration calendrier pour prise de RDV
- [ ] Témoignages clients
- [ ] Blog/actualités

## Next Tasks
1. Ajouter un panneau d'administration pour modifier le contenu du site
2. Configurer les notifications email (SendGrid/Resend)
3. Ajouter un système de suivi des demandes de devis

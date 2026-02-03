// Configuration du site - MODIFIABLE
export const SITE_CONFIG = {
  phone: "0660083818",
  phoneFormatted: "06 60 08 38 18",
  email: "contact@netdanslheure.fr",
  address: "23 Rue des Champs sous la Chaux",
  city: "25600 Sochaux",
  companyName: "Net Dans L'Heure",
  agrementNumber: "994435865",
  siret: "994 435 865",
  logo: "https://customer-assets.emergentagent.com/job_homecare-preview/artifacts/b9u18l0s_IMG_2320.jpeg",
  sapImage: "https://www.servicesalapersonne.gouv.fr/sites/default/files/inline-images/LogoSAP_1.png"
};

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

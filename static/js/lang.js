const translations = {
  fr: {
    title: "Voltique — Votre énergie. Notre expertise.",
    "nav-about": "À propos",
    "nav-why": "Pourquoi Voltique",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "hero-title":
      "Solutions énergétiques plus intelligentes pour les maisons et les entreprises",
    "hero-lead":
      "Voltique vous aide à concevoir, installer et gérer des systèmes énergétiques efficaces — solaire, stockage, recharge EV et services de bâtiments intelligents — pour réduire les coûts et les émissions.",
    "hero-cta": "Obtenez une consultation gratuite",
    "feature1-title": "Énergie commerciale",
    "feature1-desc":
      "Réduisez les coûts d'exploitation pour les flottes, les sites et les bâtiments.",
    "feature2-title": "Recharge EV",
    "feature2-desc":
      "Solutions de recharge évolutives pour les maisons et les flottes commerciales.",
    "feature3-title": "Solaire + Stockage",
    "feature3-desc":
      "Transformez la lumière du soleil en énergie fiable avec des systèmes de batterie optimisés.",
    "about-title": "À propos de Voltique",
    "about-desc":
      "Fondé par <strong>KUMAR Naresh</strong>, Voltique propose des solutions adaptées qui équilibrent performance et durabilité. Nous travaillons avec les propriétaires, les gestionnaires de biens et les entreprises pour créer des systèmes énergétiques résilients qui économisent de l'argent et réduisent le carbone.",
    "partners-title": "Partenaires de confiance",
    "partners-desc":
      "Nous collaborons avec les principaux fabricants d'équipements et fournisseurs de financement pour offrir la meilleure valeur à nos clients.",
    "partners-extra": "Certifié ISO • Assuré • Garantie système 10 ans",
    "why-title": "Pourquoi Voltique ?",
    "why-desc":
      "Nous combinons une expertise approfondie du secteur avec une approche centrée sur le client pour fournir des solutions énergétiques adaptées à vos besoins.",
    "why-cta": "Demander un devis",
    "why-feature1-title": "Solutions personnalisées",
    "why-feature1-desc":
      "Chaque projet est adapté à vos objectifs énergétiques et aux conditions du site.",
    "why-feature2-title": "Service de bout en bout",
    "why-feature2-desc":
      "De la consultation initiale à la maintenance continue, nous nous occupons de tout.",
    "why-feature3-title": "Expertise éprouvée",
    "why-feature3-desc":
      "Notre équipe possède des années d'expérience dans la réalisation de projets énergétiques réussis dans tous les secteurs.",
    "services-title": "Services",
    "service1-title": "Conception et ingénierie",
    "service1-desc":
      "Modélisation du site, dimensionnement du système et analyse du ROI pour maximiser la performance.",
    "service2-title": "Installation",
    "service2-desc":
      "Gestion complète du projet, installateurs certifiés et déploiements sécurisés.",
    "service3-title": "Opérations",
    "service3-desc":
      "Surveillance, maintenance et contrats de performance pour maintenir les systèmes en bonne santé.",
    "contact-title": "Contact",
    "contact-desc":
      "Vous voulez parler ? Envoyez-nous un message et nos experts en énergie vous contacteront.",
    "contact-cta": "Envoyer le message",
    "contact-email": "Ou envoyez-nous un email",
    "footer-text": "• Votre énergie. Notre expertise.",
    "footer-year": "Fait avec soin — 2025",
  },
  en: {
    title: "Voltique — Your Energy. Our Expertise.",
    "nav-about": "About",
    "nav-why": "Why Voltique",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "hero-title": "Smarter energy solutions for homes & businesses",
    "hero-lead":
      "Voltique helps you design, install and manage efficient energy systems — solar, storage, EV charging and smart building services — to reduce costs and emissions.",
    "hero-cta": "Get a free consultation",
    "feature1-title": "Commercial Energy",
    "feature1-desc":
      "Reduce operating costs across fleets, sites and buildings.",
    "feature2-title": "EV Charging",
    "feature2-desc":
      "Scalable charging solutions for homes and commercial fleets.",
    "feature3-title": "Solar + Storage",
    "feature3-desc":
      "Turn sunlight into reliable power with optimized battery systems.",
    "about-title": "About Voltique",
    "about-desc":
      "Founded by <strong>KUMAR Naresh</strong>, Voltique delivers tailored solutions that balance performance with sustainability. We work with homeowners, property managers and enterprises to create resilient energy systems that save money and cut carbon.",
    "partners-title": "Trusted partners",
    "partners-desc":
      "We partner with leading equipment manufacturers and financing providers to bring the best value to our customers.",
    "partners-extra": "ISO certified • Insured • 10-year system warranty",
    "why-title": "Why Voltique?",
    "why-desc":
      "We combine deep industry expertise with a customer-first approach to deliver energy solutions that truly meet your needs.",
    "why-cta": "Request a quote",
    "why-feature1-title": "Customized Solutions",
    "why-feature1-desc":
      "Every project is tailored to your unique energy goals and site conditions.",
    "why-feature2-title": "End-to-End Service",
    "why-feature2-desc":
      "From initial consultation to ongoing maintenance, we handle it all.",
    "why-feature3-title": "Proven Expertise",
    "why-feature3-desc":
      "Our team has years of experience delivering successful energy projects across sectors.",
    "services-title": "Services",
    "service1-title": "Design & Engineering",
    "service1-desc":
      "Site modelling, system sizing and ROI analysis to maximize performance.",
    "service2-title": "Installation",
    "service2-desc":
      "Full project management, certified installers and safety-first deployments.",
    "service3-title": "Operations",
    "service3-desc":
      "Monitoring, maintenance and performance contracts to keep systems healthy.",
    "contact-title": "Contact",
    "contact-desc":
      "Want to talk? Send us a message and our energy experts will reach out.",
    "contact-cta": "Send message",
    "contact-email": "Or email us",
    "footer-text": "• Your Energy. Our Expertise.",
    "footer-year": "Made with care — 2025",
  },
};

// Function to apply a language
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("site-lang", lang);
  const elems = document.querySelectorAll("[data-key]");
  elems.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  // Update language switch button
  const langBtn = document.getElementById("lang-switch");
  if (lang === "fr") {
    langBtn.innerHTML = "FR <span>🇫🇷</span>";
  } else {
    langBtn.innerHTML = "EN <span>🇬🇧</span>";
  }
}

// Check saved language or default to 'fr'
const savedLang = localStorage.getItem("site-lang") || "fr";
applyLanguage(savedLang);

// Toggle language on button click
const langBtn = document.getElementById("lang-switch");
langBtn.addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "en" ? "fr" : "en";
  applyLanguage(newLang);
});

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "des Idées", imagePath: "/images/ideas.svg" },
  { text: "des Concepts", imagePath: "/images/concepts.svg" },
  { text: "des Designs", imagePath: "/images/designs.svg" },
  { text: "du Code", imagePath: "/images/code.svg" },
  // { text: "des Projets", imagePath: "/images/projects.svg" },
  // { text: "des Résultats", imagePath: "/images/results.svg" },
  // { text: "des Solutions", imagePath: "/images/solutions.svg" },
  // { text: "des Expériences", imagePath: "/images/experiences.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Années d'Expérience" },
  { value: 10, suffix: "+", label: "Clients Satisfaits" },
  { value: 20, suffix: "+", label: "Projets Réalisés" },
  { value: 99, suffix: "%", label: "Satisfaction Client" },
  // { value: 5, suffix: "+", label: "Technologies Maîtrisées" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/myOfficialLogo.png",
  },
  {
    imgPath: "/images/logos/myOfficialLogo.png",
  },
  {
    imgPath: "/images/logos/myOfficialLogo.png",
  },
  {
    imgPath: "/images/logos/myOfficialLogo.png",
  },
  {
    imgPath: "/images/logos/passerelle-logo.webp",
  },
  {
    imgPath: "/images/logos/passerelle-logo.webp",
  },
  {
    imgPath: "/images/logos/passerelle-logo.webp",
  },
  {
    imgPath: "/images/logos/passerelle-logo.webp",
  },
  {
    imgPath: "/images/logos/simplon.svg",
  },
  {
    imgPath: "/images/logos/simplon.svg",
  },
  {
    imgPath: "/images/logos/simplon.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Focus sur la qualité",
    desc: "Livrer des résultats de haute qualité en accordant une attention minutieuse à chaque détail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication fiable",
    desc: "Maintenir une communication ouverte et transparente tout au long du projet.",
  },
  {
    imgPath: "/images/time.png",
    title: "Livraison dans les délais",
    desc: "Respecter les délais convenus pour garantir la satisfaction du client.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Laravel Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Laravel Developer",
    modelPath: "/models/laravel-transformed.glb",
    scale: 18,
    // position: [0, -0.3, 0],
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Diagui a été un Partenaire fidèle et efficace pour la gestion de notre site e-commerce. Sa capacité à comprendre nos besoins et à proposer des solutions adaptées a été un atout précieux.",
    imgPath: "/images/passerelle-logo.webp",
    logoPath: "/images/passerellle.png",
    title: "Webmaster",
    date: "Septembre 2023 - Septembre 2024",
    responsibilities: [
      "Gestion et maintenance d'un site e-commerce développé avec Oxatis.",
      "Optimisation des performances du site pour améliorer l'expérience utilisateur.",
      "Réferencement SEO du site pour améliorer sa visibilité sur les moteurs de recherche.",
      "Lien du site : https://www.passerelle62.fr/",
    ],
  },
  {
    review:
      "Diagui est un développeur web talentueux et passionné. Il a su transformer notre vision en une réalité numérique, créant un site web qui non seulement répond à nos besoins, mais dépasse nos attentes.",
    imgPath: "/images/simplon.svg",
    logoPath: "/images/simplonfav.png",
    title: "Full Stack Developer",
    date: "Février 2022 - Août 2022",
    responsibilities: [
      "Développé des applications web interactives en utilisant JavaScript, PHP et Laravel.",
      "Implémenté des fonctionnalités frontend et backend avec une attention particulière à la performance et à la sécurité.",
      "Développé des API RESTful pour la communication entre le frontend et le backend en utilisant Laravel, Node.js et Express.",
    ],
  },
  {
    review:
      "Diagui a été un atout précieux pour notre équipe. Sa capacité à travailler en équipe et à résoudre des problèmes complexes a grandement contribué au succès de nos projets.",
    imgPath: "/images/myOfficialLogo.png",
    logoPath: "/images/webfav0.png",
    title: "React Native Developer",
    date: "Juin 2023 - Mars 2024",
    responsibilities: [
      "Développé des applications mobiles multiplateformes en utilisant React Native.",
      "Créé des interfaces utilisateur réactives et intuitives en utilisant React Native et Redux.",
      "Intégré des services tiers et des API pour enrichir les fonctionnalités de l'application.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ousmane Traoré",
    mentions: "@ousmanet",
    review:
      "Je ne peux que recommander Diagui. Il a su comprendre nos besoins complexes et les transformer en une interface moderne, fluide et parfaitement fonctionnelle. Sa capacité à résoudre les problèmes et à proposer des solutions élégantes est remarquable.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Mariam Djénépo",
    mentions: "@mariam",
    review:
      "Travailler avec Diagui a été une expérience excellente. Il a entièrement modernisé notre plateforme et amélioré l’expérience utilisateur de manière significative. Son sens du détail et son souci de qualité sont réellement au-dessus de la moyenne. Je le recommande vivement pour tout projet web.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Sidy Lamine Diakité",
    mentions: "@sidy",
    review:
      "La collaboration avec Diagui a été très fluide. Toujours professionnel, réactif et déterminé à livrer le meilleur résultat possible. Sa passion pour le développement et le design se ressent dans chaque étape du projet. Si vous cherchez à faire évoluer votre site ou votre image digitale, c’est clairement la bonne personne.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Ibrahima Koné",
    mentions: "@ibrahima",
    review:
      "Diagui a su redonner une nouvelle vie à notre site. Le résultat est à la fois moderne, intuitif, esthétique et très simple à prendre en main. Un travail propre et maîtrisé de bout en bout.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Sanata Fané",
    mentions: "@sanata",
    review:
      "L’expertise de Diagui en développement web est vraiment impressionnante. Il nous a livré une solution performante, optimisée et scalable pour notre plateforme e-commerce. Depuis le lancement, nos conversions se sont nettement améliorées. Un vrai professionnel.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Hamidou Togo",
    mentions: "@hamidou",
    review:
      "Diagui a parfaitement compris nos attentes et a livré bien plus que ce que nous espérions. Que ce soit en frontend ou en backend, il maîtrise son sujet. Son sens de l’UI/UX a vraiment fait la différence.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/devdiagui",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/tounkaradiagui",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/dtounkara20",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/diagui-tounkara-65229b125",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

// Array che comprende i progetti da mostrare nella card dei progetti

const projectsCard = [
  {
    id: 1,
    title: "Card Blog Patisserie",
    slug: "blog-patisserie",
    description:
      "Un Design System che prende ispirazione per un ipotetico blog che pubblica ricette di dolci, in particolare di pasticceria home-made.",
    fullDescription:
      "Un Design System che prende ispirazione per un ipotetico blog che pubblica ricette di dolci, in particolare di pasticceria home-made. Il progetto è stato realizzato con Storybook e comprende una serie di componenti come card, bottoni, form e tipografia, tutti progettati per creare un'esperienza utente coerente e piacevole.",
    year: 2025,
    duration: "Una settimana",
    role: "Component Designer",
    technologies: ["Storybook", "React", "CSS"],
    challenges: [
      "Creare un design coerente per un blog di pasticceria",
      "Sviluppare componenti modulari riutilizzabili",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/blog-patisserie.png",
    category: "Design System",
    github: "https://github.com/LindaTancini/blog-patisserie-design-system",
    gallery: [
      {
        src: "/public/blog-patisserie/Palette-Colors.png",
        title: "Palette colori",
      },
      { src: "/public/blog-patisserie/Badge.png", title: "Badge" },
      { src: "/public/blog-patisserie/Button.png", title: "Bottone" },
      {
        src: "/public/blog-patisserie/Card-Cupcake+new.png",
        title: "Card Cupcake",
      },
      {
        src: "/public/blog-patisserie/CardBack-Cupcake.png",
        title: "Back Card Cupcake",
      },
      {
        src: "/public/blog-patisserie/Card-Cupcake-dark.png",
        title: "Card Cupcake Dark",
      },
      {
        src: "/public/blog-patisserie/Card-Cocco-glutenfree.png",
        title: "Card Cocco Gluten-Free",
      },
      {
        src: "/public/blog-patisserie/CardBack-Cocco.png",
        title: "Back Card Cocco",
      },
      {
        src: "/public/blog-patisserie/Card-Cocco-dark.png",
        title: "Card Cocco Dark",
      },
      {
        src: "/public/blog-patisserie/Card-Cheesecake-popular.png",
        title: "Card Cheesecake Popolare",
      },
      {
        src: "/public/blog-patisserie/CardBack-Cheesecake.png",
        title: "Back Card Cheesecake",
      },
      {
        src: "/public/blog-patisserie/Card-Cheesecake-dark.png",
        title: "Card Cheesecake Dark",
      },
      {
        src: "/public/blog-patisserie/Card-Responsive-SmallMobile.png",
        title: "Card Responsiva - Mobile Piccolo",
      },
      {
        src: "/public/blog-patisserie/Card-Responsive-Tablet.png",
        title: "Card Responsiva - Tablet",
      },
    ],
  },
  {
    id: 2,
    title: "Card e-commerce Gatti",
    slug: "ecommerce-gatti",
    description:
      "Un Design System che prende ispirazione per un ipotetico e-commerce che vende prodotti per animali, in particolare per gatti.",
    fullDescription:
      "Un Design System che prende ispirazione per un ipotetico e-commerce che vende prodotti per animali, in particolare per gatti. Il progetto è stato realizzato con Storybook e comprende una serie di componenti come card, bottoni, form e tipografia, tutti progettati per creare un'esperienza utente coerente e piacevole.",
    year: 2025,
    duration: "Una settimana",
    role: "Component Designer",
    technologies: ["Storybook", "React", "CSS"],
    challenges: [
      "Creare un design coerente per un e-commerce di prodotti per gatti",
      "Sviluppare componenti modulari riutilizzabili",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/ecommerce-gatti.png",
    category: "Design System",
    github: "https://github.com/LindaTancini/webdesign-card-component",
    gallery: [
      { src: "/public/card-gatti/Palette-Color.png", title: "Palette Colori" },
      { src: "/public/card-gatti/Badge.png", title: "Badge" },
      { src: "/public/card-gatti/Button.png", title: "Bottone" },
      {
        src: "/public/card-gatti/Button-Disabled.png",
        title: "Bottone Disabilitato",
      },
      { src: "/public/card-gatti/Card-Default.png", title: "Card Predefinita" },
      {
        src: "/public/card-gatti/Card-Default-Dark.png",
        title: "Card Predefinita Dark",
      },
      { src: "/public/card-gatti/Card-Discount.png", title: "Card Sconto" },
      {
        src: "/public/card-gatti/Card-Discount-Dark.png",
        title: "Card Sconto Dark",
      },
      {
        src: "/public/card-gatti/Card-SoldOut.png",
        title: "Card Prodotto Esaurito",
      },
      {
        src: "/public/card-gatti/Card-SoldOut-Dark.png",
        title: "Card Prodotto Esaurito Dark",
      },
      {
        src: "/public/card-gatti/CardResponsive-Mobile.png",
        title: "Card Responsiva - Mobile",
      },
      {
        src: "/public/card-gatti/CardResponsive-Tablet.png",
        title: "Card Responsiva - Tablet",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio Personale",
    slug: "portfolio-personale",
    description:
      "Progetto indivuale del mio portfolio personale volto a vetrina digitale dei miei lavori e delle mie competenze.",
    fullDescription:
      "Progetto indivuale del mio portfolio personale volto a vetrina digitale dei miei lavori e delle mie competenze. Il progetto è stato realizzato con React e comprende una serie di sezioni come Home, Progetti, Competenze e Contatti, tutte progettate per creare un'esperienza utente coerente e piacevole.",
    year: "2025 - 2026",
    duration: "In corso",
    role: "Front-end Developer",
    technologies: ["React", "CSS", "JavaScript"],
    challenges: [
      "Creare un design coerente per un portfolio personale",
      "Sviluppare componenti modulari riutilizzabili",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/portfolio.png",
    category: "Front-end",
    github: "https://github.com/LindaTancini/LindaTancini-Portfolio",
    gallery: [
      {
        src: "/public/portfolio/Progetti-Evidenza.png",
        title: "Progetti in Evidenza",
      },
      { src: "/public/portfolio/Footer+CTA.png", title: "Footer con CTA" },
      {
        src: "/public/portfolio/About-Prima-Sezione.png",
        title: "About - Prima Sezione",
      },
      {
        src: "/public/portfolio/About-Seconda-Sezione.png",
        title: "About - Seconda Sezione",
      },
      {
        src: "/public/portfolio/About-Terza-Sezione.png",
        title: "About - Terza Sezione",
      },
      { src: "/public/portfolio/About-Tech.png", title: "About - Tecnologie" },
      {
        src: "/public/portfolio/Griglia-Progetti.png",
        title: "Griglia Progetti",
      },
      {
        src: "/public/portfolio/Dettagli-Progetto.png",
        title: "Dettagli Progetto",
      },
      { src: "/public/portfolio/Contatti.png", title: "Contatti" },
      { src: "/public/portfolio/Hamburger-Menu.png", title: "Hamburger Menu" },
      {
        src: "/public/portfolio/Responsive-Mobile-Homepage.png",
        title: "Responsive Mobile - Homepage",
      },
      {
        src: "/public/portfolio/Responsive-Mobile-AboutMe.png",
        title: "Responsive Mobile - About Me",
      },
      {
        src: "/public/portfolio/Responsive-Mobile-GrigliaProgetti.png",
        title: "Responsive Mobile - Griglia Progetti",
      },
      {
        src: "/public/portfolio/Responsive-Mobile-DettagliProgetto.png",
        title: "Responsive Mobile - Dettagli Progetto",
      },
      {
        src: "/public/portfolio/Responsive-Mobile-Galleria.png",
        title: "Responsive Mobile - Galleria",
      },
      {
        src: "/public/portfolio/Responsive-Mobile-Contatti.png",
        title: "Responsive Mobile - Contatti",
      },
    ],
  },
  {
    id: 4,
    title: "Boolshop",
    slug: "boolshop",
    description:
      "Progetto di gruppo full stack basato sulla questione di un e-commerce di cd e vinili.",
    fullDescription:
      "Progetto di gruppo full stack basato sulla questione di un e-commerce di cd e vinili. Il progetto è stato realizzato con React per il front-end e Node.js per il back-end, e comprende una serie di funzionalità come la gestione dei prodotti, il carrello e il processo di checkout, tutte progettate per creare un'esperienza utente coerente e piacevole.",
    year: 2025,
    duration: "Due settimane",
    role: "Full-stack Developer",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    challenges: [
      "Creare un design coerente per un e-commerce di cd e vinili",
      "Sviluppare funzionalità complesse come il carrello e il checkout",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/boolshop.png",
    category: "Full-stack",
    github: "https://github.com/LindaTancini/boolshop-react",
    gallery: [
      { src: "/public/boolshop/Caroselli.png", title: "Caroselli" },
      { src: "/public/boolshop/Negozio-Griglia.png", title: "Negozio Griglia" },
      { src: "/public/boolshop/Negozio-Lista.png", title: "Negozio Lista" },
      { src: "/public/boolshop/Pagina-Carrello.png", title: "Pagina Carrello" },
      {
        src: "/public/boolshop/Carrello-Laterale.png",
        title: "Carrello Laterale",
      },
      {
        src: "/public/boolshop/Pagina di pagamento.png",
        title: "Pagina di Pagamento",
      },
      { src: "/public/boolshop/Wishlist.png", title: "Wishlist" },
      {
        src: "/public/boolshop/Responsive mobile.png",
        title: "Responsive Mobile",
      },
      {
        src: "/public/boolshop/Responsive tablet.png",
        title: "Responsive Tablet",
      },
      {
        src: "/public/boolshop/Responsive laptop.png",
        title: "Responsive Laptop",
      },
    ],
  },
  {
    id: 5,
    title: "Cine Blog",
    slug: "cine-blog",
    description:
      "Progetto indivuale full stack basato sulla questione di un blog cinematografico.",
    fullDescription:
      "Progetto indivuale full stack basato sulla questione di un blog cinematografico. Il progetto è stato realizzato con React per il front-end e Node.js per il back-end, e comprende una serie di funzionalità come la gestione dei post, i commenti e la categorizzazione dei film, tutte progettate per creare un'esperienza utente coerente e piacevole.",
    year: 2025,
    duration: "Due settimane",
    role: "Full-stack Developer",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    challenges: [
      "Creare un design coerente per un blog cinematografico",
      "Sviluppare funzionalità complesse come la gestione dei post e dei commenti",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/movies-blog.png",
    category: "Full-stack",
    github: "https://github.com/LindaTancini/webapp-react",
    gallery: [
      { src: "/public/cine-blog/Homepage.png", title: "Homepage" },
      { src: "/public/cine-blog/Lista-Film.png", title: "Lista Film" },
      { src: "/public/cine-blog/Scheda-Film.png", title: "Scheda Film" },
      {
        src: "/public/cine-blog/Aggiungi-Recensione.png",
        title: "Aggiungi Recensione",
      },
      {
        src: "/public/cine-blog/Film-con-recensioni.png",
        title: "Film con Recensioni",
      },
      { src: "/public/cine-blog/Filtro-Ricerca.png", title: "Filtro Ricerca" },
      { src: "/public/cine-blog/Aggiunta-Film.png", title: "Aggiunta Film" },
      {
        src: "/public/cine-blog/Responsive-Homepage.png",
        title: "Responsive Homepage",
      },
      {
        src: "/public/cine-blog/Responsive-SchedaFilm.png",
        title: "Responsive Scheda Film",
      },
      {
        src: "/public/cine-blog/Responsive-Dettaglio-Film.png",
        title: "Responsive Dettaglio Film",
      },
      {
        src: "/public/cine-blog/Responsive-Aggiunta-Film.png",
        title: "Responsive Aggiunta Film",
      },
    ],
  },
  {
    id: 6,
    title: "Photo Blog",
    slug: "photo-blog",
    description:
      "Progetto indivuale front-end, sul DOM, di una bacheca di foto.",
    fullDescription:
      "Progetto indivuale front-end, sul DOM, di una bacheca di foto. Il progetto è stato realizzato con React e comprende una serie di funzionalità come la visualizzazione delle foto, la gestione dei like e dei commenti, tutte progettate per creare un'esperienza utente coerente e piacevole.",
    year: 2025,
    duration: "Una settimana",
    role: "Front-end Developer",
    technologies: ["React", "CSS", "JavaScript"],
    challenges: [
      "Creare un design coerente per una bacheca di foto",
      "Sviluppare funzionalità complesse come la gestione dei like e dei commenti",
      "Garantire responsività su diversi dispositivi",
    ],
    image: "/public/projects/photo-blog.png",
    category: "Front-end",
    github: "https://github.com/LindaTancini/js-photo-blog",
    gallery: [
      {
        src: "/public/photo-blog/Photo-Blog-Hover.png",
        title: "Photo Blog Hover",
      },
      {
        src: "/public/photo-blog/Photo-Blog-Attivo.png",
        title: "Photo Blog Immagine Attiva",
      },
      {
        src: "/public/photo-blog/Photo-Blog-Responsive-Mobile.png",
        title: "Photo Blog Responsive Mobile",
      },
      {
        src: "/public/photo-blog/Photo-Blog-Responsive-Tablet.png",
        title: "Photo Blog Responsive Tablet",
      },
    ],
  },
];

export default projectsCard;

// Array che comprende i progetti da mostrare nella card dei progetti

import { g } from "framer-motion/client";

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
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per un blog di ricette, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi.",
    image: "/public/projects/blog-patisserie.png",
    category: "Design System",
    github: "https://github.com/LindaTancini/blog-patisserie-design-system",
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
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per un e-commerce di prodotti per gatti, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi.",
    image: "/public/projects/ecommerce-gatti.png",
    category: "Design System",
    github: "https://github.com/LindaTancini/webdesign-card-component",
  },
  {
    id: 3,
    title: "Portfolio Personale",
    slug: "portfolio-personale",
    description:
      "Progetto indivuale del mio portfolio personale volto a vetrina digitale dei miei lavori e delle mie competenze.",
    fullDescription:
      "Progetto indivuale del mio portfolio personale volto a vetrina digitale dei miei lavori e delle mie competenze. Il progetto è stato realizzato con React e comprende una serie di sezioni come Home, Progetti, Competenze e Contatti, tutte progettate per creare un'esperienza utente coerente e piacevole.",
    year: 2025 - 2026,
    duration: "In corso",
    role: "Front-end Developer",
    technologies: ["React", "CSS", "JavaScript"],
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per un portfolio personale, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi, e che potesse mettere in risalto le mie competenze e i miei progetti in modo efficace.",
    image: "/public/projects/portfolio-personale.png",
    category: "Front-end",
    github: "https://github.com/LindaTancini/LindaTancini-Portfolio",
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
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per un e-commerce di cd e vinili, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi, e che potesse offrire un'esperienza di acquisto fluida e intuitiva per gli utenti.",
    image: "/public/projects/boolshop.png",
    category: "Full-stack",
    github: "https://github.com/LindaTancini/boolshop-react",
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
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per un blog cinematografico, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi, e che potesse offrire un'esperienza di lettura fluida e intuitiva per gli utenti.",
    image: "/public/projects/movies-blog.png",
    category: "Full-stack",
    github: "https://github.com/LindaTancini/webapp-react",
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
    challenges:
      "La sfida principale è stata quella di creare un design coerente e accattivante per una bacheca di foto, che potesse essere facilmente adattabile a diverse tipologie di contenuti e dispositivi, e che potesse offrire un'esperienza di visualizzazione fluida e intuitiva per gli utenti.",
    image: "/public/projects/photo-blog.png",
    category: "Front-end",
    github: "https://github.com/LindaTancini/js-photo-blog",
  },
];

export default projectsCard;

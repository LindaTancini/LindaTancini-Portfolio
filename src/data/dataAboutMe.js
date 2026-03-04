// Importazioni immagini
import AboutMeImg from "../assets/me.jpg";
import AboutMeCats from "../assets/me-and-cats.jpg";
import AboutMeManga from "../assets/me-manga-and-cats.jpg";

/* Sezione narrativa */

export const aboutSections = [
  {
    id: 1,
    subtitle: "Chi sono e cosa faccio",
    image: AboutMeImg,
    text: "Qua ci sarà il testo che parla di me",
  },
  {
    id: 2,
    subtitle: "Leone e Fumetto, i miei gatti",
    image: AboutMeCats,
    text: "Qua ci sarà il testo che parla dei miei gatti",
  },
  {
    id: 3,
    subtitle: "I miei hobby: Manga, Anime e Videogiochi",
    image: AboutMeManga,
    text: "Qua ci sarà il testo che parla delle mie passioni",
  },
];

/* Skills */

export const skills = {
  hard: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "Express", "MySQL", "REST API"],
    design: [
      "UI/UX Basics",
      "Atomic Design",
      "Storybook",
      "Accessibilità (WCAG/ARIA)",
      "Responsive Design",
      "Componenti riutilizzabili",
    ],
    tools: ["Git", "GitHub", "VS Code", "Postman", "NPM"],
  },
  soft: [
    "Team Work",
    "Problem Solving",
    "Empatia",
    "Creatività",
    "Comunicazione",
  ],
};

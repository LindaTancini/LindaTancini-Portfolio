// Importazioni immagini
import AboutMeImg from "../assets/me.jpg";
import AboutMeCats from "../assets/me-and-cats.jpg";
import AboutMeHobby from "../assets/me-hobby.png";

/* Sezione narrativa */

export const aboutSections = [
  {
    id: 1,
    subtitle: "Chi sono e il mio percorso da sviluppatrice",
    image: AboutMeImg,
    text: (
      <>
        Fin da piccola sono appassionata alla <strong>tecnologia</strong> e
        questo mi ha portato a smanettare al PC fin da bambina. Ho intrapreso il
        percorso di <strong>Full Stack Web Development</strong> di Boolean,
        della durata di <strong>600 ore</strong>, per darmi una rivalsa e
        credere in me stessa e nelle mie capacità. Durante il percorso ho capito
        quanto per me sia importante <strong>scrivere codice leggibile</strong>,
        ragionare sui problemi e migliorare passo dopo passo, anche quando
        qualcosa non funziona subito. Ho imparato diversi linguaggi partendo da{" "}
        <strong>HTML</strong> e <strong>CSS</strong> fino ad arrivare a{" "}
        <strong>JavaScript</strong> e <strong>React</strong>, creando siti web
        completi con un occhio di riguardo al <strong>design</strong> e all’
        <strong>usabilità</strong>. Sono una persona{" "}
        <strong>curiosa, creativa e determinata</strong>, sempre alla ricerca di
        nuove sfide e opportunità per crescere come{" "}
        <strong>front-end developer</strong> e <strong>designer</strong>. Ho
        inoltre eseguito una specializzazione in <strong>Web Design</strong>{" "}
        della durata di <strong>20 ore</strong>, dove ho imparato i principi
        base della <strong>User Experience</strong> e della{" "}
        <strong>User Interface</strong>, oltre all’utilizzo di{" "}
        <strong>Storybook</strong> per creare componenti riutilizzabili e
        accessibili.
      </>
    ),
  },

  {
    id: 2,
    subtitle: "Leone e Fumetto, i miei gatti",
    image: AboutMeCats,
    text: (
      <>
        <strong>Leone</strong> e <strong>Fumetto</strong> sono i miei compagni
        d'avventura nella vita quotidiana.
        <br />
        Sono due gatti adorabili che mi tengono compagnia sia quando{" "}
        <strong>lavoro al computer</strong> sia quando mi rilasso dopo una
        giornata intensa.
        <br />
        <br />
        <strong>Leone</strong> è un gatto molto coccolone e dolce, mentre{" "}
        <strong>Fumetto</strong> è più vivace, curioso e sempre pronto a
        esplorare.
        <br />
        <br />
        La loro presenza mi aiuta a mantenere un buon{" "}
        <strong>equilibrio tra lavoro e vita personale</strong> e mi ricorda
        quanto sia importante prendersi cura di sé stessi e dei momenti di
        tranquillità.
      </>
    ),
  },

  {
    id: 3,
    subtitle: "I miei hobby: Manga, Anime e Videogiochi",
    image: AboutMeHobby,
    text: (
      <>
        Nel tempo libero mi piace leggere <strong>manga</strong> e guardare{" "}
        <strong>anime</strong>. Mi affascina molto il modo in cui vengono
        raccontate le storie e costruiti i personaggi.
        <br />
        Sono anche un’amante del <strong>gaming</strong>. Mi piacciono sia i
        giochi complessi e strutturati sia quelli più tranquilli e gestionali,
        perché mi aiutano a staccare ma anche a mantenere un{" "}
        <strong>approccio logico e paziente</strong>.
        <br />
        <br />
        Attualmente sto giocando a <strong>Genshin Impact</strong>,{" "}
        <strong>Zenless Zone Zero</strong>, <strong>Honkai: Star Rail</strong>,{" "}
        <strong>Stardew Valley</strong> e <strong>Overwatch</strong>. Sono
        appassionata anche di giochi più classici come <strong>The Sims</strong>
        , <strong>Animal Crossing</strong> e <strong>Pokémon</strong>.
        <br />
        <br />
        Per quanto riguarda anime e manga, seguo principalmente il genere{" "}
        <strong>Shōjo</strong>, ma mi piacciono anche serie come{" "}
        <strong>Demon Slayer</strong>, <strong>My Hero Academia</strong> e{" "}
        <strong>Naruto</strong>.
      </>
    ),
  },
];

/* Skills */

export const skills = {
  hard: {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express", "MySQL", "REST API"],
    Design: [
      "UI/UX Basics",
      "Atomic Design",
      "Storybook",
      "Accessibilità (WCAG/ARIA)",
      "Responsive Design",
      "Componenti riutilizzabili",
    ],
    Tools: ["Git", "GitHub", "VS Code", "Postman", "NPM"],
  },
  soft: [
    "Team Work",
    "Problem Solving",
    "Empatia",
    "Creatività",
    "Comunicazione",
  ],
};

// Importazioni
import AboutMeImg from "../assets/me.jpg";
import AboutMeCats from "../assets/me-and-cats.jpg";
import AboutMeManga from "../assets/me-manga-and-cats.jpg";
import AboutMeGame from "../assets/me-game-and-cats.jpg";
import AboutSection from "./AboutSection";

// AboutMePage component
function AboutMePage() {
  return (
    <>
      {/* Sezione Me */}

      <AboutSection title="Chi sono e cosa faccio" image={AboutMeImg}>
        <p>Qua ci sarà il testo che parla di me</p>
      </AboutSection>

      {/* Sezione Gatti */}

      <AboutSection
        title="Leone e Fumetto, i miei gatti"
        image={AboutMeCats}
        reverse
      >
        <p>Qua ci sarà il testo che parla dei miei gatti</p>
      </AboutSection>

      {/* Sezione Manga&Anime */}

      <AboutSection
        title="Manga e Anime, una delle mie più grandi passioni"
        image={AboutMeManga}
        reverse
      >
        <p>Qua ci sarà il testo che parla della mia passioen per i manga</p>
      </AboutSection>

      {/* Sezione Gaming */}

      <AboutSection
        title="Videogiochi, una passione che mi accompagna da sempre"
        image={AboutMeGame}
        reverse
      >
        <p>Qua ci sarà il testo che parla della mia passione per il gaming</p>
      </AboutSection>
    </>
  );
}

export default AboutMePage;

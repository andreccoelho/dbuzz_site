import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/sections/Hero/Hero";
import Sobre from "../components/sections/Sobre/Sobre";
import Solucoes from "../components/sections/Solucoes/Solucoes";
import Aplicacoes from "../components/sections/Aplicacoes/Aplicacoes";
import SetorPublico from "../components/sections/SetorPublico/SetorPublico";
import TvDbuzz from "../components/sections/TvDbuzz/TvDbuzz";
import Portfolio from "../components/sections/Portfolio/Portfolio";
import Governanca from "../components/sections/Governanca/Governanca";
import Equipe from "../components/sections/Equipe/Equipe";
import Contato from "../components/sections/Contato/Contato";
import CookieBanner from "../components/ui/CookieBanner/CookieBanner";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Sobre />
      <Solucoes />
      <Aplicacoes />
      <SetorPublico />
      <TvDbuzz />
      <Portfolio />
      <Governanca />
      <Equipe />
      <Contato />
    </main>
    <Footer />
    <CookieBanner />
  </>
);

export default Home;

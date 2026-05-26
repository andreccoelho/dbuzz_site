import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/sections/Hero/Hero";
import Gancho from "../components/sections/Gancho/Gancho";
import Clientes from "../components/sections/Clientes/Clientes";
import Sobre from "../components/sections/Sobre/Sobre";
import Solucoes from "../components/sections/Solucoes/Solucoes";
import TiposConteudo from "../components/sections/TiposConteudo/TiposConteudo";
import Aplicacoes from "../components/sections/Aplicacoes/Aplicacoes";
import SetorPublico from "../components/sections/SetorPublico/SetorPublico";
import TvDbuzz from "../components/sections/TvDbuzz/TvDbuzz";
import Portfolio from "../components/sections/Portfolio/Portfolio";
import Governanca from "../components/sections/Governanca/Governanca";
import Equipe from "../components/sections/Equipe/Equipe";
import CTAEspecialista from "../components/sections/CTAEspecialista/CTAEspecialista";
import Contato from "../components/sections/Contato/Contato";
import CookieBanner from "../components/ui/CookieBanner/CookieBanner";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Gancho />
      <Sobre />
      <Clientes />
      <Solucoes />
      <TiposConteudo />
      <Aplicacoes />
      <SetorPublico />
      <TvDbuzz />
      <Portfolio />
      <Governanca />
      <Equipe />
      <CTAEspecialista />
      <Contato />
    </main>
    <Footer />
    <CookieBanner />
  </>
);

export default Home;

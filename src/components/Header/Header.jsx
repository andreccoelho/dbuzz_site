import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Nav, Container, LogoLink, MenuLista, ItemMenu, BotaoCta, MenuMobile, Backdrop } from "./Style";
import { scrollTo } from "../../utils/scroll";

const links = [
  { id: "sobre",        label: "Sobre" },
  { id: "solucoes",     label: "Soluções" },
  { id: "aplicacoes",   label: "Aplicações" },
  { id: "setor-publico",label: "Setor Público" },
  { id: "tv-dbuzz",     label: "TV D.Buzz" },
  { id: "portfolio",    label: "Portfólio" },
  { id: "governanca",   label: "Governança" },
  { id: "equipe",       label: "Equipe" },
];


const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 82);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fechar = () => setAberto(false);

  const handleLink = (id) => {
    scrollTo(id);
    fechar();
  };

  return (
    <Nav $scrolled={scrolled}>
      <Container>
        <LogoLink
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo("inicio"); fechar(); }}
          aria-label="D.Buzz Corporate — Início"
        >
          <img src="/imagens/logo-1.png" alt="D.Buzz Corporate" />
        </LogoLink>

        <MenuLista $aberto={aberto}>
          {links.map((l) => (
            <ItemMenu key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); handleLink(l.id); }}
              >
                {l.label}
              </a>
            </ItemMenu>
          ))}
        </MenuLista>

        <BotaoCta
          href="#contato"
          onClick={(e) => { e.preventDefault(); handleLink("contato"); }}
        >
          Fale conosco
        </BotaoCta>

        <MenuMobile
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </MenuMobile>
      </Container>

      {aberto && <Backdrop onClick={fechar} />}
    </Nav>
  );
};

export default Header;

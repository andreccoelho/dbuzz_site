import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Nav, Container, LogoLink, MenuLista, ItemMenu, BotaoCta, MenuMobile, Backdrop } from "./Style";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#setor-publico", label: "Setor Público" },
  { href: "#tv-dbuzz", label: "TV D.Buzz" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#governanca", label: "Governança" },
];

const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fechar = () => setAberto(false);

  return (
    <Nav $scrolled={scrolled}>
      <Container $scrolled={scrolled}>
        <LogoLink href="#inicio" onClick={fechar} aria-label="D.Buzz Corporate — Início">
          <img
            src="/imagens/logo-1.png"
            alt="D.Buzz Corporate"
          />
        </LogoLink>

        <MenuLista $aberto={aberto}>
          {links.map((l) => (
            <ItemMenu key={l.href}>
              <a href={l.href} onClick={fechar}>{l.label}</a>
            </ItemMenu>
          ))}
        </MenuLista>

        <BotaoCta href="#contato" onClick={fechar}>Fale conosco</BotaoCta>

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

import styled from "styled-components";

const LOGOS = [
  { src: "/imagens/logos_clientes/logotopo20260511224556307_preto.png",    alt: "Cliente 1" },
  { src: "/imagens/logos_clientes/EG_preto.png",                           alt: "EG" },
  { src: "/imagens/logos_clientes/japeri-logo_preto.png",                  alt: "Japeri" },
  { src: "/imagens/logos_clientes/logo-vianense-1024x291_preto.png",       alt: "Vianense" },
  { src: "/imagens/logos_clientes/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_preto.png", alt: "IBAD" },
  { src: "/imagens/logos_clientes/logo_preto.png",                         alt: "Cliente" },
  { src: "/imagens/logos_clientes/rdlaypopupogimage_preto.png",            alt: "RD Lay" },
  { src: "/imagens/logos_clientes/unnamed_preto.png",                      alt: "Cliente" },
  { src: "/imagens/logos_clientes/images_preto.png",                       alt: "Cliente" },
  { src: "/imagens/logos_clientes/images_preto_2.png",                     alt: "Cliente" },
  { src: "/imagens/logos_clientes/images (1)_preto.png",                   alt: "Cliente" },
  { src: "/imagens/logos_clientes/images (2)_preto.png",                   alt: "Cliente" },
  { src: "/imagens/logos_clientes/Captura de tela 2026-05-12 212049_preto.png", alt: "Cliente" },
];

const Wrap = styled.section`
  background: #fff;
  padding: 56px 0;
  overflow: hidden;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  @keyframes dbuzz-slide {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

const Topo = styled.div`
  text-align: center;
  margin-bottom: 36px;
  padding: 0 24px;
`;

const Kicker = styled.p`
  font-family: var(--fonte-titulo);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #999;
  margin: 0 0 6px;
`;

const Titulo = styled.h2`
  font-family: var(--fonte-titulo);
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #111;
  margin: 0;
  letter-spacing: -0.02em;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: dbuzz-slide 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  flex-shrink: 0;

  img {
    height: 42px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    filter: grayscale(1) opacity(0.55);
    transition: filter 0.25s;
  }

  &:hover img {
    filter: grayscale(0) opacity(1);
  }
`;

const Clientes = () => {
  const set = [...LOGOS, ...LOGOS];

  return (
    <Wrap id="clientes">
      <Topo>
        <Titulo>Empresas e instituições que confiam na D.Buzz</Titulo>
      </Topo>

      <Track aria-hidden="true">
        {set.map((logo, i) => (
          <LogoItem key={i}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </LogoItem>
        ))}
      </Track>
    </Wrap>
  );
};

export default Clientes;

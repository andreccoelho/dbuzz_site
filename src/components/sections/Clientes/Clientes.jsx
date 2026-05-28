import styled from "styled-components";

const LOGOS = [
  { preto: "/imagens/logos_clientes/preto e branco/logotopo20260511224556307_preto.png",    color: "/imagens/logos_clientes/colorida/logotopo20260511224556307_color.png",    alt: "Cliente 1" },
  { preto: "/imagens/logos_clientes/preto e branco/EG_preto.png",                           color: "/imagens/logos_clientes/colorida/EG_color.png",                           alt: "EG" },
  { preto: "/imagens/logos_clientes/preto e branco/japeri-logo_preto.png",                  color: "/imagens/logos_clientes/colorida/japeri-logo_color.png",                  alt: "Japeri" },
  { preto: "/imagens/logos_clientes/preto e branco/logo-vianense-1024x291_preto.png",       color: "/imagens/logos_clientes/colorida/logo-vianense-1024x291_color.png",       alt: "Vianense" },
  { preto: "/imagens/logos_clientes/preto e branco/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_preto.png", color: "/imagens/logos_clientes/colorida/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_color.png", alt: "IBAD" },
  { preto: "/imagens/logos_clientes/preto e branco/logo_preto.png",                         color: "/imagens/logos_clientes/colorida/logo_color.png",                         alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/rdlaypopupogimage_preto.png",            color: "/imagens/logos_clientes/colorida/rdlaypopupogimage_color.png",            alt: "RD Lay" },
  { preto: "/imagens/logos_clientes/preto e branco/unnamed_preto.png",                      color: "/imagens/logos_clientes/colorida/unnamed_color.png",                      alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/images_preto.png",                       color: "/imagens/logos_clientes/colorida/images_color.png",                       alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/images_preto_2.png",                     color: "/imagens/logos_clientes/colorida/images_color_2.png",                     alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/images (1)_preto.png",                   color: "/imagens/logos_clientes/colorida/images (1)_color.png",                   alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/images (2)_preto.png",                   color: "/imagens/logos_clientes/colorida/images (2)_color.png",                   alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/Captura de tela 2026-05-12 212049_preto.png", color: "/imagens/logos_clientes/colorida/Captura de tela 2026-05-12 212049_color.png", alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/width_800_preto.png",                         color: "/imagens/logos_clientes/colorida/width_800.png",                                   alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/logo_drogaria_TRANSPARENTE-preto.png",        color: "/imagens/logos_clientes/colorida/logo_drogaria_TRANSPARENTE.png",                  alt: "Drogaria" },
  { preto: "/imagens/logos_clientes/preto e branco/rio_janeiro_clinicas_preto.png",              color: "/imagens/logos_clientes/colorida/rio_janeiro_clinicas_color.png",                  alt: "Rio Janeiro Clínicas" },
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
`;

const LogoItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  flex-shrink: 0;

  img {
    height: 75px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    transition: opacity 0.25s;
  }

  .logo-bw {
    opacity: 1;
  }

  .logo-color {
    position: absolute;
    opacity: 0;
  }

  &:hover .logo-bw {
    opacity: 0;
  }

  &:hover .logo-color {
    opacity: 1;
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
            <img className="logo-bw"    src={logo.preto} alt={logo.alt} loading="lazy" />
            <img className="logo-color" src={logo.color} alt=""         loading="lazy" aria-hidden="true" />
          </LogoItem>
        ))}
      </Track>
    </Wrap>
  );
};

export default Clientes;

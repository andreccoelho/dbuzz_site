import React from "react";
import { Stethoscope, GraduationCap, Landmark, Building2, ShoppingBag, Tv2 } from "lucide-react";
import * as S from "./Style";

const LOGOS = [
  { preto: "/imagens/logos_clientes/preto e branco/logotopo20260511224556307_preto.png",    color: "/imagens/logos_clientes/colorida/logotopo20260511224556307_color.png",    alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/EG_preto.png",                           color: "/imagens/logos_clientes/colorida/EG_color.png",                           alt: "EG"       },
  { preto: "/imagens/logos_clientes/preto e branco/japeri-logo_preto.png",                  color: "/imagens/logos_clientes/colorida/japeri-logo_color.png",                  alt: "Japeri"   },
  { preto: "/imagens/logos_clientes/preto e branco/logo-vianense-1024x291_preto.png",       color: "/imagens/logos_clientes/colorida/logo-vianense-1024x291_color.png",       alt: "Vianense" },
  { preto: "/imagens/logos_clientes/preto e branco/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_preto.png", color: "/imagens/logos_clientes/colorida/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_color.png", alt: "IBAD" },
  { preto: "/imagens/logos_clientes/preto e branco/logo_preto.png",                         color: "/imagens/logos_clientes/colorida/logo_color.png",                         alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/rdlaypopupogimage_preto.png",            color: "/imagens/logos_clientes/colorida/rdlaypopupogimage_color.png",            alt: "RD Lay"   },
  { preto: "/imagens/logos_clientes/preto e branco/unnamed_preto.png",                      color: "/imagens/logos_clientes/colorida/unnamed_color.png",                      alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/images_preto.png",                       color: "/imagens/logos_clientes/colorida/images_color.png",                       alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/images_preto_2.png",                     color: "/imagens/logos_clientes/colorida/images_color_2.png",                     alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/images (1)_preto.png",                   color: "/imagens/logos_clientes/colorida/images (1)_color.png",                   alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/images (2)_preto.png",                   color: "/imagens/logos_clientes/colorida/images (2)_color.png",                   alt: "Cliente"  },
  { preto: "/imagens/logos_clientes/preto e branco/Captura de tela 2026-05-12 212049_preto.png", color: "/imagens/logos_clientes/colorida/Captura de tela 2026-05-12 212049_color.png", alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/width_800_preto.png",                         color: "/imagens/logos_clientes/colorida/width_800.png",                                   alt: "Cliente" },
  { preto: "/imagens/logos_clientes/preto e branco/logo_drogaria_TRANSPARENTE-preto.png",        color: "/imagens/logos_clientes/colorida/logo_drogaria_TRANSPARENTE.png",                  alt: "Drogaria" },
  { preto: "/imagens/logos_clientes/preto e branco/rio_janeiro_clinicas_preto.png",              color: "/imagens/logos_clientes/colorida/rio_janeiro_clinicas_color.png",                  alt: "Rio Janeiro Clínicas" },
];

const CASES = [
  {
    img: "pi1",
    Icon: Stethoscope,
    badge: "Privado",
    badgeTipo: "priv",
    titulo: "Saúde Digital — clínica multiespecialidade",
    desc: "Operação contínua com Telas verticais indoor e calendário editorial com foco em educação em saúde, prevenção e fluxo de atendimento.",
    tags: ["Saúde", "Indoor", "Editorial"],
  },
  {
    img: "pi2",
    Icon: GraduationCap,
    badge: "Privado",
    badgeTipo: "priv",
    titulo: "Escola Digital — colégio bilíngue",
    desc: "Mural digital institucional para reforço de identidade, calendário acadêmico, eventos e conquistas dos alunos em pontos de alta circulação.",
    tags: ["Educação", "Indoor", "Endomarketing"],
  },
  {
    img: "pi3",
    Icon: Landmark,
    badge: "Público",
    badgeTipo: "pub",
    titulo: "Comunicação Pública — projeto institucional",
    desc: "Estruturação técnica de proposta para órgão municipal: descrição do objeto, kit técnico, plano de operação e documentação de apoio à análise jurídica.",
    tags: ["Setor Público", "Documentação", "Institucional"],
  },
  {
    img: "pi4",
    Icon: Building2,
    badge: "Privado",
    badgeTipo: "priv",
    titulo: "Endomarketing — operação corporativa",
    desc: "Comunicação interna em pontos estratégicos da operação: indicadores, segurança do trabalho, reconhecimento de equipes e cultura organizacional.",
    tags: ["Corporativo", "Endomarketing", "SST"],
  },
  {
    img: "pi5",
    Icon: Tv2,
    badge: "TV D.Buzz",
    badgeTipo: "tv",
    titulo: "TV D.Buzz — rede comercial",
    desc: "Operação contínua da rede comercial privada com 50+ Telas verticais indoor distribuídos em pontos de alta circulação em dois mercados.",
    tags: ["TV D.Buzz", "Rede", "Rio de Janeiro"],
  },
  {
    img: "pi6",
    Icon: ShoppingBag,
    badge: "Privado",
    badgeTipo: "priv",
    titulo: "Comércio — rede de varejo",
    desc: "Comunicação coordenada em rede com cardápio digital, ofertas e reforço de marca no ponto de venda em múltiplas unidades.",
    tags: ["Varejo", "Indoor", "Rede"],
  },
];

const Portfolio = () => (
  <S.Wrapper id="portfolio">
    <S.Container>
      <S.Label>Portfólio</S.Label>
      <S.Title>Operações em andamento e cases de referência</S.Title>
      <S.Sub>
        Recortes representativos das três frentes — Setor Privado, Setor
        Público e TV D.Buzz — com leitura rápida da modalidade pelo badge.
      </S.Sub>

      <S.Grid>
        {CASES.map((c, i) => {
          const CardIcon = c.Icon;
          return (
            <S.Card key={i}>
              <S.ImgBox $variante={c.img}>
                <CardIcon size={44} aria-hidden="true" />
              </S.ImgBox>
              <S.Body>
                <S.CardTitle>{c.titulo}</S.CardTitle>
                <S.CardDesc>{c.desc}</S.CardDesc>
                <S.Tags>
                  {c.tags.map((t, j) => (
                    <S.Tag key={j}>{t}</S.Tag>
                  ))}
                </S.Tags>
              </S.Body>
            </S.Card>
          );
        })}
      </S.Grid>

      <S.ClientesFaixa>
        <S.ClientesLabel>Clientes que confiam na D.Buzz</S.ClientesLabel>
        <S.Track aria-hidden="true">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <S.LogoItem key={i}>
              <img className="logo-bw"    src={logo.preto} alt={logo.alt} loading="lazy" />
              <img className="logo-color" src={logo.color} alt=""         loading="lazy" aria-hidden="true" />
            </S.LogoItem>
          ))}
        </S.Track>
      </S.ClientesFaixa>
    </S.Container>
  </S.Wrapper>
);

export default Portfolio;

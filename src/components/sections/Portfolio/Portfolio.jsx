import React from "react";
import { Stethoscope, GraduationCap, Landmark, Building2, ShoppingBag, Tv2 } from "lucide-react";
import * as S from "./Style";

const LOGOS = [
  { src: "/imagens/logos_clientes/logotopo20260511224556307_preto.png",    alt: "Cliente"  },
  { src: "/imagens/logos_clientes/EG_preto.png",                           alt: "EG"       },
  { src: "/imagens/logos_clientes/japeri-logo_preto.png",                  alt: "Japeri"   },
  { src: "/imagens/logos_clientes/logo-vianense-1024x291_preto.png",       alt: "Vianense" },
  { src: "/imagens/logos_clientes/cropped-icone_ibad_autopecas_rio_de_janeiro-e1568727625378_preto.png", alt: "IBAD" },
  { src: "/imagens/logos_clientes/logo_preto.png",                         alt: "Cliente"  },
  { src: "/imagens/logos_clientes/rdlaypopupogimage_preto.png",            alt: "RD Lay"   },
  { src: "/imagens/logos_clientes/unnamed_preto.png",                      alt: "Cliente"  },
  { src: "/imagens/logos_clientes/images_preto.png",                       alt: "Cliente"  },
  { src: "/imagens/logos_clientes/images_preto_2.png",                     alt: "Cliente"  },
  { src: "/imagens/logos_clientes/images (1)_preto.png",                   alt: "Cliente"  },
  { src: "/imagens/logos_clientes/images (2)_preto.png",                   alt: "Cliente"  },
  { src: "/imagens/logos_clientes/Captura de tela 2026-05-12 212049_preto.png", alt: "Cliente" },
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
    titulo: "TV D.Buzz — rede comercial Rio de Janeiro",
    desc: "Operação contínua da rede comercial privada com 50+ Telas verticais indoor distribuídos em pontos de alta circulação em dois mercados.",
    tags: ["TV D.Buzz", "Rede", "Rio de Janeiro"],
  },
  {
    img: "pi6",
    Icon: ShoppingBag,
    badge: "Privado",
    badgeTipo: "priv",
    titulo: "Comércio — rede de varejo regional",
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
                <S.Badge $tipo={c.badgeTipo}>{c.badge}</S.Badge>
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
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </S.LogoItem>
          ))}
        </S.Track>
      </S.ClientesFaixa>
    </S.Container>
  </S.Wrapper>
);

export default Portfolio;

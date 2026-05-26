import { useState, useCallback } from "react";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { scrollTo } from "../../../utils/scroll";
import DisplayVertical from "../../ui/DisplayVertical/DisplayVertical";
import {
  Secao, Grid, GridDecorativo, Coluna, Titulo, AcentoAmarelo,
  Frentes, Frente, Acoes, BotaoPrimario, BotaoSecundario,
  LinksSecundarios, Mockups, ScrollSeta, PhoneDots, PhoneDot,
} from "./Style";

const PHONES = [
  {
    tom: "verde",
    selo: "Saúde Digital",
    rodape: "Espera Inteligente",
    content: (
      <>
        <strong>Espera<br />Inteligente</strong>
        Conteúdo educativo e institucional para clínicas, escolas e empresas.
        <small>Gerenciado remotamente pela D.Buzz.</small>
      </>
    ),
  },
  {
    tom: "azul",
    selo: "Setor Público",
    rodape: "Comunicação ao cidadão",
    content: (
      <>
        <strong>Canal<br />Cidadão</strong>
        Comunicação pública presencial gerenciada — 100% institucional.
        <small>Sem publicidade. Solução integrada end-to-end.</small>
      </>
    ),
  },
  {
    tom: "laranja",
    selo: "TV D.Buzz",
    rodape: "Looping de 15 minutos",
    content: (
      <>
        <strong>50+</strong>
        telas em pontos de alto tráfego no Rio de Janeiro.
        <small>Seu anúncio visto por milhares de pessoas por dia.</small>
      </>
    ),
  },
];

const Hero = () => {
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const [centerIdx, setCenterIdx] = useState(1);

  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPx(((e.clientX - r.left) / r.width  - 0.5) * 9);
    setPy(((e.clientY - r.top)  / r.height - 0.5) * -7);
  }, []);

  const onLeave = useCallback(() => { setPx(0); setPy(0); }, []);

  const leftIdx  = (centerIdx - 1 + 3) % 3;
  const rightIdx = (centerIdx + 1) % 3;

  return (
    <Secao id="inicio" onMouseMove={onMove} onMouseLeave={onLeave}>
      <GridDecorativo aria-hidden="true" />

      <Grid>
        <Coluna>
          <Titulo>
            Comunicação visual gerenciada para empresas, instituições,{" "}
            <AcentoAmarelo>anunciantes</AcentoAmarelo> e órgãos públicos.
          </Titulo>

          <Frentes aria-label="Três frentes de atuação">
            <Frente
              $cor="verde"
              href="#aplicacoes"
              onClick={(e) => { e.preventDefault(); scrollTo("aplicacoes"); }}
            >
              <span />Setor privado<br /><em>consultórios, escolas, empresas e comércios</em>
            </Frente>
            <Frente
              $cor="azul"
              href="#setor-publico"
              onClick={(e) => { e.preventDefault(); scrollTo("setor-publico"); }}
            >
              <span />Setor público<br /><em>órgãos federais, estaduais e municipais</em>
            </Frente>
            <Frente
              $cor="laranja"
              href="#tv-dbuzz"
              onClick={(e) => { e.preventDefault(); scrollTo("tv-dbuzz"); }}
            >
              <span />TV D.Buzz<br /><em>50+ Telas em locais comerciais</em>
            </Frente>
          </Frentes>

          <Acoes>
            <BotaoPrimario href="#aplicacoes" onClick={(e) => { e.preventDefault(); scrollTo("aplicacoes"); }}>
              Soluções para empresas <ArrowRight size={18} />
            </BotaoPrimario>
            <BotaoSecundario href="#setor-publico" onClick={(e) => { e.preventDefault(); scrollTo("setor-publico"); }}>
              Soluções para órgãos públicos
            </BotaoSecundario>
          </Acoes>

          <LinksSecundarios>
            <a href="#tv-dbuzz" onClick={(e) => { e.preventDefault(); scrollTo("tv-dbuzz"); }}>Anunciar na TV D.Buzz</a>
            <span aria-hidden="true">·</span>
            <a href="#setor-publico" onClick={(e) => { e.preventDefault(); scrollTo("setor-publico"); }}>
              <FileText size={14} /> Solicitar documentação técnica
            </a>
          </LinksSecundarios>
        </Coluna>

        <div>
          <Mockups aria-hidden="true" $px={px} $py={py}>
            <div style={{ cursor: "pointer" }} onClick={() => setCenterIdx(leftIdx)}>
              <DisplayVertical tom={PHONES[leftIdx].tom} selo={PHONES[leftIdx].selo} rodape={PHONES[leftIdx].rodape}>
                {PHONES[leftIdx].content}
              </DisplayVertical>
            </div>

            <div>
              <DisplayVertical tom={PHONES[centerIdx].tom} selo={PHONES[centerIdx].selo} rodape={PHONES[centerIdx].rodape}>
                {PHONES[centerIdx].content}
              </DisplayVertical>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => setCenterIdx(rightIdx)}>
              <DisplayVertical tom={PHONES[rightIdx].tom} selo={PHONES[rightIdx].selo} rodape={PHONES[rightIdx].rodape}>
                {PHONES[rightIdx].content}
              </DisplayVertical>
            </div>
          </Mockups>

          <PhoneDots>
            {PHONES.map((phone, i) => (
              <PhoneDot
                key={i}
                $ativo={i === centerIdx}
                onClick={() => setCenterIdx(i)}
                aria-label={`Ver ${phone.selo}`}
              />
            ))}
          </PhoneDots>
        </div>
      </Grid>

      <ScrollSeta href="#sobre" aria-label="Ir para próxima seção" onClick={(e) => { e.preventDefault(); scrollTo("sobre"); }}>
        <ChevronDown size={20} />
      </ScrollSeta>
    </Secao>
  );
};

export default Hero;

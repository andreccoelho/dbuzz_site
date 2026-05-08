import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { scrollTo } from "../../../utils/scroll";
import DisplayVertical from "../../ui/DisplayVertical/DisplayVertical";
import {
  Secao, Grid, GridDecorativo, Coluna, Kicker, Titulo, AcentoAmarelo,
  Texto, Frentes, Frente, Acoes, BotaoPrimario, BotaoSecundario,
  LinksSecundarios, Metricas, Metrica, Mockups, ScrollSeta,
} from "./Style";

const METRICAS = [
  { num: 50,  pre: "",  suf: "+",    label: "Displays de LED verticais indoor em operação" },
  { num: 15,  pre: "~", suf: " min", label: "Looping médio de programação da TV D.Buzz" },
  { num: 72,  pre: "",  suf: "h",    label: "Prazo de recomposição operacional crítica" },
  { num: 2,   pre: "",  suf: "",     label: "Mercados — setor privado e setor público" },
];

function useContador(alvo, ativo, dur = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!ativo) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * alvo));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [ativo]);
  return val;
}

const MetricaItem = ({ num, pre, suf, label, ativo }) => {
  const val = useContador(num, ativo);
  return (
    <Metrica>
      <strong>{pre}{val}{suf}</strong>
      <span>{label}</span>
    </Metrica>
  );
};

const Hero = () => {
  const [ativarMetricas, setAtivarMetricas] = useState(false);
  const metricasRef = useRef(null);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);

  useEffect(() => {
    const el = metricasRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAtivarMetricas(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPx(((e.clientX - r.left) / r.width  - 0.5) * 9);
    setPy(((e.clientY - r.top)  / r.height - 0.5) * -7);
  }, []);

  const onLeave = useCallback(() => { setPx(0); setPy(0); }, []);

  return (
    <Secao id="inicio" onMouseMove={onMove} onMouseLeave={onLeave}>
      <GridDecorativo aria-hidden="true" />

      <Grid>
        <Coluna>
          <Kicker>
            <span /> Empresa especializada · Setor público e privado
          </Kicker>

          <Titulo>
            Comunicação visual gerenciada para empresas, instituições,{" "}
            <AcentoAmarelo>anunciantes</AcentoAmarelo> e órgãos públicos.
          </Titulo>

          <Texto>
            A D.Buzz Corporate estrutura, opera e acompanha canais de comunicação visual em
            ambientes físicos — produção de conteúdo customizado, gestão remota de grade,
            suporte técnico e infraestrutura dedicada do início ao fim.
          </Texto>

          <Frentes aria-label="Três frentes de atuação">
            <Frente $cor="verde">
              <span />Setor privado<br /><em>consultórios, escolas, empresas e comércios</em>
            </Frente>
            <Frente $cor="azul">
              <span />Setor público<br /><em>órgãos federais, estaduais e municipais</em>
            </Frente>
            <Frente $cor="laranja">
              <span />TV D.Buzz<br /><em>50+ Displays de LED em locais comerciais</em>
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
            <a href="mailto:dbuzzcorporate@gmail.com?subject=Documentação Setor Público">
              <FileText size={14} /> Solicitar documentação técnica
            </a>
          </LinksSecundarios>

          <Metricas ref={metricasRef}>
            {METRICAS.map((m, i) => (
              <MetricaItem key={i} {...m} ativo={ativarMetricas} />
            ))}
          </Metricas>
        </Coluna>

        <Mockups aria-hidden="true" $px={px} $py={py}>
          <DisplayVertical tom="verde" selo="Saúde Digital" rodape="Espera Inteligente">
            <strong>Bem-vindo</strong>
            Espera Inteligente
            <small>Sua consulta está confirmada. Em breve você será chamado.</small>
          </DisplayVertical>

          <DisplayVertical tom="azul" selo="Setor Público" rodape="Comunicação ao cidadão">
            <strong>Canal<br />Cidadão</strong>
            <small>
              Documentação técnica de apoio à análise do órgão público competente. Comunicação
              institucional, campanhas e utilidade pública.
            </small>
          </DisplayVertical>

          <DisplayVertical tom="laranja" selo="TV D.Buzz" rodape="Looping de ~15 min">
            <strong>50+</strong>
            telas em pontos de alto tráfego na região.
            <small>Seu anúncio visto por milhares de pessoas por dia. Fale com a D.Buzz.</small>
          </DisplayVertical>
        </Mockups>
      </Grid>

      <ScrollSeta href="#sobre" aria-label="Ir para próxima seção" onClick={(e) => { e.preventDefault(); scrollTo("sobre"); }}>
        <ChevronDown size={20} />
      </ScrollSeta>
    </Secao>
  );
};

export default Hero;

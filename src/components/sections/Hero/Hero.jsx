import { ArrowRight, FileText } from "lucide-react";
import DisplayVertical from "../../ui/DisplayVertical/DisplayVertical";
import {
  Secao, Grid, GridDecorativo, Coluna, Kicker, Titulo, AcentoAmarelo,
  Texto, Frentes, Frente, Acoes, BotaoPrimario, BotaoSecundario,
  LinksSecundarios, Metricas, Metrica, Mockups,
} from "./Style";

const Hero = () => (
  <Secao id="inicio">
    <GridDecorativo aria-hidden="true" />

    <Grid>
      <Coluna>
        <Kicker>
          <span /> Empresa especializada · Setor público e privado
        </Kicker>

        <Titulo>
          Comunicação presencial gerenciada para empresas, instituições,{" "}
          <AcentoAmarelo>anunciantes</AcentoAmarelo> e órgãos públicos.
        </Titulo>

        <Texto>
          A D.Buzz Corporate estrutura, opera e acompanha canais de comunicação presencial em
          ambientes físicos, com produção de conteúdo customizado, operação técnica especializada,
          gestão remota, grade de programação, suporte, evidências operacionais e infraestrutura
          tecnológica dedicada.
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
          <BotaoPrimario href="#aplicacoes">
            Soluções para empresas <ArrowRight size={18} />
          </BotaoPrimario>
          <BotaoSecundario href="#setor-publico">
            Soluções para órgãos públicos
          </BotaoSecundario>
        </Acoes>

        <LinksSecundarios>
          <a href="#tv-dbuzz">Anunciar na TV D.Buzz</a>
          <span aria-hidden="true">·</span>
          <a href="mailto:dbuzzcorporate@gmail.com?subject=Documentação Setor Público">
            <FileText size={14} /> Solicitar documentação técnica
          </a>
        </LinksSecundarios>

        <Metricas>
          <Metrica>
            <strong className="num">50+</strong>
            <span>Displays de LED verticais indoor em operação</span>
          </Metrica>
          <Metrica>
            <strong className="num">~15 min</strong>
            <span>Looping médio de programação da TV D.Buzz</span>
          </Metrica>
          <Metrica>
            <strong className="num">72h</strong>
            <span>Prazo de recomposição operacional crítica</span>
          </Metrica>
          <Metrica>
            <strong className="num">2</strong>
            <span>Mercados — setor privado e setor público</span>
          </Metrica>
        </Metricas>
      </Coluna>

      <Mockups aria-hidden="true">
        <DisplayVertical tom="verde" selo="Saúde Digital" rodape="Espera Inteligente">
          <strong>92%</strong>
          dos pacientes preferem orientação visual na sala de espera.
          <small>Conteúdo de saúde, campanhas institucionais e orientações ao paciente.</small>
        </DisplayVertical>

        <DisplayVertical tom="azul" selo="Setor Público" rodape="Comunicação ao cidadão">
          <strong>Atend.<br/>Sus</strong>
          <small>
            Documentação técnica de apoio à análise do órgão público competente. Comunicação
            institucional, campanhas e utilidade pública.
          </small>
        </DisplayVertical>

        <DisplayVertical tom="laranja" selo="TV D.Buzz" rodape="Looping de ~15 min">
          <strong>Anuncie</strong>
          aqui
          <small>
            Rede própria com mais de 50 Displays de LED verticais indoor em locais comerciais
            privados.
          </small>
        </DisplayVertical>
      </Mockups>
    </Grid>
  </Secao>
);

export default Hero;

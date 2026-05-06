import { Moldura, Tela, BarraStatus, EquilibradoBuzz, Conteudo, Selo, Pe } from "./Style";

/**
 * Mockup de Display de LED vertical 9:16 — elemento visual principal da identidade D.Buzz.
 * O briefing v2 e a Orientação ScreenCloud reforçam que telas verticais sao a linguagem
 * obrigatoria do site; horizontais (estilo software de signage generico) estao proibidas.
 *
 * Props:
 *  - tom: "azul" | "verde" | "laranja" — define a paleta interna do conteudo
 *  - selo: string — badge no topo da tela (ex: "Saúde Digital")
 *  - children: conteudo renderizado dentro da tela
 *  - rodape: texto fino na base da tela (caption tipo TV)
 */
const DisplayVertical = ({ tom = "azul", selo, children, rodape }) => (
  <Moldura $tom={tom}>
    <Tela $tom={tom}>
      <BarraStatus>
        <EquilibradoBuzz>
          <span /><span /><span /><span /><span />
        </EquilibradoBuzz>
        <span className="hora">AO VIVO</span>
      </BarraStatus>

      {selo && <Selo $tom={tom}>{selo}</Selo>}

      <Conteudo>{children}</Conteudo>

      {rodape && <Pe>{rodape}</Pe>}
    </Tela>
  </Moldura>
);

export default DisplayVertical;

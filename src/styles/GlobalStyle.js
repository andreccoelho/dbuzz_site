import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --azul: #0E2554;
    --azul-escuro: #06102A;
    --azul2: #1B4FD8;
    --amarelo: #F5C400;
    --amarelo-escuro: #C99E00;
    --verde: #00966A;
    --verde-escuro: #064E3B;
    --laranja: #B85600;
    --laranja-escuro: #6B2200;
    --bg: #F4F6FA;
    --bg-escuro: #050B1F;
    --texto: #1A1F2E;
    --sub: #556581;
    --borda: #E2E8F0;
    --branco: #FFFFFF;

    --fonte-titulo: 'Syne', system-ui, sans-serif;
    --fonte-corpo: 'DM Sans', system-ui, sans-serif;
    --fonte-mono: 'DM Mono', 'Courier New', monospace;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--fonte-corpo);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: var(--texto);
    background-color: var(--branco);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: var(--fonte-titulo);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--texto);
  }

  h1 { font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; letter-spacing: -0.03em; }
  h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); }
  h3 { font-size: clamp(1.25rem, 2vw, 1.5rem); }

  p { margin: 0 0 1em 0; }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Numeros tabulares para metricas */
  .num {
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
  }

  /* Kicker editorial: letra pequena, caixa alta, espacamento largo */
  .kicker {
    font-family: var(--fonte-corpo);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--sub);
  }

  /* Selecao */
  ::selection {
    background-color: var(--amarelo);
    color: var(--azul);
  }

  /* Scrollbar discreta */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--borda); border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--sub); }
`;

export default GlobalStyle;

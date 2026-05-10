import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Paleta oficial */
    --amarelo: #fec708;
    --preto: #000000;
    --branco: #ffffff;

    /* Tons neutros */
    --preto-2: #0a0a0a;
    --cinza-900: #171717;
    --cinza-700: #404040;
    --cinza-500: #737373;
    --cinza-300: #d4d4d4;
    --cinza-200: #e5e5e5;
    --cinza-100: #f5f5f5;
    --cinza-50: #fafafa;

    /* Aliases retrocompatíveis */
    --azul: #000000;
    --azul-escuro: #000000;
    --azul2: #000000;
    --amarelo-escuro: #d4a800;
    --verde: #000000;
    --verde-escuro: #000000;
    --laranja: #000000;
    --laranja-escuro: #000000;
    --bg: #f5f5f5;
    --bg-escuro: #000000;
    --texto: #171717;
    --sub: #404040;
    --borda: #e5e5e5;

    --fonte-titulo: 'Rajdhani', system-ui, sans-serif;
    --fonte-corpo: 'Inter', system-ui, sans-serif;
    --fonte-mono: 'Inter', 'Courier New', monospace;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scroll-padding-top: 82px;
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
    letter-spacing: -0.025em;
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

  .num {
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
  }

  .kicker {
    font-family: var(--fonte-corpo);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--amarelo);
  }

  ::selection {
    background-color: var(--amarelo);
    color: #000;
  }

  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--borda); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--sub); }
`;

export default GlobalStyle;

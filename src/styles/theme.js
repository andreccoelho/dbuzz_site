// Paleta oficial conforme Instruções para o Programador (Bloco 2, item 7)
// Cores fiéis à logo D.Buzz: amarelo #F5C400 como cor da marca

export const theme = {
  cores: {
    // Bases institucionais
    azul: "#0E2554",       // hero, nav, footer, banners
    azulEscuro: "#06102A", // gradiente do hero
    azul2: "#1B4FD8",      // botões secundários, destaques setor público

    // Marca
    amarelo: "#F5C400",       // botão primário, métricas, accents — cor da marca
    amareloEscuro: "#C99E00",

    // Frentes de atuação (badges)
    verde: "#00966A",      // Setor Privado
    verdeEscuro: "#064E3B",
    laranja: "#B85600",    // TV D.Buzz
    laranjaEscuro: "#6B2200",

    // Neutros
    bg: "#F4F6FA",         // seções alternadas
    bgEscuro: "#050B1F",   // footer
    texto: "#1A1F2E",
    sub: "#556581",
    borda: "#E2E8F0",
    branco: "#FFFFFF",
  },
  fontes: {
    titulo: "'Syne', system-ui, sans-serif",
    corpo: "'DM Sans', system-ui, sans-serif",
    mono: "'DM Mono', 'Courier New', monospace",
  },
  shadow: {
    suave: "0 4px 16px rgba(14, 37, 84, .08)",
    media: "0 8px 32px rgba(14, 37, 84, .12)",
    forte: "0 16px 48px rgba(14, 37, 84, .18)",
  },
  raio: {
    sm: "6px",
    md: "10px",
    lg: "12px",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "900px",
    desktop: "1200px",
  },
};

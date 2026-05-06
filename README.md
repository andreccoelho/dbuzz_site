# Site Institucional D.Buzz Corporate

Site institucional React de página única (SPA) para a **D.Buzz Corporate e Serviços Ltda.** — empresa de _comunicação presencial gerenciada_ com sede em Nova Iguaçu/RJ.

> **Importante.** Este projeto segue rigorosamente o briefing técnico aprovado pela direção da D.Buzz, incluindo a separação editorial e jurídica entre as três frentes de atuação (Setor Privado, Setor Público e TV D.Buzz). Antes de alterar copy ou estrutura, consulte os documentos do briefing.

---

## Stack

- **React 18** + **React Router** (HashRouter)
- **styled-components** para estilização
- **Webpack 5** + **Babel 7**
- **lucide-react** para ícones
- Fontes: **Syne** (títulos) + **DM Sans** (corpo) — carregadas via Google Fonts

---

## Como rodar localmente

Pré-requisitos: **Node.js 18+** e **npm**.

```bash
# 1. Instalar dependências
npm install

# 2. Subir servidor de desenvolvimento (abre em http://localhost:8080)
npm start

# 3. Gerar build de produção (saída em /build)
npm run build
```

---

## Estrutura de pastas

```
dbuzz-site/
├── public/
│   ├── index.html              # HTML base, meta tags, Google Fonts
│   ├── sitemap.xml             # Sitemap estático
│   ├── robots.txt              # Diretivas para crawlers
│   └── imagens/
│       ├── logo-dbuzz-amarelo.jpg   # Logo amarelo+preto (light backgrounds)
│       └── logo-dbuzz-branco.jpg    # Logo branco+preto (dark backgrounds)
├── src/
│   ├── index.js                # Entry point, HashRouter
│   ├── styles/
│   │   ├── theme.js            # Paleta oficial e tokens
│   │   └── GlobalStyle.js      # Reset e estilos globais
│   ├── pages/
│   │   ├── Home.jsx            # Página principal (todas as seções)
│   │   └── Privacidade.jsx     # Política de Privacidade (LGPD)
│   └── components/
│       ├── Header/             # Nav fixa + menu mobile
│       ├── Footer/             # Rodapé com CNPJ e link de privacidade
│       ├── ui/
│       │   ├── DisplayVertical/    # Mockup reutilizável de Display 9:16
│       │   └── CookieBanner/       # Banner LGPD com localStorage
│       └── sections/
│           ├── Hero/               # 01 — abertura
│           ├── Sobre/              # 02 — institucional + dados
│           ├── Solucoes/           # 03 — três frentes
│           ├── Aplicacoes/         # 04 — 6 tabs interativas
│           ├── SetorPublico/       # 05 — modalidade pública
│           ├── TvDbuzz/            # 06 — rede comercial privada
│           ├── Portfolio/          # 07 — 6 cases
│           ├── Governanca/         # 08 — políticas + DBuzz Control Signage
│           ├── Equipe/             # 09 — 4 cards + Instagram
│           └── Contato/            # 10 — 3 fluxos + dados
├── .babelrc                    # Presets Babel
├── webpack.config.js           # Bundler
└── package.json
```

---

## Paleta oficial (referência)

Definida em `src/styles/theme.js` e fiel ao Bloco 2, item 7 das Instruções para o Programador.

| Token             | Hex       | Uso                                           |
| ----------------- | --------- | --------------------------------------------- |
| `azul`            | `#0E2554` | Hero, nav, footer, banners                    |
| `azulEscuro`      | `#06102A` | Gradiente do hero                             |
| `azul2`           | `#1B4FD8` | Acentos institucionais, setor público         |
| `amarelo`         | `#F5C400` | Botão primário, métricas — **cor da marca**   |
| `verde`           | `#00966A` | Setor Privado                                 |
| `laranja`         | `#B85600` | TV D.Buzz                                     |
| `bg`              | `#F4F6FA` | Seções alternadas                             |
| `bgEscuro`        | `#050B1F` | Footer                                        |
| `texto`           | `#1A1F2E` | Texto principal                               |
| `sub`             | `#556581` | Texto secundário                              |

---

## Termos proibidos (validação obrigatória antes do deploy)

Faça `Ctrl+F` em todo o conteúdo procurando os seguintes termos. Se encontrar, **substitua antes de publicar**:

| ❌ Não usar                       | ✅ Substituir por                                          |
| --------------------------------- | ---------------------------------------------------------- |
| _televisores_, _televisão_        | **Displays de LED verticais indoor**                       |
| _plataforma_, _software_ (isolado)| **DBuzz Control Signage**                                  |
| _garante inexigibilidade_         | **fornece documentação de apoio à análise**                |
| _dispensa licitação_              | (idem acima)                                               |
| _TV D.Buzz_ na seção Setor Público| (proibido — separação jurídica obrigatória)                |
| _publicidade_ na seção Setor Público | (proibido — modalidade institucional, sem comercial)    |

---

## Customizações comuns

### Trocar e-mail de contato
Os links `mailto:` estão nos componentes:
- `src/components/sections/SetorPublico/SetorPublico.jsx`
- `src/components/sections/TvDbuzz/TvDbuzz.jsx`
- `src/components/sections/Contato/Contato.jsx`
- `src/components/sections/Governanca/Governanca.jsx`

### Trocar Instagram
Em `src/components/sections/Equipe/Equipe.jsx`, atualize o `href` do `<S.IgBtn>`.

### Adicionar Google Analytics 4
1. Adicionar tag `<script>` do GA4 em `public/index.html`, antes do `</head>`.
2. Substituir `G-XXXXXXXXXX` pelo Measurement ID real.

### Atualizar dados institucionais
- **CNPJ, endereço, e-mail**: editar `src/components/sections/Sobre/Sobre.jsx` (bloco _Dados Institucionais_) e `src/components/sections/Contato/Contato.jsx` (bloco _Dados_).

---

## Conformidade LGPD

- Banner de cookies fixo no rodapé (`CookieBanner`) com persistência em `localStorage` (chave `dbuzz_cookies_aceitos_v1`).
- Página de privacidade em `#/privacidade` (rota separada via HashRouter) com texto institucional completo.
- Nenhum cookie de tracking é instalado por padrão — adicione GA4 / pixel apenas após o aceite explícito do usuário se for o caso.

---

## Deploy

O build de produção é gerado em `/build` e pode ser publicado em qualquer host estático (Vercel, Netlify, S3+CloudFront, GitHub Pages, hospedagem tradicional).

```bash
npm run build
# Subir o conteúdo da pasta /build para o host
```

Como a aplicação usa **HashRouter** (`#/privacidade`), não há necessidade de configurar regras de rewrite no servidor — basta servir `index.html` na raiz.

---

## Suporte

Dúvidas técnicas, ajustes ou novas seções: orientar pelos documentos do briefing (`Briefing_Tecnico_Site_DBuzz_v2_Revisado.docx`, `Instrucoes_Programador_DBuzz.pdf` e `Orientacao_ScreenCloud_Site_DBuzz_Programador.pdf`) e validar quaisquer alterações de copy com a direção da D.Buzz antes do deploy.

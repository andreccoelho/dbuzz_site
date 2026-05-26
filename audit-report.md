# Audit Report — D.Buzz Corporate Site
_Gerado em: Fase 1 — sem alterações aplicadas_

---

## 1. Ocorrências de Termos Proibidos

### "TV" / "televisor" / "televisão"

> **ALERTA DE MARCA:** Todas as ocorrências de "TV" são exclusivamente o nome comercial **"TV D.Buzz"** — produto da D.Buzz. Não há uso genérico de "TV", "televisores" ou "televisão" em nenhum arquivo. A substituição deste termo exige decisão de rebranding da linha de produto, não apenas ajuste de copy.

| Arquivo | Linha | Contexto |
|---|---|---|
| `src/components/Header/Header.jsx` | 11 | nav label `"TV D.Buzz"` |
| `src/components/Footer/Footer.jsx` | 37 | link rodapé `"TV D.Buzz"` |
| `src/components/sections/TvDbuzz/TvDbuzz.jsx` | 15, 21, 56, 64, 70, 78, 82 | nome da seção e copy |
| `src/components/sections/Hero/Hero.jsx` | 38, 97, 111 | selo de telinha e links |
| `src/components/sections/Solucoes/Solucoes.jsx` | 46, 56, 57 | card da frente TV D.Buzz |
| `src/components/sections/Contato/Contato.jsx` | 24, 28 | card de contato TV D.Buzz |
| `src/components/sections/Portfolio/Portfolio.jsx` | 61–65 | case portfolio TV D.Buzz |
| `src/components/sections/Governanca/Governanca.jsx` | 8 | política de anúncios |
| `src/components/sections/Gancho/Gancho.jsx` | 6 | métrica de looping |
| `src/components/sections/Equipe/Equipe.jsx` | 19, 31, 66 | descrições de funções |
| `src/components/sections/Aplicacoes/Aplicacoes.jsx` | 98 | descrição setor público |
| `src/components/sections/SetorPublico/SetorPublico.jsx` | 50 | nota de separação |
| `src/components/ui/DisplayVertical/DisplayVertical.jsx` | 12 | comentário interno de código |
| `public/index.html` | 14 | meta description |

### "inovador", "moderno", "melhor solução", "revolucionário", "tecnologia de ponta"

**Zero ocorrências** em todo o projeto. O site já evita esse vocabulário.

---

## 2. Mapa Atual de Páginas e Seções

### Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `pages/Home.jsx` | Página principal (one-pager) |
| `/privacidade` | `pages/Privacidade.jsx` | Política de Privacidade |
| `/login` | `pages/Login.jsx` | Área de login |
| `/protegida` | `pages/Protegida.jsx` | Área restrita pós-login |
| `/logout` | `pages/Logout.jsx` | Logout |

> **Gap (Fase 5):** Não existem rotas de segmentos (`/segmentos/prefeituras` etc.) nem página de plataforma (`/plataforma`).

### Seções da Home (ordem atual)

| Ordem | ID / Anchor | Componente | Descrição resumida |
|---|---|---|---|
| 1 | `#inicio` | `Hero` | Título, 3 telinhas interativas, CTAs |
| 2 | _(sem id)_ | `Gancho` | Frase de impacto + 4 métricas animadas |
| 3 | `#clientes` | `Clientes` | Carrossel infinito de logos de clientes |
| 4 | `#sobre` | `Sobre` | Missão/Visão + 10 valores |
| 5 | `#solucoes` | `Solucoes` | 3 cards de frentes (Privado, Público, TV D.Buzz) |
| 6 | `#tipos-conteudo` | `TiposConteudo` | Grid de 10 tipos de conteúdo gerenciado |
| 7 | `#aplicacoes` | `Aplicacoes` | Tabs por segmento + mockup de tela vertical |
| 8 | `#setor-publico` | `SetorPublico` | Kit técnico + objeto contratual |
| 9 | `#tv-dbuzz` | `TvDbuzz` | Rede comercial privada + CTA anunciante |
| 10 | `#portfolio` | `Portfolio` | 6 cases com badge por modalidade |
| 11 | `#governanca` | `Governanca` | Políticas + features DBuzz Control Signage |
| 12 | `#equipe` | `Equipe` | Cards de equipe |
| 13 | _(sem id)_ | `CTAEspecialista` | CTA final com 2 botões |
| 14 | `#contato` | `Contato` | 3 fluxos de contato + dados institucionais |

---

## 3. Componentes Reutilizáveis Identificados

| Componente | Localização | Reutilização atual |
|---|---|---|
| `Header` | `components/Header/Header.jsx` | Global — todas as páginas |
| `Footer` | `components/Footer/Footer.jsx` | Global — todas as páginas |
| `DisplayVertical` | `components/ui/DisplayVertical/DisplayVertical.jsx` | Hero (3 instâncias) |
| `CookieBanner` | `components/ui/CookieBanner/CookieBanner.jsx` | Home |
| Seções de conteúdo | `components/sections/*/` | Cada uma usada 1x na Home |

> **Observação Fase 5:** Não existe componente `<SegmentPage>` — será criado do zero.

---

## 4. Estado do SEO / Metadados

| Item | Situação |
|---|---|
| `<title>` | Presente: `"D.Buzz Corporate"` — genérico, sem keyword |
| `<meta description>` | Presente — menciona "TV D.Buzz" (termo a revisar pela Fase 8) |
| Open Graph (`og:`) | `og:title`, `og:description`, `og:url`, `og:image` presentes; sem `og:type` Twitter |
| Twitter Card | **Ausente** |
| Schema.org JSON-LD | **Ausente** |
| `sitemap.xml` | Presente — apenas âncoras da Home (`#sobre`, `#solucoes` etc.); sem rotas de segmentos |
| `robots.txt` | Presente — `Allow: /`, referencia sitemap |

---

## 5. Lacunas identificadas vs. Fases do Script

| Fase | Gap atual |
|---|---|
| Fase 2 | Hero atual não usa os CTAs nem os selos de credibilidade especificados |
| Fase 4 | Seção "Operação Corporativa / Capacidade Institucional" não existe |
| Fase 5 | Zero páginas de segmento; componente `<SegmentPage>` não existe |
| Fase 6 | Página `/plataforma` não existe |
| Fase 7 | Animações de entrada por viewport: Gancho usa `IntersectionObserver`, demais seções não têm |
| Fase 8 | Twitter Cards, Schema.org JSON-LD ausentes; sitemap desatualizado |
| Fase 9 | Tagline "Comunicação Inteligente Gerenciada" não está no Footer nem nos metadados |

---

_Fase 1 concluída. Nenhum arquivo de conteúdo foi alterado. Aguardando aprovação para Fase 2._

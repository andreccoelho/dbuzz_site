# Página DBUZZ Control Signage — v2
## Briefing + Script para Claude Code (institucional, inspirado na LP do Yeloo Player)

---

# Parte 1 — Contexto compactado

## O que é o DBUZZ Control Signage

Plataforma **proprietária** da D.Buzz para gestão de Displays de LED corporativos. Roda por trás da operação da própria D.Buzz: organiza programação, agenda conteúdo, sincroniza com os displays remotamente e monitora cada tela em tempo real.

## Por que existe

Hoje a D.Buzz depende de plataformas terceirizadas para essa gestão. O Control Signage internaliza esse núcleo da operação sob arquitetura própria, eliminando dependência de fornecedor e dando autonomia total sobre features, dados e roadmap.

## Arquitetura em 3 camadas

1. **Painel Web (React + TypeScript)** — Onde a operação gerencia tudo: upload, agendamento visual, monitoramento em tempo real, relatórios.
2. **Backend (Node.js + PostgreSQL + AWS S3 + CloudFront)** — API REST com autenticação JWT, lógica de agendamento, storage em nuvem com CDN, logs completos.
3. **Aplicativo nos Displays (Android TV + Kotlin + ExoPlayer)** — Sincroniza a cada 30s, reproduz em loop 24/7, envia heartbeat a cada 1min reportando status real.

## Diferenciais

- 100% propriedade intelectual da D.Buzz (registrável no INPI)
- Suporte a 4K, HLS, DASH e MP4
- Multi-tenant nativo
- Loop infinito sem memory leaks (operação 24/7 estável)
- Heartbeat com métricas operacionais reais
- Integração nativa com outros sistemas próprios da D.Buzz (coletores automatizados)

## Onde se encaixa estrategicamente

Pilar de **autonomia tecnológica** do posicionamento institucional da D.Buzz. Reforça os valores declarados de responsabilidade técnica, continuidade operacional, rastreabilidade por evidências e segurança jurídica.

---

# Parte 2 — Script para Claude Code

> Copie tudo abaixo desta linha e cole como prompt inicial no Claude Code, dentro da raiz do repositório do site institucional da D.Buzz.

---

## Tarefa

Criar uma **página institucional de produto** chamada **DBUZZ Control Signage** dentro do site da D.Buzz. O objetivo é **apresentar o produto** — não vender SaaS para terceiros. A página explica o que é, como funciona, o que entrega e por que existe, posicionando-o como diferencial tecnológico da D.Buzz.

A página deve seguir a mesma **estrutura editorial** da landing do Yeloo Player (referência: `yeloo.com.br/yeloo-player-lp`), com tom adaptado para institucional B2B: profissional, firme, sem informalidades, sem emojis, sem promessas de "teste grátis". CTAs são institucionais ("Fale com nossa equipe" / "Solicitar apresentação").

## Antes de escrever qualquer código — explore o projeto

Sua primeira ação deve ser entender o que já existe. Não invente estrutura, framework, design tokens ou padrões. Siga rigorosamente o que está no repositório.

Faça nesta ordem:

1. Liste a estrutura raiz do projeto e identifique:
    - Framework usado (Next.js, Astro, Nuxt, Vite, HTML estático, WordPress, etc.)
    - Versão e configuração principal (TypeScript? Tailwind? CSS Modules? styled-components?)
    - Pasta de páginas/rotas (`pages/`, `app/`, `src/pages/`, etc.)
    - Pasta de componentes reutilizáveis e padrão de nomenclatura
    - Arquivo de tokens de design (cores, tipografia, espaçamentos, breakpoints)
    - Como o menu principal e o rodapé são declarados
    - Padrão de SEO (next/head, Astro layout, etc.)
    - Padrão de imagens (next/image, picture, img puro, formato preferido)

2. Abra **2 ou 3 páginas existentes** do site e leia o código delas para entender:
    - Padrão de imports e organização do arquivo
    - Padrão de seções (hero, blocos, CTAs)
    - Padrão de classes/estilos
    - Padrão de responsividade e breakpoints
    - Padrão de animações (se houver — Framer Motion, GSAP, CSS puro)

3. Antes de criar a página, **me responda em 5–10 linhas** com:
    - Framework, linguagem e principais bibliotecas identificados
    - Caminho exato onde a nova página será criada
    - Componentes existentes que você vai reutilizar (com caminho)
    - Identidade visual base (paleta, fontes, espaçamento) — em 1 frase
    - Qualquer ambiguidade que precise da minha confirmação

Só depois da minha confirmação, prossiga para a implementação.

---

## Estrutura da página

A página deve ter **11 seções**, nesta ordem. Use os componentes/padrões já existentes no site sempre que possível. Só crie componente novo quando não houver equivalente.

### Seção 1 — Hero

- **Kicker** (texto pequeno, acima do título): `PLATAFORMA PROPRIETÁRIA D.BUZZ`
- **Headline (H1)**: `Controle total da rede de comunicação presencial. Sob arquitetura própria.`
- **Subheadline (parágrafo)**: `O DBUZZ Control Signage é a plataforma que opera por trás da rede de Displays de LED da D.Buzz — com agendamento, monitoramento e sincronização automática em escala, sem depender de fornecedores externos de CMS.`
- **CTA primário**: `Falar com nossa equipe` (link para a página/seção de contato existente)
- **CTA secundário** (link com âncora, sem botão pesado): `Como funciona →` (anchor para `#como-funciona`)
- **Visual**: à direita do texto no desktop, abaixo no mobile. Use o arquivo `Diagrama_DBUZZ_CONTROL_SIGNAGE.png` se estiver disponível no repositório. Caso contrário, deixe placeholder com `alt="Arquitetura DBUZZ Control Signage"` e me avise para subir o arquivo.

Layout: duas colunas no desktop (texto à esquerda, visual à direita), uma coluna no mobile (texto em cima).

### Seção 2 — Faixa de números/provas operacionais

Faixa horizontal com 4 cards numéricos. Sem ornamentos, fundo neutro ou com leve contraste em relação à seção anterior.

```
24/7              ~30 SEGUNDOS         ~1 MINUTO            72 HORAS
Operação          Sincronização        Heartbeat de         SLA de
contínua          automática           cada display         recomposição
                  por display                               crítica
```

Cada item: número/valor em destaque acima, label curto abaixo. Centralizado no card.

### Seção 3 — O que é

- **Kicker**: `PLATAFORMA`
- **Headline (H2)**: `Uma plataforma própria para uma operação que não pode parar.`
- **Texto** (parágrafo único, ~3-4 linhas):

> A D.Buzz opera uma rede de comunicação presencial gerenciada onde cada display precisa estar no ar, com o conteúdo certo, no horário certo, todos os dias. O Control Signage é a plataforma desenvolvida internamente para sustentar essa operação: ela centraliza a programação, distribui o conteúdo, monitora cada tela em tempo real e mantém a rede funcionando de forma estável, rastreável e auditável.

- **CTA inline** (link, não botão pesado): `Solicitar apresentação →`

### Seção 4 — Como funciona (#como-funciona)

- **Kicker**: `COMO FUNCIONA`
- **Headline (H2)**: `Três camadas integradas. Uma única operação.`
- **Texto curto introdutório** (2 linhas): `A plataforma é estruturada em três camadas que se comunicam por APIs próprias: o painel onde a operação acontece, o backend que orquestra tudo, e o aplicativo que roda em cada display.`

Logo abaixo do texto, **inserir o diagrama de arquitetura** (`Diagrama_DBUZZ_CONTROL_SIGNAGE.png`). Deve ocupar largura confortável (até 900px no desktop), com legenda discreta abaixo: `Arquitetura DBUZZ Control Signage`.

### Seção 5 — Camada 1: Painel Web (bloco alternado imagem-texto)

Layout: **texto à esquerda, imagem/mockup à direita** no desktop. Empilhado no mobile.

- **Kicker**: `CAMADA 1 — PAINEL WEB`
- **Headline (H2)**: `Gestão completa em um painel só.`
- **Parágrafo**: `Construído em React, o painel é onde a equipe da D.Buzz programa a rede inteira. Upload de conteúdo, agendamento visual em calendário, monitoramento de cada display em tempo real e relatórios consolidados — tudo em uma única interface.`
- **Lista de bullets** (com check ou bullet visual do site):
    - Upload de mídia (vídeo, imagem, conteúdo institucional)
    - Agendamento por display, grupo ou rede inteira
    - Repetição diária, semanal ou customizada
    - Status ao vivo de cada display (online, offline, último sync)
    - Gestão de usuários e permissões por nível

- **Placeholder de imagem**: mockup do painel (deixar placeholder com instruções no `alt` se não houver imagem ainda).

### Seção 6 — Camada 2: Backend (bloco alternado, **imagem à esquerda, texto à direita**)

- **Kicker**: `CAMADA 2 — BACKEND PRÓPRIO`
- **Headline (H2)**: `Infraestrutura robusta, sob nosso controle.`
- **Parágrafo**: `O backend em Node.js orquestra toda a operação: autenticação, agendamentos, distribuição de conteúdo e comunicação com os displays. Storage em nuvem com CDN garante que o conteúdo chega rápido em qualquer ponto da rede, e cada evento operacional fica registrado para auditoria.`
- **Lista de bullets**:
    - API REST documentada com autenticação JWT
    - Storage em nuvem com AWS S3 + CloudFront CDN
    - Banco PostgreSQL multi-tenant
    - Rate limiting e proteção contra abuso
    - Logs completos de eventos e heartbeats
    - Backup automático e replicação master-slave

- **Placeholder de imagem**: visualização de logs/dashboard de backend.

### Seção 7 — Camada 3: Aplicativo nos Displays (bloco alternado, **texto à esquerda, imagem à direita**)

- **Kicker**: `CAMADA 3 — APLICATIVO NOS DISPLAYS`
- **Headline (H2)**: `Reprodução estável, sincronização automática.`
- **Parágrafo**: `Em cada Display de LED roda um aplicativo Android TV em Kotlin, com player profissional baseado em ExoPlayer. Ele consulta o backend a cada 30 segundos buscando atualizações na programação, e envia heartbeat a cada minuto reportando status real — online, conteúdo em exibição, temperatura. Tudo isso em loop infinito, 24 horas por dia, sem travamentos.`
- **Lista de bullets**:
    - Polling otimizado a cada 30 segundos
    - Heartbeat operacional a cada 1 minuto
    - Suporte a 4K, HLS, DASH e MP4
    - Cache local para resiliência (continua exibindo se a internet cair)
    - Loop 24/7 sem memory leaks
    - Atualização remota sem necessidade de acesso físico ao display

- **Placeholder de imagem**: foto de um display em operação ou tela do app.

### Seção 8 — Banner CTA intermediário

Bloco de largura total, fundo de destaque (use a cor primária da marca ou um tom escuro contrastante, seguindo o padrão do site).

- **Título grande centralizado**: `O Control Signage opera nos bastidores da rede D.Buzz.`
- **Subtítulo**: `Quer entender como a tecnologia sustenta nossa operação de comunicação presencial gerenciada?`
- **Botão**: `Falar com nossa equipe`

### Seção 9 — Recursos e diferenciais (grid)

- **Kicker**: `RECURSOS`
- **Headline (H2)**: `O que diferencia o Control Signage.`

Grid de **6 cards** (3 colunas no desktop, 2 no tablet, 1 no mobile). Cada card: ícone (use ícones do set já presente no site, ou Lucide/Heroicons se o site usar), título, 1-2 linhas de descrição.

1. **Arquitetura proprietária** — Toda a stack desenvolvida internamente. Sem dependência de fornecedores externos de CMS de signage.
2. **Sincronização contínua** — Cada display verifica a programação a cada 30 segundos e atualiza sem intervenção manual.
3. **Monitoramento em tempo real** — Heartbeat operacional minuto a minuto, com métricas reais de cada display.
4. **Operação 24/7 estável** — Loop infinito sem memory leaks, validado para funcionamento contínuo.
5. **Multi-tenant nativo** — Isolamento entre operações distintas dentro da mesma plataforma.
6. **Rastreabilidade por evidências** — Logs completos de cada evento, agendamento e exibição.

### Seção 10 — Onde se aplica

- **Kicker**: `APLICAÇÕES`
- **Headline (H2)**: `Onde o Control Signage atua.`
- **Texto curto** (1-2 linhas): `A plataforma sustenta diferentes frentes da operação D.Buzz, do conteúdo institucional à malha publicitária.`

Lista de 4 itens (cards horizontais ou bullets visuais), cada um com ícone e descrição curta:

- **Rede TV D.Buzz** — Sustenta a operação dos Displays de LED verticais da rede própria da D.Buzz em pontos comerciais.
- **Operações privadas** — Suporta instalações em consultórios, clínicas, hospitais, escolas e ambientes corporativos.
- **Operações em órgãos públicos** — Atende contratações específicas no setor público com a mesma infraestrutura de gestão.
- **Anunciantes da malha D.Buzz** — Distribuição controlada de campanhas publicitárias na rede gerenciada.

### Seção 11 — Perguntas frequentes (FAQ)

- **Kicker**: `DÚVIDAS FREQUENTES`
- **Headline (H2)**: `O que costuma ser perguntado sobre o Control Signage.`

Componente de accordion (use o já existente no site, se houver). 7 perguntas:

1. **O Control Signage é vendido como SaaS para terceiros?**
   Não. É uma plataforma proprietária da D.Buzz, desenvolvida para sustentar a operação interna da empresa e de seus contratos. Eventuais licenciamentos para terceiros são tratados caso a caso.

2. **Como o sistema garante que o display sempre está atualizado?**
   Cada display consulta o backend a cada 30 segundos comparando a versão da programação local com a do servidor. Quando há mudança, baixa o novo conteúdo e atualiza a fila do player sem interromper a exibição em andamento.

3. **O que acontece se a internet do display cair?**
   O aplicativo mantém em cache local o conteúdo da programação atual e continua reproduzindo normalmente. Quando a conexão volta, ele sincroniza com o backend e atualiza se houver mudanças.

4. **Como é o monitoramento de cada display?**
   Cada display envia um heartbeat ao backend a cada 1 minuto reportando status (online/offline), conteúdo em exibição no momento, temperatura do equipamento e último sync. Esses dados ficam disponíveis no painel em tempo real e são armazenados como histórico.

5. **O sistema suporta qual tipo de conteúdo?**
   Vídeo (MP4, HLS, DASH) com suporte a 4K, e imagens estáticas. O player é baseado em ExoPlayer, padrão profissional para reprodução em Android TV.

6. **Como a propriedade intelectual do sistema é protegida?**
   Toda a stack — painel, backend e aplicativo — é de propriedade da D.Buzz, com documentação técnica completa e código próprio. O projeto é registrável no INPI como software.

7. **O Control Signage se integra com outros sistemas da D.Buzz?**
   Sim. Foi desenhado para conectar nativamente com os demais sistemas próprios em desenvolvimento — incluindo os coletores automatizados de conteúdo (notícias, clipes esportivos) — permitindo um pipeline operacional integrado de ponta a ponta.

### Seção 12 — CTA final

Bloco de fechamento da página, antes do rodapé.

- **Headline (H2)**: `Conheça o Control Signage de perto.`
- **Subtítulo**: `Agende uma apresentação com nossa equipe e veja como a plataforma sustenta a operação D.Buzz.`
- **Botão primário**: `Falar com nossa equipe`
- **Linha de apoio abaixo do botão** (texto pequeno): `Resposta em até 1 dia útil.`

---

## Requisitos técnicos

- **Responsivo**: mobile (≤ 380px), tablet, desktop. Testar com Chrome DevTools.
- **SEO**:
    - Title: `DBUZZ Control Signage — Plataforma proprietária de gestão de displays | D.Buzz`
    - Meta description: `Plataforma própria da D.Buzz para gestão de Displays de LED corporativos: agendamento, monitoramento em tempo real e sincronização automática, sob arquitetura proprietária.`
    - Open Graph com imagem (pode usar o diagrama)
    - URL sugerida: `/control-signage` ou `/produtos/control-signage`, seguindo o padrão de URLs do site
- **Acessibilidade**:
    - Um único `<h1>` (o headline do hero)
    - Hierarquia limpa de `h2`/`h3`
    - `alt` em todas as imagens
    - Contraste WCAG AA em textos
    - Foco visível em links e botões
    - Accordion da FAQ acessível por teclado
- **Performance**:
    - Imagens otimizadas (WebP/AVIF se o site usar)
    - Lazy loading em imagens fora do hero
    - Sem bibliotecas pesadas só pra esta página
    - Lighthouse: performance, acessibilidade, SEO e best practices ≥ 90 em desktop
- **Navegação**:
    - Adicionar link no menu principal (sob "Produtos" ou "Soluções", se houver — caso contrário, no nível principal)
    - Adicionar link no rodapé na seção de produtos/soluções (se existir)

## Tom e estilo

- **Profissional, firme, direto.** Sem emojis. Sem informalidades ("perfeitinho", "bora", "💜").
- **Sem promessas comerciais agressivas.** Não use "teste grátis", "experimente agora", "garanta já". Use CTAs institucionais.
- **Sem hipérboles.** Não use "revolucionário", "incrível", "único no mercado".
- **Voz da D.Buzz**: técnica mas legível, com peso institucional. Frases curtas. Verbos no presente.
- **Visual**: alinhado ao site institucional existente. Não introduza paleta nova nem fonte nova.

## O que NÃO fazer

- Não troque o framework do site
- Não introduza biblioteca de UI nova se já existe uma sendo usada
- Não invente tokens de cor/tipografia
- Não invente funcionalidades não listadas aqui
- Não use linguagem comercial de SaaS (este é um produto interno apresentado institucionalmente)
- Não publique direto em produção se o site usa branch de produção — abra como branch/PR ou avise antes

## Critérios de aceite

A entrega está pronta quando:

1. A página renderiza sem erros em build de produção
2. Aparece no menu principal e no rodapé (se aplicável)
3. Responsivo validado em mobile (≤ 380px), tablet e desktop
4. SEO básico está preenchido (title, description, OG)
5. Todas as 12 seções estão presentes, na ordem correta
6. O diagrama da arquitetura está presente na Seção 4 (ou marcado como placeholder com aviso)
7. CTAs apontam para a página/rota de contato existente do site
8. FAQ usa accordion acessível por teclado
9. Lighthouse desktop: ≥ 90 em todas as categorias principais

## Entrega final
    
Quando terminar, me mostre:

1. Caminho do arquivo da nova página e arquivos modificados
2. Comando para rodar o site localmente
3. Screenshots ou descrição do resultado em desktop e mobile
4. Resultados do Lighthouse
5. Pendências que dependem de mim (subir diagrama, mockups do painel, decidir cor exata do banner CTA, etc.)

---

**Fim do prompt para Claude Code.**
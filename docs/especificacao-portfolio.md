# Especificação Técnica do Portfólio — Spec-Driven Development

> **Documento de Especificação de Produto e Implementação (PRD / Tech Spec)**  
> **Propósito:** Guia normativo e detalhado para implementação automatizada via IA (Spec-Driven Development) do portfólio pessoal e landing page profissional de **Donizetti**.  
> **Alinhamento Acadêmico:** Checkpoint 6 — Vibecoding: Construindo uma landing page com IA (FIAP).

---

## 1. Visão Geral e Contexto do Projeto

### 1.1 Objetivo
Construir uma landing page de alta fidelidade visual, responsiva, com forte apelo tecnológico ("developer/tech look & feel") inspirada na interface de ferramentas de engenharia de software como o **Postman Dark**, **Firebase** e ecossistema de APIs/APPs modernos. O portfólio destaca a atuação de Donizetti na convergência entre **Automação de Processos (RPA)**, **Engenharia de Software**, **Backend/APIs** e **Inteligência Artificial**.

### 1.2 Stack Tecnológica Obrigatória (Opção A)
* **HTML5 Semântico:** Estrutura acessível com tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
* **Tailwind CSS:** Estilização utilitária moderna (via script CDN oficial Tailwind com extensão de tema personalizada).
* **JavaScript Moderno (Vanilla ES6+):** Lógica limpa e reativa sem dependências pesadas, garantindo execução imediata via navegador (`file://` ou servidor local) e deploy instantâneo na Vercel ou GitHub Pages.
* **Ícones:** Lucide Icons (via CDN/SVG inline) ou FontAwesome/Phosphor Icons para representação gráfica de tecnologias.

---

## 2. Perfil Profissional & Dados Biográficos

* **Nome:** Donizetti
* **Cargo Principal / Headline:** Analista de Automação RPA & Estudante de Engenharia de Software
* **Empresa Atual:** MV3 Tecnologia
* **Instituição de Ensino:** FIAP (Faculdade de Informática e Administração Paulista)
* **LinkedIn:** `https://www.linkedin.com/in/donizetti-dev`
* **Status Badge:** `● Disponível para projetos e conexões`
* **Bio / Resumo Executivo:**
  > "Analista de Automação RPA na MV3 Tecnologia e estudante de Engenharia de Software na FIAP, com foco no desenvolvimento de soluções que unem programação, automação de processos e integração de sistemas. Possui sólida experiência com Python, SQL, APIs REST, web scraping e ferramentas de RPA corporativas, além de vivência prática em desenvolvimento backend, IA generativa e bancos de dados relacionais."

---

## 3. Identidade Visual (IDV) e Sistema de Design

### 3.1 Paleta de Cores Oficial

A paleta é inspirada diretamente no tema escuro do **Postman Dark** e dashboards modernos de engenharia, garantindo alto contraste, estética futurista e conforto visual.

| Cor | Nome / Token | Função no Design | Justificativa e Aplicação |
|---|---|---|---|
| `#0B0F19` | `bg-primary` (Deep Navy) | Fundo principal da página | Cria profundidade cósmica/slate escura, remetendo a editores de código e IDEs. |
| `#161F30` | `surface-card` (Navy Slate) | Superfície de cards e modais | Contraste sutil com o fundo; delimita blocos de conteúdo com bordas em `rgba(255,255,255,0.08)`. |
| `#FF8A3D` | `accent-brand` (Postman Orange) | Cor de destaque primário | Botões de ação (CTA), abas ativas, tags de destaque, acentos visuais e links principais. |
| `#F1F5F9` | `text-primary` (Ice White) | Títulos e textos de alto contraste | Garante acessibilidade WCAG AAA contra fundos escuros. |
| `#94A3B8` | `text-secondary` (Muted Slate) | Textos secundários e metadados | Parágrafos explicativos, legendas, datas e descrições de projetos. |
| `#00E599` | `status-success` (Tech Green) | Indicadores de status e `200 OK` | Simula respostas bem-sucedidas de APIs e status de automações ativas. |
| `#38BDF8` | `accent-cyan` (Terminal Blue) | Tags técnicas e métodos `GET` | Destaque auxiliar para métodos HTTP e categorias de dados. |

### 3.2 Tipografia
* **Fonte Primária (Textos e Títulos):** `Inter` ou `Plus Jakarta Sans` (Google Fonts) — moderna, geométrica, legível em interfaces densas.
* **Fonte Técnica / Mono (Badges, código, requisições):** `JetBrains Mono` ou `Fira Code` — confere a estética de console de desenvolvedor.

### 3.3 Tom e Personalidade
* **Tom:** Técnico, sofisticado, confiável, focado em alta produtividade e engenharia robusta.
* **Personalidade:** Profissional moderno que entende as dores de processos manuais e projeta automações eficientes e escaláveis.

---

## 4. Referências Visuais Documentadas (Requisito Checkpoint 6 — Item 3.1)

1. **Postman Dark UI (`docs/referencias/image.png`):**
   * *O que aproveitar:* Estrutura de abas superiores, botões de ação com acento alaranjado, badges de métodos HTTP (`GET`, `POST`), tipografia mono em parâmetros de requisição e card interativo de terminal com status `200 OK`.
   * *Seção inspirada:* Hero Section (Card de Automação/API) e Seção de Projetos.
2. **Anjola Aina Portfolio (`https://www.anjolaaina.com/blog/portfolio`):**
   * *O que aproveitar:* Equilíbrio de espaçamento em layouts escuros, contraste refinado e narrativa fluida de trajetória profissional.
   * *Seção inspirada:* Seção Sobre Mim e Tipografia Global.
3. **Firebase Console (`https://firebase.google.com/`):**
   * *O que aproveitar:* Grid de soluções em cartões elegantes com ícones representativos, micro-gradientes e contraste entre âmbar/laranja e azul marinho escuro.
   * *Seção inspirada:* Seção de Habilidades e Competências Técnicas.
4. **Interface Tecnológica v0 (`https://v0.app/t/fo2go4Px5H8`):**
   * *O que aproveitar:* Grid de fundo sutil com pontos de luz (*radial-gradient glows*), badges de status dinâmicos e botões com bordas translúcidas luminosas.
   * *Seção inspirada:* Hero Section e Call-to-Action.
5. **Developer Console & System Logs:**
   * *O que aproveitar:* Linha do tempo visual no formato de histórico de execuções de robôs/pipelines, conectando eventos e conquistas.
   * *Seção inspirada:* Seção de Experiência e Eventos.

---

## 5. Arquitetura da Informação e Seções da Landing Page

### 5.1 Navbar (Header Fixo / Blur Glassmorphism)
* **Logo:** `<Donizetti.dev />` com acento em `#FF8A3D`.
* **Links de Âncora:** `#sobre`, `#skills`, `#projetos`, `#experiencia`, `#contato`.
* **Ações:** Botão para o LinkedIn e link direto para o repositório GitHub.

### 5.2 Hero Section (Apresentação Tech & Card Interativo Postman)
* **Lado Esquerdo (Copywriting):**
  * Badge superior: `● Status: Operacional na MV3 Tecnologia | FIAP 2026`.
  * Título: "Construindo pontes entre **Automação RPA**, **Backend** e **Inteligência Artificial**."
  * Subtítulo: "Desenvolvo robôs resilientes, APIs robustas e integrações inteligentes que transformam processos manuais em operações eficientes."
  * CTAs: Botão primário `[ Ver Projetos ]` (fundo `#FF8A3D`) e Botão secundário `[ Conectar no LinkedIn ]` (borda translúcida).
* **Lado Direito (Widget "Postman API Preview"):**
  * Simulação de uma janela do Postman com abas (`GET /api/v1/engineer/donizetti`), status `200 OK (42ms)`, headers e resposta JSON formatada com as propriedades principais:
    ```json
    {
      "developer": "Donizetti",
      "role": "RPA Automation Analyst",
      "education": "Software Engineering @ FIAP",
      "focus": ["RPA", "Python", "REST APIs", "AI Automation"],
      "status": "Ready for new challenges"
    }
    ```

### 5.3 Seção "Sobre Mim"
* Apresentação da carreira: atuação na **MV3 Tecnologia** desenvolvendo e sustentando robôs para clientes corporativos.
* Conexão com os estudos na **FIAP**: aplicação dos conceitos de engenharia de software, modelagem de dados e inteligência artificial no dia a dia.
* Métricas de destaque / Estatísticas em cards:
  * **+5 Projetos Chave** implementados.
  * **Dezenas de Rotinas Automatizadas** em produção.
  * **100% Foco em Eficiência e Resiliência**.

### 5.4 Seção de Habilidades & Stack Tecnológica
Apresentação em 4 pilares tecnológicos, com ícones e tags:

1. **Automação & Web Scraping:**
   * Ferramentas: Selenium, Playwright, AutoMate Desktop/Enterprise, Power Automate Desktop, Web Scraping avançado, pipelines de automação RPA.
2. **Backend & APIs:**
   * Ferramentas: Python, FastAPI, Flask, Arquitetura RESTful, Pydantic, Integrações de microsserviços e consumo de webhooks.
3. **Bancos de Dados & Processamento:**
   * Ferramentas: Microsoft SQL Server, SSMS, SQLite, Modelagem Relacional, Pandas, PDFPlumber, OpenPyXL.
4. **Inteligência Artificial & Web:**
   * Ferramentas: Google Gemini API, IA Generativa integrada a documentos, React, JavaScript ES6+, HTML5/Tailwind CSS, Docker, Git/GitHub.

### 5.5 Seção de Projetos em Destaque (Cards com Estilo Tech / API)
Filtro interativo no topo: `[ Todos ]` `[ RPA & Automação ]` `[ APIs & Backend ]` `[ Inteligência Artificial ]`.

1. **News Scraper API**
   * *Badge de Método:* `GET /api/v1/news`
   * *Categoria:* Backend & Web Scraping
   * *Descrição:* API de alta performance desenvolvida para raspagem automatizada, persistência relacional e entrega estruturada de notícias do portal G1 com paginação e busca por títulos.
   * *Stack:* Python, Flask, Selenium, SQL Server, pyodbc, REST API.
2. **Trending Movies**
   * *Badge de Método:* `GET /api/v1/movies/trending`
   * *Categoria:* Frontend & Integração
   * *Descrição:* Plataforma web responsiva para exibição de tendências cinematográficas consumindo a API do TMDB em tempo real, construída sob conceitos de Spec-Driven Development.
   * *Stack:* React, JavaScript, REST API, TMDB, Vercel.
3. **Assistente de IA com Gemini**
   * *Badge de Método:* `POST /api/v1/ai/query`
   * *Categoria:* Inteligência Artificial
   * *Descrição:* Aplicação RAG/assistente inteligente para interpretação e resposta contextualizada sobre documentos e regulamentos institucionais usando a API do Google Gemini.
   * *Stack:* Python, FastAPI, Google Gemini API, Extração de Documentos.
4. **InfraWatch — FIAP Global Solution**
   * *Badge de Método:* `POST /api/v1/monitor/telemetry`
   * *Categoria:* Engenharia de Dados & IoT
   * *Descrição:* Plataforma de monitoramento geoambiental e mitigação de catástrofes, agregando telemetria de sensores de campo e cruzamento com dados orbitais.
   * *Stack:* Python, Processamento de Dados, APIs de Sensores.
5. **Automações RPA Corporativas — MV3 Tecnologia**
   * *Badge de Método:* `RUN /rpa/pipeline/process`
   * *Categoria:* RPA & Automação
   * *Descrição:* Desenvolvimento e sustentação contínua de robôs para grandes operações corporativas: extração em portais governamentais, validação contábil, reconciliação em SQL Server e notificações.
   * *Stack:* Python, AutoMate Enterprise, Power Automate, Selenium, SQL Server, PowerShell.

### 5.6 Seção de Trajetória, Formação e Eventos
Apresentada como uma **Linha do Tempo (Execution Log)**:
* **2026 — Presente:** Analista de Automação RPA | MV3 Tecnologia
* **2024 — Presente:** Graduação em Engenharia de Software | FIAP
* **Eventos & Conferências:**
  * Encontro Especial pós-**Intelligent Automation Summit Rio de Janeiro 2026**
  * **Connect_Summit** — FIAP
  * **Semana Carreira Tech** — FIAP

### 5.7 Seção de Contato & Footer
* Chamada direta: "Vamos construir soluções inteligentes juntos?"
* Links diretos para LinkedIn, GitHub e envio de email.
* Terminal Footer: "Compiled with precision • Designed for Donizetti • FIAP Checkpoint 6".

---

## 6. Requisitos de Interatividade JavaScript (Spec-Driven UX)

1. **Filtro de Projetos:** Clique em botões de categoria filtra os cards instantaneamente com transição suave (`opacity` e `transform`).
2. **Console Interativo Postman (Hero):** Botão "Send" que simula envio de requisição, exibe um breve loader de 300ms e apresenta o JSON com animação de digitação ou fade-in.
3. **Cópia Rápida de Endpoint / Email:** Botão de um clique para copiar endereço de email ou endpoints dos projetos com feedback visual ("Copiado!").
4. **Smooth Scroll:** Navegação suave entre seções com destaque visual do menu ativo.

---

## 7. Estrutura de Arquivos Recomendada para o Projeto

```text
Portifolio-Pessoal/
├── docs/
│   ├── Checkpoint 6.pdf              # Requisitos originais da FIAP
│   ├── especificacao-portfolio.md    # Este documento normativo (Spec-Driven)
│   └── referencias/
│       └── image.png                 # Referência visual do Postman Dark
├── assets/
│   ├── css/
│   │   └── style.css                 # Customizações e animações extras
│   ├── js/
│   │   └── main.js                   # Lógica dos filtros, simulação Postman e interações
│   └── img/                          # Ícones e imagens auxiliares
├── index.html                        # Landing page completa e semântica
└── README.md                         # Documentação de entrega do Checkpoint 6
```

---

## 8. Guia para Documentação do Checkpoint 6 (Vibecoding)

Para garantir nota máxima nos critérios de avaliação (Qualidade dos Prompts, Análise Crítica e Registro de Correções), o agente ou desenvolvedor deverá registrar:

### 8.1 Modelo da Ficha de Correções (Seção 3.4 do Checkpoint)
| Campo | Exemplo de Registro |
|---|---|
| **Problema** | "O layout dos cards de projetos quebrou em telas mobile menores que 375px." |
| **Prompt de Correção** | "Ajuste o grid dos cards de projetos para usar `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` e garanta que as tags de tecnologia façam wrap com `flex-wrap`." |
| **Resultado** | "Resolvido totalmente: os cards agora empilham perfeitamente e o texto não transborda." |
| **Aprendizado** | "No prompt inicial de criação do grid, especificar explicitamente os breakpoints de responsividade mobile e desktop." |

---

## 9. Critérios de Aceite (Spec-Driven Verification Checklist)

- [ ] A landing page adota rigorosamente a paleta de cores especificada (`#0B0F19`, `#161F30`, `#FF8A3D`, `#F1F5F9`, `#94A3B8`).
- [ ] O visual transmite a atmosfera "Postman Dark / Tech Console".
- [ ] Todos os 5 projetos do Donizetti estão presentes com suas descrições e tecnologias fiéis.
- [ ] Todas as 4 categorias de skills estão mapeadas de forma legível e organizada.
- [ ] Os eventos (FIAP Connect_Summit, Semana Carreira Tech, pós-Intelligent Automation Summit RJ 2026) estão na linha do tempo.
- [ ] O código é 100% funcional localmente via navegador e pronto para deploy na Vercel ou GitHub Pages.
- [ ] A especificação serve de guia inequívoco para qualquer outro bot ou prompt de engenharia reversa.


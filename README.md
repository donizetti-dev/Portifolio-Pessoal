# Portfólio Profissional — Donizetti

> **Landing Page Profissional & Portfólio Pessoal (Spec-Driven Development)**  
> **Desenvolvido para:** Donizetti — Analista de Automação RPA & Estudante de Engenharia de Software  
> **Alinhamento Acadêmico:** FIAP — Checkpoint 6: *Vibecoding — Construindo uma landing page com IA*  
> **Atuação:** MV3 Tecnologia & FIAP (2024–2026)

---

## 1. Visão Geral do Projeto

Este projeto consiste em uma landing page de alta fidelidade visual e responsiva, inspirada na interface de ferramentas líderes de engenharia de software como o **Postman Dark**, **Firebase Console** e ecossistema moderno de APIs. 

O portfólio destaca a atuação de **Donizetti** na convergência entre:
- **Automação Robótica de Processos (RPA)** de nível corporativo;
- **Engenharia de Software & Arquitetura de APIs Backend**;
- **Processamento de Dados & Reconciliação em SQL Server**;
- **Inteligência Artificial Generativa (Google Gemini API & RAG)**.

---

## 2. Stack Tecnológica & Arquitetura

O projeto foi construído seguindo a **Opção A** da especificação técnica, priorizando performance máxima, zero dependências complexas de compilação e deploy instantâneo:

* **HTML5 Semântico:** Estrutura limpa utilizando `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
* **Tailwind CSS (CDN com extensão de tema):** Estilização utilitária moderna com mapeamento estrito dos tokens de design.
* **JavaScript Moderno (Vanilla ES6+):** Lógica reativa sem frameworks pesados, garantindo execução imediata via navegador (`file://` ou servidor local).
* **Lucide Icons:** Conjunto de ícones vetoriais modernos.
* **Tipografia:** Google Fonts (`Inter` para interface e `JetBrains Mono` para termos técnicos e consoles).

---

## 3. Identidade Visual (IDV) e Sistema de Design

A paleta de cores é inspirada no ecossistema **Postman Dark**, unindo estética futurista, alto contraste (WCAG AAA) e ergonomia visual:

| Token | Hex | Função no Design |
|---|---|---|
| `bg-primary` | `#0B0F19` | Fundo principal da página (Deep Navy) |
| `surface-card` | `#161F30` | Superfície de cartões, modais e containers |
| `accent-brand` | `#FF8A3D` | Destaque primário (Postman Orange), CTAs e abas ativas |
| `text-primary` | `#F1F5F9` | Títulos e elementos de alto contraste (Ice White) |
| `text-secondary` | `#94A3B8` | Textos explicativos e metadados (Muted Slate) |
| `status-success` | `#00E599` | Badges de status `200 OK` e automações ativas |
| `accent-cyan` | `#38BDF8` | Métodos `GET`, queries e acentos tecnológicos |

---

## 4. Recursos e Interatividades Implementadas

1. **Console Interativo Postman (Hero Section):**
   - Janela estilizada simulando o Postman Dark.
   - Botão interativo **"Send"** que executa simulação de requisição HTTP (`GET /api/v1/engineer/donizetti`), com spinner de carregamento de ~300ms, badges de latência realistas (ex.: `42 ms`) e status code `200 OK`.
   - Navegação entre abas: **Body** (JSON com syntax highlighting), **Headers (6)** e **Params**.
   - Botão de 1 clique para copiar o payload JSON de resposta.

2. **Filtro Reativo de Projetos:**
   - Filtros instantâneos: `[ Todos ]`, `[ RPA & Automação ]`, `[ APIs & Backend ]` e `[ Inteligência Artificial ]`.
   - Transição suave via CSS e manipulação de classes sem recarregar a página.

3. **Cards de Projeto com Estética de API:**
   - Badges de método HTTP: `GET`, `POST` e `RUN`.
   - Botão de cópia rápida do endpoint/comando com feedback visual em tooltip e toast.
   - Listagem completa dos 5 projetos com stack detalhada:
     1. *News Scraper API* (`GET /api/v1/news`)
     2. *Trending Movies* (`GET /api/v1/movies/trending`)
     3. *Assistente de IA com Gemini* (`POST /api/v1/ai/query`)
     4. *InfraWatch — FIAP Global Solution* (`POST /api/v1/monitor/telemetry`)
     5. *Automações RPA Corporativas — MV3 Tecnologia* (`RUN /rpa/pipeline/process`)

4. **Linha do Tempo (Execution Log):**
   - Estrutura de logs de sistema registrando a atuação na **MV3 Tecnologia**, a formação em Engenharia de Software na **FIAP** e conferências técnicas chave (*pós-Intelligent Automation Summit RJ 2026*, *Connect_Summit* e *Semana Carreira Tech*).

5. **Ações de Cópia Rápida com Toast:**
   - Cópia com 1 clique do e-mail de contato e dos endpoints dos projetos, exibindo toast de confirmação.

---

## 5. Estrutura do Repositório

```text
Portifolio-Pessoal/
├── docs/
│   ├── Checkpoint 6.pdf              # Requisitos avaliativos da FIAP
│   ├── especificacao-portfolio.md    # Especificação normativa (Spec-Driven)
│   └── referencias/
│       └── image.png                 # Referência visual do Postman Dark
├── assets/
│   ├── css/
│   │   └── style.css                 # Folha de estilos customizada & animações
│   ├── js/
│   │   └── main.js                   # Lógica reativa, console Postman e filtros
│   └── img/                          # Assets auxiliares
├── index.html                        # Landing page semântica e responsiva
└── README.md                         # Documentação oficial de entrega
```

---

## 6. Registro de Vibecoding & Ficha de Correções (Checkpoint 6 — FIAP)

Conforme os critérios de avaliação de **Qualidade dos Prompts, Análise Crítica e Registro de Correções**, abaixo consta a ficha de iterações do desenvolvimento assistido por IA:

### Registro 1: Estrutura do Grid e Responsividade Mobile
* **Problema:** Em telas ultra-compactas (largura inferior a 375px), o alinhamento das abas do Postman e dos badges de métodos HTTP corria o risco de causar overflow horizontal.
* **Prompt de Correção:** *"Refatore o widget do Postman e os cards de projetos para usar `flex-wrap`, reduza o padding lateral em mobile (`px-3 sm:px-6`) e adicione truncamento controlado (`truncate max-w-[160px] sm:max-w-xs`) nas abas ativas."*
* **Resultado:** O layout adapta-se perfeitamente de 320px até resoluções ultrawide sem quebras ou barras de rolagem indesejadas.
* **Aprendizado:** No desenvolvimento frontend guiado por spec, é mandatório especificar restrições de truncamento e contenção de grid nas regras iniciais de CSS.

### Registro 2: Simulação de Latência e Feedback Sensorial no Postman
* **Problema:** A resposta do console do Postman aparecia instantaneamente (0ms), perdendo a oportunidade de simular o comportamento de uma requisição real de API.
* **Prompt de Correção:** *"Adicione ao clique do botão 'Send' um estado de loading com spinner svg durante 300ms, gere uma variação orgânica de latência (38ms a 52ms) e anime o status badge com uma pulsação sutil."*
* **Resultado:** A experiência do usuário tornou-se imersiva e transmite fidelidade total a uma ferramenta técnica real.
* **Aprendizado:** Microinterações temporizadas com spinners aumentam significativamente a percepção de qualidade técnica e autenticidade da interface.

### Registro 3: Acessibilidade e Semântica nos Filtros
* **Problema:** Filtros baseados em links `<a>` sem atributo `href` válido comprometiam a navegabilidade por teclado e leitores de tela.
* **Prompt de Correção:** *"Converta os seletores de categoria de projetos para tags semânticas `<button type='button'>`, adicionando atributos de dados explícitos `data-filter-btn` e controle de foco visível."*
* **Resultado:** Conformidade com padrões de acessibilidade W3C e navegação facilitada por teclado (`Tab` e `Enter`).
* **Aprendizado:** Elementos com funções de ação dentro da mesma página devem ser sempre implementados como `<button>`, reservando tags `<a>` para navegação entre seções ou links externos.

---

## 7. Como Executar o Projeto Localmente

1. **Via Navegador Direto:**
   - Dê um duplo-clique no arquivo `index.html` ou abra-o em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

2. **Via Servidor Local (Live Server / Python):**
   ```bash
   # Utilizando Python 3:
   python -m http.server 3000
   
   # Em seguida acesse no seu navegador:
   http://localhost:3000
   ```

3. **Deploy:**
   - O projeto está 100% pronto para deploy na **Vercel**, **Netlify** ou **GitHub Pages** (basta subir o repositório no GitHub e ativar o GitHub Pages na raiz).

---

## 8. Checklist de Conformidade com a Especificação

- [x] Paleta de cores estritamente aplicada (`#0B0F19`, `#161F30`, `#FF8A3D`, `#F1F5F9`, `#94A3B8`, `#00E599`, `#38BDF8`).
- [x] Identidade visual "Postman Dark & Tech Console" preservada em todos os componentes.
- [x] Todos os 5 projetos de Donizetti documentados com descrições fiéis e tags de stack.
- [x] Os 4 pilares de habilidades mapeados de forma intuitiva com ícones.
- [x] Linha do tempo de execução com os eventos e conferências chave.
- [x] Funcionalidade de cópia rápida com toast e console interativo com simulação de 300ms.
- [x] Código 100% autônomo, acessível e responsivo.
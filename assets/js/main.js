/**
 * Portfólio Donizetti — Spec-Driven Development
 * Lógica Interativa Vanilla ES6+
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initNavbar();
  initPostmanWidget();
  initProjectsFilter();
  initCopyActions();
  initToast();
});

/* ==========================================================================
   1. Navegação & Menu Mobile (Smooth Scroll & Active Link Spy)
   ========================================================================== */
function initNavbar() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Toggle do menu mobile
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Fechar ao clicar em qualquer link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scrollspy via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-[#FF8A3D]', 'font-semibold');
            link.classList.remove('text-[#94A3B8]');
          } else {
            link.classList.remove('text-[#FF8A3D]', 'font-semibold');
            link.classList.add('text-[#94A3B8]');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   2. Console Interativo do Postman (Hero Section)
   ========================================================================== */
function initPostmanWidget() {
  const sendBtn = document.getElementById('postman-send-btn');
  const statusBadge = document.getElementById('postman-status-badge');
  const timeBadge = document.getElementById('postman-time-badge');
  const sizeBadge = document.getElementById('postman-size-badge');
  const codeContainer = document.getElementById('postman-json-output');
  const copyJsonBtn = document.getElementById('postman-copy-btn');
  const tabs = document.querySelectorAll('[data-postman-tab]');
  const panels = document.querySelectorAll('[data-postman-panel]');

  const defaultPayload = {
    developer: "Donizetti",
    role: "RPA Automation Analyst",
    education: "Software Engineering @ FIAP",
    focus: [
      "RPA",
      "Python",
      "REST APIs",
      "AI Automation"
    ],
    status: "Ready for new challenges"
  };

  function renderFormattedJson(obj) {
    const raw = JSON.stringify(obj, null, 2);
    // Realce de sintaxe manual simples para evitar dependências externas
    return raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'json-key';
          } else {
            cls = 'json-string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'json-boolean';
        } else if (/null/.test(match)) {
          cls = 'json-boolean';
        }
        return `<span class="${cls}">${match}</span>`;
      });
  }

  // Render inicial
  if (codeContainer) {
    codeContainer.innerHTML = renderFormattedJson(defaultPayload);
  }

  // Abas do Postman (Body, Headers, Params)
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.getAttribute('data-postman-tab');
      tabs.forEach(t => {
        t.classList.remove('postman-tab-active', 'text-white');
        t.classList.add('postman-tab-inactive');
      });
      tab.classList.add('postman-tab-active', 'text-white');
      tab.classList.remove('postman-tab-inactive');

      panels.forEach(p => {
        if (p.getAttribute('data-postman-panel') === targetPanel) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });

  // Ação de envio ("Send") com simulação de latência de 300ms
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      sendBtn.disabled = true;
      const originalText = sendBtn.innerHTML;
      sendBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending...
      `;

      if (codeContainer) {
        codeContainer.style.opacity = '0.35';
      }

      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = originalText;

        // Atualiza badges com números dinâmicos e realistas
        const randomMs = Math.floor(Math.random() * 15) + 38; // 38ms - 52ms
        if (timeBadge) timeBadge.textContent = `${randomMs} ms`;
        if (statusBadge) {
          statusBadge.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-[#00E599] inline-block mr-1.5 animate-pulse"></span>
            200 OK
          `;
        }

        if (codeContainer) {
          codeContainer.style.opacity = '1';
          codeContainer.innerHTML = renderFormattedJson(defaultPayload);
        }

        showToast('Requisição executada: 200 OK');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 320);
    });
  }

  // Copiar JSON da resposta
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(JSON.stringify(defaultPayload, null, 2))
        .then(() => {
          showToast('JSON copiado para a área de transferência!');
        })
        .catch(() => {
          showToast('Erro ao copiar JSON.');
        });
    });
  }
}

/* ==========================================================================
   3. Filtro Interativo de Projetos
   ========================================================================== */
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const projectCards = document.querySelectorAll('[data-project-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-filter-btn');

      // Atualiza botões
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-[#FF8A3D]', 'text-white', 'shadow-md', 'shadow-[#FF8A3D]/20');
        btn.classList.add('bg-[#161F30]', 'text-[#94A3B8]', 'border-white/10');
      });

      button.classList.add('bg-[#FF8A3D]', 'text-white', 'shadow-md', 'shadow-[#FF8A3D]/20');
      button.classList.remove('bg-[#161F30]', 'text-[#94A3B8]', 'border-white/10');

      // Filtra os cards
      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-project-category').split(',');

        if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
          card.classList.remove('hidden-card');
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px) scale(0.96)';
          setTimeout(() => {
            card.classList.add('hidden-card');
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. Ações de Cópia Rápida (Endpoints e Email)
   ========================================================================== */
function initCopyActions() {
  // Copiar Endpoints nos cards de projeto
  const copyEndpointBtns = document.querySelectorAll('[data-copy-endpoint]');
  copyEndpointBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const endpoint = btn.getAttribute('data-copy-endpoint');
      navigator.clipboard.writeText(endpoint)
        .then(() => {
          const originalTitle = btn.getAttribute('title') || '';
          btn.setAttribute('title', 'Copiado!');
          showToast(`Endpoint copiado: ${endpoint}`);
        })
        .catch(() => {
          showToast('Não foi possível copiar o endpoint.');
        });
    });
  });

  // Copiar Email no Contato
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'contato@donizetti.dev';
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('E-mail copiado para a área de transferência!');
        })
        .catch(() => {
          showToast('Não foi possível copiar o e-mail.');
        });
    });
  }
}

/* ==========================================================================
   5. Sistema de Notificação Toast
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!toast || !toastMessage) return;

  clearTimeout(toastTimeout);
  toastMessage.textContent = message;

  toast.classList.remove('toast-hide');
  toast.classList.add('toast-show');

  toastTimeout = setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
  }, 2800);
}

// Tornar disponível globalmente se necessário
window.showToast = showToast;


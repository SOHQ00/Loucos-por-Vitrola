/**
 * Loucos por Vitrola — JavaScript Principal
 * Funções globais, navegação mobile, lightbox da galeria e notificações toast.
 */

// Notificações Toast
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "alert");
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Inicialização Geral da Página
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initHeaderScroll();
  initActiveNavLink();
  initGalleryLightbox();
  updateCurrentYear();
});

// Menu Mobile
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const drawer = document.getElementById("mobileMenuDrawer");
  const overlay = document.getElementById("mobileMenuOverlay");
  const closeBtn = document.getElementById("mobileMenuClose");

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add("active");
    if (overlay) overlay.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    drawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // Fecha ao clicar em um link do menu
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// Efeito de scroll no Header
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("shadow-lg", "border-b-[var(--color-primary-light)]/40");
    } else {
      header.classList.remove("shadow-lg", "border-b-[var(--color-primary-light)]/40");
    }
  }, { passive: true });
}

// Marca link ativo na navegação
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  const navLinks = document.querySelectorAll(".site-nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pageName || (pageName === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// Lightbox da Galeria de Imagens
let currentGalleryImages = [];
let currentLightboxIndex = 0;

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll("[data-lightbox-src]");
  if (galleryItems.length === 0) return;

  currentGalleryImages = Array.from(galleryItems).map(item => ({
    src: item.getAttribute("data-lightbox-src"),
    title: item.getAttribute("data-lightbox-title") || "Foto da Oficina Loucos por Vitrola",
    desc: item.getAttribute("data-lightbox-desc") || ""
  }));

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  if (!currentGalleryImages[index]) return;
  currentLightboxIndex = index;

  let modal = document.getElementById("galleryLightboxModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "galleryLightboxModal";
    modal.className = "modal-overlay active";
    modal.innerHTML = `
      <div class="relative max-w-4xl w-full mx-4 flex flex-col items-center" onclick="event.stopPropagation()">
        <!-- Botão Fechar -->
        <button type="button" onclick="closeLightbox()" class="absolute -top-12 right-0 text-white hover:text-[var(--color-gold-vintage)] p-2" aria-label="Fechar galeria">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Imagem e Legenda -->
        <div class="w-full bg-black/90 rounded border border-[var(--color-border)] overflow-hidden shadow-2xl">
          <div class="relative flex items-center justify-center bg-black min-h-[300px] max-h-[70vh]">
            <img id="lightboxImage" src="" alt="" class="max-h-[70vh] w-auto max-w-full object-contain" />
            
            <!-- Controles Anterior / Próximo -->
            <button type="button" onclick="navigateLightbox(-1)" class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 transition-colors" aria-label="Foto anterior">
              ❮
            </button>
            <button type="button" onclick="navigateLightbox(1)" class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 transition-colors" aria-label="Próxima foto">
              ❯
            </button>
          </div>

          <div class="p-4 bg-[var(--color-black-elevated)] border-t border-[var(--color-border)] flex items-center justify-between">
            <div>
              <h4 id="lightboxTitle" class="text-sm font-serif font-bold text-[var(--color-gold-vintage)]"></h4>
              <p id="lightboxDesc" class="text-xs text-[var(--color-text-muted)] mt-0.5"></p>
            </div>
            <span id="lightboxCounter" class="text-xs text-[var(--color-text-muted)] font-mono"></span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });

    window.addEventListener("keydown", handleLightboxKeys);
  } else {
    modal.classList.add("active");
  }

  updateLightboxView();
  document.body.style.overflow = "hidden";
}

function updateLightboxView() {
  const item = currentGalleryImages[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightboxImage");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  const counterEl = document.getElementById("lightboxCounter");

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.desc;
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentGalleryImages.length}`;
  }
}

function navigateLightbox(step) {
  currentLightboxIndex += step;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentGalleryImages.length - 1;
  if (currentLightboxIndex >= currentGalleryImages.length) currentLightboxIndex = 0;
  updateLightboxView();
}

function closeLightbox() {
  const modal = document.getElementById("galleryLightboxModal");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

function handleLightboxKeys(e) {
  const modal = document.getElementById("galleryLightboxModal");
  if (!modal || !modal.classList.contains("active")) return;

  if (e.key === "ArrowLeft") navigateLightbox(-1);
  if (e.key === "ArrowRight") navigateLightbox(1);
  if (e.key === "Escape") closeLightbox();
}

function updateCurrentYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
}

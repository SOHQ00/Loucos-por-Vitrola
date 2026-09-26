/**
 * Loucos por Vitrola — Sistema de Carrinho & Integração WhatsApp
 * Persistência via localStorage e envio direto para atendimento oficial.
 */

const CART_STORAGE_KEY = "loucosPorVitrolaCart";
const WHATSAPP_PHONE = "5511996176660"; // Número oficial: (11) 99617-6660

class VintageCart {
  constructor() {
    this.items = this.load();
    this.initDOM();
    this.updateUI();
  }

  load() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Erro ao carregar carrinho:", err);
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (err) {
      console.error("Erro ao salvar carrinho:", err);
    }
    this.updateUI();
  }

  addItem(productId) {
    const product = typeof getProductById === "function" ? getProductById(productId) : null;
    if (!product || !product.available) {
      showToast("Este equipamento não está disponível no momento.", "error");
      return;
    }

    const existingIndex = this.items.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
      // Como a maioria dos toca-discos vintage são peças únicas restauradas:
      if (product.stock && this.items[existingIndex].quantity >= product.stock) {
        showToast("Este toca-discos é uma peça única exclusiva de acervo já presente no carrinho.", "warning");
        this.openDrawer();
        return;
      }
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1,
        stock: product.stock || 1
      });
    }

    this.save();
    showToast(`✓ "${product.name}" adicionado ao carrinho!`, "success");
    this.openDrawer();
  }

  removeItem(productId) {
    const item = this.items.find(i => i.id === Number(productId));
    const itemName = item ? item.name : "Item";
    this.items = this.items.filter(i => i.id !== Number(productId));
    this.save();
    showToast(`"${itemName}" removido do carrinho.`, "info");
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(i => i.id === Number(productId));
    if (!item) return;

    const newQty = item.quantity + delta;

    if (newQty <= 0) {
      this.removeItem(productId);
      return;
    }

    if (item.stock && newQty > item.stock) {
      showToast("Limite de estoque atingido para esta peça vintage única.", "warning");
      return;
    }

    item.quantity = newQty;
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  generateWhatsAppMessage() {
    if (this.items.length === 0) return "";

    let message = "Olá, André! Sou visitante do site *Loucos por Vitrola* e tenho interesse no(s) seguinte(s) equipamento(s):\n\n";

    this.items.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      const formattedSubtotal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(subtotal);
      const formattedUnit = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price);
      
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   • Quantidade: ${item.quantity} un.\n`;
      message += `   • Valor unitário: ${formattedUnit}\n`;
      message += `   • Subtotal: ${formattedSubtotal}\n\n`;
    });

    const totalFormatted = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(this.getTotalPrice());
    message += `*TOTAL DO PEDIDO: ${totalFormatted}*\n\n`;
    message += "Gostaria de confirmar a disponibilidade e combinar as condições de pagamento e retirada no ABC Paulista ou envio com embalagem reforçada para o meu CEP.\n\n";
    message += "Aguardo seu retorno. Muito obrigado!";

    return message;
  }

  sendToWhatsApp() {
    if (this.items.length === 0) {
      showToast("Seu carrinho está vazio.", "warning");
      return;
    }

    const message = this.generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    try {
      const opened = window.open(whatsappUrl, "_blank");
      if (!opened) {
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      console.warn("Bloqueador de popup ativo, oferecendo cópia de mensagem:", e);
      this.promptCopyMessage(message);
    }
  }

  promptCopyMessage(message) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(message).then(() => {
        alert("A mensagem do seu pedido foi copiada para a área de transferência! Abra o WhatsApp (11) 99617-6660 e cole a mensagem.");
      });
    } else {
      alert("Envie mensagem para o WhatsApp (11) 99617-6660 para concluir seu pedido.");
    }
  }

  initDOM() {
    // Cria o Drawer do Carrinho dinamicamente no body caso não exista
    if (!document.getElementById("cartDrawer")) {
      const drawerHTML = `
        <div class="cart-drawer-overlay" id="cartOverlay"></div>
        <aside class="cart-drawer" id="cartDrawer" aria-label="Carrinho de Compras" aria-hidden="true">
          <div class="cart-header">
            <div class="flex items-center gap-2">
              <span class="text-xl">🛒</span>
              <h2 class="text-lg font-serif font-bold text-[var(--color-text-main)]">Seu Carrinho</h2>
              <span id="cartDrawerCount" class="text-xs bg-[var(--color-primary-light)] text-white px-2 py-0.5 rounded-full font-bold">0</span>
            </div>
            <button type="button" id="cartCloseBtn" class="text-[var(--color-text-muted)] hover:text-white p-1 rounded transition-colors" aria-label="Fechar carrinho">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="cart-body" id="cartItemsList">
            <!-- Lista de itens renderizada dinamicamente -->
          </div>

          <div class="cart-footer" id="cartFooter">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-[var(--color-text-muted)]">Total Estimado</span>
              <span id="cartTotalPrice" class="text-2xl font-serif font-bold text-[var(--color-gold-vintage)]">R$ 0,00</span>
            </div>
            <p class="text-[11px] text-[var(--color-text-muted)] mb-4">
              Equipamentos autênticos revisados. O pedido é enviado diretamente para o WhatsApp de André Luis Denani para cálculo de frete e confirmação.
            </p>
            <div class="flex flex-col gap-2">
              <button type="button" id="cartWhatsAppBtn" class="btn btn-whatsapp w-full py-3.5 flex items-center justify-center gap-2 shadow-lg">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Enviar Pedido via WhatsApp
              </button>
              <button type="button" id="cartContinueBtn" class="btn btn-outline text-xs py-2 w-full">
                Continuar Navegando
              </button>
            </div>
          </div>
        </aside>
      `;

      document.body.insertAdjacentHTML("beforeend", drawerHTML);

      // Listeners dos controles do Drawer
      document.getElementById("cartCloseBtn").addEventListener("click", () => this.closeDrawer());
      document.getElementById("cartOverlay").addEventListener("click", () => this.closeDrawer());
      document.getElementById("cartContinueBtn").addEventListener("click", () => this.closeDrawer());
      document.getElementById("cartWhatsAppBtn").addEventListener("click", () => this.sendToWhatsApp());
    }

    // Listener para tecla ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeDrawer();
      }
    });
  }

  openDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
      drawer.classList.add("active");
      overlay.classList.add("active");
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  closeDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  updateUI() {
    const totalCount = this.getTotalCount();
    const totalPrice = this.getTotalPrice();

    // Atualiza contadores no Header (desktop e mobile)
    const headerBadges = document.querySelectorAll(".cart-badge");
    headerBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? "inline-flex" : "none";
    });

    const drawerCount = document.getElementById("cartDrawerCount");
    if (drawerCount) drawerCount.textContent = totalCount;

    const totalEl = document.getElementById("cartTotalPrice");
    if (totalEl) {
      totalEl.textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totalPrice);
    }

    // Renderiza itens
    const itemsList = document.getElementById("cartItemsList");
    const footerEl = document.getElementById("cartFooter");

    if (!itemsList) return;

    if (this.items.length === 0) {
      itemsList.innerHTML = `
        <div class="py-16 text-center flex flex-col items-center justify-center">
          <div class="w-16 h-16 rounded-full bg-black/40 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-4">
            📻
          </div>
          <h3 class="text-base font-serif text-[var(--color-text-main)] mb-1">Seu carrinho está vazio</h3>
          <p class="text-xs text-[var(--color-text-muted)] max-w-[240px] mb-6">
            Encontre o toca-discos dos seus sonhos totalmente revisado para começar a ouvir seus vinis.
          </p>
          <a href="produtos.html" class="btn btn-primary text-xs py-2 px-5" onclick="vintageCart.closeDrawer()">
            Ver Catálogo de Vitrolas
          </a>
        </div>
      `;
      if (footerEl) footerEl.style.opacity = "0.5";
      const waBtn = document.getElementById("cartWhatsAppBtn");
      if (waBtn) waBtn.classList.add("btn-disabled");
    } else {
      if (footerEl) footerEl.style.opacity = "1";
      const waBtn = document.getElementById("cartWhatsAppBtn");
      if (waBtn) waBtn.classList.remove("btn-disabled");

      itemsList.innerHTML = this.items.map(item => {
        const formattedPrice = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price * item.quantity);
        return `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2">
                  <h4 class="text-sm font-semibold text-[var(--color-text-main)] leading-snug">
                    ${item.name}
                  </h4>
                  <button 
                    type="button" 
                    onclick="vintageCart.removeItem(${item.id})" 
                    class="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] text-xs p-1 transition-colors"
                    title="Remover item"
                    aria-label="Remover ${item.name} do carrinho"
                  >
                    ✕
                  </button>
                </div>
                <div class="text-xs text-[var(--color-gold-vintage)] font-serif font-bold mt-1">
                  ${formattedPrice}
                </div>
              </div>

              <div class="flex items-center justify-between mt-3 pt-2 border-t border-[var(--color-border)]/50">
                <div class="flex items-center border border-[var(--color-border)] rounded overflow-hidden bg-black/40">
                  <button 
                    type="button" 
                    onclick="vintageCart.updateQuantity(${item.id}, -1)" 
                    class="px-2.5 py-1 text-xs text-[var(--color-text-muted)] hover:bg-white/10 transition-colors"
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span class="px-2 text-xs font-bold text-[var(--color-text-main)] min-w-[20px] text-center">
                    ${item.quantity}
                  </span>
                  <button 
                    type="button" 
                    onclick="vintageCart.updateQuantity(${item.id}, 1)" 
                    class="px-2.5 py-1 text-xs text-[var(--color-text-muted)] hover:bg-white/10 transition-colors"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>

                <span class="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                  ${item.stock === 1 ? 'Peça Única' : 'Em Estoque'}
                </span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Instância global do carrinho
let vintageCart;

document.addEventListener("DOMContentLoaded", () => {
  vintageCart = new VintageCart();
});

// Atalho global para adicionar ao carrinho a partir de botões de produtos
function handleAddToCart(productId) {
  if (vintageCart) {
    vintageCart.addItem(productId);
  }
}

// Abre carrinho
function openCartDrawer() {
  if (vintageCart) {
    vintageCart.openDrawer();
  }
}

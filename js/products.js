/**
 * Loucos por Vitrola — Catálogo de Produtos Vintage (Acervo Expandido & Detalhado)
 * Armazenamento centralizado de dados dos toca-discos revisados na bancada de André Luis Denani.
 */

const products = [
  {
    id: 1,
    name: "Toca-Discos Gradiente D30",
    slug: "gradiente-d30",
    brand: "Gradiente",
    model: "D30",
    driveType: "Belt-Drive",
    priceRange: "medium", // 2000-3000
    price: 2450.00,
    image: "assets/images/product-gradiente-d30.jpg",
    images: [
      "assets/images/product-gradiente-d30.jpg",
      "assets/images/gallery-needle.jpg",
      "assets/images/hero-turntable.jpg"
    ],
    shortDescription: "Clássico nacional absoluto dos anos 80. Tração por correia nova, estroboscópio de néon e retorno automático suave do braço.",
    description: "O Gradiente D30 é um dos modelos mais celebrados e queridos pelos audiófilos brasileiros. Totalmente restaurado pela oficina Loucos por Vitrola com desmontagem mecânica completa, desoxidação, substituição da correia por borracha sintética de alta densidade e lubrificação técnica. Acompanha cápsula Audio-Technica AT3600L calibrada e tampa de acrílico cristalina impecavelmente polida.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Peça Única Revisada",
    specifications: [
      { label: "Fabricante", value: "Gradiente Eletrônica S.A." },
      { label: "Sistema de Tração", value: "Belt-Drive (Correia nova instalada)" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM com ajuste fino de pitch" },
      { label: "Cápsula e Agulha", value: "Audio-Technica AT3600L (Zero Km)" },
      { label: "Operação", value: "Semi-Automático com retorno suave" },
      { label: "Alimentação", value: "Bivolt selecionável (110V / 220V)" },
      { label: "Conexões", value: "Cabo RCA blindado com fio terra dedicado" },
      { label: "Garantia", value: "90 dias de garantia técnica de bancada" }
    ],
    highlights: [
      "Revisão mecânica 100% desmontada e relubrificada",
      "Estroboscópio de néon com calibração precisa de rotação",
      "Tampa acrílica original polida sem trincas",
      "Balança digital aferida com tracking force de 2.0g"
    ]
  },
  {
    id: 2,
    name: "Toca-Discos Garrard 6300 Vintage",
    slug: "garrard-6300",
    brand: "Garrard",
    model: "6300",
    driveType: "Idler Wheel",
    priceRange: "low", // < 2000
    price: 1980.00,
    image: "assets/images/product-garrard-6300.jpg",
    images: [
      "assets/images/product-garrard-6300.jpg",
      "assets/images/gallery-needle.jpg",
      "assets/images/workshop-bench.jpg"
    ],
    shortDescription: "Engenharia britânica clássica montada sob licença no Brasil. Mecanismo robusto com som analógico quente e envolvente.",
    description: "O lendário Garrard 6300 combina o charme da tradicional mecânica britânica com gabinete robusto em acabamento amadeirado vintage. Este exemplar passou por restauração integral no ABC Paulista: lubrificação com graxa de lítio própria para engrenagens analógicas, recap da fonte e calibração de velocidade. Equipado com cápsula magnética de resposta quente e detalhada.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Peça Única Revisada",
    specifications: [
      { label: "Fabricante", value: "Garrard Engineering / Gradiente" },
      { label: "Sistema de Tração", value: "Idler Wheel / Roda de atrito restaurada" },
      { label: "Velocidades", value: "33 ⅓, 45 e 78 RPM (Suporta goma-laca)" },
      { label: "Cápsula e Agulha", value: "Magnética Le-Son TL com agulha cônica nova" },
      { label: "Operação", value: "Automático / Manual" },
      { label: "Alimentação", value: "110V / 220V AC" },
      { label: "Gabinete", value: "Madeira nobre tratada com óleo mineral" },
      { label: "Garantia", value: "90 dias de garantia técnica da oficina" }
    ],
    highlights: [
      "Mecanismo de troca e retorno totalmente revisado",
      "Suporte a discos antigos de 78 RPM (goma-laca)",
      "Sonoridade analógica quente e encorpada",
      "Excelente isolamento de vibrações de bancada"
    ]
  },
  {
    id: 3,
    name: "Toca-Discos Polyvox TD 2000 Direct Drive",
    slug: "polyvox-td-2000",
    brand: "Polyvox",
    model: "TD 2000",
    driveType: "Direct Drive",
    priceRange: "medium", // 2000-3000
    price: 2890.00,
    image: "assets/images/product-polyvox-td2000.jpg",
    images: [
      "assets/images/product-polyvox-td2000.jpg",
      "assets/images/hero-turntable.jpg",
      "assets/images/workshop-bench.jpg"
    ],
    shortDescription: "Alta fidelidade Hi-Fi topo de linha. Motor Direct Drive de torque constante e braço em S balanceado estaticamente.",
    description: "O Polyvox TD 2000 é um ícone da época de ouro do Hi-Fi brasileiro. Equipado com motor Direct Drive (sem correia), oferece rotação extremamente estável com baixíssimo índice de wow & flutter. Braço em formato 'S' com cabeçote intercambiável padrão SME, controle de pitch com lâmpada estroboscópica e mecanismo cueing com amortecimento a óleo de silicone novo.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Alta Fidelidade Hi-Fi",
    specifications: [
      { label: "Fabricante", value: "Polyvox Eletrônica S.A." },
      { label: "Sistema de Tração", value: "Direct Drive (Tração Direta por motor DC)" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM independentes" },
      { label: "Cápsula e Agulha", value: "Le-Son Diamond Stylus instalada" },
      { label: "Braço", value: "Braço tubular em S de alumínio balanceado" },
      { label: "Alimentação", value: "Bivolt selecionável" },
      { label: "Conexões", value: "RCA banhados a ouro + terra" },
      { label: "Garantia", value: "90 dias de garantia com certificado" }
    ],
    highlights: [
      "Motor Direct Drive silencioso com estabilidade militar",
      "Anti-skating de alta precisão regulado com disco de teste",
      "Chassi denso imune a feedback acústico",
      "Visual estético primoroso com serigrafia original conservada"
    ]
  },
  {
    id: 4,
    name: "Toca-Discos Pioneer PL-600 Quartz Lock",
    slug: "pioneer-pl-600",
    brand: "Pioneer",
    model: "PL-600",
    driveType: "Direct Drive",
    priceRange: "high", // > 3000
    price: 3650.00,
    image: "assets/images/product-pioneer-pl600.jpg",
    images: [
      "assets/images/product-pioneer-pl600.jpg",
      "assets/images/gallery-needle.jpg",
      "assets/images/hero-turntable.jpg"
    ],
    shortDescription: "Aparelho japonês audiófilo de referência. Sistema Quartz PLL Direct Drive totalmente automático com suspensão flutuante.",
    description: "Um dos projetos mais aclamados da Pioneer no Japão. O PL-600 entrega uma experiência auditiva refinada com sincronismo perfeito por cristal de quartzo. Chassi duplo com suspensão flutuante que isola totalmente o braço e o prato de qualquer vibração externa. Restauração detalhada por André Luis Denani com teste de esteira contínua por 48 horas.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Referência Japonesa",
    specifications: [
      { label: "Fabricante", value: "Pioneer Corporation (Made in Japan)" },
      { label: "Sistema de Tração", value: "Direct Drive Quartz Lock PLL" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM travadas a quartzo" },
      { label: "Cápsula e Agulha", value: "Audio-Technica Elliptical Nova" },
      { label: "Operação", value: "Totalmente Automático com sensores óticos" },
      { label: "Alimentação", value: "110V / 120V (Acompanha transformador se necessário)" },
      { label: "Garantia", value: "90 dias de garantia de bancada" }
    ],
    highlights: [
      "Trava de velocidade Quartz PLL com precisão cirúrgica",
      "Subchassi fundido sob pressão com molas calibradas",
      "Tampa acrílica original fumê polida e sem riscos",
      "Acompanha tapete de borracha original de alta densidade"
    ]
  },
  {
    id: 5,
    name: "Toca-Discos Gradiente B25",
    slug: "gradiente-b25",
    brand: "Gradiente",
    model: "B25",
    driveType: "Belt-Drive",
    priceRange: "low", // < 2000
    price: 1690.00,
    image: "assets/images/product-gradiente-b25.jpg",
    images: [
      "assets/images/product-gradiente-b25.jpg",
      "assets/images/workshop-bench.jpg"
    ],
    shortDescription: "Design compacto, elegante e descomplicado. Perfeito para quem quer entrar no mundo do vinil com qualidade real.",
    description: "O Gradiente B25 é o toca-discos ideal para quem busca simplicidade, confiabilidade e o calor do som analógico sem complicações. Mecânica direta com correia nova de precisão, retorno automático do braço ao fim do disco e cápsula magnética de excelente fidelidade sonora.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Excelente Custo-Benefício",
    specifications: [
      { label: "Fabricante", value: "Gradiente Eletrônica S.A." },
      { label: "Sistema de Tração", value: "Belt-Drive com correia nova" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM" },
      { label: "Cápsula e Agulha", value: "Cápsula Magnética Le-Son com agulha nova" },
      { label: "Operação", value: "Semi-Automático com retorno no fim do disco" },
      { label: "Alimentação", value: "Bivolt selecionável" },
      { label: "Garantia", value: "90 dias de garantia" }
    ],
    highlights: [
      "Ótimo ponto de partida para novos colecionadores de vinil",
      "Componentes 100% revisados e lubrificados",
      "Regulagem de tracking force já configurada para audição",
      "Fácil conexão em receivers e caixas amplificadas"
    ]
  },
  {
    id: 6,
    name: "Toca-Discos Technics SL-D2 Direct Drive",
    slug: "technics-sl-d2",
    brand: "Technics",
    model: "SL-D2",
    driveType: "Direct Drive",
    priceRange: "high", // > 3000
    price: 3200.00,
    image: "assets/images/product-technics-sld2.jpg",
    images: [
      "assets/images/product-technics-sld2.jpg",
      "assets/images/gallery-needle.jpg",
      "assets/images/hero-turntable.jpg"
    ],
    shortDescription: "A lenda da Technics Matsushita. Durabilidade eterna, motor Brushless B-M-O e fidelidade analógica máxima.",
    description: "A Technics revolucionou a história do som com seus motores de tração direta. O modelo SL-D2 conta com motor sem escovas de alta estabilidade, prato pesado de alumínio com estroboscópio integrado, braço em S com suspensão cardânica de precisão e controle de pitch preciso. Totalmente revisado com componentes originais preservados.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Clássico Technics",
    specifications: [
      { label: "Fabricante", value: "Technics / Panasonic Matsushita Electric" },
      { label: "Sistema de Tração", value: "Direct Drive Brushless Motor" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM com Pitch Control" },
      { label: "Cápsula e Agulha", value: "Audio-Technica com agulha de diamante" },
      { label: "Operação", value: "Semi-Automático com retorno suave e auto-stop" },
      { label: "Alimentação", value: "110V / 220V" },
      { label: "Garantia", value: "90 dias com suporte pós-venda" }
    ],
    highlights: [
      "Motor Direct Drive indestructible com baixíssimo ruído",
      "Elevador hidráulico com descida macia que protege o vinil",
      "Pés de suspensão com molas originais em perfeito estado",
      "Serigrafia nítida e tampa acrílica polida"
    ]
  },
  {
    id: 7,
    name: "Toca-Discos Polyvox TD 6000 Master",
    slug: "polyvox-td-6000",
    brand: "Polyvox",
    model: "TD 6000",
    driveType: "Direct Drive",
    priceRange: "high", // > 3000
    price: 3490.00,
    image: "assets/images/product-polyvox-td6000.jpg",
    images: [
      "assets/images/product-polyvox-td6000.jpg",
      "assets/images/gallery-needle.jpg",
      "assets/images/hero-turntable.jpg"
    ],
    shortDescription: "O ápice do Hi-Fi brasileiro. Direct Drive Quartz com retorno foto-ótico, chassi denso e braço de precisão cirúrgica.",
    description: "O Polyvox TD 6000 é considerado por muitos o mais sofisticado toca-discos projetado e construído no Brasil. Apresenta sistema Direct Drive com trava por quartzo, acionamento por micro-chaves de toque suave e retorno fotoelétrico que não exerce nenhuma resistência mecânica sobre o braço durante a reprodução. Restaurado com recap integral e calibrado para audiófilos exigentes.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Audiófilo de Bancada",
    specifications: [
      { label: "Fabricante", value: "Polyvox Eletrônica S.A." },
      { label: "Sistema de Tração", value: "Direct Drive Quartz Lock" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM com chaveamento eletrônico" },
      { label: "Cápsula e Agulha", value: "Ortofon / Le-Son Hi-Fi calibrada" },
      { label: "Operação", value: "Semi-Automático fotoelétrico silencioso" },
      { label: "Alimentação", value: "Bivolt automático" },
      { label: "Garantia", value: "90 dias com suporte pós-venda" }
    ],
    highlights: [
      "Retorno sem atrito através de feixe óptico infravermelho",
      "Controle de rotação Quartz Lock com precisão de 99.99%",
      "Gabinete denso anti-microfonia e tampa impecável",
      "Certificado de calibração emitido por André Luis Denani"
    ]
  },
  {
    id: 8,
    name: "Toca-Discos Gradiente TT-II Direct Drive",
    slug: "gradiente-tt-2",
    brand: "Gradiente",
    model: "TT-II",
    driveType: "Direct Drive",
    priceRange: "medium", // 2000-3000
    price: 2750.00,
    image: "assets/images/product-gradiente-tt2.jpg",
    images: [
      "assets/images/product-gradiente-tt2.jpg",
      "assets/images/workshop-bench.jpg"
    ],
    shortDescription: "Robustez lendária com motor de tração direta. Chassi em alumínio anodizado escovado e pitch individual por rotação.",
    description: "O Gradiente TT-II é famoso por sua resistência e estabilidade. Equipado com motor Direct Drive de partida rápida, controle de pitch independente para 33 e 45 RPM e braço em S com antiskating ajustável. Exemplar revisado com substituição de capacitores eletrolíticos e polimento completo da tampa fumê.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Peça Única Revisada",
    specifications: [
      { label: "Fabricante", value: "Gradiente Eletrônica S.A." },
      { label: "Sistema de Tração", value: "Direct Drive DC Servomotor" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM independentes" },
      { label: "Cápsula e Agulha", value: "Audio-Technica com agulha nova" },
      { label: "Operação", value: "Semi-Automático com retorno no fim" },
      { label: "Alimentação", value: "Bivolt 110V / 220V" },
      { label: "Garantia", value: "90 dias de bancada" }
    ],
    highlights: [
      "Motor Direct Drive de torque estável e silêncio absoluto",
      "Prato usinado de alumínio com anéis estroboscópicos",
      "Chassi denso com amortecedores internos originais",
      "Tampa acrílica polida em 3 fases de lustro"
    ]
  },
  {
    id: 9,
    name: "Toca-Discos Marantz 6100 Vintage Wood",
    slug: "marantz-6100",
    brand: "Marantz",
    model: "6100",
    driveType: "Belt-Drive",
    priceRange: "high", // > 3000
    price: 3890.00,
    image: "assets/images/product-marantz-6100.jpg",
    images: [
      "assets/images/product-marantz-6100.jpg",
      "assets/images/hero-turntable.jpg",
      "assets/images/gallery-needle.jpg"
    ],
    shortDescription: "A nobreza do áudio clássico americano. Gabinete em madeira nobre nogueira americana, motor síncrono e braço de alta precisão.",
    description: "Um clássico cobiçado por colecionadores no mundo inteiro. O Marantz 6100 une a sofisticação da madeira de lei envernizada a um motor síncrono de 4 polos extremamente silencioso. Braço em S balanceado com contrapeso graduado e retorno automático. Restauração primorosa com correia nova sob medida e cápsula magnética de nível audiófilo.",
    category: "Vitrolas",
    available: true,
    stock: 1,
    badge: "Joia de Coleção",
    specifications: [
      { label: "Fabricante", value: "Marantz Company Inc. (EUA / Japão)" },
      { label: "Sistema de Tração", value: "Belt-Drive com motor AC síncrono de 4 polos" },
      { label: "Velocidades", value: "33 ⅓ e 45 RPM" },
      { label: "Cápsula e Agulha", value: "Shure M95ED / Audio-Technica Hi-Fi" },
      { label: "Operação", value: "Semi-Automático com auto-return e shut-off" },
      { label: "Gabinete", value: "Madeira Nogueira Natural tratada" },
      { label: "Garantia", value: "90 dias com certificado" }
    ],
    highlights: [
      "Acabamento estético de luxo em madeira nobre natural",
      "Motor síncrono que não sofre variações com aquecimento",
      "Fidelidade sonora cristalina e palco sonoro estéreo amplo",
      "Acompanha headshell original Marantz em alumínio"
    ]
  }
];

/**
 * Formata um valor numérico para Moeda Brasileira (BRL)
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

/**
 * Retorna todos os produtos
 */
function getAllProducts() {
  return products;
}

/**
 * Busca produto por ID
 */
function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

/**
 * Renderiza o Card de um Produto no Catálogo
 */
function renderProductCard(product) {
  const isAvailable = product.available && product.stock > 0;
  
  return `
    <article class="vintage-card group" data-product-id="${product.id}" data-brand="${product.brand}" data-drive="${product.driveType}" data-price="${product.priceRange}">
      <div class="relative overflow-hidden aspect-turntable bg-black/40 cursor-pointer" onclick="openProductModal(${product.id})">
        <img 
          src="${product.image}" 
          alt="${product.name} — Toca-discos vintage restaurado" 
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span class="vintage-badge ${isAvailable ? 'badge-unique' : 'badge-sold'}">
            ${isAvailable ? product.badge : 'Indisponível'}
          </span>
        </div>
        <div class="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-[var(--color-gold-vintage)] border border-white/10">
          ${product.driveType}
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold tracking-wider uppercase text-[var(--color-primary-light)]">
              ${product.brand}
            </span>
            <span class="text-[10px] text-[var(--color-text-muted)] bg-black/30 px-2 py-0.5 rounded border border-[var(--color-border)]">
              Bancada ABC
            </span>
          </div>
          <h3 class="text-lg font-serif text-[var(--color-text-main)] group-hover:text-[var(--color-gold-vintage)] transition-colors mb-2 cursor-pointer leading-snug" onclick="openProductModal(${product.id})">
            ${product.name}
          </h3>
          <p class="text-xs text-[var(--color-text-muted)] line-clamp-2 mb-4 leading-relaxed">
            ${product.shortDescription}
          </p>
        </div>

        <div class="pt-4 border-t border-[var(--color-border)]">
          <div class="flex items-baseline justify-between mb-4">
            <span class="text-xs text-[var(--color-text-muted)]">Valor à vista</span>
            <span class="text-xl font-bold font-serif text-[var(--color-gold-vintage)]">
              ${formatCurrency(product.price)}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button 
              type="button" 
              onclick="openProductModal(${product.id})" 
              class="btn btn-outline text-xs py-2 px-3 w-full"
              aria-label="Ver detalhes de ${product.name}"
            >
              Ver Detalhes
            </button>
            <button 
              type="button" 
              onclick="handleAddToCart(${product.id})" 
              class="btn btn-primary text-xs py-2 px-3 w-full ${!isAvailable ? 'btn-disabled' : ''}"
              ${!isAvailable ? 'disabled' : ''}
              aria-label="Comprar ${product.name}"
            >
              ${isAvailable ? 'Comprar' : 'Esgotado'}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Abre o Modal de Detalhes do Produto
 */
function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modalContainer = document.getElementById("productModalContainer");
  if (!modalContainer) return;

  const isAvailable = product.available && product.stock > 0;

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="productModalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalProductTitle">
      <div class="modal-content" onclick="event.stopPropagation()">
        <!-- Botão Fechar -->
        <button 
          type="button" 
          onclick="closeProductModal()" 
          class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[var(--color-gold-vintage)] hover:bg-black/95 flex items-center justify-center transition-colors border border-[var(--color-border)]"
          aria-label="Fechar janela de detalhes"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <!-- Coluna da Galeria de Fotos -->
          <div class="p-6 md:p-8 bg-[#0D0B0B] border-b md:border-b-0 md:border-r border-[var(--color-border)] flex flex-col justify-between">
            <div>
              <div class="relative rounded overflow-hidden aspect-turntable mb-4 border border-[var(--color-border)] bg-black/50">
                <img 
                  id="modalMainImage" 
                  src="${product.image}" 
                  alt="${product.name}" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-2 left-2 bg-black/80 px-2.5 py-1 rounded text-xs text-[var(--color-gold-vintage)] font-mono border border-white/10">
                  ${product.driveType} &bull; 90 Dias Garantia
                </div>
              </div>

              <!-- Thumbnails -->
              <div class="flex gap-2 overflow-x-auto pb-2">
                ${product.images.map((img, idx) => `
                  <button 
                    type="button" 
                    onclick="document.getElementById('modalMainImage').src = '${img}'" 
                    class="w-16 h-16 rounded overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-gold-vintage)] flex-shrink-0 transition-colors focus:outline-none"
                    aria-label="Ver foto ${idx + 1}"
                  >
                    <img src="${img}" alt="Miniatura ${idx + 1}" class="w-full h-full object-cover" />
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="mt-6 p-4 rounded bg-black/40 border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] flex items-center gap-3">
              <svg class="w-8 h-8 text-[var(--color-gold-vintage)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>Testado e certificado na bancada por André Luis Denani. Acompanha laudo técnico e selo de garantia de 90 dias.</span>
            </div>
          </div>

          <!-- Coluna de Informações e Compra -->
          <div class="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs uppercase font-bold tracking-wider text-[var(--color-primary-light)]">
                  ${product.brand}
                </span>
                <span class="text-[var(--color-border)]">•</span>
                <span class="text-xs text-[var(--color-gold-vintage)] font-semibold">${product.driveType}</span>
                <span class="text-[var(--color-border)]">•</span>
                <span class="text-xs text-[var(--color-text-muted)]">${product.category}</span>
              </div>

              <h2 id="modalProductTitle" class="text-2xl lg:text-3xl font-serif text-[var(--color-text-main)] mb-3">
                ${product.name}
              </h2>

              <div class="flex items-baseline gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
                <span class="text-3xl font-bold font-serif text-[var(--color-gold-vintage)]">
                  ${formatCurrency(product.price)}
                </span>
                <span class="text-xs text-[var(--color-text-muted)]">À vista ou via WhatsApp</span>
              </div>

              <p class="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                ${product.description}
              </p>

              <!-- Destaques Técnicos da Restauração -->
              <div class="mb-6">
                <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-vintage)] mb-3">
                  Intervenções Realizadas na Oficina:
                </h4>
                <ul class="space-y-2 text-xs text-[var(--color-text-main)]">
                  ${product.highlights.map(item => `
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-[#81C784] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Especificações Técnicas -->
              <div class="mb-6">
                <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-vintage)] mb-3">
                  Ficha Técnica do Equipamento:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  ${product.specifications.map(spec => `
                    <div class="bg-black/30 p-2.5 rounded border border-[var(--color-border)]">
                      <span class="block text-[var(--color-text-muted)] text-[10px] uppercase font-semibold">${spec.label}</span>
                      <span class="text-[var(--color-text-main)] font-medium">${spec.value}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Botões de Ação -->
            <div class="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-3">
              <button 
                type="button" 
                onclick="handleAddToCart(${product.id}); closeProductModal();" 
                class="btn btn-primary flex-1 py-3 text-sm font-bold ${!isAvailable ? 'btn-disabled' : ''}"
                ${!isAvailable ? 'disabled' : ''}
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                ${isAvailable ? 'Adicionar ao Carrinho' : 'Aparelho Vendido'}
              </button>
              <button 
                type="button" 
                onclick="closeProductModal()" 
                class="btn btn-outline py-3 px-6 text-sm"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = "hidden";

  const overlay = document.getElementById("productModalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }
}

/**
 * Fecha o Modal de Produto
 */
function closeProductModal() {
  const modalContainer = document.getElementById("productModalContainer");
  if (modalContainer) {
    modalContainer.innerHTML = "";
  }
  document.body.style.overflow = "";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
  }
});

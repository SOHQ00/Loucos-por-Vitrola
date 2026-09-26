# Loucos por Vitrola — Site Multipage Oficial

Site institucional, catálogo de aparelhos vintage restaurados e sistema de carrinho de intenção de compra via WhatsApp desenvolvido para a **Loucos por Vitrola**, oficina especializada de André Luis Denani no ABC Paulista.

---

## 1. Descrição do Projeto

O projeto foi construído respeitando rigorosamente as especificações do arquivo `SPEC.md`. Trata-se de um site estático multipage com estética autêntica retrô/vintage analógica, inspirado na cultura dos discos de vinil e na engenharia mecânica dos anos 70 e 80.

### Tecnologias Utilizadas:
- **HTML5 Semântico:** Marcação acessível, otimizada para SEO e leitores de tela.
- **CSS3 & Design System:** Paleta de cores extraída do logotipo original (`#681B1A` bordô, `#EFD78A` creme dourado, `#080707` preto vinil).
- **Tailwind CSS (CDN):** Utilitários de grid, flexbox e espaçamento combinados a CSS puro.
- **JavaScript Vanilla:** Sem dependências externas ou frameworks reativos pesados. Catálogo dinâmico, carrinho lateral persistente no `localStorage` e integração direta com WhatsApp.

---

## 2. Estrutura de Pastas do Projeto

```
/
├── index.html                  # Página inicial (Hero, Sobre, Serviços, Destaques)
├── sobre-nos.html              # História de André Luis Denani e metodologia de bancada
├── servicos.html               # 6 serviços detalhados de oficina e restauração
├── galeria.html                # Galeria de fotos com lightbox interativo
├── produtos.html               # Catálogo completo com busca e filtros por marca
├── contato.html                # Canais oficiais, agendamento no ABC e formulário WhatsApp
│
├── assets/
│   ├── images/                 # Fotografias de vitrolas, bancada, agulhas e acervo
│   ├── icons/                  # Ícones auxiliares
│   └── logo/                   # Arquivo do logotipo oficial da marca
│
├── css/
│   └── styles.css              # Variáveis de cores do logo, tipografia e componentes
│
├── js/
│   ├── main.js                 # Menu mobile, lightbox, toasts e comportamento global
│   ├── products.js             # Base de dados centralizada do catálogo e modais
│   └── cart.js                 # Carrinho com drawer lateral e compilador WhatsApp
│
└── README.md                   # Documentação técnica e guia de manutenção
```

---

## 3. Como Executar Localmente

Como o projeto é 100% estático (HTML/CSS/JS Vanilla), ele pode ser aberto de forma imediata:

### Opção 1: Direto no Navegador
Basta dar um duplo clique no arquivo `index.html` ou arrastá-lo para qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local Leve (Recomendado para simular produção)
Se você possui Python, Node.js ou a extensão Live Server no VS Code:

```bash
# Com Python 3:
python -m http.server 8000

# Com Node.js (npx):
npx serve .
```

Acesse em seu navegador: `http://localhost:8000`.

---

## 4. Guia de Manutenção e Customização

### Como Adicionar Novos Toca-Discos ao Catálogo
Abra o arquivo [`js/products.js`](file:///c:/Users/FIC/Documents/ATG2619/04%20Refatorar/js/products.js) e adicione um novo objeto ao array `products`:

```javascript
{
  id: 7,
  name: "Toca-Discos Polyvox TD 6000",
  slug: "polyvox-td-6000",
  brand: "Polyvox",
  model: "TD 6000",
  price: 3400.00,
  image: "assets/images/novo-produto.jpg",
  images: [
    "assets/images/novo-produto.jpg"
  ],
  shortDescription: "Modelo topo de linha com braço de altíssima precisão.",
  description: "Descrição completa do aparelho e intervenções de bancada.",
  category: "Vitrolas",
  available: true,
  stock: 1,
  badge: "Peça Única Revisada",
  specifications: [
    { label: "Fabricante", value: "Polyvox Eletrônica S.A." },
    { label: "Tração", value: "Direct Drive" }
  ],
  highlights: [
    "Revisão mecânica 100% desmontada",
    "Cápsula e agulha novas"
  ]
}
```

### Como Alterar Preços
No arquivo [`js/products.js`](file:///c:/Users/FIC/Documents/ATG2619/04%20Refatorar/js/products.js), localize o produto desejado e altere a propriedade `price`:

```javascript
// Exemplo: De 2450.00 para 2600.00
price: 2600.00,
```
O sistema formatará o valor automaticamente para Real Brasileiro (`R$ 2.600,00`).

### Como Alterar Imagens
1. Coloque a nova imagem em formato `.jpg`, `.png` ou `.webp` dentro da pasta `assets/images/`.
2. No arquivo [`js/products.js`](file:///c:/Users/FIC/Documents/ATG2619/04%20Refatorar/js/products.js) ou nos arquivos HTML correspondentes, aponte o caminho relativo para a nova imagem.

### Como Alterar o Número do WhatsApp
Para atualizar o telefone para onde os pedidos do carrinho e os formulários de contato são enviados:
1. No arquivo [`js/cart.js`](file:///c:/Users/FIC/Documents/ATG2619/04%20Refatorar/js/cart.js), altere a constante:
   ```javascript
   const WHATSAPP_PHONE = "5511996176660"; // Formato: DDI + DDD + Número sem traços
   ```
2. Nos arquivos HTML (`index.html`, `contato.html`, `servicos.html`), substitua as menções nos links `https://wa.me/5511996176660`.

### Como Alterar Textos Institucionais
Os textos das páginas estão dispostos diretamente no HTML semântico de cada arquivo (`index.html`, `sobre-nos.html`, `servicos.html`, `galeria.html`, `contato.html`). Basta abrir o arquivo correspondente e editar o conteúdo dentro das tags desejadas.

---

## 5. Como Publicar o Site

Por ser uma aplicação estática e autossuficiente:
1. **Hospedagem Convencional (cPanel, HostGator, Locaweb, KingHost):** Envie todos os arquivos da pasta raiz para a pasta `public_html` via FTP ou Gerenciador de Arquivos.
2. **Plataformas Modernas (Vercel, Netlify, GitHub Pages, Cloudflare Pages):** Basta conectar o repositório Git ou arrastar a pasta do projeto diretamente para o painel. O deploy é instantâneo e com certificado SSL gratuito.

---

## 6. Informações de Contato da Marca
- **Responsável Técnico:** André Luis Denani
- **WhatsApp:** (11) 99617-6660
- **Instagram:** [@loucos_por_vitrola](https://instagram.com/loucos_por_vitrola)
- **Facebook:** Loucos por Vitrola
- **Atendimento:** Região do ABC Paulista — São Paulo - SP
- **Cobertura:** Envios com embalagem reforçada para todo o Brasil.

# Forno Nobile Pizzaria (Site feito em 25 min por mim)

Landing page comercial moderna e de alta conversão para a **Forno Nobile Pizzaria**, concebida com estética gastronômica refinada, cardápio digital interativo, cálculo de sacola e encaminhamento direto de pedidos e reservas para o WhatsApp.

> **Aviso**: Este é um projeto demonstrativo desenvolvido pela **CF Web Studio** para apresentação de soluções web comerciais de alta performance. Marca e dados utilizados para fins ilustrativos.

---

## 🍕 Funcionalidades

- **Design Responsivo & Dark Editorial**: Interface elegante otimizada para smartphones, tablets e desktops (320px a 1440px+).
- **Cardápio Digital Interativo**: Filtros por categorias (Destaques, Clássicas, Especiais, Doces e Bebidas) e modal com detalhamento de ingredientes.
- **Sacola de Pedidos (OrderDrawer)**: Adição e ajuste de quantidades de múltiplos itens com cálculo automático de subtotal e taxa de entrega estimada.
- **Integração WhatsApp Direct**: Geração de mensagens estruturadas com os itens do pedido ou solicitação de reservas de mesa com dados preenchidos.
- **Seção de Localização**: Informações de horário, endereço formatado, botão para copiar endereço e link direto para rota no Google Maps.
- **Acessibilidade & Performance**: Semântica HTML5, alto contraste WCAG AA e carregamento ágil com Vite.

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Motion** (animações fluidas e transições suaves)
- **Lucide React** (ícones vetoriais)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes: `npm`, `pnpm` ou `yarn`

### 1. Clonar o Repositório
```bash
git clone https://github.com/SEU_USUARIO/forno-nobile-pizzaria.git
cd forno-nobile-pizzaria
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em `http://localhost:3000` (ou na porta indicada no terminal).

---

## 📦 Build para Produção

Para gerar os arquivos estáticos de produção:

```bash
npm run build
```

Os arquivos compilados e otimizados serão gerados no diretório `dist/`.

### Pré-visualização do Build Local
```bash
npm run preview
```

---

## 🌐 Deploy

Este projeto é uma **Single Page Application (SPA)** 100% estática no client-side. Pode ser publicado facilmente em qualquer serviço de hospedagem moderna:

| Plataforma | Build Command | Output Directory |
| :--- | :--- | :--- |
| **Vercel** | `npm run build` | `dist` |
| **Netlify** | `npm run build` | `dist` |
| **Cloudflare Pages** | `npm run build` | `dist` |
| **GitHub Pages** | `npm run build` | `dist` |

---

## 📄 Licença e Créditos

Desenvolvido por **CF Web Studio**.
Projeto demonstrativo para portfólio e apresentação de soluções digitais gastronômicas.

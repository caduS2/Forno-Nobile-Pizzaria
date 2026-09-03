import { MenuItem, Review, StatItem, CategoryId } from '../types';

export const MENU_CATEGORIES: { id: CategoryId; label: string; iconName: string }[] = [
  { id: 'destaques', label: 'Destaques', iconName: 'Flame' },
  { id: 'classicas', label: 'Clássicas', iconName: 'Award' },
  { id: 'especiais', label: 'Especiais', iconName: 'Sparkles' },
  { id: 'doces', label: 'Doces', iconName: 'Cookie' },
  { id: 'bebidas', label: 'Bebidas', iconName: 'Wine' },
];

export const PIZZA_ITEMS: MenuItem[] = [
  // Destaques
  {
    id: 'margherita-bufala',
    name: 'Margherita di Bufala',
    category: 'destaques',
    description: 'Molho de tomate San Marzano, mozzarella di bufala artesanal, manjericão fresco e azeite extravirgem.',
    price: 74,
    formattedPrice: 'R$ 74,00',
    ingredients: ['Tomates San Marzano', 'Mozzarella di Bufala', 'Manjericão Fresco', 'Azeite Extravirgem'],
    badge: 'Mais Pedida',
    vegetarian: true,
    chefChoice: true,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'parma-burrata',
    name: 'Parma & Burrata Fresca',
    category: 'destaques',
    description: 'Presunto cru tipo Parma fatiado fino, burrata cremosa ao centro, rúcula baby e redução balsâmica.',
    price: 98,
    formattedPrice: 'R$ 98,00',
    ingredients: ['Presunto tipo Parma', 'Burrata Inteira Cremosa', 'Rúcula Fresca', 'Redução Balsâmica'],
    badge: 'Assinatura',
    chefChoice: true,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'pepperoni-diavola',
    name: 'Pepperoni & Mel Picante',
    category: 'destaques',
    description: 'Fatias crocantes de pepperoni artesanal, fior di latte, molho de tomate e leve toque de mel com pimenta.',
    price: 82,
    formattedPrice: 'R$ 82,00',
    ingredients: ['Pepperoni Artesanal', 'Fior di Latte', 'Hot Honey', 'Molho de Tomate'],
    badge: 'Favorita',
    spicy: true,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85',
  },

  // Clássicas
  {
    id: 'margherita-classica',
    name: 'Margherita Tradicional',
    category: 'classicas',
    description: 'Massa leve de 48h, molho de tomate rústico, fior di latte fresco, manjericão e fio de azeite.',
    price: 68,
    formattedPrice: 'R$ 68,00',
    ingredients: ['Molho de Tomate', 'Fior di Latte', 'Manjericão', 'Azeite Italiano'],
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'calabresa-artesanal',
    name: 'Calabresa & Cebola Roxa',
    category: 'classicas',
    description: 'Linguiça calabresa curada finamente fatiada, cebolas roxas tostadas no forno, azeitonas e orégano.',
    price: 76,
    formattedPrice: 'R$ 76,00',
    ingredients: ['Calabresa Curada', 'Cebola Roxa Tostada', 'Azeitonas Pretas', 'Orégano Fresco'],
    badge: 'Tradicional',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    category: 'classicas',
    description: 'Harmonia entre queijo gorgonzola macio, provolone defumado, fior di latte e parmesão ralado.',
    price: 86,
    formattedPrice: 'R$ 86,00',
    ingredients: ['Gorgonzola Doce', 'Provolone Defumado', 'Fior di Latte', 'Parmesão'],
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=900&q=85',
  },

  // Especiais
  {
    id: 'funghi-tartufo',
    name: 'Funghi & Azeite Trufado',
    category: 'especiais',
    description: 'Cogumelos frescos salteados com ervas finas, base branca cremosa e perfume de azeite trufado.',
    price: 96,
    formattedPrice: 'R$ 96,00',
    ingredients: ['Mix de Cogumelos Frescos', 'Fior di Latte', 'Azeite Trufado', 'Tomilho Fresco'],
    badge: 'Especial',
    vegetarian: true,
    chefChoice: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'costela-artesanal',
    name: 'Costela Angus Desfiada',
    category: 'especiais',
    description: 'Costela bovina desfiada com cozimento lento, queijo meia cura derretido e gotas de pimenta biquinho.',
    price: 89,
    formattedPrice: 'R$ 89,00',
    ingredients: ['Costela Angus Cozimento Lento', 'Queijo Meia Cura', 'Pimenta Biquinho', 'Cebolinha'],
    badge: 'Autoral',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'zucchini-brie',
    name: 'Zucchini Grelhada & Brie',
    category: 'especiais',
    description: 'Lâminas finas de abobrinha grelhadas no forno a lenha, queijo brie cremoso, nozes e mel silvestre.',
    price: 84,
    formattedPrice: 'R$ 84,00',
    ingredients: ['Abobrinha Grelhada', 'Queijo Brie', 'Nozes Tostadas', 'Fio de Mel'],
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=85',
  },

  // Doces
  {
    id: 'pizza-pistacchio',
    name: 'Pistache & Morangos',
    category: 'doces',
    description: 'Massa leve assada salpicada com canela, generosa camada de creme de pistache e morangos frescos.',
    price: 56,
    formattedPrice: 'R$ 56,00',
    ingredients: ['Creme de Pistache', 'Morangos Frescos', 'Açúcar de Confeiteiro', 'Praliné Crocante'],
    badge: 'Doce',
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'pizza-nutella-banana',
    name: 'Nutella com Banana Flambada',
    category: 'doces',
    description: 'Creme de avelã com cacau, fatias de banana assadas no forno e leve toque de canela em pó.',
    price: 52,
    formattedPrice: 'R$ 52,00',
    ingredients: ['Creme de Avelã Nutella', 'Bananas Caramelizadas', 'Canela em Pó'],
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=900&q=85',
  },

  // Bebidas
  {
    id: 'vinho-tinto-italiano',
    name: 'Vinho Tinto Italiano (750ml)',
    category: 'bebidas',
    description: 'Vinho tinto selecionado de perfil frutado e taninos macios, ideal para harmonizar com massas e pizzas.',
    price: 110,
    formattedPrice: 'R$ 110,00',
    ingredients: ['Uvas Italianas Selecionadas', 'Garrafa 750ml', 'Harmonização Recomendada'],
    badge: 'Adega',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'cerveja-artesanal',
    name: 'Cerveja Artesanal IPA (500ml)',
    category: 'bebidas',
    description: 'Cerveja artesanal com notas cítricas e amargor equilibrado, servida sempre bem gelada.',
    price: 32,
    formattedPrice: 'R$ 32,00',
    ingredients: ['Lúpulos Selecionados', 'Garrafa 500ml', 'Teor Alcoólico 6.2%'],
    badge: 'Gelada',
    image: 'https://images.unsplash.com/photo-1608270177395-58532f778d91?auto=format&fit=crop&w=900&q=85',
  },
];

// Métricas de Processo da Massa e Cocção (Substituindo números comerciais inventados)
export const STATS_DATA: StatItem[] = [
  {
    value: 48,
    suffix: 'h',
    label: 'Fermentação Lenta',
    description: 'Maturação a frio que garante digestão leve e alvéolos pronunciados.',
  },
  {
    value: 480,
    suffix: '°C',
    label: 'Temperatura do Forno',
    description: 'Calor intenso gerado a lenha para selar aroma e crocância.',
  },
  {
    value: 90,
    suffix: 's',
    label: 'Cocção em Alta Temperatura',
    description: 'Tempo ideal para manter a suculência dos ingredientes e a borda aerada.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Ingredientes Selecionados',
    description: 'Farinha de moagem especial, molho de tomate rústico e queijos artesanais.',
  },
];

// Depoimentos demonstrativos ilustrando como avaliações de clientes podem ser exibidas
export const REVIEWS_DATA: Review[] = [
  {
    author: 'Cliente do Salão',
    role: 'Experiência Presencial',
    rating: 5,
    highlight: 'Massa surpreendentemente leve e sabor autêntico',
    text: 'A textura da borda é impecável: crocante por fora e macia por dentro. A burrata com presunto tem um equilíbrio marcante e a digestão foi extremamente tranquila.',
  },
  {
    author: 'Apreciador de Massas Artesanais',
    role: 'Pedido para Viagem',
    rating: 5,
    highlight: 'Chegou perfeita e quentinha em casa',
    text: 'A embalagem térmica conservou a crocância da massa e o queijo derretido como se estivesse saindo do forno. Uma das melhores pizzas artesanais da cidade.',
  },
  {
    author: 'Frequente no Salão',
    role: 'Reserva para Jantar',
    rating: 5,
    highlight: 'Ambiente intimista e atendimento atencioso',
    text: 'O aroma do forno a lenha acolhe assim que se entra. As opções de sabores clássicos e autorais agradam a todos os gostos com qualidade constante.',
  },
];

export const FAQS = [
  {
    question: 'Por que a fermentação de 48 horas faz tanta diferença na pizza?',
    answer: 'O descanso prolongado a frio permite que as leveduras quebrem açúcares complexos da farinha antes de ir ao forno. O resultado é uma massa aerada, saborosa e de digestão extremamente leve, que não causa sensação de estufamento.',
  },
  {
    question: 'Como faço para pedir via WhatsApp ou retirar no local?',
    answer: 'Basta clicar no botão de pedido em qualquer item do cardápio ou no botão flutuante. O seu pedido será formatado com os itens selecionados e enviado diretamente para a nossa equipe no WhatsApp.',
  },
  {
    question: 'Como funciona a solicitação de reserva de mesa?',
    answer: 'Você pode preencher o formulário na seção de contato escolhendo data, horário e número de pessoas. O envio encaminha a solicitação diretamente para confirmação no WhatsApp da pizzaria.',
  },
  {
    question: 'Vocês contam com opções vegetarianas no cardápio?',
    answer: 'Sim! Possuímos diversas opções vegetarianas com queijos artesanais, cogumelos frescos e vegetais grelhados no forno a lenha, devidamente sinalizadas no cardápio.',
  },
];

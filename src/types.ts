export type CategoryId = 'destaques' | 'classicas' | 'especiais' | 'doces' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  formattedPrice: string;
  ingredients: string[];
  badge?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  chefChoice?: boolean;
  image: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Review {
  author: string;
  role: string;
  rating: number;
  text: string;
  highlight: string;
}

export interface ContactFormData {
  nome: string;
  whatsapp: string;
  tipoAtendimento: 'Reserva de Mesa' | 'Pedido para Retirada' | 'Pedido para Delivery';
  data: string;
  horario: string;
  pessoas: string;
  observacoes: string;
}

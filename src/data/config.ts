// Configurações centralizadas da demonstração comercial da Forno Nobile Pizzaria
// CF Web Studio - Plano Profissional

export const RESTAURANT_CONFIG = {
  name: 'Forno Nobile Pizzaria',
  shortName: 'Forno Nobile',
  tagline: 'Tradição Artesanal Napolitana a 480°C',
  category: 'Pizzaria Napolitana Artesanal',
  
  // Contato e Localização Demonstrativos
  phoneDisplay: '(11) 99999-0000',
  phoneRaw: '5511999990000',
  address: {
    street: 'Rua das Oliveiras, 248',
    district: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    full: 'Rua das Oliveiras, 248 - Centro, São Paulo - SP',
  },
  
  // Horários de Funcionamento
  hours: {
    weekdays: 'Terça a Quinta: 18:00 às 23:30',
    weekend: 'Sexta e Sábado: 18:00 às 00:30',
    sunday: 'Domingo: 18:00 às 23:00',
    closed: 'Segunda-feira: Fechado',
  },

  // Redes e Links
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  // Aviso Legal do Projeto Demonstrativo
  demoDisclaimer: 'Projeto demonstrativo desenvolvido pela CF Web Studio. Marca e informações utilizadas para fins de apresentação.',
};

// Gerador centralizado de links para WhatsApp
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${RESTAURANT_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
}

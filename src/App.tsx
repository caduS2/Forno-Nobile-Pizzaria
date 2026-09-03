import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleDirectOrder = (item: MenuItem) => {
    handleAddToCart(item);
    setIsOrderDrawerOpen(true);
  };

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const menuElement = document.getElementById('cardapio');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0908] text-[#F8FAFC] selection:bg-[#EA580C]/30 selection:text-[#FED7AA]">
      {/* Top Navbar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Início (Hero Section) */}
        <Hero
          onExploreMenu={handleExploreMenu}
        />

        {/* 2. Cardápio Digital */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onDirectOrder={handleDirectOrder}
        />

        {/* 3. Sobre Nós & Estatísticas */}
        <AboutSection />

        {/* 4. Localização & Ambiente */}
        <LocationSection
          onOpenContact={handleOpenContact}
        />

        {/* 5. Contato & Reservas */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Digital Order Slide-over Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Bottom Right Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}

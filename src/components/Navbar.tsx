import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Menu, X, Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNavUrl = getWhatsAppUrl(
    'Olá! Gostaria de consultar o atendimento e cardápio da Forno Nobile.'
  );

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl shadow-black/70'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#EA580C] to-[#9A3412] flex items-center justify-center shadow-lg shadow-[#EA580C]/25 transition-transform duration-300 group-hover:scale-105">
              <Flame className="w-5 h-5 text-[#F8FAFC] animate-subtle-pulse" />
              <div className="absolute inset-0 rounded-full border border-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] leading-none group-hover:text-[#EA580C] transition-colors">
                FORNO NOBILE
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#EA580C] font-semibold mt-1">
                Pizzaria Artesanal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#F8FAFC]/80 hover:text-[#EA580C] transition-colors relative py-1 focus:outline-none focus:text-[#EA580C]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Oven Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1815] border border-white/10 text-xs font-medium text-[#F8FAFC]/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]" />
              </span>
              <span>Forno a 480°C</span>
            </div>

            {/* Cart Bag trigger */}
            <button
              id="btn-open-cart"
              onClick={onOpenCart}
              aria-label="Abrir sacola de pedidos"
              className="relative p-2.5 rounded-full bg-[#171412] hover:bg-[#221C18] border border-white/10 hover:border-[#EA580C]/40 text-[#F8FAFC] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
            >
              <ShoppingBag className="w-5 h-5 text-[#F8FAFC]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#EA580C] text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button: WhatsApp Order */}
            <a
              id="btn-nav-whatsapp"
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#EA580C]/25 hover:shadow-[#EA580C]/40 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir via WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="md:hidden p-2.5 rounded-xl bg-[#171412] border border-white/10 text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg md:hidden flex flex-col justify-between p-6 animate-fade-in overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EA580C] flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#F8FAFC]">
                FORNO NOBILE
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="p-2.5 rounded-xl bg-[#1c1815] border border-white/10 text-[#F8FAFC]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-display text-2xl font-bold text-[#F8FAFC] hover:text-[#EA580C] transition-colors py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-[#EA580C]/60" />
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F8FAFC]/75">
              <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
              <span>{RESTAURANT_CONFIG.address.full}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F8FAFC]/75">
              <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
              <span>{RESTAURANT_CONFIG.hours.weekdays}</span>
            </div>

            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pedir pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

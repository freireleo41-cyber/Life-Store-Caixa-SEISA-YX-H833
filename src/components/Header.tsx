import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND, LINKS } from '../config/constants';
import { trackClick } from '../lib/tracking';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuyClick = () => {
    trackClick('click_buy_mercado_livre', 'header', LINKS.mercadoLivre);
    window.open(LINKS.mercadoLivre, '_blank');
  };

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Especificações', href: '#specs' },
    { name: 'Atacado', href: '#wholesale' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-black-main/80 backdrop-blur-xl border-b border-white/10 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#hero" 
          className="group flex flex-col"
        >
          <span className="text-white font-display font-black text-2xl tracking-tight uppercase group-hover:text-primary transition-colors">
            {BRAND.name}
          </span>
          <span className={`text-[8px] font-black tracking-[0.4em] uppercase transition-all duration-300 ${isScrolled ? 'opacity-0 h-0' : 'opacity-40 mt-1'}`}>
            Premium Selection
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-medium hover:text-white transition-all text-xs font-black uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <button 
            onClick={handleBuyClick}
            className="group relative bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out skew-x-12"></div>
            <ShoppingCart size={14} />
            <span>Comprar Agora</span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={handleBuyClick}
            className="bg-primary p-2.5 rounded-xl text-white shadow-lg shadow-primary/20 active:scale-95"
          >
            <ShoppingCart size={20} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black-main/95 backdrop-blur-2xl border-t border-white/10 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-2xl font-display font-black text-white hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <Zap size={20} className="opacity-0 group-hover:opacity-100 text-primary transition-all" />
                </a>
              ))}
              
              <div className="pt-6">
                <button 
                  onClick={() => {
                    handleBuyClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  <ShoppingCart size={24} />
                  Garantir minha Unidade
                </button>
              </div>

              <div className="text-center">
                <p className="text-[10px] text-gray-medium uppercase tracking-[0.2em] font-bold">
                  {BRAND.signatureFull}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

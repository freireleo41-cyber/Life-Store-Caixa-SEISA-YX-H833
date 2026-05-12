import React, { useState, useEffect } from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LINKS } from '../config/constants';
import { trackClick } from '../lib/tracking';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 300px)
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuyClick = () => {
    trackClick('click_buy_mercado_livre', 'sticky_cta', LINKS.mercadoLivre);
    window.open(LINKS.mercadoLivre, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-[60] md:hidden"
        >
          <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-3">
            <button 
              onClick={handleBuyClick}
              className="flex-[3] bg-primary text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-95 transition-all group"
            >
              <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
              <span>COMPRAR AGORA</span>
            </button>
            
            <a 
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white active:scale-95 transition-all"
            >
              <MessageCircle size={22} className="text-secondary" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

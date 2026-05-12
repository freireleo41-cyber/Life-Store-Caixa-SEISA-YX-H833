import React from 'react';
import { ShoppingCart, MessageSquare, ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { LINKS, PRODUCT } from '../config/constants';
import { trackClick } from '../lib/tracking';

export default function FinalCTA() {
  const handleBuyClick = () => {
    trackClick('click_buy_mercado_livre', 'final_cta', LINKS.mercadoLivre);
    window.open(LINKS.mercadoLivre, '_blank');
  };

  return (
    <section className="section-padding bg-black-main relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(227,30,45,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none"></div>
        {/* Animated accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-4 animate-pulse-gentle">
              Ultima Chamada • Pronta Entrega
            </div>
            
            <h2 className="text-5xl md:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter">
              Som Profissional <br className="hidden md:block" /> 
              ao seu <span className="text-gradient-red italic">alcance.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-medium max-w-4xl mx-auto leading-relaxed font-medium italic opacity-80">
              A SEISA YX-H833 não é apenas um acessório, é um investimento em entretenimento. <br className="hidden md:block" /> Garanta a sua agora antes que o lote se encerre.
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-8"
          >
            <button 
              onClick={handleBuyClick}
              className="w-full lg:w-auto bg-primary hover:bg-primary-dark text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all shadow-[0_30px_60px_rgba(227,30,45,0.3)] flex items-center justify-center gap-4 group relative overflow-hidden active:scale-95"
            >
              <ShoppingCart size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Garantir Entrega Rápida</span>
            </button>
            
            <a 
              href="#wholesale"
              className="w-full lg:w-auto bg-white/5 hover:bg-white/10 text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-4 border border-white/10 hover:border-white/30 backdrop-blur-sm active:scale-95 group"
            >
              <span>Seja um Revendedor</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Infrastructure Signatures */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto border-t border-white/5"
          >
            {[
              { icon: ShieldCheck, text: "Segurança Certificada" },
              { icon: Truck, text: "Despacho em 24h" },
              { icon: MessageSquare, text: "Consultoria Dedicada" },
              { icon: Zap, text: "Garantia de 90 dias" }
            ].map((sig, i) => (
              <div key={i} className="flex items-center gap-4 group justify-center text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white border border-white/5 transition-all">
                  <sig.icon size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-medium group-hover:text-white transition-colors">{sig.text}</span>
              </div>
            ))}
          </motion.div>

          <div className="pt-8 text-white/20 select-none">
            <span className="text-[12px] font-black uppercase tracking-[1em]">LIFE STORE • 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

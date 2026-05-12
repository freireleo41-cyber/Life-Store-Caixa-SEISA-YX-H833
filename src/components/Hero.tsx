import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, ShieldCheck, Zap, Bluetooth, Mic2, Maximize2, Lightbulb, PlayCircle, ArrowRight } from 'lucide-react';
import { PRODUCT, LINKS, BRAND } from '../config/constants';
import { trackClick } from '../lib/tracking';

export default function Hero() {
  const handleBuyClick = () => {
    trackClick('click_buy_mercado_livre', 'hero', LINKS.mercadoLivre);
    window.open(LINKS.mercadoLivre, '_blank');
  };

  const badges = [
    { icon: <Bluetooth size={14} />, label: "Bluetooth 5.0" },
    { icon: <Lightbulb size={14} />, label: "LED Reflex RGB" },
    { icon: <Mic2 size={14} />, label: "Karaokê Pro" },
    { icon: <Maximize2 size={14} />, label: "Woofer 8\"" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-hero-gradient">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] text-left space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white/80 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm"
              >
                <div className="flex -space-x-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>
                  ))}
                </div>
                <span>Curadoria {BRAND.signature}</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-display font-black leading-[0.95] text-white tracking-tighter"
              >
                Som, luz e <br />
                <span className="text-gradient-red italic">karaokê</span> premium.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-medium max-w-2xl leading-relaxed font-medium"
              >
                A SEISA YX-H833 é a escolha definitiva para quem busca potência de 2000W PMPO, versatilidade total e atmosfera de festa instantânea.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col space-y-10"
            >
              <div className="flex flex-wrap items-end gap-6 bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-xl w-fit group hover:border-primary/30 transition-all duration-500">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-medium block">Investimento Exclusivo</span>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter">R$ {PRODUCT.priceTo.toFixed(2).replace('.', ',')}</span>
                    <div className="flex flex-col">
                      <span className="text-gray-medium line-through text-xs font-bold">R$ {PRODUCT.priceFrom.toFixed(2).replace('.', ',')}</span>
                      <span className="text-primary text-[10px] font-black uppercase tracking-widest">Economize R$ {(PRODUCT.priceFrom - PRODUCT.priceTo).toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                </div>
                <div className="h-14 w-px bg-white/10 hidden sm:block"></div>
                <div className="flex flex-col gap-1 pb-1">
                   <div className="flex gap-1 text-primary">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Alta Satisfação</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={handleBuyClick}
                  className="group relative bg-primary hover:bg-primary-dark text-white px-12 py-7 rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(227,30,45,0.3)] transition-all hover:scale-[1.02] active:scale-[0.95] flex items-center justify-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                  <ShoppingCart size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>Comprar pelo Mercado Livre</span>
                </button>
                <a 
                  href="#specs"
                  className="flex items-center justify-center gap-2 px-10 py-7 rounded-[2rem] font-black text-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/30 transition-all active:scale-95 group"
                >
                  <span>Conhecer Detalhes</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-[10px] text-gray-medium underline-offset-4 decoration-primary/20">
                <div className="flex items-center gap-2 group cursor-default">
                  <ShieldCheck size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase tracking-widest">Checkout Seguro</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                   <Zap size={18} className="text-primary group-hover:scale-110 transition-transform" />
                   <span className="font-bold uppercase tracking-widest">Despacho Imediato</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Product Display */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group animate-float"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-glow"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] group-hover:shadow-primary/10 transition-all duration-700">
                <div className="bg-graphite/40 rounded-[3.5rem] overflow-hidden relative aspect-[4/5] flex items-center justify-center p-8">
                  <img 
                    src={PRODUCT.images.main} 
                    alt={PRODUCT.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 ease-out"
                    fetchPriority="high"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x1000/121212/FFFFFF?text=SEISA+YX-H833';
                    }}
                  />
                  
                  {/* Floating Specs Overlay */}
                  <div className="absolute top-8 left-8 flex flex-col gap-3">
                    {badges.map((b, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        key={i} 
                        className="bg-black/60 backdrop-blur-xl text-white/90 px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 border border-white/10 w-fit"
                      >
                        <div className="text-primary">{b.icon}</div>
                        {b.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* Play Button Icon Decorative */}
                  <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 cursor-pointer">
                    <PlayCircle size={40} fill="white" className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Enhanced Stock Badge */}
              <motion.div 
                initial={{ rotate: 12, scale: 0 }}
                animate={{ rotate: -12, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                className="absolute -top-10 -right-10 md:-right-12 bg-white text-black-main px-10 py-8 rounded-[3rem] shadow-2xl flex flex-col items-center group cursor-default active:scale-95 transition-all"
              >
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-all">
                    <Zap size={20} fill="currentColor" />
                 </div>
                 <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-medium">Disponível</span>
                 <span className="text-3xl font-display font-black leading-none tracking-tighter">STOCK IN</span>
                 <span className="text-[10px] uppercase font-black tracking-widest text-primary mt-1">Pronta Entrega</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

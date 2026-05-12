import React from 'react';
import { motion } from 'motion/react';
import { PRODUCT } from '../config/constants';
import { Maximize2, Zap } from 'lucide-react';

const images = [
  {
    url: PRODUCT.images.main,
    label: "Kit Completo Premium",
    fallback: "https://placehold.co/800x1000/2B2B2B/FFFFFF?text=Kit+Seisa+H833"
  },
  {
    url: PRODUCT.images.front,
    label: "Vista Frontal LED RGB",
    fallback: "https://placehold.co/800x1000/171717/FFFFFF?text=Frontal+RGB"
  },
  {
    url: PRODUCT.images.control,
    label: "Painel de Controle Digital",
    fallback: "https://placehold.co/800x1000/2B2B2B/FFFFFF?text=Painel+Controle"
  },
  {
    url: PRODUCT.images.handle,
    label: "Portabilidade com Alça",
    fallback: "https://placehold.co/800x1000/171717/FFFFFF?text=Alça+Transporte"
  }
];

export default function ProductGallery() {
  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
              Galeria de Design
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-black-main tracking-tighter leading-[0.95]">
              Estética que <br /> <span className="text-gradient-red italic">impulsiona o som.</span>
            </h2>
          </div>
          <p className="text-gray-medium text-lg font-medium max-w-sm mb-2 italic border-l-2 border-primary pl-6">
            Cada ângulo revela a robustez e o cuidado com os acabamentos da engenharia SEISA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] bg-gray-soft/40 border border-black-main/5 hover:border-primary/20 transition-all duration-700"
            >
              <img 
                src={img.url} 
                alt={img.label} 
                loading="lazy"
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-main/90 via-black-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-10 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block">Exclusivo</span>
                  <p className="text-white font-display font-black text-xl leading-tight tracking-tight">{img.label}</p>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                <Maximize2 size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Highlight Feature Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-24 bg-black-main rounded-[4rem] flex flex-col lg:flex-row items-center gap-16 border border-white/5 relative overflow-hidden"
        >
           {/* Background glow */}
           <div className="absolute -top-1/2 -right-1/4 w-[80%] h-[150%] bg-primary/10 blur-[150px] rounded-full pointer-events-none rotate-12"></div>
           <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none"></div>
           
           <div className="w-full lg:w-1/2 aspect-[4/3] bg-white/[0.03] rounded-[3rem] overflow-hidden relative border border-white/10 group">
              <img 
                src={PRODUCT.images.control} 
                alt="Painel de Controle Detalhado" 
                loading="lazy"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/121212/FFFFFF?text=Painel+de+Controle';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-all duration-700">
                    <Maximize2 size={24} />
                 </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Engenharia</p>
                <p className="text-white font-display font-black text-sm uppercase tracking-widest">Painel Digital Inteligente</p>
              </div>
           </div>

           <div className="flex-1 space-y-10 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/5 text-white/40 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10">
                  <Zap size={14} className="text-primary fill-primary" />
                  Performance Brutalista
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.95] tracking-tighter italic">Detalhes que <br /> <span className="text-gradient-red italic">fazem história.</span></h3>
              </div>

              <p className="text-lg md:text-xl text-gray-medium leading-relaxed font-medium italic opacity-80">
                A YX-H833 não aceita compromissos. Do painel com eco ajustável à alça de transporte reforçada em ABS, cada centímetro foi esculpido para alta performance e mobilidade extrema.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm group hover:border-primary/50 transition-all text-left">
                  <span className="text-5xl font-display font-black text-white leading-none block mb-2 tracking-tighter group-hover:text-primary transition-colors">37cm</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium">Vertical Sound Stage</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm group hover:border-primary/50 transition-all text-left">
                  <span className="text-5xl font-display font-black text-white leading-none block mb-2 tracking-tighter group-hover:text-primary transition-colors">2.1kg</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium">Densidade Acústica</span>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

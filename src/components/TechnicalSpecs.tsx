import React from 'react';
import { PRODUCT } from '../config/constants';

import { Boxes, Package, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechnicalSpecs() {
  const specs = [
    { label: "Marca", value: PRODUCT.brand },
    { label: "Modelo", value: PRODUCT.model },
    { label: "Woofer", value: PRODUCT.specs.woofer },
    { label: "Conexões", value: PRODUCT.specs.connections.join(', ') },
    { label: "Rádio FM", value: PRODUCT.specs.radio },
    { label: "Display", value: PRODUCT.specs.display },
    { label: "Iluminação", value: PRODUCT.specs.lighting },
    { label: "Bateria", value: PRODUCT.specs.battery },
    { label: "Autonomia", value: PRODUCT.specs.autonomy },
    { label: "Altura", value: PRODUCT.specs.height },
    { label: "Peso", value: PRODUCT.specs.weight },
    { label: "Cor", value: PRODUCT.specs.color },
  ];

  return (
    <section id="specs" className="section-padding bg-gray-soft relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Summary and Power */}
            <div className="w-full lg:w-1/3 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
                  Data Sheet
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-black text-black-main leading-none tracking-tighter">
                  ADN <br /> <span className="text-gradient-red italic">Técnico.</span>
                </h2>
                <p className="text-gray-medium text-lg font-medium leading-relaxed italic border-l-2 border-primary pl-6">
                  Cada componente foi selecionado para garantir a melhor experiência acústica na categoria.
                </p>
              </div>

              {/* Power Highlight Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-black-main p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 text-primary/20 group-hover:scale-125 transition-transform duration-700">
                  <Zap size={60} fill="currentColor" />
                </div>
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Pico de Potência</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-display font-black text-primary tracking-tighter">2000W</span>
                    <span className="text-xs font-bold text-white/60 uppercase">PMPO</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-medium pt-4 border-t border-white/5">
                    "Referência de pico máximo de saída para ambientes domésticos e eventos de médio porte."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Full Specs Grid */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.04)] border border-black-main/5 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col p-10 border-b border-gray-soft last:border-b-0 md:[&:nth-child(2n)]:border-l group hover:bg-gray-soft/20 transition-colors">
                      <span className="text-gray-medium font-black uppercase text-[10px] tracking-widest mb-2 group-hover:text-primary transition-colors">
                        {spec.label}
                      </span>
                      <span className="font-display font-black text-black-main text-lg tracking-tight group-hover:scale-105 origin-left transition-transform">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Package & Warranty */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package Content */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] border border-black-main/5 p-12 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative">
              <div className="absolute bottom-0 right-0 p-10 text-black-main/5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Package size={200} />
              </div>
              
              <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Boxes size={32} />
              </div>
              
              <div className="space-y-6 flex-1">
                <h3 className="text-2xl font-display font-black text-black-main tracking-tight italic">O que vem na caixa</h3>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {["1x Caixa SEISA YX-H833", "1x Microfone com fio", "1x Controle remoto", "1x Cabo V8"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-medium font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="bg-white rounded-[3rem] border border-black-main/5 p-12 flex flex-wrap items-center gap-8 group">
               <div className="w-20 h-20 bg-gray-soft rounded-[2.5rem] flex items-center justify-center text-gray-medium shrink-0 group-hover:bg-black-main group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={32} />
               </div>
               <div className="space-y-2">
                 <h3 className="text-2xl font-display font-black text-black-main tracking-tight italic">Garantia Life Store</h3>
                 <p className="text-gray-medium text-sm font-medium">Proteção total por {PRODUCT.warranty} contra danos de fabricação.</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

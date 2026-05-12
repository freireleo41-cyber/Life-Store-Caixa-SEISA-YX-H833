import React from 'react';
import { Bluetooth, Lightbulb, Mic2, Tv, Radio, Music, Smartphone, Battery, Sliders, MapIcon as CarryHandle, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT } from '../config/constants';

const benefits = [
  {
    icon: Bluetooth,
    title: "Música sem complicação",
    desc: "Conecte seu celular via Bluetooth e reproduza suas músicas favoritas de forma rápida e prática."
  },
  {
    icon: Lightbulb,
    title: "Ambiente de festa com LED RGB",
    desc: "As luzes integradas criam um visual moderno e deixam o ambiente mais animado para qualquer momento."
  },
  {
    icon: Mic2,
    title: "Karaokê pronto para usar",
    desc: "A caixa acompanha microfone com fio e possui entrada dedicada, ideal para cantar e animar reuniões."
  },
  {
    icon: Tv,
    title: "Várias formas de reprodução",
    desc: "Além do Bluetooth, você pode usar USB, cartão Micro SD/TF, entrada auxiliar P2 e rádio FM."
  },
  {
    icon: CarryHandle,
    title: "Prática para transportar",
    desc: "Com alça superior e estrutura portátil, a caixa é extremamente fácil de levar para onde quiser.",
    image: PRODUCT.images.handle
  },
  {
    icon: Smartphone,
    title: "Controle na palma da mão",
    desc: "O controle remoto incluso facilita o uso no dia a dia e torna a experiência muito mais prática."
  }
];

const features = [
  { icon: Bluetooth, label: "Bluetooth" },
  { icon: Music, label: "USB" },
  { icon: Zap, label: "Micro SD" },
  { icon: Radio, label: "FM" },
  { icon: Sliders, label: "Controle" },
  { icon: Battery, label: "Bateria" }
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
            Diferenciais de Engenharia
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-black-main tracking-tighter leading-[0.95]">
            Alta performance em uma <span className="text-gradient-red italic">caixa portátil</span>
          </h2>
          <p className="text-gray-medium text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            Equilíbrio perfeito entre portabilidade e pressão sonora para levar sua música além.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-[3rem] bg-gray-soft/30 border border-black-main/5 hover:border-primary/30 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden flex flex-col"
            >
              {/* Pattern on hover */}
              <div className="absolute inset-0 bg-grid-black opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex items-center justify-between">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-black/5 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-700">
                    <benefit.icon size={30} />
                  </div>
                  <span className="text-[40px] font-display font-black text-black-main/5 group-hover:text-primary/10 transition-colors">0{idx + 1}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-black text-black-main tracking-tight group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed font-medium text-base">
                    {benefit.desc}
                  </p>
                </div>

                {benefit.image && (
                  <div className="mt-10 pt-8 rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white border border-black-main/5 group-hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title} 
                      loading="lazy" 
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-1000"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x450/121212/white?text=Detalhe+Premium';
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-black-main/5"
        >
          <div className="flex flex-wrap justify-center gap-10 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group text-center">
                <div className="w-12 h-12 bg-gray-soft rounded-full flex items-center justify-center border border-black-main/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-110">
                  <feat.icon size={20} />
                </div>
                <span className="text-gray-medium font-black uppercase text-[10px] tracking-[0.2em]">{feat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

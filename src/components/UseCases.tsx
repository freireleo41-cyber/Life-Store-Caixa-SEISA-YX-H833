import React from 'react';
import { motion } from 'motion/react';
import { Music, Mic2, Users, Flame, PartyPopper, Headphones } from 'lucide-react';

const cases = [
  {
    title: 'Churrasco com Amigos',
    description: 'Som limpo e potente para animar o ambiente sem distorções.',
    icon: Flame,
    color: 'bg-orange-500'
  },
  {
    title: 'Noite de Karaokê',
    description: 'Conecte o microfone incluso e mostre seu talento com controle de eco.',
    icon: Mic2,
    color: 'bg-primary'
  },
  {
    title: 'Festas em Família',
    description: 'As luzes LED RGB criam o clima perfeito para qualquer celebração.',
    icon: PartyPopper,
    color: 'bg-purple-500'
  },
  {
    title: 'Treino ao Ar Livre',
    description: 'Leve e portátil com alça reforçada para te acompanhar onde for.',
    icon: Music,
    color: 'bg-blue-500'
  }
];

export default function UseCases() {
  return (
    <section className="section-padding bg-black-main relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-[0.02] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3 bg-white/5 text-white/50 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10">
              Lifestyle & Versatilidade
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.95]">
              Feita para elevar seus <br /> <span className="text-gradient-red italic">melhores momentos</span>
            </h2>
          </div>
          <p className="text-gray-medium text-lg font-medium max-w-sm mb-2 italic border-l-2 border-primary pl-6">
            Não é apenas som, é a atmosfera que transforma qualquer lugar em um palco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 bg-graphite flex flex-col justify-end p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              
              {/* Icon floating in the middle temporarily as placeholder for photo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-125 transition-transform duration-1000 z-0">
                <item.icon size={200} />
              </div>

              <div className="relative z-20 space-y-4">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-black text-white tracking-tight">{item.title}</h3>
                <p className="text-gray-medium leading-relaxed text-sm font-medium opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                  {item.description}
                </p>
                <div className="w-8 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ShieldCheck, Truck, CreditCard, RotateCcw, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Pagamento 100% Seguro",
      desc: "Processado via Mercado Pago"
    },
    {
      icon: Truck,
      title: "Logística Pronta",
      desc: "Despacho em até 24h úteis"
    },
    {
      icon: CreditCard,
      title: "Parcelamento Sem Juros",
      desc: "Nas condições da plataforma"
    },
    {
      icon: RotateCcw,
      title: "Garantia de Fábrica",
      desc: "Proteção total por 90 dias"
    }
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-gray-soft/40 border border-black-main/5 hover:border-primary/20 hover:bg-white transition-all duration-500 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-black/5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <CheckCircle2 size={16} className="text-primary/20 group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-black text-black-main text-lg tracking-tight">{item.title}</h4>
                <p className="text-gray-medium text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/5 to-transparent hidden md:block"></div>
          <p className="text-gray-medium text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 bg-gray-soft/50 rounded-full border border-black-main/5 backdrop-blur-sm">
             Operação certificada • Parceiro Oficial Mercado Livre
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/5 to-transparent hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
}

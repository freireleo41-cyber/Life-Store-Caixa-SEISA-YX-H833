import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT, LINKS } from '../config/constants';

const faqs = [
  {
    q: "A caixa tem Bluetooth?",
    a: "Sim. Ela conecta com celulares, tablets, notebooks e outros dispositivos compatíveis com Bluetooth."
  },
  {
    q: "Acompanha microfone?",
    a: "Sim. O produto acompanha 1 microfone com fio já incluso na embalagem."
  },
  {
    q: "Tem controle remoto?",
    a: "Sim. O controle remoto acompanha o produto para facilitar a navegação em modos e volume."
  },
  {
    q: "Tem rádio FM?",
    a: "Sim. A caixa possui rádio FM integrado com sintonização automática."
  },
  {
    q: "Funciona com pendrive?",
    a: "Sim. Ela possui entrada USB para leitura direta de músicas em formato MP3."
  },
  {
    q: "Aceita cartão de memória?",
    a: "Sim. Possui entrada Micro SD / TF para reprodução de música."
  },
  {
    q: "Tem luz LED?",
    a: "Sim. A caixa possui iluminação LED RGB integrada que muda de cor automaticamente."
  },
  {
    q: "Quanto tempo dura a bateria?",
    a: "A autonomia estimada é de até 3 a 4 horas, podendo variar conforme volume, modo de uso e iluminação LED acionada."
  },
  {
    q: "Como funciona o envio?",
    a: "A compra é finalizada pelo Mercado Livre. O frete, prazo e rastreamento são calculados diretamente pela plataforma."
  },
  {
    q: "Tem retirada no local?",
    a: "Não. No momento, não trabalhamos com retirada local. As entregas são realizadas conforme as opções disponíveis no Mercado Livre."
  },
  {
    q: "O produto tem garantia?",
    a: `Sim. O produto possui garantia do fabricante de ${PRODUCT.warranty}.`
  },
  {
    q: "Onde a compra é finalizada?",
    a: "A compra é finalizada no Mercado Livre para sua total segurança. Ao clicar em comprar, você será direcionado para o anúncio oficial."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
              Centro de Suporte
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-black-main tracking-tighter leading-none">
              Dúvidas <span className="text-gradient-red italic">Resolvidas.</span>
            </h2>
            <p className="text-gray-medium text-lg md:text-xl font-medium max-w-xl mx-auto italic">
              Transparência total sobre a {PRODUCT.name} e nossa operação comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  openIdx === idx 
                    ? 'bg-white border-primary/20 shadow-[0_30px_60px_rgba(0,0,0,0.06)]' 
                    : 'bg-gray-soft/40 border-black-main/5 hover:border-black-main/10'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-8 md:p-10 text-left flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-black uppercase tracking-widest transition-colors ${openIdx === idx ? 'text-primary' : 'text-gray-medium'}`}>
                      Q.{idx + 1}
                    </span>
                    <span className={`text-lg md:text-xl font-display font-black tracking-tight transition-colors ${openIdx === idx ? 'text-black-main' : 'text-gray-medium group-hover:text-black-main'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIdx === idx ? 'bg-primary text-white rotate-180' : 'bg-white text-gray-medium group-hover:text-primary shadow-sm'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <div className="h-px bg-black-main/5 mb-8"></div>
                        <div className="flex gap-6">
                           <div className="w-1 bg-primary/20 rounded-full h-auto shrink-0"></div>
                           <p className="text-gray-medium text-lg leading-relaxed font-medium">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="p-10 rounded-[3rem] bg-gray-soft border border-black-main/5 inline-flex flex-col md:flex-row items-center gap-8 group">
              <div className="flex -space-x-3">
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?u=1" alt="Avatar" /></div>
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?u=2" alt="Avatar" /></div>
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-[10px] font-black">+1k</div>
              </div>
              <div className="text-left space-y-1">
                <p className="font-display font-black text-black-main text-lg tracking-tight italic">Ainda tem dúvidas?</p>
                <p className="text-gray-medium text-sm font-medium">Fale com nosso consultor via WhatsApp.</p>
              </div>
              <a 
                href={LINKS.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-black-main hover:bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Chamar Consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

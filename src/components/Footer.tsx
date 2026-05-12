import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BRAND, LINKS } from '../config/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black-main pt-32 pb-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand & Manifesto */}
          <div className="space-y-10 col-span-1 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-4xl font-display font-black text-white hover:text-primary transition-all cursor-pointer inline-block tracking-tighter" onClick={scrollToTop}>
                {BRAND.name}
              </h3>
              <div className="w-16 h-1.5 bg-primary rounded-full group-hover:w-full transition-all"></div>
            </div>
            <p className="text-gray-medium leading-relaxed font-medium text-lg italic opacity-80">
              Excelência em curadoria tecnológica. <br />
              Um projeto <span className="text-white">Life Store</span> orientado pela visão estratégica de <span className="text-white italic">Le Freire</span>.
            </p>
            <div className="flex gap-6 pt-4">
              {[Instagram, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-medium hover:text-primary hover:border-primary/30 transition-all group scale-90 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-10 lg:pl-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Navegação</h4>
            <ul className="grid grid-cols-1 gap-6">
              {["Hero", "Benefícios", "Especificações", "Atacado", "FAQ"].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-medium hover:text-white transition-all flex items-center gap-4 group font-black uppercase text-[10px] tracking-[0.2em]"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform shadow-lg shadow-primary/40"></div>
                    {item === "Hero" ? "Início" : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional / Trust */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Garantia Corporativa</h4>
            <div className="space-y-8">
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] group hover:bg-white/5 transition-all">
                <p className="text-[9px] text-gray-medium font-black uppercase tracking-[0.3em] mb-3">Razão Social</p>
                <p className="text-sm text-white font-bold leading-relaxed">{BRAND.name} • {BRAND.signatureFull}</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] group hover:bg-white/5 transition-all">
                <p className="text-[9px] text-gray-medium font-black uppercase tracking-[0.3em] mb-3">Identificação Fiscal</p>
                <p className="text-sm text-white font-black tracking-widest leading-relaxed">CNPJ: {BRAND.cnpj}</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-10 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Atendimento Privado</h4>
            <ul className="space-y-10">
              <li>
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary border border-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-medium mb-1">WhatsApp Business</p>
                    <p className="text-lg text-white font-black tracking-tighter">{BRAND.whatsappDisplay}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-[2rem] flex items-center justify-center text-gray-medium border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-medium mb-1">Comunicação Oficial</p>
                    <p className="text-sm text-white font-bold truncate max-w-[180px]">{BRAND.email}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-4">
            <p className="text-[10px] font-black text-gray-medium uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} {BRAND.name}. Curadoria e Estratégia por Le Freire.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-20 text-[10px] font-black uppercase tracking-[0.2em] group">
               <span className="hover:text-white transition-colors cursor-default">Privacy Protocol</span>
               <span className="hover:text-white transition-colors cursor-default">Terms of Distribution</span>
               <span className="hover:text-white transition-colors cursor-default">Official Partner ML</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="text-white/10 font-display font-black text-2xl tracking-[0.5em] hidden lg:block uppercase">LE FREIRE</p>
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 bg-white/[0.03] hover:bg-primary rounded-[2rem] border border-white/5 flex items-center justify-center text-gray-medium hover:text-white transition-all group shadow-2xl active:scale-90"
              title="Voltar ao topo"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

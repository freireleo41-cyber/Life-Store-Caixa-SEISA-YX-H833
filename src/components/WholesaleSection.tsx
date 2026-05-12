import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, User, MapPin, Hash, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT, BRAND, LINKS } from '../config/constants';
import { submitWholesaleLead } from '../lib/tracking';

export default function WholesaleSection() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    cidade: '',
    estado: '',
    quantidade: '',
    tipo: 'revenda',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitWholesaleLead(formData);
      setSubmitted(true);
      setFormData({
        nome: '',
        whatsapp: '',
        email: '',
        cidade: '',
        estado: '',
        quantidade: '',
        tipo: 'revenda',
        mensagem: ''
      });
    } catch (err) {
      console.error("Error submitting form: ", err);
      setError("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wholesale" className="section-padding bg-black-main overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[180px] rounded-full pointer-events-none transition-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Info Side */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white/60 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm"
                >
                  <Hash size={14} className="text-primary" />
                  Operação B2B Direta
                </motion.div>
                <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.95] tracking-tighter">
                  Escalabilidade <br />
                  e <span className="text-primary">Margem.</span>
                </h2>
                <p className="text-gray-medium text-lg md:text-xl leading-relaxed font-medium max-w-lg italic">
                  Abasteça seu estoque com a curadoria Life Store. Preços de importação direta para parceiros comerciais selecionados.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-4 hover:border-primary/30 transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-medium block">Preço por Unidade</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-primary">R$</span>
                    <span className="text-6xl font-display font-black text-white group-hover:text-primary transition-colors tracking-tighter">189,90</span>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-4 hover:border-primary/30 transition-all group lg:mt-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-medium block">Volume Mínimo</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-display font-black text-white group-hover:text-primary transition-colors tracking-tighter">{PRODUCT.wholesaleMinQuantity}</span>
                    <span className="text-xs font-bold text-gray-medium">UNIDADES</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                 <div className="flex items-start gap-5 p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 backdrop-blur-sm group hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Info size={24} />
                  </div>
                  <p className="text-sm text-gray-medium leading-relaxed font-medium">
                    Logística simplificada via transportadora ou Correios. <br />
                    <span className="text-white/80">Estoque 100% físico em SP para pronto despacho.</span>
                  </p>
                </div>

                <a 
                  href={LINKS.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-white hover:bg-gray-soft text-black-main px-12 py-7 rounded-[2.5rem] font-black text-lg flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
                >
                  <MessageSquare size={24} className="text-primary" />
                  Consultar Disponibilidade em Lote
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-[55%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative flex flex-col h-full"
            >
              <div className="mb-12">
                <h3 className="text-3xl font-display font-black text-black-main tracking-tight mb-2">Seja um Revendedor</h3>
                <p className="text-gray-medium font-medium">Inicie sua parceria preenchendo o formulário abaixo.</p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[3rem] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle size={48} />
                    </div>
                    <div className="space-y-3">
                       <h4 className="text-3xl font-display font-black text-black-main tracking-tight">Solicitação Indexada</h4>
                       <p className="text-gray-medium font-medium max-w-xs mx-auto">Em breve nosso departamento comercial analisará seus dados e entrará em contato.</p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
                    >
                      Realizar Nova Solicitação
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">Nome Completo</label>
                      <div className="relative group">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-medium group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                          required
                          type="text" 
                          placeholder="Ex: Leonardo Freire"
                          className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white pl-14 pr-6 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold placeholder:font-medium"
                          value={formData.nome}
                          onChange={e => setFormData({...formData, nome: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">WhatsApp</label>
                      <div className="relative group">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-medium group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                          required
                          type="tel" 
                          placeholder="(00) 00000-0000"
                          className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white pl-14 pr-6 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold placeholder:font-medium"
                          value={formData.whatsapp}
                          onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">E-mail Corporativo</label>
                      <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-medium group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                          required
                          type="email" 
                          placeholder="contato@empresa.com"
                          className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white pl-14 pr-6 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold placeholder:font-medium"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">Localização</label>
                      <div className="flex gap-3">
                        <div className="relative flex-1 group">
                          <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-medium group-focus-within:text-primary transition-colors" size={20} />
                          <input 
                            required
                            type="text" 
                            placeholder="Cidade"
                            className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white pl-14 pr-6 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold placeholder:font-medium"
                            value={formData.cidade}
                            onChange={e => setFormData({...formData, cidade: e.target.value})}
                          />
                        </div>
                        <input 
                          required
                          type="text" 
                          maxLength={2}
                          placeholder="UF"
                          className="w-20 bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white px-2 py-5 rounded-[1.5rem] transition-all outline-none text-center text-black-main font-black"
                          value={formData.estado}
                          onChange={e => setFormData({...formData, estado: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">Lote Inicial</label>
                      <input 
                        required
                        type="number" 
                        min={PRODUCT.wholesaleMinQuantity}
                        placeholder={`Mín. ${PRODUCT.wholesaleMinQuantity}`}
                        className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white px-8 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold placeholder:font-medium"
                        value={formData.quantidade}
                        onChange={e => setFormData({...formData, quantidade: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">Finalidade</label>
                      <select 
                        className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white px-8 py-5 rounded-[2rem] transition-all outline-none text-black-main font-bold cursor-pointer"
                        value={formData.tipo}
                        onChange={e => setFormData({...formData, tipo: e.target.value})}
                      >
                        <option value="revenda">Revenda / Loja Física</option>
                        <option value="evento">Eventos / Produção</option>
                        <option value="brinde">Brindes Corporativos</option>
                        <option value="outro">Outros fins</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-medium ml-4">Notas Adicionais</label>
                      <textarea 
                        rows={3}
                        placeholder="Quais seus canais de venda ou interesse principal?"
                        className="w-full bg-gray-soft border-2 border-transparent focus:border-black-main/5 focus:bg-white px-8 py-6 rounded-[2.5rem] transition-all outline-none resize-none text-black-main font-medium"
                        value={formData.mensagem}
                        onChange={e => setFormData({...formData, mensagem: e.target.value})}
                      />
                    </div>

                    <div className="md:col-span-2 pt-6">
                      {error && <p className="text-red-500 font-bold text-xs mb-6 bg-red-50 p-4 rounded-3xl border border-red-100">{error}</p>}
                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary-dark text-white py-7 rounded-[2.5rem] font-black text-xl transition-all shadow-[0_20px_40px_rgba(227,30,45,0.2)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-95 overflow-hidden"
                      >
                        {isSubmitting ? (
                          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            <span>Enviar Solicitação B2B</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="md:col-span-2 text-center opacity-40">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] px-10">
                        Seus dados serão processados exclusivamente para fins comerciais internos.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

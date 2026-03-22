import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight, 
  Star, 
  Users, 
  Target, 
  TrendingUp, 
  Zap,
  Layout,
  MousePointer2,
  MessageSquare
} from 'lucide-react';

// Countdown Timer Component
const CountdownTimer = ({ initialMinutes = 15 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-2 font-mono text-xl md:text-2xl font-bold text-yellow-400">
      <Clock className="w-6 h-6" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-800/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-blue-300 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-blue-200/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const CHECKOUT_URL = "https://pay.kiwify.com.br/UlJzuy9";

  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Header with Timer */}
      <header className="fixed top-0 left-0 w-full bg-[#020617]/80 backdrop-blur-md z-50 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">R</div>
            <span className="font-bold text-xl hidden sm:inline">Rocket Sells</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-blue-300 hidden md:inline">Oferta expira em:</span>
            <CountdownTimer />
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-600/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold uppercase tracking-wider">
                32 Modelos Prontos para Conversão
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300">
                Tenha um site que realmente traz clientes para o seu negócio
              </h1>
              <p className="text-lg md:text-xl text-blue-200/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                Transforme visitantes em clientes com páginas profissionais e estratégicas. Você recebe 32 modelos pensados exclusivamente para vender <span className="text-blue-400/60 italic text-base">ou revender</span>.
              </p>
              <div className="mb-10 flex items-center justify-center gap-4 text-green-400 font-bold text-sm md:text-base bg-green-500/10 py-2 px-6 rounded-full border border-green-500/20 w-fit mx-auto">
                <Zap className="w-5 h-5" />
                <span>Receba os modelos editáveis via WhatsApp e E-mail imediatamente após a compra!</span>
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 line-through text-lg opacity-60">De R$ 97,00</span>
                  <span className="text-4xl md:text-5xl font-black text-white">Por apenas R$ 17,00</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-5 bg-yellow-400 hover:bg-yellow-300 text-[#0a192f] font-black text-xl md:text-2xl rounded-2xl shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all flex items-center gap-3 cursor-pointer"
                >
                  Quero mais clientes agora
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="flex items-center gap-4 text-sm text-blue-300/60">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-[#0a192f]" alt="User" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <span>+1.240 empreendedores já estão usando</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Mockups Showcase */}
        <section className="py-20 bg-[#020617] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-20 bg-slate-900/50 rounded-2xl p-1 border border-blue-500/20 shadow-2xl overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/88/83/25/8883259741428287843d39929a032b8a.jpg" 
                    alt="Modelos de Sites" 
                    className="rounded-xl w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Subtle glow effect behind image */}
                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full -z-10" />
              </motion.div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black mb-6">Design que converte em qualquer tela</h2>
                <p className="text-lg text-blue-200/70 mb-8">
                  Nossos modelos são 100% responsivos. Seu cliente terá a mesma experiência de alta qualidade seja no computador, tablet ou celular.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
                >
                  Garantir meus modelos agora
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pain Points Section */}
        <section className="py-20 bg-[#030816]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Você se identifica com algum desses problemas?</h2>
              <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, text: "Tem redes sociais mas não consegue converter seguidores em clientes" },
                { icon: TrendingUp, text: "Perde vendas todos os dias por falta de um site profissional" },
                { icon: ShieldCheck, text: "Sente que seu negócio não passa a credibilidade que deveria" },
                { icon: MessageSquare, text: "Pessoas entram em contato pelo WhatsApp e somem sem fechar" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0a192f] p-8 rounded-3xl border border-blue-900/30 hover:border-blue-500/30 transition-all group"
                >
                  <item.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                  <p className="text-blue-100/90 leading-relaxed font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Belief Breaking Section */}
        <section className="py-24 px-4 bg-[#020617]">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Não é só "ter um site", é ter estratégia</h2>
                <p className="text-lg text-blue-50/90 mb-8 leading-relaxed">
                  A maioria dos sites não converte porque não tem a estrutura certa. Eles são apenas "cartões de visita" digitais que ninguém lê.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold">Foco total em vendas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold">Estrutura validada pelo mercado</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a192f]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <XCircle className="text-red-400 w-8 h-8" />
                  <span className="text-xl font-bold">O erro comum:</span>
                </div>
                <p className="text-blue-100/80 italic">
                  "Vou criar um site bonito e as pessoas vão comprar sozinhas."
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="font-bold text-yellow-400">A Realidade:</p>
                  <p className="text-sm text-blue-100/70 mt-2">Sem copywriting e estrutura de conversão, seu site é apenas um gasto, não um investimento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Solution Presentation */}
        <section className="py-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">A Solução Prática que Você Precisa</h2>
            <p className="text-xl text-blue-200/80 mb-16 max-w-3xl mx-auto">
              Apresentamos os 32 modelos de sites profissionais já pensados para conversão. Você não precisa criar nada do zero.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Prontos para Editar", desc: "Basta trocar as cores, textos e imagens. Simples assim.", icon: MousePointer2 },
                { title: "Design Moderno", desc: "Sites que passam autoridade e confiança imediata.", icon: Layout },
                { title: "Alta Performance", desc: "Leves, rápidos e otimizados para todos os dispositivos.", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-[#0d1f3d] border border-blue-900/50">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-200/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Benefits Section */}
        <section className="py-24 bg-[#030816]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">O que você ganha ao usar nossos modelos</h2>
                <div className="space-y-6">
                  {[
                    "Aumenta drasticamente suas chances de fechar novos clientes",
                    "Passa profissionalismo imediato para quem te encontra",
                    "Facilita a decisão do cliente com um caminho claro",
                    "Cria um funil de vendas automático que trabalha 24h",
                    "Economiza milhares de reais com agências e designers",
                    "Oportunidade de lucro: Use para você ou revenda para clientes"
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 bg-blue-500 rounded-full p-1">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-lg text-blue-100 font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-[40px]" />
                <img 
                  src="https://i.pinimg.com/1200x/47/54/5c/47545cdc098401816c03035d22f73657.jpg" 
                  alt="Modelos Rocket Sells" 
                  className="relative rounded-[32px] border border-blue-400/20 shadow-2xl w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. What's Included */}
        <section className="py-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#030816] rounded-[40px] border border-blue-900/30 p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Tudo o que você vai receber hoje:</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "32 Modelos de Sites",
                  "Páginas de Vendas",
                  "Landing Pages",
                  "Estruturas Testadas",
                  "Guia de Edição Rápida",
                  "Suporte Exclusivo",
                  "Bônus: Guia de Copy",
                  "Acesso Vitalício"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#0d1f3d] p-4 rounded-xl border border-blue-800/30">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="py-24 bg-[#030816]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-16">O que dizem nossos clientes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Ricardo Silva", role: "Consultor", text: "Depois que comecei a usar os modelos, o número de contatos qualificados no meu WhatsApp dobrou. O site passa muita confiança." },
                { name: "Ana Oliveira", role: "Esteticista", text: "Eu não sabia nada de site. Com os modelos prontos, em uma tarde eu já estava com minha página no ar e agendando clientes." },
                { name: "Marcos Souza", role: "Advogado", text: "O investimento se pagou no primeiro cliente que fechou comigo pelo site. Agora meus clientes confiam muito mais no meu trabalho." }
              ].map((t, i) => (
                <div key={i} className="bg-[#020617] p-8 rounded-3xl border border-blue-900/30 relative">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-blue-100/80 mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/seed/person${i}/50/50`} className="w-12 h-12 rounded-full" alt={t.name} referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-blue-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Irresistible Offer */}
        <section id="offer" className="py-24 px-4 bg-[#020617]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-[#020617] rounded-[48px] p-8 md:p-16 text-center shadow-[0_0_80px_rgba(59,130,246,0.2)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />
              
              <h2 className="text-3xl md:text-5xl font-black mb-4">Oferta Especial de Lançamento</h2>
              <p className="text-lg font-bold text-blue-600 mb-2 uppercase tracking-widest">Acesso Imediato e Vitalício</p>
              <p className="text-sm text-blue-500/60 mb-6 italic">Uso pessoal ou para revenda ilimitada</p>
              
              <div className="flex flex-col items-center mb-10">
                <span className="text-xl line-through opacity-50 mb-2">De R$ 97,00</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">Por apenas</span>
                  <span className="text-6xl md:text-8xl font-black text-blue-600">R$ 17,00</span>
                </div>
                <p className="mt-4 text-sm font-bold bg-blue-100 text-blue-600 px-4 py-1 rounded-full">OU 2X DE R$ 8,90</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center gap-2 text-red-600 font-bold">
                  <Clock className="w-5 h-5" />
                  <span>ESTA OFERTA TERMINA EM:</span>
                </div>
                <div className="flex justify-center">
                  <CountdownTimer />
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md py-6 bg-green-500 hover:bg-green-400 text-white font-black text-2xl rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Quero começar agora
                <ArrowRight className="w-7 h-7" />
              </motion.a>

              <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" className="h-6" alt="Pix" />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Guarantee Section */}
        <section className="py-20 bg-[#020617]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-blue-500/10 rounded-full mb-8">
              <ShieldCheck className="w-16 h-16 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Risco Zero: 7 Dias de Garantia</h2>
            <p className="text-lg text-blue-200/80 leading-relaxed">
              Se por qualquer motivo você achar que os modelos não são para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </section>

        {/* 11. FAQ Section */}
        <section className="py-24 bg-[#030816]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-16">Perguntas Frequentes</h2>
            <div className="space-y-2">
              <FAQItem 
                question="Preciso saber programar?" 
                answer="Não! Os modelos foram criados para serem editados de forma visual e intuitiva. Se você sabe clicar e arrastar, você consegue criar seu site." 
              />
              <FAQItem 
                question="Isso funciona para meu tipo de negócio?" 
                answer="Sim. Temos modelos para prestadores de serviço, consultores, lojas, profissionais liberais, infoprodutores e muito mais. A estrutura de conversão é universal." 
              />
              <FAQItem 
                question="Como recebo acesso?" 
                answer="O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com todos os links e instruções de acesso." 
              />
              <FAQItem 
                question="Posso usar os modelos várias vezes?" 
                answer="Sim! O acesso é vitalício e você pode usar os modelos para criar quantos sites quiser, seja para uso próprio ou para revenda para seus clientes, ficando com 100% do lucro." 
              />
            </div>
          </div>
        </section>

        {/* 12. Final CTA */}
        <section className="py-24 text-center px-4 bg-[#020617]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Pronto para transformar seu site em uma máquina de clientes?</h2>
            <p className="text-xl text-blue-200/80 mb-12">Não deixe mais dinheiro na mesa por falta de um site profissional.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-yellow-400 hover:bg-yellow-300 text-[#0a192f] font-black text-2xl rounded-2xl shadow-2xl transition-all flex items-center gap-3 mx-auto cursor-pointer"
            >
              Quero começar agora
              <ArrowRight className="w-7 h-7" />
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-blue-900/30 text-center text-blue-400/30 text-sm bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Rocket Sells. Todos os direitos reservados.</p>
          <p className="mt-2">Políticas de Privacidade | Termos de Uso</p>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Clock, Star, ShoppingBag, Check, Navigation, 
  ExternalLink, PhoneForwarded, ShieldCheck, Truck, Zap, ChevronDown, 
  ShoppingBasket, Utensils, Heart, Award, Sparkles, Store
} from 'lucide-react';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const storeData = {
    name: "Annai Stores",
    phone: "+919360312145",
    address: "Thonugal Vilakku, Sabalaipathur, NH7 Salaipudur, Tirunelveli, Tamil Nadu 628503",
    hours: "6:00 AM - 11:00 PM",
    categories: [
      { title: "Rice & Grains", desc: "Premium Ponni & Basmati rice.", icon: <ShoppingBasket />, color: "bg-blue-500" },
      { title: "Oils & Ghee", desc: "Pure Groundnut & Sunflower oils.", icon: <Zap />, color: "bg-orange-500" },
      { title: "Dals & Pulses", desc: "Protein-rich fresh pulses.", icon: <Check />, color: "bg-green-500" },
      { title: "Spices & Masala", desc: "Freshly ground aromatic spices.", icon: <Utensils />, color: "bg-red-500" },
      { title: "Dairy Products", desc: "Fresh Milk & Curd every morning.", icon: <Heart />, color: "bg-pink-500" },
      { title: "Snacks & Biscuits", desc: "Branded snacks & local treats.", icon: <Star />, color: "bg-yellow-500" },
      { title: "Personal Care", desc: "Soaps, Shampoos & Essentials.", icon: <ShieldCheck />, color: "bg-indigo-500" },
      { title: "Home Hygiene", desc: "Cleaning & laundry supplies.", icon: <Award />, color: "bg-teal-500" },
      { title: "Beverages", desc: "Tea, Coffee & Cold Drinks.", icon: <Sparkles />, color: "bg-purple-500" },
    ],
    faqs: [
      { q: "Is it located exactly on NH7?", a: "Yes! We are located right at Thonugal Vilakku on the NH7 Highway, making it easy for travelers to Tirunelveli to stop by." },
      { q: "Do you provide bulk orders for functions?", a: "Yes, we handle bulk orders for rice, oil, and provisions for weddings and local events." },
      { q: "Are digital payments accepted?", a: "We accept all UPI payments including Google Pay, PhonePe, and Paytm." }
    ]
  };

  // --- ANIMATION VARIANTS ---
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const handleCall = () => window.open(`tel:${storeData.phone}`);
  const openMap = () => window.open("https://maps.app.goo.gl/rcYTycSSRFEiqzXG8", "_blank");

  return (
    <div className="overflow-x-hidden bg-[#fcfcfc] text-slate-900 font-sans selection:bg-orange-200">
      
      {/* 1. NAV BAR */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-xl rotate-3 shadow-lg shadow-orange-200">
              <Store className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-slate-900">Annai Stores</span>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={handleCall} 
            className="bg-black text-white px-6 py-3 rounded-2xl text-xs font-black flex items-center gap-2 shadow-xl shadow-black/10"
          >
            <PhoneForwarded size={16} /> CALL SHOP
          </motion.button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative min-h-[90vh] flex items-center bg-slate-950 px-6 py-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 bg-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] text-white uppercase mb-6">
              <Sparkles size={12}/> Best Local Provisions
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
              QUALITY <br/> <span className="text-orange-500">YOU CAN</span> <br/> TASTE.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 font-medium leading-relaxed">
              Serving the Sabalaipathur & Tirunelveli community with fresh groceries on the NH7 highway.
            </p>
            <div className="flex gap-4">
              <button onClick={openMap} className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase hover:bg-orange-500 hover:text-white transition-all shadow-2xl">Find Us</button>
              <button onClick={handleCall} className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase hover:bg-white/10">Call To Order</button>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-1 rounded-[3rem] shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700">
               <div className="bg-slate-900 rounded-[2.8rem] p-12 overflow-hidden relative">
                  <ShoppingBag size={200} className="text-white/5 absolute -bottom-10 -right-10" />
                  <h2 className="text-4xl font-black text-white mb-4">6:00 AM</h2>
                  <p className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-8 italic">Open Every Morning</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80 font-bold"><Check className="text-orange-500"/> Fresh Dairy Products</div>
                    <div className="flex items-center gap-3 text-white/80 font-bold"><Check className="text-orange-500"/> Quality Rice & Grains</div>
                    <div className="flex items-center gap-3 text-white/80 font-bold"><Check className="text-orange-500"/> Household Essentials</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. CATEGORIES SECTION (WITH CREATIVE HOVER) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-none">Our <br/><span className="text-orange-600">Inventory</span></h2>
          </div>
          <p className="max-w-xs text-slate-500 font-bold text-sm">We provide high-quality provisions at competitive prices in the Tirunelveli district.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {storeData.categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all"
            >
              {/* Creative Hover Background Reveal */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${cat.color} mix-blend-soft-light`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-orange-600 transition-colors">{cat.title}</h3>
                <p className="text-slate-500 font-medium group-hover:text-slate-900 transition-colors">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE US (OUTSIDE-TO-INSIDE ANIMATION) */}
      <section className="bg-slate-50 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-black tracking-tighter leading-tight uppercase mb-12 italic">The Best <br/> Provision Store <br/> <span className="text-orange-600">On The Highway</span></h2>
            <div className="space-y-10">
              {[
                { t: "NH7 Access", d: "Convenient parking for cars & trucks at Thonugal Vilakku.", icon: <Navigation/> },
                { t: "Direct Sourcing", d: "Fresh products sourced directly for the best price.", icon: <Truck/> },
                { t: "Fast Service", d: "No long queues. Quick shopping for Alampatti locals.", icon: <Zap/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-orange-600 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-xl mb-1 italic">{item.t}</h4>
                    <p className="text-slate-500 font-bold">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="bg-black rounded-[3rem] p-12 text-white shadow-2xl rotate-2"
          >
            <h3 className="text-3xl font-black mb-6 uppercase italic text-orange-500">Our Promise</h3>
            <p className="text-slate-400 font-bold text-lg leading-relaxed mb-8 italic">"We provide honest weighing and pure quality grains at prices that beat the city supermarkets."</p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
               <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center font-black">AS</div>
               <div>
                  <p className="font-black italic">Annai Stores</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Est. Quality Supplier</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. ACCURATE LOCATION SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Visit Our Location</h2>
            <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">Thonugal Vilakku • NH7 Salaipudur • 628503</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 items-stretch">
            <motion.div 
              initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="lg:col-span-3 h-[500px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative"
            >
              <iframe
                title="Exact Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.85215!2d77.893086!3d9.172432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f1606e123457%3A0x123456789abcdef!2sSabalaipathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              ></iframe>
              <button onClick={openMap} className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl font-black text-xs flex items-center gap-2 shadow-2xl hover:bg-orange-600 transition-all">
                GET EXACT DIRECTIONS <ExternalLink size={16}/>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="bg-orange-600 rounded-[3rem] p-10 flex flex-col justify-center text-white"
            >
              <MapPin size={40} className="mb-6"/>
              <h3 className="text-2xl font-black italic mb-4">Our Address</h3>
              <p className="font-bold text-orange-100 leading-relaxed text-sm mb-10">{storeData.address}</p>
              <button onClick={handleCall} className="bg-white text-orange-600 p-5 rounded-2xl font-black text-sm shadow-xl">
                 CALL OWNER
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black text-center mb-16 uppercase italic">Common Questions</motion.h2>
        <div className="space-y-4">
          {storeData.faqs.map((faq, i) => (
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i*0.1 }} viewport={{ once: true }} key={i} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex justify-between items-center text-left font-black text-lg group">
                {faq.q}
                <ChevronDown className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-orange-600' : 'group-hover:text-orange-600'}`} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.5 }} className="px-8 pb-8 text-slate-500 font-bold leading-relaxed">
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            className="bg-orange-600 p-5 rounded-[2rem] mb-8 rotate-12"
          >
            <ShoppingBag size={48} />
          </motion.div>
          <h2 className="text-5xl font-black tracking-tighter mb-4 italic">ANNAI STORES</h2>
          <p className="text-slate-500 font-black tracking-[0.3em] text-[10px] uppercase mb-16">Thonugal Vilakku • NH7 • Tirunelveli • 628503</p>
          
          <div className="w-full grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16 mb-16">
            <div className="text-center md:text-left">
              <h4 className="text-orange-600 font-black text-xs uppercase tracking-widest mb-6 underline">The Shop</h4>
              <p className="text-slate-400 text-sm font-bold leading-relaxed">Trusted general provision store serving travelers and residents since years.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-orange-600 font-black text-xs uppercase tracking-widest mb-6 underline">Timings</h4>
              <p className="text-white text-lg font-black italic">6:00 AM - 11:00 PM</p>
              <p className="text-slate-500 text-xs font-bold mt-2 uppercase tracking-widest">Open Every Day</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-orange-600 font-black text-xs uppercase tracking-widest mb-6 underline">Quick Access</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <button onClick={handleCall} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all"><Phone size={20}/></button>
                <button onClick={openMap} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all"><MapPin size={20}/></button>
              </div>
            </div>
          </div>
          <p className="text-slate-800 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Annai Stores Sabalaipathur
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
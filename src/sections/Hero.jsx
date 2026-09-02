import { motion } from 'framer-motion';
import heroGraphic from '../assets/about-graphic.svg';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 bg-wine">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-ochre uppercase mb-6"
          >
            Full Stack Developer — building real AI systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-sand leading-tight whitespace-nowrap"
          >
            Fathima Haris
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-sand leading-tight mb-8"
          >
            builds <span className="text-ochre italic">working systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="max-w-xl text-sand/80 text-base md:text-lg leading-relaxed mb-16"
          >
            Currently building toward AI/ML engineering — starting with{' '}
            <span className="text-ochre">full-stack and LLM systems work</span> now, an MCA in AI/ML next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-mono text-xs text-sand/40 tracking-widest uppercase"
          >
            Scroll ↓
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <img src={heroGraphic} alt="" className="w-full max-h-[500px] object-contain rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

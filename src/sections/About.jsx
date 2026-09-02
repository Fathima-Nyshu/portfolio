import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="bg-sand min-h-screen flex flex-col px-6 md:px-16 pt-28 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-4xl md:text-6xl font-bold mb-12 text-center text-wine"
      >
        About
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full flex-1">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="border-2 border-ochre/40 rounded-xl p-10 max-w-md w-full min-h-[280px] flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-ochre animate-pulse"></span>
            <span className="font-mono text-xs text-wine/60 uppercase tracking-widest">Currently building</span>
          </div>
          <p className="font-serif text-2xl font-bold text-wine">AI/ML engineering</p>
          <p className="font-mono text-xs text-wine/50 mt-3">starting with full-stack + LLM systems</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-wine mb-6 italic">
            I build things I can explain line by line.
          </h3>

          <p className="text-wine/80 text-sm md:text-base leading-relaxed mb-4">
            I'm a <span className="text-ochre-dark font-semibold">Full-Stack Developer</span> building AI-powered applications, React and Node.js on the surface, retrieval and routing logic underneath.
          </p>

          <p className="text-wine/80 text-sm md:text-base leading-relaxed mb-4">
            I've shipped two projects end-to-end: <span className="text-ochre-dark font-semibold">DocuMind AI</span>, a RAG-based document Q&A app, and <span className="text-ochre-dark font-semibold">LLM Gateway</span>, an API layer handling rate limiting, caching, and multi-provider fallback. Both are live, both are open-source, and I document what each one does and doesn't handle well yet.
          </p>

          <p className="text-wine/80 text-sm md:text-base leading-relaxed">
            Currently building toward <span className="text-ochre-dark font-semibold">AI/ML engineering</span>, starting with full-stack and LLM systems work now, an MCA in AI/ML next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

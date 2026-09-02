import { motion } from 'framer-motion';
import documindPreview from '../assets/documind-preview.png';
import llmgatewayPreview from '../assets/llmgateway-preview.png';

const projects = [
  {
    title: 'DocuMind AI',
    tagline: 'RAG-based document Q&A with page-level citations',
    description: 'Upload PDFs, ask questions in plain English, get answers grounded in your own material, with the exact source and page number for every claim. Handles multi-document comparison with balanced retrieval across sources.',
    stack: ['React', 'Node.js', 'MongoDB Atlas', 'Gemini API'],
    live: 'https://documind-ai-sandy-eta.vercel.app',
    github: 'https://github.com/Fathima-Nyshu/documind-ai',
    image: documindPreview,
    bg: 'bg-sand',
    textColor: 'text-wine',
    mutedColor: 'text-wine/70',
  },
  {
    title: 'LLM Gateway',
    tagline: 'API gateway for LLM providers',
    description: 'Handles authentication, rate limiting, cost tracking, quota management, response caching, and automatic provider failover, sitting between applications and LLM providers so no single app deals with API keys or outages directly.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'React'],
    live: 'https://llm-gateway-weld.vercel.app',
    github: 'https://github.com/Fathima-Nyshu/LLM-gateway',
    image: llmgatewayPreview,
    bg: 'bg-wine',
    textColor: 'text-sand',
    mutedColor: 'text-sand/70',
  },
];

function ProjectSection({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className={project.bg + ' min-h-screen flex flex-col px-6 md:px-16 pt-28 pb-16'}>
      {index === 0 && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={'font-serif text-4xl md:text-6xl font-bold mb-12 text-center ' + project.textColor}
        >
          Projects
        </motion.h2>
      )}

      <div className={'max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full flex-1 ' + (isEven ? '' : 'md:[direction:rtl]')}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
          className="border-4 border-ochre rounded-2xl overflow-hidden shadow-xl md:[direction:ltr] cursor-pointer"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:[direction:ltr]"
        >
          <p className="font-mono text-xs tracking-widest text-ochre uppercase mb-3">
            {String(index + 1).padStart(2, '0')} / Selected Work
          </p>
          <h3 className={'font-serif text-3xl md:text-4xl font-bold mb-2 ' + project.textColor}>
            {project.title}
          </h3>
          <p className="text-ochre-dark text-sm font-medium mb-5">{project.tagline}</p>
          <p className={'text-sm md:text-base leading-relaxed mb-6 ' + project.mutedColor}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={'font-mono text-xs border rounded-full px-3 py-1 border-ochre/40 ' + project.mutedColor}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ochre hover:opacity-70 transition-opacity"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={'text-sm font-semibold hover:opacity-70 transition-opacity ' + project.textColor}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div id="projects">
      {projects.map((project, i) => (
        <ProjectSection key={project.title} project={project} index={i} />
      ))}
    </div>
  );
}

export default Projects;

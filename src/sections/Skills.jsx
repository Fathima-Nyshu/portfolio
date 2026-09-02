import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Redis',
  'REST APIs',
  'Git & GitHub',
  'Tailwind CSS',
];

const stats = [
  { number: '02', label: 'Live Projects' },
  { number: '100%', label: 'Own Code' },
  { number: '2026', label: 'BCA Graduate' },
];

function Skills() {
  return (
    <section className="bg-wine min-h-screen flex items-center px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-widest text-ochre uppercase mb-3">What I Work With</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sand mb-8">Skills</h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-sand/80 text-base border-b border-sand/10 pb-2"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            {stats.slice(0, 2).map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.06, y: -4 }}
                className="bg-sand border-2 border-ochre rounded-xl px-8 py-6 text-center cursor-pointer shadow-lg"
              >
                <p className="font-serif text-3xl font-bold text-wine">{stat.number}</p>
                <p className="font-mono text-xs text-wine/60 uppercase tracking-wide mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.06, y: -4 }}
            className="bg-sand border-2 border-ochre rounded-xl px-8 py-6 text-center cursor-pointer shadow-lg"
          >
            <p className="font-serif text-3xl font-bold text-wine">{stats[2].number}</p>
            <p className="font-mono text-xs text-wine/60 uppercase tracking-wide mt-1">{stats[2].label}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

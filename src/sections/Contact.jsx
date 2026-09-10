import { motion } from 'framer-motion';

const links = [
  { label: 'Resume', value: 'View / Download', href: '#', external: false },
  { label: 'Email', value: 'fathimannhl5@gmail.com', href: 'mailto:fathimannhl5@gmail.com', external: false },
  { label: 'LinkedIn', value: 'linkedin.com/in/fathimanyshu-dev', href: 'https://linkedin.com/in/fathimanyshu-dev', external: true },
  { label: 'GitHub', value: 'github.com/Fathima-Nyshu', href: 'https://github.com/Fathima-Nyshu', external: true },
];

const tilt = '-0.8deg';

function Contact() {
  return (
    <section id="contact" className="bg-ochre min-h-screen flex flex-col justify-center px-6 md:px-24 py-24">
      <div className="max-w-2xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-wine/70 uppercase mb-4"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-bold text-wine mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-wine/80 text-base md:text-lg mb-16"
        >
          Open to internship opportunities and interesting problems to solve.
        </motion.p>

        <div className="pl-4 sm:pl-6 md:pl-10">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="relative py-6 group"
            >
              <div
                className="absolute bottom-0 border-b border-wine/30"
                style={{
                  transform: 'rotate(' + tilt + ')',
                  left: (-(i + 1) * 2.2) + 'vw',
                  right: (i * 0.6) + 'vw',
                }}
              ></div>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between gap-4 transition-all duration-300 group-hover:-translate-x-3"
              >
                <span className="shrink-0 font-mono text-xs italic text-wine/60 uppercase tracking-widest group-hover:text-wine transition-colors">
  {link.label}
</span>
<span className="min-w-0 break-all text-right font-mono text-base sm:text-lg md:text-2xl italic text-wine font-semibold group-hover:text-sand transition-colors">
  {link.value}
</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

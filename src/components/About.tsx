'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none text-left text-[var(--text-secondary)]"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl mb-8">
            La Nostra Storia
          </h2>
          <p className="text-lg leading-relaxed">
            Il nostro ristorante nasce dalla passione per la cucina autentica e dall&apos;amore per l&apos;ospitalità. Fondato da Marco Rossi, un giovane chef con un&apos;esperienza internazionale, il nostro obiettivo è offrire un&apos;esperienza culinaria unica, dove tradizione e innovazione si incontrano.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Utilizziamo solo ingredienti freschi e di stagione, provenienti da fornitori locali, per garantire la massima qualità e sostenibilità. Ogni piatto è pensato per esaltare i sapori autentici della cucina italiana, con un tocco di creatività che sorprende e delizia.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 w-full lg:h-[500px] glassmorphism rounded-xl overflow-hidden"
        >
          <Image
            alt="Il proprietario del ristorante"
            src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
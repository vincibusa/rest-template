'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="bg-[var(--background-color)] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div className="flex flex-col">
            <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold text-[var(--text-primary)] md:text-5xl">Contattaci</motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-base leading-relaxed text-[var(--text-secondary)]">
              Siamo a tua disposizione per qualsiasi informazione. Contattaci o vieni a trovarci per un'esperienza culinaria unica.
            </motion.p>
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-[var(--primary-color)]">location_on</span>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Indirizzo</h3>
                  <p className="text-[var(--text-secondary)]">Via Roma, 123, 20121 Milano, Italia</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-[var(--primary-color)]">call</span>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Telefono</h3>
                  <p className="text-[var(--text-secondary)]">+39 02 1234 5678</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-[var(--primary-color)]">mail</span>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Email</h3>
                  <p className="text-[var(--text-secondary)]">info@ristorante.it</p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div variants={itemVariants} className="h-80 w-full rounded-2xl md:h-full glassmorphism overflow-hidden">
            <iframe
              className="size-full rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.887241285044!2d9.18854031589414!3d45.46421397910018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae452de7d9%3A0x2f8d8f4c3a5b2e0b!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1678886565321!5m2!1sit!2sit"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
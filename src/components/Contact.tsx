'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-[var(--background-color)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="flex flex-col">
            <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold text-[var(--text-primary)] md:text-5xl">Contattaci</motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-base leading-relaxed text-[var(--text-secondary)]">
              Siamo a tua disposizione per qualsiasi informazione. Contattaci o vieni a trovarci per un'esperienza culinaria unica.
            </motion.p>
            <div className="space-y-4 md:space-y-6">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Indirizzo</h3>
                  <p className="text-[var(--text-secondary)]">Via Roma, 123, 20121 Milano, Italia</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Telefono</h3>
                  <p className="text-[var(--text-secondary)]">+39 02 1234 5678</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Email</h3>
                  <p className="text-[var(--text-secondary)]">info@ristorante.it</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Orari</h3>
                  <p className="text-[var(--text-secondary)]">Lun-Sab: 12:00-15:00, 19:00-23:00<br />Domenica: 19:00-23:00</p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <div className="h-64 w-full rounded-2xl glassmorphism overflow-hidden md:h-80">
              <iframe
                className="size-full rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.887241285044!2d9.18854031589414!3d45.46421397910018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae452de7d9%3A0x2f8d8f4c3a5b2e0b!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1678886565321!5m2!1sit!2sit"
                title="Mappa del Ristorante Aurora"
                aria-label="Mappa con la posizione del ristorante"
              />
            </div>
            
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
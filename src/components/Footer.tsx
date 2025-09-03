'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-[var(--secondary-color)] py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center gap-4">
            <svg
              className="h-8 w-8 text-[var(--primary-color)]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
            </svg>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Ristorante
            </h2>
          </div>
          <div className="mt-8 flex gap-6 lg:mt-0">
            <Link href="/menu" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              Menù
            </Link>
            <Link href="/#about" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              Chi Siamo
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              Contatti
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
          © 2024 Ristorante. Tutti i diritti riservati.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
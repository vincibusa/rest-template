'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Immagine di sfondo di un piatto gourmet"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15ydSma3tkoTHboGjkGUhnCY25SZ44E1lXVEIOSlUivFsSkJDfCdsKGAaTK6hvH5N6KxluyynUJyfCZ5yct1AWy6h-u55_r0Qvutk0aOUv7-Q7cyEGp5gS8TqRz_P2Oq6BDnIPA6gQcyzxvAdCgj6dV623ALGT-xSCwlQCcv86fECMejiAAJ87_cM7ABhWVGiAqbfS4QyBXh6gRcHSQherdqOR-HGtbKvy2pDcmCO0PAJvxpV4vQK5MqjJw_6kWcQg6DKnkkq0Ak"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 glassmorphism flex flex-col items-center justify-center rounded-2xl p-8 text-center text-white shadow-lg md:p-16 max-w-3xl mx-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl text-[var(--text-primary)]"
        >
          Ristorante Aurora
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl"
        >
          Scopri un'esperienza culinaria indimenticabile, dove la tradizione incontra l'innovazione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/menu"
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[var(--primary-color)] px-8 py-3 text-base font-bold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50"
          >
            Visualizza il Menu
          </Link>
          <button
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-[var(--primary-color)] bg-transparent px-8 py-3 text-base font-bold text-[var(--primary-color)] shadow-md backdrop-blur-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-[var(--primary-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          >
            Prenota un Tavolo
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
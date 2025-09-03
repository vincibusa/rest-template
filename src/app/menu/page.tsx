'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="sticky top-16 bg-[var(--background-color)]/80 backdrop-blur-sm z-40 py-4 mb-8 rounded-lg glassmorphism"
      >
        <div className="flex justify-center border-b border-[var(--glass-border)] gap-4 sm:gap-8">
          <a href="#antipasti" className="flex flex-col items-center justify-center border-b-2 border-b-[var(--primary-color)] text-[var(--text-primary)] pb-3 pt-2 px-2">
            <p className="text-sm sm:text-base font-bold">Antipasti</p>
          </a>
          <a href="#primi" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-b-[var(--primary-color)]/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Primi</p>
          </a>
          <a href="#secondi" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-b-[var(--primary-color)]/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Secondi</p>
          </a>
          <a href="#dolci" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-b-[var(--primary-color)]/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Dolci</p>
          </a>
        </div>
      </motion.div>

      <motion.section
        id="antipasti"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center sm:text-left">Antipasti</h2>
        <motion.div
          className="space-y-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Bruschetta al Pomodoro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-pIHcmKQVRz34Z-UkT8Rr53nRujVzjSiNl9Oe5-2GlpU4lqqycZaTZhX0YLYProGI7KWUa85L6Drp9LP3VR0AgpdOi2LUFwcVk18opYaNTbyRBeZ-N4jiOLz1l5KTxQ3axPPUsoNm5Tt2E9TZYckRUBJI2Dpw0gHJIMzKdaE_sZMrebCqbVr63z7Cd0F6_Ta1FIVp0kD8pk2X75KXOKh1L3_6eo9YSudtrtRE_F9Pct3LcDjDE_wrFJMiWHnVJLa_GOKoluKw9U" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Bruschetta al Pomodoro</h3>
              <p className="text-sm text-[var(--text-secondary)]">Pane tostato con pomodori freschi, basilico e olio extravergine.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€8.00</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Carpaccio di Manzo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgILdWeoHsNpSZo4JISzc1PZoRwxLdaO_EVGPMsoXYs2Lk-fAChtNLdmR2xVdEe1CgMyWtbmzL2YSprHnuAgiUAn1rMT3YO8Se-aZbeGMhWdwFL4b5FGJy5TTSu--O_m2OXI2kkUnZoKJNeo6_y56_8UEG3zW6gKqTWwTOeY1dtJfBMAJXnDrKDQv4uZo8m9Z4eyvZN1A6MJxy7V65UAh536m94WSl_dyYP07niNVJG6zVIMBuyKwzGrGbStS9l9IJLq-rlzGGQ" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Carpaccio di Manzo</h3>
              <p className="text-sm text-[var(--text-secondary)]">Sottili fette di manzo crudo con scaglie di parmigiano e rucola.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€12.00</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="primi"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center sm:text-left">Primi</h2>
        <motion.div
          className="space-y-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Spaghetti alla Carbonara" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBz2qI3w5wJyWoeOtjF1a_Ap64dZ8QL0n7a_fXontabEhs0yBCt54ura1A9a4QfEGkd5VfdYcXO8KqNGp3ftOupjiDoyFs6lTBoPUI49EMK1o8HtQIa-vqIk0PBmhM69ohSsWr4Ef0CKxgxZfmStc5XgcqgL74rG9uUFEF1d9pADArxxi33xf2BL8PwFqHVtwOjJIShWmpMKgbNBfbosNfNa7jBT7XVQu37ncn7uUYLiopcW5Othiwq_aboo0d18o9v2kxU2jofKI" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Spaghetti alla Carbonara</h3>
              <p className="text-sm text-[var(--text-secondary)]">Spaghetti con uova, guanciale, pecorino romano e pepe nero.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€14.00</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Risotto ai Funghi Porcini" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsG4Co13F7w5E1Zt6ceerIYR0fXAESxbLYV-05HgX2cEKULLqGIMDKaZ2io7tWmLMri3hiGOiQO7Zu0gWJtNwRo-eef9wrkwkTGnPcKZKNJcQ6lSmGD0Rl39PVfMDxWnqeS6kpF_sFusCLvVjsF1o6rY2xACPbJAfeajgSmRWaL5bnBfSJeSQ-rrj5dC24A5UyOu0P5Q7Z5nIzA3SVoH2_keaZSJCGn7or3gg6XXBL2o7VgCyod42pb8nJuDdGXBTAv0XmCIH0GM" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Risotto ai Funghi Porcini</h3>
              <p className="text-sm text-[var(--text-secondary)]">Risotto cremoso con funghi porcini freschi.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€16.00</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="secondi"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center sm:text-left">Secondi</h2>
        <motion.div
          className="space-y-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Bistecca alla Fiorentina" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymLSZxb2_FE5kb3hCN2wG9Y6ouGZeb6jYaOqpngCI1LaRLMozvnussgXoh6vqsCpjEVfywUvWNO82z85wy1cNJIO9snF9fwGSbFOIniBcQTi7Nu8IGZp5cj-lld4nwzDHI_pzX93jyhIkSEl_MRt6i2jbJM5qLXa-i9IJrFE86TW5rXVICDS4ez8Kryw6TGCqF5FSRSW6j521WPUDJZYVSqVe232-If89o6gQhy2MKr0SzNj-YyYMuVb80R5gWDQBBCTxB8bQ48o" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Bistecca alla Fiorentina</h3>
              <p className="text-sm text-[var(--text-secondary)]">Bistecca di manzo cotta alla griglia, tipica di Firenze.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€28.00</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Ossobuco alla Milanese" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG0TXwKP3Bw8zT4AmtwVbwlHEEDV86D74-khtLKqS8phDU2uN5TVDOjI3y08cRe7a_iMRcyrX0MVzU8qGgWrwQcfop33yrnt-MX2BfYXozDs0CFHj6ZjHMEZ9uheuacQtOa8XPlVd69wXunv1vuUFEM87VZ8PIFngxzVJBETfZ8WFo-1dcyCtSAUhBT3R__s2qfiXJU7phX5U0JkhKsLjO1tTM9mF_l2fjCGPWgkCTZIqYdTWmuI3I4YKzIwnorZ17_meiST504oY" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Ossobuco alla Milanese</h3>
              <p className="text-sm text-[var(--text-secondary)]">Stinco di vitello brasato con verdure e vino bianco.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€25.00</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="dolci"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center sm:text-left">Dolci</h2>
        <motion.div
          className="space-y-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Tiramisù" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHbCENPkzlp5NHwQJGIaX9Ploihd5dmdiYo6mGlvRrFxGK9Iu70Fk42zRAerXsnHylSVhBpwdGC2HUknw8B6_QzNDDJ9pBAvM6AgNt1__2ECFxqsb-LU3lnYbHSKjzkqmy6Z9wvDOK259Irx09jby01sQryIwAnjIQzvU0CZaV1HY83JWLo8WFdB6k5qWF1gJ60mNnNvYicbMfyJ7ep1zvBv3bcn47Yp96uDZky8RUkxJHJWumVtvZdCT__hFWxQs-csZ7dx_F9EI" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Tiramisù</h3>
              <p className="text-sm text-[var(--text-secondary)]">Dolce al cucchiaio con savoiardi, caffè, mascarpone e cacao.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€7.00</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Panna Cotta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNUyE1vMrsU8eRHCWtRX0pEEmWNjZK70qTY_yX_plOmCS2LkwxpUAZFlvNKpUhkri7h-R7XSb5TNNViJoscfNZwB_EEhZoIiCF49O-9Jc689WcjHpFM9a5tcKZssVIiwKJhQrz9SIOK6SW-uWTkbihCQ6vudLg2xmk_XqdxTbMSYlqp6zpdwHte6J7B8Za1Ns_s7LXRtenp8N47V1h0KkrEKHHWjD8hjEdUq-689UHv6dSlokckcI5MzbPg7ObG7Wq7tUeXyAftCY" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Panna Cotta</h3>
              <p className="text-sm text-[var(--text-secondary)]">Crema cotta con panna, zucchero e vaniglia.</p>
            </div>
            <p className="text-lg font-bold text-[var(--primary-color)]">€7.00</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 transition duration-200 ease-in-out text-lg font-bold"
        >
          <span className="truncate">Prenota un tavolo</span>
        </motion.button>
      </div>
    </div>
  );
};

export default MenuPage;
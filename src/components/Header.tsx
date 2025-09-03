'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenReservation: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
      className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8 glassmorphism"
    >
      <div className="flex items-center gap-4">
        <svg
          className="h-8 w-8 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
        </svg>
        <h1 className="text-xl font-bold tracking-tighter text-[var(--text-primary)]">
          Ristorante
        </h1>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
          Home
        </Link>
        <Link href="/menu" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
          Menù
        </Link>
        <Link href="/#about" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
          Chi Siamo
        </Link>
        <Link href="/#gallery" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
          Galleria
        </Link>
        <Link href="/#contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
          Contatti
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenReservation}
          className="flex h-10 w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--primary-color)] px-4 text-sm font-medium text-white transition-colors hover:bg-opacity-90"
        >
          Prenota
        </motion.button>
        <button className="md:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] transition-colors hover:bg-[var(--primary-color)] hover:text-white">
          <svg
            fill="currentColor"
            height="20px"
            viewBox="0 0 256 256"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,88H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
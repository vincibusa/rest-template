'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm bg-black/10"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="glassmorphism w-full max-w-full sm:max-w-lg rounded-3xl p-8 shadow-2xl relative border border-[var(--glass-border)] max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[var(--text-primary)] hover:text-[var(--primary-color)] text-2xl transition-colors"
            >
              &times;
            </button>
            <h2 className="text-center text-4xl font-bold text-[var(--text-primary)] mb-8">Prenota un Tavolo</h2>
            <form className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Nome</label>
                <div className="relative">

                  <input
                    id="name"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    placeholder="Il tuo nome"
                    type="text"
                  />
                </div>
              </div>

              {/* Cognome */}
              <div>
                <label htmlFor="surname" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Cognome</label>
                <div className="relative">

                  <input
                    id="surname"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    placeholder="Il tuo cognome"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Email</label>
                <div className="relative">

                  <input
                    id="email"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    placeholder="La tua email"
                    type="email"
                  />
                </div>
              </div>

              {/* Telefono */}
              <div>
                <label htmlFor="phone" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Numero di Telefono</label>
                <div className="relative">

                  <input
                    id="phone"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    placeholder="Il tuo numero di telefono"
                    type="tel"
                  />
                </div>
              </div>

              {/* Data */}
              <div>
                <label htmlFor="date" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Data</label>
                <div className="relative">

                  <input
                    id="date"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    placeholder="Seleziona una data"
                    type="text"
                  />
                </div>
              </div>

              {/* Ora */}
              <div>
                <label htmlFor="time" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Ora</label>
                <div className="relative">

                  <select
                    id="time"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    defaultValue=""
                  >
                    <option className="text-[var(--text-primary)]" disabled>Seleziona un&apos;ora</option>
                    <option className="text-[var(--text-primary)]" value="19:00">19:00</option>
                    <option className="text-[var(--text-primary)]" value="19:30">19:30</option>
                    <option className="text-[var(--text-primary)]" value="20:00">20:00</option>
                    <option className="text-[var(--text-primary)]" value="20:30">20:30</option>
                    <option className="text-[var(--text-primary)]" value="21:00">21:00</option>
                  </select>
                </div>
              </div>

              {/* Numero di persone */}
              <div>
                <label htmlFor="guests" className="block text-[var(--text-primary)] text-sm font-bold mb-2">Numero di persone</label>
                <div className="relative">

                  <select
                    id="guests"
                    className="w-full rounded-xl px-4 py-4 bg-white/10 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-300 border border-[var(--glass-border)]"
                    defaultValue=""
                  >
                    <option className="text-[var(--text-primary)]" disabled>Numero di persone</option>
                    <option className="text-[var(--text-primary)]" value="1">1 Persona</option>
                    <option className="text-[var(--text-primary)]" value="2">2 Persone</option>
                    <option className="text-[var(--text-primary)]" value="3">3 Persone</option>
                    <option className="text-[var(--text-primary)]" value="4">4 Persone</option>
                    <option className="text-[var(--text-primary)]" value="5+">5+ Persone</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl py-4 bg-[var(--primary-color)] text-white text-lg font-bold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                Trova un Tavolo
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;

import { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white/20 backdrop-blur-md w-full max-w-lg rounded-3xl p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-center text-4xl font-bold text-white mb-8">Prenota un Tavolo</h2>
        <form className="space-y-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-4 text-white/70">calendar_today</span>
            <input
              className="form-input w-full rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              placeholder="Seleziona una data"
              type="text"
            />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-4 text-white/70">schedule</span>
            <select className="form-input w-full rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300" defaultValue="">
              <option className="text-black" disabled>Seleziona un'ora</option>
              <option className="text-black" value="19:00">19:00</option>
              <option className="text-black" value="19:30">19:30</option>
              <option className="text-black" value="20:00">20:00</option>
              <option className="text-black" value="20:30">20:30</option>
              <option className="text-black" value="21:00">21:00</option>
            </select>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-4 text-white/70">group</span>
            <select className="form-input w-full rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300" defaultValue="">
              <option className="text-black" disabled>Numero di persone</option>
              <option className="text-black" value="1">1 Persona</option>
              <option className="text-black" value="2">2 Persone</option>
              <option className="text-black" value="3">3 Persone</option>
              <option className="text-black" value="4">4 Persone</option>
              <option className="text-black" value="5+">5+ Persone</option>
            </select>
          </div>
          <button className="w-full rounded-xl py-4 bg-red-600 text-white text-lg font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Trova un Tavolo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;

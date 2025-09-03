'use client';

import { useState } from 'react';
import Header from './Header';
import ReservationModal from './ReservationModal';

interface LayoutClientProps {
  children: React.ReactNode;
}

const LayoutClient: React.FC<LayoutClientProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenReservation={openModal} />
      <main>{children}</main>
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LayoutClient;

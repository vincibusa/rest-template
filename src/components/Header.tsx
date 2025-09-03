
import Link from 'next/link';

interface HeaderProps {
  onOpenReservation: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <svg
          className="h-8 w-8 text-red-600"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
        </svg>
        <h1 className="text-xl font-bold tracking-tighter text-gray-900">
          Ristorante
        </h1>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
          Home
        </Link>
        <Link href="/menu" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
          Menù
        </Link>
        <Link href="/#about" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
          Chi Siamo
        </Link>
        <Link href="/#gallery" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
          Galleria
        </Link>
        <Link href="/#contact" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
          Contatti
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenReservation}
          className="flex h-10 w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-red-100 px-4 text-sm font-medium text-red-600 transition-colors hover:bg-red-200"
        >
          Prenota
        </button>
        <button className="md:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-200">
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
    </header>
  );
};

export default Header;

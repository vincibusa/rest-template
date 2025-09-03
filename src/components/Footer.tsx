
const Footer = () => {
  return (
    <footer className="bg-red-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center gap-4">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
            </svg>
            <h2 className="text-xl font-bold text-gray-900">
              Ristorante
            </h2>
          </div>
          <div className="mt-8 flex gap-6 lg:mt-0">
            <a href="/menu" className="text-sm font-medium text-gray-600 hover:text-red-600">
              Menù
            </a>
            <a href="/#about" className="text-sm font-medium text-gray-600 hover:text-red-600">
              Chi Siamo
            </a>
            <a href="/#contact" className="text-sm font-medium text-gray-600 hover:text-red-600">
              Contatti
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          © 2024 Ristorante. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

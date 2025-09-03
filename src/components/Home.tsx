
import Image from 'next/image';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Immagine di sfondo di un piatto gourmet"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15ydSma3tkoTHboGjkGUhnCY25SZ44E1lXVEIOSlUivFsSkJDfCdsKGAaTK6hvH5N6KxluyynUJyfCZ5yct1AWy6h-u55_r0Qvutk0aOUv7-Q7cyEGp5gS8TqRz_P2Oq6BDnIPA6gQcyzxvAdCgj6dV623ALGT-xSCwlQCcv86fECMejiAAJ87_cM7ABhWVGiAqbfS4QyBXh6gRcHSQherdqOR-HGtbKvy2pDcmCO0PAJvxpV4vQK5MqjJw_6kWcQg6DKnkkq0Ak"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <main className="relative z-10 flex h-screen flex-col items-center justify-center p-4">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center rounded-2xl p-8 text-center text-white shadow-lg md:p-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">Ristorante Aurora</h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">Scopri un'esperienza culinaria indimenticabile, dove la tradizione incontra l'innovazione.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/menu"
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-base font-bold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Visualizza il Menu
            </a>
            <button
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-white bg-white/20 px-8 py-3 text-base font-bold text-white shadow-md backdrop-blur-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Prenota un Tavolo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

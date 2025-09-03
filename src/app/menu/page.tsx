
import Image from 'next/image';

const MenuPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-12">
        <Image
          alt="Hero image del ristorante"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6G6uOfpLKcenagqoBKXyKX8n4nOckwVUIfObT0lWiMDYv_GZZEtg8qs0EJgH-CNfDuPiacpGwu-2p8Z5g0r8Twkms5TByjNsRq3imwevTK3cX9tq0tikKzpn0vvIEfBSjvgEOViQX9kPZqlI27ahRCAFj6ZxV673JcwANix3Mg3DiFOHtuqjbFll62igOCsOQbp_tghGwojjk-5IhzvUMth-ys70bDe3u4qbtjrNT7M79pcigehFjoP7kJJoiQQBXoj62UxI-1Mk"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center tracking-tight">Il Nostro Menu</h1>
        </div>
      </div>

      <div className="sticky top-16 bg-white/80 backdrop-blur-sm z-40 py-4 mb-8">
        <div className="flex justify-center border-b border-gray-200 gap-4 sm:gap-8">
          <a href="#antipasti" className="flex flex-col items-center justify-center border-b-2 border-b-red-600 text-gray-900 pb-3 pt-2 px-2">
            <p className="text-sm sm:text-base font-bold">Antipasti</p>
          </a>
          <a href="#primi" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 hover:text-gray-900 hover:border-b-red-600/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Primi</p>
          </a>
          <a href="#secondi" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 hover:text-gray-900 hover:border-b-red-600/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Secondi</p>
          </a>
          <a href="#dolci" className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 hover:text-gray-900 hover:border-b-red-600/50 pb-3 pt-2 px-2 transition-colors">
            <p className="text-sm sm:text-base font-bold">Dolci</p>
          </a>
        </div>
      </div>

      <section id="antipasti" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">Antipasti</h2>
        <div className="space-y-6">
          {/* Item */}
          <div className="bg-white/40 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Bruschetta al Pomodoro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-pIHcmKQVRz34Z-UkT8Rr53nRujVzjSiNl9Oe5-2GlpU4lqqycZaTZhX0YLYProGI7KWUa85L6Drp9LP3VR0AgpdOi2LUFwcVk18opYaNTbyRBeZ-N4jiOLz1l5KTxQ3axPPUsoNm5Tt2E9TZYckRUBJI2Dpw0gHJIMzKdaE_sZMrebCqbVr63z7Cd0F6_Ta1FIVp0kD8pk2X75KXOKh1L3_6eo9YSudtrtRE_F9Pct3LcDjDE_wrFJMiWHnVJLa_GOKoluKw9U" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-gray-900">Bruschetta al Pomodoro</h3>
              <p className="text-sm text-gray-600">Pane tostato con pomodori freschi, basilico e olio extravergine.</p>
            </div>
            <p className="text-lg font-bold text-red-600">€8.00</p>
          </div>
          {/* ... other items ... */}
        </div>
      </section>

       <section className="mb-16 scroll-mt-24" id="primi">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center sm:text-left">Primi</h2>
        <div className="space-y-6">
          <div className="bg-white/40 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <Image alt="Spaghetti alla Carbonara" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBz2qI3w5wJyWoeOtjF1a_Ap64dZ8QL0n7a_fXontabEhs0yBCt54ura1A9a4QfEGkd5VfdYcXO8KqNGp3ftOupjiDoyFs6lTBoPUI49EMK1o8HtQIa-vqIk0PBmhM69ohSsWr4Ef0CKxgxZfmStc5XgcqgL74rG9uUFEF1d9pADArxxi33xf2BL8PwFqHVtwOjJIShWmpMKgbNBfbosNfNa7jBT7XVQu37ncn7uUYLiopcW5Othiwq_aboo0d18o9v2kxU2jofKI" width={80} height={80} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-gray-900">Spaghetti alla Carbonara</h3>
              <p className="text-sm text-gray-600">Spaghetti con uova, guanciale, pecorino romano e pepe nero.</p>
            </div>
            <p className="text-lg font-bold text-red-600">€14.00</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MenuPage;

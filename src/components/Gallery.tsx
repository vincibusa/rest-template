
import Image from 'next/image';

const Gallery = () => {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">Esplora il Nostro Ambiente</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Immergiti nell'atmosfera unica del nostro ristorante. Scopri gli interni eleganti e l'ambiente accogliente che rendono ogni visita un'esperienza indimenticabile.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="group relative overflow-hidden rounded-2xl col-span-1 md:col-span-2 lg:row-span-2">
          <Image
            alt="Interni del ristorante Gusto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFnAxz3M4aas1AdFgNxaI4aFD8UzFohFXOXP-6kX9J_tJ0BaLZjN-TmwkZrrCKnI0L6hnJnMCqAmh2bdGtcbXt1vG4GR1ljqTji3Tuoh6rkqwdeXw1HB_aTnz5oLdR3cx722YOyk4GxKsEdFTWMcP_p5oCmg7SgCjLhbg-6bHxpxOpZL0wUpdB2okcUvbBgVVWZt7awuRCjcGEdT5LDD1kFah175B0nAgK31ortzQw9ymfy0g6hP7t9PRGy3M4h0nldc2Yzg6mITw"
            width={800}
            height={1200}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 p-4 text-white bg-black/20 backdrop-blur-md m-4 rounded-lg">
            <h3 className="font-bold">Sala Principale</h3>
            <p className="text-sm opacity-90">Eleganza e comfort.</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl">
          <Image
            alt="Dettaglio di un piatto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCYZ2vCN_ZpIb6jeRprbyIQV2-kx8CTz3ivqOtE-3cYkXiqUVvmv2jD9loOY2fco7H28qf7Q-j91MoZZDZSzvTAdpt9RH3pVxVHcnJssMRwqaY2ffJxPa-30Pz7rlN4AIciUEmddDugtzTZs9cwLbCsRO8Bkv4XLx1Fl-KRngHm1eEcVMwMnROmTsj6xi8kk42QA5Wh5dgk366BFwKrzgAFcVaPkBvqhG3igkMGr6-6zOsbBiZjY7XOJ7i7zHJJs9kxWtReR_kZA0"
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 p-4 text-white bg-black/20 backdrop-blur-md m-4 rounded-lg">
            <h3 className="font-bold">Capesante Scottate</h3>
            <p className="text-sm opacity-90">Fresco e delizioso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Contattaci</h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              Siamo a tua disposizione per qualsiasi informazione. Contattaci o vieni a trovarci per un'esperienza culinaria unica.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-red-600">location_on</span>
                <div>
                  <h3 className="font-bold text-gray-900">Indirizzo</h3>
                  <p className="text-gray-600">Via Roma, 123, 20121 Milano, Italia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-red-600">call</span>
                <div>
                  <h3 className="font-bold text-gray-900">Telefono</h3>
                  <p className="text-gray-600">+39 02 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1 text-2xl text-red-600">mail</span>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ristorante.it</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-full rounded-2xl md:h-full">
            <iframe
              className="size-full rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.887241285044!2d9.18854031589414!3d45.46421397910018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae452de7d9%3A0x2f8d8f4c3a5b2e0b!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1678886565321!5m2!1sit!2sit"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

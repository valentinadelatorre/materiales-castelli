import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function SanitariosPage() {
  return (
    <div className="min-h-screen bg-black py-20 px-6 flex flex-col items-center justify-start space-y-12">

      <h2 className={`${poppins.className} text-white text-6xl font-extrabold text-center`}>Nuestros Sanitarios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">

        {/* Producto 1: capea italiana */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-400/60 group">
          <img
            src="https://i.postimg.cc/qRQmCCw9/Screenshot-2025-05-01-at-3-29-19-PM.png"
            alt="Inodoros"
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-black/40 rounded-xl p-3 w-[300px]">
              <h3 className="text-white text-2xl font-bold mb-4">Capea Italiana</h3>
              <a
                href="/produ/sanitarios/capeaitaliana"
                className="bg-cyan-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 w-max"
              >
                Ver opciones
              </a>
            </div>
          </div>
        </div>

        {/* Producto 2: monaco */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-400/60 group">
          <img
            src="https://i.postimg.cc/RV0Fk3Yq/Screenshot-2025-05-01-at-3-30-48-PM.png"
            alt="Grifería"
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-black/40 rounded-xl p-3 w-[300px]">
              <h3 className="text-white text-2xl font-bold mb-4">Mónaco</h3>
              <a
                href="/produ/sanitarios/monaco"
                className="bg-cyan-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 w-max"
              >
                Ver opciones
              </a>
            </div>
          </div>
        </div>

      </div>
      <section className="py-20 px-4 bg-black text-white text-center">
        
      <h2 className={`${poppins.className} text-5xl font-bold mb-6`}>
  Pedí tu presupuesto
</h2>

        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded border text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          <textarea placeholder="Mensaje" className="w-full p-3 rounded border h-32" />
          <input type="file" className="w-full" />
          <button type="submit" className="w-full bg-[#05aced] text-white py-3 rounded">
            Enviar mensaje
          </button>
        </form>
        <p className="mt-6">📞 1127712390 | 📞 1160288911</p>
        <p>📧 materialescastelli@gmail.com</p>
      </section>
    </div>
    
  );
}

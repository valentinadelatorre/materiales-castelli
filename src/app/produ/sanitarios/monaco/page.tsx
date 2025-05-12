import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function CapeaItalianaPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b bg-black py-20 px-4">
        <h2 className={`${poppins.className}text-white text-6xl font-extrabold text-center mb-16`}>Línea Mónaco</h2>
  <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
  
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-[#05aced] overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/RhBnyZpQ/Screenshot-2025-05-01-at-6-27-13-PM.png"
                alt="Inodoro 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Bidet 3A</h3>
              <p className="text-gray-400 mb-4">Diseño ergonómico y moderno con máxima eficiencia en el uso diario.</p>
              <a
                href="#hablanos"
                className="bg-[#05aced] hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-[#05aced] overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/XJ8VNN7g/Screenshot-2025-05-01-at-6-29-16-PM.png"
                alt="Bidet 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Inodoro Largo</h3>
              <p className="text-gray-400 mb-4">Estructura robusta y estética ideal para baños contemporáneos.</p>
              <a
                href="#hablanos"
                className="bg-[#05aced] hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-[#05aced] overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/Xv63wBr8/Screenshot-2025-05-01-at-6-31-07-PM.png"
                alt="Lavamanos 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Apoyo Dual</h3>
              <p className="text-gray-400 mb-4">Doble función con diseño compacto y descarga eficiente.</p>
              <a
                href="#hablanos"
                className="bg-[#05aced] hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
        </div>
        </section>

        <section id="hablanos" className="py-20 px-4 bg-black mt-25 text-white text-center">
        
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
  
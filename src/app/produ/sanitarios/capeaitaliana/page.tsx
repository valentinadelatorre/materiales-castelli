import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function CapeaItalianaPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-20 px-4">
        <h2 className={`${poppins.className}text-white text-6xl font-extrabold text-center mb-16`}>Línea Capea Italiana</h2>
  <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
  
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/nz2WjyJZ/Screenshot-2025-05-01-at-5-30-26-PM.png"
                alt="Inodoro 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Bidet 3A</h3>
              <p className="text-gray-400 mb-4">Línea premium de inodoros con diseño italiano y acabado brillante.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/x8kPfhj6/Screenshot-2025-05-01-at-5-33-12-PM.png"
                alt="Bidet 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Columna</h3>
              <p className="text-gray-400 mb-4">Comodidad y estética moderna con terminaciones suaves y elegantes.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/6q3ByVFj/Screenshot-2025-05-01-at-5-42-46-PM.png"
                alt="Lavamanos 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Inodoro Corto</h3>
              <p className="text-gray-400 mb-4">Funcionalidad y estilo en un diseño compacto y de alta calidad.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
        </div>
        </section>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-20">
  
          {/* Tarjeta 4 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/7PGH89Mh/Screenshot-2025-05-01-at-5-49-13-PM.png"
                alt="Inodoro 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Inodoro Largo</h3>
              <p className="text-gray-400 mb-4">Línea premium de inodoros con diseño italiano y acabado brillante.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 5 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/FKztbFTz/Screenshot-2025-05-01-at-5-51-52-PM.png"
                alt="Bidet 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Lavatorio 495 3A</h3>
              <p className="text-gray-400 mb-4">Comodidad y estética moderna con terminaciones suaves y elegantes.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 6 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/ht4NgPWs/Screenshot-2025-05-01-at-5-54-27-PM.png"
                alt="Lavamanos 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Lavatorio 540 3A</h3>
              <p className="text-gray-400 mb-4">Funcionalidad y estilo en un diseño compacto y de alta calidad.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
          
  
        </div>


        


        </section>

        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-20">
  
          {/* Tarjeta 7 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/VLJbhX5W/Screenshot-2025-05-01-at-6-03-12-PM.png"
                alt="Inodoro 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Depósito Apoyo</h3>
              <p className="text-gray-400 mb-4">Línea premium de inodoros con diseño italiano y acabado brillante.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
  
          {/* Tarjeta 8 */}
          <div className="bg-neutral-900 rounded-3xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition hover:scale-[1.03] duration-500">
            <div className="relative w-full h-60">
              <img
                src="https://i.postimg.cc/7Y1bdXw7/Screenshot-2025-05-01-at-6-06-50-PM.png"
                alt="Bidet 3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Depósito a Codo</h3>
              <p className="text-gray-400 mb-4">Comodidad y estética moderna con terminaciones suaves y elegantes.</p>
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Lo quiero!
              </a>
            </div>
          </div>
          
  
        </div>


        


        </section>

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
  
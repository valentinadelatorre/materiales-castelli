import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});



export default function AwaductPage() {
    return (
      <div id="codo" className="bg-black py-20 px-6">
        <h3 className={`${poppins.className} text-7xl font-bold text-white text-center mb-20`}>
  Awaduct
</h3>

  <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/bvBHfxmN/Screenshot-2025-05-02-at-8-03-28-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CAÑOS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/sXGPjMLP/Screenshot-2025-05-02-at-8-04-39-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODOS Y CURVAS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/VvyqdYyx/Screenshot-2025-05-02-at-8-05-29-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMALES</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>

        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 4 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/rFkGTFNW/Screenshot-2025-05-02-at-8-06-23-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">REJILLAS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 5 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/wjWDD58c/Screenshot-2025-05-02-at-8-07-13-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RECEPTACULOS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 6 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/bNpnMVq9/Screenshot-2025-05-02-at-8-08-00-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">TAPAS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>


        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 7 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/NjPrKgmd/Screenshot-2025-05-02-at-8-08-50-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CUPLAS</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 8 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/gJ3wt857/Screenshot-2025-05-02-at-8-09-37-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">BOCA ACCESO</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 9 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/hvrXcgKb/Screenshot-2025-05-02-at-8-10-24-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">MANGUITO REPARACION</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>



         {/* CONTACTO */}
      <section className="py-20 px-4 bg-black mt-20 text-white text-center">
        
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
  
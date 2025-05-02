import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});





export default function RamalesPage() {
    return (
      <div id="curvas" className="bg-black py-20 px-6">
        <h3 className={`${poppins.className} text-6xl font-bold text-white text-center mb-24`}>
  Modelos de Ramales
</h3>

    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/Qxxm2dbt/Screenshot-2025-05-02-at-7-36-08-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 100 A 45°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/jSBhnQrw/Screenshot-2025-05-02-at-7-37-01-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 100 A 90°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/FRVb6Mk3/Screenshot-2025-05-02-at-7-37-53-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 100X60 A 45°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>


        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 4 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/zvdCzTjf/Screenshot-2025-05-02-at-7-38-49-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 100X60 A 90°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 5 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/9FMPxNmw/Screenshot-2025-05-02-at-7-39-37-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 110 A 45° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 6 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/5tcw24w8/Screenshot-2025-05-02-at-7-40-18-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 110 A 90° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>



        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 7 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/JnxJxjSQ/Screenshot-2025-05-02-at-7-41-05-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 110X63 A 90° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 8 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/hv3mWcDz/Screenshot-2025-05-02-at-7-41-49-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 110X63 A 45° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 9 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/ZK2NwbsX/Screenshot-2025-05-02-at-7-42-36-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 40 A 45°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>




        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 10 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/vmdVdPsz/Screenshot-2025-05-02-at-7-43-22-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 50 A 45°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 11 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/0NdJ5p5q/Screenshot-2025-05-02-at-7-44-07-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 60 A 45°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 12 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/NFLyxS6g/Screenshot-2025-05-02-at-7-44-56-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 60 A 90°</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>
        </section>




        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 13 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/VLrr0ysg/Screenshot-2025-05-02-at-7-45-59-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 63 A 45° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  {/* Tarjeta 14 */}
  <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/Dw1S5qXb/Screenshot-2025-05-02-at-7-46-50-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC 63 A 90° LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
          {/* Tarjeta 15 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/ZqcCz4jb/Screenshot-2025-05-02-at-7-47-33-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">RAMAL PVC PONCHO 160X110 A 45°</h4>
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
  
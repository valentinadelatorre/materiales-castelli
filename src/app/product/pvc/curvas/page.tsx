import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});




export default function CurvasPage() {
    return (
      <div id="curvas" className="bg-black py-20 px-6">
        <h3 className={`${poppins.className} text-6xl font-bold text-white text-center mb-24`}>
  Modelos de Codos
</h3>

    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/ydrqS5MM/Screenshot-2025-05-02-at-2-48-04-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 100</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/T1Ws5Pqb/Screenshot-2025-05-02-at-2-49-09-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 100 C/BASE</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/MK1WhZ2X/Screenshot-2025-05-02-at-2-50-14-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 100 CON 2 ACOMETIDAS 60/63</h4>
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
                src="https://i.postimg.cc/JnBwZKRt/Screenshot-2025-05-02-at-2-51-31-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 110 C/BASE</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 5 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/Fz9ZNsCm/Screenshot-2025-05-02-at-2-52-27-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 110 CON 3 ACOMETIDAS 60/63</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 6 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/GhgQnRFw/Screenshot-2025-05-02-at-2-53-25-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 110 LINEA 110</h4>
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
                src="https://i.postimg.cc/CKkH8fWS/Screenshot-2025-05-02-at-2-54-19-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 160 LINEA 110</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 8 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/pVG8pZpK/Screenshot-2025-05-02-at-2-55-26-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 40 H-H</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 9 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/0QNjsTGF/Screenshot-2025-05-02-at-2-56-24-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 40 M-H</h4>
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
                src="https://i.postimg.cc/pVwjfdJd/Screenshot-2025-05-02-at-2-57-21-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 50 H-H</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 11 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/Kzd1D9LW/Screenshot-2025-05-02-at-2-58-11-PM.png"
                alt="Curva Larga"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 60 H-H</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 12 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-cyan-400/20 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/RCH6ZBxx/Screenshot-2025-05-02-at-2-59-03-PM.png"
                alt="Curva Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 60 M-H</h4>
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
                src="https://i.postimg.cc/RZMNdJ6v/Screenshot-2025-05-02-at-3-00-02-PM.png"
                alt="Curva 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CODO PVC 63 LINEA 110</h4>
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
  
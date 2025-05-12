import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});



export default function CodoPage() {
    return (
      <div id="codo" className="bg-black py-20 px-6">
        <h3 className={`${poppins.className} text-7xl font-bold text-white text-center mb-20`}>
  Modelos de Curvas
</h3>

  <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/9fy9NHXh/Screenshot-2025-05-02-at-2-08-30-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 100° A 45°</h4>
            <a
  href="#presu"
  className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
>
  Más Información
</a>

          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/xTqzVzjg/Screenshot-2025-05-02-at-2-10-26-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 100 A 45° LINEA 110</h4>
            <a
  href="#presu"
  className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
>
  Más Información
</a>

          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/SKb2916t/Screenshot-2025-05-02-at-2-12-20-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 110 A 45° LINEA 110</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>

          </div>
        </div>
        </section>

        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 4 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/JzSX74YJ/Screenshot-2025-05-02-at-2-18-04-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 110 A 90° LINEA 110</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
  
          {/* Tarjeta 5 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/KYLM1SCW/Screenshot-2025-05-02-at-2-21-33-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 160 A 45° LINEA 110</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
  
          {/* Tarjeta 6 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/DZn8mWrW/Screenshot-2025-05-02-at-2-22-51-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 160 A 90° LINEA 110</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
        </div>
        </section>


        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 7 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/Bvxjq5K9/Screenshot-2025-05-02-at-2-24-18-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 40 A 45°</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
  
          {/* Tarjeta 8 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/hv3jCpHx/Screenshot-2025-05-02-at-2-25-51-PM.png"
                alt="Codo 45°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 60 A 90°</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
  
          {/* Tarjeta 9 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/rFKzd2r9/Screenshot-2025-05-02-at-2-27-27-PM.png"
                alt="Codo Flexible"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CURVA PVC 63 A 45° LINEA 110</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
        </div>
        </section>



        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Tarjeta 10 */}
          <div className="bg-neutral-900 rounded-3xl shadow-xl shadow-[#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#05aced]">
              <img
                src="https://i.postimg.cc/hP6vTZ8R/Screenshot-2025-05-02-at-2-28-37-PM.png"
                alt="Codo 90°"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">Codo PVC 90°</h4>
            <a
              href="#presu"
              className="px-6 py-2 bg-[#05aced] text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
            Más Información
            </a>
          </div>
        </div>
        </section>


        {/* CONTACTO */}
      <section id="presu" className="py-20 px-4 bg-black mt-25 text-white text-center">
        
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
  
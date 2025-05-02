import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


export default function CanosPage() {
    return (
      <div id="canos" className="bg-black py-20 px-6">
        <h3 className={`${poppins.className} text-6xl md:text-6xl font-bold text-white text-center mb-16`}>
  Modelos de Caños
</h3>

  
        <div className="flex flex-col md:flex-row justify-center items-center gap-15 max-w-6xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-2xl w-[30rem] h-[30rem] shadow-xl drop-shadow-[0_10px_25px_#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/PJtvnx8y/Screenshot-2025-05-02-at-11-31-43-AM.png"
                alt="Cañito"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CAÑO REFORZADO</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-2xl w-[30rem] h-[30rem] shadow-xl drop-shadow-[0_10px_25px_#05aced] p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
              <img
                src="https://i.postimg.cc/T3WwSm4G/Screenshot-2025-05-02-at-11-34-24-AM.png"
                alt="Cañón XL"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white text-2xl font-semibold mb-4">CAÑO PLUVIAL #110X4M</h4>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </div>

        {/* CONTACTO */}
      <section className="py-20 px-4 bg-black text-white mt-15 text-center">
        
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
  
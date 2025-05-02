import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function PVCPage() {
  return (
    <div className="bg-black py-20 px-4">
      <h2
        className={`${poppins.className} text-6xl md:text-7xl font-extrabold text-center text-white mb-16`}
      >
        PVC
      </h2>
      
      <section>
      {/* Primera fila */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-25 md:flex-row">

      
        {/* Círculo 1 */}
        <a href="/product/pvc/canos" className="relative flex items-center justify-center cursor-pointer">
          <div
            className="h-40 w-40 md:h-[22rem] md:w-80 rounded-full bg-cover bg-center shadow-3xl drop-shadow-[0_10px_25px_#05aced] hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/5ttGPq0N/Screenshot-2025-05-02-at-10-59-01-AM.png')",
            }}
          ></div>
          <div className="absolute bottom-4 left-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg md:text-base">
            CAÑOS
          </div>
        </a>

        {/* Círculo 2 */}
        <a href="/product/pvc/codo" className="relative flex items-center justify-center cursor-pointer">
          <div
            className="h-40 w-40 md:h-[22rem] md:w-80 rounded-full bg-cover bg-center shadow-2xl drop-shadow-[0_10px_25px_#05aced] hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/s2zqpCFS/Screenshot-2025-05-02-at-10-56-40-AM.png')",
            }}
          ></div>
          <div className="absolute top-4 right-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg md:text-base">
            CURVAS
          </div>
        </a>

        {/* Círculo 3 */}
        <a href="/product/pvc/curvas" className="relative flex items-center justify-center cursor-pointer">
          <div
            className="h-40 w-40 md:h-[22rem] md:w-80 rounded-full bg-cover bg-center shadow-2xl drop-shadow-[0_10px_25px_#05aced] hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/fThP4hLP/Screenshot-2025-05-02-at-11-00-10-AM.png')",
            }}
          ></div>
          <div className="absolute bottom-4 right-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg md:text-base">
            CODO
          </div>
        </a>
      </div>

      {/* Segunda fila */}
      <div className="mx-auto mt-25 flex flex-col items-center justify-center gap-25 md:flex-row">
        {/* Círculo 4 */}
        <a href="/product/pvc/sopapa" className="relative flex items-center justify-center cursor-pointer">
          <div
            className="h-40 w-40 md:h-[22rem] md:w-80 rounded-full bg-cover bg-center shadow-2xl drop-shadow-[0_10px_25px_#05aced] hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/zBZCL89Z/Screenshot-2025-05-02-at-11-02-08-AM.png')",
            }}
          ></div>
          <div className="absolute top-4 left-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg md:text-base">
            SOPAPA
          </div>
        </a>

        {/* Círculo 5 */}
        <a href="/product/pvc/ramal" className="relative flex items-center justify-center cursor-pointer">
          <div
            className="h-40 w-40 md:h-[22rem] md:w-80 rounded-full bg-cover bg-center shadow-2xl drop-shadow-[0_10px_25px_#05aced] hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/4416dCPq/Screenshot-2025-05-02-at-11-03-15-AM.png')",
            }}
          ></div>
          <div className="absolute top-4 left-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg md:text-base">
            RAMAL
          </div>
        </a>
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

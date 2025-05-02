import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


export default function RevestimientosPage() {
    return (
      <div className="min-h-screen bg-black py-16 px-4">
        <h2 className={`${poppins.className} text-6xl font-extrabold text-center text-white mb-12`}>
  Revestimientos
</h2>

        <section>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
  
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
            <img
              src="https://i.postimg.cc/264xVJPG/Screenshot-2025-05-01-at-6-56-02-PM.png"
              alt="Axella Bianco"
              className="w-full h-60 object-cover mb-6 rounded-md"
            />
            <h3 className="text-lg font-bold text-white mb-4">CORCEGA BEIGE</h3>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contactanos
            </button>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
            <img
              src="https://i.postimg.cc/KvYn2RvJ/Screenshot-2025-05-01-at-6-59-10-PM.png"
              alt="Axella Negro"
              className="w-full h-60 object-cover mb-6 rounded-md"
            />
            <h3 className="text-lg font-bold text-white mb-4">VENECIA GRIS</h3>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contactanos
            </button>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
            <img
              src="https://i.postimg.cc/T1tgbXQV/Screenshot-2025-05-01-at-6-57-40-PM.png"
              alt="Bari Bianco"
              className="w-full h-60 object-cover mb-6 rounded-md"
            />
            <h3 className="text-lg font-bold text-white mb-4">VENECIA BEIGE</h3>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contactanos
            </button>
          </div>
  
        </div>
        </section>


       <section>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">
  
  {/* Tarjeta 4 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/85NjM950/Screenshot-2025-05-02-at-9-20-20-AM.png"
      alt="Axella Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">GLACIAR BLANCO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 5 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/TYF1Cp1m/Screenshot-2025-05-02-at-9-21-50-AM.png"
      alt="Axella Negro"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">GLACIAR NEGRO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 6 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/Qtfx5MvF/Screenshot-2025-05-02-at-9-22-39-AM.png"
      alt="Bari Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CALABRIA BEIGE</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

</div>

       </section>

       <section>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">
  
  {/* Tarjeta 7 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/brQPgNB0/Screenshot-2025-05-02-at-9-25-16-AM.png"
      alt="Axella Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">PARQUET ALAMO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 8 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/Zq2hhdkF/Screenshot-2025-05-02-at-9-26-31-AM.png"
      alt="Axella Negro"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CORDILLERA COBRE</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 9 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/jSjVwXt4/Screenshot-2025-05-02-at-9-26-52-AM.png"
      alt="Bari Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CORDILLERA LITIO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

</div>

       </section>

       <section>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">
  
  {/* Tarjeta 10 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/VLVggBXR/Screenshot-2025-05-02-at-9-30-15-AM.png"
      alt="Axella Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CAIRO GRIS </h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 11 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/C17HqjFb/Screenshot-2025-05-02-at-9-30-35-AM.png"
      alt="Axella Negro"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CAIRO BEIGE</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

  {/* Tarjeta 12 */}
  <div className="bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/nrLKYCzg/Screenshot-2025-05-02-at-9-31-07-AM.png"
      alt="Bari Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">PARQUET CASTAÑO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>

</div>

       </section>

       <section>
       <div className="w-full flex justify-center items-center mt-10">

  
  {/* Tarjeta 13 */}
  <div className="w-90 h-[430px] bg-neutral-900 rounded-2xl shadow-lg shadow-cyan-400/30 overflow-hidden transition hover:scale-[1.02] p-6 text-center">
    <img
      src="https://i.postimg.cc/28VF1bgB/Screenshot-2025-05-02-at-9-31-24-AM.png"
      alt="Axella Bianco"
      className="w-full h-60 object-cover mb-6 rounded-md"
    />
    <h3 className="text-lg font-bold text-white mb-4">CAIRO NEGRO</h3>
    <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
      Contactanos
    </button>
  </div>
  </div>

       </section>


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
  
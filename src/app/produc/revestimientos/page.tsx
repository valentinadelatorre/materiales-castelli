export default function RevestimientosPage() {
    return (
      <div className="min-h-screen bg-black py-16 px-4">
        <h2 className="text-6xl font-extrabold text-center text-white mb-12">Revestimientos</h2>
  
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
      </div>
    );
  }
  
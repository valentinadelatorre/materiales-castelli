export default function AditivosVinilicos() {
  return (
    <div className="bg-black min-h-screen py-16 px-4 text-white">
      {/* Contenedor con flex */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto">
        {/* Tarjeta descriptiva */}
        <div className="relative w-full md:w-1/3 max-w-5xl mb-16 transition transform hover:-translate-y-2 hover:scale-105 duration-500">
          <div className="backdrop-blur-xl bg-white border border-white rounded-2xl drop-shadow-[0_10px_25px_#05aced] p-10">
            <div className="absolute text-right inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#05aced] transition-all duration-500"></div>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-3">Aditivo Vinílico</h3>
            <p className="text-gray-800 mb-6 font-bold text-center space-y-1 text-lg">
              <p>– TACURU 1 KG</p>
              <p>– TACURU 4 KG</p>
              <p>– TACURU 10 KG</p>
              <p>– TACURU 20 KG</p>
            </p>
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#05aced] text-white font-semibold rounded-lg shadow hover:bg-[#048bbf] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Más información
            </button>
            </div>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 max-w-md drop-shadow-[0_10px_25px_#05aced]">
          <img
            src="https://i.postimg.cc/J41s4Bzq/Screenshot-2025-04-22-at-1-27-25-PM.png"
            alt="Aditivo Vinílico"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
  



      {/* Formulario de contacto */}
      <section className="py-20 px-10 bg-black text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Pedí tu presupuesto</h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded border text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border text-white" />
          <textarea placeholder="Mensaje" className="w-full p-3 rounded border h-32 text-white" />
          <input type="file" className="w-full" />
          <button type="submit" className="w-full bg-[#05aced] text-white py-3 rounded">Enviar mensaje</button>
        </form>
        <p className="mt-6">📞 1127712390 | 📞 1160288911</p>
        <p>📧 materialescastelli@gmail.com</p>
      </section>
    </div>
  );
}

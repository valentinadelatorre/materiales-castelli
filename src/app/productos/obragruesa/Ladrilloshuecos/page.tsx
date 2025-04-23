'use client';
import { useState } from 'react';

export default function AditivosVinilicos() {
  const [mainImage, setMainImage] = useState('https://i.postimg.cc/kXrTrQQG/Screenshot-2025-04-23-at-4-19-35-PM.png');

  return (
    <div className="bg-black min-h-screen py-16 px-4 text-white">
      {/* Contenedor general */}
      <div className="flex flex-col md:flex-row gap-6 bg-white text-black rounded-2xl drop-shadow-[0_10px_25px_#05aced] p-6 w-full max-w-5xl mx-auto transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_#05aced]">
        
        {/* Miniaturas */}
        <div className="flex md:flex-col gap-4">
          {[
            'https://i.postimg.cc/m2R7N83Y/Screenshot-2025-04-23-at-4-20-54-PM.png',
            'https://i.postimg.cc/FzvkpHSr/Screenshot-2025-04-23-at-4-22-10-PM.png',
          
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => setMainImage(src)}
              className={`w-20 h-16 object-cover rounded-lg cursor-pointer ring-2 transition ${
                mainImage === src ? 'ring-[#05aced]' : 'ring-transparent hover:ring-[#05aced]'
              }`}
              alt={`Miniatura ${index + 1}`}
            />
          ))}
        </div>

        {/* Imagen principal + texto */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-full max-h-[350px] mb-6 overflow-hidden rounded-xl shadow-md">
            <img src={mainImage} className="w-full h-full object-cover transition duration-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">
    Ladrillos Huecos
  </h2>

  <p className="text-black text-sm mb-4 font-bold w-full text-center">
    <p>- HUECO 12X18X33 6T (144)</p>
    <p>- HUECO 12X18X33 9T (144)</p>
    <p>- HUECO 18X18X33 (90)</p>
    <p>- HUECO 8X18X33 (198)</p>
    <p>- PORTANTE 12X19X33 (126)</p>
    <p>- PORTANTE 18X19X33 (90)</p>
  </p>

  <button className="bg-[#05aced] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
    Contactanos!
  </button>
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

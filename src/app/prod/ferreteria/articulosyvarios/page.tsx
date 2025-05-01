'use client';
import { useState } from 'react';

export default function AditivosVinilicos() {
  const [mainImage, setMainImage] = useState('https://i.postimg.cc/Pr08rRtD/Screenshot-2025-05-01-at-1-01-51-PM.png');

  return (
    <div className="bg-black min-h-screen py-16 px-4 text-white">
      {/* Contenedor general */}
      <div className="flex flex-col md:flex-row gap-6 bg-white text-black rounded-2xl drop-shadow-[0_10px_25px_#05aced] p-6 w-full max-w-5xl mx-auto transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_#05aced]">
        
        {/* Miniaturas */}
        <div className="flex md:flex-col gap-4">
          {[
            'https://i.postimg.cc/Pr08rRtD/Screenshot-2025-05-01-at-1-01-51-PM.png',
            'https://i.postimg.cc/Qd5KBJty/Screenshot-2025-05-01-at-1-02-41-PM.png',
            'https://i.postimg.cc/25DbnLL8/Screenshot-2025-05-01-at-1-03-28-PM.png',
            'https://i.postimg.cc/SKfXdQcL/Screenshot-2025-05-01-at-1-05-14-PM.png',
            'https://i.postimg.cc/TwPPcVdG/Screenshot-2025-05-01-at-1-07-29-PM.png',
            'https://i.postimg.cc/XYc7SHX4/Screenshot-2025-05-01-at-1-08-19-PM.png',
          
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
    Artículos y Varios
  </h2>

  <p className="text-black text-sm mb-4 font-bold w-full text-center">
    <p>- CINTA PELIGRO 50mts</p>
    <p>- CORTA HIERRO DE 30cm</p>
    <p>- GUANTES MOTEADOS PESADOS APROBADOS</p>
    <p>- KIT REPARACIÓN HUNTER 500grs</p>
    <p>- LÁPIZ ALBAÑIL</p>
    <p>- MANGUERA CRISTAL</p>
    <p>- ZARANDA LAVASOLA</p>
    <p>- ANTEOJOS TRANSPARENTES PATA MÓVIL</p>
    <p>- MEMBRANA ASFÁLTICA CON ALUMINIO 35kgs CLIPPERFLEX</p>
    <p>- PINTURA ASFÁLTICA CON SECADO RÁPIDO AL SOLVENTE 18lts</p>
    <p>- ROLLO DE MALLA DE FIBRA DE VIDRIO 1x50mts (5x5 - 90gr)</p>
    <p>- MS 90% NEGRO Y COLORES 4,20X50mts</p>
    <p>- MS 95% NEGRO Y COLORES 4,20X50mts</p>
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

'use client';
import { useState } from 'react';

export default function AditivosVinilicos() {
  const [mainImage, setMainImage] = useState('https://i.postimg.cc/Dwzxcvjs/Screenshot-2025-04-24-at-12-32-27-PM.png');

  return (
    <div className="bg-black min-h-screen py-16 px-4 text-white">
      {/* Contenedor general */}
      <div className="flex flex-col md:flex-row gap-6 bg-white text-black rounded-2xl drop-shadow-[0_10px_25px_#05aced] p-6 w-full max-w-5xl mx-auto transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_#05aced]">
        
        {/* Miniaturas */}
        <div className="flex md:flex-col gap-4">
          {[
            'https://i.postimg.cc/Dwzxcvjs/Screenshot-2025-04-24-at-12-32-27-PM.png',
            'https://i.postimg.cc/NMRD05Fh/Screenshot-2025-04-24-at-12-33-41-PM.png',
            'https://i.postimg.cc/L5TVzwjN/Screenshot-2025-04-24-at-12-34-27-PM.png',
            'https://i.postimg.cc/Dfd5kJRL/Screenshot-2025-04-24-at-12-35-19-PM.png',
            'https://i.postimg.cc/SNgrj0SK/Screenshot-2025-04-24-at-12-35-52-PM.png',
          
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
    Pegamentos Weber
  </h2>

  <p className="text-black text-sm mb-4 font-bold w-full text-center">
    <p>- WEBER BASIC CERAMICOS 30kg</p>
    <p>- WEBER ADHESIVO SUPER FLEX 30kg</p>
    <p>- WEBER 3 EN 1 MANUAL</p>
    <p>- WEBER FORTE REV FINO P EXTERIOR 25kg</p>
    <p>- WEBER PASTINA 2KG</p>
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

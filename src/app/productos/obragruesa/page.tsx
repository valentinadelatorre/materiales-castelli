import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function ObraGruesa() {
    return (
        <div className="bg-black min-h-screen p-10">
  <h2 className={`${poppins.className} text-5xl font-extrabold text-white mb-16 text-center`}>
  Materiales de Obra Gruesa
</h2>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 1 */}
    <a
  href="/productos/obragruesa/Perfileria"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/s2TxMmXJ/Screenshot-2025-04-24-at-10-45-45-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Perfilería
  </h3>
</a>

    {/* Tarjeta 2 */}
<a
  href="/productos/obragruesa/Aridosenbolson"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/3xsjNKkB/Screenshot-2025-04-24-at-10-40-54-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Áridos en Bolsón
  </h3>
</a>


    {/* Tarjeta 3 */}
    <a
  href="/productos/obragruesa/Cemento"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/52KzQfjG/Screenshot-2025-04-24-at-10-42-27-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Bolsas de Cemento
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 4 */}
    <a
  href="/productos/obragruesa/Ladrilloshuecos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/90wNRcdY/Screenshot-2025-04-24-at-10-50-55-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Ladrillos Huecos
  </h3>
</a>

    {/* Tarjeta 5 */}
    <a
  href="/productos/obragruesa/Ladrilloscomunes"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/SRpYbrx7/Screenshot-2025-04-24-at-10-51-57-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Ladrillos Comunes
  </h3>
</a>

    {/* Tarjeta 6 */}
    <a
  href="/productos/obragruesa/Varillasdehierro"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/9QqvktsQ/Screenshot-2025-04-24-at-10-49-32-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Varillas de Hierro
  </h3>
</a>
    
  </div>



  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 7 */}
    <a
  href="/productos/obragruesa/Derivadosdehierro"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/ydnmY04q/Screenshot-2025-04-24-at-10-47-24-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Derivados de Hierro
  </h3>
</a>

    {/* Tarjeta 8 */}
    <a href="/productos/obragruesa/Aditivosvinilicos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/VLyNP5Q9/Screenshot-2025-04-24-at-12-01-57-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Aditivos Vinílicos
  </h3>
</a> 

    {/* Tarjeta 9 */}
    <a
  href="/productos/obragruesa/Yesos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/QN6csQxL/Screenshot-2025-04-24-at-12-19-39-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Yesos
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 10 */}
    <a
  href="/productos/obragruesa/Pegamentoweber"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/fWxqzgS3/Screenshot-2025-04-24-at-12-30-42-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Pegamentos Weber
  </h3>
</a>

    {/* Tarjeta 11 */}
    <a
  href="/productos/obragruesa/PegamentoKlaukol"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/wvKKPyZn/Screenshot-2025-04-24-at-12-47-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Pegamentos Klaukol
  </h3>
</a>

    {/* Tarjeta 12 */}
    <a
  href="/productos/obragruesa/Hidrofugos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/ZRMLj2Rc/Screenshot-2025-04-24-at-1-07-46-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Hidrófugos
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 13 */}
    <a
  href="/productos/obragruesa/Canosdehormigon"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/1z3zYMpN/Screenshot-2025-04-24-at-1-49-56-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Caños de Hormigón
  </h3>
</a>

    {/* Tarjeta 14 */}
    <a
  href="/productos/obragruesa/Telgoporyderivados"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/3x7CSynD/Screenshot-2025-04-24-at-2-00-15-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Telgopor y Derivados
  </h3>
</a>

    {/* Tarjeta 15 */}
    <a
  href="/productos/obragruesa/Bloquedehormigon"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/FFwV5Csc/Screenshot-2025-04-24-at-2-18-54-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Bolque de Hormigón
  </h3>
</a>
    
  </div>



  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 16 */}
    <a
  href="/productos/obragruesa/Refractarios"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/nLmLRQJf/Screenshot-2025-04-24-at-9-30-06-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Refractarios
  </h3>
</a>

    {/* Tarjeta 17 */}
    <a
  href="/productos/obragruesa/Viguetas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/DyqkMdWg/Screenshot-2025-04-24-at-9-47-46-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Viguetas
  </h3>
</a>

    {/* Tarjeta 18 */}
    <a
  href="/productos/obragruesa/Chapas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/VN2Kwppb/Screenshot-2025-04-24-at-9-57-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Chapas
  </h3>
</a>
    
  </div>





  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 19 */}
    <a
  href="/productos/obragruesa/Pegamentosmapei"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/qMBXPpq5/Screenshot-2025-04-24-at-10-06-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Pegamentos Mapei
  </h3>
</a>

    {/* Tarjeta 20 */}
    <a
  href="/productos/obragruesa/Aridos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/vBjGLY4S/Screenshot-2025-04-24-at-10-16-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Áridos
  </h3>
</a>

    {/* Tarjeta 21 */}
    <a
  href="/productos/obragruesa/Aridosenbolsa"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/c4RwTmYZ/Screenshot-2025-04-24-at-10-30-23-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Áridos en Bolsa
  </h3>
</a>
    
  </div>
</div>

      
    );
  }
  
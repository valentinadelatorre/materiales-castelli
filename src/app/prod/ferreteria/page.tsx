import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function Ferreteria() {
    return (
      <div className="bg-black min-h-screen p-10">
        <h2 className={`${poppins.className} text-5xl font-extrabold text-white mb-16 text-center`}>
  Productos de Ferretería
</h2>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 1 */}
    <a
  href="/prod/ferreteria/barretas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/658Zc5YV/Screenshot-2025-04-24-at-11-37-49-PM.png)",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Barretas
  </h3>
</a>

    {/* Tarjeta 2 */}
<a
  href="/prod/ferreteria/cajasdeluz"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/769njHGH/Screenshot-2025-04-24-at-11-43-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Cajas de Luz
  </h3>
</a>


    {/* Tarjeta 3 */}
    <a
  href="/prod/ferreteria/cintasmetricas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/cJtYx3xC/Screenshot-2025-04-24-at-11-53-00-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Cintas Métricas
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 4 */}
    <a
  href="/prod/ferreteria/pegamentodundun"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/CKK7j7GK/Screenshot-2025-04-25-at-12-03-48-AM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Pegamento Dundun
  </h3>
</a>

    {/* Tarjeta 5 */}
    <a
  href="/prod/ferreteria/porcellanato"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/rmL8ZqTn/Screenshot-2025-04-25-at-12-16-23-AM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Porcellanatos
  </h3>
</a>

    {/* Tarjeta 6 */}
    <a
  href="/prod/ferreteria/discosdecorte"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/v8zszKzG/Screenshot-2025-04-25-at-8-48-01-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Discos de Corte
  </h3>
</a>
    
  </div>



  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 7 */}
    <a
  href="/prod/ferreteria/escuadras"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/bNZdv1P1/Screenshot-2025-04-26-at-12-10-11-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Escuadras
  </h3>
</a>

    {/* Tarjeta 8 */}
    <a href="/prod/ferreteria/espatulas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/cLbHYm7s/Screenshot-2025-04-26-at-12-18-30-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Espátulas
  </h3>
</a> 

    {/* Tarjeta 9 */}
    <a
  href="/prod/ferreteria/fratachosalgarrobo"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/522c1WC0/Screenshot-2025-04-26-at-12-34-25-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Fratachos
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 10 */}
    <a
  href="/prod/ferreteria/grinfas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/MGtvHSsF/Screenshot-2025-04-26-at-12-42-11-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Grinfas
  </h3>
</a>

    {/* Tarjeta 11 */}
    <a
  href="/prod/ferreteria/llanas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/cJghWF12/Screenshot-2025-04-26-at-1-32-58-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Llanas
  </h3>
</a>

    {/* Tarjeta 12 */}
    <a
  href="/prod/ferreteria/martillosyhachas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/pLy49YXY/Screenshot-2025-04-26-at-2-00-20-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Martillos y Hachas
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 13 */}
    <a
  href="/prod/ferreteria/niveles"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/jdRDPc9f/Screenshot-2025-04-26-at-2-10-17-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Niveles
  </h3>
</a>

    {/* Tarjeta 14 */}
    <a
  href="/prod/ferreteria/palas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/8PLqQBPZ/Screenshot-2025-04-26-at-2-21-06-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Palas
  </h3>
</a>

    {/* Tarjeta 15 */}
    <a
  href="/prod/ferreteria/mangueras"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/KY3PwQmz/Screenshot-2025-04-26-at-2-28-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Mangueras
  </h3>
</a>
    
  </div>



  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 16 */}
    <a
  href="/prod/ferreteria/baldes"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/rFbz3Ts1/Screenshot-2025-04-26-at-2-36-42-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Baldes y Bandejas
  </h3>
</a>

    {/* Tarjeta 17 */}
    <a
  href="/prod/ferreteria/silicona"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/cLRgnj1f/Screenshot-2025-04-26-at-2-45-43-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Silicona
  </h3>
</a>

    {/* Tarjeta 18 */}
    <a
  href="/prod/ferreteria/cementogris"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/tgbgf05X/Screenshot-2025-05-01-at-11-45-17-AM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Cemento Gris
  </h3>
</a>
    
  </div>





  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 19 */}
    <a
  href="/prod/ferreteria/cementoblanco"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/htsGHy3T/Screenshot-2025-05-01-at-11-51-41-AM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Cemento Blanco
  </h3>
</a>

    {/* Tarjeta 20 */}
    <a
  href="/prod/ferreteria/yesoparis"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/XJVknzVW/Screenshot-2025-05-01-at-12-03-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Yeso Paris 
  </h3>
</a>

    {/* Tarjeta 21 */}
    <a
  href="/prod/ferreteria/carretillas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/4xfc7hDv/Screenshot-2025-05-01-at-12-10-00-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Carretillas
  </h3>
</a>
    
  </div>

  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 22 */}
    <a
  href="/prod/ferreteria/rafia"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/Y9HM0QVM/Screenshot-2025-05-01-at-12-15-27-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Rafia
  </h3>
</a>

    {/* Tarjeta 23 */}
    <a
  href="/prod/ferreteria/nylonnegro"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/PJ77pjxY/Screenshot-2025-05-01-at-12-20-59-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Nylon Negro
  </h3>
</a>

    {/* Tarjeta 24 */}
    <a
  href="/prod/ferreteria/pincelesyrodillos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/3R1XbFQw/Screenshot-2025-05-01-at-12-30-30-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Pinceles y Rodillos
  </h3>
</a>
    
  </div>

  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 25 */}
    <a
  href="/prod/ferreteria/plomadas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/X7krKY3V/Screenshot-2025-05-01-at-12-39-28-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Plomadas
  </h3>
</a>

    {/* Tarjeta 26 */}
    <a
  href="/prod/ferreteria/canocorrugado"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/sDNtNp3K/Screenshot-2025-05-01-at-12-46-38-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Caño Corrugado
  </h3>
</a>

    {/* Tarjeta 27 */}
    <a
  href="/prod/ferreteria/abrazaderas"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/ydpP8yQb/Screenshot-2025-05-01-at-12-51-36-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Abrazaderas
  </h3>
</a>
    
  </div>


  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 28 */}
    <a
  href="/prod/ferreteria/articulosyvarios"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/hGZX6y3h/Screenshot-2025-05-01-at-1-13-25-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Artículos y varios
  </h3>
</a>

    {/* Tarjeta 29 */}
    <a
  href="/prod/ferreteria/cucharasalbanil"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/vZ62ck5w/Screenshot-2025-05-01-at-1-18-23-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Cucharas Albañil
  </h3>
</a>
    
  </div>
</div>

      
    );
  }
  
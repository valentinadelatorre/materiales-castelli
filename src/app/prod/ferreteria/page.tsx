import Link from 'next/link';

export default function Ferreteria() {
    return (
      <div className="bg-black min-h-screen p-10">
        <h2 className="text-5xl font-extrabold text-white mb-16 text-center">
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
  href="/productos/obragruesa/Varillasdehierro"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/9QqvktsQ/Screenshot-2025-04-24-at-10-49-32-PM.png')",
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
  href="/productos/obragruesa/Derivadosdehierro"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/ydnmY04q/Screenshot-2025-04-24-at-10-47-24-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Escuadras
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
    Espátulas
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
    Fratacho Algarrobo
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
    Grinfas
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
    Llanas
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
    Martillos y Hachas
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
    Niveles
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
    Palas
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
    Mangueras
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
    Baldes
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
    Silicona
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
    Cemento Gris
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
    Cemento Blanco
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
    Yeso Paris 
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
    Carretillas
  </h3>
</a>
    
  </div>

  <div className="flex justify-center gap-20 mb-20 drop-shadow-[0_10px_25px_#05aced]">
    
    {/* Tarjeta 22 */}
    <a
  href="/productos/obragruesa/Pegamentosmapei"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/qMBXPpq5/Screenshot-2025-04-24-at-10-06-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Rafia
  </h3>
</a>

    {/* Tarjeta 23 */}
    <a
  href="/productos/obragruesa/Aridos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/vBjGLY4S/Screenshot-2025-04-24-at-10-16-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Nylon Negro
  </h3>
</a>

    {/* Tarjeta 24 */}
    <a
  href="/productos/obragruesa/Aridosenbolsa"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/c4RwTmYZ/Screenshot-2025-04-24-at-10-30-23-PM.png')",
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
  href="/productos/obragruesa/Pegamentosmapei"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/qMBXPpq5/Screenshot-2025-04-24-at-10-06-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Plomadas
  </h3>
</a>

    {/* Tarjeta 26 */}
    <a
  href="/productos/obragruesa/Aridos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/vBjGLY4S/Screenshot-2025-04-24-at-10-16-19-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Caño Corrugado
  </h3>
</a>

    {/* Tarjeta 27 */}
    <a
  href="/productos/obragruesa/Aridosenbolsa"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/c4RwTmYZ/Screenshot-2025-04-24-at-10-30-23-PM.png')",
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
  href="/productos/obragruesa/Pegamentosmapei"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/qMBXPpq5/Screenshot-2025-04-24-at-10-06-02-PM.png')",
  }}
>
  <h3 className="text-xl font-semibold text-black bg-[#05aced]/80 p-2 rounded-md text-center w-full">
    Artículos y varios
  </h3>
</a>

    {/* Tarjeta 29 */}
    <a
  href="/productos/obragruesa/Aridos"
  className="w-72 h-72 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-cover bg-center flex items-end"
  style={{
    backgroundImage: "url('https://i.postimg.cc/vBjGLY4S/Screenshot-2025-04-24-at-10-16-19-PM.png')",
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
  
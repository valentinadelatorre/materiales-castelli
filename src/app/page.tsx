'use client'
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


export default function Home() {
  return (


    <main className="bg-black text-black">
       <header className="fixed top-0 left-0 w-full bg-[#e0f2fe] z-50 drop-shadow-[0_10px_25px_#05aced]">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between overflow-visible">

    {/* Logo escalado sin agrandar el header */}
    <div className="transform scale-230 origin-left -ml-2">
      <img src="/logomateriales.png" alt="Materiales Castelli" className="h-10 object-contain" />
    </div>

    {/* Menú a la derecha */}
    <nav className="hidden md:flex space-x-6">
  <a href="#servicios" className={`${poppins.className} text-black font-extrabold`}>Servicios</a>
  <a href="#productos" className={`${poppins.className} text-black font-extrabold`}>Productos</a>
  <a href="#nosotros" className={`${poppins.className} text-black font-extrabold`}>Nosotros</a>
  <a href="#contacto" className={`${poppins.className} text-black font-extrabold`}>Contacto</a>
</nav>


  </div>
</header>


      {/* HERO */}
    <section>
      <div className="relative min-h-screen flex items-center justify-center bg-black p-8">

  {/* Imagen principal */}
  <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl drop-shadow-[0_10px_25px_#05aced]">
    <img
      src="https://i.postimg.cc/ZnHCmJTP/Screenshot-2025-05-01-at-1-33-33-PM.png"
      alt="Materiales Castelli"
      className="w-full h-[480px] object-cover rounded-2xl"
    />

    {/* Texto sobre la imagen */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 px-6 py-3 rounded-full shadow-md z-30">
      <p className="text-black font-semibold">Soluciones Completas para Construcción...</p>
    </div>
  </div>

  {/* BOTÓN IZQUIERDO flotante y saliéndose */}
  <div className="absolute left-6 bottom-[80px] z-50 bg-black text-white rounded-xl px-4 py-3 shadow-lg drop-shadow-[0_10px_25px_#05aced] flex items-center space-x-2">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z" />
    </svg>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </div>

  {/* BOTÓN DERECHO flotante y saliéndose */}
  <div className="absolute right-6 bottom-[80px] z-50 bg-black text-white rounded-xl px-5 py-3 shadow-lg drop-shadow-[0_10px_25px_#05aced] flex items-center space-x-3">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 4h20v16H2z" fill="none"/>
      <path d="M22 4v16H2V4h20zm-2 2H4v2l8 5 8-5V6zm0 12V9.4l-8 5-8-5V18h16z"/>
    </svg>
    <div className="text-left">
      <p className="font-semibold leading-4">Contactanos</p>
      <p className="text-sm">¡ahora!</p>
    </div>
  </div>
</div>


</section>






  

      {/* PRODUCTOS */}
      
  <section id="productos" className="relative z-20 -mt-10 px-4 py-16 bg-[#e0f2fe] rounded-t-3xl shadow-xl max-w-7xl mx-auto">
  <h1 className={`${poppins.className} text-5xl font-bold text-center mb-10`}>Productos</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
    {[
      { nombre: "Obra Gruesa", imagen: "/obragruesa.jpg", ruta: "/productos/obragruesa" },
      { nombre: "Ferreteria", imagen: "/ferreteria.jpg", ruta: "/prod/ferreteria" },
      { nombre: "Sanitarios", imagen: "/sanitarios.jpg", ruta: "/produ/sanitarios" },
      { nombre: "Revestimientos", imagen: "/revestimientos.jpg", ruta: "/produc/revestimientos" },
      { nombre: "PVC", imagen: "/pvc.jpg", ruta: "#" },
      { nombre: "Awaduct", imagen: "/awaduct.jpg", ruta: "#" }
    ].map((producto) => (
      <Link href={producto.ruta} key={producto.nombre}>
        <div
          className="relative bg-cover bg-center rounded-2xl shadow-lg h-[300px] flex flex-col justify-end p-4 text-white"
          style={{ backgroundImage: `url(${producto.imagen})` }}
        >
          <div className="bg-black/50 p-4 rounded-xl">
            <h3 className="text-xl font-bold">{producto.nombre}</h3>
            <button className="mt-2 bg-[#05aced] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Ver opciones
            </button>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>
<section >
 {/* TARJETA FLOTANTE DE COTIZACIÓN */}
<section className="relative bg-black py-20 px-4">
  <div className="bg-white p-6 rounded-xl drop-shadow-[0_10px_25px_#05aced] flex items-center gap-4 max-w-xl transition-transform hover:-translate-y-1 hover:shadow-xl mx-auto">
    <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" className="w-14 h-14" alt="Cotización" />
    <div>
      <h3 className="text-xl font-bold text-gray-800">¿Necesitás una cotización?</h3>
      <p className="text-gray-600">Pedila ahora y recibí respuesta rápida en menos de 24h.</p>
      <button className="mt-3 bg-[#05aced] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        Pedir presupuesto
      </button>
    </div>
  </div>

  {/* Sombra divisoria abajo de toda la sección */}
  <div className="absolute bottom-0 left-0 w-full h-10 shadow-[0_20px_30px_rgba(0,0,0,0.15)] z-10"></div>
</section>
</section>


      {/* PRODUCTOS DESTACADOS */}
<section className="py-20 px-4 bg-black text-center">
  <h2 className={`${poppins.className} text-5xl text-white font-extrabold mb-10`}>Productos destacados</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto drop-shadow-[0_10px_25px_#05aced]">
    
  <div
  className="relative bg-white rounded-xl shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300 h-[400px] w-full bg-cover bg-center flex flex-col justify-end p-6"
  style={{ backgroundImage: "url('https://i.postimg.cc/52KzQfjG/Screenshot-2025-04-24-at-10-42-27-PM.png')" }} // poné tu ruta o URL aquí
>
      <button className="mt-4 w-full bg-[#05aced] text-white py-2 rounded-md hover:bg-blue-600 font-extrabold transition">Bolsa de Cemento</button>
    </div>

    <div
  className="relative bg-white rounded-xl shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300 h-[400px] w-full bg-cover bg-center flex flex-col justify-end p-6"
  style={{ backgroundImage: "url('https://i.postimg.cc/3xsjNKkB/Screenshot-2025-04-24-at-10-40-54-PM.png')" }} // poné tu ruta o URL aquí
>
      <button className="mt-4 w-full bg-[#05aced] text-white py-2 rounded-md hover:bg-blue-600 font-extrabold transition">Áridos en Bolsón</button>
    </div>

    <div
  className="relative bg-white rounded-xl shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300 h-[400px] w-full bg-cover bg-center flex flex-col justify-end p-6"
  style={{ backgroundImage: "url('https://i.postimg.cc/90wNRcdY/Screenshot-2025-04-24-at-10-50-55-PM.png')" }} // poné tu ruta o URL aquí
>

      <button className="mt-4 w-full bg-[#05aced] text-white py-2 rounded-md hover:bg-blue-600 font-extrabold transition">Ladrillos Huecos</button>
    </div>

  </div>
</section>


      

      {/* CONTACTO */}
      <section className="py-20 px-4 bg-black text-white text-center">
        
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
      
      {/* UBICACIONES */}
<section className="py-20 px-4 bg-black text-white text-center">
<h2 className={`${poppins.className} text-5xl font-bold mb-10`}>
  Nuestras Ubicaciones
</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    
    {/* Tarjeta 1 */}
    <div className="bg-white p-6 rounded-xl shadow-md drop-shadow-[0_10px_25px_#05aced]">
  <h3 className="text-lg font-bold text-gray-800 mb-2">Sucursal Pilar, Bs.As</h3>
  <iframe
    className="w-full h-40 rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13150.237724038047!2d-58.90092275340993!3d-34.51405193132148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b0442609621%3A0x80bd2c13032999e4!2sAvenida%20Dardo%20Rocha%204865%2C%20B1629%20Pilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1745284219841!5m2!1ses!2sar"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    {/* Sucursal Derqui */}
    <div className="bg-white p-6 rounded-xl shadow-md drop-shadow-[0_10px_25px_#05aced]">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Presidente Derqui, Pilar</h3>
      <iframe
  className="w-full h-40 rounded-lg"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.3934353081404!2d-58.852349624424335!3d-34.46754225031903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c0b169e7f15%3A0x74414f39933cffa8!2sEl%20Cardenal%201835%2C%20B1635OXI%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1745284550960!5m2!1ses!2sar"
  loading="lazy"

  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>

  </div>
</section>


       {/* NOSOTROS */}
       <section className="py-20 px-4 bg-black text-white text-center">
    

       <h2 className={`${poppins.className} text-5xl font-bold mb-6`}>
  Sobre Nosotros
</h2>

    <p className="max-w-3xl mx-auto text-lg">
      En Materiales Castelli trabajamos hace años para ofrecer a nuestros clientes los mejores materiales
      de construcción del mercado. Nos destacamos por nuestro compromiso, atención personalizada y una amplia
      variedad de productos para todas las etapas de tu obra.
    </p>
  </section>
      

      {/* FOOTER */}
      <footer className="bg-black  text-white py-10 text-center text-sm">
        <p>&copy; 2025 Materiales Castelli. Todos los derechos reservados.</p>
        <p>Diseño inspirado en materialesnuevacasa.com.ar</p>
      </footer>
    </main>
  );
}

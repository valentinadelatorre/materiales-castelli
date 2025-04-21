export default function Home() {
  return (


    <main className="bg-white text-black">
       <header className="w-full bg-white shadow">

  <div className="max-w-7xl mx-auto px-2 py-0 flex justify-between items-center">
  <img src="/logomateriales.png" alt="Materiales Castelli" className="h-24 w-auto" />

    <nav className="space-x-6 hidden md:block">
      <a href="#servicios" className="text-[#05aced] font-bold">Servicios</a>
      <a href="#productos" className="text-[#05aced] font-bold">Productos</a>
      <a href="#nosotros" className="text-[#05aced] font-bold">Nosotros</a>
      <a href="#contacto" className="text-[#05aced] font-bold">Contacto</a>
    </nav>
  </div>
</header>
      {/* HERO */}
      <section className="relative w-full h-[90vh] overflow-hidden">
  {/* Fondo con imagen */}
  <img
    src="/fondo-materiales.jpg"
    alt="Materiales de construcción"
    className="absolute inset-0 w-full h-full object-cover scale-105"
  />
  {/* Capa oscura encima para mejorar contraste */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Caja de texto con efecto glass/3D */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-3xl px-14 py-8 max-w-5xl text-center text-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
      Líderes en abastecimiento de materiales para la construcción
      </h1>
      <p className="text-lg md:text-xl mb-6 text-gray-100">
        Calidad, stock y atención personalizada en un solo lugar.
      </p>
      <a
        href="#productos"
        className="inline-block px-6 py-2 rounded-full border border-white bg-[#05aced] hover:text-black transition"
      >
        Ver todas
      </a>
    </div>
  </div>
</section>





  

      {/* PRODUCTOS */}
      <section
  id="productos"
  className="relative z-20 -mt-32 px-4 py-16 bg-gray-100 rounded-t-3xl shadow-xl max-w-7xl mx-auto"
>
  <h2 className="text-3xl font-bold text-center mb-10">Productos</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Tarjeta de producto */}
    {[
      { nombre: "Obra Gruesa", imagen: "/obragruesa.jpg" },
      { nombre: "Ferreteria", imagen: "/ferreteria.jpg" },
      { nombre: "Sanitarios", imagen: "/sanitarios.jpg" },
      { nombre: "Revestimientos", imagen: "/revestimientos.jpg" },
      { nombre: "PVC", imagen: "/pvc.jpg" },
      { nombre: "Awaduct", imagen: "/awaduct.jpg" },
      
      
    ].map((producto) => (
      <div key={producto.nombre} className="bg-white rounded-2xl shadow-lg drop-shadow-[0_10px_20px_rgba(0,191,255,0.5)] p-4 text-center">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-40 object-contain mb-4 rounded-lg"
        />
        <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>
        <a
          href="#"
          className="inline-block border border-black px-4 py-1 rounded-full text-sm font-medium bg-[#05aced] hover:text-white transition"
        >
          Ver opciones
        </a>
      </div>
    ))}
  </div>
</section>


      {/* NOSOTROS */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="max-w-3xl mx-auto text-lg">
          En Materiales Castelli trabajamos hace años para ofrecer a nuestros clientes los mejores materiales
          de construcción del mercado. Nos destacamos por nuestro compromiso, atención personalizada y una amplia
          variedad de productos para todas las etapas de tu obra.
        </p>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="py-20 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto drop-shadow-[0_10px_25px_#05aced]">
          <div className="p-6 bg-white rounded-xl shadow">Entrega a domicilio</div>
          <div className="p-6 bg-white rounded-xl shadow">Atención personalizada</div>
          <div className="p-6 bg-white rounded-xl shadow">Stock permanente</div>
        </div>
      </section>

      

      {/* CONTACTO */}
      <section className="py-20 px-4 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded border" />
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
      
      {/* VENTAJAS */}
      <section className="py-20 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto drop-shadow-[0_10px_25px_#05aced]">
          <div className="p-6 bg-white rounded-xl shadow">Calidad garantizada</div>
          <div className="p-6 bg-white rounded-xl shadow">Entrega rápida</div>
          <div className="p-6 bg-white rounded-xl shadow">Atención directa por WhatsApp</div>
        </div>
      </section>
      

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center text-sm">
        <p>&copy; 2025 Materiales Castelli. Todos los derechos reservados.</p>
        <p>Diseño inspirado en materialesnuevacasa.com.ar</p>
      </footer>
    </main>
  );
}

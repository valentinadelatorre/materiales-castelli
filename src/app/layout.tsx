import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";

// Tipografía
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Materiales Castelli",
  description: "Sitio oficial de Materiales Castelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}>
        
        {/* Header global */}
        <header className="fixed top-0 left-0 w-full bg-[#e0f2fe] z-50 drop-shadow-[0_10px_25px_#05aced]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between overflow-visible">

            {/* Logo */}
            <div className="transform scale-230 origin-left -ml-2">
              <img src="/logomateriales.png" alt="Materiales Castelli" className="h-10 object-contain" />
            </div>

            {/* Menú */}
            <nav className="hidden md:flex space-x-6">
              <a href="#servicios" className={`${poppins.className} text-black font-extrabold`}>Servicios</a>
              <a href="#productos" className={`${poppins.className} text-black font-extrabold`}>Productos</a>
              <a href="#nosotros" className={`${poppins.className} text-black font-extrabold`}>Nosotros</a>
              <a href="#contacto" className={`${poppins.className} text-black font-extrabold`}>Contacto</a>
            </nav>
          </div>
        </header>

        {/* Espaciado para que no tape el contenido */}
        <div className="pt-24">
          {children}
        </div>

        {/* Footer global */}
        <footer className="bg-black text-white py-10 text-center text-sm">
          <p>&copy; 2025 Materiales Castelli. Todos los derechos reservados.</p>
          <p>Diseño inspirado en materialesnuevacasa.com.ar</p>
        </footer>

        {/* Botón flotante de WhatsApp */}
<a
  href="https://wa.me/5491123456789"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <img
    src="/whatsapp.png"
    alt="WhatsApp"
    className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
  />
</a>


      </body>
    </html>
  );
}

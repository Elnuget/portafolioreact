import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="gradient-bg pt-24 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center text-white fade-in w-full">
        <div className="mb-8">
          {/* Mensaje de Bienvenida */}
          <div className="mb-8">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
              ✨ Bienvenido a mi Portafolio ✨
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Carlos Angulo
          </h1>

          <div className="text-2xl md:text-3xl mb-8 typing-animation max-w-3xl mx-auto">
            Especialista en Tecnología Educativa y Desarrollo
          </div>

          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10 leading-relaxed">
            Magíster en Entornos Virtuales, Tecnólogo en Desarrollo de Software y Licenciado en Físico Matemático. 
            Combinando conocimientos técnicos y pedagógicos para crear soluciones innovadoras que transforman la educación.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#sobre-mi" className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105">
              Conoce más sobre mí
            </a>
            <a href="#contacto" className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
              Trabajemos juntos
            </a>
          </div>

          {/* Indicador de scroll */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

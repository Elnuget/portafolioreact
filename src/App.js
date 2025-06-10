import React from 'react';
// No necesitamos importar CSS de Tailwind ya que está cargado globalmente a través de index.html

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navbar */}
      <nav className="bg-gray-900/98 backdrop-blur-md shadow-2xl fixed w-full top-0 z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-red-500 to-secondary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">CA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white leading-tight">Carlos Angulo</h1>
                <p className="text-gray-400 text-sm">Desarrollador & Educador</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#inicio" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium relative group py-2">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#sobre-mi" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium relative group py-2">
                Sobre Mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#formacion" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium relative group py-2">
                Formación
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#clases" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium relative group py-2">
                Clases
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contacto
              </a>
            </div>
            <div className="md:hidden">
              <button id="menu-btn" className="text-gray-300 hover:text-primary transition duration-300 p-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesional apasionado por la intersección entre tecnología y educación, 
              con una sólida formación académica y experiencia en desarrollo de software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Desarrollo de Software</h3>
                </div>
                <p className="text-gray-600">
                  Experiencia en desarrollo de aplicaciones web y móviles, con enfoque en tecnologías modernas y mejores prácticas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Entornos Virtuales</h3>
                </div>
                <p className="text-gray-600">
                  Especialización en el diseño e implementación de entornos virtuales de aprendizaje y plataformas educativas.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Físico Matemático</h3>
                </div>
                <p className="text-gray-600">
                  Sólida base en matemáticas y física que proporciona una perspectiva analítica única para resolver problemas complejos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Innovación</h3>
                </div>
                <p className="text-gray-600">
                  Constante búsqueda de soluciones creativas que integren tecnología, educación y metodologías innovadoras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacion" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Formación Académica</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Una combinación única de conocimientos técnicos y pedagógicos</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-800">Magíster en Entornos Virtuales</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Especialización avanzada en el diseño, desarrollo e implementación de entornos virtuales de aprendizaje.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">E-Learning</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">LMS</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tecnología Educativa</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-800">Tecnólogo en Desarrollo de Software</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Formación técnica especializada en desarrollo de aplicaciones, programación y arquitectura de software.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Programación</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Desarrollo Web</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Bases de Datos</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-800">Licenciado Físico Matemático</h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Sólida formación en ciencias exactas que proporciona una base analítica y metodológica excepcional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Análisis Matemático</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Física Aplicada</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Investigación</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clases Particulares Section */}
      <section id="clases" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
              MATERIAL EDUCATIVO
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Clases Particulares</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Explora el material didáctico y encuentra los recursos que necesitas para tu aprendizaje</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover transform transition-all duration-300 border border-gray-100 hover:border-primary/20">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Matemáticas</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Material didáctico interactivo para aprender desde los conceptos básicos hasta temas avanzados. Incluye ejercicios prácticos y ejemplos paso a paso.
              </p>
              <div className="space-y-4">
                <a href="/operaciones/operaciones.html" className="flex items-center justify-between bg-primary/5 hover:bg-primary/10 px-4 py-3 rounded-lg group transition-colors">
                  <span className="text-gray-700 font-medium">Operaciones Básicas</span>
                  <svg className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed">
                  <span className="font-medium">Álgebra Básica</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Próximamente</span>
                </a>
              </div>
            </div>

            {/* Física Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover transform transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Física</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Próximamente: Material sobre mecánica, cinemática, dinámica, electricidad y más. Incluirá simulaciones interactivas y ejercicios prácticos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 opacity-60 cursor-not-allowed">
                  <span className="text-gray-400 font-medium">Mecánica Básica</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Próximamente</span>
                </div>
              </div>
            </div>

            {/* Programación Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover transform transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Programación</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Próximamente: Aprende los fundamentos de la programación con ejemplos prácticos, ejercicios interactivos y proyectos guiados.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 opacity-60 cursor-not-allowed">
                  <span className="text-gray-400 font-medium">Introducción a Python</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¡Conectemos!</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12">
            ¿Interesado en colaborar o conocer más sobre mi trabajo? 
            Me encantaría escuchar de ti.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">cangulo009@outlook.es</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-gray-600">Quito, Ecuador</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V2a2 2 0 012 2v4m0 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600">@carlosangulo</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar un proyecto juntos?</h3>
            <p className="mb-6 opacity-90">
              Siempre estoy interesado en nuevas oportunidades y proyectos innovadores.
            </p>
            <a href="https://wa.me/593983163609?text=Hola%20Carlos,%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
              </svg>
              Iniciar Conversación
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Carlos Angulo. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6">
            {/* Puedes añadir iconos de redes sociales aquí si los tenías en el footer original */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

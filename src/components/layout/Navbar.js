import React from 'react';

function Navbar({ activePage }) {
  return (
    <>
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
            <div className="hidden md:flex space-x-10">              <a 
                href={activePage === 'home' ? '#inicio' : '#/'} 
                className={`${activePage === 'home' ? 'text-gray-300 hover:text-primary' : 'text-gray-300 hover:text-primary'} transition-all duration-300 font-medium relative group py-2`}
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href={activePage === 'home' ? '#sobre-mi' : '#/#sobre-mi'} 
                className={`${activePage === 'about' ? 'text-primary' : 'text-gray-300 hover:text-primary'} transition-all duration-300 font-medium relative group py-2`}
              >
                Sobre Mí
                <span className={`absolute -bottom-1 left-0 ${activePage === 'about' ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full`}></span>
              </a>
              <a 
                href={activePage === 'home' ? '#formacion' : '#/#formacion'} 
                className={`${activePage === 'education' ? 'text-primary' : 'text-gray-300 hover:text-primary'} transition-all duration-300 font-medium relative group py-2`}
              >
                Formación
                <span className={`absolute -bottom-1 left-0 ${activePage === 'education' ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full`}></span>
              </a>
              <a 
                href="#/operaciones" 
                className={`${activePage === 'operaciones' ? 'text-primary' : 'text-gray-300 hover:text-primary'} transition-all duration-300 font-medium relative group py-2`}
              >
                Clase de Conjuntos
                <span className={`absolute -bottom-1 left-0 ${activePage === 'operaciones' ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full`}></span>
              </a>
              <a 
                href={activePage === 'home' ? '#contacto' : '#/#contacto'} 
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contacto
              </a>
            </div>
            <div className="md:hidden">
              <button id="menu-btn" className="text-gray-300 hover:text-primary transition duration-300 p-2" onClick={toggleMobileMenu}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>      <div id="mobile-menu" className="md:hidden bg-gray-900 shadow-2xl absolute top-full left-0 right-0 border-t border-gray-700 hidden">
        <div className="px-4 py-4 space-y-3">
          <a href={activePage === 'home' ? '#inicio' : '/'} className="block py-3 text-gray-300 hover:text-primary transition duration-300 border-b border-gray-700">Inicio</a>
          <a href={activePage === 'home' ? '#sobre-mi' : '/#sobre-mi'} className="block py-3 text-gray-300 hover:text-primary transition duration-300 border-b border-gray-700">Sobre Mí</a>
          <a href={activePage === 'home' ? '#formacion' : '/#formacion'} className="block py-3 text-gray-300 hover:text-primary transition duration-300 border-b border-gray-700">Formación</a>
          <a href="/operaciones/operaciones.html" className={`block py-3 ${activePage === 'operaciones' ? 'text-primary' : 'text-gray-300 hover:text-primary'} transition duration-300 border-b border-gray-700`}>Clase de Conjuntos</a>
          <a href={activePage === 'home' ? '#contacto' : '/#contacto'} className="block py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-center font-semibold hover:shadow-lg transition duration-300 mt-2">Contacto</a>
        </div>
      </div>
    </>
  );
  
  // Función para manejar el menú móvil
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
      mobileMenu.style.display = 'block';
    } else {
      mobileMenu.style.display = 'none';
    }
  }
}

export default Navbar;

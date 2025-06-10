import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function BasicOperations() {
  // Configuración de MathJax cuando el componente se monta
  useEffect(() => {
    // Carga de MathJax si no existe
    if (!window.MathJax) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      script.async = true;
      script.id = 'MathJax-script';
      
      // Configuración de MathJax
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          processEscapes: true,
          packages: ['base', 'ams']
        },
        loader: { load: ['[tex]/ams'] },
        svg: {
          fontCache: 'global'
        }
      };
      
      document.head.appendChild(script);
    } else if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      // Si MathJax ya está cargado, procesar la página
      window.MathJax.typeset();
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar activePage="operaciones" />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center text-white fade-in w-full">
          <div className="mb-8">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
              ✨ Operaciones Básicas ✨
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Operaciones con Conjuntos Numéricos
            </h1>
            <div className="text-2xl md:text-3xl mb-8 typing-animation max-w-3xl mx-auto">
              Sumar, restar, multiplicar y dividir
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10 leading-relaxed">
              Aprende las operaciones básicas con diferentes tipos de números y cómo aplicarlas en la resolución de problemas.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Próximamente...</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos preparando contenido sobre operaciones básicas. ¡Regresa pronto para ver el material completo!
            </p>          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BasicOperations;

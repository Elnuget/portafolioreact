import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import McdMcmHero from '../components/sections/McdMcmHero';
import ConceptosBasicos from '../components/sections/mcdmcm/ConceptosBasicos';
import FactorizacionPrima from '../components/sections/mcdmcm/FactorizacionPrima';
import MaximoComunDivisor from '../components/sections/mcdmcm/MaximoComunDivisor';
import MinimoComunMultiplo from '../components/sections/mcdmcm/MinimoComunMultiplo';
import ProblemasTipo from '../components/sections/mcdmcm/ProblemasTipo';
import TrucosRapidos from '../components/sections/mcdmcm/TrucosRapidos';
import EjerciciosPractica from '../components/sections/mcdmcm/EjerciciosPractica';
import MiscelaneaEjercicios from '../components/sections/mcdmcm/MiscelaneaEjercicios';

function McdMcmPage() {
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
    <div className="bg-gray-900 min-h-screen">
      <Navbar activePage="mcdmcm" />
      <div className="pt-20">
        <McdMcmHero />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ConceptosBasicos />
          <FactorizacionPrima />
          <MaximoComunDivisor />
          <MinimoComunMultiplo />          <ProblemasTipo />
          <TrucosRapidos />
          <EjerciciosPractica />
          <MiscelaneaEjercicios />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default McdMcmPage;

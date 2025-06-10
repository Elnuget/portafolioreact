import React from 'react';

function ConceptosBasicos() {
  return (
    <section id="conceptos" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          1. Conceptos Fundamentales
        </h2>
        
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Números Primos y Compuestos</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium text-white mb-2">Número Primo</h4>
            <p className="text-gray-300 mb-3">
              Es un número natural mayor que 1 que solo tiene dos divisores: 1 y él mismo.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Ejemplos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...</li>
              <li>El 2 es el único número primo par</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-medium text-white mb-2">Número Compuesto</h4>
            <p className="text-gray-300 mb-3">
              Es un número natural mayor que 1 que tiene más de dos divisores.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Ejemplos: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18...</li>
              <li>Se pueden expresar como producto de números primos</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300 font-medium">
              <span className="text-yellow-400">Nota:</span> El número 1 no es primo ni compuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConceptosBasicos;

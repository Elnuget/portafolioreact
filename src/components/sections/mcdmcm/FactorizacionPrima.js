import React from 'react';

function FactorizacionPrima() {
  return (
    <section id="factorizacion" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          2. Factorización Prima
        </h2>
        
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">¿Qué es factorizar?</h3>
          <p className="text-gray-300 mb-6">
            Factorizar un número es descomponerlo como producto de sus factores primos.
          </p>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium text-white mb-3">Método de factorización:</h4>
            <ol className="list-decimal list-inside text-gray-300 mb-6 ml-4 space-y-2">
              <li>Dividir el número entre el menor primo posible (2, 3, 5, 7, 11...)</li>
              <li>Continuar dividiendo el cociente entre primos hasta llegar a 1</li>
              <li>Expresar como producto de potencias de primos</li>
            </ol>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-medium text-white mb-3">Ejemplos:</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="font-medium text-white mb-2">Factorizar 60:</h5>
                <pre className="bg-gray-800 p-3 rounded text-gray-300 font-mono text-sm">
                  60 ÷ 2 = 30
                  30 ÷ 2 = 15
                  15 ÷ 3 = 5
                  5 ÷ 5 = 1
                </pre>
                <p className="mt-3 text-gray-300">
                  <strong>Resultado</strong>: 60 = 2² × 3 × 5
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="font-medium text-white mb-2">Factorizar 84:</h5>
                <pre className="bg-gray-800 p-3 rounded text-gray-300 font-mono text-sm">
                  84 ÷ 2 = 42
                  42 ÷ 2 = 21
                  21 ÷ 3 = 7
                  7 ÷ 7 = 1
                </pre>
                <p className="mt-3 text-gray-300">
                  <strong>Resultado</strong>: 84 = 2² × 3 × 7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactorizacionPrima;

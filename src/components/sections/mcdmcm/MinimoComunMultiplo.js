import React from 'react';

function MinimoComunMultiplo() {
  return (
    <section id="mcm" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          4. Mínimo Común Múltiplo (MCM)
        </h2>
        
        <div className="mt-6">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Definición:</h3>
            <p className="text-gray-300 mb-6">
              El MCM de dos o más números es el menor número positivo que es múltiplo de todos ellos.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Método usando factorización prima:</h3>
            <ol className="list-decimal list-inside text-gray-300 mb-6 ml-4 space-y-2">
              <li>Factorizar cada número</li>
              <li>Tomar todos los factores primos que aparecen</li>
              <li>Tomar cada factor con su mayor exponente</li>
              <li>Multiplicar estos factores</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Ejemplo: MCM(60, 84)</h3>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>60 = 2² × 3 × 5</li>
                <li>84 = 2² × 3 × 7</li>
              </ul>
              <p className="mt-3 text-gray-300">
                Todos los factores con mayor exponente: 2², 3, 5, 7
              </p>
              <p className="mt-2 text-gray-300 font-bold">
                MCM(60, 84) = 2² × 3 × 5 × 7 = 4 × 3 × 5 × 7 = 420
              </p>
            </div>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Relación importante:</h3>
            <p className="text-gray-300 text-lg font-bold text-center">
              MCD(a, b) × MCM(a, b) = a × b
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimoComunMultiplo;

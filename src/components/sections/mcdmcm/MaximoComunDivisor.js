import React from 'react';

function MaximoComunDivisor() {
  return (
    <section id="mcd" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          3. Máximo Común Divisor (MCD)
        </h2>
        
        <div className="mt-6">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Definición:</h3>
            <p className="text-gray-300 mb-6">
              El MCD de dos o más números es el mayor número que divide exactamente a todos ellos.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Método usando factorización prima:</h3>
            <ol className="list-decimal list-inside text-gray-300 mb-6 ml-4 space-y-2">
              <li>Factorizar cada número</li>
              <li>Identificar los factores primos comunes</li>
              <li>Tomar cada factor común con su menor exponente</li>
              <li>Multiplicar estos factores</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-3">Ejemplo: MCD(60, 84)</h3>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>60 = 2² × 3 × 5</li>
                <li>84 = 2² × 3 × 7</li>
              </ul>
              <p className="mt-3 text-gray-300">
                Factores comunes: 2² y 3
              </p>
              <p className="mt-2 text-gray-300 font-bold">
                MCD(60, 84) = 2² × 3 = 4 × 3 = 12
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-primary mb-3">Método de Euclides (alternativo):</h3>
            <p className="text-gray-300 mb-3">
              Para encontrar MCD(a, b):
            </p>
            <ol className="list-decimal list-inside text-gray-300 mb-6 ml-4 space-y-2">
              <li>Dividir el mayor entre el menor</li>
              <li>El divisor se convierte en dividendo, el resto en divisor</li>
              <li>Repetir hasta que el resto sea 0</li>
              <li>El último divisor es el MCD</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaximoComunDivisor;

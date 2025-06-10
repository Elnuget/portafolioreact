import React from 'react';

function TrucosRapidos() {
  return (
    <section id="trucos" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          6. Trucos Rápidos
        </h2>
        
        <div className="mt-6 space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Para identificar qué usar:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-xl font-medium text-white mb-3">MCD:</h4>
                <p className="text-gray-300 mb-3">
                  Cuando busco el mayor valor que divide a todos
                </p>
                <p className="text-gray-300 italic">
                  Palabras clave: "mayor", "repartir", "dividir en partes iguales"
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-xl font-medium text-white mb-3">MCM:</h4>
                <p className="text-gray-300 mb-3">
                  Cuando busco el menor valor que contiene a todos
                </p>
                <p className="text-gray-300 italic">
                  Palabras clave: "coincidir", "repetirse", "cada cuánto tiempo"
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Casos especiales:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4 space-y-2">
              <li>Si los números son primos entre sí (MCD = 1): MCM = producto de los números</li>
              <li>MCD(a, b) × MCM(a, b) = a × b (siempre se cumple)</li>
              <li>MCD(a, a) = a y MCM(a, a) = a</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-primary mb-4">Verificación rápida:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4 space-y-2">
              <li>El MCD siempre divide a ambos números originales</li>
              <li>Ambos números originales siempre dividen al MCM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrucosRapidos;

import React from 'react';

function ProblemasTipo() {
  return (
    <section id="problemas" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          5. Problemas Tipo y Trucos
        </h2>
        
        <div className="mt-6 space-y-10">
          {/* Problema Tipo 1 */}
          <div className="bg-gray-700 rounded-lg p-5">
            <h3 className="text-2xl font-semibold text-primary mb-4">Problema Tipo 1: Repartir equitativamente</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Enunciado:</h4>
              <p className="text-gray-300 mb-4 italic border-l-4 border-yellow-500 pl-4 py-2">
                "Tengo 48 manzanas y 72 naranjas. Quiero hacer el mayor número de bolsas iguales sin que sobre fruta. ¿Cuántas bolsas puedo hacer y qué contendrá cada una?"
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Solución:</h4>
              <p className="text-gray-300 mb-3">
                Necesito el MCD(48, 72)
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>48 = 2⁴ × 3</li>
                <li>72 = 2³ × 3²</li>
                <li>MCD(48, 72) = 2³ × 3 = 24</li>
              </ul>
              <p className="text-gray-300 font-bold">
                Respuesta: 24 bolsas, cada una con 2 manzanas y 3 naranjas.
              </p>
            </div>
            
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-yellow-400 font-medium">
                Truco: Si el problema habla de "repartir en partes iguales", "grupos iguales", "el mayor número de...", usa MCD.
              </p>
            </div>
          </div>
          
          {/* Problema Tipo 2 */}
          <div className="bg-gray-700 rounded-lg p-5">
            <h3 className="text-2xl font-semibold text-primary mb-4">Problema Tipo 2: Coincidencia de eventos</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Enunciado:</h4>
              <p className="text-gray-300 mb-4 italic border-l-4 border-yellow-500 pl-4 py-2">
                "Un autobús pasa cada 12 minutos y otro cada 18 minutos. Si salen juntos a las 8:00 AM, ¿a qué hora volverán a coincidir?"
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Solución:</h4>
              <p className="text-gray-300 mb-3">
                Necesito el MCM(12, 18)
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>12 = 2² × 3</li>
                <li>18 = 2 × 3²</li>
                <li>MCM(12, 18) = 2² × 3² = 36</li>
              </ul>
              <p className="text-gray-300 font-bold">
                Respuesta: Volverán a coincidir en 36 minutos, a las 8:36 AM.
              </p>
            </div>
            
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-yellow-400 font-medium">
                Truco: Si el problema habla de "volver a coincidir", "repetirse juntos", "cada cuánto tiempo", usa MCM.
              </p>
            </div>
          </div>
          
          {/* Problema Tipo 3 */}
          <div className="bg-gray-700 rounded-lg p-5">
            <h3 className="text-2xl font-semibold text-primary mb-4">Problema Tipo 3: Medidas exactas</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Enunciado:</h4>
              <p className="text-gray-300 mb-4 italic border-l-4 border-yellow-500 pl-4 py-2">
                "Quiero embaldosar un piso rectangular de 84 cm × 60 cm con baldosas cuadradas lo más grandes posible. ¿Cuál debe ser el lado de cada baldosa?"
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium text-white mb-2">Solución:</h4>
              <p className="text-gray-300 mb-3">
                Necesito el MCD(84, 60)
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>84 = 2² × 3 × 7</li>
                <li>60 = 2² × 3 × 5</li>
                <li>MCD(84, 60) = 2² × 3 = 12</li>
              </ul>
              <p className="text-gray-300 font-bold">
                Respuesta: Baldosas de 12 cm × 12 cm.
              </p>
            </div>
            
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-yellow-400 font-medium">
                Truco: Si busco "la mayor medida", "el mayor tamaño", usa MCD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemasTipo;

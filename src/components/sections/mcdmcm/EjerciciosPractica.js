import React, { useState } from 'react';

function EjerciciosPractica() {
  const [mostrarSoluciones, setMostrarSoluciones] = useState(false);
  
  return (
    <section id="ejercicios" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          7. Ejercicios de Práctica
        </h2>
        
        <div className="mt-6">
          <div className="mb-8">
            <ol className="list-decimal ml-6 space-y-6">
              <li className="text-gray-300 text-lg">
                Encuentra MCD y MCM de 36 y 48
              </li>
              <li className="text-gray-300 text-lg">
                Un semáforo cambia cada 45 segundos y otro cada 75 segundos. ¿Cada cuánto tiempo cambian juntos?
              </li>
              <li className="text-gray-300 text-lg">
                Quiero cortar listones de 90 cm y 126 cm en pedazos iguales lo más largos posible. ¿Cuánto debe medir cada pedazo?
              </li>
            </ol>
          </div>
          
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => setMostrarSoluciones(!mostrarSoluciones)}
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg"
            >
              {mostrarSoluciones ? 'Ocultar Soluciones' : 'Mostrar Soluciones'}
            </button>
          </div>
          
          {mostrarSoluciones && (
            <div className="bg-gray-700 p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Soluciones:</h3>
              <ol className="list-decimal ml-6 space-y-4">
                <li className="text-gray-300">
                  <span className="font-bold">MCD(36, 48) = 12;</span> <span className="font-bold">MCM(36, 48) = 144</span>
                  <div className="mt-2 text-sm text-gray-400">
                    36 = 2² × 3² y 48 = 2⁴ × 3<br />
                    MCD: factores comunes con menor exponente: 2² × 3 = 12<br />
                    MCM: factores con mayor exponente: 2⁴ × 3² = 144
                  </div>
                </li>
                <li className="text-gray-300">
                  <span className="font-bold">MCM(45, 75) = 225 segundos = 3 minutos 45 segundos</span>
                  <div className="mt-2 text-sm text-gray-400">
                    45 = 3² × 5 y 75 = 3 × 5²<br />
                    MCM: factores con mayor exponente: 3² × 5² = 225
                  </div>
                </li>
                <li className="text-gray-300">
                  <span className="font-bold">MCD(90, 126) = 18 cm</span>
                  <div className="mt-2 text-sm text-gray-400">
                    90 = 2 × 3² × 5 y 126 = 2 × 3² × 7<br />
                    MCD: factores comunes con menor exponente: 2 × 3² = 18
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EjerciciosPractica;

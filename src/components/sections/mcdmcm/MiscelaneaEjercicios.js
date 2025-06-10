import React, { useState } from 'react';

function MiscelaneaEjercicios() {
  const [mostrarRespuestas, setMostrarRespuestas] = useState({});
  
  const toggleRespuesta = (id) => {
    setMostrarRespuestas(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <section id="miscelanea" className="mb-16">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
          Miscelánea de 20 Ejercicios: MCD y MCM
        </h2>
        
        <div className="mt-6 space-y-8">
          {/* Ejercicios de Cálculo Directo */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Ejercicios de Cálculo Directo</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>1.</strong> Encuentra el MCD y MCM de 24 y 36.</p>
                <button 
                  onClick={() => toggleRespuesta('ej1')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej1'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej1'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(24,36) = 12; MCM(24,36) = 72</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>2.</strong> Calcula el MCD y MCM de 45, 60 y 75.</p>
                <button 
                  onClick={() => toggleRespuesta('ej2')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej2'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej2'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(45,60,75) = 15; MCM(45,60,75) = 300</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>3.</strong> Determina el MCD y MCM de 56 y 84.</p>
                <button 
                  onClick={() => toggleRespuesta('ej3')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej3'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej3'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(56,84) = 28; MCM(56,84) = 168</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>4.</strong> Halla el MCD y MCM de 72, 108 y 144.</p>
                <button 
                  onClick={() => toggleRespuesta('ej4')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej4'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej4'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(72,108,144) = 36; MCM(72,108,144) = 432</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>5.</strong> Encuentra el MCD y MCM de 35 y 49.</p>
                <button 
                  onClick={() => toggleRespuesta('ej5')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej5'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej5'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(35,49) = 7; MCM(35,49) = 245</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Problemas de Aplicación */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Problemas de Aplicación - Repartición y División</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>6.</strong> Una maestra tiene 48 lápices rojos y 72 lápices azules. Quiere hacer el mayor número de paquetes iguales sin que sobre ningún lápiz. ¿Cuántos paquetes puede hacer y qué contendrá cada uno?</p>
                <button 
                  onClick={() => toggleRespuesta('ej6')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej6'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej6'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(48,72) = 24 paquetes. Cada paquete: 2 lápices rojos y 3 azules.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>7.</strong> En una fábrica se producen tornillos en cajas de 80 unidades y tuercas en cajas de 120 unidades. Se quiere hacer el mayor número de kits iguales usando todas las cajas. Si hay 15 cajas de tornillos y 10 cajas de tuercas, ¿cuántos kits se pueden hacer?</p>
                <button 
                  onClick={() => toggleRespuesta('ej7')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej7'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej7'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">Total tornillos: 1200, tuercas: 1200. MCD(1200,1200) = 1200. Se puede hacer 1 kit con todos los tornillos y tuercas.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>8.</strong> Un carpintero tiene tres tablas de 96 cm, 144 cm y 120 cm. Quiere cortarlas en pedazos iguales de la mayor longitud posible sin desperdiciar madera. ¿Cuánto debe medir cada pedazo y cuántos pedazos obtendrá en total?</p>
                <button 
                  onClick={() => toggleRespuesta('ej8')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej8'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej8'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(96,144,120) = 24 cm cada pedazo. Total: 4+6+5 = 15 pedazos.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Problemas de Coincidencia */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Problemas de Coincidencia y Periodicidad</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>9.</strong> Tres amigos van al gimnasio: Ana cada 4 días, Beto cada 6 días y Carlos cada 9 días. Si fueron juntos el lunes, ¿qué día de la semana volverán a coincidir y después de cuántos días?</p>
                <button 
                  onClick={() => toggleRespuesta('ej9')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej9'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej9'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(4,6,9) = 36 días después, será miércoles.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>10.</strong> En una avenida, un semáforo cambia cada 90 segundos, otro cada 120 segundos y un tercero cada 150 segundos. Si cambian juntos a las 3:00 PM, ¿a qué hora volverán a cambiar simultáneamente?</p>
                <button 
                  onClick={() => toggleRespuesta('ej10')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej10'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej10'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(90,120,150) = 1800 segundos = 30 minutos. A las 3:30 PM.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>11.</strong> Dos satélites orbitan la Tierra: uno completa una vuelta cada 12 horas y otro cada 18 horas. Si pasan juntos sobre una ciudad a las 6:00 AM, ¿cuándo volverán a pasar juntos sobre la misma ciudad?</p>
                <button 
                  onClick={() => toggleRespuesta('ej11')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej11'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej11'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(12,18) = 36 horas = 1.5 días. A las 6:00 PM del día siguiente.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>12.</strong> Un autobús de la ruta A pasa cada 25 minutos y uno de la ruta B cada 35 minutos. Si ambos pasan por la parada a las 8:00 AM, ¿a qué horas coincidirán nuevamente durante el día?</p>
                <button 
                  onClick={() => toggleRespuesta('ej12')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej12'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej12'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(25,35) = 175 minutos = 2h 55min. Coincidirán a las 10:55 AM, 1:50 PM, 4:45 PM, etc.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Problemas de Medidas */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Problemas de Medidas y Construcción</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>13.</strong> Se quiere embaldosar una pared rectangular de 180 cm de alto por 240 cm de ancho con azulejos cuadrados del mayor tamaño posible. ¿Cuál debe ser el lado de cada azulejo y cuántos azulejos se necesitarán?</p>
                <button 
                  onClick={() => toggleRespuesta('ej13')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej13'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej13'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(180,240) = 60 cm cada azulejo. Necesitará 3×4 = 12 azulejos.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>14.</strong> Un jardinero quiere plantar árboles en hileras alrededor de un terreno rectangular de 84 metros de largo por 126 metros de ancho, colocándolos a la mayor distancia posible pero igual entre ellos. ¿A qué distancia debe plantar cada árbol?</p>
                <button 
                  onClick={() => toggleRespuesta('ej14')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej14'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej14'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(84,126) = 42 metros de distancia entre árboles.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>15.</strong> Para hacer una cerca, se tienen postes de 2.4 metros y 3.6 metros de altura. Se quieren cortar en pedazos iguales de la mayor longitud posible para hacer una cerca uniforme. ¿Cuánto debe medir cada pedazo?</p>
                <button 
                  onClick={() => toggleRespuesta('ej15')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej15'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej15'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCD(240,360) = 120 cm = 1.2 m cada pedazo.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Problemas Mixtos */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Problemas Mixtos y Desafiantes</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>16.</strong> En una escuela, las clases de educación física duran 45 minutos, las de matemáticas 60 minutos y las de arte 75 minutos. Si todas comienzan a las 8:00 AM, ¿cuándo terminarán todas simultáneamente por primera vez?</p>
                <button 
                  onClick={() => toggleRespuesta('ej16')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej16'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej16'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(45,60,75) = 900 minutos = 15 horas. A las 11:00 PM.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>17.</strong> Una panadería hace pan cada 8 horas, pasteles cada 12 horas y galletas cada 18 horas. Si empezaron a hacer todo a las 6:00 AM del lunes, ¿qué día y a qué hora volverán a hacer los tres productos al mismo tiempo?</p>
                <button 
                  onClick={() => toggleRespuesta('ej17')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej17'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej17'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(8,12,18) = 72 horas = 3 días. El jueves a las 6:00 AM.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>18.</strong> Tres máquinas producen piezas a diferentes ritmos: la primera produce una pieza cada 15 minutos, la segunda cada 20 minutos y la tercera cada 25 minutos. Si empezaron a producir juntas a las 9:00 AM, ¿cuándo volverán a terminar una pieza simultáneamente?</p>
                <button 
                  onClick={() => toggleRespuesta('ej18')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej18'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej18'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(15,20,25) = 300 minutos = 5 horas. A las 2:00 PM.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>19.</strong> Un agricultor tiene tres campos rectangulares que quiere dividir en parcelas cuadradas iguales del mayor tamaño posible. Los campos miden 150×200 metros, 180×240 metros y 120×160 metros respectivamente. ¿Cuál debe ser el lado de cada parcela?</p>
                <button 
                  onClick={() => toggleRespuesta('ej19')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej19'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej19'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">Campo 1: MCD(150,200) = 50m; Campo 2: MCD(180,240) = 60m; Campo 3: MCD(120,160) = 40m. Para unificar: MCD(50,60,40) = 10m cada parcela.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300 mb-3"><strong>20.</strong> En una competencia atlética, tres corredores dan vueltas a una pista: el primero completa una vuelta en 4 minutos, el segundo en 5 minutos y el tercero en 6 minutos. Si salen juntos, ¿después de cuánto tiempo volverán a estar juntos en la línea de salida y cuántas vueltas habrá dado cada uno?</p>
                <button 
                  onClick={() => toggleRespuesta('ej20')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
                >
                  {mostrarRespuestas['ej20'] ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
                {mostrarRespuestas['ej20'] && (
                  <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                    <p className="text-gray-200">MCM(4,5,6) = 60 minutos. Primer corredor: 15 vueltas, segundo: 12 vueltas, tercero: 10 vueltas.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Botón para mostrar todas las respuestas */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => {
                const allIds = Array.from({length: 20}, (_, i) => `ej${i+1}`);
                const allShown = allIds.every(id => mostrarRespuestas[id]);
                
                if (allShown) {
                  // Ocultar todas
                  const newState = {};
                  allIds.forEach(id => newState[id] = false);
                  setMostrarRespuestas(newState);
                } else {
                  // Mostrar todas
                  const newState = {};
                  allIds.forEach(id => newState[id] = true);
                  setMostrarRespuestas(newState);
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              {Object.keys(mostrarRespuestas).length === 20 && Object.values(mostrarRespuestas).every(val => val) 
                ? 'Ocultar Todas las Respuestas' 
                : 'Mostrar Todas las Respuestas'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiscelaneaEjercicios;

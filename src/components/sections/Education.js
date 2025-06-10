import React from 'react';

function Education() {
  return (
    <section id="formacion" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Formación Académica</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Una combinación única de conocimientos técnicos y pedagógicos</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Magíster en Entornos Virtuales</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Especialización avanzada en el diseño, desarrollo e implementación de entornos virtuales de aprendizaje.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">E-Learning</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">LMS</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tecnología Educativa</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Tecnólogo en Desarrollo de Software</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Formación técnica especializada en desarrollo de aplicaciones, programación y arquitectura de software.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Programación</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Desarrollo Web</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Bases de Datos</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Licenciado Físico Matemático</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Sólida formación en ciencias exactas que proporciona una base analítica y metodológica excepcional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Análisis Matemático</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Física Aplicada</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Investigación</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

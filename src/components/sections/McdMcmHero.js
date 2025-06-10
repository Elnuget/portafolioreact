import React from 'react';

function McdMcmHero() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/public/images/math-pattern.png')] opacity-10 bg-repeat"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MCD y MCM
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Máximo Común Divisor y Mínimo Común Múltiplo: conceptos fundamentales y aplicaciones prácticas
          </p>          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#conceptos" className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg hover:shadow-primary/30">
              Comenzar
            </a>
            <a href="#ejercicios" className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all border border-gray-700">
              Ejercicios Básicos
            </a>
            <a href="#miscelanea" className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all border border-gray-700">
              Miscelánea de Ejercicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default McdMcmHero;

import React from 'react';
import '../../components/styles/ContentStyles.css';

function OperationsHero() {
  return (
    <section className="gradient-bg pt-24 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center text-white fade-in w-full">
        <div className="mb-8">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
            ✨ Operaciones Básicas ✨
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Operaciones con Conjuntos Numéricos
          </h1>
          <div className="text-2xl md:text-3xl mb-8 typing-animation max-w-3xl mx-auto">
            Sumar, restar, multiplicar y dividir
          </div>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10 leading-relaxed">
            Aprende las operaciones básicas con diferentes tipos de números y cómo aplicarlas en la resolución de problemas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OperationsHero;

import React from 'react';

function ComingSoon({ returnLink, returnText }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Próximamente...</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos preparando contenido sobre operaciones básicas. ¡Regresa pronto para ver el material completo!
          </p>
        </div>
        
        {returnLink && (
          <div className="mt-12 text-center">
            <a 
              href={returnLink} 
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {returnText || '← Volver'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default ComingSoon;

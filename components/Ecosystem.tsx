
import React from 'react';
import Card from './ui/Card';
import { products } from '../constants';

const Ecosystem: React.FC<{ setView: (view: 'coming-soon', productName: string) => void }> = ({ setView }) => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">One Unified Platform</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Aivana is a seamlessly integrated ecosystem supporting healthcare professionals at every stage of their journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="text-center p-8 flex flex-col items-center">
              <div className="mb-5 bg-blue-100 rounded-full p-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{product.name}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{product.shortDescription}</p>
              {product.url ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors group mt-auto"
                >
                  Learn More <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              ) : (
                <button
                  onClick={() => setView('coming-soon', product.name)}
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors group mt-auto"
                >
                  Learn More <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
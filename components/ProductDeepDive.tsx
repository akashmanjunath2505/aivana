
import React, { useState } from 'react';
import { products } from '../constants';
import type { Product } from '../types';

const AccordionItem: React.FC<{
  product: Product;
  isOpen: boolean;
  onClick: () => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ product, isOpen, onClick, handleNavClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0" id={`deep-dive-${product.id}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-slate-100/70 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`content-${product.id}`}
      >
        <div className="flex items-center">
          <div className="hidden sm:block mr-5 text-blue-600 bg-blue-100 p-2 rounded-lg">{React.cloneElement(product.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}</div>
          <span className="text-xl font-semibold text-slate-800">{product.name}</span>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        id={`content-${product.id}`}
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-8 bg-white">
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Key Features</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                  {product.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="mt-6 space-y-3 text-sm">
                    <p><strong className="font-semibold text-slate-700">Compatibility:</strong> {product.compatibility}</p>
                    <p><strong className="font-semibold text-slate-700">Integration:</strong> {product.integration}</p>
                    <p><strong className="font-semibold text-slate-700">Regulatory Status:</strong> {product.regulatory}</p>
                </div>
                 <a 
                  href="#contact" 
                  onClick={handleNavClick}
                  className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow transform hover:scale-105"
                >
                  Request Pilot
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const ProductDeepDive: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerElement = document.querySelector('header');
      const headerOffset = headerElement ? headerElement.offsetHeight : 88;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="deep-dive" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">A Closer Look</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Explore the features and specifications that make each component of the Aivana ecosystem powerful and unique.
          </p>
        </div>
        <div className="rounded-xl shadow-xl overflow-hidden border border-slate-200 bg-slate-50">
          {products.map((product, index) => (
            <AccordionItem
              key={product.id}
              product={product}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              handleNavClick={handleNavClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDeepDive;
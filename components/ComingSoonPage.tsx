import React from 'react';

const ComingSoonPage: React.FC<{ productName: string; setView: (view: 'main') => void; }> = ({ productName, setView }) => {
  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center min-h-[calc(100vh-88px)]">
        <div className="relative mb-8">
            <div className="absolute -inset-2 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{productName}</h1>
        </div>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-blue-600 animate-text-glow">is Coming Soon!</p>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          We are hard at work building this innovative solution to enhance our ecosystem. Join our newsletter to be the first to know when it launches.
        </p>
        <button 
          onClick={() => setView('main')} 
          className="mt-12 bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          &larr; Back to Aivana Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPage;

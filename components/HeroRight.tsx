import React from 'react';

const HeroRight: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
      {/* Background layers */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute top-10 left-20 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 sm:w-80 sm:h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Foreground graphic */}
      <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full border border-slate-200/80 flex items-center justify-center p-4 bg-white/40 backdrop-blur-md">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central icon: Heart + Pulse/AI element */}
          <svg viewBox="0 0 24 24" className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600 absolute z-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            <path d="M8 12h2l2 4 2-8 2 4h2" />
          </svg>
          {/* Orbiting data points */}
          <div className="absolute w-full h-full rounded-full" style={{ animation: 'spin 20s linear infinite' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3 h-3 bg-indigo-500 rounded-full shadow-md"></div>
          </div>
          <div className="absolute w-[75%] h-[75%] rounded-full" style={{ animation: 'spin 15s linear infinite reverse' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3 h-3 bg-sky-500 rounded-full shadow-md"></div>
          </div>
          <div className="absolute w-[50%] h-[50%] rounded-full" style={{ animation: 'spin 10s linear infinite' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3 h-3 bg-blue-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
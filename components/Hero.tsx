
import React from 'react';
import HeroRight from './HeroRight';

const Hero: React.FC = () => {
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
    <>
      <section
        id="home"
        className="relative min-h-[95vh] flex items-center text-slate-900 bg-white overflow-hidden py-20 md:py-0"
      >
        <div className="container mx-auto px-6 h-full flex items-center">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full animate-fadeIn"
          >
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight flex flex-col leading-tight">
                <span className="block">Care</span>
                <span className="block text-blue-500">Meets</span>
                <span className="block">Intelligence</span>
              </h1>
              <div className="mt-6">
                <p className="text-lg md:text-xl max-w-2xl text-slate-600 leading-relaxed mx-auto lg:mx-0">
                  AI with a Heart for Healthcare
                </p>
                <a
                  href="#ecosystem"
                  onClick={handleNavClick}
                  className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore the Ecosystem
                </a>
              </div>
            </div>

            {/* Right Side */}
            <HeroRight />

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

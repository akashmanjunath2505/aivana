
import React, { useState } from 'react';

const AivanaLogo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,2H4C2.895,2,2,2.895,2,4v16c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V4C22,2.895,21.105,2,20,2z M18,13h-4v4h-2v-4H8v-2h4V7h2v4h4V13z" />
    </svg>
    <span className="font-bold text-2xl text-slate-800 tracking-wider">AIVANA</span>
  </div>
);

const Header: React.FC<{ setView: (view: 'main' | 'blog') => void; currentView: 'main' | 'blog' }> = ({ setView, currentView }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navItems = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Why Aivana?', href: '#why-aivana' },
    { name: 'Impact', href: '#impact' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '/blog') {
      setView('blog');
      return;
    }

    const scrollToTarget = () => {
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

    if (currentView !== 'main') {
      setView('main');
      // Wait for the main view to render before scrolling
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  return (
    <header className="sticky top-0 bg-white/70 bg-gradient-to-r from-slate-50/70 to-blue-100/60 backdrop-blur-lg z-50 shadow-sm border-b border-slate-900/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={() => setView('main')} aria-label="Go to homepage">
            <AivanaLogo />
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-slate-500 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <input 
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out outline-none rounded-md bg-slate-200/70 text-sm px-2 py-1 border border-transparent focus:border-blue-400 focus:ring-blue-400 ${isSearchOpen ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
            />
          </div>
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm transform hover:scale-105"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
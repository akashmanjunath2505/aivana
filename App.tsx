
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import WhyAivana from './components/WhyAivana';
import ProductDeepDive from './components/ProductDeepDive';
import ImpactStories from './components/ImpactStories';
import EcosystemFlow from './components/EcosystemFlow';
import Team from './components/Team';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ComingSoonPage from './components/ComingSoonPage';

const Preloader: React.FC<{ isExiting: boolean }> = ({ isExiting }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 200),  // Start typing title
            setTimeout(() => setPhase(2), 2200), // Show subtitle after typing (2s duration)
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const fullTitle = "What if AI had a Pulse?";

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center preloader-container transition-opacity duration-800 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            <div className="preloader-content px-4">
                {phase >= 1 && (
                    <h1 className="preloader-title">
                        <span 
                            className="typing-effect"
                            style={{ 
                                width: `${fullTitle.length}ch`, 
                                animation: `typing 2s steps(${fullTitle.length}) forwards` 
                            }}
                        >
                            {fullTitle}
                        </span>
                    </h1>
                )}
                
                {phase >= 2 && (
                    <p className="preloader-subtitle">
                        AI with a Heart for Healthcare
                    </p>
                )}
            </div>
        </div>
    );
};


const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [view, setView] = useState<'main' | 'blog' | 'coming-soon'>('main');
  const [comingSoonProduct, setComingSoonProduct] = useState<string>('');

  useEffect(() => {
    // Set initial background color, will be overridden by main app when loaded
    document.body.style.backgroundColor = '#000';

    // Start exit animation for the preloader
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    // Finish loading and show app content after exit animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      // Let the component's class handle the final background color
      document.body.style.backgroundColor = '';
    }, 3800); // 3000ms wait + 800ms fade-out

    return () => {
        clearTimeout(exitTimer);
        clearTimeout(loadTimer);
    };
  }, []);

  const handleSetView = (newView: 'main' | 'blog' | 'coming-soon', productName?: string) => {
    setView(newView);
    if (newView === 'coming-soon' && productName) {
      setComingSoonProduct(productName);
    } else if (newView !== 'coming-soon') {
      setComingSoonProduct('');
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!isLoaded && <Preloader isExiting={isExiting} />}
      <div className={`bg-gray-50 min-h-screen text-slate-800 transition-opacity duration-800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-10 opacity-50"></div>
        <Header setView={handleSetView} currentView={view} />
        
        {view === 'main' ? (
          <>
            <main>
              <Hero />
              <Ecosystem setView={handleSetView} />
              <WhyAivana />
              <ProductDeepDive />
              <ImpactStories />
              <EcosystemFlow />
              <Team />
            </main>
            <Footer setView={handleSetView} currentView={view} />
          </>
        ) : view === 'blog' ? (
          <BlogPage setView={handleSetView} />
        ) : (
          <ComingSoonPage productName={comingSoonProduct} setView={handleSetView} />
        )}
      </div>
    </>
  );
};

export default App;
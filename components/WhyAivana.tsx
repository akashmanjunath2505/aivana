import React, { useState, useEffect, useRef } from 'react';
import { pillars, stats } from '../constants';
import Card from './ui/Card';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | null>(null);

  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    const elapsedTime = timestamp - startTimeRef.current;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentCount = Math.floor(progress * end);
    setCount(currentCount);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTimeRef.current = null; // Reset on trigger
          animationFrameRef.current = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return { count, ref };
};

const AnimatedStat: React.FC<{stat: typeof stats[0]}> = ({ stat }) => {
    const { count, ref } = useCountUp(parseInt(stat.value, 10));
    const suffix = stat.label === 'Educators' ? '+' : '';
    const label = stat.label;
    
    let fullLabel = '';
    if (label === 'Educators') fullLabel = 'Educators & Institutions Partnered';
    else if (label === 'ED Directors') fullLabel = 'ED Directors in Collaboration';
    else if (label === 'Prototype') fullLabel = 'Prototype at Technology Readiness Level';


    return (
         <div ref={ref} className="py-4 md:py-0">
            <p className="text-5xl lg:text-6xl font-extrabold text-blue-600">{label === 'Prototype' ? `TRL ${count}` : `${count}${suffix}`}</p>
            <p className="text-lg text-slate-500 mt-2">{fullLabel}</p>
        </div>
    );
}

const WhyAivana: React.FC = () => {
  return (
    <section id="why-aivana" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Why Aivana?</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We are more than a technology vendor; we are a dedicated partner in advancing healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                    {pillar.icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-slate-900">{pillar.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyAivana;
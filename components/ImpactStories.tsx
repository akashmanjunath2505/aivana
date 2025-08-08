
import React from 'react';
import { impactStories } from '../constants';

const ImpactStories: React.FC = () => {
  return (
    <section id="impact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Real-World Impact</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Hear from the students, clinicians, and partners who are experiencing the Aivana difference firsthand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impactStories.map((story) => (
            <div key={story.author} className="flex flex-col">
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 mb-8 border border-slate-100 flex-grow">
                 <span className="absolute top-4 left-6 text-8xl text-blue-100/80 font-serif opacity-75 z-0">“</span>
                <p className="text-slate-600 italic relative z-10 leading-relaxed">"{story.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-14 h-14 rounded-full object-cover shadow-lg"
                />
                <div className="ml-4">
                  <p className="font-bold text-slate-800">{story.author}</p>
                  <p className="text-sm text-slate-500">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;

import React from 'react';
import Card from './ui/Card';
import { teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Team & Vision</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We are a collective of clinicians, engineers, and visionaries committed to one goal.
          </p>
          <Card className="mt-10 text-center p-8 bg-white/80 backdrop-blur-sm border-blue-100">
            <p className="text-xl md:text-2xl italic text-blue-800 leading-relaxed">"Transforming healthcare through AI with empathy, one interaction at a time."</p>
            <p className="mt-3 text-slate-600 font-semibold">- Aivana Mission Statement</p>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center flex flex-col items-center max-w-sm mx-auto group">
              <div className="relative w-40 h-40">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover shadow-lg transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.role}</p>
              <p className="mt-2 text-slate-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-3xl font-bold text-slate-900">Our Collaborative Core</h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                A team of future doctors, educators, and clinicians are with us from the creation of the product from scratch. Their expertise ensures everything we build is grounded in real-world needs and is ready for the future of healthcare.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Team;

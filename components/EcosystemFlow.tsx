
import React from 'react';
import { MedstudentIcon, DoctorIcon } from '../constants';

const HospitalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 0 1 2.25-2.25h6a2.25 2.25 0 0 1 2.25 2.25V21" />
  </svg>
);

const FlowStep: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    isLast?: boolean;
}> = ({ icon, title, description, isLast = false }) => (
    <div className="relative flex-1 flex flex-col items-center text-center px-4">
        <div className="bg-white p-4 rounded-full shadow-lg border-2 border-blue-100 z-10">
            {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-slate-600 leading-relaxed">{description}</p>
        {!isLast && (
             <div aria-hidden="true" className="absolute top-9 left-1/2 w-full h-px hidden md:block z-0">
                <svg width="100%" height="100%" className="overflow-visible">
                    <line x1="0" y1="0" x2="100%" y2="0" strokeWidth="2" strokeDasharray="8 8" className="stroke-blue-300" />
                    <path d="M 100% 0, 95% -5, 95% 5 Z" className="fill-blue-300" />
                </svg>
             </div>
        )}
    </div>
);

const EcosystemFlow: React.FC = () => {
  return (
    <section id="flow" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">The Aivana Journey</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From learning foundational skills to managing complex hospital systems, our ecosystem provides continuous support.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 md:space-x-8 max-w-5xl mx-auto">
            <FlowStep 
                icon={<MedstudentIcon className="w-12 h-12 text-blue-600" />}
                title="Student"
                description="Builds core competencies with Medanna's virtual patient simulations."
            />
            <FlowStep 
                icon={<DoctorIcon className="w-12 h-12 text-blue-600" />}
                title="Doctor"
                description="Enhances diagnostic accuracy with Doctor AI's clinical decision support."
            />
            <FlowStep 
                icon={<HospitalIcon className="w-12 h-12 text-blue-600" />}
                title="Hospital"
                description="Optimizes resource flow with Triage IQ and ImageDx."
                isLast
            />
        </div>
      </div>
    </section>
  );
};

export default EcosystemFlow;

import React from 'react';
import type { Product, Pillar, Stat, ImpactStory, TeamMember } from './types';

// Icons
export const MedstudentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-2.5h3v2.5h-3zm6.5-5.5c-.91 1.7-2.42 2.65-4 3V12c.96-.35 1.5-.9 1.5-1.5 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .6.54 1.15 1.5 1.5v2c-1.58-.35-3.09-1.3-4-3-.91-1.7-.91-3.3 0-5 .91-1.7 2.42-2.65 4-3v2c-.96.35-1.5.9-1.5 1.5 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.6-.54-1.15-1.5-1.5V6c1.58.35 3.09 1.3 4 3 .91 1.7.91 3.3 0 5z"/>
  </svg>
);

export const DoctorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-7c0-4.97-4.03-9-9-9zm-3.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5 2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 5c3.04 0 5.5 2.46 5.5 5.5V11h-2v-.5c0-1.93-1.57-3.5-3.5-3.5S8.5 8.57 8.5 10.5V11h-2v-.5C6.5 7.46 8.96 5 12 5z"/>
  </svg>
);

const TriageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"/>
  </svg>
);

const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.78 18.65l.28-4.23 7.07-7.07-1.41-1.41-7.07 7.07-4.23.28.28 4.23zM11 21.05l-1.07-1.07L11 19l1.07 1.07L11 21.05zM3 17.25l-1.07-1.07L3 15l1.07 1.07L3 17.25zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);


// Product Data
export const products: Product[] = [
  {
    id: 'medanna',
    name: 'Medanna',
    shortDescription: 'Virtual patient simulation and learning for medical students.',
    icon: <MedstudentIcon className="w-10 h-10 text-blue-600" />,
    features: ['Dynamic Patient Scenarios', 'Real-time Feedback', 'Performance Analytics'],
    specs: 'Cloud-based platform with VR headset compatibility.',
    compatibility: 'Web, iOS, Android, Oculus Quest 2.',
    integration: 'Integrates with university learning management systems (LMS).',
    regulatory: 'Compliant with educational privacy standards.',
    screenshot: 'https://images.unsplash.com/photo-1587825140708-df876c12b44e?q=80&w=1200&auto=format&fit=crop',
    url: 'https://medanna.aivanahealth.com',
  },
  {
    id: 'doctor-ai',
    name: 'Doctor AI',
    shortDescription: 'Advanced clinical decision support for practicing physicians.',
    icon: <DoctorIcon className="w-10 h-10 text-blue-600" />,
    features: ['Differential Diagnosis Generator', 'Evidence-based Treatment Suggestions', 'Pharmacology Interaction Checker'],
    specs: 'Secure, HIPAA-compliant AI model.',
    compatibility: 'Desktop & Mobile Web, EHR Plugin.',
    integration: 'FHIR-based API for seamless EHR integration.',
    regulatory: 'FDA 510(k) clearance pending.',
    screenshot: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
    url: 'https://doctorai.aivanahealth.com',
  },
  {
    id: 'triage-iq',
    name: 'Triage IQ',
    shortDescription: 'High-speed, AI-driven emergency department triage engine.',
    icon: <TriageIcon className="w-10 h-10 text-blue-600" />,
    features: ['Predictive Acuity Scoring', 'Resource Allocation Optimization', 'Real-time Dashboard'],
    specs: 'Processes patient data in under 2 seconds.',
    compatibility: 'Integrates with existing triage stations and patient monitors.',
    integration: 'HL7 and FHIR messaging protocols.',
    regulatory: 'CE Marked, TRL 6 Prototype.',
    screenshot: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'imagedx',
    name: 'ImageDx',
    shortDescription: 'AI-powered assistant for diagnostic imaging analysis.',
    icon: <ImageIcon className="w-10 h-10 text-blue-600" />,
    features: ['Anomaly Detection in X-Rays/CTs', 'Quantifiable Lesion Measurement', 'Prioritization Workflow'],
    specs: 'Trained on over 10 million anonymized images.',
    compatibility: 'Works with standard DICOM viewers and PACS.',
    integration: 'Seamless PACS/RIS integration via DICOM standard.',
    regulatory: 'Research Use Only (RUO). Clinical validation underway.',
    screenshot: 'https://images.unsplash.com/photo-1624969862293-f8a9e479ab62?q=80&w=1200&auto=format&fit=crop',
  },
];

// Why Aivana Data
export const pillars: Pillar[] = [
  {
    title: 'Clinically Co-Developed',
    description: 'Our solutions are built in partnership with practicing clinicians and educators to ensure real-world relevance and utility.',
    icon: <DoctorIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'FHIR-First Integration',
    description: 'We prioritize seamless interoperability, using the FHIR standard to connect effortlessly with existing health IT systems.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>,
  },
  {
    title: 'Regulatory-Ready',
    description: 'We design our products with a clear path to regulatory approval, ensuring safety, efficacy, and compliance from the ground up.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  },
];

export const stats: Stat[] = [
    { value: '50', label: 'Educators' },
    { value: '68', label: 'ED Directors' },
    { value: '6', label: 'Prototype' },
];

// Impact Stories Data
export const impactStories: ImpactStory[] = [
  {
    quote: 'Medanna completely changed how I approach patient histories. It’s like having unlimited practice with realistic, complex cases before even stepping on the ward.',
    author: 'Dr. Anya Sharma',
    role: 'Medical Student, Pilot Program',
    image: 'https://images.unsplash.com/photo-1551109014-7f897f27a1b3?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    quote: 'With Triage IQ, our door-to-doctor time has decreased by 15%. The AI gives my team the confidence to make faster, more accurate acuity decisions.',
    author: 'Mark Chen',
    role: 'Emergency Department Partner',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    quote: 'ImageDx has become an invaluable second reader. It flags subtle abnormalities I might have missed at the end of a long shift. It doesn\'t replace me; it empowers me.',
    author: 'Dr. Emily Carter',
    role: 'Radiology Department Head',
    image: 'https://images.unsplash.com/photo-1542740348-39501838c754?q=80&w=200&h=200&auto=format&fit=crop',
  },
];

// Team Data
export const teamMembers: TeamMember[] = [
  {
    name: 'Abhishek Nahire',
    role: 'Founder & CEO',
    bio: 'A visionary entrepreneur passionate about revolutionizing healthcare through technology. Abhishek leads Aivana with a focus on creating human-centered AI solutions for clinicians.',
    image: 'https://raw.githubusercontent.com/akashmanjunath2505/public/main/abhishek.jpeg',
    linkedin: 'https://www.linkedin.com/in/abhisheknahire40',
  },
  {
    name: 'Akash Manjunath',
    role: 'Co-Founder & CTO',
    bio: 'A seasoned AI architect and full-stack developer. Akash is the technical mind behind Aivana\'s robust, scalable, and seamlessly integrated healthcare ecosystem.',
    image: 'https://raw.githubusercontent.com/akashmanjunath2505/public/main/akash.jpeg',
    linkedin: 'https://www.linkedin.com/in/akash2505/',
  },
  {
    name: 'Arnav Patil',
    role: 'Lead Product Designer',
    bio: 'A creative designer dedicated to crafting intuitive and beautiful user experiences. Arnav ensures Aivana\'s products are accessible and empower healthcare professionals.',
    image: 'https://raw.githubusercontent.com/akashmanjunath2505/public/main/arnav.jpeg',
  },
];

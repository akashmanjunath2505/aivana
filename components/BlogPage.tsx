
import React from 'react';

const BlogPage: React.FC<{ setView: (view: 'main') => void; }> = ({ setView }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const isoDate = today.toISOString().split('T')[0];

  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setView('main')} 
            className="text-blue-600 hover:text-blue-800 font-semibold mb-12 group flex items-center transition-colors duration-300"
          >
            <span className="transform transition-transform group-hover:-translate-x-1 mr-2">&larr;</span> Back to Aivana Home
          </button>

          <article className="prose lg:prose-xl max-w-none">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 !mb-4 tracking-tight">Bridging Innovation and Evidence in Medical Education: Aivana’s Take on New Virtual Patient Evaluation Research</h1>
                <p className="text-slate-500 text-lg">Posted on <time dateTime={isoDate}>{formattedDate}</time></p>
            </header>
            
            <div className="text-slate-700 space-y-6">
                <p>At Aivana, we are building more than just virtual patient simulations. Our goal is to help shape a future where healthcare education emphasizes clinical reasoning, empathy, and real-time decision-making and evaluates them with the same rigor as factual knowledge.</p>
                
                <p>A recent study published in March 2025, titled “Proposal of a new evaluation grid and literature review of virtual patient software in medical education” (Springer), offers a research-backed framework that aligns with this mission.</p>
                
                <p>This study introduces an activity-focused, evidence-based evaluation grid for assessing student behavior in virtual patient simulations. It validates what we believe at Aivana: that digital tools should help learners grow clinically, not just perform technically.</p>
                
                <h2 className="text-slate-900 !mt-12 !mb-4">🧠 Clinical Reasoning as a Core Competency</h2>
                
                <p>The study challenges traditional assessments like multiple-choice exams, which often fail to measure clinical reasoning. Instead, it emphasizes the importance of evaluating how learners process cases, make decisions, and adjust based on new information.</p>
                
                <p>At Aivana, our virtual patient simulations are built to reveal those cognitive processes. Learners engage dynamically with evolving cases asking questions, interpreting findings, and reflecting on outcomes. This mirrors real-world thinking.</p>
                
                <h2 className="text-slate-900 !mt-12 !mb-4">🎯 Focusing on Outcomes Over Scores</h2>
                
                <p>The study proposes a framework that prioritizes observable clinical behavior not just correct answers.</p>
                
                <p>It supports competency-based medical education (CBME), which we believe is essential to training tomorrow’s physicians. The grid helps educators assess how students justify decisions, prioritize differentials, and communicate clinical reasoning.</p>
                
                <p>These are the same core competencies Aivana’s platform is designed to enhance.</p>
                
                <h2 className="text-slate-900 !mt-12 !mb-4">📚 A Framework Designed for the Real World</h2>
                
                <p>What makes this study especially valuable is its emphasis on practicality. It was informed by both academic research and educator feedback, ensuring the grid can be integrated into real curricula with minimal friction.</p>
                
                <p>It is replicable, low in subjectivity, and aligned with CBME principles — which is critical for educators looking to adopt structured simulation-based assessments.</p>
                
                <p>At Aivana, we know that even the most advanced technology must fit into existing educational workflows. This framework offers a path to do that effectively.</p>
                
                <h2 className="text-slate-900 !mt-12 !mb-4">🏥 Shared Goals for the Future of Medical Education</h2>
                
                <p>This study reinforces an idea we strongly support: Simulation is not just a teaching tool — it must also be an assessment tool.</p>
                
                <p>When combined with structured evaluation, virtual patient simulations become more than an activity. They become a meaningful part of a learner’s clinical development journey.</p>

                <p>That is the future we are building at Aivana where immersive, AI-powered training is paired with rigorous, human-centered assessment.</p>
                
                <h2 className="text-slate-900 !mt-12 !mb-4">💡 What This Means for Aivana’s Next Steps</h2>

                <p>This research affirms a direction we have been pursuing for years. As we expand our simulation ecosystem, we are exploring how to embed evidence-based evaluation into our platform and development standards.</p>
                
                <p>We also see strong opportunities for academic collaboration. We are eager to partner with institutions to pilot, refine, and scale evaluation models grounded in both research and reality.</p>
                
                <div className="!mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="!mt-0 !mb-2 text-slate-900 font-bold">📖 Read the full study:</h3>
                    <p className="!m-0">
                    <a href="https://link.springer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline break-words">
                        Proposal of a new evaluation grid and literature review of virtual patient software in medical education (Springer, March 2025)
                    </a>
                    </p>
                </div>

                <footer className="!mt-16 pt-8 border-t border-slate-200">
                    <p className="font-semibold text-slate-800">Tags:</p>
                    <p className="text-slate-600 leading-relaxed">
                        virtual patient training, clinical reasoning assessment, CBME, digital healthcare education, simulation in medical education, medical student evaluation, AI in medical training
                    </p>
                </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
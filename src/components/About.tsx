import React from 'react';
import { resumeData } from '../data/resume';

const About: React.FC = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {personal.summary}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or mentoring aspiring developers. 
                I believe in writing clean, maintainable code and creating user experiences 
                that make a difference.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Quick Facts</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• 5+ years of professional experience</li>
                  <li>• Specialized in React & Node.js ecosystems</li>
                  <li>• Led teams of up to 5 developers</li>
                  <li>• Contributed to 20+ production applications</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Values</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Clean, maintainable code</li>
                  <li>• User-centered design thinking</li>
                  <li>• Continuous learning and growth</li>
                  <li>• Collaborative team environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
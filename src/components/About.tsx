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
                Innovative Software Engineer & Tech Enthusiast
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {personal.summary}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                I'm passionate about creating efficient, scalable solutions and staying 
                up-to-date with the latest technologies. I enjoy collaborating with 
                cross-functional teams and contributing to open-source projects that 
                make a positive impact in the developer community.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Professional Highlights</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• 4+ years of software development experience</li>
                  <li>• Expertise in full-stack web development</li>
                  <li>• Experience with cloud technologies and DevOps</li>
                  <li>• Contributed to 15+ production applications</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Core Values</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Quality-driven development approach</li>
                  <li>• Continuous learning and innovation</li>
                  <li>• Collaborative team environment</li>
                  <li>• User-focused solution design</li>
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
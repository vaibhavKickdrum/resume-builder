import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {edu.school}
                    </h4>
                    <div className="flex items-center space-x-4 text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
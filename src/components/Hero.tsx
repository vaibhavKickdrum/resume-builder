import React from 'react';
import { Mail, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero: React.FC = () => {
  const { personal } = resumeData;

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              {personal.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 animate-fade-in">
            {personal.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6 animate-fade-in delay-200">
            {personal.title}
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            {personal.summary}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in delay-400">
            <div className="flex items-center space-x-2 text-slate-600">
              <Mail size={18} />
              <span>{personal.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600">
              <MapPin size={18} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 animate-fade-in delay-500">
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`https://${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://${personal.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-amber-600"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
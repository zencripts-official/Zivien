/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { CloseIcon } from './icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/60">
      <h4 className="font-bold text-blue-400">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div 
        className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl m-4 text-gray-200 p-8 relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-6">
          <div>
            <h2 id="about-modal-title" className="text-4xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Zencripts</span>
            </h2>
            <p className="text-gray-400 mt-1">Founder & CEO: Mohamed Farook (2025)</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Our Vision</h3>
            <p className="text-gray-300">To merge AI, web innovation, and cybersecurity into one powerful, seamless ecosystem.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Core Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ServiceCard title="AI Development" description="Zara AI, chatbots, local LLMs, and automation tools." />
              <ServiceCard title="Web Design & Development" description="Modern, responsive, and AI-powered websites." />
              <ServiceCard title="Cybersecurity Solutions" description="Threat detection and secure platform architecture." />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Flagship Project</h3>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-400/30">
              <h4 className="text-xl font-bold text-white">Zara AI</h4>
              <p className="text-gray-300">An intelligent, interactive, and secure AI assistant at the heart of our ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AboutModal;

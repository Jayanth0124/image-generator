import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 px-4 text-center">
        {/* Divider Line */}
        <div className="w-16 h-px bg-gray-700"></div>

        {/* Designed By Credit */}
        <p className="text-sm text-gray-400 tracking-wider">
          DESIGNED BY{' '}
          <a
            href="https://www.jayanth.site"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-purple-400 transition-colors duration-300"
          >
            DONAVALLI JAYANTH
          </a>
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Jayanth0124"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/jayanth-donavalli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Bottom Tags */}
        <p className="text-xs text-gray-500 tracking-widest">
        Dream Render • LIMITED EDITION
        </p>
      </div>
    </footer>
  );
};

export default Footer;
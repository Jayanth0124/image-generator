import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-full px-4 py-1.5 text-sm font-medium text-purple-600 mb-6">
          <Sparkles className="w-4 h-4 text-purple-400" />
          AI-Powered Creation
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-800 tracking-tight">
          Create Stunning <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Images Instantly
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 font-light leading-relaxed">
          Transform your imagination into breathtaking visuals with our cutting-edge
          AI technology. Professional-quality images in seconds.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/generator"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3.5 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Generate Now
          </Link>
          <Link
            to="/gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:bg-white transition-colors duration-300"
          >
            View Gallery
          </Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-semibold text-pink-500">1M+</p>
            <p className="mt-1 text-gray-600 font-light">Images Generated</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-purple-500">50K+</p>
            <p className="mt-1 text-gray-600 font-light">Happy Users</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-pink-500">99.9%</p>
            <p className="mt-1 text-gray-600 font-light">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
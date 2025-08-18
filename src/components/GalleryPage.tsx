import React from 'react';
import { galleryImages } from '../data/gallery-data';
import { Camera } from 'lucide-react';

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
              Inspiration Gallery
            </h1>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
            Explore a collection of stunning images created by our AI to spark your own creativity.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-5 shadow-lg border border-white/50 h-full flex flex-col">
                <div className="aspect-square relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={image.imageUrl}
                    alt={image.prompt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-3 mt-auto">
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {image.prompt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
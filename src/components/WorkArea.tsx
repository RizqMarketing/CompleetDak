import React from 'react';
import { Globe } from 'lucide-react';

const WorkArea = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-400/10 to-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-brand-400/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            <span>Internationaal Actief</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Werkzaam door heel <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">Nederland</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="text-brand-600 font-semibold">Ook werkzaam in Duitsland, België en Luxembourg!</span>
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full"></div>
        </div>

        {/* Netherlands Map Image */}
        <div className="flex justify-center">
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-100/50 w-full max-w-7xl mx-auto">
            <img 
              src="https://imgur.com/Xq3wPzi.png" 
              alt="Nederland kaart met provincies" 
              className="w-full h-auto rounded-2xl object-contain"
              style={{ maxHeight: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkArea;
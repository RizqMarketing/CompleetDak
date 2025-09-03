import React from 'react';
import { Phone, Award, Clock, Star } from 'lucide-react';

const NicoContact = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-brand-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-600/20 text-brand-300 px-4 py-2 rounded-full text-sm font-semibold border border-brand-500/30">
                <Award className="w-4 h-4" />
                <span>Eigenaar & Specialist</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bel direct met <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">Nico</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Persoonlijk contact met de eigenaar. Met meer dan 25 jaar ervaring in dakdekken 
                staat Nico garant voor vakmanschap en betrouwbaarheid.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-brand-400" />
                <span className="font-medium">24/7 Bereikbaar</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">25+ Jaar Ervaring</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-brand-600/20 to-blue-600/20 border border-brand-500/30 rounded-2xl p-6">
              <div className="text-center space-y-4">
                <p className="text-gray-300">
                  Geen wachttijden, geen tussenpersonen. Direct contact met de vakman.
                </p>
                
                <a
                  href="tel:0488234625"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  <div className="text-left">
                    <div className="text-base">Bel Nu</div>
                    <div className="text-xl font-black">0488 234 625</div>
                  </div>
                </a>
                
                <p className="text-sm text-gray-400">
                  Gratis advies en vrijblijvende offerte
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Nico's Photo */}
          <div className="relative">
            <img 
              src="https://imgur.com/MIruK5o.png" 
              alt="Nico - Eigenaar EMT Dakdekkers"
              className="w-full h-auto object-contain rounded-2xl"
              style={{ minHeight: '700px', maxHeight: '800px' }}
            />
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-gray-400 text-sm">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Nu Beschikbaar</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Vrijblijvende Offerte</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Erkend Dakdekkersbedrijf</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicoContact;
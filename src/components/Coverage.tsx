import React from 'react';
import { Globe, MapPin, CheckCircle, Building, Phone, Award, Shield, Star } from 'lucide-react';

const Coverage = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Werkgebied</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Werkzaam door heel <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Nederland</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Met meer dan 25 jaar ervaring zijn wij uw betrouwbare dakdekker in alle Nederlandse provincies. 
            Nu ook actief in Duitsland, België en Luxemburg.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Image */}
          <div className="relative flex items-center justify-center h-full">
            <img 
              src="https://imgur.com/mmmmGwh.png" 
              alt="Nederland kaart met provincies - Compleet Dakonderhoud Nederland" 
              className="h-auto"
              style={{ width: '125%', height: 'auto', maxWidth: 'none' }}
            />
            
            {/* Premium badges */}
            <div className="absolute top-6 md:top-6 top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-xl border border-green-400/30 backdrop-blur-sm">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                <span>Alle Provincies</span>
              </span>
            </div>
            
            <div className="absolute bottom-24 md:bottom-24 bottom-16 left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-xl border border-blue-400/30 backdrop-blur-sm">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
                <span>25+ Jaar Ervaring</span>
              </span>
            </div>
          </div>

          {/* Content & Stats */}
          <div className="space-y-8">
            
            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-700">Erkend Bedrijf</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-700">Volledig Verzekerd</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-700">5 Sterren Service</div>
              </div>
            </div>

            {/* Main content */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Uw Lokale Dakspecialist
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Als ervaren dakdekkersbedrijf staan wij voor kwaliteit en betrouwbaarheid. 
                Van kleine reparaties tot complete nieuwbouw - wij zorgen voor een vakkundige uitvoering.
              </p>
              
              <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                <Phone className="w-5 h-5" />
                <span>Bel voor een vrijblijvende offerte: 0488 234 625</span>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-700 font-semibold">Nederlandse Provincies</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Spoedservice</div>
              </div>
            </div>

            {/* International expansion */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-xl border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-100" />
                </div>
                <h4 className="text-lg font-semibold text-white">Ook Werkzaam in</h4>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  <div className="text-xl mb-1">🇩🇪</div>
                  <div className="text-xs font-medium text-blue-100">Duitsland</div>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  <div className="text-xl mb-1">🇧🇪</div>
                  <div className="text-xs font-medium text-blue-100">België</div>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  <div className="text-xl mb-1">🇱🇺</div>
                  <div className="text-xs font-medium text-blue-100">Luxemburg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Volledig Verzekerd</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">KvK Geregistreerd</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Garantie op Werkzaamheden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
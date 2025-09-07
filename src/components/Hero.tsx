import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, Calendar, ArrowRight, Phone, Mail } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Professioneel Dakonderhoud",
      subtitle: "Vakmanschap en betrouwbaarheid voor uw dak",
      image: "/house1-new.jpg",
      overlay: "from-slate-900/80 via-slate-900/60 to-slate-900/40"
    },
    {
      title: "Duurzame Dakoplossingen",
      subtitle: "Moderne technieken gecombineerd met traditioneel vakmanschap",
      image: "/house2-new.jpg",
      overlay: "from-slate-900/80 via-slate-900/60 to-slate-900/40"
    },
    {
      title: "Dakreparatie & Renovatie",
      subtitle: "Herstel en vernieuw uw dak met onze expertise en precisie",
      image: "/house3-new.jpg",
      overlay: "from-slate-900/80 via-slate-900/60 to-slate-900/40"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Calendar, number: "25+", label: "Jaren Ervaring", description: "Bewezen expertise" },
    { icon: Award, number: "100%", label: "Kwaliteitsgarantie", description: "Op al ons werk" },
    { icon: Users, number: "24/7", label: "Bereikbaar", description: "Altijd voor u klaar" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover md:object-center object-[center_20%]"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`}></div>
          </div>
        ))}
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-brand-600/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-brand-600/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brand-600/10 rotate-45 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8 py-20 pt-32 lg:pt-48">
        <div className="max-w-6xl mx-auto">
          {/* Company Name */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">
                Compleet Dakonderhoud
              </span>
              <span className="block text-white drop-shadow-2xl">Nederland</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light mb-2">
              Uw specialist in dakonderhoud
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
            <a 
              href="#contact"
              className="group bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-600/25 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Vraag Offerte Aan</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="group border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Meer Over Ons</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <a 
              href="tel:0488234625"
              className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <div className="text-center">
                <div className="font-medium">0488 234 625</div>
                <div className="text-xs text-gray-300">24/7 Bereikbaar</div>
              </div>
            </a>
            <a 
              href="mailto:info@compleetdakonderhoudnederland.nl"
              className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <span className="font-medium">Direct Contact</span>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-400 to-brand-500 rounded-xl flex items-center justify-center shadow-lg">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-400 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">{stat.label}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-300 text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Volledig Verzekerd</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>KvK: 94106819</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Heel Nederland</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>24/7 Bereikbaar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-4 sm:right-8 flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-6 sm:h-8 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide 
                ? 'bg-brand-400 shadow-lg' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-[8000ms] ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: 'slideProgress 8s linear infinite'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
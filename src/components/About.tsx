import React from 'react';
import { CheckCircle, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Vakmanschap",
      description: "Ervaren vakmensen met oog voor detail en kwaliteit"
    },
    {
      icon: Shield,
      title: "Betrouwbaar",
      description: "Volledig verzekerd en gebonden voor uw gemoedsrust"
    },
    {
      icon: Clock,
      title: "Afspraken Nakomen",
      description: "Duidelijke planning en communicatie tijdens het hele project"
    }
  ];

  const achievements = [
    "25+ jaar ervaring in dakonderhoud",
    "Gevestigd in Andelst, actief in heel Nederland",
    "Specialisatie in dakwerk en dakrenovatie",
    "Persoonlijke aanpak voor elk project",
    "Transparante prijzen en duidelijke afspraken",
    "KvK geregistreerd (94106819)"
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-brand-500 font-semibold text-lg tracking-wide uppercase">
                Over Compleet Dakonderhoud Nederland
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                Uw betrouwbare
                <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent"> dakspecialist</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Compleet Dakonderhoud Nederland is gevestigd in Andelst met meer dan 
                25 jaar ervaring in dakonderhoud. Wij zijn actief in heel Nederland en 
                gespecialiseerd in dakwerkzaamheden, dakreparaties en dakrenovaties voor particulieren en bedrijven.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Ons team van ervaren dakdekkers werkt met zorg en aandacht aan elk dakproject. 
                Van kleine dakreparaties tot complete dakvernieuwing - wij staan voor kwaliteit, 
                betrouwbaarheid en een persoonlijke aanpak.
              </p>
            </div>

            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleContactClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Neem Contact Op
            </button>
          </div>

          {/* Images */}
          <div className="relative space-y-6">
            {/* First Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/house1-new.jpg"
                alt="Prachtig modern huis met professioneel dakwerk"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-semibold">Modern Dakontwerp</div>
                <div className="text-xs text-gray-300">Professioneel uitgevoerd</div>
              </div>
            </div>

            {/* Second Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/house3-new.jpg"
                alt="Elegante woning met vakkundige dakinstallatie"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-semibold">Vakkundig Onderhoud</div>
                <div className="text-xs text-gray-300">Betrouwbare service</div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
              ✓ 25+ Jaar Ervaring
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
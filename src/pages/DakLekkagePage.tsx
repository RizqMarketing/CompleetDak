import React, { useState } from 'react';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, Calendar, Building2, MapPin, AlertTriangle, Droplets, Search, Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';

const DakLekkagePage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const dakLekkageServices = [
    "Professionele lekkage opsporing",
    "Directe noodreparaties",
    "Waterschade preventie en herstel",
    "Thermografie voor verborgen lekkages",
    "Complete dakbedekking reparatie",
    "Goot en afvoer herstel",
    "Aansluitingen waterdicht maken",
    "24/7 spoedservice bij acute lekkages"
  ];

  const dakLekkageTypes = [
    {
      title: "Lekkage Opsporing",
      description: "Professionele detectie van de bron van waterproblemen",
      icon: Search,
      details: "Met moderne apparatuur zoals thermische camera's en vochtmeters vinden wij elke lekkage."
    },
    {
      title: "Acute Reparatie",
      description: "Directe reparatie om verdere schade te voorkomen",
      icon: Zap,
      details: "24/7 beschikbaar voor spoedgevallen. Binnen 2 uur ter plaatse voor noodreparaties."
    },
    {
      title: "Waterdicht Herstel",
      description: "Definitieve oplossing met lange termijn garantie",
      icon: Shield,
      details: "Vakkundige reparatie met hoogwaardige materialen voor blijvend waterdichte resultaten."
    }
  ];

  const features = [
    {
      title: "100% Waterdicht",
      description: "Garantie op alle uitgevoerde reparaties",
      icon: Droplets
    },
    {
      title: "Snelle Service",
      description: "Binnen 2 uur ter plaatse bij spoedgevallen",
      icon: Clock
    },
    {
      title: "Moderne Techniek",
      description: "Thermografie en professionele meetapparatuur",
      icon: Eye
    }
  ];


  const dakLekkageProcess = [
    {
      step: 1,
      title: "Spoedmelding",
      description: "Direct contact en inschatting van urgentie",
      icon: Phone
    },
    {
      step: 2,
      title: "Lokalisatie",
      description: "Professionele opsporing van de lekkage bron",
      icon: Search
    },
    {
      step: 3,
      title: "Noodreparatie",
      description: "Directe reparatie om verdere schade te voorkomen",
      icon: Hammer
    },
    {
      step: 4,
      title: "Definitieve Oplossing",
      description: "Vakkundige reparatie met garantie",
      icon: CheckCircle
    }
  ];


  const projectTypes = [
    { id: 'lekkage-opsporing', label: 'Lekkage Opsporing', icon: Search },
    { id: 'acute-reparatie', label: 'Acute Reparatie', icon: Zap },
    { id: 'waterdicht-herstel', label: 'Waterdicht Herstel', icon: Shield }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 bg-gradient-to-br from-red-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Lekkage</span> Opsporing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Daklekkage? Wij vinden de bron en lossen het definitief op. 24/7 spoedservice voor directe hulp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0488234625"
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                SPOED: 0488 234 625
              </a>
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Lekkage Opsporing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-red-900">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">Acute lekkage?</span>
            <span>Bel direct voor spoedservice binnen 2 uur!</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Lekkage</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van spoedopsporing tot definitieve reparatie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dakLekkageTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <p className="text-gray-700">{type.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Waarom Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Lekkage Service</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Complete <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Lekkage</span> Oplossingen
              </h2>
              <div className="space-y-4">
                {dakLekkageServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://imgur.com/ohOuLWB.png" 
                alt="Lekkage opsporing werkzaamheden" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Lekkage Protocol</span>
            </h2>
            <p className="text-xl text-gray-600">Van melding tot definitieve oplossing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {dakLekkageProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < dakLekkageProcess.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Icon */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Klanten</span> Zeggen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Al meer dan 25 jaar zorgen wij voor vakkundig dakwerk. Onze klanten waarderen onze 
              betrouwbaarheid, kwaliteit en persoonlijke service.
            </p>
          </div>
          
          {/* Enhanced Widget Container */}
          <div className="relative w-full max-w-none mx-auto">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl transform -rotate-1"></div>
            
            {/* Main container */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 mx-2 sm:mx-4">
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-brand-600 rounded-b-full"></div>
              
              {/* Widget */}
              <div 
                className="overflow-hidden rounded-xl"
                style={{ 
                  minHeight: '400px',
                  paddingBottom: '10px'
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
                    <iframe class='lc_reviews_widget' src='https://reputationhub.site/reputation/widgets/review_widget/bGV3Pxr7SBGEoFWh6kb3' frameborder='0' scrolling='auto' style='min-width: 100%; width: 100%; height: 350px; border-radius: 12px; display: block; margin: 0; padding: 0; box-sizing: border-box;'></iframe>
                  `
                }}
              />
            </div>
          </div>

          {/* Clean Trust Footer */}
          <div className="mt-12">
            <div className="text-center">
              <div className="inline-flex items-center space-x-1 text-xs text-gray-400 font-medium tracking-wide">
                <Shield className="w-3 h-3" />
                <span>VOLLEDIG VERZEKERD</span>
                <span className="mx-3">•</span>
                <Award className="w-3 h-3" />
                <span>GECERTIFICEERD</span>
                <span className="mx-3">•</span>
                <Clock className="w-3 h-3" />
                <span>25+ JAAR ERVARING</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer>
        <Contact standalone={false} />
      </Footer>
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </div>
  );
};

export default DakLekkagePage;
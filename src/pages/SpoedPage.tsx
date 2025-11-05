import React, { useState } from 'react';
import { 
  CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Wrench,
  AlertTriangle, Droplets, Zap, MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';

const SpoedPage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const spoedServices = [
    "24/7 Noodservice voor acute lekkages",
    "Storm- en hagel schade herstel",
    "Directe dakbedekking na beschadiging",
    "Noodafdichting en tijdelijke reparaties",
    "Weekend en avond spoedservice",
    "Veiligheidsinspecties na extreme weer",
    "Snelle kosteloze schade-inventarisatie",
    "Coördinatie met verzekeringsmaatschappij"
  ];

  const spoedTypes = [
    {
      title: "24/7 Lekkage Service",
      description: "Direct ter plaatse bij acute daklekken",
      icon: Droplets,
      details: "Binnen 2 uur ter plaatse voor directe noodreparaties en het voorkomen van verdere waterschade."
    },
    {
      title: "Storm Schade Herstel",
      description: "Snelle reparatie na storm- en hagelschade",
      icon: Zap,
      details: "Ervaren team voor acute storm schade, van losgewaaide dakpannen tot complete dakgedeelten."
    },
    {
      title: "Noodafdekking",
      description: "Tijdelijke dakbedekking bij acute schade",
      icon: Shield,
      details: "Professionele noodafdekking om verdere schade te voorkomen tot definitieve reparatie mogelijk is."
    }
  ];

  const features = [
    {
      title: "2 Uur Responstijd",
      description: "Binnen 2 uur ter plaatse bij spoedeisende gevallen",
      icon: Clock
    },
    {
      title: "24/7 Bereikbaar",
      description: "Dag en nacht, weekend en feestdagen beschikbaar",
      icon: Phone
    },
    {
      title: "Verzekering Support",
      description: "Volledige ondersteuning bij verzekeringsclaims",
      icon: Shield
    }
  ];


  const spoedProcess = [
    {
      step: 1,
      title: "Noodoproep",
      description: "Bel ons 24/7 voor directe hulp",
      icon: Phone
    },
    {
      step: 2,
      title: "Snelle Respons",
      description: "Binnen 2 uur ter plaatse voor inspectie",
      icon: Clock
    },
    {
      step: 3,
      title: "Noodreparatie",
      description: "Directe tijdelijke oplossing om schade te beperken",
      icon: Hammer
    },
    {
      step: 4,
      title: "Definitieve Oplossing",
      description: "Planning voor complete reparatie op afspraak",
      icon: CheckCircle
    }
  ];


  const projectTypes = [
    { id: 'acute-lekkage', label: 'Acute Lekkage', icon: Droplets },
    { id: 'storm-schade', label: 'Storm Schade', icon: Zap },
    { id: 'noodafdekking', label: 'Noodafdekking', icon: Shield }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-gradient-to-r from-white/20 to-red-400/30 backdrop-blur-sm rounded-full px-6 py-3 border border-red-400/40 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg animate-pulse"></div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    SPOEDDIENST 24/7 - BINNEN 2 UUR TER PLAATSE
                  </span>
                  <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-red-400">DAKSPOED NODIG?</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Binnen 2 Uur Ter Plaatse!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-red-400 font-bold">NOODGEVAL?</span> Acute lekkage? Storm schade?
              Wij zijn er binnen 2 uur. 24/7 professionele spoedservice voor alle dakproblemen.
              <span className="text-brand-400 font-bold"> Geen voorrijkosten!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:0488234625"
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center text-lg animate-pulse"
              >
                <Phone className="w-6 h-6 mr-3" />
                SPOED: 0488 234 625 - BEL NU!
              </a>
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center text-lg"
              >
                <Calculator className="w-6 h-6 mr-3" />
                GRATIS SPOEDADVIES
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p className="text-lg font-semibold text-green-400">Waarom ons bellen bij spoed?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Binnen 2 Uur Ter Plaatse</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">24/7 Bereikbaar</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Geen Voorrijkosten</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Direct Gestopt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-red-600">Elk Moment Telt Bij Spoedgevallen!</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              <strong>Elke minuut wachten is elke euro meer schade!</strong> Dakproblemen verergeren snel.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Wij zijn binnen 2 uur ter plaatse. Direct gestopt. Verdere schade voorkomen!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">Wat Gebeurt Er Als U Wacht?</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Storm schade niet direct afgedekt</div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Gevolg</div>
                  <div className="font-bold text-red-600">Regenwater in huis</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Extra Kosten</div>
                  <div className="font-bold text-red-600">Hoge Kosten</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Lekkage niet direct gedicht</div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Gevolg</div>
                  <div className="font-bold text-red-600">Isolatie doorweekt</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Extra Kosten</div>
                  <div className="font-bold text-red-600">Zeer Hoge Kosten</div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="font-medium text-slate-900">Losgewaaide dakpannen niet vervangen</div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Gevolg</div>
                  <div className="font-bold text-red-600">Complete dakschade</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Extra Kosten</div>
                  <div className="font-bold text-red-600">Zeer Hoge Kosten</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg font-semibold text-gray-700">
              BEL NU! Wachten kost u veel meer dan onze spoedservice!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0488234625"
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg animate-pulse"
              >
                <Phone className="w-6 h-6" />
                <span>0488 234 625 - SPOED!</span>
              </a>
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>BEREKEN SCHADE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Spoeddiensten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 beschikbaar voor alle dakgerelateerde noodgevallen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spoedTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-brand-500">
                <div className="w-16 h-16 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-brand-600" />
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
              Waarom Onze <span className="text-brand-400">Spoed Service</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                Complete <span className="text-brand-500">Noodservice</span>
              </h2>
              <div className="space-y-4">
                {spoedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.imgur.com/3uc5hSm.jpg" 
                alt="Spoed dakwerkzaamheden" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Beschikbaar</div>
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
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Noodprotocol</span>
            </h2>
            <p className="text-xl text-gray-600">Van noodoproep tot definitieve oplossing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {spoedProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < spoedProcess.length - 1 && (
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
            <div className="text-center space-y-6">
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
              
              {/* Trustpilot Logo */}
              <div className="pt-2">
                <a 
                  href="https://nl.trustpilot.com/review/www.compleetdakonderhoudnederland.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="https://imgur.com/ZKUY57s.png" 
                    alt="Trustpilot Reviews - Bekijk onze beoordelingen" 
                    className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
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

export default SpoedPage;
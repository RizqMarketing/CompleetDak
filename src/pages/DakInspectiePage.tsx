import React, { useState } from 'react';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, Calendar, Building2, MapPin, AlertTriangle, Droplets, FileText, Search
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';

const DakInspectiePage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const dakInspectieServices = [
    "Uitgebreide dakconditie beoordeling",
    "Preventieve controle op schade",
    "Professioneel inspectie rapport",
    "Onderhoudsadvies en planning",
    "Thermografisch onderzoek",
    "Verzekerings inspecties",
    "Koop/verkoop inspectie woningen",
    "Garantie en periodieke controles"
  ];

  const dakInspectieTypes = [
    {
      title: "Basis Dakinspectie",
      description: "Volledige visuele controle van uw dak",
      icon: Eye,
      details: "Grondige controle van dakbedekking, afvoer, aansluitingen en algemene dakveiligheid."
    },
    {
      title: "Uitgebreide Inspectie",
      description: "Detailinspectie met meetinstrumenten en rapport",
      icon: Search,
      details: "Inclusief thermografie, vochtmetingen en technische beoordeling met uitgebreid adviesrapport."
    },
    {
      title: "Onderhoudsinspectie",
      description: "Periodieke controle voor preventief onderhoud",
      icon: Calendar,
      details: "Jaarlijkse of periodieke inspectie om problemen vroegtijdig te signaleren en onderhoud te plannen."
    }
  ];

  const features = [
    {
      title: "Gecertificeerde Inspecteurs",
      description: "Ervaren specialisten met officiële certificering",
      icon: Award
    },
    {
      title: "Uitgebreid Rapport",
      description: "Gedetailleerd rapport met foto's en advies",
      icon: FileText
    },
    {
      title: "Preventief Advies",
      description: "Voorkom grote kosten door tijdig onderhoud",
      icon: Shield
    }
  ];


  const dakInspectieProcess = [
    {
      step: 1,
      title: "Afspraak",
      description: "Planning van de inspectie op een geschikt moment",
      icon: Calendar
    },
    {
      step: 2,
      title: "Visuele Controle",
      description: "Grondige inspectie van alle dakonderdelen",
      icon: Eye
    },
    {
      step: 3,
      title: "Technische Metingen",
      description: "Gebruik van meetapparatuur indien nodig",
      icon: Calculator
    },
    {
      step: 4,
      title: "Rapport & Advies",
      description: "Uitgebreid rapport met bevindingen en aanbevelingen",
      icon: FileText
    }
  ];


  const projectTypes = [
    { id: 'basis-inspectie', label: 'Basis Inspectie', icon: Eye },
    { id: 'uitgebreide-inspectie', label: 'Uitgebreide Inspectie', icon: Search },
    { id: 'onderhoudsinspectie', label: 'Onderhoudsinspectie', icon: Calendar }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Dakinspectie</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Voorkom grote schade en kosten. Onze gecertificeerde inspecteurs controleren uw dak grondig en adviseren over onderhoud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Inspectie
              </button>
              <a 
                href="tel:0488234625"
                className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel: 0488 234 625
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-blue-900">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Preventie is beter dan genezen:</span>
            <span>Bespaar tot 80% op reparatiekosten!</span>
          </div>
        </div>
      </section>

      {/* Free Inspection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-brand-50 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>100% Gratis & Vrijblijvend</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Gratis</span> Dakinspectie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bieden een compleet gratis dakinspectie aan. Voorkom kostbare schade met onze professionele beoordeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Gratis Inspectie</h3>
                <span className="ml-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">GRATIS</span>
              </div>
              <p className="text-gray-600 mb-4">Professionele dakcontrole zonder kosten</p>
              <p className="text-gray-700">Volledige visuele inspectie van uw dak, dakbedekking, goten en aansluitingen. Direct mondeling advies over de staat van uw dak.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Schriftelijk Rapport</h3>
                <span className="ml-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">OPTIONEEL</span>
              </div>
              <p className="text-gray-600 mb-4">Uitgebreid rapport met foto's en advies</p>
              <p className="text-gray-700">Gedetailleerd inspectierapport met foto's van alle bevindingen en concrete aanbevelingen voor onderhoud of reparaties.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Direct Advies</h3>
                <span className="ml-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">INCLUSIEF</span>
              </div>
              <p className="text-gray-600 mb-4">Persoonlijk advies van onze dakspecialist</p>
              <p className="text-gray-700">Ter plaatse uitleg over de staat van uw dak, prioriteiten voor onderhoud en vrijblijvend advies over mogelijke werkzaamheden.</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-brand-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Plan Nu Uw Gratis Dakinspectie!</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Geen verborgen kosten, geen verplichtingen. Wij komen langs, controleren uw dak en geven u direct advies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContactPopupOpen(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Gratis Inspectie
                </button>
                <a 
                  href="tel:0488234625"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct Bellen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Waarom Kiezen voor Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Dakinspectie</span>?
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
                Wat Controleren <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Wij</span>?
              </h2>
              <div className="space-y-4">
                {dakInspectieServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://imgur.com/ZWJNn4D.png" 
                alt="Dakinspectie werkzaamheden" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Gecontroleerd</div>
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
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Inspectie Proces</span>
            </h2>
            <p className="text-xl text-gray-600">Van afspraak tot uitgebreid rapport</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {dakInspectieProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < dakInspectieProcess.length - 1 && (
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
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mx-4">
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-brand-600 rounded-b-full"></div>
              
              {/* Widget */}
              <div 
                className="overflow-hidden rounded-xl"
                style={{ 
                  minHeight: '300px',
                  paddingBottom: '10px'
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
                    <iframe class='lc_reviews_widget' src='https://reputationhub.site/reputation/widgets/review_widget/bGV3Pxr7SBGEoFWh6kb3' frameborder='0' scrolling='no' style='min-width: 100%; width: 100%; height: 300px; border-radius: 12px; display: block; margin: 0; padding: 0; box-sizing: border-box;'></iframe>
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

export default DakInspectiePage;
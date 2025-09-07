import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, Calendar, Building2, MapPin, AlertTriangle, Droplets, Leaf, Filter
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';
import { sendEmail } from '../utils/emailService';

const DakgootReinigingPage = () => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    stad: '',
    address: '',
    provincie: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const dakgootReinigingServices = [
    "Volledige dakgoot reiniging",
    "Bladeren en vuil verwijderen",
    "Afvoeren en hemelwaterafvoer ontstoppen",
    "Controle op schade en reparaties",
    "Preventieve goot onderhoud",
    "Gootrooster plaatsing",
    "Seizoensreiniging (najaar/voorjaar)",
    "Inspectie van dakgoot bevestigingen"
  ];

  const dakgootReinigingTypes = [
    {
      title: "Standaard Reiniging",
      description: "Complete reiniging van dakgoten en afvoeren",
      icon: Droplets,
      details: "Handmatige reiniging van alle dakgoten, verwijderen van bladeren, mos en vuil uit alle goten en afvoeren."
    },
    {
      title: "Seizoen Onderhoud",
      description: "Periodieke reiniging voor optimale afvoer",
      icon: Leaf,
      details: "Regelmatige reiniging in voor- en najaar om verstoppingen te voorkomen en schade door overloop te vermijden."
    },
    {
      title: "Ontstopping Service",
      description: "Professioneel ontstoppen van verstopte afvoeren",
      icon: Filter,
      details: "Specialistische ontstopping van hardnekkige verstoppingen in dakgoten, hemelwaterafvoer en regenpijpen."
    }
  ];

  const features = [
    {
      title: "Milieuvriendelijk",
      description: "Afval wordt gescheiden afgevoerd en gerecycled",
      icon: Leaf
    },
    {
      title: "Veilig Werken",
      description: "Professionele apparatuur en veiligheidsmiddelen",
      icon: Shield
    },
    {
      title: "Jaarlijks Onderhoud",
      description: "Onderhoudscontracten voor zorgeloos beheer",
      icon: Calendar
    }
  ];


  const dakgootReinigingProcess = [
    {
      step: 1,
      title: "Inspectie",
      description: "Controle van dakgoten en afvoeren",
      icon: Eye
    },
    {
      step: 2,
      title: "Reiniging",
      description: "Handmatig verwijderen van vuil en bladeren",
      icon: Leaf
    },
    {
      step: 3,
      title: "Doorspoelen",
      description: "Testen van afvoer met water",
      icon: Droplets
    },
    {
      step: 4,
      title: "Afwerking",
      description: "Opruimen en advies voor onderhoud",
      icon: CheckCircle
    }
  ];


  const projectTypes = [
    { id: 'standaard-reiniging', label: 'Standaard Reiniging', icon: Droplets },
    { id: 'seizoen-onderhoud', label: 'Seizoen Onderhoud', icon: Leaf },
    { id: 'ontstopping-service', label: 'Ontstopping Service', icon: Filter }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail(formData);
      
      if (success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
          stad: '',
          address: '',
          provincie: '',
          budget: '',
          timeline: ''
        });
        navigate('/bedankt');
      } else {
        setError('Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of bel ons direct.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Er is een fout opgetreden. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 bg-slate-900 md:bg-gradient-to-br md:from-blue-900 md:via-blue-800 md:to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Dakgoot</span> Reiniging
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Voorkom waterschade met regelmatige dakgoot reiniging. Wij zorgen voor vrije afvoer en optimale waterafvoer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Reiniging
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
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">Najaar is dé tijd voor dakgoot reiniging!</span>
            <span>Voorkom verstoppingen door bladval.</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Dakgoot</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van standaard reiniging tot volledig onderhoudscontract
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dakgootReinigingTypes.map((type, index) => (
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
              Waarom Kiezen voor Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Goot Service</span>?
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
                Wat Doen <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Wij</span>?
              </h2>
              <div className="space-y-4">
                {dakgootReinigingServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://imgur.com/8jVsUDM.png" 
                alt="Dakgoot reiniging werkzaamheden" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">2x</div>
                <div className="text-sm">Per Jaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Seizoen</span> Planning
            </h2>
            <p className="text-xl text-gray-600">Het juiste moment voor dakgoot onderhoud</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Najaar (Oktober-November)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Bladeren verwijderen na de bladval</li>
                <li>• Voorbereiding op winter en vorst</li>
                <li>• Controle voor het regenseizoen</li>
                <li>• Preventieve reiniging voor verstoppingen</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <Sun className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Voorjaar (Maart-April)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Winterschade controleren en herstellen</li>
                <li>• Mos en algen verwijderen</li>
                <li>• Gereedmaken voor regenseizoen</li>
                <li>• Algemene controle en onderhoud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Reinigingsproces</span>
            </h2>
            <p className="text-xl text-gray-600">Stap voor stap naar schone goten</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {dakgootReinigingProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < dakgootReinigingProcess.length - 1 && (
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

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Voordelen</span> van Schone Dakgoten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Geen Waterschade</h3>
              <p className="text-gray-600">Voorkom water in kelders en kruipruimtes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Optimale Afvoer</h3>
              <p className="text-gray-600">Regenwater wordt goed afgevoerd</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Waardebehoud</h3>
              <p className="text-gray-600">Onderhoud verhoogt waarde van uw woning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Langere Levensduur</h3>
              <p className="text-gray-600">Goten gaan langer mee door goed onderhoud</p>
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

export default DakgootReinigingPage;

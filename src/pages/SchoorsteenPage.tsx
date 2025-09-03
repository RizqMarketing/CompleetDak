import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, MessageCircle, Calendar, Building2, MapPin, AlertTriangle, Droplets, Flame, Construction
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';
import { sendEmail } from '../utils/emailService';

const SchoorsteenPage = () => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    stad: '',
    address: '',
    provincie: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const schoorsteenServices = [
    "Schoorsteen renovatie en herstel",
    "Complete schoorsteen afbraak",
    "Nieuwe schoorstenen metselen",
    "Voegwerk schoorsteen vernieuwen",
    "Schoorsteen kanaal reparatie",
    "Dakdoorvoer waterdicht maken",
    "Historische schoorsteen restauratie",
    "Veiligheidscontrole en advies"
  ];

  const schoorsteenTypes = [
    {
      title: "Schoorsteen Renovatie",
      description: "Volledige renovatie van bestaande schoorstenen",
      icon: Construction,
      details: "Complete renovatie waarbij de schoorsteen wordt gestript, gerepareerd en opnieuw opgebouwd met moderne materialen."
    },
    {
      title: "Schoorsteen Afbraak",
      description: "Veilige en vakkundige afbraak van schoorstenen",
      icon: Hammer,
      details: "Professionele afbraak met aandacht voor veiligheid, dakintegriteit en waterdichte afwerking van de opening."
    },
    {
      title: "Nieuwe Schoorsteen",
      description: "Bouw van nieuwe schoorstenen naar maat",
      icon: Building2,
      details: "Op maat gemaakte nieuwe schoorstenen volgens moderne veiligheidseisen en bouwvoorschriften."
    }
  ];

  const features = [
    {
      title: "Veiligheidsexpert",
      description: "Gecertificeerd volgens brandveiligheidseisen",
      icon: Shield
    },
    {
      title: "Vakmanschap",
      description: "Traditionele en moderne metseltechnieken",
      icon: Award
    },
    {
      title: "Waterdichte Afwerking",
      description: "Perfecte aansluiting met dakbedekking",
      icon: Droplets
    }
  ];


  const schoorsteenProcess = [
    {
      step: 1,
      title: "Inspectie",
      description: "Beoordeling van conditie en veiligheidssituatie",
      icon: Eye
    },
    {
      step: 2,
      title: "Planning",
      description: "Ontwerp en vergunningen indien nodig",
      icon: Calculator
    },
    {
      step: 3,
      title: "Uitvoering",
      description: "Vakkundige afbraak, renovatie of nieuwbouw",
      icon: Hammer
    },
    {
      step: 4,
      title: "Afwerking",
      description: "Waterdichte afwerking en veiligheidscontrole",
      icon: CheckCircle
    }
  ];

  const faqItems = [
    {
      question: "Wanneer moet een schoorsteen vervangen worden?",
      answer: "Bij scheuren in metselwerk, losgeraakte stenen, beschadigde kanalen of wanneer de schoorsteen niet meer voldoet aan veiligheidseisen. Een inspectie geeft uitsluitsel."
    },
    {
      question: "Kan ik een schoorsteen zelf afbreken?",
      answer: "Sterk afgeraden. Schoorsteen afbraak vereist expertise voor veiligheid, constructie en waterdichte dakafwerking. Doe dit altijd door professionals."
    },
    {
      question: "Hoeveel kost een nieuwe schoorsteen?",
      answer: "Kosten variëren van €3.000-8.000 afhankelijk van hoogte, complexiteit en materialen. Complete renovatie is meestal voordeliger dan nieuwbouw."
    },
    {
      question: "Heb ik een vergunning nodig?",
      answer: "Voor nieuwe schoorstenen vaak wel, voor renovatie meestal niet. Wij adviseren over vergunningen en kunnen deze voor u aanvragen."
    },
    {
      question: "Hoe lang duurt schoorsteenwerk?",
      answer: "Afbraak: 1-2 dagen. Renovatie: 3-5 dagen. Nieuwe schoorsteen: 5-10 dagen, afhankelijk van complexiteit en weersomstandigheden."
    },
    {
      question: "Maken jullie ook de dakdoorvoer waterdicht?",
      answer: "Ja, waterdichte afwerking van de dakdoorvoer is onderdeel van onze service. We garanderen een volledig waterdicht resultaat."
    }
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
          message: '',
          stad: '',
          address: '',
          provincie: '',
          timeline: ''
        });
        navigate('/bedankt');
      } else {
        setError('Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of bel ons direct.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Er is een fout opgetreden. Probeer het opnieuw or bel ons direct.');
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-900 via-orange-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionele <span className="text-orange-400">Schoorsteen</span> Renovatie
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Van renovatie tot afbraak en nieuwbouw. Vakkundig schoorsteenwerk met oog voor veiligheid en kwaliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Gratis Offerte
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

      {/* Safety Banner */}
      <section className="bg-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-orange-900">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Veiligheid staat voorop!</span>
            <span>Gecertificeerd schoorsteenwerk volgens alle voorschriften.</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="text-orange-500">Schoorsteen</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van kleine reparaties tot complete nieuwbouw
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoorsteenTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-orange-600" />
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
              Waarom Onze <span className="text-orange-400">Schoorsteen Service</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                Onze <span className="text-orange-500">Schoorsteen</span> Diensten
              </h2>
              <div className="space-y-4">
                {schoorsteenServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800" 
                alt="Schoorsteen werkzaamheden" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Veilig</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Regulations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-orange-500">Veiligheid</span> & Voorschriften
            </h2>
            <p className="text-xl text-gray-600">Wij werken volgens alle geldende normen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Brandveiligheid</h3>
              <p className="text-gray-600">Conform NEN normen voor rookgasafvoer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Bouwvoorschriften</h3>
              <p className="text-gray-600">Alle werkzaamheden volgens bouwbesluit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Keuring</h3>
              <p className="text-gray-600">Professionele keuring na oplevering</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Certificering</h3>
              <p className="text-gray-600">Gecertificeerde vakmensen en materialen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-red-500">Waarschuwingssignalen</span>
            </h2>
            <p className="text-xl text-gray-600">Wanneer is schoorsteen onderhoud noodzakelijk?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="font-bold text-slate-900">Scheuren in Metselwerk</h3>
              </div>
              <p className="text-gray-700">Zichtbare scheuren kunnen duiden op constructieve problemen of vorstschade.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Droplets className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="font-bold text-slate-900">Lekkages</h3>
              </div>
              <p className="text-gray-700">Water langs de schoorsteen duidt op slechte afdichting of beschadigd metselwerk.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Construction className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="font-bold text-slate-900">Losgeraakte Stenen</h3>
              </div>
              <p className="text-gray-700">Stenen die loszittend zijn gevaarlijk en moeten direct gerepareerd worden.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Flame className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="font-bold text-slate-900">Slechte Rookafvoer</h3>
              </div>
              <p className="text-gray-700">Rook die niet goed wegtrekt kan duiden op verstoppingen of structurele problemen.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gray-500 mr-3" />
                <h3 className="font-bold text-slate-900">Ouderdom</h3>
              </div>
              <p className="text-gray-700">Schoorstenen ouder dan 50 jaar verdienen grondige inspectie en mogelijk onderhoud.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="font-bold text-slate-900">Witte Uitslag</h3>
              </div>
              <p className="text-gray-700">Witte kristalvorming (uitbloei) kan duiden op vochtproblemen in het metselwerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ons <span className="text-orange-500">Werkproces</span>
            </h2>
            <p className="text-xl text-gray-600">Van inspectie tot veilige oplevering</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {schoorsteenProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < schoorsteenProcess.length - 1 && (
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

      {/* FAQ Section */}
      <section className="pt-8 pb-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-brand-50 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>Vaak Gevraagd</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Veelgestelde <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Vragen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen over onze schoorsteen services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Plan Uw <span className="text-orange-500">Schoorsteenproject</span>
            </h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Uw volledige naam"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="uw.email@example.nl"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stad
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.stad}
                      onChange={(e) => handleInputChange('stad', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Amsterdam"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Straatnaam + Huisnummer
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Bijv. Geurdeland 17G"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provincie
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.provincie}
                      onChange={(e) => handleInputChange('provincie', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Bijv. Gelderland"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gewenste startdatum
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Selecteer timing</option>
                      <option value="asap">Zo snel mogelijk</option>
                      <option value="1-3months">1-3 maanden</option>
                      <option value="3-6months">3-6 maanden</option>
                      <option value="6-12months">6-12 maanden</option>
                      <option value="flexible">Flexibel</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschrijving Project *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    placeholder="Beschrijf uw schoorsteenproject: huidige problemen, gewenste werkzaamheden, hoogte..."
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Verzenden...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Verstuur Aanvraag</span>
                    </>
                  )}
                </button>
              </div>
            </form>
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

export default SchoorsteenPage;
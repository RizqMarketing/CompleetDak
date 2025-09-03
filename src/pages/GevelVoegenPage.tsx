import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Hammer, Sun, Wrench,
  Send, User, MessageCircle, Calendar, Building2, MapPin, AlertTriangle, Droplets, Brush, Layers, Leaf
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import Contact from '../components/Contact';
import { sendEmail } from '../utils/emailService';

const GevelVoegenPage = () => {
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

  const gevelVoegenServices = [
    "Oude voegen uithakken en vernieuwen",
    "Kleurgepasseerde voegmortel",
    "Waterdicht maken van gevelwerk",
    "Preventief voegonderhoud",
    "Historisch voegwerk restaureren",
    "Reparatie van voegscheuren",
    "Flexibele voegen bij ramen en deuren",
    "Voegwerk bij renovaties"
  ];

  const gevelVoegenTypes = [
    {
      title: "Voeg Renovatie",
      description: "Complete vernieuwing van verouderd voegwerk",
      icon: Hammer,
      details: "Oude voegen worden vakkundig uitgehakt en vervangen door nieuwe voegmortel in de juiste kleur en samenstelling."
    },
    {
      title: "Preventief Voegen",
      description: "Tijdige reparatie voor waterschade preventie",
      icon: Shield,
      details: "Kleine scheuren en beschadigde voegen herstellen voordat water kan binnendringen en grotere schade ontstaat."
    },
    {
      title: "Historisch Voegwerk",
      description: "Restauratie met authentieke materialen",
      icon: Building2,
      details: "Specialistische restauratie van historisch voegwerk met traditionele technieken en passende materialen."
    }
  ];

  const features = [
    {
      title: "Kleuradvies",
      description: "Perfecte kleurmatch met bestaand voegwerk",
      icon: Eye
    },
    {
      title: "Duurzame Materialen",
      description: "Hoogwaardige voegmortel voor lange levensduur",
      icon: Award
    },
    {
      title: "Waterdicht Resultaat",
      description: "100% bescherming tegen vocht en weer",
      icon: Droplets
    }
  ];


  const gevelVoegenProcess = [
    {
      step: 1,
      title: "Inspectie",
      description: "Beoordeling van voegwerk en gevelconditie",
      icon: Eye
    },
    {
      step: 2,
      title: "Uithakken",
      description: "Vakkundig verwijderen van oud voegwerk",
      icon: Hammer
    },
    {
      step: 3,
      title: "Voegen",
      description: "Aanbrengen van nieuwe voegmortel",
      icon: Layers
    },
    {
      step: 4,
      title: "Afwerking",
      description: "Nette afwerking en eindcontrole",
      icon: CheckCircle
    }
  ];

  const faqItems = [
    {
      question: "Hoe lang gaat voegwerk mee?",
      answer: "Goed uitgevoerd voegwerk gaat 15-25 jaar mee, afhankelijk van weersomstandigheden en geveloriëntatie. Regelmatige controle verlengt de levensduur."
    },
    {
      question: "Wanneer moet voegwerk vernieuwd worden?",
      answer: "Bij scheuren, uitvallende voegmortel, vochtproblemen of wanneer voegen poreus zijn geworden. Ook bij renovaties is het vaak nodig."
    },
    {
      question: "Kunt u de kleur van bestaand voegwerk matchen?",
      answer: "Ja, wij kunnen vrijwel elke kleur voegmortel matchen. We nemen monsters mee voor kleuranalyse en maken testvoegen."
    },
    {
      question: "Wat kost gevel voegen per m2?",
      answer: "Kosten variëren van €25-45 per m2, afhankelijk van type voegwerk, toegankelijkheid en hoeveelheid werk. Offerte is altijd vrijblijvend."
    },
    {
      question: "Kunnen jullie ook in de winter voegen?",
      answer: "Voegwerk kan bijna het hele jaar, behalve bij vorst. Ideaal is droog weer tussen 5-25°C. Wij adviseren het beste moment."
    }
  ];

  const projectTypes = [
    { id: 'voeg-renovatie', label: 'Voeg Renovatie', icon: Hammer },
    { id: 'preventief-voegen', label: 'Preventief Voegen', icon: Shield },
    { id: 'historisch-voegwerk', label: 'Historisch Voegwerk', icon: Building2 }
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professioneel <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Gevel Voegen</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Vakkundig voegwerk voor een waterdichte en mooie gevel. Van kleine reparaties tot complete voegrenovatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
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

      {/* Info Banner */}
      <section className="bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-blue-900">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Slechte voegen = waterschade!</span>
            <span>Laat tijdig controleren en repareren.</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Voegwerk</span> Specialiteiten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van preventieve reparaties tot complete voegrenovatie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gevelVoegenTypes.map((type, index) => (
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
              Waarom Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Voegwerk Service</span>?
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
                Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Voegwerk</span> Services
              </h2>
              <div className="space-y-4">
                {gevelVoegenServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.imgur.com/ZnETbed.jpg" 
                alt="Gevel voegwerk" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Voegmortel</span> Types
            </h2>
            <p className="text-xl text-gray-600">De juiste mortel voor elke situatie</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Cement Voegen</h3>
              <p className="text-gray-600">Sterk en duurzaam voor moderne woningen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Kalk Voegen</h3>
              <p className="text-gray-600">Traditioneel voor historische gebouwen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Flexibele Voegen</h3>
              <p className="text-gray-600">Voor ramen, deuren en bewegende voegen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Kleurvoegen</h3>
              <p className="text-gray-600">Elke gewenste kleur mogelijk</p>
            </div>
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

      {/* Signs Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Signalen</span> voor Voegvernieuwing
            </h2>
            <p className="text-xl text-gray-600">Wanneer is voegwerk nodig?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="font-bold text-slate-900">Uitvallende Mortel</h3>
              </div>
              <p className="text-gray-700">Voegmortel valt uit of brokkelt af door ouderdom of weersinvloeden.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Droplets className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="font-bold text-slate-900">Vochtproblemen</h3>
              </div>
              <p className="text-gray-700">Vocht dringt binnen door slechte voegen, vochtvlekken in huis zichtbaar.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="font-bold text-slate-900">Scheuren in Voegen</h3>
              </div>
              <p className="text-gray-700">Kleine of grote scheuren in het voegwerk door beweging of krimp.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="font-bold text-slate-900">Mos en Algen</h3>
              </div>
              <p className="text-gray-700">Groene aanslag en plantengroei in de voegen door vocht.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gray-500 mr-3" />
                <h3 className="font-bold text-slate-900">Ouderdom</h3>
              </div>
              <p className="text-gray-700">Voegen zijn ouder dan 20 jaar en verdienen preventieve vernieuwing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="font-bold text-slate-900">Renovatie</h3>
              </div>
              <p className="text-gray-700">Bij gevelschildering of renovatie is vaak voegvernieuwing gewenst.</p>
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
              Hier vind je antwoorden op de meest gestelde vragen over onze gevel voegen services
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

export default GevelVoegenPage;
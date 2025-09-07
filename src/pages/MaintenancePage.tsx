import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, AlertTriangle, Settings, Home,
  Send, User, MessageCircle, Calendar, Building2, MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';

const MaintenancePage = () => {
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

  const services = [
    "Dakonderhoud en kleine reparaties",
    "Gevel- en schilderwerk",
    "Loodgieter en elektra werkzaamheden",
    "Kozijn en raam reparaties",
    "Vloer en tegelwerk herstel",
    "Spoedservice voor urgente klussen"
  ];

  const maintenanceTypes = [
    {
      title: "Regelmatig Onderhoud",
      description: "Periodieke controles om problemen te voorkomen en kosten te besparen",
      icon: Shield,
      details: "Door regelmatige controles en klein onderhoud voorkomt u grote reparaties en behoudt u de waarde van uw woning."
    },
    {
      title: "Spoedservice",
      description: "Snelle hulp voor urgente reparaties en kleine noodsituaties",
      icon: AlertTriangle,
      details: "Bij acute problemen zoals kleine lekkages of defecten zijn wij snel ter plaatse voor spoedservice."
    },
    {
      title: "Periodiek Onderhoud",
      description: "Geplande onderhoudswerkzaamheden voor optimale staat van uw woning", 
      icon: Clock,
      details: "Structureel onderhoud volgens planning zorgt voor langdurige kwaliteit en voorkomt onverwachte kosten."
    }
  ];

  const features = [
    {
      title: "Snelle Response",
      description: "Binnen redelijke tijd ter plaatse bij spoedgevallen",
      icon: Clock
    },
    {
      title: "Vakkundig Team",
      description: "Ervaren vakmensen voor alle onderhoudswerkzaamheden",
      icon: Users
    },
    {
      title: "Eerlijke Prijzen",
      description: "Transparante tarieven en duidelijke kostenopgave vooraf",
      icon: Calculator
    }
  ];


  const maintenanceSteps = [
    {
      step: "1",
      title: "Inspectie & Advies",
      description: "Bekijken van uw woning en onderhoudsstatus",
      details: "We bekijken uw woning en maken een overzicht van de huidige staat en benodigde werkzaamheden."
    },
    {
      step: "2",
      title: "Onderhoudsplan",
      description: "Praktisch onderhoudsplan met planning en kosten",
      details: "Op basis van de inspectie maken we een praktisch onderhoudsplan met realistische planning en kosten."
    },
    {
      step: "3",
      title: "Uitvoering",
      description: "Vakkundige uitvoering volgens planning",
      details: "Onze vakmensen voeren alle werkzaamheden uit volgens de afgesproken planning en kwaliteitsnormen."
    },
    {
      step: "4",
      title: "Nazorg",
      description: "Controle en bijstelling van het onderhoudsplan",
      details: "We controleren de staat van uw woning en stellen het onderhoudsplan bij waar nodig."
    }
  ];

  const maintenanceAreas = [
    {
      area: "Buitenkant Woning",
      items: ["Dakonderhoud", "Gevelreiniging", "Kozijnonderhoud", "Dakgoot reiniging"]
    },
    {
      area: "Installaties",
      items: ["CV onderhoud", "Elektra controle", "Sanitair onderhoud", "Ventilatie reiniging"]
    },
    {
      area: "Interieur",
      items: ["Schilderwerk", "Vloeronderhoud", "Tegelwerk", "Kleine reparaties"]
    }
  ];

  const emergencyServices = [
    { service: "Kleine waterlekkage", response: "Binnen 2 uur", available: "24/7" },
    { service: "Elektra problemen", response: "Binnen 4 uur", available: "24/7" },
    { service: "Verwarmingsstoring", response: "Binnen 4 uur", available: "24/7" },
    { service: "Kleine reparaties", response: "Binnen 1 dag", available: "24/7" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail({
        ...formData,
        service: 'Onderhoud & Reparatie'
      });
      
      if (success) {
        // Reset form
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
        
        // Redirect to thank you page
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      details: ["0488 234 625", "24/7 Bereikbaar"],
      action: "tel:0488234625"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@compleetdakonderhoudnederland.nl", "Reactie vaak binnen 2 uur"],
      action: "mailto:info@compleetdakonderhoudnederland.nl"
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Geurdeland 17G", "6673 DR Andelst"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Beschikbaarheid",
      details: ["24/7 Bereikbaar", "Voor al uw bouwprojecten"],
      action: null
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 pt-32 lg:pt-48">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-brand-400">Onderhoud & Reparatie</span>
              <br />
              Betrouwbare Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Van klein onderhoud tot spoedservice. Compleet Dakonderhoud Nederland houdt uw woning 
              in goede staat met vakkundige service en persoonlijke aandacht.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Onderhoudsafspraak</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:0488234625"
                className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <AlertTriangle className="w-5 h-5" />
                <span>24/7 Spoedservice</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-brand-400" />
                <span>25+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6 text-brand-400" />
                <span>Volledig Verzekerd</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-brand-400" />
                <span>24/7 Bereikbaar</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-brand-400" />
                <span>Persoonlijke Aanpak</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Waarom Kiezen Voor <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Compleet Dakonderhoud Nederland Onderhoud?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met 25+ jaar ervaring in onderhoud en reparaties zorgen wij ervoor dat uw woning 
              in goede staat blijft. Van regelmatig onderhoud tot spoedservice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Service Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dakonderhoud werkzaamheden"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Dakonderhoud</h4>
                <p className="text-sm">Regelmatig onderhoud voor langdurige kwaliteit</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Installatie onderhoud"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Installaties</h4>
                <p className="text-sm">CV, elektra en sanitair onderhoud</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Interieur onderhoud"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Interieur</h4>
                <p className="text-sm">Schilderwerk en kleine reparaties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Onderhoudsdiensten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van regelmatig onderhoud tot spoedservice, wij zorgen ervoor 
              dat uw woning in goede staat blijft met minimale overlast.
            </p>
          </div>

          <div className="space-y-12">
            {maintenanceTypes.map((type, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mr-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                      <p className="text-gray-600 text-lg">{type.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{type.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-4">Voordelen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Kostenbesparing op lange termijn</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Behoud van waarde woning</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Minimale overlast</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Vakkundige uitvoering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-red-500">24/7 Spoedservice</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Kleine lekkage, defecte kraan of andere urgente problemen? 
              Wij zijn 24/7 bereikbaar voor spoedgevallen.
            </p>
            <a 
              href="tel:0488234625"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Nu: 0488 234 625</span>
            </a>
          </div>

          {/* Emergency Services Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">24/7 Spoedservice Response Tijden</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {emergencyServices.map((emergency, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <div className="font-medium text-slate-900">{emergency.service}</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Response tijd</div>
                    <div className="font-bold text-red-500">{emergency.response}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Beschikbaarheid</div>
                    <div className="font-bold text-green-600">{emergency.available}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Onderhoudsproces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van inspectie tot uitvoering begeleiden wij u persoonlijk 
              door het hele onderhoudsproces voor optimaal resultaat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-gray-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Wat Wij Voor U <span className="text-brand-500">Onderhouden</span>
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-50 border border-brand-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Waarom Compleet Dakonderhoud Nederland Onderhoud?</h4>
                <p className="text-gray-700">
                  Van kleine reparaties tot regelmatig onderhoud. Wij pakken elke klus aan met 
                  dezelfde zorg en aandacht voor detail, zodat uw woning in goede staat blijft.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Onderhoudswerkzaamheden"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Onderhoudsgebieden</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij verzorgen onderhoud aan alle onderdelen van uw woning, 
              van buitenkant tot installaties en interieur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{area.area}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
        {/* Contact Section */}
        <section id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent font-semibold text-lg tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Laten We Uw Project
              <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent"> Bespreken</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar om uw woning professioneel te laten onderhouden? Neem contact met ons op 
              voor een vrijblijvende consultatie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-8">Contactgegevens</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {info.action && detailIndex === 0 ? (
                            <a 
                              href={info.action} 
                              className="hover:text-brand-400 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Info */}
              <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                <h4 className="text-white font-bold mb-4">Bedrijfsgegevens</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p><span className="font-medium">KvK:</span> 94106819</p>
                  <p><span className="font-medium">Vestiging:</span> Andelst</p>
                  <p><span className="font-medium">Ervaring:</span> 25+ jaar</p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-900/20 border border-red-900/50 rounded-xl">
                <h4 className="text-red-400 font-bold mb-2">24/7 Spoedservice</h4>
                <p className="text-gray-300 mb-3">Voor urgente kleine klussen</p>
                <a 
                  href="tel:0488234625" 
                  className="text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  0488 234 625
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Stuur ons een bericht</h3>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                          placeholder="0488 234 625"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                          placeholder="Bijv. Andelst"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Straatnaam + Huisnummer
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                        >
                          <option value="">Selecteer timing</option>
                          <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                          <option value="1-3 maanden">1-3 maanden</option>
                          <option value="3-6 maanden">3-6 maanden</option>
                          <option value="6-12 maanden">6-12 maanden</option>
                          <option value="Flexibel">Flexibel</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none text-gray-900"
                        placeholder="Beschrijf uw project, wensen en eventuele specifieke vragen..."
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-brand-500 hover:bg-brand-600 text-slate-900'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900"></div>
                          <span>Verzenden...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Verzend Bericht</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm text-center">
                    Door dit formulier te verzenden gaat u akkoord met ons privacybeleid. 
                    Wij nemen binnen 24 uur contact met u op.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Spoedeisend Project?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Voor urgente bouwprojecten of noodsituaties kunt u ons direct bellen. 
                Onze experts staan 24/7 voor u klaar.
              </p>
              <a
                href="tel:0488234625"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Bel Nu: 0488 234 625
              </a>
            </div>
          </div>
        </div>
      </section>
      </Footer>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Onderhoud & Reparatie"
        title="Onderhoudsafspraak Maken"
      />
    </div>
  );
};

export default MaintenancePage;
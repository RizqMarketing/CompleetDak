import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Leaf, CheckCircle, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Zap, Sun, Droplets,
  Send, User, MessageCircle, Calendar, Building2, MapPin, Home
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';

const SustainableBuildingPage = () => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stad: '',
    address: '',
    provincie: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const solutions = [
    "Zonnepanelen en energieopslag",
    "Warmtepompen en vloerverwarming",
    "Isolatie verbetering",
    "Duurzame bouwmaterialen",
    "Energiebesparende maatregelen",
    "Subsidie begeleiding"
  ];

  const benefits = [
    {
      title: "Energiebesparing",
      description: "Tot 50% lagere energiekosten door slimme en duurzame oplossingen",
      icon: Zap,
      details: "Goede isolatie, warmtepompen en zonnepanelen zorgen voor aanzienlijke energiebesparing en lagere maandlasten."
    },
    {
      title: "Duurzaam Bouwen",
      description: "Milieuvriendelijke materialen en bouwmethoden voor een betere toekomst",
      icon: Leaf,
      details: "Wij gebruiken duurzame materialen en bouwmethoden die het milieu sparen en gezond wonen bevorderen."
    },
    {
      title: "Toekomstbestendig",
      description: "Klaar voor toekomstige energienormen en regelgeving",
      icon: Award,
      details: "Onze duurzame oplossingen voldoen aan de huidige normen en zijn klaar voor toekomstige wetgeving."
    }
  ];

  const features = [
    {
      title: "Energiezuinige Woningen",
      description: "Praktische oplossingen voor energiezuinige nieuwbouw en renovatie",
      icon: Sun
    },
    {
      title: "Waterbesparing",
      description: "Slimme systemen voor waterhergebruik en -besparing",
      icon: Droplets
    },
    {
      title: "Gezond Binnenklimaat",
      description: "Natuurlijke materialen en goede ventilatie voor gezond wonen",
      icon: Shield
    }
  ];


  const sustainabilitySteps = [
    {
      step: "1",
      title: "Energieadvies",
      description: "Analyse van huidige situatie en mogelijkheden",
      details: "We bekijken uw huidige energieverbruik en identificeren de beste duurzame oplossingen voor uw situatie."
    },
    {
      step: "2",
      title: "Persoonlijk Plan",
      description: "Maatwerk advies en plan voor optimale duurzaamheid",
      details: "Op basis van de analyse maken we een praktisch plan met de meest effectieve duurzame maatregelen."
    },
    {
      step: "3",
      title: "Subsidie Hulp",
      description: "Hulp bij subsidieaanvragen en financieringsmogelijkheden",
      details: "Wij helpen u bij het aanvragen van beschikbare subsidies en adviseren over financieringsmogelijkheden."
    },
    {
      step: "4",
      title: "Uitvoering",
      description: "Vakkundige uitvoering van alle duurzame maatregelen",
      details: "Vakkundige installatie van alle systemen en materialen voor optimaal duurzaam resultaat."
    }
  ];

  const sustainableTechnologies = [
    {
      category: "Energie Opwekking",
      technologies: ["Zonnepanelen", "Warmtepompen", "Zonneboilers", "Micro-WKK"]
    },
    {
      category: "Energie Besparing",
      technologies: ["Isolatie verbetering", "HR++ beglazing", "Slimme thermostaten", "LED verlichting"]
    },
    {
      category: "Duurzame Materialen",
      technologies: ["Gerecyclede materialen", "Houtbouw", "Natuurlijke isolatie", "Groene daken"]
    }
  ];

  const environmentalImpact = [
    { metric: "CO2 Reductie", value: "40%", description: "Gemiddelde CO2 reductie per project" },
    { metric: "Energiebesparing", value: "35%", description: "Gemiddelde energiebesparing" },
    { metric: "Waterbesparing", value: "25%", description: "Waterverbruik reductie" },
    { metric: "Waardestijging", value: "10%", description: "Gemiddelde waardestijging woning" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail({
        ...formData,
        service: 'Duurzame Bouw'
      });
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          stad: '',
          address: '',
          provincie: '',
          timeline: '',
          message: ''
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
              <span className="text-brand-400">Duurzame Bouw</span>
              <br />
              Voor De Toekomst
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Bouw energiezuinig en milieuvriendelijk. Compleet Dakonderhoud Nederland helpt u met 
              duurzame oplossingen die geld besparen en uw woning toekomstbestendig maken.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Energieadvies Aanvragen</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:0488234625"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Direct Bellen</span>
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
                <span>Gecertificeerd</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Leaf className="w-6 h-6 text-brand-400" />
                <span>Milieuvriendelijk</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-6 h-6 text-brand-400" />
                <span>Energiezuinig</span>
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
              Waarom Kiezen Voor <span className="text-brand-500">Duurzaam Bouwen?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Duurzaam bouwen is niet alleen goed voor het milieu, maar ook voor uw portemonnee en gezondheid. 
              Ontdek de voordelen van onze duurzame bouwoplossingen.
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

          {/* Environmental Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">{impact.value}</div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{impact.metric}</div>
                <div className="text-gray-600 text-sm">{impact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Voordelen Van <span className="text-brand-500">Duurzaam Bouwen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek hoe duurzaam bouwen uw leven verbetert, kosten bespaart 
              en bijdraagt aan een betere wereld voor toekomstige generaties.
            </p>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mr-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-gray-600 text-lg">{benefit.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-4">Concrete voordelen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Lagere energiekosten</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Hogere woningwaarde</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Gezonder binnenklimaat</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Bijdrage aan milieu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Duurzame Technologieën</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van zonnepanelen tot warmtepompen, wij bieden praktische duurzame technologieën 
              voor een energiezuinige en milieuvriendelijke woning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sustainableTechnologies.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technology Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Zonnepanelen installatie"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Zonne-energie</h4>
                <p className="text-sm">Duurzame energieopwekking voor uw woning</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Isolatie werkzaamheden"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Isolatie</h4>
                <p className="text-sm">Goede isolatie voor energiebesparing</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Duurzame materialen"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Duurzame Materialen</h4>
                <p className="text-sm">Milieuvriendelijke bouwmaterialen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ons <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Duurzaamheidsproces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van analyse tot realisatie begeleiden wij u stap voor stap 
              naar een duurzame en energiezuinige woning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilitySteps.map((item, index) => (
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

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Duurzame Oplossingen</span>
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{solution}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Waarom Duurzaam Bouwen Met Compleet Dakonderhoud Nederland?</h4>
                <p className="text-gray-700">
                  Van zonnepanelen tot warmtepompen, wij bieden praktische duurzame oplossingen voor uw woning 
                  of bedrijfspand. Onze expertise zorgt voor energiebesparing en comfort.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Duurzame bouwoplossingen"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
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
              Klaar om uw gebouw duurzaam te maken? Neem contact met ons op 
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
                <p className="text-gray-300 mb-3">Voor acute bouwproblemen</p>
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
        service="Duurzame Bouw"
        title="Energieadvies Aanvragen"
      />
    </div>
  );
};

export default SustainableBuildingPage;
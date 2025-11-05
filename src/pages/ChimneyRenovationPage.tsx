import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Hammer, CheckCircle, Phone, Mail, ArrowRight,
  Award, Shield, Clock, Users, Calculator, Eye, Wrench, AlertTriangle,
  Send, User, MessageCircle, Calendar, Building2, MapPin, Building, Home, Sparkles
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';

const ChimneyRenovationPage = () => {
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

  const renovationServices = [
    "Complete schoorsteen renovatie",
    "Schouw renovatie en modernisering",
    "Rookkanaal renovatie en herstel",
    "Nokvorsten vervangen en herstellen",
    "Loodwerk vernieuwen bij schoorsteen",
    "Voegwerk herstellen en vernieuwen",
    "Schoorsteenkap plaatsen of vervangen",
    "Waterdicht maken van schoorsteen",
    "Isolatie aanbrengen in rookkanaal",
    "Scheuren repareren in schoorsteen",
    "Schoorsteenmantel restaureren",
    "Ventilatie verbeteren in rookkanaal"
  ];

  const renovationTypes = [
    {
      title: "Complete Schoorsteen Renovatie",
      description: "Van kap tot fundering - complete vernieuwing",
      icon: Hammer,
      details: "Volledige renovatie van uw schoorsteen met moderne materialen voor jarenlang probleemloos gebruik."
    },
    {
      title: "Schouw Renovatie",
      description: "Moderne, veilige en energiezuinige schouw",
      icon: Home,
      details: "Complete renovatie van uw schouw, van woonkamer tot dak. Mooi, veilig en volgens alle normen."
    },
    {
      title: "Rookkanaal Herstel",
      description: "Veilig en efficiënt rookkanaal voor optimale trek",
      icon: Shield,
      details: "Professioneel herstel en renovatie van rookkanalen voor veilige afvoer van rookgassen."
    }
  ];

  const features = [
    {
      title: "Behoud Karakter",
      description: "Wij behouden het authentieke karakter van uw woning",
      icon: Sparkles
    },
    {
      title: "Moderne Technieken",
      description: "Gebruik van de nieuwste materialen en technieken",
      icon: Wrench
    },
    {
      title: "10 Jaar Garantie",
      description: "Uitgebreide garantie op alle renovatiewerkzaamheden",
      icon: Shield
    }
  ];

  const renovationProcess = [
    {
      step: "1",
      title: "Gratis Inspectie",
      description: "Uitgebreide inspectie van uw schoorsteen",
      details: "We beoordelen de staat en maken een renovatieplan op maat."
    },
    {
      step: "2",
      title: "Renovatieplan & Offerte",
      description: "Gedetailleerd plan met vaste prijs",
      details: "U krijgt een helder plan met alle werkzaamheden en kosten."
    },
    {
      step: "3",
      title: "Professionele Uitvoering",
      description: "Vakkundige renovatie door specialisten",
      details: "Ervaren vakmensen renoveren uw schoorsteen met oog voor detail."
    },
    {
      step: "4",
      title: "Oplevering & Garantie",
      description: "Perfecte afwerking met 10 jaar garantie",
      details: "Complete oplevering met garantiecertificaat voor uw zekerheid."
    }
  ];

  const renovationBenefits = [
    {
      problem: "Lekkende schoorsteen",
      solution: "Waterdicht gemaakt met nieuwe technieken",
      result: "Nooit Meer Lekkage"
    },
    {
      problem: "Slechte trek in schoorsteen",
      solution: "Rookkanaal gerenoveerd voor optimale trek",
      result: "Perfect Werkend"
    },
    {
      problem: "Oude, lelijke schoorsteen",
      solution: "Volledig gerenoveerd en gemoderniseerd",
      result: "Als Nieuw"
    },
    {
      problem: "Energieverlies via schoorsteen",
      solution: "Geïsoleerd en afgedicht",
      result: "Energie Besparing"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendEmail({
        ...formData,
        service: 'Schoorsteen Renovatie'
      });

      if (success) {
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
      details: ["24/7 Bereikbaar", "Voor al uw renovatieprojecten"],
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="relative inline-block mb-6">
              <div className="bg-gradient-to-r from-white/20 to-brand-400/30 backdrop-blur-sm rounded-full px-6 py-3 border border-brand-400/40 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Gecertificeerd Specialist in Schoorsteen Renovatie
                  </span>
                  <div className="w-3 h-3 bg-brand-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-brand-400">Schoorsteen & Schouw</span>
              <br />
              <span className="text-brand-400">Professioneel Renoveren!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Geef uw schoorsteen een tweede leven! Van kleine reparaties tot complete renovatie.
              <span className="text-brand-400 font-bold"> 10 jaar garantie & vaste prijzen!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 text-lg animate-pulse"
              >
                <Calculator className="w-6 h-6" />
                <span>GRATIS RENOVATIE OFFERTE</span>
              </button>
              <a
                href="tel:0488234625"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>DIRECT ADVIES: 0488 234 625</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-brand-400" />
                <p className="text-lg font-semibold text-brand-400">Waarom kiezen voor renovatie?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Behoud Karakter Woning</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>10 Jaar Garantie</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Energiebesparing</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Waardeverhoging Woning</span>
                </div>
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
              Waarom <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Schoorsteen Renoveren?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Een gerenoveerde schoorsteen werkt beter, ziet er mooier uit en verhoogt de waarde van uw woning.
              Plus: geen lekkages meer en lagere energiekosten!
            </p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Ontdek De Mogelijkheden</span>
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://i.imgur.com/H2FKpZ2.jpg"
                alt="Schoorsteen renovatie"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Voor Renovatie</h4>
                <p className="text-sm">Oude, beschadigde staat</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Schoorsteen renovatie"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Tijdens Renovatie</h4>
                <p className="text-sm">Vakkundig werk</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://imgur.com/Zcx7Pq6.jpg"
                alt="Gerenoveerde schoorsteen"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Na Renovatie</h4>
                <p className="text-sm">Perfect resultaat!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Renovatie Services</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto mb-2">
              ✅ Complete renovatie van A tot Z
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Van kleine reparaties tot complete renovatie. Alles is mogelijk!
              Met behoud van het karakter van uw woning.
            </p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>BEREKEN RENOVATIEKOSTEN</span>
            </button>
          </div>

          <div className="space-y-12">
            {renovationTypes.map((type, index) => (
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
                  <p className="text-gray-700 leading-relaxed mb-4">{type.details}</p>
                  <button
                    onClick={() => setIsContactPopupOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Vraag Offerte Aan</span>
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-4">Wat is inbegrepen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Gratis inspectie vooraf</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Vaste prijs, geen verrassingen</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">Hoogwaardige materialen</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="text-gray-700">10 jaar garantie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-green-600">De Voordelen Van Renovatie</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto mb-4">
              Stop de problemen, behoud het karakter!
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Een gerenoveerde schoorsteen is veiliger, mooier en energiezuiniger
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-500 text-white">
              <h3 className="text-xl font-bold">Wat Renovatie Voor U Betekent</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {renovationBenefits.map((item, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <div className="font-medium text-slate-900">{item.problem}</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Oplossing</div>
                    <div className="font-bold text-blue-600">{item.solution}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Resultaat</div>
                    <div className="font-bold text-green-600 animate-pulse">
                      {item.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 space-y-4">
            <p className="text-lg font-semibold text-gray-700">
              Investeer in kwaliteit en geniet jarenlang zonder zorgen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>BEREKEN UW INVESTERING</span>
              </button>
              <a
                href="tel:0488234625"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>0488 234 625 - BEL NU!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hoe Wij Uw <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Schoorsteen Renoveren</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto mb-2">
              In 4 Stappen Naar Een Als Nieuwe Schoorsteen!
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Professioneel, betrouwbaar en met oog voor detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>START UW RENOVATIE</span>
              </button>
              <a
                href="tel:0488234625"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>GRATIS INSPECTIE PLANNEN</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renovationProcess.map((item, index) => (
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
                Waarom <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Renoveren Ipv Verwijderen?</span>
              </h2>
              <div className="space-y-6">
                {renovationServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="p-6 bg-gradient-to-br from-brand-50 to-blue-50 border-2 border-brand-400 rounded-lg mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">
                    💎 Verhoog De Waarde Van Uw Woning!
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Een gerenoveerde schoorsteen verhoogt de waarde van uw woning
                    met gemiddeld <strong>€5.000 - €15.000!</strong>
                  </p>
                  <button
                    onClick={() => setIsContactPopupOpen(true)}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    ONTDEK DE MOGELIJKHEDEN →
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                  <h5 className="font-bold text-slate-900 mb-3 text-lg">✅ Voordelen Renovatie:</h5>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Behoud authentiek karakter</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Waardeverhoging woning</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Energiebesparing</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Veilig & betrouwbaar</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />10 jaar garantie</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Schoorsteen renovatie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-brand-500 text-slate-900 font-bold px-4 py-2 rounded-lg">
                10 JAAR GARANTIE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat Onze <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent">Klanten</span> Zeggen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Al meer dan 25 jaar renoveren wij schoorstenen. Onze klanten waarderen onze
              vakmanschap, betrouwbaarheid en de kwaliteit van ons werk.
            </p>
          </div>

          <div className="relative w-full max-w-none mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl transform -rotate-1"></div>

            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 mx-2 sm:mx-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-brand-600 rounded-b-full"></div>

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
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent font-semibold text-lg tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Laten We Uw Schoorsteen
              <span className="text-brand-400"> Renoveren</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar voor een gerenoveerde schoorsteen? Neem contact met ons op
              voor een gratis inspectie en renovatie-advies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

              <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                <h4 className="text-white font-bold mb-4">Bedrijfsgegevens</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p><span className="font-medium">KvK:</span> 94106819</p>
                  <p><span className="font-medium">Vestiging:</span> Andelst</p>
                  <p><span className="font-medium">Ervaring:</span> 25+ jaar</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-900/20 border border-green-900/50 rounded-xl">
                <h4 className="text-green-400 font-bold mb-2">Renovatie Specialist</h4>
                <p className="text-gray-300 mb-3">Voor advies over renovatie</p>
                <a
                  href="tel:0488234625"
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  0488 234 625
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Vraag een gratis renovatie-offerte aan</h3>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
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
                          placeholder="Amsterdam"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          placeholder="Hoofdstraat 123"
                        />
                      </div>
                    </div>
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
                          placeholder="Noord-Holland"
                        />
                      </div>
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
                        <option value="asap">Zo snel mogelijk</option>
                        <option value="1-3months">1-3 maanden</option>
                        <option value="3-6months">3-6 maanden</option>
                        <option value="6-12months">6-12 maanden</option>
                        <option value="flexible">Flexibel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht/Beschrijving *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none text-gray-900"
                        placeholder="Beschrijf uw schoorsteen renovatie wensen..."
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
                          : 'bg-brand-500 hover:bg-brand-600 text-white'
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

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Klaar Voor Een Gerenoveerde Schoorsteen?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Laat uw schoorsteen renoveren door specialisten.
                Gratis inspectie, eerlijke prijzen, 10 jaar garantie!
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

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Schoorsteen Renovatie"
        title="Gratis Renovatie Inspectie"
      />
    </div>
  );
};

export default ChimneyRenovationPage;
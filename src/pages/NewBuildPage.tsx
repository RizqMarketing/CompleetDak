import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, CheckCircle, Star, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Building, Hammer, MapPin,
  Send, User, MessageCircle, Calendar, Building2, Wrench
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';

const NewBuildPage = () => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    preferredContact: 'email',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const benefits = [
    "Persoonlijk maatwerk volgens uw wensen",
    "Kwaliteitsvolle bouwmethoden en materialen",
    "Energiezuinige en duurzame oplossingen",
    "Transparante prijzen en heldere communicatie",
    "Persoonlijke begeleiding van A tot Z",
    "Garantie op al ons vakwerk"
  ];

  const features = [
    {
      title: "Persoonlijk Ontwerp",
      description: "Samen met u ontwikkelen we het perfecte ontwerp dat past bij uw wensen en budget",
      icon: Building
    },
    {
      title: "Kwaliteitsvolle Materialen",
      description: "Wij werken met betrouwbare leveranciers voor duurzaamheid en kwaliteit",
      icon: Hammer
    },
    {
      title: "Lokale Expertise",
      description: "25+ jaar ervaring in de regio met kennis van lokale regelgeving en omstandigheden",
      icon: MapPin
    }
  ];

  const process = [
    {
      step: "1",
      title: "Kennismaking & Wensen",
      description: "Samen bespreken we uw dromen en maken we een eerste schets",
      details: "In dit eerste gesprek luisteren we naar uw wensen en ideeën. We bespreken uw budget, tijdlijn en specifieke eisen. Samen maken we een eerste schets die aansluit bij uw levensstijl."
    },
    {
      step: "2", 
      title: "Offerte & Planning",
      description: "Heldere offerte met realistische planning en prijzen",
      details: "U ontvangt een transparante offerte waarin alle kosten duidelijk zijn uitgesplitst. We maken een realistische planning met duidelijke mijlpalen."
    },
    {
      step: "3",
      title: "Vergunningen & Voorbereiding",
      description: "Wij helpen met vergunningen en bereiden alles voor",
      details: "We begeleiden u bij het aanvragen van bouwvergunningen en zorgen ervoor dat alle voorbereidingen getroffen zijn voordat we beginnen."
    },
    {
      step: "4",
      title: "Bouw & Oplevering",
      description: "Vakkundige uitvoering met persoonlijke aandacht",
      details: "Tijdens de bouw houden we u op de hoogte van de voortgang. We werken netjes en efficiënt tot de sleuteloverdracht."
    }
  ];

  const testimonials = [
    {
      name: "Hans",
      text: "Snelle service en eerlijk advies, iets wat je tegenwoordig niet vaak meer ziet. Mijn dak ligt er weer strak bij. Zeer tevreden!",
      rating: 5
    },
    {
      name: "Herman Smits",
      text: "Geen gezeur, gewoon doen wat beloofd is. Zo hoort het, en dat doen ze hier perfect.",
      rating: 5
    },
    {
      name: "Naomi Vos",
      text: "Het verschil voor en na is echt enorm. Dak ziet eruit alsof het gisteren is aangelegd!",
      rating: 5
    }
  ];

  const specifications = [
    {
      category: "Fundering & Ruwbouw",
      items: ["Betonnen fundering", "Metselwerk", "Dakconstructie", "Ruwbouw afwerking"]
    },
    {
      category: "Installaties",
      items: ["Elektra & verlichting", "Sanitair & CV", "Ventilatie", "Basis domotica"]
    },
    {
      category: "Afwerking",
      items: ["Stucwerk & schilderwerk", "Vloeren & tegels", "Keuken & badkamers", "Buitenafwerking"]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail({
        ...formData,
        service: 'Nieuwbouw Woningen'
      });
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
          preferredContact: 'email',
          budget: '',
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
      details: ["0488 23 40 37", "24/7 Bereikbaar"],
      action: "tel:0488234037"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@aannemersbedrijf-emt.nl", "Reactie vaak binnen 2 uur"],
      action: "mailto:info@aannemersbedrijf-emt.nl"
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

  const projectTypes = [
    { id: 'newbuild', label: 'Nieuwbouw', icon: Building2 },
    { id: 'renovation', label: 'Renovatie', icon: Wrench },
    { id: 'extension', label: 'Uitbouw', icon: Home }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Nieuwbouw Woningen</span>
              <br />
              Met Persoonlijke Aandacht
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Van droomhuis tot werkelijkheid. EMT bouwt uw nieuwe woning 
              met persoonlijke begeleiding, vakmanschap en oog voor detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Gratis Adviesgesprek</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:0488234037"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Direct Bellen</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>25+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span>Volledig Verzekerd</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span>24/7 Bereikbaar</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-yellow-400" />
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
              Waarom Kiezen Voor <span className="text-yellow-500">EMT Nieuwbouw?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met meer dan 25 jaar ervaring in de nieuwbouw weten wij precies hoe we uw droomhuis 
              werkelijkheid maken. Van eerste schets tot sleuteloverdracht begeleiden wij u persoonlijk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Moderne nieuwbouw woning"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Moderne Architectuur</h4>
                <p className="text-sm">Eigentijds design met duurzame materialen</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Nieuwbouw in aanbouw"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Vakkundig Werk</h4>
                <p className="text-sm">Precisie en kwaliteit in elke fase</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Afgewerkte nieuwbouw interieur"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Kwaliteitsvolle Afwerking</h4>
                <p className="text-sm">Zorgvuldige materialen en detaillering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Uw Voordelen Bij <span className="text-yellow-500">EMT Nieuwbouw</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Waarom EMT?</h4>
                <p className="text-gray-700">
                  Als lokaal aannemersbedrijf in Andelst combineren wij persoonlijke aandacht met vakmanschap. 
                  Onze ervaring van 25+ jaar garandeert kwaliteit en betrouwbaarheid voor uw nieuwbouwproject.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Nieuwbouw constructie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ons <span className="text-yellow-500">Bouwproces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste gesprek tot sleuteloverdracht. Wij begeleiden u 
              stap voor stap door het hele bouwproces met transparantie en persoonlijke aandacht.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat Is <span className="text-yellow-500">Inbegrepen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bij EMT nieuwbouw krijgt u een compleet pakket. Van fundering tot afwerking, 
              alles wordt vakkundig uitgevoerd volgens onze kwaliteitsnormen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Wat Onze <span className="text-yellow-500">Klanten Zeggen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met 25+ jaar ervaring hebben wij vele tevreden klanten geholpen met hun bouwprojecten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900 mb-1">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Laten We Uw Project
              <span className="text-yellow-400"> Bespreken</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar om uw bouwdroom werkelijkheid te maken? Neem contact met ons op 
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
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {info.action && detailIndex === 0 ? (
                            <a 
                              href={info.action} 
                              className="hover:text-yellow-400 transition-colors"
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
                  href="tel:0488234037" 
                  className="text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  0488 23 40 37
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="0488 23 40 37"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Voorkeurscontact
                      </label>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Telefoon</option>
                        <option value="both">Beide</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Type Project
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInputChange('projectType', type.id)}
                          className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                            formData.projectType === type.id
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <type.icon className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                          <div className="font-medium text-slate-900">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget (indicatief)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      >
                        <option value="">Selecteer budget</option>
                        <option value="<200k">Onder €200.000</option>
                        <option value="200k-350k">€200.000 - €350.000</option>
                        <option value="350k-500k">€350.000 - €500.000</option>
                        <option value="500k-750k">€500.000 - €750.000</option>
                        <option value="750k+">Boven €750.000</option>
                      </select>
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
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        >
                          <option value="">Selecteer timing</option>
                          <option value="asap">Zo snel mogelijk</option>
                          <option value="3-6months">3-6 maanden</option>
                          <option value="6-12months">6-12 maanden</option>
                          <option value="12months+">12+ maanden</option>
                          <option value="flexible">Flexibel</option>
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
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
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
                          : 'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
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
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Spoedeisend Project?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Voor urgente bouwprojecten of noodsituaties kunt u ons direct bellen. 
                Onze experts staan 24/7 voor u klaar.
              </p>
              <a
                href="tel:0488234037"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Bel Nu: 0488 23 40 37
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Nieuwbouw Woningen"
        title="Nieuwbouw Adviesgesprek"
      />
    </div>
  );
};

export default NewBuildPage;
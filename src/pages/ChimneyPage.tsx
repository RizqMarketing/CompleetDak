import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Flame, CheckCircle, Star, Phone, Mail, ArrowRight, 
  Award, Shield, Clock, Users, Calculator, Eye, Wrench, AlertTriangle, Hammer,
  Send, User, MessageCircle, Calendar, Building2, MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';
import { sendEmail } from '../utils/emailService';

const ChimneyPage = () => {
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

  const chimneyServices = [
    "Schoorsteen renovatie en onderhoud",
    "Schoorsteen afbreken en verwijderen",
    "Nokvorsten renovatie",
    "Schoorsteen reparaties",
    "Lood reparaties aan schoorstenen",
    "Schoorsteen inspectie en advies",
    "Rookkanaal reiniging",
    "Schoorsteenkap plaatsing"
  ];

  const chimneyTypes = [
    {
      title: "Schoorsteen Renovatie",
      description: "Complete renovatie van oude schoorstenen voor veilig gebruik",
      icon: Hammer,
      details: "Professionele renovatie van schoorstenen met moderne materialen en technieken voor veilig en duurzaam gebruik."
    },
    {
      title: "Schoorsteen Verwijderen",
      description: "Veilige afbraak en verwijdering van ongebruikte schoorstenen",
      icon: AlertTriangle,
      details: "Vakkundige afbraak van schoorstenen met zorgvuldige afdichting van het dak en herstel van de dakbedekking."
    },
    {
      title: "Onderhoud & Reparatie",
      description: "Regelmatig onderhoud en reparaties voor optimale werking",
      icon: Wrench,
      details: "Preventief onderhoud en reparaties om uw schoorsteen in goede staat te houden en veilig te laten functioneren."
    }
  ];

  const features = [
    {
      title: "Veiligheid Voorop",
      description: "Alle werkzaamheden volgens veiligheidsnormen",
      icon: Shield
    },
    {
      title: "Vakkundige Uitvoering",
      description: "25+ jaar ervaring in schoorsteenwerk",
      icon: Award
    },
    {
      title: "Snelle Service",
      description: "Spoedservice voor urgente schoorsteenproblemen",
      icon: Clock
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

  const chimneyProcess = [
    {
      step: "1",
      title: "Inspectie & Veiligheidscheck",
      description: "Grondige inspectie van de schoorsteen en veiligheidscontrole",
      details: "We inspecteren de schoorsteen grondig en controleren alle veiligheidsaspekten voordat we beginnen."
    },
    {
      step: "2",
      title: "Advies & Planning",
      description: "Professioneel advies en planning van de werkzaamheden",
      details: "Op basis van de inspectie adviseren we over de beste aanpak en maken een veilige werkplanning."
    },
    {
      step: "3",
      title: "Veilige Uitvoering",
      description: "Vakkundige uitvoering volgens alle veiligheidsnormen",
      details: "Alle werkzaamheden worden veilig uitgevoerd met de juiste materialen en technieken."
    },
    {
      step: "4",
      title: "Controle & Afwerking",
      description: "Eindcontrole en perfecte afwerking van alle details",
      details: "Na afronding controleren we alles en zorgen voor een perfecte afwerking en opruiming."
    }
  ];

  const chimneyProblems = [
    {
      problem: "Lekkende schoorsteen",
      solution: "Lood reparaties en afdichting",
      urgency: "Hoog"
    },
    {
      problem: "Beschadigde nokvorsten",
      solution: "Renovatie of vervanging",
      urgency: "Gemiddeld"
    },
    {
      problem: "Onveilige schoorsteen",
      solution: "Renovatie of verwijdering",
      urgency: "Hoog"
    },
    {
      problem: "Verstopte rookkanalen",
      solution: "Reiniging en onderhoud",
      urgency: "Gemiddeld"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail({
        ...formData,
        service: 'Schoorsteenwerk'
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
    { id: 'renovation', label: 'Renovatie', icon: Hammer },
    { id: 'removal', label: 'Verwijdering', icon: AlertTriangle },
    { id: 'maintenance', label: 'Onderhoud', icon: Wrench }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 pt-32">
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
              <span className="text-yellow-400">Schoorsteenwerk</span>
              <br />
              Veilig & Vakkundig
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Van renovatie tot verwijdering en onderhoud. EMT zorgt voor veilig 
              en vakkundig schoorsteenwerk volgens alle normen en voorschriften.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Gratis Inspectie</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:0488234037"
                className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <AlertTriangle className="w-5 h-5" />
                <span>24/7 Spoedservice</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>25+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span>Veiligheid Voorop</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span>24/7 Bereikbaar</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-yellow-400" />
                <span>Vakkundige Specialisten</span>
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
              Waarom Kiezen Voor <span className="text-yellow-500">EMT Schoorsteenwerk?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met 25+ jaar ervaring in schoorsteenwerk zorgen wij voor veilige en vakkundige 
              uitvoering van alle schoorsteenwerkzaamheden volgens de geldende normen.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://i.imgur.com/H2FKpZ2.jpg"
                alt="Schoorsteen renovatie"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Renovatie</h4>
                <p className="text-sm">Veilig en duurzaam</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Schoorsteen verwijdering"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Verwijdering</h4>
                <p className="text-sm">Veilige afbraak</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Schoorsteen onderhoud"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Onderhoud</h4>
                <p className="text-sm">Preventief en curatief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chimney Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Onze <span className="text-yellow-500">Schoorsteenwerk Specialisaties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van renovatie tot verwijdering en onderhoud, 
              wij hebben de expertise voor alle schoorsteenwerkzaamheden.
            </p>
          </div>

          <div className="space-y-12">
            {chimneyTypes.map((type, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-6">
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
                    <h4 className="font-bold text-slate-900 mb-4">Wat is inbegrepen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">Veiligheidsinspectie</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">Professioneel advies</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">Vakkundige uitvoering</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">Garantie op het werk</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-red-500">Schoorsteenproblemen?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Herkenbare problemen met uw schoorsteen? Wij bieden snelle en 
              vakkundige oplossingen voor alle schoorsteenproblemen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-red-500 text-white">
              <h3 className="text-xl font-bold">Veelvoorkomende Schoorsteenproblemen</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {chimneyProblems.map((item, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <div className="font-medium text-slate-900">{item.problem}</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Oplossing</div>
                    <div className="font-bold text-green-600">{item.solution}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Urgentie</div>
                    <div className={`font-bold ${item.urgency === 'Hoog' ? 'text-red-500' : 'text-yellow-500'}`}>
                      {item.urgency}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="tel:0488234037"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Direct Bellen: 0488 23 40 37</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ons <span className="text-yellow-500">Schoorsteenwerk Proces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van analyse tot realisatie begeleiden wij u stap voor stap 
              naar een veilig en professioneel proces volgens alle normen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chimneyProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
                Onze <span className="text-yellow-500">Schoorsteenwerk Diensten</span>
              </h2>
              <div className="space-y-6">
                {chimneyServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Waarom EMT Schoorsteenwerk?</h4>
                <p className="text-gray-700">
                  Van kleine reparaties tot complete renovaties. Wij zorgen voor veilig 
                  en vakkundig schoorsteenwerk volgens alle geldende normen en voorschriften.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Schoorsteenwerk in uitvoering"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Tevreden <span className="text-yellow-500">Klanten</span>
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
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Laten We Uw Schoorsteen
              <span className="text-yellow-400"> Inspecteren</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Klaar voor vakkundig schoorsteenwerk? Neem contact met ons op 
              voor een gratis inspectie en advies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

              <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                <h4 className="text-white font-bold mb-4">Bedrijfsgegevens</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p><span className="font-medium">KvK:</span> 94106819</p>
                  <p><span className="font-medium">Vestiging:</span> Andelst</p>
                  <p><span className="font-medium">Ervaring:</span> 25+ jaar</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-900/20 border border-red-900/50 rounded-xl">
                <h4 className="text-red-400 font-bold mb-2">24/7 Spoedservice</h4>
                <p className="text-gray-300 mb-3">Voor urgente schoorsteenproblemen</p>
                <a 
                  href="tel:0488234037" 
                  className="text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  0488 23 40 37
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Stuur ons een bericht</h3>
                
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
                        <option value="<2k">Onder €2.000</option>
                        <option value="2k-5k">€2.000 - €5.000</option>
                        <option value="5k-10k">€5.000 - €10.000</option>
                        <option value="10k-20k">€10.000 - €20.000</option>
                        <option value="20k+">Boven €20.000</option>
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
                          <option value="1month">Binnen 1 maand</option>
                          <option value="3months">Binnen 3 maanden</option>
                          <option value="6months">Binnen 6 maanden</option>
                          <option value="flexible">Flexibel</option>
                        </select>
                      </div>
                    </div>
                  </div>

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
                        placeholder="Beschrijf uw schoorsteenprobleem of project..."
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

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Schoorsteenproblemen?
              </h3>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Voor urgente schoorsteenproblemen of veiligheidskwesties kunt u ons direct bellen. 
                Onze specialisten staan 24/7 voor u klaar.
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

      <Footer />

      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        service="Schoorsteenwerk"
        title="Gratis Schoorsteen Inspectie"
      />
    </div>
  );
};

export default ChimneyPage;
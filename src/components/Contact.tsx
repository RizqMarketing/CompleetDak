import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, Clock, Send, User, 
  MessageCircle, Calendar, Home, Building, Wrench, MapPin 
} from 'lucide-react';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const success = await sendEmail(formData);
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
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
    { id: 'newbuild', label: 'Nieuwbouw', icon: Building },
    { id: 'renovation', label: 'Renovatie', icon: Wrench },
    { id: 'extension', label: 'Uitbouw', icon: Home }
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
              <h4 className="text-red-400 font-bold mb-2">24/7 Noodservice</h4>
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
                      <option value="<25k">Onder €25.000</option>
                      <option value="25k-50k">€25.000 - €50.000</option>
                      <option value="50k-100k">€50.000 - €100.000</option>
                      <option value="100k-250k">€100.000 - €250.000</option>
                      <option value="250k+">Boven €250.000</option>
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
                        <option value="1-3months">1-3 maanden</option>
                        <option value="3-6months">3-6 maanden</option>
                        <option value="6-12months">6-12 maanden</option>
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
  );
};

export default Contact;
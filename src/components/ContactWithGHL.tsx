import React from 'react';
import { 
  Phone, Mail, Clock, MapPin, Shield, Award 
} from 'lucide-react';

interface ContactWithGHLProps {
  standalone?: boolean;
  ghlFormUrl?: string; // GoHighLevel form URL
}

const ContactWithGHL = ({ standalone = true, ghlFormUrl }: ContactWithGHLProps) => {
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

  const content = (
    <>
      <div className={standalone ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold text-lg tracking-wide uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Laten We Uw Project
            <span className="bg-gradient-to-r from-blue-500 to-brand-600 bg-clip-text text-transparent"> Bespreken</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Klaar om uw dakproject te realiseren? Neem contact met ons op 
            voor een vrijblijvende dakinspectie.
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
                    <info.icon className="w-6 h-6 text-white" />
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
              <h4 className="text-red-400 font-bold mb-2">24/7 Noodservice</h4>
              <p className="text-gray-300 mb-3">Voor acute bouwproblemen</p>
              <a 
                href="tel:0488234625" 
                className="text-red-400 font-semibold hover:text-red-300 transition-colors"
              >
                0488 234 625
              </a>
            </div>
          </div>

          {/* GoHighLevel Form in styled container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Stuur ons een bericht</h3>
              
              {/* GoHighLevel Form Container */}
              <div className="relative">
                {ghlFormUrl ? (
                  <iframe 
                    src={ghlFormUrl}
                    style={{
                      width: '100%',
                      minHeight: '600px',
                      border: 'none',
                      borderRadius: '12px',
                      backgroundColor: 'transparent'
                    }}
                    title="Contact Form"
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-gray-50 rounded-lg p-12 text-center">
                    <div className="text-gray-500 mb-4">
                      <Mail className="w-12 h-12 mx-auto mb-4" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">
                      Formulier wordt geladen...
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Voeg je GoHighLevel formulier URL toe om het formulier te tonen.
                    </p>
                    <p className="text-sm text-gray-500">
                      Of bel direct: <a href="tel:0488234625" className="text-brand-600 hover:underline">0488 234 625</a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8">
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
    </>
  );

  if (standalone) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {content}
      </section>
    );
  }

  return (
    <section id="contact">
      {content}
    </section>
  );
};

export default ContactWithGHL;
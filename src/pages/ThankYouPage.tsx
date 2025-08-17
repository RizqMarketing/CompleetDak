import React from 'react';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Bedankt voor uw bericht!</h1>
              <p className="text-xl text-gray-600 mb-6">
                Uw contactaanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Wat gebeurt er nu?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <p className="text-gray-700">Wij bekijken uw aanvraag zorgvuldig</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <p className="text-gray-700">U ontvangt binnen 24 uur een reactie van ons</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <p className="text-gray-700">Wij plannen een afspraak voor een vrijblijvend gesprek</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Phone className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Spoedeisend?</h4>
                <p className="text-gray-600 mb-3">Voor urgente zaken kunt u ons direct bellen</p>
                <a 
                  href="tel:0488234037" 
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  0488 23 40 37
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Mail className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Email Contact</h4>
                <p className="text-gray-600 mb-3">Of stuur ons direct een email</p>
                <a 
                  href="mailto:info@aannemersbedrijf-emt.nl" 
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  info@aannemersbedrijf-emt.nl
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Terug naar Home</span>
              </Link>
              <Link 
                to="/#about"
                className="inline-flex items-center space-x-2 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Meer Over EMT</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
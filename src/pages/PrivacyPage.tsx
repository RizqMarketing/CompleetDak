import React from 'react';
import { Shield, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-brand-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacybeleid</h1>
              <p className="text-gray-600 text-lg">
                Compleet Dakonderhoud Nederland respecteert uw privacy en beschermt uw persoonlijke gegevens
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Wie zijn wij?</h2>
              <p className="text-gray-700 mb-6">
                Compleet Dakonderhoud Nederland is een aannemersbedrijf gevestigd te Andelst. Wij zijn 
                verantwoordelijk voor de verwerking van uw persoonlijke gegevens zoals beschreven 
                in dit privacybeleid.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-slate-900 mb-4">Contactgegevens:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-brand-500" />
                    <span>Geurdeland 17G, 6673 DR Andelst</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-500" />
                    <span>0488 234 625</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-500" />
                    <span>info@compleetdakonderhoudnederland.nl</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-brand-500 font-bold">KvK:</span>
                    <span>94106819</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-gray-700 mb-4">Wij kunnen de volgende persoonlijke gegevens van u verzamelen:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Naam en contactgegevens (e-mailadres, telefoonnummer, adres)</li>
                <li>Projectinformatie en communicatie over uw bouwproject</li>
                <li>Financiële gegevens voor offertes en facturering</li>
                <li>Foto's van werkzaamheden (met uw toestemming)</li>
                <li>Communicatie via e-mail, telefoon of contactformulieren</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Waarom verwerken wij uw gegevens?</h2>
              <p className="text-gray-700 mb-4">Wij verwerken uw persoonlijke gegevens voor de volgende doeleinden:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Het uitvoeren van onze diensten en werkzaamheden</li>
                <li>Communicatie over uw project en planning</li>
                <li>Het opstellen van offertes en facturen</li>
                <li>Klantenservice en ondersteuning</li>
                <li>Wettelijke verplichtingen (zoals administratie en garanties)</li>
                <li>Marketing (alleen met uw toestemming)</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Rechtsgrondslag</h2>
              <p className="text-gray-700 mb-6">
                Wij verwerken uw gegevens op basis van:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Uitvoering van een overeenkomst (bouwwerkzaamheden)</li>
                <li>Wettelijke verplichting (administratie, garanties)</li>
                <li>Gerechtvaardigd belang (klantenservice, bedrijfsvoering)</li>
                <li>Toestemming (marketing, foto's)</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="text-gray-700 mb-6">
                Wij bewaren uw gegevens niet langer dan noodzakelijk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Projectgegevens: 7 jaar na afronding (wettelijke verplichting)</li>
                <li>Financiële administratie: 7 jaar (fiscale wetgeving)</li>
                <li>Marketinggegevens: tot u zich afmeldt</li>
                <li>Foto's: met uw toestemming, tot u deze intrekt</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Delen wij uw gegevens?</h2>
              <p className="text-gray-700 mb-6">
                Wij delen uw gegevens alleen wanneer dit noodzakelijk is:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Met onderaannemers (alleen projectgerelateerde informatie)</li>
                <li>Met leveranciers (voor materiaalbestellingen)</li>
                <li>Met accountant en administratiekantoor</li>
                <li>Bij wettelijke verplichting</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Uw rechten</h2>
              <p className="text-gray-700 mb-4">U heeft de volgende rechten:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Inzage in uw persoonlijke gegevens</li>
                <li>Rectificatie van onjuiste gegevens</li>
                <li>Verwijdering van gegevens (onder voorwaarden)</li>
                <li>Beperking van de verwerking</li>
                <li>Overdraagbaarheid van gegevens</li>
                <li>Bezwaar tegen verwerking</li>
                <li>Intrekking van toestemming</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Beveiliging</h2>
              <p className="text-gray-700 mb-6">
                Wij nemen passende technische en organisatorische maatregelen om uw 
                persoonlijke gegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
              <p className="text-gray-700 mb-6">
                Onze website gebruikt functionele cookies voor een goede werking. 
                Voor meer informatie zie ons <a href="/cookiebeleid" className="text-brand-600 hover:text-brand-700">cookiebeleid</a>.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Wijzigingen</h2>
              <p className="text-gray-700 mb-6">
                Wij kunnen dit privacybeleid wijzigen. De meest actuele versie vindt u altijd op onze website.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact en klachten</h2>
              <p className="text-gray-700 mb-4">
                Voor vragen over dit privacybeleid of uw rechten kunt u contact met ons opnemen:
              </p>
              <div className="bg-brand-50 border border-brand-200 rounded-lg p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-600" />
                    <a href="mailto:info@compleetdakonderhoudnederland.nl" className="text-brand-600 hover:text-brand-700">
                      info@compleetdakonderhoudnederland.nl
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-600" />
                    <a href="tel:0488234625" className="text-brand-600 hover:text-brand-700">
                      0488 234 625
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens als u van mening 
                  bent dat wij uw gegevens niet correct verwerken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
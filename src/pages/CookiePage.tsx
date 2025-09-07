import React from 'react';
import { Cookie, Mail, Phone, Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20 pt-32 lg:pt-48">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <Cookie className="w-16 h-16 text-brand-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Cookiebeleid</h1>
              <p className="text-gray-600 text-lg">
                Informatie over het gebruik van cookies op onze website
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Wat zijn cookies?</h2>
              <p className="text-gray-700 mb-6">
                Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden 
                opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website goed te laten 
                functioneren en uw gebruikerservaring te verbeteren.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Welke cookies gebruiken wij?</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <Settings className="w-6 h-6 text-green-600 mr-2" />
                  Functionele cookies (noodzakelijk)
                </h3>
                <p className="text-gray-700 mb-4">
                  Deze cookies zijn essentieel voor het goed functioneren van onze website. 
                  Ze kunnen niet worden uitgeschakeld.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Sessie cookies voor navigatie</li>
                  <li>Cookies voor contactformulieren</li>
                  <li>Beveiligingscookies</li>
                  <li>Cookies voor taalvoorkeuren</li>
                </ul>
              </div>

              <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing cookies (optioneel)</h3>
                <p className="text-gray-700 mb-4">
                  Deze cookies helpen ons om relevante advertenties te tonen en de effectiviteit van onze marketingcampagnes te meten.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Facebook Pixel:</strong> Volgt conversies van Facebook advertenties, optimaliseert advertenties en bouwt doelgroepen op voor toekomstige advertenties</li>
                  <li><strong>Google Ads:</strong> Helpt bij het meten van conversies van advertentiecampagnes en het opnieuw targeten van bezoekers</li>
                  <li><strong>Remarketing cookies:</strong> Stellen ons in staat om u relevante advertenties te tonen op andere websites</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Status:</strong> Actief - u kunt deze cookies beheren via uw browserinstellingen
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Analytische cookies (optioneel)</h3>
                <p className="text-gray-700 mb-4">
                  Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, 
                  zodat we deze kunnen verbeteren.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Google Analytics (geanonimiseerd)</li>
                  <li>Bezoekersstatistieken</li>
                  <li>Populaire pagina's</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Status:</strong> Momenteel niet actief - wordt alleen gebruikt met uw toestemming
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Sociale media en advertentienetwerken</h2>
              <p className="text-gray-700 mb-6">
                Onze website maakt gebruik van de volgende externe diensten voor advertenties en tracking:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Facebook (Meta)</h3>
                <p className="text-gray-700 mb-4">
                  We gebruiken Facebook Pixel om de effectiviteit van onze Facebook advertenties te meten, 
                  de gebruikerservaring te verbeteren en relevante advertenties te tonen.
                </p>
                <p className="text-gray-700 mb-2">Gegevens die worden verzameld kunnen omvatten:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Pagina's die u bezoekt op onze website</li>
                  <li>Acties die u onderneemt op onze website</li>
                  <li>Informatie over uw apparaat en browser</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Meer informatie over Facebook's privacybeleid vindt u op: 
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">
                    https://www.facebook.com/policy.php
                  </a>
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Google Ads</h3>
                <p className="text-gray-700 mb-4">
                  We gebruiken Google Ads om onze diensten te promoten en om de effectiviteit van onze advertentiecampagnes te meten.
                </p>
                <p className="text-gray-700 mb-2">Gegevens die worden verzameld kunnen omvatten:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Informatie over uw bezoek aan onze website</li>
                  <li>IP-adres</li>
                  <li>Advertentie-identificatoren</li>
                  <li>Browsertype en -instellingen</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Meer informatie over Google's privacybeleid vindt u op: 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies beheren</h2>
              <p className="text-gray-700 mb-4">
                U kunt cookies op verschillende manieren beheren:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Via uw browser</h3>
              <p className="text-gray-700 mb-4">
                De meeste browsers stellen u in staat cookies te weigeren of te verwijderen. 
                Hier vindt u instructies voor populaire browsers:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/nl/kb/cookies-informatie-websites-computer-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Safari</a></li>
                <li><a href="https://support.microsoft.com/nl-nl/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Internet Explorer</a></li>
              </ul>

              <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-slate-900 mb-2">Let op!</h3>
                <p className="text-gray-700">
                  Als u alle cookies uitschakelt, werken sommige onderdelen van onze website 
                  mogelijk niet correct. Functionele cookies zijn noodzakelijk voor de basisfunctionaliteit.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Externe diensten</h2>
              <p className="text-gray-700 mb-4">
                Onze website kan gebruik maken van externe diensten die hun eigen cookies plaatsen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Google Maps:</strong> Voor het tonen van onze locatie</li>
                <li><strong>Google Fonts:</strong> Voor het laden van lettertypen</li>
                <li><strong>Google Ads:</strong> Voor advertentiedoeleinden</li>
                <li><strong>Facebook Pixel:</strong> Voor advertentie- en conversietracking</li>
                <li><strong>Externe afbeeldingen:</strong> Van betrouwbare bronnen zoals Pexels</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Bewaartermijn</h2>
              <p className="text-gray-700 mb-6">
                Verschillende cookies hebben verschillende bewaartermijnen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Sessie cookies:</strong> Worden verwijderd wanneer u uw browser sluit</li>
                <li><strong>Functionele cookies:</strong> Maximaal 1 jaar</li>
                <li><strong>Analytische cookies:</strong> Maximaal 2 jaar</li>
                <li><strong>Marketing cookies:</strong> Maximaal 2 jaar</li>
                <li><strong>Facebook Pixel:</strong> Maximaal 180 dagen</li>
                <li><strong>Google Ads cookies:</strong> Variërend van 30 dagen tot 2 jaar</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Wijzigingen in dit cookiebeleid</h2>
              <p className="text-gray-700 mb-6">
                Wij kunnen dit cookiebeleid van tijd tot tijd wijzigen. De meest actuele versie 
                vindt u altijd op deze pagina. Belangrijke wijzigingen zullen we duidelijk communiceren.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Meer informatie</h2>
              <p className="text-gray-700 mb-4">
                Voor meer informatie over cookies kunt u terecht bij:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><a href="https://www.consumentenbond.nl/internet-privacy/cookies" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Consumentenbond over cookies</a></li>
                <li><a href="https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/internet-telefoon-tv-en-post/cookies" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Autoriteit Persoonsgegevens</a></li>
                <li><a href="https://www.facebook.com/business/help/471978536642445" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Facebook Pixel informatie</a></li>
                <li><a href="https://support.google.com/google-ads/answer/2407785" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Google Ads cookies</a></li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Uw rechten en keuzes</h3>
                <p className="text-gray-700 mb-4">
                  U heeft het recht om:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Uw toestemming voor cookies en tracking op elk moment in te trekken</li>
                  <li>Bezwaar te maken tegen de verwerking van uw gegevens voor direct marketing</li>
                  <li>Uw browser zo in te stellen dat deze cookies weigert of u waarschuwt wanneer cookies worden verzonden</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Let op: het uitschakelen van cookies kan de functionaliteit van onze website en diensten beïnvloeden.
                </p>
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-slate-900 mb-4">Vragen over cookies?</h3>
                <p className="text-gray-700 mb-4">
                  Heeft u vragen over ons cookiebeleid? Neem gerust contact met ons op:
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePage;
import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20 pt-32 lg:pt-48">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-brand-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Algemene Voorwaarden</h1>
              <p className="text-gray-600 text-lg">
                Algemene voorwaarden van Compleet Dakonderhoud Nederland
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 1 - Definities</h2>
              <p className="text-gray-700 mb-6">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Aannemer:</strong> Compleet Dakonderhoud Nederland, gevestigd te Geurdeland 17G, 6673 DR Andelst, KvK: 94106819</li>
                <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die een opdracht verstrekt aan de aannemer</li>
                <li><strong>Overeenkomst:</strong> De tussen aannemer en opdrachtgever gesloten overeenkomst</li>
                <li><strong>Werk:</strong> Alle door de aannemer te verrichten werkzaamheden</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 2 - Toepasselijkheid</h2>
              <p className="text-gray-700 mb-6">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en 
                overeenkomsten tussen de aannemer en opdrachtgever, tenzij schriftelijk anders is overeengekomen.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 3 - Offertes en prijzen</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Alle offertes zijn vrijblijvend en geldig voor 30 dagen</li>
                <li>Prijzen zijn exclusief BTW, tenzij anders vermeld</li>
                <li>Meerwerk wordt apart gefactureerd tegen geldende tarieven</li>
                <li>Prijswijzigingen van materialen kunnen worden doorberekend</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 4 - Totstandkoming overeenkomst</h2>
              <p className="text-gray-700 mb-6">
                De overeenkomst komt tot stand door schriftelijke acceptatie van de offerte door 
                opdrachtgever of door aanvang van de werkzaamheden door aannemer.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 5 - Uitvoering van het werk</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Aannemer voert het werk uit conform de geldende normen en vakregels</li>
                <li>Opdrachtgever zorgt voor toegang tot de werklocatie</li>
                <li>Wijzigingen in het werk worden schriftelijk vastgelegd</li>
                <li>Aannemer heeft het recht werkzaamheden te staken bij weersinvloeden</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 6 - Levertijd</h2>
              <p className="text-gray-700 mb-6">
                Opgegeven levertijden zijn indicatief. Overschrijding van levertijden geeft 
                opdrachtgever geen recht op schadevergoeding of ontbinding van de overeenkomst.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 7 - Betaling</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Betaling dient te geschieden binnen 30 dagen na factuurdatum</li>
                <li>Aannemer kan vooruitbetaling of zekerheid verlangen</li>
                <li>Bij niet-betaling kan aannemer de werkzaamheden opschorten</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 8 - Eigendomsvoorbehoud</h2>
              <p className="text-gray-700 mb-6">
                Geleverde materialen blijven eigendom van aannemer tot volledige betaling heeft plaatsgevonden.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 9 - Garantie</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Aannemer geeft garantie conform wettelijke bepalingen en branchenormen</li>
                <li>Garantie geldt niet voor normale slijtage en verkeerd gebruik</li>
                <li>Garantieclaims dienen schriftelijk te worden gemeld</li>
                <li>Garantie vervalt bij werkzaamheden door derden zonder toestemming</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 10 - Aansprakelijkheid</h2>
              <p className="text-gray-700 mb-6">
                De aansprakelijkheid van aannemer is beperkt tot het factuurbedrag van de betreffende 
                opdracht. Aannemer is niet aansprakelijk voor indirecte schade.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 11 - Overmacht</h2>
              <p className="text-gray-700 mb-6">
                Bij overmacht is aannemer gerechtigd de overeenkomst op te schorten of te ontbinden 
                zonder schadevergoeding.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 12 - Geschillen</h2>
              <p className="text-gray-700 mb-6">
                Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden 
                voorgelegd aan de bevoegde rechter in het arrondissement waar aannemer is gevestigd.
              </p>

              <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-slate-900 mb-4">Contact</h3>
                <p className="text-gray-700 mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-brand-600" />
                    <span>Geurdeland 17G, 6673 DR Andelst</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-600" />
                    <a href="tel:0488234625" className="text-brand-600 hover:text-brand-700">
                      0488 234 625
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-600" />
                    <a href="mailto:info@compleetdakonderhoudnederland.nl" className="text-brand-600 hover:text-brand-700">
                      info@compleetdakonderhoudnederland.nl
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-brand-600 font-bold">KvK:</span>
                    <span>94106819</span>
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

export default TermsPage;
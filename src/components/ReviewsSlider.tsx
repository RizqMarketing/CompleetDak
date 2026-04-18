import React from 'react';
import { Star, Quote } from 'lucide-react';

type Review = {
  name: string;
  time: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: 'Lotte Van Heeswijk',
    time: '3 dagen geleden',
    text: 'Van tevoren duidelijke prijs afgesproken en daar bleef het ook bij. Geen verrassingen achteraf, dat is tegenwoordig zeldzaam.',
  },
  {
    name: 'Elise De Groot',
    time: '3 dagen geleden',
    text: 'Ik twijfelde eerst, maar ben blij dat ik voor hen heb gekozen. Ze kwamen rustig alles bekijken en gaven duidelijk advies zonder druk. Heel prettig.',
  },
  {
    name: 'Daan Van Rijn',
    time: '4 dagen geleden',
    text: 'Ik had een hardnekkig probleem met mijn dak, maar zij hebben het perfect opgelost. Sindsdien geen last meer gehad. Echt vakwerk!',
  },
  {
    name: 'Marit Van Hoorn',
    time: '4 dagen geleden',
    text: 'Het team werkte snel en efficiënt. Binnen korte tijd was alles geregeld en netjes afgewerkt. Mijn complimenten!',
  },
  {
    name: 'Lars van der Meer',
    time: '5 dagen geleden',
    text: 'Goede communicatie vanaf het begin tot het einde. Ze reageren snel en houden zich aan afspraken. Het werk is netjes uitgevoerd en ziet er strak uit. Zeker 5 sterren waard.',
  },
  {
    name: 'Sophie de Vries',
    time: '5 dagen geleden',
    text: 'Ik ben echt tevreden over Compleet Dakonderhoud Nederland. Ze kwamen op tijd en werkten rustig en netjes door. Alles werd goed uitgelegd en je merkt dat ze ervaring hebben. Zeker een bedrijf dat ik opnieuw zou bellen.',
  },
  {
    name: 'Emma Janssen',
    time: '5 dagen geleden',
    text: 'Ze kwamen langs voor een kleine reparatie maar hebben ook meteen even alles gecontroleerd. Dat extra stukje service waardeer ik echt.',
  },
  {
    name: 'Noor Bakker',
    time: '5 dagen geleden',
    text: 'Contact liep heel makkelijk via telefoon en WhatsApp. Reageren snel en komen afspraken na. Werk zelf ook gewoon netjes gedaan.',
  },
  {
    name: 'Mila de Boer',
    time: '5 dagen geleden',
    text: 'Fijn bedrijf om mee samen te werken. Alles werd duidelijk uitgelegd en goed uitgevoerd. Zeker voor herhaling vatbaar.',
  },
  {
    name: 'Finn Mulder',
    time: '5 dagen geleden',
    text: 'Ik kan dit bedrijf zeker aanbevelen. Goede service, duidelijke afspraken en mooi eindresultaat.',
  },
  {
    name: 'Leon Fischer',
    time: 'een week geleden',
    text: 'Had een klein probleem met de dakgoot en dat is snel en vakkundig opgelost. Ze waren flexibel met de planning, wat erg handig was.',
  },
  {
    name: 'Emil Wagner',
    time: 'een week geleden',
    text: 'Wat mij vooral opviel is hoe zorgvuldig ze te werk gaan. Alles werd stap voor stap uitgelegd en er werd echt meegedacht. Dat geeft vertrouwen.',
  },
  {
    name: 'Lukas Schneider',
    time: 'een week geleden',
    text: 'Netjes werk geleverd en duidelijke communicatie vooraf. De dakinspectie werd goed uitgelegd en ik wist precies waar ik aan toe was. Tevreden met het resultaat.',
  },
  {
    name: 'James Carter',
    time: 'een week geleden',
    text: 'Wat mij opviel is hoe vriendelijk en professioneel ze zijn. Ze namen echt de tijd om mijn vragen te beantwoorden. Mijn dak ziet er weer top uit!',
  },
  {
    name: 'William Smith',
    time: 'een week geleden',
    text: 'Heel netjes gewerkt! Zelfs de buren vroegen welk bedrijf dit was, zo strak zag het eruit. Dakgoot gereinigd en kleine reparaties uitgevoerd, alles perfect gedaan.',
  },
  {
    name: 'Henry Walker',
    time: 'een week geleden',
    text: 'Ik was al een tijdje op zoek naar een betrouwbaar bedrijf voor dakinspectie en kwam bij hen uit. Geen verkooppraatjes, maar gewoon eerlijk advies. Dat zie je tegenwoordig niet vaak meer.',
  },
  {
    name: 'Jorrit van Houtem',
    time: 'een week geleden',
    text: 'Onlangs mijn dak laten controleren door Compleet Dakonderhoud Nederland en ik ben erg tevreden. Ze kwamen op tijd, namen rustig de tijd om alles uit te leggen en hebben kleine gebreken meteen opgelost. Fijn om met zo\u2019n betrouwbaar bedrijf te werken.',
  },
  {
    name: 'Sjoerd De Vries',
    time: '3 weken geleden',
    text: 'Kleine reparatie laten doen maar ze namen het serieus alsof het groot werk was. Alles netjes gecontroleerd en extra tips gekregen voor onderhoud. Heel klantvriendelijk en professioneel. Ik bel ze zeker weer bij een volgende klus.',
  },
  {
    name: 'Momo Yattassaye',
    time: '4 weken geleden',
    text: 'Compleet Dakonderhoud Nederland heeft bij ons een uitgebreide dakinspectie uitgevoerd en direct een paar kleine gebreken opgelost. Vanaf het eerste telefonische contact tot en met de afronding verliep alles ontzettend netjes en duidelijk.',
  },
  {
    name: 'Anne van Dijk',
    time: '2 maanden geleden',
    text: 'Na meerdere offertes gekozen voor Compleet Dakonderhoud Nederland en daar geen moment spijt van gehad. Ze werken snel, secuur en komen hun afspraken na. Topservice!',
  },
  {
    name: 'Elnaz Rahimi',
    time: '2 maanden geleden',
    text: 'Compleet Dakonderhoud Nederland heeft ons dak grondig geïnspecteerd en onderhouden. Alles werd duidelijk uitgelegd en de prijs was eerlijk. Werken netjes en laten alles schoon achter.',
  },
  {
    name: 'Marleen Dera',
    time: '2 maanden geleden',
    text: 'Ik ben zeer tevreden over het onderhoud aan mijn dak. Ze denken mee, geven eerlijk advies en leveren vakwerk. De prijs-kwaliteitverhouding is uitstekend.',
  },
  {
    name: 'Cathy Hanning',
    time: '3 maanden geleden',
    text: 'Goede ervaring met Compleet Dakonderhoud Nederland. Lekkage snel opgespoord en vakkundig opgelost. Was het 3e bedrijf wat kwam; 2 anderen konden de lekkage niet vinden. Inmiddels al flinke buien gehad en het blijft droog! Een echte aanrader.',
  },
  {
    name: 'Lioren van Aelst',
    time: '2 maanden geleden',
    text: 'Zorgvuldig gewerkt en eerlijk advies gekregen. Geen verkooppraatjes, alleen wat echt nodig was.',
  },
  {
    name: 'Remko Menkehorst',
    time: '4 maanden geleden',
    text: 'Top gasten die zeer perfectionistisch te werk gaan! Zeker aan te raden!',
  },
  {
    name: 'Marco Doesburg',
    time: '4 maanden geleden',
    text: 'Snelle service, goed advies en goede afwerking.',
  },
  {
    name: 'Stefan Koster',
    time: '4 maanden geleden',
    text: 'Professioneel en klantgericht. Je merkt meteen dat ze veel ervaring hebben. Wij schakelen ze zeker weer in de toekomst in.',
  },
  {
    name: 'DN B',
    time: '4 maanden geleden',
    text: 'Bedrijf en personeel die wel weten van aanpakken.',
  },
  {
    name: 'Youri',
    time: '6 maanden geleden',
    text: 'Zeer professioneel en uitstekende communicatie.',
  },
  {
    name: 'Bram Hofman',
    time: '8 maanden geleden',
    text: 'Na de storm was mijn dak binnen één dag weer als nieuw, vakmanschap en snelheid in één.',
  },
  {
    name: 'Edward Kort',
    time: '8 maanden geleden',
    text: 'Goed geholpen, fijne mensen, Nico, Frank en Maarten. Duidelijke afspraken gemaakt, goed werk afgeleverd. Heel tevreden met het resultaat.',
  },
  {
    name: 'Md Sakib',
    time: '11 maanden geleden',
    text: 'Uitstekende service, mijn dak ziet er weer als nieuw uit en alles netjes opgeruimd.',
  },
  {
    name: 'Nur Muhammad Sweet',
    time: '11 maanden geleden',
    text: 'Betrouwbaar bedrijf dat zijn afspraken nakomt, echt een aanrader.',
  },
  {
    name: 'Ben Schaafsma',
    time: 'een jaar geleden',
    text: 'Vanwege lekkage bij de kachelpijp op het dak was reparatie nodig. Nu bij Compleet Dakonderhoud Nederland is het goed aangepakt en met tien jaar garantie heb ik er alle vertrouwen in dat ik van de lekkage verlost ben.',
  },
  {
    name: 'Roy Latuputty',
    time: 'een jaar geleden',
    text: 'Ons dak is op prima wijze gerepareerd door de heren van Compleet Dakonderhoud Nederland. Goede uitleg vooraf en de afspraken werden nagekomen. Dank Nico en Maarten voor het fijne contact en de goede service. Jullie zijn toppers!',
  },
  {
    name: 'Wilma Jongkind',
    time: 'een jaar geleden',
    text: 'We zijn zeer tevreden over de werkzaamheden die Compleet Dakonderhoud Nederland heeft uitgevoerd. De lekkage bij de schoorstenen is verholpen. Zij hebben de schoorstenen opnieuw gevoegd en het lood is op de juiste manier aangebracht.',
  },
  {
    name: 'Jim Fransen',
    time: 'een jaar geleden',
    text: 'Heb door de heren mijn rookkanaal laten vervangen voor de mogelijkheid tot houtstook. Ze hebben een stukje vakwerk afgeleverd wat ik nog niet eerder meegemaakt heb! Netjes een offerte van tevoren en alles snel geregeld!',
  },
  {
    name: 'Bertrin Roukema',
    time: 'een jaar geleden',
    text: 'Heel tevreden zijn wij over de werkzaamheden van Nico. Goed overleg over wat in ons geval de beste oplossing was voor ons dak. Heldere en goede communicatie over de planning en goede uitvoering. Een ervaren vakman die weet waar hij over praat.',
  },
  {
    name: 'Sybe de Vos',
    time: 'een jaar geleden',
    text: 'Na een tijdlang lekkageproblemen met ons dak proberen opgelost te krijgen met andere bedrijven, nu geholpen door Compleet Dakonderhoud. Tot nu toe goede ervaring en goed werk geleverd.',
  },
  {
    name: 'JA J',
    time: 'een jaar geleden',
    text: 'Prima ervaring. Plannen mag wat extra aandacht, maar het uitvoeren van werkzaamheden is prima. Communiceert goed, redeneert vanuit de klant en zorgt bij onverwachte uitdagingen voor een goede oplossing. Een bedrijf om zaken mee te doen.',
  },
  {
    name: 'Benny Kolschen',
    time: 'een jaar geleden',
    text: 'Heb mijn dak laten doen door dit bedrijf. Vakkundig gedaan en erg tevreden. Heb nu een compleet nieuw dak met mooie kantpannen! Bedankt en erg tevreden.',
  },
  {
    name: 'Conny van den Berg',
    time: 'een jaar geleden',
    text: 'Goede service, meedenkend, netjes, vriendelijke man, zeer zeker aanbevolen. Echt top!',
  },
  {
    name: 'Jan Kunenborg',
    time: 'een jaar geleden',
    text: 'Keurig gemaakt in korte tijd.',
  },
  {
    name: 'Henk Baan',
    time: 'een jaar geleden',
    text: 'Goede offerte vooraf en na akkoord goed en degelijk werk geleverd en zeer capabele mensen die echt naar je luisteren en vlot gerepareerd.',
  },
  {
    name: 'Finn Tensen',
    time: 'een jaar geleden',
    text: 'Super goede ervaring met Compleet Dakonderhoud Nederland. Dankjewel Nico voor de geweldige samenwerking. Zeker een aanrader!',
  },
  {
    name: 'Frank Reitsma',
    time: 'een jaar geleden',
    text: 'Snelle reactie, afspraken nagekomen en goed werk geleverd! Aanrader!',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');

const avatarColors = [
  'from-blue-500 to-blue-600',
  'from-brand-500 to-brand-600',
  'from-emerald-500 to-emerald-600',
  'from-amber-500 to-amber-600',
  'from-rose-500 to-rose-600',
  'from-indigo-500 to-indigo-600',
  'from-teal-500 to-teal-600',
  'from-purple-500 to-purple-600',
];

const ReviewCard: React.FC<{ review: Review; colorIndex: number }> = ({ review, colorIndex }) => (
  <article
    className="relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 mx-3 flex flex-col"
    style={{ minHeight: '260px' }}
  >
    <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

    <div className="flex items-center mb-4">
      <div
        className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[colorIndex % avatarColors.length]} flex items-center justify-center text-white font-semibold text-sm shadow-md`}
      >
        {getInitials(review.name)}
      </div>
      <div className="ml-3">
        <h4 className="text-sm font-semibold text-slate-900 leading-tight">{review.name}</h4>
        <p className="text-xs text-gray-500">{review.time}</p>
      </div>
    </div>

    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
      <span className="ml-2 text-xs text-gray-500 font-medium">Google review</span>
    </div>

    <p className="text-sm text-gray-700 leading-relaxed line-clamp-6">{review.text}</p>
  </article>
);

const ReviewsSlider: React.FC = () => {
  const loop = [...reviews, ...reviews];

  return (
    <div className="reviews-slider relative w-full overflow-hidden py-4">
      <style>{`
        @keyframes reviewsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-track {
          display: flex;
          width: max-content;
          animation: reviewsMarquee 90s linear infinite;
          -webkit-animation: reviewsMarquee 90s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        @media (hover: hover) {
          .reviews-slider:hover .reviews-track {
            animation-play-state: paused;
          }
        }
        @media (max-width: 640px) {
          .reviews-track {
            animation-duration: 60s;
            -webkit-animation-duration: 60s;
          }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))' }}
      />

      <div className="reviews-track">
        {loop.map((review, idx) => (
          <ReviewCard key={`${review.name}-${idx}`} review={review} colorIndex={idx} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;

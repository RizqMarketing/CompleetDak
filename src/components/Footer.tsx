import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, 
  Youtube, Clock, Award, Shield, CheckCircle, ExternalLink, Star, Euro, Timer, FileText 
} from 'lucide-react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Nieuwbouw Woningen", href: "/nieuwbouw-woningen" },
    { name: "Commerciële Bouw", href: "/commerciele-bouw" },
    { name: "Renovatie & Verbouwing", href: "/renovatie-verbouwing" },
    { name: "Projectmanagement", href: "/projectmanagement" },
    { name: "Duurzame Bouw", href: "/duurzame-bouw" },
    { name: "Onderhoud & Reparatie", href: "/onderhoud-reparatie" },
    { name: "Dakwerk & Dakdekken", href: "/dakwerk-dakdekken" },
    { name: "Schilderwerk & Stukadoor", href: "/schilderwerk-stukadoor" },
    { name: "Tegelwerk", href: "/tegelwerk" },
    { name: "Schoorsteenwerk", href: "/schoorsteenwerk" },
    { name: "Aanbouw & Uitbouw", href: "/aanbouw-uitbouw" },
    { name: "Airco's Monteren", href: "/aircos-monteren" },
    { name: "Zonnepanelen", href: "/zonnepanelen" },
    { name: "Nokvorsten", href: "/nokvorsten" },
    { name: "Loodreparaties", href: "/loodreparaties" },
    { name: "Spoed Service", href: "/spoed" },
    { name: "Dakinspectie", href: "/dakinspectie" },
    { name: "Daklekkage", href: "/daklekkage" },
    { name: "Dakgoot Reiniging", href: "/dakgootreiniging" },
    { name: "Gevel Voegen", href: "/gevel-voegen" },
    { name: "Gevel Reinigen", href: "/gevel-reinigen" },
  ];

  const quickLinks = [
    { name: "Over Ons", href: "/#about" },
    { name: "Kostencalculator", href: "/#cost-calculator" },
    { name: "Contact", href: "/#contact" }
  ];

  const certifications = [
    "KvK Geregistreerd (94106819)",
    "Verzekerd & Gebonden",
    "25+ Jaar Ervaring",
    "Kwaliteitsgarantie",
    "Veilig Werken",
    "Milieubewust Bouwen"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  const handleAnchorClick = (href) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (window.location.pathname !== '/') {
        // If not on home page, navigate to home with state to scroll
        navigate('/', { state: { scrollToId: sectionId } });
      } else {
        // If on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Contact Content (if provided) */}
      {children && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      )}
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <div className="w-48 h-40 flex items-center justify-center mb-4">
                <img 
                  src="https://imgur.com/vsRdlGh.png" 
                  alt="Compleet Dakonderhoud Nederland Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Al meer dan 25 jaar uw betrouwbare partner voor hoogwaardig dakonderhoud en 
              dakrenovatieprojecten in Nederland.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div>
                  <a href="tel:0488234625" className="text-gray-300 hover:text-brand-400 transition-colors">
                    0488 234 625
                  </a>
                  <div className="text-xs text-gray-400">24/7 Bereikbaar</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <a href="mailto:info@compleetdakonderhoudnederland.nl" className="text-gray-300 hover:text-brand-400 transition-colors break-words text-sm">
                    info@compleetdakonderhoud<wbr/>nederland.nl
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <div>Geurdeland 17G</div>
                  <div>6673 DR Andelst</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium text-brand-400">24/7 Bereikbaar</div>
                  <div className="text-sm">Voor al uw bouwprojecten</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-slate-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services - First Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Onze Diensten</h4>
            <ul className="space-y-3 mb-8">
              {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-brand-400 transition-colors flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-400" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Extra Services Info */}
            <div className="mt-8 p-4 pb-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <h5 className="font-bold text-blue-400 mb-2 flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Waarom Kiezen Voor Ons?</span>
              </h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ 25+ jaar ervaring</li>
                <li>✓ Vakkundig personeel</li>
              </ul>
            </div>
          </div>

          {/* Services - Second Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Onze Diensten</h4>
            <ul className="space-y-3">
              {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
                <li key={index + Math.ceil(services.length / 2)}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-brand-400 transition-colors flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-400" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Extra spacing to align with right column */}
            <div className="mt-8 mb-16"></div>
            
            {/* Emergency Contact moved here - positioned to align with blue box */}
            <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg">
              <h5 className="font-bold text-red-400 mb-2">24/7 Spoedservice</h5>
              <p className="text-gray-300 text-sm mb-2">Voor urgente zaken</p>
              <a 
                href="tel:0488234625" 
                className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                0488 234 625
              </a>
            </div>
          </div>

          {/* Certifications & Trust */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kwaliteit & Vertrouwen</h4>
            <ul className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </li>
              ))}
            </ul>

            {/* Professional Certifications */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-green-400">
                <Euro className="w-4 h-4" />
                <span className="text-sm font-medium">Scherpe Prijzen</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Binnen 3 Uur Op Locatie</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Gratis Offertes</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
                <Shield className="w-6 h-6 text-green-400" />
                <div>
                  <div className="text-sm font-semibold">100% Verzekerd</div>
                  <div className="text-xs text-gray-400">Volledig gedekt</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
                <Award className="w-6 h-6 text-brand-400" />
                <div>
                  <div className="text-sm font-semibold">Kwaliteitsgarantie</div>
                  <div className="text-xs text-gray-400">Op al ons werk</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
                <Clock className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-sm font-semibold">24/7 Bereikbaar</div>
                  <div className="text-xs text-gray-400">Altijd voor u klaar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Compleet Dakonderhoud Nederland. Alle rechten voorbehouden. KvK: 94106819
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacybeleid" className="text-gray-400 hover:text-brand-400 transition-colors">
                Privacybeleid
              </Link>
              <Link to="/algemene-voorwaarden" className="text-gray-400 hover:text-brand-400 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link to="/cookiebeleid" className="text-gray-400 hover:text-brand-400 transition-colors">
                Cookie Beleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
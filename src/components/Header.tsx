import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current page is a legal page or thank you page
  const isLegalPage = ['/privacybeleid', '/algemene-voorwaarden', '/cookiebeleid'].includes(location.pathname);
  const isThankYouPage = location.pathname === '/bedankt';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Over Ons', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const services = [
    { name: 'Zonnepanelen', href: '/zonnepanelen' },
    { name: 'Nieuwbouw Woningen', href: '/nieuwbouw-woningen' },
    { name: 'Commerciële Bouw', href: '/commerciele-bouw' },
    { name: 'Renovatie & Verbouwing', href: '/renovatie-verbouwing' },
    { name: 'Projectmanagement', href: '/projectmanagement' },
    { name: 'Duurzame Bouw', href: '/duurzame-bouw' },
    { name: 'Onderhoud & Reparatie', href: '/onderhoud-reparatie' },
    { name: 'Dakwerk & Dakdekken', href: '/dakwerk-dakdekken' },
    { name: 'Schilderwerk & Stukadoor', href: '/schilderwerk-stukadoor' },
    { name: 'Tegelwerk', href: '/tegelwerk' },
    { name: 'Schoorsteenwerk', href: '/schoorsteenwerk' },
    { name: 'Aanbouw & Uitbouw', href: '/aanbouw-uitbouw' },
    { name: 'Airco\'s Monteren', href: '/aircos-monteren' },
    { name: 'Nokvorsten', href: '/nokvorsten' },
    { name: 'Loodreparaties', href: '/loodreparaties' },
    { name: 'Spoed Service', href: '/spoed' },
    { name: 'Dakinspectie', href: '/dakinspectie' },
    { name: 'Daklekkage', href: '/daklekkage' },
    { name: 'Dakgoot Reiniging', href: '/dakgootreiniging' },
    { name: 'Gevel Voegen', href: '/gevel-voegen' },
    { name: 'Gevel Reinigen', href: '/gevel-reinigen' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    
    // Handle anchor links for home page sections
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
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

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Determine header background class
  const getHeaderClass = () => {
    if (isLegalPage || isThankYouPage) {
      // Always dark background for legal pages and thank you page
      return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl';
    } else {
      // Original behavior for other pages
      return isScrolled ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent';
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getHeaderClass()}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Simplified for mobile */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-20 h-16 sm:w-24 sm:h-20 lg:w-32 lg:h-28 flex items-center justify-center">
                <img 
                  src="https://imgur.com/Ol7kUug.png" 
                  alt="Compleet Dakonderhoud Nederland Logo" 
                  className="w-full h-full object-contain"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
              {/* Only show company name on larger screens */}
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-base sm:text-lg lg:text-xl">Compleet Dakonderhoud Nederland</h1>
                <p className="text-gray-300 text-xs lg:text-sm">
                  Uw specialist in dakonderhoud
                </p>
              </div>
              {/* Hide text on homepage mobile, show on other pages */}
              {!isHomePage && (
                <div className="block sm:hidden">
                  <h1 className="text-white font-bold text-base">Compleet Dak</h1>
                  <p className="text-gray-300 text-xs">Dakspecialist</p>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-white hover:text-brand-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-brand-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center space-x-1 text-white hover:text-brand-400 transition-colors duration-300 font-medium"
                >
                  <span>Diensten</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="font-medium">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Info - Desktop only */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-white">
                <a 
                  href="tel:0488234625"
                  className="flex items-center space-x-2 hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-400" />
                  <div className="text-center">
                    <div className="text-sm font-medium">0488 234 625</div>
                    <div className="text-xs text-gray-300">24/7 Bereikbaar</div>
                  </div>
                </a>
                <a 
                  href="mailto:info@compleetdakonderhoudnederland.nl"
                  className="flex items-center space-x-2 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  <span className="text-sm">info@compleetdakonderhoudnederland.nl</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 top-[80px] z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative bg-white shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            {/* Main Navigation */}
            <div className="space-y-1 mb-6">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-base"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            
            {/* Services Section */}
            <div className="border-t border-gray-200 pt-4">
              <button 
                onClick={toggleMobileServices}
                className="w-full flex items-center justify-between px-4 py-3 text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-base"
              >
                <span>Onze Diensten</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                  isMobileServicesOpen ? 'rotate-90' : ''
                }`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-2 pt-2 space-y-1 max-h-[500px] overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors duration-200 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="space-y-3">
                <a 
                  href="tel:0488234625"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Bel Direct</div>
                    <div className="text-xs text-gray-600">0488 234 625 - 24/7</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@compleetdakonderhoudnederland.nl"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Email Ons</div>
                    <div className="text-xs text-gray-600">info@compleetdakonderhoudnederland.nl</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
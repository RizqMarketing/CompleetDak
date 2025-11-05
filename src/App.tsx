import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType, Location } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkArea from './components/WorkArea';
import About from './components/About';
import Coverage from './components/Coverage';
import NicoContact from './components/NicoContact';
import Testimonials from './components/Testimonials';
import CostCalculator from './components/CostCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FacebookPixelPageView from './components/FacebookPixelPageView';

// Lazy load service landing pages
const NewBuildPage = React.lazy(() => import('./pages/NewBuildPage'));
const CommercialPage = React.lazy(() => import('./pages/CommercialPage'));
const RenovationPage = React.lazy(() => import('./pages/RenovationPage'));
const ProjectManagementPage = React.lazy(() => import('./pages/ProjectManagementPage'));
const SustainableBuildingPage = React.lazy(() => import('./pages/SustainableBuildingPage'));
const MaintenancePage = React.lazy(() => import('./pages/MaintenancePage'));

// Lazy load new service pages
const RoofingPage = React.lazy(() => import('./pages/RoofingPage'));
const PaintingPage = React.lazy(() => import('./pages/PaintingPage'));
const TilingPage = React.lazy(() => import('./pages/TilingPage'));
const ChimneyPage = React.lazy(() => import('./pages/ChimneyPage'));
const ChimneyRenovationPage = React.lazy(() => import('./pages/ChimneyRenovationPage'));
const ExtensionPage = React.lazy(() => import('./pages/ExtensionPage'));
const AircoPage = React.lazy(() => import('./pages/AircoPage'));
const SolarPanelPage = React.lazy(() => import('./pages/SolarPanelPage'));

// Lazy load additional service pages
const NokVorstenPage = React.lazy(() => import('./pages/NokVorstenPage'));
const LoodReparatiePage = React.lazy(() => import('./pages/LoodReparatiePage'));
const SpoedPage = React.lazy(() => import('./pages/SpoedPage'));
const DakInspectiePage = React.lazy(() => import('./pages/DakInspectiePage'));
const DakLekkagePage = React.lazy(() => import('./pages/DakLekkagePage'));
const DakgootReinigingPage = React.lazy(() => import('./pages/DakgootReinigingPage'));
const GevelVoegenPage = React.lazy(() => import('./pages/GevelVoegenPage'));
const GevelReinigenPage = React.lazy(() => import('./pages/GevelReinigenPage'));

// Lazy load legal pages
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const CookiePage = React.lazy(() => import('./pages/CookiePage'));

// Lazy load thank you page
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Pagina laden...</p>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page load error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Oeps! Er ging iets mis</h2>
            <p className="text-gray-600 mb-6">De pagina kon niet geladen worden.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ga naar homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Home Page Component with scroll handling
const HomePage = () => {
  const location = useLocation();
  
  // Track page views with Facebook Pixel
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    // Check if we have a section to scroll to from navigation
    if (location.state && location.state.scrollToId) {
      const sectionId = location.state.scrollToId;
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <NicoContact />
      <Coverage />
      <Testimonials />
      <CostCalculator />
      <Footer>
        <Contact standalone={false} />
      </Footer>
    </div>
  );
};

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <FacebookPixelPageView />
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nieuwbouw-woningen" element={<NewBuildPage />} />
                <Route path="/commerciele-bouw" element={<CommercialPage />} />
                <Route path="/renovatie-verbouwing" element={<RenovationPage />} />
                <Route path="/projectmanagement" element={<ProjectManagementPage />} />
                <Route path="/duurzame-bouw" element={<SustainableBuildingPage />} />
                <Route path="/onderhoud-reparatie" element={<MaintenancePage />} />
                
                {/* New Service Routes */}
                <Route path="/dakwerk-dakdekken" element={<RoofingPage />} />
                <Route path="/schilderwerk-stukadoor" element={<PaintingPage />} />
                <Route path="/tegelwerk" element={<TilingPage />} />
                <Route path="/schoorsteen-verwijderen" element={<ChimneyPage />} />
                <Route path="/schoorsteen-renovatie" element={<ChimneyRenovationPage />} />
                <Route path="/aanbouw-uitbouw" element={<ExtensionPage />} />
                <Route path="/aircos-monteren" element={<AircoPage />} />
                <Route path="/zonnepanelen" element={<SolarPanelPage />} />
                
                {/* Additional Service Routes */}
                <Route path="/nokvorsten" element={<NokVorstenPage />} />
                <Route path="/loodreparaties" element={<LoodReparatiePage />} />
                <Route path="/spoed" element={<SpoedPage />} />
                <Route path="/dakinspectie" element={<DakInspectiePage />} />
                <Route path="/daklekkage" element={<DakLekkagePage />} />
                <Route path="/dakgootreiniging" element={<DakgootReinigingPage />} />
                <Route path="/gevel-voegen" element={<GevelVoegenPage />} />
                <Route path="/gevel-reinigen" element={<GevelReinigenPage />} />
                
                {/* Legal Pages */}
                <Route path="/privacybeleid" element={<PrivacyPage />} />
                <Route path="/algemene-voorwaarden" element={<TermsPage />} />
                <Route path="/cookiebeleid" element={<CookiePage />} />
                
                {/* Thank You Page */}
                <Route path="/bedankt" element={<ThankYouPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
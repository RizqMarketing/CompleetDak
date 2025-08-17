import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType, Location } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
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
const ExtensionPage = React.lazy(() => import('./pages/ExtensionPage'));
const AircoPage = React.lazy(() => import('./pages/AircoPage'));
const SolarPanelPage = React.lazy(() => import('./pages/SolarPanelPage'));

// Lazy load legal pages
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const CookiePage = React.lazy(() => import('./pages/CookiePage'));

// Lazy load thank you page
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

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
      <Testimonials />
      <CostCalculator />
      <Contact />
      <Footer />
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
              <Route path="/schoorsteenwerk" element={<ChimneyPage />} />
              <Route path="/aanbouw-uitbouw" element={<ExtensionPage />} />
              <Route path="/aircos-monteren" element={<AircoPage />} />
              <Route path="/zonnepanelen" element={<SolarPanelPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacybeleid" element={<PrivacyPage />} />
              <Route path="/algemene-voorwaarden" element={<TermsPage />} />
              <Route path="/cookiebeleid" element={<CookiePage />} />
              
              {/* Thank You Page */}
              <Route path="/bedankt" element={<ThankYouPage />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
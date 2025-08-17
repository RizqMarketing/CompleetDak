import React, { useEffect } from 'react';
import { useLocation, useNavigationType, Location } from 'react-router-dom';

// Facebook Pixel page view tracking component
const FacebookPixelPageView = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    // Only track page views on actual navigation (not initial load which is handled in main.tsx)
    if (navigationType !== 'POP' && window.fbq) {
      // Track with explicit URL parameter
      window.fbq('track', 'PageView', {
        page_title: document.title,
        page_location: 'https://aannemersbedrijf-emt.nl' + location.pathname,
        page_path: location.pathname,
      });
    }
  }, [location, navigationType]);
  
  return null;
};

export default FacebookPixelPageView;
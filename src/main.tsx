import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import emailjs from '@emailjs/browser';

// Initialize Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

// Facebook Pixel initialization
if (typeof window !== 'undefined') {
  window.fbq = window.fbq || function() {
    (window.fbq.q = window.fbq.q || []).push(arguments); 
  };
  window._fbq = window._fbq || window.fbq;
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = '2.0';
  window.fbq.queue = [];
  
  // Initialize the pixel
  window.fbq('init', '1295475249253352', {
    external_id: 'aannemersbedrijf-emt.nl'
  });
  window.fbq('track', 'PageView');
  
  // Load the Facebook pixel script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
}

// Set base URL for Meta Pixel
if (typeof window !== 'undefined' && window.fbq) {
  window.fbq('set', 'autoConfig', false, '1295475249253352');
  window.fbq('set', 'agent', 'aannemersbedrijf-emt.nl', '1295475249253352');
}

// Initialize EmailJS with your public key
emailjs.init("SBdgnq76XT_rWqM9I");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
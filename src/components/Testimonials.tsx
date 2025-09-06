import React, { useState } from 'react';
import { Users, Shield, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  // Mock data for navigation (we'll control via iframe later)
  const totalReviews = 5; // Adjust based on actual number of reviews
  
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % totalReviews);
  };
  
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-brand-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Wat Onze <span className="bg-gradient-to-r from-blue-400 to-brand-400 bg-clip-text text-transparent">Klanten</span> Zeggen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Al meer dan 25 jaar zorgen wij voor vakkundig dakwerk. Onze klanten waarderen onze 
            betrouwbaarheid, kwaliteit en persoonlijke service.
          </p>
        </div>
        
        {/* Enhanced Widget Container */}
        <div className="relative w-full max-w-none mx-auto">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-2xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-slate-700/30 rounded-2xl transform -rotate-1"></div>
          
          {/* Main container */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mx-4">
            {/* Top accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-400 rounded-b-full"></div>
            
            {/* Mobile Navigation Arrows - Only visible on mobile */}
            <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
              <button 
                onClick={prevReview}
                className="ml-2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 pointer-events-auto"
                aria-label="Vorige review"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button 
                onClick={nextReview}
                className="mr-2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 pointer-events-auto"
                aria-label="Volgende review"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Widget */}
            <div 
              className="overflow-hidden rounded-xl group"
              style={{ 
                minHeight: '300px',
                paddingBottom: '10px'
              }}
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    .lc_reviews_widget {
                      transition: all 0.3s ease !important;
                    }
                    /* Pause auto-scroll on hover */
                    .group:hover .lc_reviews_widget {
                      animation-play-state: paused !important;
                    }
                    /* Force single review display on mobile */
                    @media screen and (max-width: 768px) {
                      .lc_reviews_widget iframe {
                        height: 300px !important;
                        max-height: 300px !important;
                        overflow: hidden !important;
                        border-radius: 12px !important;
                      }
                      .lc_reviews_widget * {
                        overflow: hidden !important;
                      }
                      /* Hide pagination and multi-review elements */
                      .lc_reviews_widget .pagination,
                      .lc_reviews_widget .page-nav,
                      .lc_reviews_widget .next,
                      .lc_reviews_widget .prev,
                      .lc_reviews_widget .navigation,
                      .lc_reviews_widget .nav-arrows {
                        display: none !important;
                      }
                      /* Force single column layout */
                      .lc_reviews_widget,
                      .lc_reviews_widget > div,
                      .lc_reviews_widget * {
                        flex-direction: column !important;
                        flex-wrap: nowrap !important;
                      }
                      /* Better single review display */
                      .lc_reviews_widget [class*="review"],
                      .lc_reviews_widget .review,
                      .lc_reviews_widget .review-item {
                        width: 100% !important;
                        max-width: 100% !important;
                        margin: 8px auto !important;
                        padding: 16px !important;
                        border-radius: 8px !important;
                        background: #f8f9fa !important;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
                      }
                      /* Hide multiple reviews - show only current one */
                      .lc_reviews_widget [class*="review"]:nth-child(n+2),
                      .lc_reviews_widget .review:nth-child(n+2),
                      .lc_reviews_widget .review-item:nth-child(n+2) {
                        display: none !important;
                      }
                    }
                    .lc_reviews_widget * {
                      animation-duration: 10s !important; /* Slower auto-scroll */
                    }
                  </style>
                  <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
                  <iframe class='lc_reviews_widget' src='https://reputationhub.site/reputation/widgets/review_widget/bGV3Pxr7SBGEoFWh6kb3' frameborder='0' scrolling='no' style='min-width: 100%; width: 100%; height: 350px; border-radius: 12px; display: block; margin: 0; padding: 0; box-sizing: border-box;'></iframe>
                `
              }}
            />
            
            {/* Mobile Review Indicator - Only visible on mobile */}
            <div className="md:hidden flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalReviews }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentReview 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ga naar review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Clean Trust Footer */}
        <div className="mt-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 text-xs text-gray-400 font-medium tracking-wide">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>VOLLEDIG VERZEKERD</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>GECERTIFICEERD</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>25+ JAAR ERVARING</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
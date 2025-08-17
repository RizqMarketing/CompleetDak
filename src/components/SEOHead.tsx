import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Aannemersbedrijf EMT - Betrouwbare Bouwpartner in Andelst | 25+ Jaar Ervaring",
  description = "Aannemersbedrijf EMT uit Andelst: uw specialist voor nieuwbouw, renovatie, dakwerk en verbouwingen. 25+ jaar ervaring, volledig verzekerd. Gratis offerte!",
  keywords = "aannemer, aannemersbedrijf, bouw, nieuwbouw, renovatie, dakwerk, verbouwing, Andelst, Gelderland, EMT",
  canonicalUrl = "https://aannemersbedrijf-emt.nl/",
  ogImage = "https://aannemersbedrijf-emt.nl/og-image.jpg",
  structuredData
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
import emailjs from '@emailjs/browser';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  stad?: string;
  address?: string;
  provincie?: string;
  budget: string;
  timeline: string;
  service?: string;
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_t4ncsvd';
const EMAILJS_TEMPLATE_ID = 'template_ep9ykkp';
const EMAILJS_PUBLIC_KEY = 'SBdgnq76XT_rWqM9I';

// GoHighLevel configuration
const GOHIGHLEVEL_WEBHOOK_URL = 'YOUR_GOHIGHLEVEL_WEBHOOK_URL_HERE'; // Vervang dit met je echte webhook URL

// Translation mappings for Dutch values
const projectTypeTranslations: { [key: string]: string } = {
  'newbuild': 'Nieuwbouw',
  'renovation': 'Renovatie',
  'extension': 'Uitbouw',
  'commercial': 'Commercieel',
  'office': 'Kantoor',
  'workshop': 'Werkplaats',
  'maintenance': 'Onderhoud',
  'repair': 'Reparatie',
  'emergency': 'Spoedservice',
  'bathroom': 'Badkamer',
  'kitchen': 'Keuken',
  'floor': 'Vloertegels',
  'interior': 'Binnenwerk',
  'exterior': 'Buitenwerk',
  'plastering': 'Stukadoor',
  'pannendak': 'Pannendak',
  'bitumen': 'Bitumen Dak',
  'dakkapel': 'Dakkapel',
  'dormer': 'Dakkapel',
  'addition': 'Aanbouw',
  'split': 'Split-unit',
  'multi': 'Multi-split',
  'heatpump': 'Warmtepomp',
  'solar': 'Zonnepanelen',
  'insulation': 'Isolatie'
};

const budgetTranslations: { [key: string]: string } = {
  '<500': 'Onder €500',
  '500-1k': '€500 - €1.000',
  '1k-2.5k': '€1.000 - €2.500',
  '2.5k-5k': '€2.500 - €5.000',
  '5k+': 'Boven €5.000',
  '<2k': 'Onder €2.000',
  '2k-4k': '€2.000 - €4.000',
  '4k-6k': '€4.000 - €6.000',
  '6k-10k': '€6.000 - €10.000',
  '10k+': 'Boven €10.000',
  '2k-5k': '€2.000 - €5.000',
  '5k-10k': '€5.000 - €10.000',
  '10k-20k': '€10.000 - €20.000',
  '20k+': 'Boven €20.000',
  '<5k': 'Onder €5.000',
  '5k-15k': '€5.000 - €15.000',
  '15k-30k': '€15.000 - €30.000',
  '30k-50k': '€30.000 - €50.000',
  '50k+': 'Boven €50.000',
  '<10k': 'Onder €10.000',
  '10k-25k': '€10.000 - €25.000',
  '25k-50k': '€25.000 - €50.000',
  '50k-75k': '€50.000 - €75.000',
  '75k+': 'Boven €75.000',
  '50k-100k': '€50.000 - €100.000',
  '100k-250k': '€100.000 - €250.000',
  '250k+': 'Boven €250.000',
  '<25k': 'Onder €25.000',
  '100k-250k': '€100.000 - €250.000',
  '250k-500k': '€250.000 - €500.000',
  '500k+': 'Boven €500.000',
  '<50k': 'Onder €50.000',
  '200k-350k': '€200.000 - €350.000',
  '350k-500k': '€350.000 - €500.000',
  '500k-750k': '€500.000 - €750.000',
  '750k+': 'Boven €750.000',
  '<200k': 'Onder €200.000',
  '10k-20k': '€10.000 - €20.000',
  '20k-35k': '€20.000 - €35.000',
  '35k-50k': '€35.000 - €50.000'
};

const timelineTranslations: { [key: string]: string } = {
  'asap': 'Zo snel mogelijk',
  '1week': 'Binnen 1 week',
  '1month': 'Binnen 1 maand',
  '1-3months': '1-3 maanden',
  '3-6months': '3-6 maanden',
  '6-12months': '6-12 maanden',
  '12months+': '12+ maanden',
  'flexible': 'Flexibel'
};

// Send to GoHighLevel webhook
const sendToGoHighLevel = async (formData: FormData): Promise<boolean> => {
  try {
    // Skip if webhook URL not configured
    if (GOHIGHLEVEL_WEBHOOK_URL === 'YOUR_GOHIGHLEVEL_WEBHOOK_URL_HERE') {
      console.log('GoHighLevel webhook niet geconfigureerd');
      return true; // Return true so form still works
    }

    // Translate form values to Dutch for consistency
    const translatedProjectType = projectTypeTranslations[formData.projectType] || formData.projectType;
    const translatedBudget = budgetTranslations[formData.budget] || formData.budget;
    const translatedTimeline = timelineTranslations[formData.timeline] || formData.timeline;

    const ghlData = {
      // Standard GoHighLevel fields
      firstName: formData.name.split(' ')[0] || formData.name,
      lastName: formData.name.split(' ').slice(1).join(' ') || '',
      email: formData.email,
      phone: formData.phone,
      
      // Custom fields - pas deze aan naar je GoHighLevel setup
      stad: formData.stad || '',
      address: formData.address || '',
      provincie: formData.provincie || '',
      projectType: translatedProjectType || '',
      budget: translatedBudget || '',
      timeline: translatedTimeline || '',
      service: formData.service || '',
      message: formData.message,
      
      // Additional metadata
      source: 'Website Contact Form',
      dateSubmitted: new Date().toISOString()
    };

    const response = await fetch(GOHIGHLEVEL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ghlData)
    });

    return response.ok;
  } catch (error) {
    console.error('GoHighLevel Webhook Error:', error);
    return false; // Don't fail the whole process if GHL fails
  }
};

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  try {
    // Translate form values to Dutch
    const translatedProjectType = projectTypeTranslations[formData.projectType] || formData.projectType;
    const translatedBudget = budgetTranslations[formData.budget] || formData.budget;
    const translatedTimeline = timelineTranslations[formData.timeline] || formData.timeline;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      preferred_contact: 'Email', // Default since we removed this field
      stad: formData.stad || 'Niet opgegeven',
      address: formData.address || 'Niet opgegeven',
      provincie: formData.provincie || 'Niet opgegeven',
      project_type: formData.projectType ? translatedProjectType : 'Niet gespecificeerd',
      message: formData.message,
      budget: formData.budget ? translatedBudget : 'Niet gespecificeerd',
      timeline: translatedTimeline,
      service: formData.service || 'Algemene aanvraag',
      to_email: 'info@compleetdakonderhoudnederland.nl'
    };

    // Send to both EmailJS and GoHighLevel in parallel
    const [emailResult, ghlResult] = await Promise.allSettled([
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY),
      sendToGoHighLevel(formData)
    ]);

    // Log results for debugging
    console.log('EmailJS Result:', emailResult);
    console.log('GoHighLevel Result:', ghlResult);

    // Return true if EmailJS succeeds (GHL is optional)
    return emailResult.status === 'fulfilled' && emailResult.value.status === 200;
  } catch (error) {
    console.error('Email Service Error:', error);
    return false;
  }
};

// Dummy function for compatibility
export const sendEmailViaAPI = async (formData: FormData): Promise<boolean> => {
  return sendEmail(formData);
};
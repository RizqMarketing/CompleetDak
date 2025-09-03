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
const EMAILJS_SERVICE_ID = 'service_6ict4tl';
const EMAILJS_TEMPLATE_ID = 'template_t9mklse';
const EMAILJS_PUBLIC_KEY = 'SBdgnq76XT_rWqM9I';

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

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

// Dummy function for compatibility
export const sendEmailViaAPI = async (formData: FormData): Promise<boolean> => {
  return sendEmail(formData);
};
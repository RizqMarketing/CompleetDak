import React, { useState, useEffect } from 'react';
import { Calculator, Home, Building2, Wrench, ChevronRight, DollarSign } from 'lucide-react';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    buildingType: '',
    size: '',
    specifications: {
      flooring: '',
      kitchen: '',
      bathroom: '',
      heating: '',
      insulation: ''
    },
    location: '',
    timeline: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [estimate, setEstimate] = useState(null);

  const projectTypes = [
    { id: 'new', label: 'Nieuwbouw', icon: Building2 },
    { id: 'renovation', label: 'Renovatie', icon: Wrench },
    { id: 'extension', label: 'Uitbouw', icon: Home }
  ];

  const buildingTypes = [
    { id: 'house', label: 'Woonhuis', basePrice: 1800 },
    { id: 'apartment', label: 'Appartement', basePrice: 1600 },
    { id: 'commercial', label: 'Commercieel', basePrice: 2200 },
    { id: 'office', label: 'Kantoor', basePrice: 2000 }
  ];

  const specifications = {
    flooring: [
      { id: 'basic', label: 'Standaard (Laminaat)', multiplier: 1.0 },
      { id: 'mid', label: 'Midden (Parket)', multiplier: 1.2 },
      { id: 'high', label: 'Luxe (Natuursteen)', multiplier: 1.5 }
    ],
    kitchen: [
      { id: 'basic', label: 'Standaard', multiplier: 1.0 },
      { id: 'mid', label: 'Midden', multiplier: 1.3 },
      { id: 'high', label: 'Luxe', multiplier: 1.8 }
    ],
    bathroom: [
      { id: 'basic', label: 'Standaard', multiplier: 1.0 },
      { id: 'mid', label: 'Midden', multiplier: 1.25 },
      { id: 'high', label: 'Luxe', multiplier: 1.6 }
    ],
    heating: [
      { id: 'basic', label: 'CV Ketel', multiplier: 1.0 },
      { id: 'mid', label: 'Vloerverwarming', multiplier: 1.15 },
      { id: 'high', label: 'Warmtepomp', multiplier: 1.3 }
    ],
    insulation: [
      { id: 'basic', label: 'Standaard', multiplier: 1.0 },
      { id: 'mid', label: 'Verbeterd', multiplier: 1.1 },
      { id: 'high', label: 'Passief Huis', multiplier: 1.4 }
    ]
  };

  const calculateEstimate = () => {
    if (!formData.projectType || !formData.buildingType || !formData.size) return;

    const buildingType = buildingTypes.find(bt => bt.id === formData.buildingType);
    const basePrice = buildingType.basePrice;
    const size = parseInt(formData.size) || 0;
    
    let multiplier = 1.0;
    
    // Project type adjustment
    if (formData.projectType === 'renovation') multiplier *= 0.8;
    if (formData.projectType === 'extension') multiplier *= 0.9;
    
    // Specifications multipliers
    Object.keys(formData.specifications).forEach(spec => {
      const specValue = formData.specifications[spec];
      if (specValue && specifications[spec]) {
        const specOption = specifications[spec].find(s => s.id === specValue);
        if (specOption) multiplier *= specOption.multiplier;
      }
    });

    const totalEstimate = basePrice * size * multiplier;
    const minEstimate = totalEstimate * 0.85;
    const maxEstimate = totalEstimate * 1.15;

    setEstimate({
      min: Math.round(minEstimate),
      max: Math.round(maxEstimate),
      average: Math.round(totalEstimate)
    });
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleRequestQuote = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cost-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">
            Kostencalculator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Bereken Uw
            <span className="text-yellow-500"> Projectkosten</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Krijg een indicatieve kostenraming voor uw bouwproject met onze geavanceerde calculator.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    step <= currentStep
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Wat voor project heeft u?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleInputChange('projectType', type.id)}
                      className={`p-6 rounded-xl border-2 text-center transition-all duration-300 ${
                        formData.projectType === type.id
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <type.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                      <div className="font-semibold text-slate-900">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Building Type & Size */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Type gebouw en grootte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Type Gebouw
                    </label>
                    <div className="space-y-3">
                      {buildingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleInputChange('buildingType', type.id)}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                            formData.buildingType === type.id
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-semibold text-slate-900">{type.label}</div>
                          <div className="text-sm text-gray-600">vanaf €{type.basePrice}/m²</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Oppervlakte (m²)
                    </label>
                    <input
                      type="number"
                      value={formData.size}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                      placeholder="Bijv. 150"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Specifications */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Specificaties</h3>
                <div className="space-y-6">
                  {Object.keys(specifications).map((specKey) => (
                    <div key={specKey}>
                      <label className="block text-sm font-medium text-gray-700 mb-3 capitalize">
                        {specKey === 'flooring' && 'Vloeren'}
                        {specKey === 'kitchen' && 'Keuken'}
                        {specKey === 'bathroom' && 'Badkamer'}
                        {specKey === 'heating' && 'Verwarming'}
                        {specKey === 'insulation' && 'Isolatie'}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {specifications[specKey].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleInputChange(`specifications.${specKey}`, option.id)}
                            className={`p-4 text-center rounded-lg border-2 transition-all duration-300 ${
                              formData.specifications[specKey] === option.id
                                ? 'border-yellow-500 bg-yellow-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold text-slate-900">{option.label}</div>
                            <div className="text-sm text-gray-600">+{Math.round((option.multiplier - 1) * 100)}%</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Uw Kostenraming</h3>
                {estimate && (
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                      <div className="text-4xl font-bold text-yellow-500 mb-2">
                        €{estimate.min.toLocaleString()} - €{estimate.max.toLocaleString()}
                      </div>
                      <div className="text-gray-600">Indicatieve kostenraming</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">€{estimate.min.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Minimum</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">€{estimate.average.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Gemiddeld</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600 mb-1">€{estimate.max.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Maximum</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-blue-900 mb-2">Belangrijk om te weten:</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Dit is een indicatieve raming gebaseerd op gemiddelde marktprijzen</li>
                        <li>• Werkelijke kosten kunnen variëren door specifieke omstandigheden</li>
                        <li>• Prijzen zijn exclusief BTW en onvoorziene kosten</li>
                        <li>• Voor een exacte offerte nemen wij graag contact met u op</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <button 
                        onClick={handleRequestQuote}
                        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Vraag Exacte Offerte Aan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-slate-900'
                }`}
              >
                Vorige
              </button>
              <button
                onClick={nextStep}
                disabled={currentStep === 4}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  currentStep === 4
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
                }`}
              >
                <span>{currentStep === 4 ? 'Voltooid' : 'Volgende'}</span>
                {currentStep !== 4 && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
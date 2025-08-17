import React, { useState } from 'react';
import { Filter, ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'Alle Projecten' },
    { id: 'residential', label: 'Woningbouw' },
    { id: 'commercial', label: 'Zakelijk' },
    { id: 'renovation', label: 'Renovatie' },
    { id: 'infrastructure', label: 'Infrastructuur' }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxe Villa Amsterdam Zuid",
      category: "residential",
      description: "Moderne villa met duurzame materialen en smart home technologie",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      size: "450m²",
      value: "€2.8M"
    },
    {
      id: 2,
      title: "Kantoorcomplex Zuidas",
      category: "commercial",
      description: "Duurzaam kantoorgebouw met BREEAM Excellent certificering",
      image: "https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      size: "5000m²",
      value: "€15M"
    },
    {
      id: 3,
      title: "Monumentale Renovatie",
      category: "renovation",
      description: "Restauratie van 19e eeuws pand tot moderne woonruimte",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2022",
      size: "300m²",
      value: "€1.2M"
    },
    {
      id: 4,
      title: "Luxe Penthouse",
      category: "residential",
      description: "Exclusief penthouse met panoramisch uitzicht over Amsterdam",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      size: "280m²",
      value: "€1.8M"
    },
    {
      id: 5,
      title: "Retail Complex",
      category: "commercial",
      description: "Modern winkelcentrum met duurzame energie-oplossingen",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2022",
      size: "3200m²",
      value: "€8.5M"
    },
    {
      id: 6,
      title: "Infrastructuur Project",
      category: "infrastructure",
      description: "Vernieuwing van stedelijke infrastructuur en wegenbouw",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      size: "2km",
      value: "€4.2M"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">
            Ons Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Uitgevoerde
            <span className="text-yellow-500"> Projecten</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Ontdek onze selectie van premium bouwprojecten die onze expertise en 
            toewijding aan kwaliteit demonstreren.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.size}</span>
                  <span>{project.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Bekijk Alle Projecten</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Jaar:</span>
                  <span className="ml-2 text-slate-900">{selectedProject.year}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Grootte:</span>
                  <span className="ml-2 text-slate-900">{selectedProject.size}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Waarde:</span>
                  <span className="ml-2 text-slate-900">{selectedProject.value}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
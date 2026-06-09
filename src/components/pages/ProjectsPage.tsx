import { useTranslation } from 'react-i18next';
import { MapPin, Star, Quote } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const ProjectsPage = ({ onNavigate }: ProjectsPageProps) => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.project1'),
      desc: t('projects.project1Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iron%20ore%20mining%20facility%2C%20industrial%20screening%20equipment%2C%20australia%20outback%2C%20heavy%20machinery&image_size=landscape_16_9',
      location: 'Australia',
    },
    {
      id: 2,
      title: t('projects.project2'),
      desc: t('projects.project2Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=limestone%20quarry%20site%2C%20crushing%20equipment%2C%20brazil%2C%20industrial%20mining&image_size=landscape_16_9',
      location: 'Brazil',
    },
    {
      id: 3,
      title: t('projects.project3'),
      desc: t('projects.project3Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20waste%20recycling%20plant%2C%20sorting%20conveyor%2C%20germany%2C%20modern%20facility&image_size=landscape_16_9',
      location: 'Germany',
    },
    {
      id: 4,
      title: t('projects.project4'),
      desc: t('projects.project4Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coal%20processing%20plant%2C%20screening%20equipment%2C%20indonesia%2C%20industrial%20facility&image_size=landscape_16_9',
      location: 'Indonesia',
    },
  ];

  const testimonials = [
    {
      content: t('projects.review1'),
      author: t('projects.review1Author'),
      rating: 5,
    },
    {
      content: t('projects.review2'),
      author: t('projects.review2Author'),
      rating: 5,
    },
    {
      content: t('projects.review3'),
      author: t('projects.review3Author'),
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects across the globe. From mining operations to recycling facilities, we deliver results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg transition-shadow">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{project.location}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{project.desc}</p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{t('projects.learnMore')}</span>
                  <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center">
            {t('projects.clientReview')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Quote className="w-14 h-14 text-primary/20 mb-5" />
                <p className="text-gray-600 mb-5 italic leading-relaxed">{testimonial.content}</p>
                <p className="text-primary font-semibold">{testimonial.author}</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/90 rounded-xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('projects.ctaTitle')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base md:text-lg">
            {t('projects.ctaDesc')}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-secondary text-primary px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
          >
            {t('projects.ctaButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

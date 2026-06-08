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
      image: `${process.env.PUBLIC_URL}/images/projects/Australia.png`,
      location: 'Australia',
    },
    {
      id: 2,
      title: t('projects.project2'),
      desc: t('projects.project2Desc'),
      image: `${process.env.PUBLIC_URL}/images/projects/Brazil.png`,
      location: 'Brazil',
    },
    {
      id: 3,
      title: t('projects.project3'),
      desc: t('projects.project3Desc'),
      image: `${process.env.PUBLIC_URL}/images/projects/Germany.png`,
      location: 'Germany',
    },
    {
      id: 4,
      title: t('projects.project4'),
      desc: t('projects.project4Desc'),
      image: `${process.env.PUBLIC_URL}/images/projects/Indonesia.png`,
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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/9] lg:aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{project.location}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-primary mb-8 text-center">
            {t('projects.clientReview')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-4" />
                <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
                <p className="text-primary font-medium">{testimonial.author}</p>
                <div className="flex justify-center space-x-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help with your screening project needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

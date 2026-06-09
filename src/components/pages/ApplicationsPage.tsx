import { useTranslation } from 'react-i18next';
import { Pickaxe, Mountain, Recycle, ChevronRight } from 'lucide-react';

interface ApplicationsPageProps {
  onNavigate: (page: string) => void;
}

const ApplicationsPage = ({ onNavigate }: ApplicationsPageProps) => {
  const { t } = useTranslation();

  const applications = [
    {
      id: 'mining',
      title: t('applications.mining'),
      desc: t('applications.miningDesc'),
      icon: Pickaxe,
      image: `${process.env.PUBLIC_URL}/images/applications/mining.webp`,
      features: ['Iron ore screening', 'Coal processing', 'Copper mining', 'Gold extraction', 'Mineral classification'],
      stats: { projects: 200, countries: 35, equipment: 500 },
    },
    {
      id: 'quarrying',
      title: t('applications.quarrying'),
      desc: t('applications.quarryingDesc'),
      icon: Mountain,
      image: `${process.env.PUBLIC_URL}/images/applications/quarrying.webp`,
      features: ['Limestone processing', 'Granite screening', 'Sand production', 'Aggregate sizing', 'Stone crushing'],
      stats: { projects: 150, countries: 40, equipment: 380 },
    },
    {
      id: 'recycling',
      title: t('applications.recycling'),
      desc: t('applications.recyclingDesc'),
      icon: Recycle,
      image: `${process.env.PUBLIC_URL}/images/applications/recycling.webp`,
      features: ['Construction waste', 'Plastic recycling', 'Metal separation', 'MSW sorting', 'Compost screening'],
      stats: { projects: 80, countries: 25, equipment: 200 },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('applications.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive screening solutions tailored for various industrial applications worldwide.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="space-y-8">
          {applications.map((app, index) => (
            <div
              key={app.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 0 ? '' : 'flex-row-reverse'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={app.image}
                    alt={app.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                      <app.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{app.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{app.desc}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">Key Applications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {app.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex space-x-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">{app.stats.projects}+</div>
                      <div className="text-gray-500 text-sm">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{app.stats.countries}+</div>
                      <div className="text-gray-500 text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{app.stats.equipment}+</div>
                      <div className="text-gray-500 text-sm">Equipment</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => onNavigate('products')}
                    className="inline-flex items-center space-x-2 text-primary font-medium hover:text-accent transition-colors"
                  >
                    <span>View Products for {app.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('applications.findYourSolution')}
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            {t('applications.findYourSolutionDesc')}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition-colors"
          >
            <span>{t('applications.contactOurExperts')}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;

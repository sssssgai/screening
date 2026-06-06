import { useTranslation } from 'react-i18next';
import { Eye, Rocket, Factory, Globe, Wrench, Headphones, Award, Target, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const { t } = useTranslation();

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '5000+', label: 'Projects Completed' },
    { value: '98%', label: 'Customer Satisfaction' },
  ];

  const sections = [
    {
      icon: Factory,
      title: t('about.factory'),
      desc: t('about.factoryDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20CNC%20machining%20workshop%2C%20industrial%20manufacturing%2C%20precision%20machinery%2C%20professional%20photography&image_size=landscape_4_3',
    },
    {
      icon: Globe,
      title: t('about.global'),
      desc: t('about.globalDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20logistics%20network%2C%20shipping%20containers%2C%20international%20trade%2C%20world%20map%20background&image_size=landscape_4_3',
    },
    {
      icon: Wrench,
      title: t('about.engineering'),
      desc: t('about.engineeringDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CAD%20design%20workstation%2C%20engineering%20office%2C%20blueprints%2C%20professional%20photography&image_size=landscape_4_3',
    },
    {
      icon: Headphones,
      title: t('about.service'),
      desc: t('about.serviceDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=technical%20support%20team%2C%20customer%20service%2C%20professional%20office%2C%20help%20desk&image_size=landscape_4_3',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('about.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about our company, our mission, and our commitment to delivering superior screening solutions worldwide.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative h-80 rounded-lg overflow-hidden mb-12">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20industrial%20factory%20exterior%2C%20manufacturing%20plant%2C%20professional%20architecture%2C%20wide%20angle%20shot&image_size=landscape_16_9"
            alt="Company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Leading Global Provider of Screening Solutions
              </h2>
              <p className="text-white/80">
                For over 25 years, we have been providing innovative screening solutions to mining, quarrying, and recycling industries worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">{t('about.vision')}</h3>
            <p className="text-gray-600">{t('about.visionDesc')}</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">{t('about.mission')}</h3>
            <p className="text-gray-600">{t('about.missionDesc')}</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{section.title}</h3>
                  <p className="text-gray-600">{section.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-12 bg-primary rounded-lg p-8">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-white font-semibold mb-2">Quality Excellence</h4>
              <p className="text-white/70 text-sm">Delivering products that meet the highest standards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-white font-semibold mb-2">Customer Focus</h4>
              <p className="text-white/70 text-sm">Understanding and exceeding customer expectations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-white font-semibold mb-2">Teamwork</h4>
              <p className="text-white/70 text-sm">Collaborating to achieve shared goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-white font-semibold mb-2">Innovation</h4>
              <p className="text-white/70 text-sm">Continuously improving through innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

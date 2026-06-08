import { useTranslation } from 'react-i18next';
import { ChevronRight, Factory, Globe, Wrench, Headphones, Award, Zap, Shield, Cog, Truck, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t, i18n } = useTranslation();

  const productHighlights = [
    {
      name: t('products.wovenWireMesh'),
      desc: t('products.wovenWireMeshDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20woven%20wire%20mesh%20for%20industrial%20screening%2C%20steel%20wire%20grid%2C%20dark%20background%2C%20professional%20product%20photo&image_size=portrait_4_3',
    },
    {
      name: t('products.polyurethanePanels'),
      desc: t('products.polyurethanePanelsDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=polyurethane%20screen%20panels%20for%20mining%2C%20industrial%20equipment%2C%20orange%20and%20black%20colors%2C%20professional%20product%20photo&image_size=portrait_4_3',
    },
    {
      name: t('products.rubberScreens'),
      desc: t('products.rubberScreensDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rubber%20screen%20panels%20for%20heavy%20machinery%2C%20industrial%20vibrating%20screen%2C%20dark%20rubber%20material%2C%20professional%20product%20photo&image_size=portrait_4_3',
    },
    {
      name: t('products.perforatedPlates'),
      desc: t('products.perforatedPlatesDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=perforated%20steel%20plates%20with%20precision%20holes%2C%20industrial%20metal%20sheet%2C%20silver%20color%2C%20professional%20product%20photo&image_size=portrait_4_3',
    },
    {
      name: t('products.vibratingScreens'),
      desc: t('products.vibratingScreensDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20vibrating%20screen%20machine%2C%20heavy%20duty%20mining%20equipment%2C%20steel%20structure%2C%20professional%20photo&image_size=portrait_4_3',
    },
  ];

  const features = [
    {
      icon: Factory,
      title: t('home.factory'),
      desc: t('home.factoryDesc'),
    },
    {
      icon: Globe,
      title: t('home.globalExport'),
      desc: t('home.globalExportDesc'),
    },
    {
      icon: Wrench,
      title: t('home.engineering'),
      desc: t('home.engineeringDesc'),
    },
    {
      icon: Headphones,
      title: t('home.service'),
      desc: t('home.serviceDesc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: t('home.experience'),
      desc: t('home.experienceDesc'),
    },
    {
      icon: Zap,
      title: t('home.advancedTech'),
      desc: t('home.advancedTechDesc'),
    },
    {
      icon: Shield,
      title: t('home.qualityControl'),
      desc: t('home.qualityControlDesc'),
    },
    {
      icon: Cog,
      title: t('home.customized'),
      desc: t('home.customizedDesc'),
    },
    {
      icon: Truck,
      title: t('home.delivery'),
      desc: t('home.deliveryDesc'),
    },
    {
      icon: Users,
      title: t('home.support'),
      desc: t('home.supportDesc'),
    },
  ];

  const projects = [
    {
      title: t('projects.project1'),
      desc: t('projects.project1Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iron%20ore%20mining%20site%2C%20large%20mining%20equipment%2C%20Australia%20outback%2C%20professional%20photography&image_size=landscape_4_3',
    },
    {
      title: t('projects.project2'),
      desc: t('projects.project2Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=limestone%20quarry%20in%20Brazil%2C%20crushing%20equipment%2C%20industrial%20site%2C%20professional%20photo&image_size=landscape_4_3',
    },
    {
      title: t('projects.project3'),
      desc: t('projects.project3Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20waste%20recycling%20facility%2C%20Germany%2C%20sorting%20equipment%2C%20industrial%20plant&image_size=landscape_4_3',
    },
    {
      title: t('projects.project4'),
      desc: t('projects.project4Desc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coal%20processing%20plant%2C%20Indonesia%2C%20industrial%20facility%2C%20screening%20equipment&image_size=landscape_4_3',
    },
  ];

  const clientReviews = [
    {
      quote: t('projects.review1'),
      author: t('projects.review1Author'),
      rating: 5,
    },
    {
      quote: t('projects.review2'),
      author: t('projects.review2Author'),
      rating: 5,
    },
    {
      quote: t('projects.review3'),
      author: t('projects.review3Author'),
      rating: 5,
    },
  ];

  const projectsSectionDesc = i18n.language === 'en' 
    ? 'Trusted by leading companies worldwide for their most critical screening applications'
    : '受到全球领先企业的信赖，为其提供关键的筛分应用解决方案';

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative h-screen bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20mining%20screening%20equipment%2C%20heavy%20machinery%20at%20quarry%2C%20dramatic%20sky%2C%20professional%20photography%2C%20wide%20angle&image_size=landscape_16_9"
            alt="Screening Equipment"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
              {t('home.bannerTitle')}
            </h1>
            <p className="text-xl sm:text-2xl text-secondary font-semibold mb-6 animate-fadeInUp delay-100">
              {t('home.bannerSubtitle')}
            </p>
            <p className="text-white/80 text-lg mb-8 animate-fadeInUp delay-200">
              {t('home.bannerDesc')}
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition-colors animate-fadeInUp delay-300"
            >
              <span>{t('home.contactUs')}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('products.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of screening solutions for mining, quarrying, and recycling industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productHighlights.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => onNavigate('products')}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                  <button className="mt-4 text-secondary font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>{t('products.viewDetails')}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {projectsSectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Reviews */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              {t('projects.clientReview')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clientReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.quote}"</p>
                  <p className="text-primary font-semibold text-sm">{review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                {t('home.aboutTitle')}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.aboutDesc')}
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded font-medium hover:bg-accent transition-colors"
              >
                <span>{t('home.learnMore')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-fadeInUp delay-200">
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary/20 rounded-lg" />
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20industrial%20factory%20building%2C%20manufacturing%20plant%2C%20clean%20and%20organized%2C%20professional%20photography%2C%20wide%20angle&image_size=landscape_4_3"
                alt="Factory"
                className="relative rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('home.whyChooseUs')}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover why leading companies trust us for their screening needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ready to Optimize Your Screening Operations?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our experts today to find the perfect screening solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-accent transition-colors"
            >
              <span>{t('home.contactUs')}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <span>{t('products.title')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

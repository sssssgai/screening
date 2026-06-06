import { useTranslation } from 'react-i18next';
import { Layers, PenTool, Ruler, Package, ChevronRight } from 'lucide-react';

interface CustomPageProps {
  onNavigate: (page: string) => void;
}

const CustomPage = ({ onNavigate }: CustomPageProps) => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Package,
      title: t('custom.oem'),
      desc: t('custom.oemDesc'),
      features: ['Brand labeling', 'Custom packaging', 'Product customization', 'Quality assurance', 'Competitive pricing'],
    },
    {
      icon: PenTool,
      title: t('custom.cad'),
      desc: t('custom.cadDesc'),
      features: ['3D modeling', 'Finite element analysis', 'Technical drawing', 'Prototype development', 'Design optimization'],
    },
    {
      icon: Ruler,
      title: t('custom.customization'),
      desc: t('custom.customizationDesc'),
      features: ['Dimension customization', 'Material selection', 'Shape modification', 'Special requirements', 'Performance optimization'],
    },
    {
      icon: Layers,
      title: t('custom.materialOptions'),
      desc: t('custom.materialOptionsDesc'),
      features: ['High carbon steel', 'Stainless steel', 'Polyurethane', 'Natural rubber', 'Special alloys'],
    },
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'Discuss requirements with our engineering team' },
    { step: '02', title: 'Design', desc: 'CAD design and engineering analysis' },
    { step: '03', title: 'Prototype', desc: 'Create prototype for approval' },
    { step: '04', title: 'Production', desc: 'Manufacture with quality control' },
    { step: '05', title: 'Delivery', desc: 'Ship and provide installation support' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('custom.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive custom engineering services to meet your specific screening requirements.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative h-80 rounded-lg overflow-hidden mb-12">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineering%20design%20workstation%2C%20CAD%20software%2C%20industrial%20design%2C%20professional%20office&image_size=landscape_16_9"
            alt="Custom Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Tailored Solutions for Your Needs
              </h2>
              <p className="text-white/80">
                Our experienced engineering team works closely with you to design and manufacture custom screening solutions that meet your exact specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-xl font-semibold text-primary mb-8 text-center">
            Custom Engineering Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute top-6 left-full w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Custom Solution
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Contact our engineering team today to discuss your custom screening requirements.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition-colors"
          >
            <span>Contact Engineering Team</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;

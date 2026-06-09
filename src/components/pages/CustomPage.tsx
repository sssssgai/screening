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
      backgroundImage: `${process.env.PUBLIC_URL}/images/custom/oem.webp`,
    },
    {
      icon: PenTool,
      title: t('custom.cad'),
      desc: t('custom.cadDesc'),
      features: ['3D modeling', 'Finite element analysis', 'Technical drawing', 'Prototype development', 'Design optimization'],
      backgroundImage: `${process.env.PUBLIC_URL}/images/custom/cad.webp`,
    },
    {
      icon: Ruler,
      title: t('custom.customization'),
      desc: t('custom.customizationDesc'),
      features: ['Dimension customization', 'Material selection', 'Shape modification', 'Special requirements', 'Performance optimization'],
      backgroundImage: `${process.env.PUBLIC_URL}/images/custom/customization.webp`,
    },
    {
      icon: Layers,
      title: t('custom.materialOptions'),
      desc: t('custom.materialOptionsDesc'),
      features: ['High carbon steel', 'Stainless steel', 'Polyurethane', 'Natural rubber', 'Special alloys'],
      backgroundImage: `${process.env.PUBLIC_URL}/images/custom/material.webp`,
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
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <img
            src={`${process.env.PUBLIC_URL}/images/custom/custom.webp`}
            alt="Custom Engineering"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Content */}
              <div className="relative bg-white/65 p-6 h-full">
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
            {t('custom.getCustomSolution')}
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            {t('custom.getCustomSolutionDesc')}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition-colors"
          >
            <span>{t('custom.contactEngineeringTeam')}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;

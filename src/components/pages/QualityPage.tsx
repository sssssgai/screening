import { useTranslation } from 'react-i18next';
import { Shield, Eye, FileCheck, Award, CheckCircle, Microscope } from 'lucide-react';

interface QualityPageProps {
  onNavigate: (page: string) => void;
}

const QualityPage = ({ onNavigate }: QualityPageProps) => {
  const { t } = useTranslation();

  const inspectionSteps = [
    { step: '01', title: 'Raw Material Inspection', desc: 'Verify material quality before production' },
    { step: '02', title: 'Process Monitoring', desc: 'Continuous quality checks during manufacturing' },
    { step: '03', title: 'In-process Testing', desc: 'Testing at each production stage' },
    { step: '04', title: 'Final Audit', desc: 'Comprehensive final inspection' },
    { step: '05', title: 'Packaging Check', desc: 'Ensure safe transport conditions' },
  ];

  const testingMethods = [
    { icon: Microscope, title: 'Material Analysis', desc: 'Chemical composition testing' },
    { icon: Shield, title: 'Wear Resistance', desc: 'Abrasion testing and analysis' },
    { icon: FileCheck, title: 'Dimensional Accuracy', desc: 'Precision measurement verification' },
    { icon: CheckCircle, title: 'Impact Testing', desc: 'Mechanical strength evaluation' },
  ];

  const certifications = [
    'ISO 9001:2015',
    'CE Certification',
    'ISO 14001',
    'OHSAS 18001',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('quality.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality ensures that every product meets the highest standards of performance and reliability.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative h-80 rounded-lg overflow-hidden mb-12">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=quality%20control%20laboratory%2C%20testing%20equipment%2C%20professional%20inspection%2C%20industrial%20photography&image_size=landscape_16_9"
            alt="Quality Assurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Uncompromising Quality Standards
              </h2>
              <p className="text-white/80">
                We implement rigorous quality control processes at every stage of production to ensure our products meet and exceed industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Inspection Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-xl font-semibold text-primary">{t('quality.inspection')}</h2>
          </div>
          <p className="text-gray-600 mb-8">{t('quality.inspectionDesc')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {inspectionSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{t('quality.materials')}</h3>
            <p className="text-gray-600 text-sm">{t('quality.materialsDesc')}</p>
          </div>
          {testingMethods.map((method) => (
            <div key={method.title} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm">{method.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-primary rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-xl font-semibold text-white">{t('quality.certifications')}</h2>
          </div>
          <p className="text-white/70 mb-6">{t('quality.certificationsDesc')}</p>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPage;

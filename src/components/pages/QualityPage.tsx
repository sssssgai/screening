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
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('quality.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality ensures that every product meets the highest standards of performance and reliability.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-12 group">
          <img
            src={`${process.env.PUBLIC_URL}/images/quality/quality_banner.png`}
            alt="Quality Assurance"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8 sm:px-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Uncompromising Quality Standards
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                We implement rigorous quality control processes at every stage of production to ensure our products meet and exceed industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Inspection Process */}
        <div
          className="relative rounded-xl shadow-lg overflow-hidden mb-12"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/quality/Multi-stage_Inspection_Process.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative bg-white/60 p-8">
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary">{t('quality.inspection')}</h2>
                <p className="text-gray-600 mt-1">{t('quality.inspectionDesc')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {inspectionSteps.map((step, index) => (
                <div key={step.step} className="text-center relative">
                  {index < inspectionSteps.length - 1 && (
                    <div className="hidden sm:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="relative z-10 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testing Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{t('quality.materials')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('quality.materialsDesc')}</p>
          </div>
          {testingMethods.map((method) => (
            <div key={method.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4">
                <method.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center mb-8">
            <div className="bg-white/20 p-4 rounded-xl mr-0 sm:mr-4 mb-4 sm:mb-0">
              <Award className="w-10 h-10 text-secondary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{t('quality.certifications')}</h2>
              <p className="text-white/80 mt-1">{t('quality.certificationsDesc')}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-white/15 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium border border-white/20 hover:bg-white/25 transition-colors"
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

import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const { t } = useTranslation();

  const footerLinks = {
    products: [
      { label: t('products.wovenWireMesh'), href: 'products' },
      { label: t('products.polyurethanePanels'), href: 'products' },
      { label: t('products.rubberScreens'), href: 'products' },
      { label: t('products.perforatedPlates'), href: 'products' },
      { label: t('products.vibratingScreens'), href: 'products' },
    ],
    solutions: [
      { label: t('applications.mining'), href: 'applications' },
      { label: t('applications.quarrying'), href: 'applications' },
      { label: t('applications.recycling'), href: 'applications' },
    ],
    company: [
      { label: t('header.about'), href: 'about' },
      { label: t('header.custom'), href: 'custom' },
      { label: t('header.quality'), href: 'quality' },
    ],
    support: [
      { label: t('header.contact'), href: 'contact' },
      { label: 'Downloads', href: 'products' },
      { label: 'FAQs', href: 'about' },
      { label: 'Technical Support', href: 'contact' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xl">Y</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wide">YOTO</span>
                <span className="text-white/70 text-xs tracking-wider">SCREENING SOLUTIONS</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              {t('home.aboutDesc')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm">{t('contact.addressDesc')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm">{t('contact.phoneDesc')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm">{t('contact.emailDesc')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm">Mon - Fri: 8:00 - 18:00 (UTC+8)</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">{t('footer.products')}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">{t('footer.solutions')}</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">{t('footer.support')}</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">{t('footer.copyright')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-white/50 text-sm">Privacy Policy</span>
              <span className="text-white/50 text-sm">Terms of Service</span>
              <span className="text-white/50 text-sm">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Search } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { key: 'home', label: t('header.home') },
    { key: 'products', label: t('header.products') },
    { key: 'applications', label: t('header.applications') },
    { key: 'about', label: t('header.about') },
    { key: 'custom', label: t('header.custom') },
    { key: 'quality', label: t('header.quality') },
    { key: 'contact', label: t('header.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/98 shadow-xl backdrop-blur-xl py-2'
          : 'bg-primary/80 backdrop-blur-lg py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo区 - 左对齐，固定宽度 */}
          <div className="flex-shrink-0 w-40">
            <div
              className="flex items-center space-x-2.5 cursor-pointer transition-transform duration-300 hover:scale-102"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-primary font-bold text-lg leading-tight">Y</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">YOTO</span>
                <span className="text-white/70 text-xs tracking-wider leading-tight">SCREENING SOLUTIONS</span>
              </div>
            </div>
          </div>

          {/* 导航链接 - 水平均匀分布 */}
          <nav className="hidden lg:flex flex-1 items-center justify-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  currentPage === item.key
                    ? 'text-secondary font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.key && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* 功能区 - 右对齐，紧凑排列 */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <button
              onClick={changeLanguage}
              className="flex items-center space-x-1.5 text-white/70 hover:text-secondary hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {i18n.language === 'en' ? '中文' : 'EN'}
              </span>
            </button>
            <button className="text-white/70 hover:text-secondary hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white/70 hover:text-secondary hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 分割线 */}
      <div className="border-t border-white/5" />

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`relative px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 ${
                    currentPage === item.key
                      ? 'text-secondary font-semibold bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {currentPage === item.key && (
                    <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

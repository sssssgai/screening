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
 setIsScrolled(window.scrollY > 50);
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
 { key: 'projects', label: t('header.projects') },
 { key: 'custom', label: t('header.custom') },
 { key: 'quality', label: t('header.quality') },
 { key: 'contact', label: t('header.contact') },
 ];
 return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-20">
 {/* Logo */}
 <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
 <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
 <span className="text-primary font-bold text-xl">Y</span>
 </div>
 <div className="flex flex-col">
 <span className="text-white font-bold text-lg tracking-wide">YOTO</span>
 <span className="text-white/70 text-xs tracking-wider">SCREENING SOLUTIONS</span>
 </div>
 </div>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex items-center space-x-1">
 {navItems.map((item) => (<button key={item.key} onClick={() => onNavigate(item.key)} className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${currentPage === item.key
 ? 'bg-secondary text-primary'
 : 'text-white hover:bg-white/10'}`}>
 {item.label}
 </button>))}
 </nav>

 {/* Actions */}
 <div className="flex items-center space-x-4">
 <button onClick={changeLanguage} className="flex items-center space-x-1 text-white hover:text-secondary transition-colors">
 <Globe className="w-4 h-4"/>
 <span className="text-sm font-medium hidden sm:inline">
 {i18n.language === 'en' ? '中文' : 'EN'}
 </span>
 </button>
 <button className="text-white hover:text-secondary transition-colors">
 <Search className="w-5 h-5"/>
 </button>

 {/* Mobile Menu Button */}
 <button className="lg:hidden text-white hover:text-secondary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
 {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Navigation */}
 {isMenuOpen && (<div className="lg:hidden bg-primary/95 backdrop-blur-sm">
 <nav className="flex flex-col px-4 py-4 space-y-1">
 {navItems.map((item) => (<button key={item.key} onClick={() => {
 onNavigate(item.key);
 setIsMenuOpen(false);
 }} className={`px-4 py-3 rounded text-left font-medium transition-all ${currentPage === item.key
 ? 'bg-secondary text-primary'
 : 'text-white hover:bg-white/10'}`}>
 {item.label}
 </button>))}
 </nav>
 </div>)}
 </header>);
};
export default Header;

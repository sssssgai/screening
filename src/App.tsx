import { useState } from 'react';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ApplicationsPage from './components/pages/ApplicationsPage';
import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage';
import CustomPage from './components/pages/CustomPage';
import QualityPage from './components/pages/QualityPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'applications':
        return <ApplicationsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'custom':
        return <CustomPage onNavigate={handleNavigate} />;
      case 'quality':
        return <QualityPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

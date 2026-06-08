import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, ChevronRight } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

const ProductsPage = ({ onNavigate }: ProductsPageProps) => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('wovenWireMesh');

  const categories = [
    { id: 'wovenWireMesh', name: t('products.wovenWireMesh') },
    { id: 'polyurethanePanels', name: t('products.polyurethanePanels') },
    { id: 'rubberScreens', name: t('products.rubberScreens') },
    { id: 'perforatedPlates', name: t('products.perforatedPlates') },
    { id: 'vibratingScreens', name: t('products.vibratingScreens') },
  ];

  const productsData: { [key: string]: {
    title: string;
    desc: string;
    image: string;
    features: string[];
    applications: string[];
    subProducts?: { name: string; desc: string; image: string }[];
  }} = {
    wovenWireMesh: {
      title: t('products.wovenWireMesh'),
      desc: t('products.wovenWireMeshDesc'),
      image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/wovenWireMesh.png`,
      features: ['High tensile strength', 'Precision weaving', 'Wear resistant', 'Long service life', 'Uniform aperture size'],
      applications: ['Mining', 'Quarrying', 'Coal processing', 'Aggregate production'],
      subProducts: [
        { name: t('products.crimpedMesh'), desc: t('products.crimpedMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/crimpedMesh.png` },
        { name: t('products.lockCrimpMesh'), desc: t('products.lockCrimpMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/lockCrimpMesh.png` },
        { name: t('products.flatTopMesh'), desc: t('products.flatTopMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/flatTopMesh.png` },
        { name: t('products.hybridMesh'), desc: t('products.hybridMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/hybridMesh.png` },
        { name: t('products.sideTensionedMesh'), desc: t('products.sideTensionedMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/sideTensionedMesh.png` },
        { name: t('products.hookStripMesh'), desc: t('products.hookStripMeshDesc'), image: `${process.env.PUBLIC_URL}/images/products/wovenWireMesh/hookStripMesh.png` },
      ],
    },
    polyurethanePanels: {
      title: t('products.polyurethanePanels'),
      desc: t('products.polyurethanePanelsDesc'),
      image: `${process.env.PUBLIC_URL}/images/products/Polyurethane_Panels/polyurethanePanels.png`,
      features: ['Excellent wear resistance', 'High elasticity', 'Noise reduction', 'Chemical resistance', 'Lightweight'],
      applications: ['Mining', 'Quarrying', 'Construction', 'Recycling'],
      subProducts: [
        { name: t('products.puModularPanels'), desc: t('products.puModularPanelsDesc'), image: `${process.env.PUBLIC_URL}/images/products/Polyurethane_Panels/puModularPanels.png` },
        { name: t('products.puTensionedScreens'), desc: t('products.puTensionedScreensDesc'), image: `${process.env.PUBLIC_URL}/images/products/Polyurethane_Panels/puTensionScreens.png` },
        { name: t('products.puFlipFlow'), desc: t('products.puFlipFlowDesc'), image: `${process.env.PUBLIC_URL}/images/products/Polyurethane_Panels/puFlipFlow.png` },  
        { name: t('products.puSelfCleaning'), desc: t('products.puSelfCleaningDesc'), image: `${process.env.PUBLIC_URL}/images/products/Polyurethane_Panels/puSelfCleaning.png` },
      ],
    },
    rubberScreens: {
      title: t('products.rubberScreens'),
      desc: t('products.rubberScreensDesc'),
      image: `${process.env.PUBLIC_URL}/images/products/Rubber_Screens/rubberScreens.png`,
      features: ['Superior impact absorption', 'High durability', 'Vibration damping', 'Non-slip surface', 'Easy installation'],
      applications: ['Mining', 'Quarrying', 'Heavy industry', 'Waste management'],
      subProducts: [
        { name: t('products.rubberModularPanels'), desc: t('products.rubberModularPanelsDesc'), image: `${process.env.PUBLIC_URL}/images/products/Rubber_Screens/rubberModularPanels.png` },
        { name: t('products.rubberPolymer'), desc: t('products.rubberPolymerDesc'), image: `${process.env.PUBLIC_URL}/images/products/Rubber_Screens/rubberPolymer.png` },
        { name: t('products.rubberCascade'), desc: t('products.rubberCascadeDesc'), image: `${process.env.PUBLIC_URL}/images/products/Rubber_Screens/rubberCascade.png` },
      ],
    },
    perforatedPlates: {
      title: t('products.perforatedPlates'),
      desc: t('products.perforatedPlatesDesc'),
      image: `${process.env.PUBLIC_URL}/images/products/perforatedPlates/perforatedPlates.png`,
      features: ['Precision perforation', 'High accuracy', 'Various hole patterns', 'Corrosion resistant', 'Customizable'],
      applications: ['Food processing', 'Pharmaceutical', 'Automotive', 'Architecture'],
      subProducts: [
        { name: t('products.perforatedRound'), desc: t('products.perforatedRoundDesc'), image: `${process.env.PUBLIC_URL}/images/products/perforatedPlates/perforatedRound.png` },
        { name: t('products.perforatedSquare'), desc: t('products.perforatedSquareDesc'), image: `${process.env.PUBLIC_URL}/images/products/perforatedPlates/perforatedSquare.png` },
        { name: t('products.perforatedSlotted'), desc: t('products.perforatedSlottedDesc'), image: `${process.env.PUBLIC_URL}/images/products/perforatedPlates/perforatedSlotted.png` },
        { name: t('products.perforatedCustom'), desc: t('products.perforatedCustomDesc'), image: `${process.env.PUBLIC_URL}/images/products/perforatedPlates/perforatedCustom.png` },
      ],
    },
    vibratingScreens: {
      title: t('products.vibratingScreens'),
      desc: t('products.vibratingScreensDesc'),
      image: `${process.env.PUBLIC_URL}/images/products/vibratingScreens/vibratingScreens.png`,
      features: ['High efficiency', 'Low energy consumption', 'Easy maintenance', 'Large capacity', 'Adjustable vibration'],
      applications: ['Mining', 'Quarrying', 'Coal', 'Aggregates'],
      subProducts: [
        { name: t('products.vibratingIncline'), desc: t('products.vibratingInclineDesc'), image: `${process.env.PUBLIC_URL}/images/products/vibratingScreens/vibratingIncline.png` },
        { name: t('products.vibratingHorizontal'), desc: t('products.vibratingHorizontalDesc'), image: `${process.env.PUBLIC_URL}/images/products/vibratingScreens/vibratingHorizontal.png` },
        { name: t('products.vibratingHighFrequency'), desc: t('products.vibratingHighFrequencyDesc'), image: `${process.env.PUBLIC_URL}/images/products/vibratingScreens/vibratingHighFrequency.png` },
        { name: t('products.vibratingMultiDeck'), desc: t('products.vibratingMultiDeckDesc'), image: `${process.env.PUBLIC_URL}/images/products/vibratingScreens/vibratingMultiDeck.png` },
      ],
    },
  };

  const currentProduct = productsData[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('products.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality screening products designed for maximum performance in mining, quarrying, and recycling applications.
          </p>
        </div>

        {/* Mobile Category Navigation */}
        <div className="lg:hidden mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-primary mb-4">{t('products.title')}</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{currentProduct.title}</h2>
                  <p className="text-white/90 text-sm sm:text-base">{currentProduct.desc}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 sm:p-8">
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="w-1 h-6 bg-secondary mr-3 rounded-full" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentProduct.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 bg-primary/5 px-4 py-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="w-1 h-6 bg-secondary mr-3 rounded-full" />
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentProduct.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-gradient-to-r from-secondary/10 to-secondary/5 text-primary px-5 py-2.5 rounded-lg text-sm font-medium border border-secondary/20 hover:border-secondary/40 transition-all"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <button className="flex items-center space-x-3 text-primary hover:text-accent transition-colors group">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Download className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <span className="font-semibold block">Download PDF Catalog</span>
                          <span className="text-gray-500 text-sm">Get detailed technical specifications</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub Products */}
                {currentProduct.subProducts && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <span className="w-1 h-6 bg-secondary mr-3 rounded-full" />
                      Product Variants
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {currentProduct.subProducts.map((subProduct) => (
                        <div
                          key={subProduct.name}
                          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                            <img
                              src={subProduct.image}
                              alt={subProduct.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-5">
                            <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{subProduct.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{subProduct.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {i18n.language === 'en' ? 'Need more information?' : '需要更多信息？'}
                        </h4>
                        <p className="text-gray-600 text-base">
                          {i18n.language === 'en' 
                            ? 'Contact our technical team for custom solutions' 
                            : '联系我们的技术团队获取定制解决方案'}
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-accent transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <span>{i18n.language === 'en' ? 'Contact Us' : '联系我们'}</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

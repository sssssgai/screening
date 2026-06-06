import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, ChevronRight } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

const ProductsPage = ({ onNavigate }: ProductsPageProps) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('wovenWireMesh');

  const categories = [
    { id: 'wovenWireMesh', name: t('products.wovenWireMesh') },
    { id: 'polyurethanePanels', name: t('products.polyurethanePanels') },
    { id: 'rubberScreens', name: t('products.rubberScreens') },
    { id: 'perforatedPlates', name: t('products.perforatedPlates') },
    { id: 'vibratingScreens', name: t('products.vibratingScreens') },
    { id: 'accessories', name: t('products.accessories') },
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=woven%20wire%20mesh%20close%20up%2C%20industrial%20screening%20material%2C%20steel%20wires%2C%20professional%20product%20photo%2C%20dark%20background&image_size=landscape_4_3',
      features: ['High tensile strength', 'Precision weaving', 'Wear resistant', 'Long service life', 'Uniform aperture size'],
      applications: ['Mining', 'Quarrying', 'Coal processing', 'Aggregate production'],
      subProducts: [
        { name: t('products.crimpedMesh'), desc: t('products.crimpedMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crimped%20wire%20mesh%2C%20industrial%20screen%2C%20steel%20material%2C%20close%20up%20view&image_size=portrait_4_3' },
        { name: t('products.lockCrimpMesh'), desc: t('products.lockCrimpMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lock%20crimp%20wire%20mesh%2C%20industrial%20screening%20mesh%2C%20steel%20construction&image_size=portrait_4_3' },
        { name: t('products.flatTopMesh'), desc: t('products.flatTopMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flat%20top%20wire%20mesh%2C%20industrial%20screen%2C%20smooth%20surface&image_size=portrait_4_3' },
        { name: t('products.hybridMesh'), desc: t('products.hybridMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hybrid%20wire%20mesh%2C%20industrial%20screening%20material%2C%20mixed%20wire%20types&image_size=portrait_4_3' },
        { name: t('products.sideTensionedMesh'), desc: t('products.sideTensionedMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=side%20tensioned%20wire%20mesh%2C%20industrial%20screen%2C%20tension%20system&image_size=portrait_4_3' },
        { name: t('products.hookStripMesh'), desc: t('products.hookStripMeshDesc'), image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hook%20strip%20wire%20mesh%2C%20industrial%20screen%2C%20quick%20installation&image_size=portrait_4_3' },
      ],
    },
    polyurethanePanels: {
      title: t('products.polyurethanePanels'),
      desc: t('products.polyurethanePanelsDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=polyurethane%20screen%20panels%2C%20industrial%20mining%20equipment%2C%20orange%20color%2C%20professional%20product%20photo&image_size=landscape_4_3',
      features: ['Excellent wear resistance', 'High elasticity', 'Noise reduction', 'Chemical resistance', 'Lightweight'],
      applications: ['Mining', 'Quarrying', 'Construction', 'Recycling'],
    },
    rubberScreens: {
      title: t('products.rubberScreens'),
      desc: t('products.rubberScreensDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rubber%20screen%20panels%2C%20industrial%20vibrating%20screen%2C%20black%20rubber%2C%20professional%20photo&image_size=landscape_4_3',
      features: ['Superior impact absorption', 'High durability', 'Vibration damping', 'Non-slip surface', 'Easy installation'],
      applications: ['Mining', 'Quarrying', 'Heavy industry', 'Waste management'],
    },
    perforatedPlates: {
      title: t('products.perforatedPlates'),
      desc: t('products.perforatedPlatesDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=perforated%20steel%20plate%2C%20industrial%20metal%20sheet%2C%20precision%20holes%2C%20silver%20color&image_size=landscape_4_3',
      features: ['Precision perforation', 'High accuracy', 'Various hole patterns', 'Corrosion resistant', 'Customizable'],
      applications: ['Food processing', 'Pharmaceutical', 'Automotive', 'Architecture'],
    },
    vibratingScreens: {
      title: t('products.vibratingScreens'),
      desc: t('products.vibratingScreensDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20vibrating%20screen%20machine%2C%20heavy%20duty%20mining%20equipment%2C%20steel%20frame%2C%20professional%20photo&image_size=landscape_4_3',
      features: ['High efficiency', 'Low energy consumption', 'Easy maintenance', 'Large capacity', 'Adjustable vibration'],
      applications: ['Mining', 'Quarrying', 'Coal', 'Aggregates'],
    },
    accessories: {
      title: t('products.accessories'),
      desc: t('products.accessoriesDesc'),
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=screening%20equipment%20accessories%2C%20metal%20parts%2C%20industrial%20spare%20parts%2C%20professional%20photo&image_size=landscape_4_3',
      features: ['High quality materials', 'Precision engineered', 'Perfect fit', 'Durable', 'Easy replacement'],
      applications: ['Maintenance', 'Replacement', 'Upgrades', 'Custom installations'],
    },
  };

  const currentProduct = productsData[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('products.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality screening products designed for maximum performance in mining, quarrying, and recycling applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-primary mb-4">{t('products.title')}</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
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
              <div className="relative h-80 overflow-hidden">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{currentProduct.title}</h2>
                  <p className="text-white/80">{currentProduct.desc}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="w-1 h-5 bg-secondary mr-3" />
                    Features
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {currentProduct.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="w-1 h-5 bg-secondary mr-3" />
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentProduct.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-secondary/20 text-primary px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <div className="bg-gray-50 rounded-lg p-4 mb-8">
                  <button className="flex items-center space-x-3 text-primary hover:text-accent transition-colors">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download PDF Catalog</span>
                  </button>
                  <p className="text-gray-500 text-sm mt-2">
                    Get detailed technical specifications and product information
                  </p>
                </div>

                {/* Sub Products */}
                {currentProduct.subProducts && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <span className="w-1 h-5 bg-secondary mr-3" />
                      Product Variants
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentProduct.subProducts.map((subProduct) => (
                        <div
                          key={subProduct.name}
                          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <img
                            src={subProduct.image}
                            alt={subProduct.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-primary mb-1">{subProduct.name}</h4>
                            <p className="text-gray-600 text-sm">{subProduct.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Need more information?</h4>
                      <p className="text-gray-600 text-sm">Contact our technical team for custom solutions</p>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded font-medium hover:bg-accent transition-colors"
                    >
                      <span>Contact Us</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
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

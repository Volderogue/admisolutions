import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTarifs = () => {
    const tarifsSection = document.getElementById('tarifs');
    if (tarifsSection) {
      tarifsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const tarifsSection = document.getElementById('tarifs');
        if (tarifsSection) {
          tarifsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-admin-light hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+33756854989" className="flex items-center gap-2 text-gray-600 hover:text-admin-primary transition-colors">
                <Phone size={16} />
                <span>+33 7 56 85 49 89</span>
              </a>
              <a href="mailto:contact@adminsolution.fr" className="flex items-center gap-2 text-gray-600 hover:text-admin-primary transition-colors">
                <Mail size={16} />
                <span>contact@adminsolution.fr</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/admin-solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-admin-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-admin-primary to-admin-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                AS
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold text-admin-primary">Admin Solution</div>
                <div className="text-xs text-gray-500">Votre partenaire administratif</div>
              </div>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`font-medium transition-colors relative group ${
                    currentPage === item.id
                      ? 'text-admin-primary'
                      : 'text-gray-700 hover:text-admin-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-admin-primary transition-transform origin-left ${
                      currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
              <button
                onClick={scrollToTarifs}
                className={`font-medium transition-colors relative group ${
                  currentPage === 'home' && window.location.hash === '#tarifs'
                    ? 'text-admin-primary'
                    : 'text-gray-700 hover:text-admin-primary'
                }`}
              >
                Tarifs
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-admin-primary transition-transform origin-left scale-x-0 group-hover:scale-x-100" />
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="hidden lg:block btn-primary"
            >
              Obtenir un devis
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-admin-primary transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left py-2 px-4 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-admin-primary text-white'
                        : 'text-gray-700 hover:bg-admin-light'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollToTarifs();
                    setIsMenuOpen(false);
                  }}
                  className="text-left py-2 px-4 rounded-lg text-gray-700 hover:bg-admin-light transition-colors"
                >
                  Tarifs
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary justify-center mt-2"
                >
                  Obtenir un devis
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;



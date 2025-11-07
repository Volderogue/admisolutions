import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-admin-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-admin-primary to-admin-secondary rounded-lg flex items-center justify-center font-bold text-xl">
                AS
              </div>
              <div>
                <div className="font-bold text-lg">Admin Solution</div>
                <div className="text-sm text-gray-400">Votre partenaire administratif</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Externalisez tout votre administratif avec des professionnels. 
              Simplifiez-vous la vie et concentrez-vous sur le développement de votre activité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Services', 'Clients', 'Contact'].map((item, index) => {
                const pageMap: { [key: string]: string } = {
                  'Accueil': 'home',
                  'À propos': 'about',
                  'Services': 'services',
                  'Clients': 'clients',
                  'Contact': 'contact',
                };
                return (
                  <li key={index}>
                    <button
                      onClick={() => onNavigate(pageMap[item])}
                      className="flex items-center gap-2 text-gray-300 hover:text-admin-secondary transition-colors group"
                    >
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33756854989"
                  className="flex items-center gap-3 text-gray-300 hover:text-admin-secondary transition-colors"
                >
                  <Phone size={18} />
                  <span>+33 7 56 85 49 89</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@adminsolution.fr"
                  className="flex items-center gap-3 text-gray-300 hover:text-admin-secondary transition-colors"
                >
                  <Mail size={18} />
                  <span>contact@adminsolution.fr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>2 Clos de Gally<br />78590 Noisy-le-Roi</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4">Prêt à démarrer ?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Obtenez un devis personnalisé en quelques minutes.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary w-full justify-center"
            >
              Nous contacter
            </button>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/admin-solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-admin-primary rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Admin Solution. Tous droits réservés.</p>
            <div className="flex gap-6">
              <button className="hover:text-admin-secondary transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-admin-secondary transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



import { Building2, Star, Quote, Briefcase, Hammer } from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (page: string) => void;
}

const ClientsPage = ({ onNavigate }: ClientsPageProps) => {
  const testimonials = [
    {
      name: 'Qwincy',
      company: 'Client Google',
      role: 'Avis vérifié',
      content: 'Excellent service et accompagnement de qualité. L\'équipe d\'Admin Solution est professionnelle, réactive et à l\'écoute de nos besoins. Je recommande vivement leurs services !',
      rating: 5,
      avatar: 'Q',
    },
    {
      name: 'Brice Blanc',
      company: 'Client Google',
      role: 'Avis vérifié',
      content:
        "Nous avions besoin, au sein de l’entreprise, d'une personne capable d’effectuer un travail d’archivage et de tri de documents médicaux. La proposition d’accompagnement qui nous a été faite a pleinement répondu à nos attentes, et même au-delà. Une collaboration de grande qualité que je recommande vivement.",
      rating: 5,
      avatar: 'B',
    },
  ];

  const clientLogos = [
    { name: 'OBAT', initial: 'OBAT', link: 'https://partenariats.obat.fr/admin-solution' },
  ];

  const sectors = [
    {
      icon: Briefcase,
      name: 'Professions Réglementées',
      description: 'Experts-comptables, avocats, architectes, assureurs, huissiers',
    },
    {
      icon: Building2,
      name: 'TPE / PME Secteur Tertiaire',
      description: 'Cabinets de conseil, agences immobilières, entreprises de prestations de services',
    },
    {
      icon: Hammer,
      name: 'Artisans / Solopreneurs',
      description: 'Artisans (BTP, fabrication, services), entrepreneurs individuels',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-admin-primary to-admin-secondary py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ils Nous Font Confiance
            </h1>
            <p className="text-xl text-white/90">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 -mt-20 relative z-10">
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-admin-primary mb-2">20+</div>
              <p className="text-gray-600 font-semibold">Clients accompagnés</p>
            </div>
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-admin-primary mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Taux de satisfaction</p>
            </div>
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-admin-primary mb-2">10+</div>
              <p className="text-gray-600 font-semibold">Années d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Ce que disent nos <span className="text-admin-secondary">clients</span>
            </h2>
            <p className="section-subtitle">
              Leur satisfaction est notre meilleure référence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-admin-secondary/20 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-admin-primary to-admin-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-admin-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-4">
              Nos <span className="text-admin-secondary">Partenaires</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => {
              const CardContent = (
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-admin-primary/10 to-admin-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-admin-primary">{logo.initial}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold">{logo.name}</p>
                </div>
              );

              return logo.link ? (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-center group hover:scale-105 transition-all duration-300 flex items-center justify-center p-6 cursor-pointer"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="card text-center group hover:scale-105 transition-all duration-300 flex items-center justify-center p-6"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Qui sont nos <span className="text-admin-secondary">clients</span> ?
            </h2>
            <p className="section-subtitle">
              Nous accompagnons des professionnels de tous horizons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-admin-primary to-admin-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-admin-dark mb-2">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-admin-primary to-admin-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez comment nous pouvons vous aider à développer votre activité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-admin-primary hover:bg-admin-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Demander un devis
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white/30"
              >
                Nos services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;



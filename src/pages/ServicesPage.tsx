import { FileText, Users, Megaphone, Calendar, Calculator, Mail, Phone, ClipboardCheck, UserCheck, TrendingUp } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage = ({ onNavigate }: ServicesPageProps) => {
  const services = [
    {
      category: 'Gestion Administrative',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      description: 'Libérez-vous des tâches administratives chronophages et concentrez-vous sur votre cœur de métier.',
      items: [
        {
          icon: Mail,
          title: 'Gestion du courrier',
          description: 'Tri, traitement et archivage de vos correspondances professionnelles',
        },
        {
          icon: Calendar,
          title: 'Gestion d\'agenda',
          description: 'Organisation de vos rendez-vous et planification de vos réunions',
        },
        {
          icon: Calculator,
          title: 'Facturation et devis',
          description: 'Création et suivi de vos documents commerciaux',
        },
        {
          icon: ClipboardCheck,
          title: 'Saisie comptable',
          description: 'Enregistrement et classement de vos pièces comptables',
        },
      ],
    },
    {
      category: 'Ressources Humaines',
      icon: Users,
      color: 'from-green-500 to-green-600',
      description: 'Optimisez la gestion de vos ressources humaines avec nos experts RH dédiés.',
      items: [
        {
          icon: UserCheck,
          title: 'Recrutement',
          description: 'Sourcing, présélection et accompagnement dans vos recrutements',
        },
        {
          icon: FileText,
          title: 'Gestion administrative du personnel',
          description: 'Contrats, avenants, attestations et documents RH',
        },
        {
          icon: Calendar,
          title: 'Gestion des temps',
          description: 'Suivi des présences, absences et congés',
        },
        {
          icon: TrendingUp,
          title: 'Formation',
          description: 'Gestion et suivi du plan de formation',
        },
      ],
    },
    {
      category: 'Communication',
      icon: Megaphone,
      color: 'from-purple-500 to-purple-600',
      description: 'Développez votre visibilité et renforcez votre image de marque.',
      items: [
        {
          icon: TrendingUp,
          title: 'Réseaux sociaux',
          description: 'Animation et gestion de votre présence sur les réseaux',
        },
        {
          icon: FileText,
          title: 'Rédaction de contenu',
          description: 'Articles, newsletters et contenus web optimisés SEO',
        },
        {
          icon: Mail,
          title: 'Campagnes emailing',
          description: 'Création et gestion de vos campagnes marketing',
        },
        {
          icon: Phone,
          title: 'Relation client',
          description: 'Gestion des appels et suivi de votre satisfaction client',
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-admin-primary to-admin-secondary py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Services Administratifs
            </h1>
            <p className="text-xl text-white/90">
              Des solutions complètes et personnalisées pour externaliser votre gestion administrative
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const CategoryIcon = service.icon;
              return (
                <div key={index} className="animate-fade-in-up">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg`}>
                      <CategoryIcon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-4">
                      {service.category}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Items */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={itemIndex}
                          className="card group hover:scale-105 transition-all duration-300 hover:border-admin-secondary border-2 border-transparent"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <ItemIcon className="w-6 h-6 text-admin-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-admin-dark mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-admin-primary to-admin-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une question sur nos services ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous proposer la solution la plus adaptée à vos besoins.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-admin-primary hover:bg-admin-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Demander un devis personnalisé
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;



import { FileText, Users, Calendar, Calculator, Mail, Phone, ClipboardCheck, TrendingUp, Building2, Lightbulb, Target } from 'lucide-react';

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
          icon: FileText,
          title: 'Secrétariat courant',
          description: 'Gestion du courrier, de l\'agenda et de la correspondance professionnelle',
        },
        {
          icon: Calculator,
          title: 'Achats/ventes',
          description: 'Gestion des commandes, des fournisseurs et du suivi commercial',
        },
        {
          icon: ClipboardCheck,
          title: 'Préparation comptable',
          description: 'Récupération des justificatifs, rapprochement bancaire et coordination cabinet comptable',
        },
        {
          icon: Phone,
          title: 'Gestion des Appels d\'Offres',
          description: 'Suivi, coordination et constitution des dossiers de réponse',
        },
        {
          icon: TrendingUp,
          title: 'Suivi commercial',
          description: 'Gestion de la relation client et suivi des opportunités',
        },
        {
          icon: Calendar,
          title: 'Gestion des plannings',
          description: 'Organisation et coordination des emplois du temps',
        },
        {
          icon: Mail,
          title: 'Facturation',
          description: 'Création, envoi et suivi des factures et devis',
        },
      ],
    },
    {
      category: 'Office Management',
      icon: Users,
      color: 'from-green-500 to-green-600',
      description: 'Optimisez votre organisation interne et déléguez la gestion de vos opérations quotidiennes.',
      items: [
        {
          icon: Lightbulb,
          title: 'Optimisation interne',
          description: 'Analyse et amélioration de vos processus organisationnels',
        },
        {
          icon: Target,
          title: 'Mise en place de process',
          description: 'Création et documentation des procédures internes',
        },
        {
          icon: TrendingUp,
          title: 'Gestion de projets',
          description: 'Pilotage et coordination de vos projets d\'entreprise',
        },
        {
          icon: Users,
          title: 'Ressources Humaines & Paie',
          description: 'Gestion administrative du personnel et suivi de la paie',
        },
        {
          icon: Calculator,
          title: 'Suivi de la trésorerie',
          description: 'Monitoring des flux financiers et prévisions de trésorerie',
        },
        {
          icon: Calendar,
          title: 'Organisation d\'événements',
          description: 'Planification et coordination de vos événements professionnels',
        },
        {
          icon: Building2,
          title: 'Gestion des locaux',
          description: 'Administration des espaces de travail et des services généraux',
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
              Notre équipe est à votre disposition pour vous conseiller et vous proposer la solution la plus adaptée à vos besoins.
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



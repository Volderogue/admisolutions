import { Target, Heart, Award, Users, CheckCircle, TrendingUp, Eye, Handshake, Star } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services de la plus haute qualité',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Transparence',
      description: 'Une communication claire et honnête dans toutes nos relations',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Handshake,
      title: 'Engagement Client',
      description: 'Votre réussite est notre priorité, nous nous investissons pleinement',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Une approche humaine et respectueuse dans tous nos échanges',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Award,
      title: 'Professionnalisme',
      description: 'Des experts qualifiés et expérimentés à votre service',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const advantages = [
    'Un collectif d\'assistantes indépendantes hautement qualifiées et complémentaires',
    'Une mutualisation des compétences pour répondre à tous vos besoins',
    'La flexibilité du travail indépendant avec la solidité d\'un collectif structuré',
    'Une expertise reconnue dans les métiers du conseil, de l\'immobilier et des services',
    'Un accompagnement personnalisé adapté à votre secteur d\'activité',
    'Une réactivité optimale grâce à notre organisation en réseau',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-admin-primary to-admin-secondary py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              À Propos d'Admin Solution
            </h1>
            <p className="text-xl text-white/90">
              Votre partenaire de confiance pour l'externalisation de vos tâches administratives
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-6">
                Notre <span className="text-admin-secondary">Mission</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="italic font-semibold text-admin-primary">
                  Admin Solution est née d'une vision commune : accompagner les entreprises avec bienveillance, 
                  exigence et humanité.
                </p>
                <p>
                  "Nous avons uni nos idées et nos ambitions pour bâtir une solution qui place l'humain au cœur 
                  de l'accompagnement, tout en offrant aux dirigeants la rigueur et la fiabilité dont ils ont besoin."
                </p>
                <p className="text-right text-admin-dark font-medium">
                  - Antoine & Aurélia<br/>
                  <span className="text-sm text-gray-500">Président et Directrice Générale</span>
                </p>
                <p className="mt-6">
                  Notre mission est simple : libérer nos clients de leurs contraintes administratives pour qu'ils se 
                  concentrent sur l'essentiel, leur cœur de métier.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/photo collectif.jpeg" 
                alt="Équipe Admin Solution" 
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-admin-accent rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-admin-secondary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nos <span className="text-admin-secondary">Valeurs</span>
            </h2>
            <p className="section-subtitle">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card group hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-admin-dark mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Notre <span className="text-admin-secondary">Équipe</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300 text-center">
              <img 
                src="/images/Antoine.jpg" 
                alt="Antoine LEGER" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-admin-dark mb-2">Antoine LEGER</h3>
              <p className="text-admin-primary font-semibold mb-3">PRÉSIDENT</p>
              <p className="text-gray-600 text-sm">
                Antoine donne l'élan et la vision d'ADMIN SOLUTION. Il veille à ce que l'entreprise grandisse dans la bonne direction, tout en gardant nos valeurs au cœur de chaque projet.
              </p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300 text-center">
              <img 
                src="/images/Aurelia.jpg" 
                alt="Aurélia CHAZEAU" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-admin-dark mb-2">Aurélia CHAZEAU</h3>
              <p className="text-admin-primary font-semibold mb-3">DIRECTRICE GÉNÉRALE</p>
              <p className="text-gray-600 text-sm">
                Aurélia coordonne les activités opérationnelles et assure la bonne organisation interne de l'équipe. Elle garantit qualité et efficacité au quotidien.
              </p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300 text-center">
              <img 
                src="/images/Linda.jpg" 
                alt="Linda TADJER" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-admin-dark mb-2">Linda TADJER</h3>
              <p className="text-admin-primary font-semibold mb-3">RESPONSABLE COMMERCIALE</p>
              <p className="text-gray-600 text-sm">
                Linda part à la rencontre de nos futurs clients et partenaires, avec énergie et écoute. Elle développe notre réseau et nous offre de nouvelles opportunités de collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-6">
                Notre collectif d'<span className="text-admin-secondary">assistantes indépendantes</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Admin Solution, c'est avant tout un collectif d'assistantes indépendantes expérimentées qui mutualisent leurs compétences pour vous offrir un service complet et personnalisé. 
                Nous accompagnons particulièrement les professionnels du conseil, de l'immobilier, du BTP et des services.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-admin-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center group hover:scale-105 transition-transform">
                <TrendingUp className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">100%</div>
                <p className="text-gray-600">Taux de satisfaction</p>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">20+</div>
                <p className="text-gray-600">Clients accompagnés</p>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform">
                <Award className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">40+</div>
                <p className="text-gray-600">Experts</p>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform">
                <Target className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">10+</div>
                <p className="text-gray-600">Ans d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-admin-primary to-admin-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez les entreprises qui nous font confiance
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez comment nous pouvons vous aider à optimiser votre gestion administrative
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-admin-primary hover:bg-admin-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Contactez-nous
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white/30"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;



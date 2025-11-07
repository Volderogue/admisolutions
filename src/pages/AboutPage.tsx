import { Target, Heart, Award, Users, CheckCircle, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services de la plus haute qualité',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Votre réussite est notre priorité, nous nous investissons pleinement',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Des professionnels qualifiés et expérimentés à votre service',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une relation de confiance basée sur l\'écoute et la disponibilité',
      color: 'from-green-500 to-green-600',
    },
  ];

  const advantages = [
    'Plus de 10 ans d\'expérience dans l\'externalisation administrative',
    '200+ experts qualifiés et disponibles',
    '60+ entreprises nous font confiance',
    'Un accompagnement personnalisé pour chaque client',
    'Une flexibilité totale dans nos prestations',
    'Un suivi rigoureux et des reporting réguliers',
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
                <p>
                  Admin Solution est née d'une volonté simple : permettre aux entrepreneurs et aux entreprises 
                  de se concentrer sur leur cœur de métier en les libérant des tâches administratives chronophages.
                </p>
                <p>
                  Nous croyons fermement que chaque minute gagnée sur l'administratif est une minute de plus 
                  consacrée au développement de votre activité, à l'innovation et à la relation client.
                </p>
                <p>
                  Notre équipe d'experts qualifiés intervient comme une véritable extension de votre entreprise, 
                  s'adaptant à vos processus et à votre culture d'entreprise.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-admin-primary/10 to-admin-secondary/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-admin-primary mb-4">AS</div>
                  <div className="text-2xl font-semibold text-admin-dark">Admin Solution</div>
                  <div className="text-gray-600 mt-2">Depuis 2013</div>
                </div>
              </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-6">
                Pourquoi choisir <span className="text-admin-secondary">Admin Solution</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous nous distinguons par notre approche personnalisée et notre engagement sans faille 
                envers la satisfaction de nos clients.
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
                <div className="text-4xl font-bold text-admin-primary mb-2">98%</div>
                <p className="text-gray-600">Taux de satisfaction</p>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">60+</div>
                <p className="text-gray-600">Clients actifs</p>
              </div>
              <div className="card text-center group hover:scale-105 transition-transform">
                <Award className="w-12 h-12 text-admin-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-admin-primary mb-2">200+</div>
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



import { ArrowRight, CheckCircle, Users, Award, Clock, Briefcase, TrendingUp, Headphones } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const stats = [
    { icon: Users, value: '200+', label: 'Experts' },
    { icon: Briefcase, value: '60+', label: 'Clients accompagnés' },
    { icon: Award, value: '10+', label: "Années d'expérience" },
    { icon: TrendingUp, value: '6', label: "Domaines d'expertise" },
  ];

  const benefits = [
    'Externalisez tout votre administratif',
    'Traitez exclusivement avec des professionnels',
    'Mettez fin aux tracas liés au recrutement',
  ];

  const process = [
    {
      number: '1',
      title: 'ÉTUDE',
      description: 'Nous identifions votre besoin d\'externalisation afin de vous proposer la solution et le profil adapté !',
      color: 'from-admin-primary to-admin-primary/80',
    },
    {
      number: '2',
      title: 'MISSION',
      description: 'Mise en place de la solution suivant le planning d\'intervention défini.',
      color: 'from-admin-secondary to-admin-secondary/80',
    },
    {
      number: '3',
      title: 'SUIVI',
      description: 'Notre équipe assure le suivi et la gestion de la mission. Vous restez concentrés sur votre activité.',
      color: 'from-admin-accent to-admin-accent/80',
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: 'Gestion Administrative',
      description: 'Externalisez votre gestion administrative au quotidien',
    },
    {
      icon: Users,
      title: 'Ressources Humaines',
      description: 'Gestion RH complète et accompagnement personnalisé',
    },
    {
      icon: Headphones,
      title: 'Communication',
      description: 'Développez votre communication et votre présence digitale',
    },
  ];

  const pricingPlans = [
    {
      name: 'HEURE',
      price: '49,95',
      description: 'Un expert dédié qui vous est facturé à l\'heure pour un maximum de flexibilité.',
    },
    {
      name: 'DEMI-JOURNÉE',
      price: '164,95',
      description: 'Un expert dédié qui vous est facturé à l\'heure pour un maximum de flexibilité.',
      featured: true,
    },
    {
      name: 'JOURNÉE',
      price: '314,95',
      description: 'Un expert dédié qui vous est facturé à l\'heure pour un maximum de flexibilité.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-admin-primary via-admin-primary/95 to-admin-secondary min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Concentrez-vous sur votre{' '}
                <span className="text-admin-secondary">croissance</span>
                <br />
                <span className="text-admin-accent">On s'occupe du reste !</span>
              </h1>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 text-admin-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-admin-primary hover:bg-admin-secondary hover:text-admin-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl group"
              >
                <span>OBTENIR UN DEVIS SUR-MESURE</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full aspect-square bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-white/90 mb-4">AS</div>
                    <div className="text-2xl font-semibold text-admin-secondary">Admin Solution</div>
                    <div className="text-white/80 mt-2">Partenaire de votre croissance</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-admin-accent rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-admin-secondary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-admin-primary to-admin-secondary rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-admin-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Votre entreprise est <span className="text-admin-secondary">unique</span>
              <br />
              Notre <span className="text-admin-secondary">accompagnement</span> aussi !
            </h2>
            <p className="section-subtitle">
              Un process simple et transparent pour vous assurer sérénité et résultats
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform`}>
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-admin-dark text-center mb-4">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Découvrez nos <span className="text-admin-secondary">expertises</span>
            </h2>
            <p className="section-subtitle italic">
              Externalisez dès demain en toute confiance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => onNavigate('services')}
                  className="card group hover:scale-105 transition-all duration-300 text-left hover:border-admin-secondary border-2 border-transparent"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-admin-primary/10 to-admin-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-admin-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-admin-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-admin-primary font-semibold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 bg-gradient-to-br from-admin-primary/95 via-admin-primary to-admin-secondary/80 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Des offres <span className="text-white">flexibles</span>
              <br />
              adaptées à vos <span className="text-white">besoins</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 ${
                  plan.featured
                    ? 'scale-105 shadow-2xl ring-4 ring-admin-secondary'
                    : 'hover:scale-105 shadow-xl'
                }`}
              >
                <h3 className="text-2xl font-bold text-admin-dark mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-admin-secondary">{plan.price} €</span>
                  <span className="text-gray-600 ml-2">HT</span>
                  <div className="text-sm text-gray-500 mt-2 italic">À partir de</div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{plan.description}</p>
                <div className="border-t border-gray-200 my-6" />
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary w-full justify-center"
                >
                  OBTENIR UN DEVIS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-admin-primary to-admin-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à simplifier votre gestion administrative ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Obtenez un devis personnalisé et découvrez comment nous pouvons vous aider à gagner du temps.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-admin-primary hover:bg-admin-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl group"
            >
              <span>Contactez-nous maintenant</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



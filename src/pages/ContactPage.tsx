import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { submitLead } from '../lib/submitLead';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const hp = String(new FormData(e.currentTarget).get('_hp') ?? '');
      await submitLead('contact', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        ...(hp ? { _hp: hp } : {}),
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Envoi impossible');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 7 56 85 49 89',
      link: 'tel:+33756854989',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@adminsolution.fr',
      link: 'mailto:contact@adminsolution.fr',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '53 rue de la République\n78920 Ecquevilly',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Réponse rapide',
      description: 'Nous vous répondons sous 24h ouvrées',
    },
    {
      icon: MessageSquare,
      title: 'Devis personnalisé',
      description: 'Une proposition adaptée à vos besoins',
    },
    {
      icon: CheckCircle,
      title: 'Sans engagement',
      description: 'Échangeons librement sur votre projet',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-admin-primary to-admin-secondary py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90">
              Parlons de votre projet et découvrons comment nous pouvons vous aider
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-admin-dark mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-admin-primary transition-colors whitespace-pre-line"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-6">
                Demandez votre <span className="text-admin-secondary">devis gratuit</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Nous avons bien reçu votre demande et vous recontacterons très prochainement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors"
                        placeholder="jean.dupont@exemple.fr"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="gestion-administrative">Gestion Administrative</option>
                      <option value="office-management">Office Management</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-admin-primary focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez-nous votre besoin..."
                    />
                  </div>

                  {error && <p className="text-sm text-red-700">{error}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={20} />
                        Envoyer ma demande
                      </span>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              )}
            </div>

            {/* Benefits */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-admin-primary to-admin-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Pourquoi nous contacter ?</h3>
                  <p className="text-white/90 mb-6">
                    Nous sommes à votre écoute pour comprendre vos besoins et vous proposer la solution la plus adaptée.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <Icon className="w-6 h-6 text-admin-accent flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">{benefit.title}</h4>
                            <p className="text-sm text-white/80">{benefit.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-admin-dark mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-semibold">9h - 18h</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Samedi - Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-admin-dark mb-4">
              Vous préférez nous appeler directement ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <a
              href="tel:+33756854989"
              className="inline-flex items-center gap-3 bg-admin-primary hover:bg-admin-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Phone size={24} />
              <span className="text-xl">+33 7 56 85 49 89</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;



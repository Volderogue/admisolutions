import { useMemo, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsArticles } from '../data/newsArticles';

interface ActuPageProps {
  onNavigate: (page: string) => void;
  onOpenArticle: (articleId: string) => void;
}

const ActuPage = ({ onNavigate, onOpenArticle }: ActuPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'Tous' | 'Actus' | 'Équipe'>('Tous');

  const categories = ['Tous', 'Actus', 'Équipe'] as const;

  const filteredArticles = useMemo(() => {
    const source =
      selectedCategory === 'Tous'
        ? newsArticles
        : newsArticles.filter((article) => article.category === selectedCategory);

    return [...source].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);
      const fullYearA = yearA < 100 ? 2000 + yearA : yearA;
      const fullYearB = yearB < 100 ? 2000 + yearB : yearB;
      const dateA = new Date(fullYearA, monthA - 1, dayA).getTime();
      const dateB = new Date(fullYearB, monthB - 1, dayB).getTime();
      return dateB - dateA;
    });
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-admin-primary via-admin-primary/95 to-admin-secondary py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actus</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Retrouvez les dernières actualités Admin Solution, nos conseils et les temps forts de
            l&apos;equipe.
          </p>
        </div>
      </section>

      <section className="py-8 border-b bg-white">
        <div className="container-custom flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedCategory === category
                  ? 'bg-admin-primary text-white border-admin-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-admin-primary hover:text-admin-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const isObatArticle = article.id === '2025-11-11-partenariat-obat';
              return (
                <button
                  key={article.id}
                  onClick={() => onOpenArticle(article.id)}
                  className="text-left bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={article.thumbnail ?? article.images[0]}
                      alt={article.title}
                      className={`w-full h-full object-cover ${
                        isObatArticle ? 'scale-[1.5] origin-center' : ''
                      }`}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-admin-primary/10 text-admin-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-admin-dark mb-2">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-admin-primary font-semibold">
                      Lire l&apos;article
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-14 bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-admin-dark mb-3">
              Besoin d&apos;un accompagnement administratif ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos actus présentent nos expertises, mais chaque structure est unique. Échangeons
              sur vos besoins.
            </p>
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActuPage;

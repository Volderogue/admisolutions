import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Tag,
} from 'lucide-react';
import type { NewsArticle } from '../data/newsArticles';

interface ArticlePageProps {
  article: NewsArticle;
  onBackToActu: () => void;
  onContact: () => void;
}

const ArticlePage = ({ article, onBackToActu, onContact }: ArticlePageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = article.images.length > 1;
  const isObatArticle = article.id === '2025-11-11-partenariat-obat';

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [article.id]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    const intervalId = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % article.images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [article.images.length, hasMultipleImages]);

  const currentImage = article.images[currentImageIndex] ?? article.images[0];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + article.images.length) % article.images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % article.images.length);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-admin-primary via-admin-primary/95 to-admin-secondary text-white">
        <div className="container-custom py-12 md:py-16">
          <button
            onClick={onBackToActu}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Retour aux actualites
          </button>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 mb-4">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag size={16} />
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{article.title}</h1>
            <p className="text-lg md:text-xl text-white/90">{article.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-custom max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 border border-gray-200">
            <img
              src={currentImage}
              alt={`${article.title} - image ${currentImageIndex + 1}`}
              className={`w-full ${isObatArticle ? 'h-[60vh] object-cover scale-110 origin-center' : 'max-h-[80vh] object-contain'}`}
            />

            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                  aria-label="Image precedente"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={22} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {article.images.length}
                </div>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {article.images.map((_, index) => (
                <button
                  key={`${article.id}-dot-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentImageIndex === index
                      ? 'w-8 bg-admin-primary'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Afficher l'image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-8">
        <article className="container-custom max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-8 text-lg">
            {article.content.map((paragraph, index) => (
              <p key={`${article.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>

          {article.externalLink && (
            <div className="mt-8">
              <a
                href={article.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir la ressource associee
                <ExternalLink size={18} />
              </a>
            </div>
          )}
        </article>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-admin-primary to-admin-secondary rounded-3xl p-10 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Vous souhaitez déléguer votre administratif ?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Parlons de vos besoins et construisons un accompagnement adapté à votre organisation.
            </p>
            <button onClick={onContact} className="bg-white text-admin-primary hover:bg-admin-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;

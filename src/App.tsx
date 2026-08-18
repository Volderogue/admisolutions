import { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ClientsPage from './pages/ClientsPage';
import ActuPage from './pages/ActuPage';
import ArticlePage from './pages/ArticlePage';
import { newsArticles } from './data/newsArticles';

type Page = 'home' | 'services' | 'about' | 'contact' | 'clients' | 'actu' | 'article';

const pageHashMap: Record<Exclude<Page, 'article'>, string> = {
  home: '#/',
  services: '#/services',
  about: '#/about',
  contact: '#/contact',
  clients: '#/clients',
  actu: '#/actu',
};

const parseHashRoute = (
  hash: string
): { page: Page; articleId: string | null } => {
  if (!hash || hash === '#') {
    return { page: 'home', articleId: null };
  }

  if (!hash.startsWith('#/')) {
    return { page: 'home', articleId: null };
  }

  const route = hash.slice(2);

  if (route.startsWith('article/')) {
    const articleId = decodeURIComponent(route.replace('article/', '').trim());
    const articleExists = newsArticles.some((article) => article.id === articleId);
    if (articleId && articleExists) {
      return { page: 'article', articleId };
    }
    return { page: 'actu', articleId: null };
  }

  if (route === '' || route === '/') return { page: 'home', articleId: null };
  if (route === 'services') return { page: 'services', articleId: null };
  if (route === 'about') return { page: 'about', articleId: null };
  if (route === 'contact') return { page: 'contact', articleId: null };
  if (route === 'clients') return { page: 'clients', articleId: null };
  if (route === 'actu') return { page: 'actu', articleId: null };

  return { page: 'home', articleId: null };
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  useEffect(() => {
    const applyRouteFromHash = () => {
      if (window.location.hash && !window.location.hash.startsWith('#/')) {
        return;
      }
      const { page, articleId } = parseHashRoute(window.location.hash);
      setCurrentPage(page);
      setSelectedArticleId(articleId);
    };

    applyRouteFromHash();
    window.addEventListener('hashchange', applyRouteFromHash);
    return () => window.removeEventListener('hashchange', applyRouteFromHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedArticleId]);

  const handleNavigate = (page: string) => {
    const targetPage = page as Page;

    if (targetPage === 'article') return;

    const nextHash = pageHashMap[targetPage as Exclude<Page, 'article'>];
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setCurrentPage(targetPage);
      setSelectedArticleId(null);
    }
  };

  const handleOpenArticle = (articleId: string) => {
    const nextHash = `#/article/${encodeURIComponent(articleId)}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setSelectedArticleId(articleId);
      setCurrentPage('article');
    }
  };

  const renderPage = () => {
    const selectedArticle = selectedArticleId
      ? newsArticles.find((article) => article.id === selectedArticleId)
      : null;

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'clients':
        return <ClientsPage onNavigate={handleNavigate} />;
      case 'actu':
        return <ActuPage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
      case 'article':
        if (!selectedArticle) {
          return <ActuPage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
        }
        return (
          <ArticlePage
            article={selectedArticle}
            onBackToActu={() => handleNavigate('actu')}
            onContact={() => handleNavigate('contact')}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-admin-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Aller au contenu principal
      </a>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="contenu-principal" className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;



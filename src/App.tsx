import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Footer, Header, ScrollProgress } from './components/Layout';
import Home from './pages/Home';
import { AboutPage, RegulatoryPage, ServicesPage } from './pages/Company';
import CareerPage from './pages/Career';
import { careerDescription, careerTitle } from './data/career-meta';
import NewsPage from './pages/News';
import { ContactPage, GetAQuotePage } from './pages/Contact';

function AppRoutes() {
  const location = useLocation();
  const career = /^\/career\/?$/i.test(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.title = career ? careerTitle : 'Vision Biomedical Services - Healthcare Technology Management';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      career ? careerDescription : 'Vision Biomedical Services specializes in healthcare technology management.',
    );
  }, [career]);

  if (location.pathname === '/' && /^#\/(?!\/)/.test(location.hash)) {
    return <Navigate to={location.hash.slice(1)} replace />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen overflow-hidden"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/regulatory-compliance" element={<RegulatoryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/career/" element={<CareerPage />} />
          <Route path="/get-a-quote" element={<GetAQuotePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

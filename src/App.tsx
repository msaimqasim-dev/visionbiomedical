import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Footer, Header, ScrollProgress } from './components/Layout';
import Home from './pages/Home';
import { AboutPage, RegulatoryPage, ServicesPage } from './pages/Company';
import CareerPage, { CareerJobPage } from './pages/Career';
import { careerJobs, careerMetadata } from './data/career-meta';
import NewsPage from './pages/News';
import { ContactPage, GetAQuotePage } from './pages/Contact';

function AppRoutes() {
  const location = useLocation();
  const metadata = careerMetadata(location.pathname);
  const title = metadata?.title ?? 'Vision Biomedical Services - Healthcare Technology Management';
  const description = metadata?.description ?? 'Vision Biomedical Services specializes in healthcare technology management.';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);

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
          <Route path={careerJobs.north.path} element={<CareerJobPage jobId="north" />} />
          <Route path={careerJobs.atlanta.path} element={<CareerJobPage jobId="atlanta" />} />
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

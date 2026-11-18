import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Footer, Header, ScrollProgress } from './components/Layout';
import Home from './pages/Home';
import { AboutPage, RegulatoryPage, ServicesPage } from './pages/Company';
import { EquipmentPage, PartsPage } from './pages/Sales';
import NewsPage from './pages/News';
import { ContactPage, GetAQuotePage } from './pages/Contact';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Route path="/sales" element={<Navigate to="/sales/equipment" replace />} />
          <Route path="/sales/equipment" element={<EquipmentPage />} />
          <Route path="/sales/parts" element={<PartsPage />} />
          <Route path="/regulatory-compliance" element={<RegulatoryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/get-a-quote" element={<GetAQuotePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <Header />
      <AppRoutes />
      <Footer />
    </HashRouter>
  );
}

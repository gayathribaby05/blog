import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/theme-provider';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import BreedsPage from '@/pages/BreedsPage';
import BreedDetailPage from '@/pages/BreedDetailPage';
import FunnyDogsPage from '@/pages/FunnyDogsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="breeds" element={<BreedsPage />} />
                <Route path="breeds/:id" element={<BreedDetailPage />} />
                <Route path="funny" element={<FunnyDogsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
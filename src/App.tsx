import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { useContentProtection } from './hooks/useContentProtection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Price } from './pages/Price';
import { System } from './pages/System';
import { Premium } from './pages/Premium';

function App() {
  // 콘텐츠 보호 훅 적용
  useContentProtection();

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-white">
          <Header />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/price" element={<Price />} />
              <Route path="/system" element={<System />} />
              <Route path="/premium" element={<Premium />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

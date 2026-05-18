import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Impact from './pages/Impact'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/portafolio/:slug" element={<PortfolioDetail />} />

        <Route path="/servicios" element={<Services />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/impacto" element={<Impact />} />

        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
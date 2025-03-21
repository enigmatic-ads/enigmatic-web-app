import './App.css'
import Pagetop from './components/Pagetop'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicePage from './pages/services/ServicePage'
import { useEffect } from 'react'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Blog from './pages/blog/Blog'
import BlogPage1 from './pages/blog/blog-pages/BlogPage1'
import BlogPage2 from './pages/blog/blog-pages/BlogPage2'
import BlogPage3 from './pages/blog/blog-pages/BlogPage3'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='website'>
      <div className='wrapper'>
        <Pagetop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/mastering-online-advertising' element={<BlogPage1 />} />
          <Route path='/design-dynamics' element={<BlogPage2 />} />
          <Route path='/guide-to-modern-software-development' element={<BlogPage3 />} />
          <Route path='*' element={<ServicePage />} />
        </Routes>



      </div>
      <Footer />
    </div>
  )
}

export default App

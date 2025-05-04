import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Blog from './components/blog/BlogArchive.jsx';
import SinglePost from './components/blog/SinglePost.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Contact from './components/contact/ContactPage.jsx';
import Copyright from './components/footer/Copyright.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/HomePage.jsx';
import Portfolio from './components/portfolio/PortfolioPage.jsx';
import TeamArchive from './components/team/TeamArchive.jsx';
import TeamMemberBio from './components/team/TeamBio.jsx';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let classes = [];

    if (path === '/') {
      classes.push('home');
    } else {
      const cleanPath = path.replace(/^\/|\/$/g, '');
      const parts = cleanPath.split('/');

      if (parts.length > 0) {
        classes.push(parts[0]); // top-level folder like "blog" or "team"
        if (parts.length === 1) {
          if (parts[0] === 'blog' || parts[0] === 'team') {
            classes.push(`${parts[0]}-archive`);
          }
        }
      }

      if (parts.length > 1) {
        classes.push(`single-${parts[0]}`);
        if (parts.length > 2) {
          classes.push('child');
        }
      }
    }

    document.body.className = ''; // reset
    classes.forEach((cls) => document.body.classList.add(cls));
  }, [location.pathname]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<TeamArchive />} />
        <Route path="/team/:slug" element={<TeamMemberBio />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

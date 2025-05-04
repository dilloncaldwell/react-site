import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Section from '../common/Section';
import './Navbar.css';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCurrent = (path) => location.pathname === `${base}${path}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <Section baseId="primary-nav">
      <nav id="menu-nav" className={`section ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Menu Items */}
        <ul id="primary-nav-menu" className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className={`menu-item ${isCurrent('/') ? 'current-menu-item' : ''}`}>
            <Link to="/" aria-current={isCurrent('/') ? 'page' : undefined}>
              Home
            </Link>
          </li>
          <li className={`menu-item ${isCurrent('/portfolio') ? 'current-menu-item' : ''}`}>
            <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className={`menu-item ${isCurrent('/team') ? 'current-menu-item' : ''}`}>
            <Link to="/team" onClick={() => setIsMobileMenuOpen(false)}>
              Team
            </Link>
          </li>
          <li className={`menu-item ${isCurrent('/blog') ? 'current-menu-item' : ''}`}>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className={`menu-item ${isCurrent('/contact') ? 'current-menu-item' : ''}`}>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
}

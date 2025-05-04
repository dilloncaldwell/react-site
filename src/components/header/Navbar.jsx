import { Link, useLocation } from 'react-router-dom';
import Section from '../common/Section';

export default function Navbar() {
  const location = useLocation();

  return (
    <Section baseId="primary-nav">
      <nav id="primary-nav" className="section">
        <ul id="primary-nav-menu" className="menu">
          <li className={`menu-item ${location.pathname === '/' ? 'current-menu-item' : ''}`}>
            <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Home
            </Link>
          </li>
          <li className={`menu-item ${location.pathname === '/portfolio' ? 'current-menu-item' : ''}`}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/team' ? 'current-menu-item' : ''}`}>
            <Link to="/team">Team</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/blog' ? 'current-menu-item' : ''}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/contact' ? 'current-menu-item' : ''}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
}

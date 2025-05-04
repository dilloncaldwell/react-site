import { Link, useLocation } from 'react-router-dom';
import Section from '../common/Section';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Navbar() {
  const location = useLocation();
  const isCurrent = (path) => location.pathname === `${base}${path}`;

  return (
    <Section baseId="primary-nav">
      <nav id="primary-nav" className="section">
        <ul id="primary-nav-menu" className="menu">
          <li className={`menu-item ${isCurrent('/') ? 'current-menu-item' : ''}`}>
            <Link to={`${base}/`} aria-current={isCurrent('/') ? 'page' : undefined}>
              Home
            </Link>
          </li>
          <li className={`menu-item ${isCurrent('/portfolio') ? 'current-menu-item' : ''}`}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={`menu-item ${isCurrent('/team') ? 'current-menu-item' : ''}`}>
            <Link to="/team">Team</Link>
          </li>
          <li className={`menu-item ${isCurrent('/blog') ? 'current-menu-item' : ''}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={`menu-item ${isCurrent('/contact') ? 'current-menu-item' : ''}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
}

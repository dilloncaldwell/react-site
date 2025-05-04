import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Section from '../common/Section';
import Navbar from './Navbar';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const logo = `${import.meta.env.BASE_URL}assets/images/react.svg`;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const width = window.innerWidth;
      const isHome = document.body.classList.contains('home');
      const height = isHome ? 0 : 0;
      const shouldBeSticky = y > height && width >= 1250;
      setIsSticky(shouldBeSticky);

      if (!isHome) {
        document.body.style.paddingTop = '0px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll(); // run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]); // recheck sticky when route changes

  return (
    <Section baseId="header" className={isSticky ? 'sticky' : ''} role="banner">
      <Section.Row collapse={1200}>
        <Section.Cell span={7}>
          <div className="main-logo">
            <Link to="/">
              <img id="site-logo" className="logo" src={logo} alt="Site Logo" width="80" height="80" />
            </Link>
          </div>
        </Section.Cell>
        <Section.Cell span={17}>
          <div className="desktop-view">
            <div className="header-top">
              <p className="consult">Free Consultation</p>
              <div className="phone">
                <a href="tel:1234567890">
                  <i className="fa-solid fa-phone"></i>
                  123-456-7890
                </a>
              </div>
            </div>
          </div>
          <Navbar />
        </Section.Cell>
      </Section.Row>
    </Section>
  );
}

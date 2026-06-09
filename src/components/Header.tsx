import { useEffect, useState } from 'react';
import Logo from './Logo.tsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
      });
    };
  });

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__logo-wrapper">
        <Logo logoWidth="120px" logoFill={isScrolled ? "#00707e" : "#fff"} />
      </div>
    </header>
  )
}

export default Header
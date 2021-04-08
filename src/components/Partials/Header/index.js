import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HeaderArea } from './style';

const Component = () => {
  const location = useLocation();

  const [path, setPath] = useState('');
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState('none');
  const [responsiveMenuGoingOut, setResponsiveMenuGoingOut] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
    setResponsiveMenuGoingOut(true);
      setTimeout(() => {
        setDisplayHamburgerMenu('none');
      }, 290);
  }, [location]);

  const handleToggleHamburger = () => {
    if (displayHamburgerMenu === 'none') {
      setResponsiveMenuGoingOut(false);
      setDisplayHamburgerMenu('flex');
    } else {
      setResponsiveMenuGoingOut(true);
      setTimeout(() => {
        setDisplayHamburgerMenu('none');
      }, 290);
    };
  };

  const menus = [
    { path: '/', name: 'Home' },
    { path: '/sobre', name: 'Sobre' },
    { path: '/portfolio', name: 'Portfólio' },
    { path: '/tecnologias', name: 'Tecnologias' },
    { path: '/contato', name: 'Contato' },
  ];

  return (
    <HeaderArea displayHamburgerMenu={displayHamburgerMenu}>
      <div className="container">
        <div className="menu--background" onClick={handleToggleHamburger}></div>
        <div className="hamburger--menu" onClick={handleToggleHamburger}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
        <nav>
          <Link to="/">Christopher</Link>
          <ul className={responsiveMenuGoingOut ? 'menu--goingOut' : undefined}>
            {menus.map((item, key) => (
              <li key={key}>
                <Link
                  to={item.path}
                  className={path === item.path ? 'active' : undefined}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1k1EUQZoMKa3GolKXKMvIFa72ht3hVc74/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Currículo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Component;
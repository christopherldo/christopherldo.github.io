import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { use100vh } from 'react-div-100vh';
import { HeaderArea } from './style';

const Component = () => {
  const location = useLocation();
  const heightVH = use100vh();

  const [path, setPath] = useState('');
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState('none');
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    setPath(location.pathname);
    setDisplayHamburgerMenu('none');
  }, [location]);

  useEffect(() => {
    setMenuHeight(heightVH);
  }, [heightVH]);

  const handleToggleHamburger = () => {
    if (displayHamburgerMenu === 'none') {
      setDisplayHamburgerMenu('flex');
    } else {
      setDisplayHamburgerMenu('none');
    };
  };

  return (
    <HeaderArea
      displayHamburgerMenu={displayHamburgerMenu}
      menuHeight={menuHeight}
    >
      <div className="container">
        <div className="hamburger--menu" onClick={handleToggleHamburger}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
        <nav>
          <Link to="/">Christopher</Link>
          <ul>
            <li>
              <Link to="/" className={path === '/' ? 'active' : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={path === '/sobre' ? 'active' : undefined}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={path === '/portfolio' ? 'active' : undefined}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/tecnologias" className={path === '/tecnologias' ? 'active' : undefined}>
                Tecnologias
              </Link>
            </li>
            <li>
              <Link to="/contato" className={path === '/contato' ? 'active' : undefined}>
                Contato
              </Link>
            </li>
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
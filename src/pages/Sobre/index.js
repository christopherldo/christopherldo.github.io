import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { PageArea } from './style';

const Page = () => {
  const history = useHistory();
  const contentRef = useRef(null);

  const [opacityContent, setOpacityContent] = useState(0);

  useEffect(() => {
    setOpacityContent(1);
  }, []);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNextPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/portfolio');
  };

  const handlePreviousPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/');
  };

  const handleScrollOnContent = event => {
    const scrollNumber = event.deltaY;

    if (scrollNumber > 0) {
      if (window.innerHeight + contentRef.current.scrollTop - contentRef.current.scrollHeight === 75) {
        handleNextPage();
      };
    } else {
      if (contentRef.current.scrollTop === 0) {
        handlePreviousPage();
      };
    };
  };

  const handlersSwipe = useSwipeable({
    onSwipedRight: () => handlePreviousPage(),
    onSwipedLeft: () => handleNextPage(),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <PageArea contentOpacity={opacityContent}
      onWheel={handleScrollOnContent}
      ref={contentRef}
    >
      <div className="page--content" {...handlersSwipe}>
        <div className="me">
          <div className="img">
            <img src="./images/profile_pic.jpg" alt="Perfil" />
          </div>
          <div className="title">
            <h1>Sobre</h1>
          </div>
        </div>
        <div className="about">
          <div className="about-txt">
            <p>
              Desde pequeno apaixonado por tecnologia. Considerado nerd por muitos amigos,
              sempre me interessei pela área da programação, e tive facilidade para mexer
              em computadores. Me descobri na área do desenvolvimento por volta de 2013,
              quando começou a febre do HTML5 e CSS3, mas não sabia programar. Até mesmo
              cheguei a odiar JavaScript. Hoje sou programador para a web e arranho também
              no mundo mobile.
            </p>
          </div>
        </div>
      </div>
      <div className="target--arrows">
        <div className="previous" onClick={handlePreviousPage}>
          &lt;- Home
        </div>
        <div className="next" onClick={handleNextPage}>
          Portfólio -&gt;
        </div>
      </div>
    </PageArea>
  );
};

export default Page;
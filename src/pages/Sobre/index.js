import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import { PageArea } from './style';

const Page = () => {
  const history = useHistory();

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
      handleNextPage();
    } else {
      handlePreviousPage();
    };
  };

  const handlersSwipe = useSwipeable({
    onSwipedRight: () => handlePreviousPage(),
    onSwipedLeft: () => handleNextPage(),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <PageArea contentOpacity={opacityContent}>
      <div
        className="page--content"
        onWheel={handleScrollOnContent}
        {...handlersSwipe}
      >
        <div className="me">
          <div className="img">
            <img src="./images/profile_pic.jpg" alt="Perfil"/>
          </div>
          <div className="title">
            <h1>Sobre</h1>
          </div>
        </div>
        <div className="about">
          <div className="about-txt">
            <p>
              Since beginning my journey as a freelance designer nearly 10 years ago,
              I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products for
              both business and consumer use. I'm quietly confident, naturally curious,
              and perpetually working on improving my chops one design problem at a time.
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
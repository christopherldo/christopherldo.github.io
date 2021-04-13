import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import { PageArea } from './style';

const Page = () => {
  const history = useHistory();
  const contentRef = useRef(null);

  const [opacityContent, setOpacityContent] = useState(0);

  useEffect(() => {
    setOpacityContent(1);
  }, []);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handlePreviousPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/tecnologias');
  };

  const handleScrollOnContent = event => {
    const scrollNumber = event.deltaY;

    if (scrollNumber < 0) {
      if (contentRef.current.scrollTop === 0) {
        handlePreviousPage();
      };
    };
  };

  const handlersSwipe = useSwipeable({
    onSwipedRight: () => handlePreviousPage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <PageArea
      contentOpacity={opacityContent}
      onWheel={handleScrollOnContent}
      ref={contentRef}
    >
      <div
        className="page--content"
        {...handlersSwipe}
      >
        <h1>Página CONTATO</h1>
      </div>
      <div className="target--arrows">
        <div className="previous" onClick={handlePreviousPage}>
          &lt;- Tecnologias
        </div>
      </div>
    </PageArea>
  );
};

export default Page;
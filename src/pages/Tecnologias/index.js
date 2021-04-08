import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
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
    history.push('/contato');
  };

  const handlePreviousPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/portfolio');
  };

  const handleScrollOnContent = event => {
    const scrollNumber = event.deltaY;

    if (scrollNumber > 0) {
      handleNextPage();
    } else {
      handlePreviousPage();
    };
  };

  return (
    <PageArea contentOpacity={opacityContent}>
      <div className="page--content" onWheel={handleScrollOnContent}>
        <h1>Página TECNOLOGIAS</h1>
      </div>
      <div className="target--arrows">
        <div className="previous" onClick={handlePreviousPage}>
          &lt;- Portfólio
        </div>
        <div className="next" onClick={handleNextPage}>
          Contato -&gt;
        </div>
      </div>
    </PageArea>
  );
};

export default Page;
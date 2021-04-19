import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { AiOutlineStar } from 'react-icons/ai';
import { PageArea } from './style';
import { getMostRatedRepos } from '../../helpers/GithubAPI';

const Page = () => {
  const history = useHistory();
  const contentRef = useRef(null);

  const [opacityContent, setOpacityContent] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getRepos = async () => {
      const json = await getMostRatedRepos();
      setProjectList(json);
      setLoading(false);
    };
    setOpacityContent(1);
    
    setTimeout(getRepos, 500);
  }, []);

  const fakeMap = [1, 2, 3, 4, 5, 6, 7, 8];

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNextPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/tecnologias');
  };

  const handlePreviousPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/sobre');
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
    <PageArea
      contentOpacity={opacityContent}
      onWheel={handleScrollOnContent}
      ref={contentRef}
    >
      <div className="page--content" {...handlersSwipe}>
        {
          loading 
          ? fakeMap.map((item, key) => (
              <div key={key} className="project--area loading"></div>
            ))
          : projectList.map((item, key) => (
            <a className="project--area" key={key} href={item.html_url} target="_blank" rel="noreferrer">
              <div className="top">
                <div className="title">
                  {item.name}
                </div>
              </div>
              <div className="desc">
                {item.description}
              </div>
              <div className="bottom">
                <div className="language">
                  {item.language}
                </div>
                <div className="stars">
                  {item.stargazers_count}
                  <AiOutlineStar />
                </div>
              </div>
            </a>
          ))
        }
      </div>
      <div className="target--arrows">
        <div className="previous" onClick={handlePreviousPage}>
          &lt;- Sobre
        </div>
        <div className="next" onClick={handleNextPage}>
          Tecnologias -&gt;
        </div>
      </div>
    </PageArea>
  );
};

export default Page;
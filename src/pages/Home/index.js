import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitch } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { PageArea } from './style';

export const introNotViewed = () => {
  const cookie = Cookies.get('introAlreadyViewed');
  return cookie ? false : true;
};

const Page = () => {
  const history = useHistory();

  const [showIntro, setShowIntro] = useState(introNotViewed());
  const [messageIntro, setMessageIntro] = useState('');
  const [opacityIntro, setOpacityIntro] = useState(1);
  const [opacityContent, setOpacityContent] = useState(0);

  useEffect(() => {
    const txt = [
      'Olá...',
      'Boas-vindas! :)',
      'É um prazer ter você aqui <3',
    ];

    if (showIntro) {
      let i = 0;
      let c = 0;
      const speed = 100;

      const typeWriter = async () => {
        if (txt[c]) {
          if (i <= txt[c].length) {
            setMessageIntro(txt[c].substr(0, i));
            i++;
          } else {
            await delay(2000);
            c++;
            i = 0;
            if (txt[c]) {
              setMessageIntro('');
            };
          };
          setTimeout(typeWriter, speed);
        } else {
          setOpacityIntro(0);
          await delay(550);
          setShowIntro(false);
          setIntroCookie();
          return;
        };
      };

      typeWriter();
    } else {
      setOpacityContent(1);
    };
  }, [showIntro]);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const setIntroCookie = () => {
    Cookies.set('introAlreadyViewed', true);
  };

  const handleSkipIntroduction = async () => {
    setOpacityIntro(0);
    await delay(550);
    setShowIntro(false);
    setIntroCookie();
    return;
  };
  
  const handleNextPage = async () => {
    setOpacityContent(0);
    await delay(600);
    history.push('/sobre');
  };

  const handleScrollOnContent = event => {
    const scrollNumber = event.deltaY;

    if(scrollNumber > 0) {
      handleNextPage();
    };
  };

  const handlersSwipe = useSwipeable({
    onSwipedLeft: () => handleNextPage(),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <PageArea
      introOpacity={opacityIntro}
      contentOpacity={opacityContent}
    >
      {showIntro ?
        <div className="starting--messages">
          <div className="skip--button" onClick={handleSkipIntroduction}>
            Pular &gt;&gt;
          </div>
          <div className="message">{messageIntro}</div>
        </div>
        :
        <>
        <div
          className="page--content"
          onWheel={handleScrollOnContent}
          {...handlersSwipe}
        >
          <div className="name">
            <h1>Christopher Leonardo</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="image">

          </div>
          <div className="socials">
            <div className="github">
              <a href="https://github.com/christopherldo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/christopher-de-oliveira/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/ldochristopher"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="twitch">
              <a href="https://www.twitch.tv/christopherldo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitch"
              >
                <FaTwitch />
              </a>
            </div>
          </div>
        </div>
        <div className="target--arrows">
          <div className="next" onClick={handleNextPage}>
            Sobre -&gt;
          </div>
        </div>
        </>
      }
    </PageArea>
  );
};

export default Page;
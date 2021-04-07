import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: #fff;
  }
`;

export const PageArea = styled.main`
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 75px);
  margin: auto;
  overflow: hidden;

  .starting--messages {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out 0s;
    opacity: ${props => props.introOpacity};

    .skip--button {
      color: #B64FC8;
      position: absolute;
      bottom: 50px;
      cursor: pointer;
      padding-bottom: 5px;
      border-bottom: 2px solid #B64FC8;
    };

    .message {
      color: #fff;
      font-size: 50px;
      height: 100px;
      text-align: center;

      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        margin-top: 10px;
        margin-left: 5px;
        height: 45px;
        width: 3px;
        animation: ${blink} 1s linear infinite;
      };
    };
  };

  .page--content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    opacity: ${props => props.contentOpacity};
    transition: all 0.5s ease-in-out 0s;

    @media(max-width: 1024px) {
      padding: 0 20px;
    };

    .name {
      grid-row: span 1;
      grid-column: span 2;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      padding-bottom: 50px;
      color: #fff;

      @media(max-width: 900px) {
        grid-column: span 4;
        align-items: center;
      };

      h1 {
        max-width: 430px;
        display: inline;
        font-size: 40px;
        padding: 5px 0;
        border-bottom: 2px solid #B64FC8;

        @media(max-width: 500px) {
          font-size: 30px;
        };

        @media(max-width: 400px) {
          font-size: 25px;
        };

        @media(max-width: 280px) {
          font-size: 20px;
        };
      };

      h2 {
        margin-top: 5px;
        font-size: 20px;
      };
    };

    .image {
      height: 90%;
      width: 90%;
      margin: auto;
      border-top-left-radius: 30px;
      border-bottom-right-radius: 30px;
      border: 2px solid #fff;
      grid-row: span 2;
      grid-column: span 2;
      background: url('./images/main.jpg');
      background-size: cover;
      background-position: center;

      @media(max-width: 900px) {
        grid-column: span 3;
        align-items: center;
      };
    };

    .socials {
      grid-column: span 1;
      display: flex;
      padding-top: 20px;

      @media(max-width: 768px) {
        flex-flow: column;
        align-items: flex-end
      };

      svg {
        margin-right: 15px;
        width: 30px;
        height: 30px;
        fill: #fff;
        transition: all 0.2s ease-in-out 0s;

        @media(max-width: 768px) {
          margin-top: 10px;
        };

        &:hover {
          fill: #EA80FC;
          transform: scale(1.3) translate(5%);
        };
      };
    };
  };

  .target--arrows {
    .next {
      padding: 5px;
      position: absolute;
      top: 50%;
      right: 50px;
      color: #03DAC6;
      font-size: 14px;
      cursor: pointer;
      font-style: italic;
      border-bottom: 1px solid transparent;
      transition: all 0.2s ease-in-out 0s;

      &:hover {
        border-color: #03DAC6;
      };
    };
  };
`;

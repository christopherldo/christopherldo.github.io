import styled, { keyframes } from 'styled-components';

const fromLeft = keyframes`
  from {
    margin-left: -1000px;
  }

  to {
    margin-left: 0;
  }
`;

const fromRight = keyframes`
  from {
    margin-right: -1000px;
  }

  to {
    margin-right: 0;
  }
`;

const fromBottom = keyframes`
  from {
    margin-bottom: -1000px;
  }

  to {
    margin-bottom: 0;
  }
`;

export const PageArea = styled.main`
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 75px);
  margin: auto;
  overflow: hidden;

  @media(max-width: 1000px) {
    overflow-y: auto;
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

    @media(max-width: 768px) {
      display: flex;
      flex-flow: column;
    };

    .me {
      grid-column: span 2;
      grid-row: span 2;
      display: flex;
      flex-flow: column;
      align-items: center;

      @media(max-width: 768px) {
        flex: 1;
        align-items: center;
      };

      .title {
        flex: 2;
        display: flex;
        width: 100%;
        animation: ${fromBottom} 0.5s ease-in-out;

        @media(max-width: 768px) {
          flex: unset;
          display: inline;
          animation: ${fromLeft} 0.5s ease-in-out;
        };

        h1 {
          padding-top: 20px;
          width: 90%;
          background-color: #3700b3;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          color: #fff;
          font-weight: bold;
          text-align: center;

          @media(max-width: 768px) {
            margin-top: 10px;
            margin-left: -20px;
            padding: 5px;
            font-size: 20px;
            border-top-left-radius: 0;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
          };
        };
      };

      .img {
        grid-column: span 2;
        display: flex;
        flex: 3;
        padding: 50px;
        justify-content: center;
        animation: ${fromLeft} 0.5s ease-in-out;

        @media(max-width: 768px) {
          flex: unset;
          padding: 30px;
        };

        img {
          display: block;
          height: 100%;
          max-width: 270px;
          max-height: 270px;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
        };
      };
    };

    .about {
      grid-column: span 2;
      grid-row: span 2;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .about-txt {
        width: 100%;
        animation: ${fromRight} 0.5s ease-in-out;
      };

      p {
        display: inline;
        background-color: #FF4181;
        margin-bottom: auto;
        padding: 5px 0;
        line-height: 2.5em;
        font-size: 20px;
        color: #000;  

        @media(max-width: 1100px) {
          line-height: 2em;
        };

        @media(max-width: 900px) {
          font-size: 18px;
        };

        @media(max-width: 768px) {
          text-align: center;
        };
      };
    }
  };

  .target--arrows {
    .next,
    .previous {
      padding: 5px;
      position: absolute;
      top: 50%;
      font-size: 14px;
      cursor: pointer;
      font-style: italic;
      color: #fff;
      border-bottom: 1px solid #fff;
      transition: all 0.2s ease-in-out 0s;

      &:hover {
        color: #03DAC6;
        border-color: #03DAC6;
      };
    };

    .previous {
      left: 50px;

      @media(max-width: 768px) {
        left: 0px;
      };
    };

    .next {
      right: 50px;

      @media(max-width: 768px) {
        right: 0px;
      };
    };
  };
`;

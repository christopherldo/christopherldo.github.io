import styled, {
  keyframes
} from 'styled-components';

const fake = keyframes `
  0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

export const PageArea = styled.main `
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 75px);
  margin: auto;
  overflow-y: auto;
  
  .page--content {
    width: 100%;
    height: 100%;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    opacity: ${props => props.contentOpacity};
    transition: all 0.5s ease-in-out 0s;
    color: #fff;

    @media(max-width: 1024px) {
      padding: 0 20px;
    };

    @media(max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    };

    @media(max-width: 525px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(8, 1fr);
    };

    .project--area {
      width: 90%;
      height: 225px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      margin: 10px auto;
      padding: 20px;
      background-color: #222;
      color: #fff;
      text-decoration: none;
      border-radius: 20px;
      transition: all 0.2s ease-in-out 0s;

      @media(max-width: 768px) {
        height: 325px;  
      };

      @media(max-width: 525px) {
        height: 300px;  
      };

      @media(max-width: 320px) {
        height: 250px;
      };

      &:hover{
        background-color: #333;
        transform: scale(1.03);
      };

      .top {
        background-color: #372265;
        word-break: break-all;
        padding: 10px 5px;
        text-align: center;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 14px;
      };

      .desc {
        font-size: 14px;
        line-height: 1.5em;
        text-align: center;
      };

      .bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        svg {
          fill: #f1f13d;
          margin-left: 5px;
        };
      };
    };

    .loading {
      animation: ${fake} 1.5s infinite ease-in-out;
    };
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
import styled from 'styled-components';

export const PageArea = styled.main`
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 75px);
  margin: auto;
  overflow: hidden;

  .page--content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    opacity: ${props => props.contentOpacity};
    transition: all 0.5s ease-in-out 0s;
    color: #fff;

    @media(max-width: 1024px) {
      padding: 0 20px;
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

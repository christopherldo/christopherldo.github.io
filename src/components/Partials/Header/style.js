import styled, { keyframes } from 'styled-components';

const fromLeft = keyframes`
  from {
    left: -1000px
  }

  to {
    left: 0;
  }
`;

export const HeaderArea = styled.header`
  width: 100vw;
  background-color: #1F1F1F;
  height: 75px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);

  @media(max-width: 1024px) {
    padding: 0 20px;
  };

  .container {
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;

    .hamburger--menu {
      display: none;
      flex-flow: column;
      width: 40px;
      margin-right: 20px;
      justify-content: space-evenly;
      height: 100%;
      padding: 10px 0;
      cursor: pointer;

      &:hover {
        .row {
          background-color: #B64FC8;
        };
      };

      .row {
        background-color: #fff;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out 0s;
      };
    };

    @media(max-width: 768px) {
      .hamburger--menu {
        display: flex;
      };
    };

    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      > a {
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        font-size: 26px;
        letter-spacing: -1px;
      };

      a {
        text-decoration: none;
      };

      ul, li {
        list-style: none;
      };

      ul {
        display: flex;

        @media(max-width: 768px) {
          display: ${props => props.displayHamburgerMenu};
          position: absolute;
          bottom: 0;
          left: 0;
          flex-flow: column;
          border-top: 2px solid #B64FC8;
          height: calc(100vh - 75px);
          background-color: #1F1F1F;
          min-width: 70%;
          box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
          animation: ${fromLeft} 0.3s ease-in-out 0s;
          z-index: 2;
        };

        &:hover {
          a {
            color: #9e9e9e;
          };
        };

        li {
          margin: 5px;

          @media(max-width: 850px) {
            margin: 2px;
          };

          @media(max-width: 768px) {
            margin: 5px 0;
          };

          a {
            padding: 25px 10px;
            color: #fff;
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease-in-out 0s;

            @media(max-width: 768px) {
              display: flex;
              padding: 10px 20px;
              border-width: 1px;
            };

            &:hover {
              color: #fff;
            };
          };

          a.active {
            border-color: #fff;
          };
        };
      };
    };
  };
`;
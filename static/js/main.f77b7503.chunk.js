(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,l,d,p,u,x,f,h,m,b,j=t(1),g=t.n(j),O=t(26),w=t.n(O),v=(t(34),t(13)),y=t(3),k=t(4),N=k.a.div(i||(i=Object(y.a)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: #121212;\n"]))),C=t(0),S=function(n){return Object(C.jsx)(N,{children:n.children})},T=t(7),z=t(5),D=Object(k.b)(a||(a=Object(y.a)(["\n  from {\n    left: -1000px\n  }\n\n  to {\n    left: 0;\n  }\n"]))),F=Object(k.b)(r||(r=Object(y.a)(["\n  from {\n    left: 0px\n  }\n\n  to {\n    left: -1000px;\n  }\n"]))),A=k.a.header(o||(o=Object(y.a)(["\n  width: 100vw;\n  background-color: #1F1F1F;\n  height: 75px;\n  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);\n\n  @media(max-width: 1024px) {\n    padding: 0 20px;\n  };\n\n  .container {\n    max-width: 1000px;\n    margin: auto;\n    height: 100%;\n    display: flex;\n\n    .menu--background {\n      display: none;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 75px;\n      left: 0;\n      z-index: 1;\n      background-color: rgba(0, 0, 0, 0.5);\n\n      @media(max-width: 768px) {\n          display: ",";\n      };\n    };\n\n    .hamburger--menu {\n      display: none;\n      flex-flow: column;\n      width: 40px;\n      margin-right: 20px;\n      justify-content: space-evenly;\n      height: 100%;\n      padding: 10px 0;\n      cursor: pointer;\n\n      &:hover {\n        .row {\n          background-color: #B64FC8;\n        };\n      };\n\n      .row {\n        background-color: #fff;\n        width: 100%;\n        height: 2px;\n        transition: all 0.2s ease-in-out 0s;\n      };\n    };\n\n    @media(max-width: 768px) {\n      .hamburger--menu {\n        display: flex;\n      };\n    };\n\n    nav {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      \n      > a {\n        text-transform: uppercase;\n        color: #fff;\n        font-weight: bold;\n        font-size: 26px;\n        letter-spacing: -1px;\n      };\n\n      a {\n        text-decoration: none;\n      };\n\n      ul, li {\n        list-style: none;\n      };\n\n      .menu--goingOut {\n        animation: "," 0.3s ease-in-out 0s;\n      };\n\n      ul {\n        display: flex;\n\n        @media(max-width: 768px) {\n          display: ",";\n          position: absolute;\n          top: 75px;\n          left: 0;\n          flex-flow: column;\n          border-top: 2px solid #B64FC8;\n          height: 100%;\n          background-color: #1F1F1F;\n          min-width: 70%;\n          box-shadow: 0 2px 4px rgb(0 0 0 / 50%);\n          animation: "," 0.3s ease-in-out 0s;\n          z-index: 2;\n        };\n\n        &:hover {\n          a {\n            color: #9e9e9e;\n          };\n        };\n\n        li {\n          margin: 5px;\n\n          @media(max-width: 850px) {\n            margin: 2px;\n          };\n\n          @media(max-width: 768px) {\n            margin: 5px 0;\n          };\n\n          a {\n            padding: 25px 10px;\n            color: #fff;\n            border-bottom: 2px solid transparent;\n            transition: all 0.2s ease-in-out 0s;\n\n            @media(max-width: 768px) {\n              display: flex;\n              padding: 10px 20px;\n              border-width: 1px;\n            };\n\n            &:hover {\n              color: #fff;\n            };\n          };\n\n          a.active {\n            border-color: #fff;\n          };\n        };\n      };\n    };\n  };\n"])),(function(n){return n.displayHamburgerMenu}),F,(function(n){return n.displayHamburgerMenu}),D),E=function(){var n=Object(z.g)(),e=Object(j.useState)(""),t=Object(T.a)(e,2),i=t[0],a=t[1],r=Object(j.useState)("none"),o=Object(T.a)(r,2),c=o[0],s=o[1],l=Object(j.useState)(!1),d=Object(T.a)(l,2),p=d[0],u=d[1];Object(j.useEffect)((function(){a(n.pathname),u(!0),setTimeout((function(){s("none")}),290)}),[n]);var x=function(){"none"===c?(u(!1),s("flex")):(u(!0),setTimeout((function(){s("none")}),290))};return Object(C.jsx)(A,{displayHamburgerMenu:c,children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"menu--background",onClick:x}),Object(C.jsxs)("div",{className:"hamburger--menu",onClick:x,children:[Object(C.jsx)("div",{className:"row"}),Object(C.jsx)("div",{className:"row"}),Object(C.jsx)("div",{className:"row"})]}),Object(C.jsxs)("nav",{children:[Object(C.jsx)(v.b,{to:"/",children:"Christopher"}),Object(C.jsxs)("ul",{className:p?"menu--goingOut":void 0,children:[[{path:"/",name:"Home"},{path:"/sobre",name:"Sobre"},{path:"/portfolio",name:"Portf\xf3lio"},{path:"/tecnologias",name:"Tecnologias"},{path:"/contato",name:"Contato"}].map((function(n,e){return Object(C.jsx)("li",{children:Object(C.jsx)(v.b,{to:n.path,className:i===n.path?"active":void 0,children:n.name})},e)})),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://drive.google.com/file/d/1k1EUQZoMKa3GolKXKMvIFa72ht3hVc74/view?usp=sharing",target:"_blank",rel:"noreferrer",children:"Curr\xedculo"})})]})]})]})})},P=k.a.div(c||(c=Object(y.a)([""]))),L=function(n){return Object(C.jsx)(P,{children:n.child})},M=t(9),B=t(2),H=t.n(B),I=t(8),W=t(24),_=t.n(W),R=t(19),Y=t(14),q=Object(k.b)(s||(s=Object(y.a)(["\n  from, to {\n    background-color: transparent;\n  }\n  50% {\n    background-color: #fff;\n  }\n"]))),G=k.a.main(l||(l=Object(y.a)(["\n  max-width: 1000px;\n  width: 100%;\n  height: calc(100vh - 75px);\n  margin: auto;\n  \n  @media(max-width: 1000px) {\n    overflow-y: auto;\n  };\n\n  .starting--messages {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.5s ease-in-out 0s;\n    opacity: ",";\n\n    .skip--button {\n      color: #B64FC8;\n      position: absolute;\n      bottom: 50px;\n      cursor: pointer;\n      padding-bottom: 5px;\n      border-bottom: 2px solid #B64FC8;\n    };\n\n    .message {\n      padding: 0 20px;\n      color: #fff;\n      font-size: 50px;\n      text-align: center;\n\n      &:after {\n        content: '';\n        display: inline-block;\n        position: absolute;\n        margin-top: 10px;\n        margin-left: 5px;\n        height: 45px;\n        width: 3px;\n        animation: "," 1s linear infinite;\n      };\n    };\n  };\n\n  .page--content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    opacity: ",";\n    transition: all 0.5s ease-in-out 0s;\n\n    @media(max-width: 1024px) {\n      padding: 0 20px;\n    };\n\n    .name {\n      grid-row: span 1;\n      grid-column: span 2;\n      display: flex;\n      flex-flow: column;\n      justify-content: flex-end;\n      padding-bottom: 50px;\n      color: #fff;\n\n      @media(max-width: 900px) {\n        grid-column: span 4;\n        justify-content: center;\n        align-items: center;\n        padding-bottom: 0;\n      };\n\n      h1 {\n        max-width: 430px;\n        display: inline;\n        font-size: 40px;\n        padding: 5px 0;\n        border-bottom: 2px solid #B64FC8;\n\n        @media(max-width: 500px) {\n          font-size: 30px;\n        };\n\n        @media(max-width: 400px) {\n          font-size: 25px;\n        };\n\n        @media(max-width: 280px) {\n          font-size: 20px;\n        };\n      };\n\n      h2 {\n        margin-top: 5px;\n        font-size: 20px;\n      };\n    };\n\n    .image {\n      height: 90%;\n      width: 90%;\n      margin: auto;\n      border-top-left-radius: 30px;\n      border-bottom-right-radius: 30px;\n      border: 2px solid #fff;\n      grid-row: span 2;\n      grid-column: span 2;\n      background: url('./images/main.jpg');\n      background-size: cover;\n      background-position: center;\n\n      @media(max-width: 900px) {\n        grid-column: span 3;\n        align-items: center;\n      };\n    };\n\n    .socials {\n      grid-column: span 1;\n      display: flex;\n      padding-top: 20px;\n      padding-left: 2px;\n\n      > div {\n        display: inline-flex;\n        margin-right: 15px;\n\n        @media(max-width: 768px) {\n          margin-top: 10px;\n        };\n      };\n\n      @media(max-width: 768px) {\n        flex-flow: column;\n        align-items: flex-end\n      };\n\n      a {\n        width: 30px;\n        height: 30px;\n      };\n\n      svg {\n        width: 30px;\n        height: 30px;\n        fill: #fff;\n        transition: all 0.2s ease-in-out 0s;\n\n        &:hover {\n          fill: #EA80FC;\n          transform: scale(1.3) translate(5%);\n        };\n      };\n    };\n  };\n\n  .target--arrows {\n    .next {\n      padding: 5px;\n      position: absolute;\n      top: 50%;\n      right: 50px;\n      font-size: 14px;\n      cursor: pointer;\n      font-style: italic;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s ease-in-out 0s;\n\n      &:hover {\n        color: #03DAC6;\n        border-color: #03DAC6;\n      };\n\n      @media(max-width: 768px) {\n        right: 0px;\n      };\n    };\n  };\n"])),(function(n){return n.introOpacity}),q,(function(n){return n.contentOpacity})),J=function(){var n=Object(z.f)(),e=Object(j.useState)(!_.a.get("introAlreadyViewed")),t=Object(T.a)(e,2),i=t[0],a=t[1],r=Object(j.useState)(""),o=Object(T.a)(r,2),c=o[0],s=o[1],l=Object(j.useState)(1),d=Object(T.a)(l,2),p=d[0],u=d[1],x=Object(j.useState)(0),f=Object(T.a)(x,2),h=f[0],m=f[1];Object(j.useEffect)((function(){var n=["Ol\xe1...","Boas-vindas! :)","\xc9 um prazer ter voc\xea aqui <3"];if(i){var e=0,t=0,r=function(){var i=Object(I.a)(H.a.mark((function i(){return H.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n[t]){i.next=16;break}if(!(e<=n[t].length)){i.next=6;break}s(n[t].substr(0,e)),e++,i.next=12;break;case 6:return i.next=8,b(2e3);case 8:t++,e=0,n[t]&&s("");case 12:setTimeout(r,100),i.next=22;break;case 16:return u(0),i.next=19,b(550);case 19:return a(!1),g(),i.abrupt("return");case 22:case 23:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();r()}else m(1)}),[i]);var b=function(n){return new Promise((function(e){return setTimeout(e,n)}))},g=function(){_.a.set("introAlreadyViewed",!0)},O=function(){var n=Object(I.a)(H.a.mark((function n(){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(0),n.next=3,b(550);case 3:return a(!1),g(),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(0),e.next=3,b(600);case 3:n.push("/sobre");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(Y.useSwipeable)({onSwipedLeft:function(){return w()},preventDefaultTouchmoveEvent:!0});return Object(C.jsx)(G,{introOpacity:p,contentOpacity:h,children:i?Object(C.jsxs)("div",{className:"starting--messages",children:[Object(C.jsx)("div",{className:"skip--button",onClick:O,children:"Pular >>"}),Object(C.jsx)("div",{className:"message",children:c})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",Object(M.a)(Object(M.a)({className:"page--content",onWheel:function(n){n.deltaY>0&&w()}},v),{},{children:[Object(C.jsxs)("div",{className:"name",children:[Object(C.jsx)("h1",{children:"Christopher Leonardo"}),Object(C.jsx)("h2",{children:"Web Developer"})]}),Object(C.jsx)("div",{className:"image"}),Object(C.jsxs)("div",{className:"socials",children:[Object(C.jsx)("div",{className:"github",children:Object(C.jsx)("a",{href:"https://github.com/christopherldo/",target:"_blank",rel:"noreferrer","aria-label":"Github",children:Object(C.jsx)(R.a,{})})}),Object(C.jsx)("div",{className:"linkedin",children:Object(C.jsx)("a",{href:"https://www.linkedin.com/in/christopher-de-oliveira/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:Object(C.jsx)(R.c,{})})}),Object(C.jsx)("div",{className:"instagram",children:Object(C.jsx)("a",{href:"https://www.instagram.com/ldochristopher",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:Object(C.jsx)(R.b,{})})}),Object(C.jsx)("div",{className:"twitch",children:Object(C.jsx)("a",{href:"https://www.twitch.tv/christopherldo/",target:"_blank",rel:"noreferrer","aria-label":"Twitch",children:Object(C.jsx)(R.d,{})})})]})]})),Object(C.jsx)("div",{className:"target--arrows",children:Object(C.jsx)("div",{className:"next",onClick:w,children:"Sobre ->"})})]})})},K=Object(k.b)(d||(d=Object(y.a)(["\n  from {\n    margin-left: -1000px;\n  }\n\n  to {\n    margin-left: 0;\n  }\n"]))),V=Object(k.b)(p||(p=Object(y.a)(["\n  from {\n    margin-right: -1000px;\n  }\n\n  to {\n    margin-right: 0;\n  }\n"]))),Q=Object(k.b)(u||(u=Object(y.a)(["\n  from {\n    margin-bottom: -1000px;\n  }\n\n  to {\n    margin-bottom: 0;\n  }\n"]))),U=k.a.main(x||(x=Object(y.a)(["\n  max-width: 1000px;\n  width: 100%;\n  height: calc(100vh - 75px);\n  margin: auto;\n  overflow: hidden;\n\n  @media(max-width: 1000px) {\n    overflow-y: auto;\n  };\n\n  .page--content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    opacity: ",";\n    transition: all 0.5s ease-in-out 0s;\n\n    @media(max-width: 1024px) {\n      padding: 0 20px;\n    };\n\n    @media(max-width: 768px) {\n      display: flex;\n      flex-flow: column;\n    };\n\n    .me {\n      grid-column: span 2;\n      grid-row: span 2;\n      display: flex;\n      flex-flow: column;\n      align-items: center;\n\n      @media(max-width: 768px) {\n        flex: 1;\n        align-items: center;\n      };\n\n      .title {\n        flex: 2;\n        display: flex;\n        width: 100%;\n        animation: "," 0.5s ease-in-out;\n\n        @media(max-width: 768px) {\n          flex: unset;\n          display: inline;\n          animation: "," 0.5s ease-in-out;\n        };\n\n        h1 {\n          padding-top: 20px;\n          width: 90%;\n          background-color: #B64FC8;\n          border-top-left-radius: 50px;\n          border-top-right-radius: 50px;\n          color: #000;\n          font-weight: bold;\n          text-align: center;\n\n          @media(max-width: 768px) {\n            margin-top: 10px;\n            margin-left: -20px;\n            padding: 5px;\n            font-size: 20px;\n            border-top-left-radius: 0;\n            border-top-right-radius: 50px;\n            border-bottom-right-radius: 50px;\n          };\n        };\n      };\n\n      .img {\n        grid-column: span 2;\n        display: flex;\n        flex: 3;\n        padding: 50px;\n        justify-content: center;\n        animation: "," 0.5s ease-in-out;\n\n        @media(max-width: 768px) {\n          flex: unset;\n          padding: 30px;\n        };\n\n        img {\n          display: block;\n          height: 100%;\n          max-width: 270px;\n          max-height: 270px;\n          border-radius: 50%;\n          border: 3px solid #fff;\n          box-shadow: 0 2px 4px rgb(0 0 0 / 50%);\n        };\n      };\n    };\n\n    .about {\n      grid-column: span 2;\n      grid-row: span 2;\n      padding: 20px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      .about-txt {\n        width: 100%;\n        animation: "," 0.5s ease-in-out;\n      };\n\n      p {\n        display: inline;\n        background-color: #3700b3;\n        margin-bottom: auto;\n        padding: 5px 0;\n        line-height: 2.5em;\n        font-size: 20px;\n        color: #fff;  \n\n        @media(max-width: 1100px) {\n          line-height: 2em;\n        };\n\n        @media(max-width: 900px) {\n          font-size: 18px;\n        };\n\n        @media(max-width: 768px) {\n          text-align: center;\n        };\n      };\n    }\n  };\n\n  .target--arrows {\n    .next,\n    .previous {\n      padding: 5px;\n      position: absolute;\n      top: 50%;\n      font-size: 14px;\n      cursor: pointer;\n      font-style: italic;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s ease-in-out 0s;\n\n      &:hover {\n        color: #03DAC6;\n        border-color: #03DAC6;\n      };\n    };\n\n    .previous {\n      left: 50px;\n\n      @media(max-width: 768px) {\n        left: 0px;\n      };\n    };\n\n    .next {\n      right: 50px;\n\n      @media(max-width: 768px) {\n        right: 0px;\n      };\n    };\n  };\n"])),(function(n){return n.contentOpacity}),Q,K,K,V),X=function(){var n=Object(z.f)(),e=Object(j.useState)(0),t=Object(T.a)(e,2),i=t[0],a=t[1];Object(j.useEffect)((function(){a(1)}),[]);var r=function(n){return new Promise((function(e){return setTimeout(e,n)}))},o=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/portfolio");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(Y.useSwipeable)({onSwipedRight:function(){return c()},onSwipedLeft:function(){return o()},preventDefaultTouchmoveEvent:!0});return Object(C.jsxs)(U,{contentOpacity:i,children:[Object(C.jsxs)("div",Object(M.a)(Object(M.a)({className:"page--content",onWheel:function(n){n.deltaY>0?o():c()}},s),{},{children:[Object(C.jsxs)("div",{className:"me",children:[Object(C.jsx)("div",{className:"img",children:Object(C.jsx)("img",{src:"./images/profile_pic.jpg",alt:"Perfil"})}),Object(C.jsx)("div",{className:"title",children:Object(C.jsx)("h1",{children:"Sobre"})})]}),Object(C.jsx)("div",{className:"about",children:Object(C.jsx)("div",{className:"about-txt",children:Object(C.jsx)("p",{children:"Desde pequeno apaixonado por tecnologia. Considerado nerd por muitos amigos, sempre me interessei pela \xe1rea da programa\xe7\xe3o, e tive facilidade para mexer em computadores. Me descobri na \xe1rea do desenvolvimento por volta de 2013, quando come\xe7ou a febre do HTML5 e CSS3, mas n\xe3o sabia programar. At\xe9 mesmo cheguei a odiar JavaScript. Hoje sou programador para a web e arranho tamb\xe9m no mundo mobile."})})})]})),Object(C.jsxs)("div",{className:"target--arrows",children:[Object(C.jsx)("div",{className:"previous",onClick:c,children:"<- Home"}),Object(C.jsx)("div",{className:"next",onClick:o,children:"Portf\xf3lio ->"})]})]})},Z=k.a.main(f||(f=Object(y.a)(["\n  max-width: 1000px;\n  width: 100%;\n  height: calc(100vh - 75px);\n  margin: auto;\n  overflow: hidden;\n\n  @media(max-width: 1000px) {\n    overflow-y: auto;\n  };\n  \n  .page--content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    opacity: ",";\n    transition: all 0.5s ease-in-out 0s;\n    color: #fff;\n\n    @media(max-width: 1024px) {\n      padding: 0 20px;\n    };\n  };\n\n  .target--arrows {\n    .next,\n    .previous {\n      padding: 5px;\n      position: absolute;\n      top: 50%;\n      font-size: 14px;\n      cursor: pointer;\n      font-style: italic;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s ease-in-out 0s;\n\n      &:hover {\n        color: #03DAC6;\n        border-color: #03DAC6;\n      };\n    };\n\n    .previous {\n      left: 50px;\n\n      @media(max-width: 768px) {\n        left: 0px;\n      };\n    };\n\n    .next {\n      right: 50px;\n\n      @media(max-width: 768px) {\n        right: 0px;\n      };\n    };\n  };\n"])),(function(n){return n.contentOpacity})),$=function(){var n=Object(z.f)(),e=Object(j.useState)(0),t=Object(T.a)(e,2),i=t[0],a=t[1];Object(j.useEffect)((function(){a(1)}),[]);var r=function(n){return new Promise((function(e){return setTimeout(e,n)}))},o=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/tecnologias");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/sobre");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(Y.useSwipeable)({onSwipedRight:function(){return c()},onSwipedLeft:function(){return o()},preventDefaultTouchmoveEvent:!0});return Object(C.jsxs)(Z,{contentOpacity:i,children:[Object(C.jsx)("div",Object(M.a)(Object(M.a)({className:"page--content",onWheel:function(n){n.deltaY>0?o():c()}},s),{},{children:Object(C.jsx)("h1",{children:"P\xe1gina PORTF\xd3LIO"})})),Object(C.jsxs)("div",{className:"target--arrows",children:[Object(C.jsx)("div",{className:"previous",onClick:c,children:"<- Sobre"}),Object(C.jsx)("div",{className:"next",onClick:o,children:"Tecnologias ->"})]})]})},nn=k.a.main(h||(h=Object(y.a)(["\n  max-width: 1000px;\n  width: 100%;\n  height: calc(100vh - 75px);\n  margin: auto;\n  overflow: hidden;\n\n  @media(max-width: 1000px) {\n    overflow-y: auto;\n  };\n\n  .page--content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    opacity: ",";\n    transition: all 0.5s ease-in-out 0s;\n    color: #fff;\n\n    @media(max-width: 1024px) {\n      padding: 0 20px;\n    };\n  };\n\n  .target--arrows {\n    .next,\n    .previous {\n      padding: 5px;\n      position: absolute;\n      top: 50%;\n      font-size: 14px;\n      cursor: pointer;\n      font-style: italic;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s ease-in-out 0s;\n\n      &:hover {\n        color: #03DAC6;\n        border-color: #03DAC6;\n      };\n    };\n\n    .previous {\n      left: 50px;\n\n      @media(max-width: 768px) {\n        left: 0px;\n      };\n    };\n\n    .next {\n      right: 50px;\n\n      @media(max-width: 768px) {\n        right: 0px;\n      };\n    };\n  };\n"])),(function(n){return n.contentOpacity})),en=function(){var n=Object(z.f)(),e=Object(j.useState)(0),t=Object(T.a)(e,2),i=t[0],a=t[1];Object(j.useEffect)((function(){a(1)}),[]);var r=function(n){return new Promise((function(e){return setTimeout(e,n)}))},o=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/contato");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/portfolio");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(Y.useSwipeable)({onSwipedRight:function(){return c()},onSwipedLeft:function(){return o()},preventDefaultTouchmoveEvent:!0});return Object(C.jsxs)(nn,{contentOpacity:i,children:[Object(C.jsx)("div",Object(M.a)(Object(M.a)({className:"page--content",onWheel:function(n){n.deltaY>0?o():c()}},s),{},{children:Object(C.jsx)("h1",{children:"P\xe1gina TECNOLOGIAS"})})),Object(C.jsxs)("div",{className:"target--arrows",children:[Object(C.jsx)("div",{className:"previous",onClick:c,children:"<- Portf\xf3lio"}),Object(C.jsx)("div",{className:"next",onClick:o,children:"Contato ->"})]})]})},tn=k.a.main(m||(m=Object(y.a)(["\n  max-width: 1000px;\n  width: 100%;\n  height: calc(100vh - 75px);\n  margin: auto;\n  overflow: hidden;\n\n  @media(max-width: 1000px) {\n    overflow-y: auto;\n  };\n  \n  .page--content {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    opacity: ",";\n    transition: all 0.5s ease-in-out 0s;\n    color: #fff;\n\n    @media(max-width: 1024px) {\n      padding: 0 20px;\n    };\n  };\n\n  .target--arrows {\n    .next,\n    .previous {\n      padding: 5px;\n      position: absolute;\n      top: 50%;\n      font-size: 14px;\n      cursor: pointer;\n      font-style: italic;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s ease-in-out 0s;\n\n      &:hover {\n        color: #03DAC6;\n        border-color: #03DAC6;\n      };\n    };\n\n    .previous {\n      left: 50px;\n\n      @media(max-width: 768px) {\n        left: 0px;\n      };\n    };\n  };\n"])),(function(n){return n.contentOpacity})),an=function(){var n=Object(z.f)(),e=Object(j.useState)(0),t=Object(T.a)(e,2),i=t[0],a=t[1];Object(j.useEffect)((function(){a(1)}),[]);var r=function(n){return new Promise((function(e){return setTimeout(e,n)}))},o=function(){var e=Object(I.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),e.next=3,r(600);case 3:n.push("/tecnologias");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(Y.useSwipeable)({onSwipedRight:function(){return o()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(C.jsxs)(tn,{contentOpacity:i,children:[Object(C.jsx)("div",Object(M.a)(Object(M.a)({className:"page--content",onWheel:function(n){n.deltaY<0&&o()}},c),{},{children:Object(C.jsx)("h1",{children:"P\xe1gina CONTATO"})})),Object(C.jsx)("div",{className:"target--arrows",children:Object(C.jsx)("div",{className:"previous",onClick:o,children:"<- Tecnologias"})})]})},rn=k.a.div(b||(b=Object(y.a)(["\n  \n"]))),on=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(rn,{children:Object(C.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"})})})},cn=function(){return Object(C.jsxs)(z.c,{children:[Object(C.jsx)(z.a,{exact:!0,path:"/",children:Object(C.jsx)(J,{})}),Object(C.jsx)(z.a,{exact:!0,path:"/sobre",children:Object(C.jsx)(X,{})}),Object(C.jsx)(z.a,{exact:!0,path:"/portfolio",children:Object(C.jsx)($,{})}),Object(C.jsx)(z.a,{exact:!0,path:"/tecnologias",children:Object(C.jsx)(en,{})}),Object(C.jsx)(z.a,{exact:!0,path:"/contato",children:Object(C.jsx)(an,{})}),Object(C.jsx)(z.a,{children:Object(C.jsx)(on,{})})]})},sn=function(){return Object(C.jsx)(v.a,{children:Object(C.jsxs)(S,{children:[Object(C.jsx)(E,{}),Object(C.jsx)(cn,{}),Object(C.jsx)(L,{})]})})};w.a.render(Object(C.jsx)(g.a.StrictMode,{children:Object(C.jsx)(sn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f77b7503.chunk.js.map
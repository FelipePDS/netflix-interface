import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #141414;
    --primary-transparent-50: #14141480;
    --primary-transparent-70: #141414b3;

    --white: #fff;
    --black: #000000;
    --black-transparent: #000000e6;
    --red: #e50914;

    --green: #46d369;
    --green-darker: #34bd56;
    --green-secondary-darker: #009c4c;

    --gray-09: #ffffffb3;
    --gray-10: #d2d2d2;
    --gray-50: #ffffffb3;
    --gray-100: #ffffff4d;
    --gray-150: #aaaaaa;
    --gray-200: #808080;
    --gray-250: #777;
    --gray-300: #646464;
    --gray-400: #4D4D4D;
    --gray-700: #333;
    --gray-750: #2a2a2a;
    --gray-900: #181818;

    --gray-transparent-200: #6d6d6eb3;
    --gray-transparent-500: #33333399;

    --link: #e5e5e5;
    --notification: #b9090b;
    --logo-color: #e50914;
    --tooltip: #282a36;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    user-select: none;
    background: var(--primary);
    color: var(--white);
  }

  html {
    overflow-x: hidden;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Netflix Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* TOOLTIP */
  .tooltip-bottom,
  .tooltip-top {
    position: relative;
  }

  .tooltip-bottom span,
  .tooltip-top span {
    visibility: hidden;

    position: absolute;
    z-index: 999;

    padding: .5rem;

    color: var(--white);
    background: var(--tooltip);
    box-shadow: rgba(0 0 0 / 45%) 0 2px 5px;
    
    border-radius: 4px;

    font-size: 14px;
    text-align: center;
    white-space: nowrap;
  }

  .tooltip-bottom span {
    bottom: -3rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .tooltip-top span {
    top: -3rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .tooltip-bottom:hover span,
  .tooltip-top:hover span {
    visibility: visible;

    animation: expand-box .1s ease;
  }

  .tooltip-bottom span:after,
  .tooltip-top span:after {
    content: '';
    position: absolute;
  }

  .tooltip-bottom span:after {
    bottom: 100%;
    left: calc(50% - 8px);

    border-bottom: 8px solid var(--tooltip);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .tooltip-top span:after {
    top: 100%;
    left: calc(50% - 8px);

    border-top: 8px solid var(--tooltip);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  @keyframes expand-box {
    from {
      padding: .35rem;
      font-size: 12px;
    }

    to {
      padding: .5rem;
      font-size: 14px;
    }
  }


  /* SCROLLBAR */
  ::-webkit-scrollbar {
    background-color: #202324;
    color: #aba499;
  }
  ::-webkit-scrollbar-corner {
      background-color: #181a1b;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #454a4d;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #141414;

    --white: #fff;
    --black: #000000;
    --black-transparent: #000000e6;
    --red: #e50914;
    --green: #46d369;

    --gray-10: #d2d2d2;
    --gray-50: #ffffffb3;
    --gray-100: #ffffff4d;
    --gray-200: #808080;
    --gray-250: #777;
    --gray-700: #333;
    --gray-750: #2a2a2a;
    --gray-900: #181818;

    --link: #e5e5e5;
    --notification: #b9090b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    user-select: none;
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
`;

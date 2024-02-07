import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*:before,
*:after {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

 
:root {
    --active-color: #F87070;
  
  & .color-green{
    --active-color: #70F3F8;
  }
  & .color-purple{
    --active-color: #D881F8;
  }
}
body {
  font-family: 'Space Mono', monospace;
  margin: 0 auto;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  transition: background-color 0.5s ease;
 background-color: #1E213F;
}

.app{
  background-color: "red"
}
h1 {
  color: #D7E0FF;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 4.5rem;
}

`;
export default GlobalStyles;

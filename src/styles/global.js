import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
html {
    font-size: 62.5%;
  }
body {
  background: var(--white);
  color: var(--white);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto Condensed',serif;
  font-size:1.6rem;
}

h1,h2,h3,h4,h5,h6,strong {
  font-weight:400;
  
}

button {
  cursor:pointer;

}
:root {
  --primary: #ff9933;
  --secondary: #2f3136;
   
  --white: #fff;
  --black: #000;
  --gray: #ccc;
 
  --active: #ffff1a;
 
}
`;

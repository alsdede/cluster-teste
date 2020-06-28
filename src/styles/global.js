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
  background: #fff;
  color:#fff;
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
  --primary: #36393f;
  --secondary: #2f3136;
  
   
    --white: #fff;
    --gray: #8a8c90;

    --notification: #f84a4b;

 
    --link: #5d80d6;
 
}
`;

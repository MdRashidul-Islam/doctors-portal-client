import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

  ::-webkit-scrollbar{
    width: 5px;
    background-color: #FFF8F5;
}
::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: #1CC7C1;
}
::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #FFF8F5;
}
}

body{
  font-family: 'Poppins', sans-serif;
  
  input{
    padding-left: 3px;
  }

  input:focus{
    outline:2px solid #6FCFCF;
    
  }
  textarea:focus{
    outline:2px solid #6FCFCF;
  }
  
}


`;

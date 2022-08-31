import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

* {
  margin: 0;
  padding: 0;
}
html {
  height: auto;
  width: 100%;
}

body {
  height: auto;
  width: 100%;
}


.collapsible .content-parent {
  height: 0rem;
  overflow: hidden;
  transition: height ease 0.3s;
  border: black solid 1px;
  display: flex;;
  
}

.collapsible .content-parent.show{
  height: 100%;
  width: 100%;
  
}

.MapStyle {
  height: 20rem;
  min-width: 50%;
  max-width: 50%;
}

.company-text {
  max-width: 40%;
  margin: auto 0;
  > h1 {
   text-align: center;
   margin: 0 auto;
  }
  > p {
    margin-top: 2rem;
  }
}



`

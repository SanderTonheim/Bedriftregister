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
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
  border: black solid 1px;
  display: flex;;
  
}

.collapsible .content-parent.show{
  height:20rem;
  width: 100%;
  
}
.map {
  height: 100%;
  width: 50%;
}

.MapStyle {
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  min-width: 50%;
  height: 100%;
  margin: 0%;
  }

.company-text {
  display: flex;
  gap: 2rem;
  height: 100%;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
}



`

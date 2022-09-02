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

.list-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-content {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.collapsible {
  border-bottom: black solid ;
}

.collapsible .content-parent {
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
}

.collapsible .content-parent.show{
  height:15rem;
  width: 100%;
padding-bottom: 1rem;
}

.map {
  height: 100%;
  width: 50%;
}

.MapStyle {
  width: 100%;
  height: 100%;
}


.company-text {
  height: 100%;
  max-width: 50%;
}



`

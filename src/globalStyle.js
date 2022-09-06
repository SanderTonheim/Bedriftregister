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
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.collapsible {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.collapsible .content-parent {
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
}

.collapsible .content-parent.show{
  height:13rem;
  margin-top: 1rem;
  background-color: #f6f6f6;
  border-radius: 1rem;
  
}

.map {
  height: 100%;
  min-width: 50%;
}

.MapStyle {
  width: 100%;
  height: 100%;
}


.company-text {
  height: 100%;
  max-width: 50%;
  p{
    padding: 1rem;
  }

}

`

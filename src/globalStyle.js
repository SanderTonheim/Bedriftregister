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
  background-image: url(https://imgs.search.brave.com/tJnyttRaF9W_rmkOcAm4uFdlTcKfNpySYOTz8Tz2qbA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYy/Mi8zNDQvb3JpZ2lu/YWwvYmVhdXRpZnVs/LWJhY2tncm91bmQt/b2YtbGluZXMtd2l0/aC1ncmFkaWVudHMt/dmVjdG9yLmpwZw);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.site-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.list-items {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
}

.collapsible {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.15);
	border-radius: 16px;
	box-shadow: 0 4px 30px hsla(0, 0%, 0%, 0.1);
	backdrop-filter: blur(2px);
	border: 1px solid rgba(255, 255, 255, 0.13);
  padding: 1rem;
}

.collapsible .content-parent {
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
}

.collapsible .content-parent.show{
  height:25rem;
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
  max-width: 100%;
  p{
    padding: 1rem;
  }

}

.toggle {
  display: flex;
  align-items: center;
  img {
    height: 1rem;
  }
}

.toggle span:active {
  transform: rotate(180deg);
}
`

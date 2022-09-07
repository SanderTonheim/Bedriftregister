import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: min-content;
  background-image: url(https://imgs.search.brave.com/tJnyttRaF9W_rmkOcAm4uFdlTcKfNpySYOTz8Tz2qbA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYy/Mi8zNDQvb3JpZ2lu/YWwvYmVhdXRpZnVs/LWJhY2tncm91bmQt/b2YtbGluZXMtd2l0/aC1ncmFkaWVudHMt/dmVjdG9yLmpwZw);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

body {
  width: 100%;
  height: 100%;
  
}

.site-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.collapsible {
  background: rgba(255, 255, 255, 0.15);
	border-radius: 16px;
	box-shadow: 0 4px 30px hsla(0, 0%, 0%, 0.1);
	backdrop-filter: blur(2px);
	border: 1px solid rgba(255, 255, 255, 0.13);
  padding: 1rem;
}

.list-items {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  
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
  justify-content: center;
  width: fit-content;
  margin: 0%;

}

.toggle img {
  height: 1.1rem;
}

.arrow-closed, img  {
  display: flex;
  transition:  ease .5s;
  gap: .5rem;
  align-items: flex-end;
}


.arrow-open {
  display: flex;
  gap: .5rem;
img {
  transition:  ease .5s;
  rotate: 180deg;
}

}




`

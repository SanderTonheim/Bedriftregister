import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    color:#f1f0f0;
    font-family: 'Roboto';
    
  }

  html {
    width: 100%;
    height: max-content;
    
    
  }

  p {
    font-size: 1.4rem;
  }

  body {
    width: 100%;
    height: 100%;
    background-image: url(https://imgs.search.brave.com/tJnyttRaF9W_rmkOcAm4uFdlTcKfNpySYOTz8Tz2qbA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYy/Mi8zNDQvb3JpZ2lu/YWwvYmVhdXRpZnVs/LWJhY2tncm91bmQt/b2YtbGluZXMtd2l0/aC1ncmFkaWVudHMt/dmVjdG9yLmpwZw);
    background-repeat: no-repeat;  
    background-size: cover;
    background-position: center;
  }

  .navbar-logo {
    flex-wrap: nowrap;
    height: 100%;
    width:fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    img {
      height: 100%;
    }
    
  }
  
  
  .Navbar-ul {
    margin: 0%;
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
  	border: 1px solid rgba(255, 255, 255, 0.69);
    padding: 1rem;
  }

  .list-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  
  .content {
    margin-top: 1.5rem
  }

  .collapsible .content-parent {
    height: 0;
    overflow: hidden;
    transition: height ease-in 500ms;
    
    
  }

  .map {
    height: 15rem;
    width: 100%;
  }


    
  .company-text {
    height: fit-content;
    max-width: 100%;
    p{
      padding: 1rem;
      height: fit-content;
    }
  }

  .toggle {
    display: flex;
    width: fit-content;
    margin: 0%;
    height: fit-content;

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
    align-items: flex-end;
    gap: .5rem;
  
  }

  .arrow-open img {
    transition:  ease .5s;
    rotate: 180deg;
  }
  
  .registrate {
    background-color: #022c6f;
    height: 100%;
    width: 100%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .registrate form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    height: 100%;
    justify-content: center;
    width: 12rem;
    padding: 2rem 0;
  }



  .registrate input {
    height: 1.5rem;
    color: black;
  }

  .registrate button {
    width: 100%;
    margin: 0 auto;
    background-color: transparent;
    border: none;background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px hsla(0, 0%, 0%, 0.1);
    backdrop-filter: blur(2px);
    border: 1px solid none;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  
	@media only screen and (max-width: 425px) {

    .Navbar-ul {
      display: none;

    }
    .collapsible   {
      font-size:.8rem ;
    }


    .navbar-logo p {
      font-size: 1.4rem;
    }
    
	}

	@media screen and (max-width: 426px) {
    .Navbar-ul {
      display: none;
    }
	}
  
  
`

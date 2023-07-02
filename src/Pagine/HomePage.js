import "./Footer.css";
import Portfolio from "../img/homePage/portofolio.png";
import Foto1 from "../img/homePage/foto1.png";
import Foto2 from "../img/homePage/foto2.png";
import Foto3 from "../img/homePage/foto3.png";
import Foto4 from "../img/homePage/foto4.png";

import styled from "styled-components";

const MainContainer = styled.div`
  *{
    margin:0;
  }

  html{
    height: 100%;
  }

  body, #root{
    height: 100%;
    width: 100%;
  }

  .App{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  main{
    width: 100%;
    flex-grow: 1;
    height: auto;
  }

  main p{
    text-align: center;
    margin: 0vw 5vw 2.3vw 5vw;
    font-size: 2vw;
    color: #6667AB;
    font-family: Eina01-regular;
  }
  main img{
    cursor: pointer;
  }
  main img:hover{
    scale: 0.98;
  }
  section{
    border-radius: 3vw;
    margin:10px 10px 0px 10px;
    display: flex;
    justify-content: center;
    height: 30vw;
    width: auto;
  }
  section img{
    width:50%;
  }
  #anteprime{
    margin: 2vw 3vw 8vw 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    flex-wrap: wrap;
  }
  .anteprime-square{
    margin-top: 2%;
    width: 24%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .anteprime-square img{
    width:95%;
    height: 100%;
  }
  @media screen and (max-width: 600px){
    .anteprime-square{
      width:48%;
    }
    main p{
      font-size: 3.8vw;
      margin: 1.3vw 0 2.3vw 0;
      margin-bottom:3vw;
    }
    section{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70vw;
    }
    section img{
      width:80%;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 1700px) {
    .anteprime-square{
      width:45%;
    }
    .anteprime-square:first-of-type, .anteprime-square:nth-of-type(3){
      margin-left:4%;
    }
    .anteprime-square:nth-of-type(2), .anteprime-square:nth-of-type(4){
      margin-right:4%;
    }
    main p{
      font-size: 2.7vw;
      padding: 0 2vw;
      margin-bottom:3vw;
    }
    section{
      height: 40vw;
      margin-left: 5%;
    }
    section img{
      width:60%;
    }

  }
`

function HomePage(props) {
  return (
      <MainContainer>
          <main>
              <p>Benvenuti su Employable, qua avrete la possibilità di realizzare e visualizzare Portfolio e Curriculum
                  !</p>
              <section>
                  <img src={Portfolio} alt=""/>
              </section>
              <div id="anteprime">
                  <div className="anteprime-square"><img src={Foto1} alt=""/></div>
                  <div className="anteprime-square"><img src={Foto2} alt=""/></div>
                  <div className="anteprime-square"><img src={Foto3} alt=""/></div>
                  <div className="anteprime-square"><img src={Foto4} alt=""/></div>
              </div>
          </main>
        <footer>
            <a onClick={()=>props.setPage(5)}>Assistenza.</a>
        </footer>
    </MainContainer>
  );
}

export default HomePage;
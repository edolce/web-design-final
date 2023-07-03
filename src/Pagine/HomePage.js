import "./Footer.css";
import Portfolio from "../img/homePage/portofolio.png";

import Foto1 from "../img/homePage/foto1.png";
import Foto2 from "../img/homePage/foto2.png";
import Foto3 from "../img/homePage/foto3.png";
import Foto4 from "../img/homePage/foto4.png";

import CristinaPortfolio from "../img/homePage/cristina-portfolio.png";
import LorenzoPortfolio from "../img/homePage/Lorenzo-portfolio.png";

import styled from "styled-components";

const MainContainer = styled.div`* {
  margin: 0;
}

  height: 100%;

  html {
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  width: 100%;
  flex-grow: 1;
  height: auto;

  main p {
    text-align: left;
    margin: 3vw 5vw 2.3vw 5vw;
    font-size: 2vw;
    padding-left: 3vw;
    color: #6667AB;
    font-family: Eina01-regular;
  }

  main img {
    cursor: pointer;
  }

  main img:hover {
    scale: 0.98;
  }

  section {
    margin: 10px 10px 0px 10px;
    display: flex;
    justify-content: center;
    height: 30vw;
    width: auto;
    position: relative;
    overflow: hidden;
  }

  section img {
    border-radius: 3vw;
    width: 45%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  section img:nth-of-type(2) {
    margin-left: 1vw;
    margin-right: 1vw;
  }

  .image-container {
    padding-bottom: 3vw;
    scale: 0.97;
    display: flex;
    white-space: nowrap;
    justify-content: space-between;
  }

  #anteprime:first-of-type {
    margin-left: 5vw;
  }

  #anteprime {
    margin: 0vw 0 8vw 3vw;
    display: flex;
    align-items: center;
    width: auto;
    flex-wrap: wrap;
  }

  .anteprime-square {
    margin-top: 2%;
    margin-right: 0.2vw;
    width: 23.5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .anteprime-square img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1701px) {
    section img {
      object-fit: cover;
    }

    section {
      margin-right: auto;
      width: 98vw;
      height: 30vw;

    }

    .image-container {
      place-content: center;;
    }


    section img:nth-of-type(1) {
      margin-right: 1vw;
    }

    section img:nth-of-type(2) {
      margin-left: 1vw;
      margin-right: 0;
    }

    section img:nth-of-type(3) {
      display: none;
      margin: 0;
    }

  }
  @media screen and (min-width: 601px) and (max-width: 1700px) {
    .anteprime-square {
      width: 45%;
    }

    main p {
      font-size: 2.3vw;
      padding: 0 6vw;
      margin-bottom: 3vw;
    }

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 55vw;
      margin-left: 10vw;
      margin-right: 10vw;
    }

    .image-container {
      display: flex;
      white-space: nowrap;
      animation: slideToLeft 10s linear infinite;
    }

    #anteprime:first-of-type {
      margin-left: 9vw;
    }

    section img {
      width: 100%;
      height: auto;
      margin: 0;
    }

    @keyframes slideToLeft {
      0%,
      5% {
        transform: translateX(0);
      }
      5%,
      50% {
        transform: translateX(-100%);
      }
      50%,
      55% {
        transform: translateX(-100%);
      }
      55%,
      100% {
        transform: translateX(-200%);
      }
    }

  }

  @media screen and (max-width: 600px) {
    section img {
      scale: 0.99;
    }

    @keyframes slideToLeft {
      0%,
      5% {
        transform: translateX(0);
      }
      5%,
      50% {
        transform: translateX(-100%);
      }
      50%,
      55% {
        transform: translateX(-100%);
      }
      55%,
      100% {
        transform: translateX(-200%);
      }
    }
    .image-container {
      display: flex;
      white-space: nowrap;
      animation: slideToLeft 10s linear infinite;
    }

    #anteprime {
      margin-right: 0;
    }

    .anteprime-square {
      width: 48%;
    }

    main p {
      font-size: 3.8vw;
      margin: 1vw 0 2.3vw 0;
    }

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 55vw;
    }

    section img {
      width: 100%;
    }
  }


`

function HomePage(props) {
    return (<>
            <MainContainer>
                <main>
                    <p>Benvenuti su Employable, qua avrete la possibilità di realizzare e visualizzare Portfolio e
                        Curriculum !</p>
                    <section>
                        <div className="image-container">
                            <img src={LorenzoPortfolio} className="slide"/>
                            <img src={CristinaPortfolio} className="slide"/>
                            <img src={LorenzoPortfolio} className="slide"/>
                        </div>
                    </section>
                    <div id="anteprime">
                        <div className="anteprime-square"><img src={Foto1}/></div>
                        <div className="anteprime-square"><img src={Foto2}/></div>
                        <div className="anteprime-square"><img src={Foto3}/></div>
                        <div className="anteprime-square"><img src={Foto4}/></div>
                    </div>
                </main>
            </MainContainer>
            <footer>
                <a onClick={() => props.setPage(5)}>Assistenza.</a>
            </footer>
        </>
    );
}

export default HomePage;
import styled from "styled-components";
import Checkbox from "../img/ricercaPage/checkWhite.png";
import ProfilePic from '../img/ricercaPage/profilo1.png';
import {useEffect, useRef, useState} from "react";

const MainContainer = styled.div`
  #titolo {
    font-size: 3vw;
    text-align: center;
    font-family: Eina01-regular;
    color: rgb(102, 103, 171);
  }

  /* ASIDE > 800 */

  aside {
    align-items: center;
    justify-content: center;
    float: left;
    padding-top: 3vw;
    width: 25vw;
    padding-left: 4vw;
    border-right: 1px solid #57588F;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  #button-flex {
    display: none;
  }

  #elenco-filtri {
    margin-top: 3vw;
    display: flex;
    flex-direction: row;
    max-height: 4vh;
    height: 8vw;
    overflow: scroll;
    font-size: 1.3vw;
    margin-left: 32%;
    font-family: Eina01-regular;
  }

  #elenco-filtri::-webkit-scrollbar {
    display: none;
  }

  .single-filter {
    padding: 0.2vw 3vw;
    width: 5vw;
    border-radius: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1vw;
    background-color: rgb(75, 76, 123);
    color: white;
  }

  .single-filter button {
    max-height: 100%;
    width: 10%;
    margin-right: 1vw;
    border: none;
    margin-left: 1vw;
    background-color: rgb(75, 76, 123);
    color: white;
    font-size: 1.5vw;
  }

  .single-filter button:hover {
    font-weight: bold;
  }

  input[type="checkbox"]::before {
    content: "";
    display: inline-block;
    width: 1.5vw;
    height: 1.5vw;
    max-width: 5vw;
    max-height: 5vw;
    border-radius: 30%;
    background-color: #57588F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    vertical-align: middle;
    margin-right: 1vw;
    cursor: pointer;
  }

  input[type="checkbox"]:checked::before {
    background-color: #57588F;
  }

  input[type="checkbox"]:checked::before {
    background-image: url(${Checkbox});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    font-weight: bold;
    color: white;
  }

  .tendina-filtro span {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5vw;
  }

  aside .applica-resetta {
    padding: 0.5vw 8vw;
    background-color: rgb(102, 103, 171, 0.7);
    color: white;
    border-radius: 4vw;
    border: 0;
    font-size: 1.5vw;
    font-family: Eina01-bold;
  }

  aside .applica-resetta:nth-of-type(2) {
    margin-top: 1vw;
  }

  aside .applica-resetta:hover {
    background-color: rgb(102, 103, 171);
  }

  .filtro {
    font-family: Eina01-regular;
    font-weight: normal;
    margin-bottom: 3vw;
  }

  .filtro h3 {
    user-select: none;
    cursor: pointer;
    color: #5D5E9B;
    width: 100%;
    font-size: 2vw;
    margin-left: 0.9vw;
    height: auto;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    font-weight: normal;
  }

  .filtro h3:hover {
    opacity: 0.8;
  }

  .filtro span {
    display: flex;
    flex-direction: row;
  }

  .tendina-filtro {
    font-size: 1.2vw;
    border-top-right-radius: 3vw;
    border-bottom-left-radius: 3vw;
    border-bottom-right-radius: 3vw;
    width: 70%;
    color: #000000;
    padding: 1.5vw 2.5vw;
    background-color: #C7C9FF;
    margin-left: 1.5vw;
    margin-top: 1vw;
    display: flex;
    flex-direction: column;
    font-family: Eina01-regular;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  }

  .tendina-filtro {
    opacity: 0;
    transition: opacity 0.5s;
    overflow: hidden;
    height: 0;
  }

  .tendina-filtro.mostra {
    opacity: 1;
    height: auto;
    transition: opacity 0.5s, height 0.5s;
  }

  .tendina-filtro-testo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: auto;
  }

  .oggetto-lista {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 2vw;
    height: 2vw;
    margin-top: 0.5vw;
    border-radius: 100%;
    background-color: #6667AB;
    transition: border-radius 0.5s;
    transition: margin-top 0.5s;
  }

  /* Main */

  section {
    padding: 0 2vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .interfaccia-portfolio {
    background-color: #C7C9FF;
    border-radius: 2vw;
    width: 48%;
    height: 21vw;
    max-height: 60vw;
    margin-top: 2vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .interfaccia-portfolio #sezione-immagini-portolio {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .interfaccia-portfolio #testo-portfolio {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 1.7vw;
  }

  .immagini-portfolio {
    width: 33.4%;
    height: 100%;
  }

  .immagini-portfolio:first-of-type {
    background-size: cover;
    background-position: center;
    border-top-left-radius: 2vw;
    background-image: url(../img/ricercaPage/foto1.png);
  }

  .immagini-portfolio:nth-of-type(2) div {
    width: 100%;
    height: 50%;
  }

  .immagini-portfolio:nth-of-type(2) > div:first-of-type {
    background-image: url(../img/ricercaPage/foto2.1.png);
    background-size: cover;
    background-position: center;
  }

  .immagini-portfolio:nth-of-type(2) > div:nth-of-type(2) {
    background-image: url(../img/ricercaPage/foto2.2.png);
    background-size: cover;
    background-position: center;
  }

  .immagini-portfolio:nth-of-type(3) {
    background-size: cover;
    background-position: center;
    border-top-left-radius: 2vw;
    background-image: url(../img/ricercaPage/foto3.png);
  }

  .interfaccia-curriculum:nth-of-type(4) {
    margin-bottom: 10vw;
  }

  .interfaccia-curriculum {
    background-color: #C7C9FF;
    border-radius: 2vw;
    width: 48%;
    height: 21vw;
    max-height: 60vw;
    margin-top: 2vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    font-size: 1.3vw;
    font-family: Eina01-bold;
    color: #4B4C7B;
  }

  .interfaccia-curriculum p {
    padding-right: 1.5vw;
  }

  .interfaccia-curriculum .immagine-profilo {
    width: 22vw;
    height: 8vw;
    border-radius: 2vw;
    margin-top: 2vw;
    margin-left: 1.5vw;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .interfaccia-curriculum div:nth-of-type(2) {
    margin-left: 2vw;
    margin-top: 2vw;
    font-size: 1.3vw;
  }

  #immagine-profilo1 {
    background-image: url(../img/ricercaPage/profilo1.png);
    position: relative;
    top: -18vh;
  }

  #immagine-profilo2 {
    background-image: url(../img/ricercaPage/profilo2.png);
  }

  #immagine-profilo3 {
    background-image: url(../img/ricercaPage/profilo3.png);
  }

  #immagine-profilo4 {
    background-image: url(../img/ricercaPage/profilo3.png);
  }

  #testo-portfolio {
    position: relative;
  }

  #testo-portfolio p {
    font-size: 1.7vw;
    margin-left: 3vw;
    margin-top: 0.2vw;
    font-family: Eina01-bold;
    color: #4B4C7B;
  }

  @media screen and (max-width: 600px) {
    #titolo {
      font-size: 5vw;
      margin-top: 1vw;
    }

    /* Bottoni ordina e filtri*/
    #button-flex {
      margin-top: 5vw;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      width: auto;
    }

    #button-ordina, #button-filtri {
      border-radius: 4vw;
      background-color: rgb(75, 76, 123);
      height: 5vw;
      border: 0;
      max-height: 5vh;
      height: 10vw;
      width: 48%;
      font-size: 3.5vw;
      box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
      color: white;
      font-family: Eina01-regular;
    }

    #button-ordina:hover, #button-filtri:hover {
      scale: 0.9;
    }

    /* scorrimento filtri in base a quello selezionato */
    #elenco-filtri {
      margin-top: 3vw;
      margin-bottom: 4vw;
      display: flex;
      flex-direction: row;
      max-height: 4vh;
      height: 8vw;
      overflow: scroll;
      font-size: 2.5vw;
      margin-left: 1vw;
      font-family: Eina01-regular;
    }

    #elenco-filtri::-webkit-scrollbar {
      display: none;
    }

    .single-filter {
      padding: 0 2vw;
      width: 20%;
      border-radius: 3vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1vw;
      background-color: rgb(75, 76, 123);
      color: white;
    }

    .single-filter button {
      max-height: 100%;
      width: 10%;
      margin-right: 1vw;
      border: none;
      margin-left: 1vw;
      background-color: rgb(75, 76, 123);
      color: white;
      font-size: 2.5vw;
    }

    .single-filter button:hover {
      font-weight: bold;
    }

    /* aside nascosto */
    aside {
      display: flex;
      display: none;
      align-items: center;
      justify-content: center;
      float: left;
      padding-top: 20vw;
      width: 30%;
      padding-left: 7%;
    }

    #button-flex, #elenco-filtri {
      display: flex;
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    input[type="checkbox"]::before {
      content: "";
      display: inline-block;
      width: 3vw;
      height: 3vw;
      max-width: 5vw;
      max-height: 5vw;
      border-radius: 30%;
      background-color: #57588F;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      vertical-align: middle;
      margin-right: 3vw;
      cursor: pointer;
    }

    input[type="checkbox"]:checked::before {
      background-color: #57588F;
    }

    input[type="checkbox"]:checked::before {
      //background-image: url(../img/ricercaPage/checkWhite.png);
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      font-weight: bold;
      color: white;
    }

    .tendina-filtro span {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5vw;
    }

    aside .applica-resetta {
      padding: 1vw 18vw;
      background-color: rgb(102, 103, 171, 0.7);
      color: white;
      border-radius: 4vw;
      border: 0;
      font-size: 3.2vw;
      margin-top: 15%;
      margin-left: 20%;
      font-family: Eina01-bold;
    }

    aside .applica-resetta:nth-of-type(2) {
      margin-top: 3vw;
      margin-bottom: 5vw;
    }

    aside .applica-resetta:hover {
      background-color: rgb(102, 103, 171);

    }

    .filtro {
      font-family: Eina01-regular;
      margin-left: 5vw;
      font-weight: normal;
      margin-bottom: 3vw;
    }

    .filtro h3 {
      user-select: none;
      cursor: pointer;
      color: #5D5E9B;
      width: 70%;
      font-size: 4vw;
      padding-top: 0.4vw;
      margin-left: 4vw;
      height: auto;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      font-weight: normal;
    }

    .filtro h3:hover {
      opacity: 0.8;
    }

    .filtro span {
      font-size: 3.4vw;
      display: flex;
      flex-direction: row;
    }

    .tendina-filtro {
      font-size: 3vw;
      border-top-right-radius: 3vw;
      border-bottom-left-radius: 3vw;
      border-bottom-right-radius: 3vw;
      width: 65%;
      color: #000000;
      padding: 2vw 3vw;
      background-color: #C7C9FF;
      margin-left: 3vw;
      margin-top: 2vw;
      display: flex;
      flex-direction: column;
      font-family: Eina01-regular;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    }

    .tendina-filtro {
      opacity: 0;
      transition: opacity 0.5s;
      overflow: hidden;
      height: 0;
    }

    .tendina-filtro.mostra {
      opacity: 1;
      height: auto;
      transition: opacity 0.5s, height 0.5s;
    }

    .tendina-filtro-testo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: auto;
    }

    .oggetto-lista {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 6vw;
      height: 6vw;
      margin-top: 0vw;
      margin-bottom: 0.2vw;
      border-radius: 100%;
      background-color: #6667AB;
      transition: border-radius 0.5s;
      transition: margin-top 0.5s;
    }

    /* section contenente tutte le anteprime */
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .interfaccia-portfolio {
      background-color: #C7C9FF;
      border-radius: 5vw;
      width: 95vw;
      height: 50vw;
      max-height: 60vw;
      margin-top: 3vw;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .interfaccia-portfolio #sezione-immagini-portolio {
      height: 70%;
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .interfaccia-portfolio #testo-portfolio {
      height: 30%;
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 3vw;
    }

    .immagini-portfolio {
      width: 33.4%;
      height: 100%;
    }

    .immagini-portfolio:first-of-type {
      background-size: cover;
      background-position: center;
      border-top-left-radius: 2vw;
      background-image: url(../img/ricercaPage/foto1.png);
    }

    .immagini-portfolio:nth-of-type(2) div {
      width: 100%;
      height: 50%;
    }

    .immagini-portfolio:nth-of-type(2) > div:first-of-type {
      background-image: url(../img/ricercaPage/foto2.1.png);
      background-size: cover;
      background-position: center;
    }

    .immagini-portfolio:nth-of-type(2) > div:nth-of-type(2) {
      background-image: url(../img/ricercaPage/foto2.2.png);
      background-size: cover;
      background-position: center;
    }

    .immagini-portfolio:nth-of-type(3) {
      background-size: cover;
      background-position: center;
      border-top-left-radius: 2vw;
      background-image: url(../img/ricercaPage/foto3.png);
    }

    .interfaccia-curriculum:nth-of-type(4) {
      margin-bottom: 10vw;
    }

    .interfaccia-curriculum {
      background-color: #C7C9FF;
      border-radius: 5vw;
      width: 95vw;
      height: 50vw;
      max-height: 60vw;
      margin-top: 5vw;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: row;
      font-size: 2.5vw;
      font-family: Eina01-bold;
      color: #4B4C7B;
    }

    .interfaccia-curriculum h1 {
      padding-top: 3vw;
    }

    .interfaccia-curriculum p {
      padding-top: 1vw;
      padding-right: 10vw;
    }

    .interfaccia-curriculum .immagine-profilo {
      width: 38vw;
      height: 18vw;
      border-radius: 5vw;
      margin-top: 5vw;
      margin-left: 2vw;
      background-size: cover;
      background-position: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .interfaccia-curriculum div:nth-of-type(2) {
      margin-left: 5vw;
      margin-top: 2vw;
      font-size: 3vw;
    }

    #testo-portfolio {
      position: relative;
    }

    #testo-portfolio p {
      font-size: 3vw;
      margin-left: 3vw;
      margin-top: 0.2vw;
      font-family: Eina01-bold;
      color: #4B4C7B;
    }
  }
`;


const UserCard = (props) => {

    const info = props.info;

    if (info.profileImage == null) info.profileImage = ProfilePic;


    return (
        <div className="interfaccia-curriculum">
            <div className="immagine-profilo" style={{backgroundImage: `url("${info.profileImage}")`}}></div>
            <div>
                <h1>{info.fullName}</h1>
                <p>{info.mail}<br/>
                    {info.address}<br/>
                    Tel.{info.phoneNumber} <br/><br/>
                    {info.description}
                </p>
            </div>
        </div>
    )
}


const GenericFilterDisplayed = (props) => {
    const name = props.name;
    return (
        <div className="single-filter">
            <button onClick={props.delete}>x</button>
            <div className="filter-tag">{props.name}</div>
        </div>
    )
}


function ExploreCV(props) {

    const [filters, setFilters] = useState(["primo", "secondo", "terzo"]);

    const filtroRefs = useRef([]);

    useEffect(() => {
        for (let i = 1; i < 5; i++) {
            const idFiltro = "filtro" + i;
            const filtroDiv = document.getElementById(idFiltro);
            const oggettoLista = filtroDiv.querySelector(".oggetto-lista");
            const tendinaFiltroDiv = filtroDiv.querySelector(".tendina-filtro");
            const h3Filtro = document.getElementById(idFiltro + "-h3");

            const handleClick = () => {
                if (oggettoLista.style.borderBottomRightRadius === "0px") {
                    oggettoLista.style.transition = "0.5s";
                    oggettoLista.style.borderBottomRightRadius = "";
                    oggettoLista.style.marginTop = "";
                    tendinaFiltroDiv.classList.remove("mostra");
                } else {
                    oggettoLista.style.transition = "0.5s";
                    oggettoLista.style.borderBottomRightRadius = "0";
                    if (window.innerWidth < 800) {
                        oggettoLista.style.marginTop = "5vw";
                    } else {
                        if (h3Filtro.id === "filtro2-h3") {
                            oggettoLista.style.marginTop = "5.5vw";
                        } else {
                            oggettoLista.style.marginTop = "2.6vw";
                        }
                    }
                    tendinaFiltroDiv.classList.add("mostra");
                }
            };

            h3Filtro.addEventListener("click", handleClick);
            filtroRefs.current.push({handleClick, h3Filtro});
        }

        return () => {
            // Clean up event listeners
            filtroRefs.current.forEach((ref) => {
                const {handleClick, h3Filtro} = ref;
                h3Filtro.removeEventListener("click", handleClick);
            });
        };
    }, []);

    const applyFilters = () => {
        //check if display width is mobile
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        const asideElement = document.querySelector('aside');
        if (mediaQuery.matches && asideElement) {
            hideShowAside();
        }



        //check all checkbox filters
        const checkboxes = document.querySelectorAll("input[type=checkbox]");
        const checked = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) checked.push(checkbox.value);
        });
        setFilters(checked);
    }

    const hideShowAside = () => {

        var mediaQuery = window.matchMedia('(max-width: 600px)');
        var buttons = document.getElementById('button-flex');
        var filtri = document.getElementById('elenco-filtri');
        var asideElement = document.querySelector('aside');
        var sectionElement = document.querySelector('section');

        if (mediaQuery.matches && asideElement) {
            var asideDisplay = asideElement.style.display;

            buttons.style.display = (asideDisplay === 'block') ? 'flex' : 'none';
            filtri.style.display = (asideDisplay === 'block') ? 'flex' : 'none';
            asideElement.style.display = (asideDisplay === 'block') ? 'none' : 'block';
            asideElement.style.width = (asideDisplay === 'block') ? '0' : '100%';
            asideElement.style.border = (asideDisplay === 'block') ? '0' : '';
            sectionElement.style.display = (asideDisplay === 'block') ? 'flex' : 'none';
        }
    }

    return (
        <MainContainer>
            <div id="button-flex">
                <button id="button-ordina">Ordina</button>
                <button id="button-filtri" onClick={hideShowAside}>Filtri
                </button>
            </div>

            <div id="elenco-filtri">
                {filters.map((filter) => <GenericFilterDisplayed name={filter} delete={
                    () => {
                        //find checkbox with value filter and uncheck it
                        const checkbox = document.querySelector(`input[value=${filter}]`);
                        checkbox.checked = false;
                        //remove filter from state
                        setFilters(filters.filter((f) => f !== filter))
                    }
                }/>)}
            </div>
            <aside>
                <form action="">
                    <div className="filtro">
                        <span id="filtro1">
                            <div className="oggetto-lista"></div>
                            <div className="tendina-filtro-testo">
                                <h3 id="filtro1-h3">Titolo di studi</h3>
                                <div className="tendina-filtro">
                                    <span><input type="checkbox" name="primo" value="primo"/> Diploma</span>
                                    <span><input type="checkbox" name="secondo"
                                                 value="secondo"/> Laurea Triennale</span>
                                    <span><input type="checkbox" name="terzo" value="terzo"/> Laurea Magistrale</span>
                                    <span><input type="checkbox" name="quarto" value="quarto"/> Dottorato</span>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="filtro">
                        <span id="filtro2">
                            <div className="oggetto-lista"></div>
                            <div className="tendina-filtro-testo"
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "center",
                                     width: "80%",
                                     height: "auto"
                                 }}>
                                <h3 id="filtro2-h3">Conoscenza linguistica</h3>
                                <div className="tendina-filtro">
                                    <span><input type="checkbox" name="quinto" value="quinto"/> Inglese</span>
                                    <span><input type="checkbox" name="sesto" value="sesto"/> Francese</span>
                                    <span><input type="checkbox" name="settimo" value="settimo"/> Spagnolo</span>
                                    <span><input type="checkbox" name="ottavo" value="ottavo"/> Tedesco</span>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="filtro">
                        <span id="filtro3">
                            <div className="oggetto-lista"></div>
                            <div className="tendina-filtro-testo"
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "center",
                                     width: "80%",
                                     height: "auto"
                                 }}>
                                <h3 id="filtro3-h3">Settore</h3>
                                <div className="tendina-filtro">
                                    <span><input type="checkbox" name="nono" value="nono"/> Inglese</span>
                                    <span><input type="checkbox" name="decimo" value="decimo"/> Francese</span>
                                    <span><input type="checkbox" name="undicesimo" value="undicesimo"/> Spagnolo</span>
                                    <span><input type="checkbox" name="dodicesimo" value="dodicesimo"/> Tedesco</span>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="filtro">
                        <span id="filtro4">
                            <div className="oggetto-lista"></div>
                            <div className="tendina-filtro-testo"
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "center",
                                     width: "80%",
                                     height: "auto"
                                 }}>
                                <h3 id="filtro4-h3">Competenze</h3>
                                <div className="tendina-filtro">
                                    <span><input type="checkbox" name="tredicesimo" value="tredicesimo"/> Inglese</span>
                                    <span><input type="checkbox" name="quattordicesimo" value="quattordicesimo"/> Francese</span>
                                    <span><input type="checkbox" name="quindicesimo"
                                                 value="quindicesimo"/> Spagnolo</span>
                                    <span><input type="checkbox" name="sedicesimo" value="sedicesimo"/> Tedesco</span>
                                </div>
                            </div>
                        </span>
                    </div>
                </form>
                <button className="applica-resetta" type="button" onClick={applyFilters}>Applica</button>
                <button className="applica-resetta" type="button" onClick={
                    () => {
                        //uncheck all checkboxes
                        const checkboxes = document.querySelectorAll("input[type=checkbox]");
                        checkboxes.forEach((checkbox) => {
                            checkbox.checked = false;
                        });
                        //remove all filters from state
                        setFilters([]);
                    }
                }>Resetta
                </button>
            </aside>
            <section>
                {/*<div className="interfaccia-portfolio">*/}
                {/*    <div id="sezione-immagini-portolio">*/}
                {/*        <div className="immagini-portfolio"></div>*/}
                {/*        <div className="immagini-portfolio">*/}
                {/*            <div></div>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*        <div className="immagini-portfolio"></div>*/}
                {/*    </div>*/}
                {/*    <div id="testo-portfolio"><p>Mario Botti</p></div>*/}
                {/*    <div className="immagine-profilo" id="immagine-profilo1"></div>*/}
                {/*</div>*/}
                {props.data.map((user) => {
                    if (filters.length === 0) return <UserCard info={user}/>;
                    if (!filters.every((filter) => user.tags.includes(filter))) return <UserCard info={user}/>
                })}
            </section>
        </MainContainer>
    );
}

export default ExploreCV;
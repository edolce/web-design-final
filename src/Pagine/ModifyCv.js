import styled from "styled-components";
import skillsImg from '../img/ModificaProfilo/skills.png';
import newImg from '../img/ModificaProfilo/new.png';
import bigcubeImg from '../img/ModificaProfilo/bigcube.png';
import Group50Img from '../img/ModificaProfilo/Group 50.png';
import Group49Img from '../img/ModificaProfilo/Group 49.png';
import Group48Img from '../img/ModificaProfilo/Group 48.png';
import Group47Img from '../img/ModificaProfilo/Group 47.png';
import cubesImg from '../img/ModificaProfilo/3cubes.png';
import strutturaImg from '../img/ModificaProfilo/struttura.png';
import {useState} from "react";

const MainContainer = styled.div`
  flex-grow: 1;

  .barra-icone {
    margin-top: 2vw;
    width: auto;
    height: 7vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.2vw 0;
  }

  .div-icona {
    position: relative;
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .div-icona-immagine {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4vw;
    width: 4vw;
    border-radius: 1.5vw;
    background: #6667AB;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .barra-icone:first-of-type .div-icona-immagine:hover {
    scale: 0.95;
  }

  .barra-icone:first-of-type .div-icona:first-of-type {
    margin-left: 12vw;
  }

  .barraInf-icone {
    margin-bottom: 3vw;
  }

  .div-icona:nth-of-type(3) {
    margin-right: 12vw;
  }

  .div-icona-immagine img {
    filter: brightness(0) invert(1);
    width: 70%;
  }

  .div-icona-testo {
    font-size: 1.2vw;
    color: #6667AB;
    font-family: Eina01-regular;
  }

  section {
    height: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #scheda-curriculum {
    margin: 3vw 0;
    width: 30%;
    height: 45vw;
    border-radius: 2vw;
    box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .icone-tendina {
    border-radius: 2vw;
    position: absolute;
    height: 25vw;
    background-color: #C7C9FF;
    width: 30vw;
    display: flex;
    justify-content: center;
    overflow: scroll;
  }

  #skills {
    display: none;
    top: 18vw;
    left: 10vw;
  }

  #block {
    display: none;
    top: 18vw;
    right: 10vw;
  }

  #oneblock {
    display: none;
    top: 18vw;
    right: 39vw;
  }

  .intestazione .div-icona {
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .intestazione .div-icona-immagine {
    height: 4.5vw;
    width: 4.5vw;
  }

  .tendina-testo {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #block h2 {
    font-family: Eina01-regular;
  }

  .tendina-testo h2 {
    text-align: center;
    margin-top: 2vw;
    width: 90%;
    font-family: Eina01-bold;
    color: black;
    font-size: 1.2vw;
  }

  .tendina-blocchi {
    width: 60%;
  }

  .tendina-blocchi img {
    margin-top: 1vw;
    width: 100%;
  }

  .info {
    height: 4vw;
    width: 90%;
    text-align: center;
  }

  .info h3 {
    font-family: Eina01-regular;
    color: black;
    font-size: 1.1vw;
  }

  .icone-tendina::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1801px) and (max-width: 2300px) {
    #skills {
      top: 18vw;
      right: 10vw;
    }

    #block {
      top: 18vw;
      right: 10vw;
    }
  }
  @media screen and (min-width: 1001px) and (max-width: 1800px) {
    #skills {
      top: 22vw;
      right: 10vw;
    }

    #block {
      display: none;
      top: 22vw;
      right: 10vw;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 1000px) {
    .intestazione {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .intestazione .div-icona {
      border-bottom: 1px solid black;
      margin-top: 2vw;
      width: 100%;
      padding-bottom: 1vw;
      display: flex;
    }

    .icone-tendina {
      border-radius: 0;
      right: 0 !important;
      left: 0 !important;
      top: 12vw !important;
      height: 50vw;
      width: 100%;
    }

    .tendina-testo h2 {
      font-size: 1.8vw;
    }

    .info h3 {
      font-family: Eina01-regular;
      color: black;
      font-size: 1.7vw;
    }

    .barra-icone {
      height: 10vw;
    }

    .div-icona {
      width: 20%;
    }

    .div-icona-immagine {
      height: 6vw;
      width: 6vw;
      border-radius: 1.5vw;
      background: #6667AB;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .barra-icone:first-of-type .div-icona:first-of-type {
      margin-left: 8vw;
    }

    .div-icona:nth-of-type(3) {
      margin-right: 8vw;
    }

    .div-icona-testo {
      text-align: center;
      width: 100%;
      font-size: 1.5vw;
    }

    section {
      height: 70vw;
    }

    #scheda-curriculum {
      margin: 3vw 0;
      width: 40%;
      height: 55vw;
      box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (max-width: 600px) {
    .intestazione {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    #block h2 {
      margin-bottom: 2vw;
    }

    .tendina-testo {
      width: 90%;
    }

    .tendina-testo h2 {
      font-size: 3vw;
    }

    .tendina-testo h2:first-of-type {
      margin-top: 5vw;
    }

    .info h3 {
      font-family: Eina01-regular;
      color: black;
      font-size: 2.9vw;
    }

    .intestazione .div-icona-immagine {
      height: 10vw;
      margin-top: 3vw;
      width: 10vw;
    }

    .intestazione {
      width: 80%;
    }

    .intestazione .div-icona {
      border-bottom: 1px solid black;
      width: 100%;
      height: 22vw;
      padding-bottom: 1vw;
      display: flex;
    }

    .icone-tendina {
      border-radius: 0;
      right: 0 !important;
      left: 0 !important;
      top: 16vw !important;
      height: 120vw;
      width: 100%;
    }

    .barra-icone {
      justify-content: space-between;
      margin-top: 1vw;
      height: 20vw;
    }

    .div-icona {
      width: 30%;
    }

    .div-icona-immagine {
      height: 10vw;
      width: 10vw;
      border-radius: 2vw;
      background: #6667AB;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .barra-icone:first-of-type .div-icona:first-of-type {
      margin-left: 0vw;
    }

    .div-icona:nth-of-type(3) {
      margin-right: 0vw;
    }

    .div-icona-testo {
      margin-top: 0.5vw;
      text-align: center;
      width: 100%;
      font-size: 2.9vw;
    }

    section {
      height: 115vw;
    }

    #scheda-curriculum {
      margin: 3vw 0;
      width: 60%;
      height: 100vw;
      box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }
`


const ModifyCv = (props) => {
    const [isSkillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
    const [isBlockDropdownOpen, setBlockDropdownOpen] = useState(false);

    const toggleSkillsDropdown = () => {
        setSkillsDropdownOpen((prevState) => !prevState);

    };

    const toggleBlockDropdown = () => {
        setBlockDropdownOpen((prevState) => !prevState);
    };


    return (
        <>
            <MainContainer>
                <main>
                    <div className="barra-icone barraSup-icone">
                        <div className="div-icona">
                            <div className="div-icona-immagine" onClick={toggleSkillsDropdown}>
                                <img src={skillsImg} alt="Skills"/>
                            </div>
                            <div className="div-icona-testo">Lista skills</div>
                        </div>
                        <div className="div-icona">
                            <div className="div-icona-immagine" onClick="openSkill(event, 'oneblock')">
                                <img src={newImg} alt="Crea un blocco"/>
                            </div>
                            <div className="div-icona-testo">Crea un blocco</div>
                        </div>
                        <div className="div-icona">
                            <div className="div-icona-immagine" onClick={toggleBlockDropdown}>
                                <img src={bigcubeImg} alt="Lista blocchi"/>
                            </div>
                            <div className="div-icona-testo">Lista blocchi</div>
                        </div>
                    </div>
                    <section>
                        <div id="skills" className="icone-tendina" style={isSkillsDropdownOpen ? {display: "flex"} : {display: "none"}}>
                            <div className="intestazione">
                                <div className="div-icona">
                                    <div className="div-icona-immagine" onClick={toggleSkillsDropdown}>
                                        <img src={skillsImg} alt="Skills"/>
                                    </div>
                                    <div className="div-icona-testo">Lista skills</div>
                                </div>
                                <div className="tendina-testo">
                                    <h2>Main</h2>
                                    <div className="info">
                                        <h3>cerificato first</h3>
                                    </div>
                                    <h2>Certificati</h2>
                                    <div className="info"></div>
                                    <h2>Skills</h2>
                                    <div className="info"></div>
                                    <h2>Skills trasversali</h2>
                                    <div className="info"></div>
                                    <h2>Esperienze</h2>
                                    <div className="info"></div>
                                    <h2>Portfolio</h2>
                                    <div className="info"></div>
                                </div>
                            </div>
                        </div>
                        <div id="block" className="icone-tendina" style={isBlockDropdownOpen ? {display: "flex"} : {display: "none"}}>
                            <div className="intestazione">
                                <div className="div-icona">
                                    <div className="div-icona-immagine" onClick={toggleBlockDropdown}>
                                        <img src={bigcubeImg} alt="Lista blocchi"/>
                                    </div>
                                    <div className="div-icona-testo">Lista blocchi</div>
                                </div>
                                <div className="tendina-testo">
                                    <h2>Blocco 1: Intera larghezza pagina</h2>
                                    <div className="tendina-blocchi">
                                        <img src={Group50Img} alt="Blocco 1"/>
                                    </div>
                                    <h2>Blocco 2: Tre quarti di pagina</h2>
                                    <div className="tendina-blocchi">
                                        <img src={Group49Img} alt="Blocco 2"/>
                                    </div>
                                    <h2>Blocco 3: Metà pagina</h2>
                                    <div className="tendina-blocchi">
                                        <img src={Group48Img} alt="Blocco 3"/>
                                    </div>
                                    <h2>Blocco 4: Un quarto di pagina</h2>
                                    <div className="tendina-blocchi">
                                        <img src={Group47Img} alt="Blocco 4"/>
                                    </div>
                                    <h2>Blocco immagine</h2>
                                    <div style={{transform: 'scaleX(-1)'}} className="tendina-blocchi">
                                        <img src={Group47Img} alt="Blocco immagine"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="scheda-curriculum"></div>
                    </section>
                    <div className="barra-icone barraInf-icone">
                        <div className="div-icona">
                            <div className="div-icona-immagine">
                                <img src={cubesImg} alt="Modalità blocchi"/>
                            </div>
                            <div className="div-icona-testo">Modalità blocchi</div>
                        </div>
                        <div className="div-icona">
                            <div className="div-icona-immagine">
                                <img src={strutturaImg} alt="Modalità struttura"/>
                            </div>
                            <div className="div-icona-testo">Modalità struttura</div>
                        </div>
                    </div>
                </main>
            </MainContainer>
            <footer>
                <a onClick={() => props.setPage(5)}>Assistenza.</a>
            </footer>
        </>
    )
}

export default ModifyCv
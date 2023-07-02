import styled from "styled-components";

const MainContainer = styled.div`
  #numero-punti{
    margin-top: 4vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .punto-numero{
    width:7%;
    font-family: Eina01-regular;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    color:#5D5E9B;
    font-size: 1.2vw;
  }
  .punto-numero span{
    width:100%;
    height:2vw;
    display: flex;
    justify-content: center;
  }
  .font-zero{
    font-size: 0;
  }
  .punto-cerchio{
    font-family: Eina01-bold;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.7vw;
    border-radius: 50%;
    width:3.2vw;
    height: 3.2vw;
    background-color: #5d5e9b;
  }
  .punto-spazio{
    position: absolute;
    background-color:#c7c9ff;
    width: 35vw;
    margin-bottom: 1.7vw;
    height: 1.1vw;
  }
  section{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section .form-numero{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-domanda{
    font-family: Eina01-regular;
    font-size: 1.5vw;
    margin-top:1vw;
    text-align: left;
    width: 100%;
    padding:2vw 0;
    border-radius: 4vw;
    color:#5D5E9B;
  }

  .form-domanda p::first-line{
    font-size: 1.7vw;
    font-family: Eina01-bold;
  }

  .form-domanda {
    text-align: center;
  }

  .form-numero form{
    font-family: Eina01-regular;
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top: 2vw;
  }
  form label{
    font-family: Eina01-bold;
    font-size: 1.3vw;
    margin-bottom:0.4vw;
    color:#5D5E9B
  }
  form input{
    font-family: Eina01-bold;
    border-radius: 4vw;
    border: 0.2vw solid #6667AB;
    width: 95%;
    padding: 0.6vw 0.8vw;
    font-size: 1.2vw;
    margin-bottom: 2vw;
    margin-right:10vw;
  }
  form input::placeholder{
    font-size: 1.2vw;
    padding: 0.6vw 0.58vw;
    color: #5D5E9B;
  }
  form button{
    color: white;
    font-weight: bold;
    font-family: 'Eina01-regular', sans-serif;
    font-size: 1.3vw;
    background-color: #6667AB;
    border-radius: 5vw;
    border:none;
    width:60%;
    padding: 0.8vw 0;
    margin:5vw 0 10vw 7.8vw;
  }
  
  @media screen and ((min-width: 601px) and (max-width:1000px)){
  #numero-punti{
    margin-top: 2vw;
  }

  .punto-numero{
    width:8%;
    font-size: 1.7vw;
  }
  .punto-numero span{
    width:100%;
    height:2vw;
  }
  .punto-cerchio{
    font-size: 2vw;
    width:4vw;
    height: 4vw;
  }
  .punto-spazio{
    width: 43vw;
    margin-bottom: 1.7vw;
    height: 1.1vw;
  }

  .form-domanda{
    font-size: 1.8vw;
    margin-top:1vw;
    width: 100%;
    padding:2vw 0;
    border-radius: 4vw;
  }

  .form-domanda p::first-line{
    font-size: 2vw;
  }

  .form-numero form{
    width:100%;
    margin-top: 2vw;
  }

  form{
    padding-left:3vw;
  }

  form label{
    font-size: 1.7vw;
    margin-bottom:0.4vw;
  }

  form input{
    border-radius: 4vw;
    border: 0.4vw solid #6667AB;
    width: 85%;
    padding: 0.9vw 1.5vw;
    font-size: 1.5vw;
    margin-bottom: 2vw;
    margin-right:10vw;
  }

  form input::placeholder{
    font-size: 1.5vw;
    padding: 0.9vw 1vw;
  }

  form button{
    font-size: 1.7vw;
    border-radius: 15px;
    width:50%;
    padding: 1vw 0;
    margin:5vw 0 10vw 10vw;
  }
}

  @media screen and (max-width: 600px){
    #numero-punti{
      margin-top: 5vw;
      width: 100%;
    }

    #primo-punto{
      margin-left:4vw;
    }

    .punto-numero{
      width:13%;
      font-size: 2.7vw;
    }
    .punto-numero span{
      width:100%;
      height:3vw;
    }
    .punto-cerchio{
      font-size: 3.5vw;
      width:8vw;
      height: 8vw;
    }
    .punto-spazio{
      width: 63vw;
      margin-bottom: 2vw;
      height: 2vw;
    }
    .form-domanda{
      font-size: 3.2vw;
      margin-top:3vw;
      width: 100%;
      padding:2vw 0;
      border-radius: 4vw;
    }

    .form-domanda p::first-line{
      font-size: 3.5vw;
    }

    .form-numero form{
      width:100%;
      margin-top: 3vw;
    }
    form label{
      font-size: 3.8vw;
      margin-bottom:0.9vw;
    }
    form input{
      border-radius: 4vw;
      border: 0.7vw solid #6667AB;
      width: 95%;
      padding: 2vw 2vw;
      font-size: 3vw;
      margin-bottom: 2vw;
    }
    form input::placeholder{
      font-size: 3vw;
      padding: 2vw 2vw;
    }
    form button{
      font-size: 3vw;
      border-radius: 15px;
      width:50%;
      padding: 3vw 0;
      margin:10vw 0 10vw 20vw;

    }
  }
`

function DataFiller() {
    return (
        <MainContainer>
            <div id="numero-punti">
                <div className="punto-spazio"></div>
                <div id="primo-punto" className="punto-numero">
                    <div className="punto-cerchio"> 1</div>
                    <span id="punto-numero-uno">Contatti</span></div>
                <div className="punto-numero">
                    <div className="punto-cerchio"> 2</div>
                    <span id="punto-numero-due" className="font-zero">Istruzione</span></div>
                <div className="punto-numero">
                    <div className="punto-cerchio"> 3</div>
                    <span id="punto-numero-tre" className="font-zero">Esperienze</span></div>
                <div className="punto-numero">
                    <div className="punto-cerchio"> 4</div>
                    <span id="punto-numero-quattro" className="font-zero">Competenze</span></div>
                <div className="punto-numero">
                    <div className="punto-cerchio"> 5</div>
                    <span id="punto-numero-cinque" className="font-zero">Certificazioni</span></div>
                <div className="punto-numero">
                    <div className="punto-cerchio"> 6</div>
                    <span id="punto-numero-sei" className="font-zero">Layout</span></div>
            </div>
            <section>
                <div id="form-numero-uno" className="form-numero">
                    <div className="form-domanda"><p>Come possono contattarti i recruiter? <br/> inserisci tutte le tue
                        informazioni di contatto.</p></div>
                    <form>
                        <label>Nome</label>
                        <input type="text" placeholder="Mario Botti"/>
                            <label>Cognome</label>
                            <input type="text" placeholder="Digita qui"/>
                                <label>Indirizzo</label>
                                <input type="text" placeholder="Digita qui"/>
                                    <label>Email</label>
                                    <input type="text" placeholder="Digita qui"/>
                                        <label>Città</label>
                                        <input type="text" placeholder="Digita qui"/>
                                            <label>CAP</label>
                                            <input placeholder="Digita qui" type="text"/>
                                                <label>Numero di telefono</label>
                                                <input placeholder="Digita qui" type="text"/>
                                                    <label>Email</label>
                                                    <input placeholder="Digita qui" type="text"/>
                                                        <button type="button"
                                                                onClick="DivSuccessivo('form-numero-due','punto-numero-due')">Avanti
                                                        </button>
                    </form>
                </div>
                <div id="form-numero-due" className="form-numero" style={{display: "none"}}>
                    <div className="form-domanda"><p>Ottimo inizio! <br/>Ora inscerisci tutto ciò che riguarda la tua
                        istruzione, anche quella in corso.</p></div>
                    <form className="form-elenco">
                        <ul>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label>Scuole superiori</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Laurea triennale</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Laurea magristrale</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Master I livello</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Master II livello</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Dottorato</label></div>
                            <div className="riga-elenco">
                                <li className="tendina"></li>
                                <label htmlFor="email">Specialista</label></div>
                        </ul>
                        <button type="button" onClick="DivSuccessivo('form-numero-tre','punto-numero-tre')">Avanti
                        </button>
                    </form>
                </div>
                <div id="form-numero-tre" className="form-numero" style={{display: "none",border:"1px solid black"}}>
                    <button type="button" onClick="DivSuccessivo('form-numero-quattro','punto-numero-quattro')">Avanti
                    </button>
                </div>
                <div id="form-numero-quattro" className="form-numero"  style={{display: "none"}}>
                    <div className="form-domanda"><p>Molto bene! <br/>Ora è importante parlare delle tue esperienze
                        professionali.</p></div>
                    <form className="form-elenco">
                        <ul>
                            <div className="riga-elenco">
                                <li></li>
                                <label>Nessuna esperienza</label></div>
                            <div className="riga-elenco">
                                <li></li>
                                <label htmlFor="email">Aggiungi</label></div>
                        </ul>
                    </form>
                    <div className="form-domanda"><p>Parlaci delle tue esperienze! <br/>Comincia dalla più recente..</p>
                    </div>
                    <form>
                        <label>Ruolo</label>
                        <input type="text" placeholder="Inserisci ruolo"/>
                            <label>Ente</label>
                            <input type="text" placeholder="Inserisci ente"/>
                                <label>Città</label>
                                <input type="text" placeholder="Inserisci città"/>
                                    <label>Cap</label>
                                    <input type="text" placeholder="Inserisci cap"/>
                                        <label>Data inizio</label>
                                        <input type="text" placeholder="Inserisci data inizio"/>
                                            <label>Data fine</label>
                                            <input type="text" placeholder="Inserisci data fine"/>
                                                <button type="button"
                                                        onClick="DivSuccessivo('form-numero-cinque','punto-numero-cinque')">Avanti
                                                </button>
                    </form>
                </div>
                <div id="form-numero-cinque" className="form-numero" style={{display: "none",border:"1px solid black"}}>
                    <button type="button" onClick="DivSuccessivo('form-numero-sei','punto-numero-sei')">Avanti</button>
                </div>
                <div id="form-numero-sei" className="form-numero" style={{display: "none"}}>
                    <div className="form-domanda"><p>Ecco fatto!<br/>Divertiti a personalizzarlo come preferisci!</p>
                    </div>
                    <form>
                        <button type="button">Avanti</button>
                    </form>
                </div>
            </section>
        </MainContainer>

    )
}


// <script>
    //     // Funzione per gestire il clic su un div
    //     function DivSuccessivo(idForm,idSpan) {
    //     var formDaMostrare = document.getElementById(idForm);
    //     var spanDaMostrare = document.getElementById(idSpan);
    //     // Nascondi tutti i form
    //     var forms = document.getElementsByClassName("form-numero");
    //     var puntiNumerati = document.getElementsByClassName("punto-numero");
    //     for (var i = 0; i < forms.length; i++) {
    //     forms[i].style.display = "none";
    //     var spans = puntiNumerati[i].getElementsByTagName('span');
    //     for (var j = 0; j < spans.length; j++) {
    //     spans[j].style.fontSize = '0';
    // }
    // }
    //     // Mostra il form da rendere visibile
    //     formDaMostrare.style.display = "flex";
    //     spanDaMostrare.style.fontSize = '2.7vw';
    //
    // }
    // </script>

export default DataFiller
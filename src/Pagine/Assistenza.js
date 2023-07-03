import styled from "styled-components";

const MainContainer = styled.div`
  main{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  flex-grow: 1;
  section{
    margin-top: 3vw;
    width:50vw;
    font-size: 1.5vw;
    margin-bottom: 5vw;
  }
  section p{
    margin-bottom:1.5vw;
    color: #6667AB;
    font-family: Eina01-ligher;
  }
  p::first-line {
    font-family: Eina01-bold;
  }

  p span{
    font-family: Eina01-bold;
  }
  section textarea{
    width: 40vw;
    margin-left: 5%;
    margin-top: 2vw;
    height: 15vw;
    padding: 2vw 0 0 4vw;
    border: 3px solid #6667AB;
    border-radius: 1.3vw;
    font-family: Eina01-regular;
    font-size: 1.4vw;
  }
  section button{
    margin-top:3vw;
    text-align: center;
    margin-left: 18vw;
    width: 15vw;
    padding: 0.3vw 0;
    font-size: 1.4vw;
    font-family: Eina01-bold;
    border-radius:2vw;
    background-color: #6667AB;
    color: white;
    border:0;

  }

  section textarea::placeholder{
    display: block;
    color:#6667AB;
    width: 45%;
    font-family: Eina01-regular;
    font-weight: bold;
    font-size: 1.4vw;
  }
  @media screen and (max-width: 600px){
    main{
      justify-content:left;
    }
    section{
      margin-left:10%;
      margin-top:6vw;
    }
    section p{
      font-size: 3.7vw;
      width:80vw;
      margin-bottom:5vw;
    }

    section p:first-of-type{
      margin-bottom: 5vw;
    }
    section textarea{
      width: 68vw;
      margin-left: 5%;
      margin-top: 2vw;
      height: 25vw;
      padding: 2.5vw 0 0 4vw;
      border: 1px solid #6667AB;
      border-radius: 1.3vw;
      font-family: Eina01-regular;
      font-size: 3.1vw;
    }
    section textarea::placeholder{
      width: 60%;
      font-size: 3.1vw;
    }

    section button{
      margin-top:5vw;
      margin-left: 30vw;
      width: 25vw;
      padding: 0.6vw 0;
      font-size: 2.9vw;
      border-radius:2vw;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 1700px) {
    main{
      justify-content:left;
    }
    section{
      margin-left:10%;
      margin-top:6vw;
    }
    section p{
      font-size: 2vw;
      width:80vw;
    }
    section textarea{
      width: 68vw;
      margin-top: 3vw;
      height: 25vw;
      font-size: 1.8vw;
    }
    section textarea::placeholder{
      width: 45%;
      font-size: 1.8vw;
    }

    section button{
      margin-top:2vw;
      margin-left: 30vw;
      width: 19vw;
      padding: 0.6vw 0;
      font-size: 1.9vw;
      border-radius:2vw;
    }
  }
`

function Assistenza(props) {
  return (
      <>
      <MainContainer>
      <main>
          <section>
              <p>Domande frequenti.</p>
              <p>
                  <span>Posso utilizzare questo sito anche senza registrazione?</span><br/>
                  Sì, nel caso in cui volessi solo visualizzare Curriculum o Portfolio, nel caso in cui volessi
                  realizzarne uno bisogna registrarsi.
              </p>
              <p>
                  Chi ha accesso alla mia area personale?<br/>
                  L’accesso all’area personale è privato, nessuno a parte il proprietario ha il diritto di accedervi.
              </p>
              <p>
                  Chi può visualizzare il mio Cv o Portfolio?<br/>
                  Chiunque abbia accesso al sito può visualizzare il tuo Cv o Portfolio
              </p>
              <p>
                  Hai bisogno di ulteriore aiuto?<br/>
                  Scrivici le tue problematiche, risponderemo il prima possibile.
              </p>
              <textarea className="comment-box"
                        placeholder="Inserisci dettagli di utilizzo (Max 200 caratteri)"></textarea>
              <button type="button">invia</button>
          </section>
      </main>
    </MainContainer>
    <footer><a onClick={()=>props.setPage(5)}>Assistenza.</a></footer>
    </>
  );
}

export default Assistenza;
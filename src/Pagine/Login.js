import styled from "styled-components";
import Email from "../img/login/Registrazione/Email.png";
import Eye from "../img/login/Registrazione/Eye.png";
import Google from "../img/login/Registrazione/Google.png";
import Facebook from "../img/login/Registrazione/Facebook.png";
import LinkedIn from "../img/login/Registrazione/Linkedin.png";
import {useEffect} from "react";

const MainContainer = styled.div`
  * {
    margin: 0;
    border: 0;
  }


  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(93, 94, 155, 0.8);
  z-index: 100;

  #login {
    margin-top: 5vw;
    margin-bottom: 5vw;
    margin-left: 25vw;
    margin-right: 10vw;
    border-radius: 5vw;
    width: 45vw;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #login h1 {
    font-size: 2.5vw;
    font-family: Eina01-bold, sans-serif;
    color: #5D5E9B;
    text-align: center;
    margin-bottom: 2.5vw;
  }

  .inserisci img {
    width: 1.4vw;
    margin-left: 1vw;
  }

  .inserisci:nth-of-type(2) img {
    width: 1.7vw;
    margin-left: 0.9vw;
  }

  .inserisci {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 65%;
    margin-left: 5%;
  }

  .inserisci:first-of-type {
    margin-top: 3vw;
  }

  .inserisci:nth-of-type(2) {
    margin-top: 5vw;
  }

  #not-register {
    margin-top: 0.6vw;
    font-family: Eina01-ligher;
    color: #5D5E9B;
    font-size: 1.3vw;
    width: 50%;
    margin-bottom: 1vw;
  }

  .end-lines {
    margin-top: 1.5vw;
    font-family: Eina01-ligher;
    color: #5D5E9B;
    font-size: 1.3vw;
  }

  #login a {
    font-family: Eina01-ligher;
    color: #5D5E9B;
    margin-top: 1vw;
    margin-bottom: 1.5vw;
    width: 50%;
    height: 8%;
    font-style: italic;
    text-align: center;
    padding-left: 1%;
    font-size: 1.3vw;
  }

  #login a:visited {
    font-family: Eina01-ligher, sans-serif;
    color: #5D5E9B;
    text-decoration: none;

  }

  #login a:link {
    font-family: Eina01-ligher, sans-serif;
    color: #5D5E9B;
    text-decoration: none;
  }

  #login a:hover {
    font-weight: bold;
  }

  button {
    width: 30%;
    border-radius: 30px;
    font-family: Eina01-Bold, sans-serif;
    font-size: 1.3vw;
    text-align: center;
    background-color: #6667AB;
    color: rgb(255, 255, 255, 0.7);
    padding: 0.5vw 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    scale: 0.95;
  }

  input {
    border-radius: 1.3vw;
    padding-left: 1.6vw;
    font-family: Eina01-bold;
    font-size: 1.3vw;
    border: 0;
    width: 30vw;
    color: white;
    height: 3vw;
    background-color: #6667AB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    padding: 10% 0 10%;
    font-family: Eina01-bold;
    font-size: 1.3vw;
    color: rgb(255, 255, 255, 0.7);
  }

  .loghi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .immagini {
    width: 4vw;
    height: 4vw;
  }

  .immagini:nth-of-type(2) {
    width: 5vw;
    height: 5vw;
  }

  @media screen and (max-width: 600px) {

    #login {
      margin-top: 30vw;
      margin-left: 15vw;
      width: 70vw;
      height: 100vw;
    }

    #login h1 {
      font-size: 5vw;
      margin-bottom: 5vw;
    }

    #login input {
      padding: 0.8vw 0 0.8vw 3vw;
      border-radius: 5vw;
      width: 110vw;
      height: 5vw;
      font-size: 2.8vw;
      margin: 0;
    }

    input:first-of-type {
      margin-bottom: 10vw;
    }

    #login input::placeholder {
      font-size: 2.8vw;
    }

    #login a {
      margin-top: 3vw;
      margin-bottom: 3vw;
      font-size: 2.6vw;
    }

    button {
      width: 39%;
      font-size: 2.7vw;
      padding: 1.2vw 0;
    }

    #not-register {
      margin-top: 2vw;
      font-size: 2.5vw;
      width: 63%;
    }

    .loghi img {
      width: 6vw;
      height: 6vw;
      margin-right: 1vw;
    }

    .loghi img:nth-of-type(2) {
      width: 7.5vw;
      height: 7.5vw;
    }

    .end-lines {
      font-size: 2.1vw;
    }
  }
`

function Login(props) {

    useEffect(() => {
        window.onclick = function (event) {
            if (event.target !== document.getElementById("login")) {
                if (document.getElementById("login"))
                    props.close();
            }
        }
    })


    return (
        <MainContainer>
            <div id="login">
                <h1>Accedi</h1>
                <div className="inserisci">
                    <input type="text" name="username" id="username" placeholder="Email" required/>
                    <img src={Email} alt=""/>
                </div>
                <div className="inserisci">
                    <input type="password" name="password" id="password" placeholder="Password" required/>
                    <img src={Eye} alt=""/>
                </div>
                <a id="psw" href="#">Password dimenticata?</a>

                <button onClick={
                    () => {
                        props.checkLogin(
                            document.getElementById("username").value,
                            document.getElementById("password").value
                        );
                    }
                }>Login</button>

                <h5 id="not-register">Non sei ancora registrato?<a href="#">Clicca qui</a></h5>
                <div className="loghi">
                    <img className="immagini" src={Google} alt=""/>
                    <img className="immagini" src={Facebook} alt=""/>
                    <img className="immagini" src={LinkedIn} alt=""/>
                </div>
                <h3 className="end-lines">Support · Terms · Privacy</h3>
            </div>
        </MainContainer>
    )
}

export default Login;
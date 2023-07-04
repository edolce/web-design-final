import styled from "styled-components";

import Email from "../img/login/Registrazione/email.png";
import Eye from "../img/login/Registrazione/Eye.png";
import Google from "../img/login/Registrazione/Google.png";
import Facebook from "../img/login/Registrazione/Facebook.png";
import LinkedIn from "../img/login/Registrazione/Linkedin.png";
import Persona from "../img/login/Registrazione/user.png";
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


  #registrazione {
    margin-top: 2vw;
    margin-bottom: 5vw;
    margin-left: 25vw;
    margin-right: 10vw;
    border-radius: 5vw;
    width: 45vw;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus{
    outline: none;
    color: black;
    border-color: #C7C9FF;
    background-color: #C7C9FF;
  }

  input[type="text"]::placeholder, input[type="password"]::placeholder, input[type="email"]::placeholder{
    font-family: Eina01-bold;
    font-size: 1.1vw;
    color: white;
  }

  input:focus::placeholder{
    outline: none;
    color: black!important;
  }

  #registrazione h1 {
    font-size: 2.5vw;
    font-family: Eina01-bold, sans-serif;
    color: #5D5E9B;
    text-align: center;
    margin-bottom: 2vw;
  }

  .inserisci img {

    width: 3.2vw;
    margin-left: 1vw;
  }

  .inserisci:nth-of-type(2) img {
    width: 3.5vw;
    margin-left: 0.9vw;
  }

  .inserisci {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 65%;
    margin-left: 5%;
    margin-top: 3vw;
  }

  .inserisci:first-of-type {
    margin-top: 3vw;
  }

  form h8 {
    margin-top: 1.2vw;
    font-family: Eina01-ligher;
    color: #5D5E9B;
    font-size: 1.3vw;
    width: 50%;
    margin-bottom: 4vw;
  }

  .end-lines {
    font-family: Eina01-ligher;
    color: #5D5E9B;
    font-size: 1.3vw;
  }

  #registrazione a {
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

  #registrazione a:visited {
    font-family: Eina01-ligher, sans-serif;
    color: #5D5E9B;
    text-decoration: none;

  }

  #registrazione a:link {
    font-family: Eina01-ligher, sans-serif;
    color: #5D5E9B;
    text-decoration: none;
  }

  #registrazione a:hover {
    font-weight: bold;
  }
  
  button {
    width: 35%;
    margin-top: 5vw;
    margin-bottom: 3vw;
    border-radius: 30px;
    font-family: Eina01-Bold, sans-serif;
    font-size: 1.3vw;
    text-align: center;
    background-color: rgb(102, 103, 171,0.6);
    color: rgb(255, 255, 255, 0.7);
    padding: 0.5vw 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  button:hover {
    scale: 0.95;
    background-color: rgb(102, 103,171,1);
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

    #registrazione {
      margin-top: 30vw;
      margin-left: 15vw;
      width: 70vw;
      height: 100vw;
    }

    #registrazione h1 {
      font-size: 5vw;
      margin-bottom: 5vw;
    }

    #registrazione input {
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

    #registrazione input::placeholder {
      font-size: 2.8vw;
    }

    button {
      width: 40%;
      font-size: 2.8vw;
      padding: 1.2vw 0;
      margin-top: 7vw;
      margin-bottom: 10vw;
    }

    #registrazione h8 {
      margin-top: 2vw;
      font-size: 2.5vw;
      width: 63%;
    }

    .loghi img {
      width: 6vw;
      height: 6vw;
    }

    .loghi img:nth-of-type(2) {
      width: 7.5vw;
      height: 7.5vw;
    }

    #registrazione h3 {
      font-size: 2.1vw;
    }
  }
`

function Register(props) {

    useEffect(() => {
        window.onclick = function (event) {
            if (event.target === document.getElementById("registrazione-util")) {
                props.close();
            }
        }
    })

    const registration = async () => {
        const username = document.getElementById("username").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const password2 = document.getElementById("password2").value

        if (username === "" || email === "" || password === "" || password2 === "") {
            alert("Inserisci tutti i campi")
            return
        }
        if (password !== password2) {
            alert("Le password non coincidono")
            return
        }
        if (email.indexOf("@") === -1) {
            alert("Inserisci una mail valida")
            return
        }
        const isAvailable = await props.checkNicknameAndEmail(username, email);
        if (!isAvailable) {
            console.log("Username o email già esistenti")
            alert("Username o email già esistenti")
            return
        }

        console.log("Registrazione effettuata")
        props.register(username, email, password)
    }

    return (
        <MainContainer id="registrazione-util">
            <div id="registrazione">
                <h1>Registrati</h1>
                <div className="inserisci">
                    <input type="text" name="email" id="email" placeholder="Email" required/>
                    <img src={Email} alt=""/>
                </div>
                <div className="inserisci">
                    <input type="text" name="username" id="username" placeholder="Username" required/>
                    <img src={Persona} alt=""/>
                </div>
                <div className="inserisci">
                    <input type="password" name="password" id="password" placeholder="Password" required/>
                    <img src={Eye} alt=""/>
                </div>
                <div className="inserisci">
                    <input type="password" name="password" id="password2" placeholder="Ripeti Password" required/>
                    <img src={Eye} alt=""/>
                </div>

                <button onClick={registration}>Registrati</button>

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

export default Register;
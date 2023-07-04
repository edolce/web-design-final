import styled from "styled-components";

import ImportImage from "../img/AreaPersonale/Upload-Image.png"
import {useEffect} from "react";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-around;


  * {
    margin: 0;
    border: 0;


  }

  #header {
    height: 10vh;
    width: 100vw;
  }


  .card {
    background: #C7C9FF;
    border-radius: 2vw;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    z-index: -3;
  }


  .first #profile {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
  }

  .first #image {
    cursor: pointer;
    background-image: url(${ImportImage});
    background-repeat: no-repeat;
    background-size: 50% auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.6vw;
    width: 7.5vw;
    height: 10vw;
    border-radius: 1.5vw;
    background-color: #C7C9FF;
    z-index: 20;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    animation: background-size 0.3s;
  }

  .first #image:hover {
    background-size: 53% auto;
  }

  .first #image, .second #MyCVPropic {
    background-position: center;
  }

  .first #propicBox {
    width: 10vw;
    height: 10vw;
    display: flex;
    background-color: #6667AB;
    border-radius: 2vw;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .first #Recap {
    width: 60%;
  }

  .first #Recap #name {
    color: #6667AB;
    font-size: 1.6vw;
    font-family: Eina01-bold;
    font-weight: 700;
    height: 25%;
  }

  .first #Recap #occupation {
    color: #6667AB;
    font-size: 1.2vw;
    font-family: Eina01-bold;
    font-weight: 700;
    height: 5%;
    margin-bottom: 1vw;
  }

  .first #Recap #presentation {
    color: #000;
    font-size: 1.2vw;
    font-family: Eina01-bold;
    background-color: #C7C9FF;
    border-radius: 1.5vw;
    height: 70%;
    padding: 2vw 1.5vw;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .first #buttons {
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .first #buttons button {
    cursor: pointer;
    background-color: #6667AB;
    border-radius: 1.5vw;
    width: 4vw;
    height: 4vw;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    margin-bottom: 0.5vw;
  }

  .first #buttons button:hover {
    scale: 0.95;
  }

  .first #buttons img {
    width: 60%;
    filter: invert(100%);
  }

  .second #myCV #titleAndEmail {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
    width: 100%;
  }

  .second #myCV #cardTitle {
    position: relative;
    height: 23%;
    width: 40%;
    padding-left: 2vw;
    padding-top: 1vw;
    font-family: Eina01-bold, sans-serif;
    font-size: 2vw;
  }

  .second #myCV #cvCardEmail {
    position: relative;
    height: 15vh;
    border-left: 5px solid rgba(120, 120, 137, 1);
    font-family: Eina01-regular;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4vw;
    top: 5vh;
    right: 3vw;
    width: 40%;
    padding-left: 2vw;
  }

  .second #myCV #MyCVPropic {
    position: relative;
    bottom: 35%;
    left: 20%;
    height: 19vh;
    border-radius: 1.5vw;
    background-color: white;
  }

  .second #myCV #boxBehindPhoto {
    height: 15vh;
    width: 15vh;
    top: 15%;
    left: 2%;
    background: #6667AB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2vw;
    position: relative;
  }

  .second #myCV #name {
    color: #EEEEF6;
    font-size: 1.9vw;
    font-family: Eina01-regular;
    font-weight: 700;
    color: #EEEEF6;
    background-color: #4B4C7B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 14%;
    width: 50%;
    top: 7%;
    left: 2%;
    border-radius: 0 1vw 1vw 1.8vw;
    padding-left: 12vw;
    padding-top: 2vh;
    z-index: 1;
  }

  .third #myPortfolio #cardTitle {
    position: relative;
    height: 23%;
    width: 40%;
    padding-left: 2vw;
    padding-top: 1vw;
    font-family: Eina01-bold, sans-serif;
    font-size: 2vw;
  }

  .buttonBar1, .buttonBar2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 10%;
    left: 15%;
    width: 70%;
    height: 9vh;
    flex-shrink: 0;
    border-radius: 1.5vw;
    background: #6667AB;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .buttonBar1 img, .buttonBar2 img {
    width: auto;
    height: 1.6vw;
  }

  #Edit, #Delete, #Save, #Share, #Export {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vh;
    height: 7vh;
    border-radius: 5vw;
    background-color: #C7C9FF;
  }

  .second, .third {
    height: 45vh;
    margin-bottom: 5vw;
  }

  .third {
    margin-bottom: 15vh;
  }

  @media screen and (min-width: 1400px) and (max-width: 1900px) {
    .first image img {
      width: 30%;
      height: 10vw;
    }

    .first #Recap #name {
      color: #6667AB;
      font-size: 2vw;
      font-family: Eina01-regular;
      font-weight: 700;
      height: 25%;
    }

    .second, .third {
      height: 35vh;
      margin-bottom: 5vw;
    }

    .buttonBar1, .buttonBar2 {
      bottom: 10%;
      left: 15%;
      width: 70%;
      height: 6vh;
      border-radius: 1.5vw;
    }

    #Edit, #Delete, #Save, #Share, #Export {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5vh;
      height: 5vh;
      border-radius: 5vw;
      background-color: #C7C9FF;
    }

    .second #myCV #name {
      font-size: 2.3vw;
      height: 15%;
      width: 50%;
      top: 5%;
      left: 2%;
      border-radius: 0 1vw 1vw 1.8vw;
      padding-left: 12vw;
      padding-top: 0.5vh;
    }

    .second #myCV #MyCVPropic {
      position: relative;
      bottom: 30%;
      left: 20%;
      height: 18vh;
      border-radius: 1.5vw;
      background-color: white;
    }
  }
  @media screen and (max-width: 1401px) {
    .first #propicBox {
      width: 12vw;
      height: 12vw;
    }

    .first #image {
      margin-top: 1.5vw;
      width: 10vw;
      height: 12vw;
    }

    .buttonBar1, .buttonBar2 {
      height: 5vh;
    }

    #Edit, #Delete, #Save, #Share, #Export {
      width: 4vh;
      height: 4vh;
    }

    flex-direction: column;
    justify-content: space-between;

    .second #myCV #cvCardEmail {
      height: 10vh;
      border-left: 3px solid rgba(120, 120, 137, 1);
      font-size: 1.4vw;
      top: 3vh;
    }

    .second, .third {
      height: 25vh;
      margin-bottom: 8vw;
    }

    .second #myCV #boxBehindPhoto {
      height: 9vh;
      width: 11vh;
      top: 14%;
      left: 2%;
    }

    .second #myCV #MyCVPropic {
      position: relative;
      bottom: 30%;
      left: 20%;
      height: 11vh;
      border-radius: 3vw;
      background-color: white;
    }

    .second #myCV #name {
      font-size: 2.3vw;
      height: 15%;
      width: 40%;
      bottom: 15%;
      left: 2%;
      border-radius: 0 1vw 1vw 1.8vw;
      padding-left: 12vw;
      padding-top: 2vh;
      z-index: 1;
    }

    .first #Recap #name {
      font-size: 1.7vw;
    }

    .first #buttons {
      margin-top: 5vh;
    }

    .first #Recap #presentation {
      color: #000;
      font-size: 1.3vw;
      font-family: Eina01-regular;
      background-color: #C7C9FF;
      border-radius: 1.3vw;
      height: 70%;
      padding: 2vw 2vw;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .first #Recap #occupation {
      font-size: 1.5vw;
    }

    .buttonBar1 img, .buttonBar2 img {
      max-width: 100%;
      max-height: 100%;
      height: 70%;
      width: auto;
      object-fit: contain;
    }

    .first {
      width: 65vw;
    }

    .second {
      width: 65vw;
    }

    .third {
      width: 65vw;
    }
  }

  @media screen and (max-width: 600px) {
    .first image img {
      width: 10%;
    }

    .first {
      width: 90vw;
    }

    .first #propicBox {
      width: 17vw;
      height: 17vw;
    }

    .first #image {
      margin-top: 1.5vw;
      width: 13vw;
      height: 17vw;
    }

    .first #Recap #name {
      font-size: 3.2vw;
    }

    .first #Recap #occupation {
      font-size: 2.6vw;
    }

    .first #Recap #presentation {
      font-size: 2.3vw;
      border-radius: 1.5vw;
      height: 70%;
      padding: 2vw 4vw;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .first #buttons button {
      background-color: #6667AB;
      border-radius: 3vw;
      width: 8vw;
      height: 8vw;
      display: flex;
      align-items: center;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      justify-content: center;
      margin-bottom: 1vw;
    }

    .second, .third {
      height: 25vh;
      width: 90vw;
      margin-bottom: 8vw;
    }

    .second #myCV #name {
      font-size: 4.5vw;
      height: 18%;
      width: 50%;
      bottom: 15%;
      left: 2%;
      border-radius: 0 2vw 2vw 4vw;
      padding-left: 18vw;
      padding-top: 1.5vh;
      z-index: 1;
    }

    .buttonBar1, .buttonBar2 {
      height: 5vh;
      border-radius: 3vw;
    }

    #Edit, #Delete, #Save, #Share, #Export {
      width: 3.5vh;
      height: 3.5vh;
    }

    .second #myCV #cardTitle, .third #myPortfolio #cardTitle {
      position: relative;
      height: 23%;
      width: 40%;
      padding-left: 4vw;
      padding-top: 2vw;
      font-family: Eina01-bold, sans-serif;
      font-size: 4vw;
    }

    .second #myCV #cvCardEmail {
      height: 10vh;
      border-left: 2px solid rgba(120, 120, 137, 1);
      font-size: 2.6vw;
      top: 3vh;
      right: 3vh;
    }

    .buttonBar1 img, .buttonBar2 img {
      height: 60%;
    }
  }

  @media screen and (orientation: landscape) {

    flex-direction: column;
    justify-content: space-between;


    .second #myCV #name {
      width: 40%;
      padding-left: 19%;
    }


    .buttonBar1 img, .buttonBar2 img {
      cursor: pointer;
      width: 50%;
      height: auto;
    }

    .buttonBar1 img:hover, .buttonBar2 img:hover {
      scale: 0.95;
    }

    .second #myCV .BoxBehindPhoto {
      display: flex;
      align-items: center;
    }

    .second #myCV #MyCVPropic {
      right: 40%;
    }

    .second #myCV #email {
      font-size: clamp(0.7rem, 1.5vw, 1rem);
      justify-self: flex-end;
    }


    .first {
      width: 50vw;
    }

    .second {
      width: 50vw;
    }

    .third {
      width: 50vw;
    }
  }


`


const AreaPersonale = (props) => {

    useEffect(() => {

        const file = document.getElementById("image"),
            fileInput1 = document.querySelector("#imageUpload");

        file.addEventListener("click", () => {
            fileInput1.click();
        });
    })

    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageDiv = document.getElementById("image");
            const myCVPropicDiv = document.getElementById("MyCVPropic");
            const imageUrl = e.target.result;

            if (imageUrl) {
                imageDiv.style.backgroundImage = `url(${imageUrl})`;
                imageDiv.style.backgroundSize = "cover";
                myCVPropicDiv.style.backgroundImage = `url(${imageUrl})`;
                myCVPropicDiv.style.backgroundSize = "cover";
                props.updateProf(props.user["Id Utente"],imageUrl)
            } else {
                imageDiv.style.backgroundImage = "none";
                imageDiv.style.backgroundSize = "50% auto";
                myCVPropicDiv.style.backgroundImage = "none";
                myCVPropicDiv.style.backgroundSize = "50% auto";
            }
        };
        reader.readAsDataURL(file);
    }

    console.log(props.user.image);


    useEffect(() => {
        if(props.user.profileImage){
            const imageDiv = document.getElementById("image");
            const myCVPropicDiv = document.getElementById("MyCVPropic");
            if (imageDiv){
                imageDiv.style.backgroundImage = `url(${props.user.profileImage})`;
                imageDiv.style.backgroundSize = "cover";
            }
            if(
                myCVPropicDiv
            ){
                myCVPropicDiv.style.backgroundImage = `url(${props.user.profileImage})`;
                myCVPropicDiv.style.backgroundSize = "cover";

            }
        }

    })

    return (
        <MainContainer>
            <div className="first">
                <div id="profile">
                    <div id="propicBox">
                        <div id="image"><input type="file" id="imageUpload" accept="image/*" onChange={
                            handleImageUpload
                        } hidden/></div>
                    </div>
                    <div id="Recap">
                        <div id="name">
                            {props.user.name+" "+props.user.surname}
                        </div>
                        <div id="occupation">
                            Programmatore, Sviluppatore software
                        </div>
                        <div id="presentation">
                            Sviluppatore esperto, competente in diverse lingue di programmazione
                            e nell'ambito delle app web e mobile.
                            Collaborativo e orientato alla risoluzione dei
                            problemi con risultati di qualità.
                        </div>
                    </div>
                    <div id="buttons">
                        <button id="Settings"><img src={require('../img/AreaPersonale/Settings.png')}/></button>
                        <button id="Logout"><img src={require('../img/AreaPersonale/logout.png')}/></button>
                    </div>
                </div>
            </div>
            <div className="second">
                <div id="myCV" className="card">
                    <div id="titleAndEmail">
                        <div id="cardTitle">Il tuo CV</div>
                        <div id="cvCardEmail">{props.user.email}</div>
                    </div>
                    <div id="boxBehindPhoto">
                        <div id="MyCVPropic"></div>
                    </div>
                    <div id="name">{props.user.name+" "+props.user.surname}</div>
                </div>

                <div className="buttonBar1">
                    <button id="Edit" onClick={() => props.setPage(2)}><img src={require('../img/AreaPersonale/Edit.png')}/></button>
                    <button id="Delete"><img src={require('../img/AreaPersonale/Delete.png')}/></button>
                    <button id="Save"><img src={require('../img/AreaPersonale/Save.png')}/></button>
                    <button id="Share"><img src={require('../img/AreaPersonale/Share.png')}/></button>
                    <button id="Export"><img src={require('../img/AreaPersonale/Export.png')}/></button>
                </div>
            </div>

            <div className="third">
                <div id="myPortfolio" className="card">
                    <div id="cardTitle">Il tuo Porfolio</div>
                </div>
                <div className="buttonBar2">
                    <button id="Edit"><img src={require('../img/AreaPersonale/Edit.png')}/></button>
                    <button id="Delete"><img src={require('../img/AreaPersonale/Delete.png')}/></button>
                    <button id="Save"><img src={require('../img/AreaPersonale/Save.png')}/></button>
                    <button id="Share"><img src={require('../img/AreaPersonale/Share.png')}/></button>
                    <button id="Export"><img src={require('../img/AreaPersonale/Export.png')}/></button>
                </div>
            </div>
        </MainContainer>
    );
}

export default AreaPersonale;
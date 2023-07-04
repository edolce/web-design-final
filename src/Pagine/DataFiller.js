import styled from "styled-components";
import {useEffect, useState} from "react";
import Check from "../img/ricercaPage/checkWhite.png";
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";
import Form1 from "./Filling-Data/Part 1";
import Form2 from "./Filling-Data/Part 2";
import Form3 from "./Filling-Data/Part 3";
import Form4 from "./Filling-Data/Part 4";
import Form5 from "./Filling-Data/Part 5";
import Form6 from "./Filling-Data/Part 6";

const MainContainer = styled.div`
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
    background-image: url(${Check});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    font-weight: bold;
    color: white;
  }

  input[type="checkbox"].add:checked::before {
    //add icon
    background-image: url(${Plus});
  }

  input[type="checkbox"].remove:checked::before {
    //remove icon
    background-image: url(${Minus});
  }


  #numero-punti {
    margin-top: 4vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .punto-numero {
    cursor: pointer;
    width: 6%;
    font-family: Eina01-regular;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #5D5E9B;
    font-size: 1.1vw;
  }

  .punto-numero span {
    width: 100%;
    height: 2vw;
    margin-top: 0.5vw;
    display: flex;
    justify-content: center;
  }

  .font-zero {
    font-size: 0;
  }

  .punto-cerchio {
    font-family: Eina01-bold;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6vw;
    border-radius: 50%;
    width: 3.5vw;
    height: 3.5vw;
    background-color: #5d5e9b;
    transition: font-size 0.5s;
    box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .punto-cerchio:hover {
    scale: 1.05;
    font-size: 1.7vw;
  }

  .punto-spazio {
    position: absolute;
    background-color: #c7c9ff;
    width: 30vw;
    margin-bottom: 1.7vw;
    height: 0.8vw;
  }

  header .dropdown {
    position: absolute;
    z-index: 1;
  }

  section {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section .form-numero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-domanda {
    font-family: Eina01-regular;
    font-size: 1.2vw;
    width: 90%;
    text-align: left !important;
    padding: 2vw 0 0 10vw;
    border-radius: 4vw;
    color: #5D5E9B;
  }

  .form-domanda p::first-line {
    width: 100%;
    font-size: 1.5vw;
    font-family: Eina01-bold;
  }

  .form-numero form {
    font-family: Eina01-regular;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2vw;
  }

  #form-numero-uno form {
    padding-left: 10vw;
  }

  label {
    font-family: Eina01-bold;
    font-size: 1.3vw;
    margin-bottom: 0.4vw;
    color: #6667AB;
  }

  form input[type="text"], .certificazioni {
    color: black;
    font-family: Eina01-bold;
    border-radius: 4vw;
    border: 0.2vw solid #6667AB;
    width: 70%;
    padding: 0.6vw 1.2vw;
    font-size: 1.2vw;
    margin-bottom: 2vw;
    transition: border-color 0.3s, background-color 0.3s, opacity 0.3s;
  }

  #font-data:focus {
    font-family: Eina01-regular;
    color: black;
  }

  input[type=text]:focus, input[type=date]:focus {
    outline: none;
    border-color: #C7C9FF;
    background-color: #C7C9FF;
  }

  input[type=text]:focus::placeholder {
    opacity: 0.5;
  }

  form input[type="text"]::placeholder, .certificazioni p {
    font-size: 1.2vw;
    color: #5D5E9B;
  }

  form a {
    text-decoration: none;
    color: white;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    #numero-punti {
      margin-top: 2vw;
    }

    .punto-numero {
      width: 8%;
      font-size: 1.7vw;
    }

    .punto-cerchio:hover {
      font-size: 1.8vw;
    }

    .punto-numero span {
      width: 100%;
      height: 2vw;
    }

    .punto-cerchio {
      font-size: 2vw;
      width: 4vw;
      height: 4vw;
    }

    .punto-spazio {
      width: 43vw;
      margin-bottom: 1.7vw;
      height: 1.1vw;
    }

    .form-domanda {
      font-size: 1.8vw;
      margin-top: 1vw;
      width: 100%;
      padding: 2vw 0;
      border-radius: 4vw;
    }

    #form-numero-uno .form-domanda p {
      padding-left: 6vw;
    }

    .form-domanda p::first-line {
      font-size: 2vw;
    }

    .form-numero form {
      width: 100%;
      margin-top: 2vw;
    }

    #form-numero-uno form {
      padding-left: 5vw;
    }

    form {
      padding-left: 3vw;
    }

    form label {
      font-size: 1.7vw;
      margin-bottom: 0.4vw;
    }

    form input[type="text"] {
      border-radius: 4vw;
      border: 0.4vw solid #6667AB;
      width: 85%;
      padding: 0.9vw 1.5vw;
      font-size: 1.5vw;
      margin-bottom: 2vw;
      margin-right: 10vw;
    }

    form input[type="text"]::placeholder, .certificazioni p {
      font-size: 1.5vw;
    }
  }

  @media screen and (max-width: 600px) {
    #numero-punti {
      margin-top: 5vw;
      width: 100%;
    }

    #primo-punto {
      margin-left: 4vw;
    }

    .punto-numero {
      width: 13%;
      font-size: 2.7vw;
    }

    .punto-numero span {
      width: 100%;
      height: 3vw;
    }

    .punto-cerchio {
      font-size: 3.5vw;
      width: 8vw;
      height: 8vw;
    }

    .punto-cerchio:hover {
      font-size: 3.6vw;
    }

    .punto-spazio {
      width: 63vw;
      margin-bottom: 2vw;
      height: 2vw;
    }

    .form-domanda {
      font-size: 3.2vw;
      margin-top: 3vw;
      width: 100%;
      padding: 2vw 0;
      border-radius: 4vw;
    }

    .form-domanda p::first-line {
      font-size: 3.5vw;
    }

    .form-numero form {
      width: 100%;
      margin-top: 3vw;
    }

    #form-numero-uno p {
      padding-left: 5vw;
    }

    #form-numero-uno {
      padding-left: 4vw;
    }

    form label {
      font-size: 3.8vw;
      margin-bottom: 0.9vw;
    }

    form input[type="text"] {
      border-radius: 4vw;
      border: 0.5vw solid #5D5E9B;
      width: 82%;
      padding: 2vw 2vw;
      font-size: 3vw;
      margin-bottom: 2vw;
    }

    form input[type="text"]::placeholder, .certificazioni p {
      font-size: 3vw;
    }
  }

  #div-istruzione .blocco-istruzioni {
    margin-bottom: 2vw;
  }

  #form-numero-due {
    width: 40vw;
  }

  .form-elenco span {
    margin-bottom: 2vw;
  }

  input::placeholder {
    padding: 0;
    margin: 0;
  }

  #form-numero-due form input[type="text"] {
    font-family: Eina01-bold;
    border-radius: 4vw;
    border: 0.2vw solid #6667AB;
    width: 80%;
    padding: 0.6vw 0.8vw;
    font-size: 1.2vw;
    margin-bottom: 2vw;
    margin-right: 3vw;
  }

  #form-numero-due form #div-istruzione {
    padding-left: 6vw;
  }

  input[type="checkbox"]::before {
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 0.8vw;
  }

  #form-numero-due .form-domanda {
    font-family: Eina01-regular;
    font-size: 1.2vw;
    width: 75%;
    text-align: left;
    padding: 2vw 0 0 5vw;
    border-radius: 4vw;
    color: #5D5E9B;
  }

  #form-numero-due .form-domanda p::first-line {
    width: 100%;
    font-size: 1.5vw;
    font-family: Eina01-bold;
  }

  #form-numero-due .form-elenco {
    display: flex;
    flex-direction: column;
  }

  #form-numero-due .form-elenco span {
    padding-left: 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.3vw;
    font-family: Eina01-regular;
    color: #5D5E9B;
  }

  .data input {
    width: 50%;
    margin: 0;
    border-radius: 0.8vw;
    padding: 0.3vw 0.2vw;
    font-family: Eina01-bold;
    border: 2px solid #5D5E9B;
    text-align: center;
  }

  .data {
    display: flex;
    padding-left: 5vw;
    align-items: center;
    margin-left: 2vw;
  }

  #font-data {
    font-family: Eina01-regular;
    font-size: 1.3vw;
    color: #5D5E9B;
  }

  .riga-elenco label {
    font-size: 1.6vw;
  }

  .riga-elenco:first-of-type {
    margin-top: 0;
  }

  .riga-elenco {
    margin-top: 2vw;
  }

  #div-istrzione label {
    margin-bottom: 3vw;
  }

  #form-numero-due button {
    margin-left: 10.2vw;
    width: 52%;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    .riga-elenco label {
      font-size: 2.1vw;
    }

    #form-numero-due form input[type="text"] {
      width: 73%;
      border: 0.3vw solid #5D5E9B;
      padding: 0.9vw 1.5vw;
      font-size: 1.5vw;
      margin-bottom: 2vw;
    }

    #form-numero-due form #div-istruzione {
      padding-left: 8vw;
    }

    .data {
      padding-left: 8vw;
      margin-left: 2vw;
    }

    #font-data {
      font-size: 1.5vw;
    }

    #form-numero-due {
      width: 60vw;
    }

    input[type="checkbox"]::before {
      width: 2.3vw;
      height: 2.3vw;
      margin-right: 1vw;
    }

    #form-numero-due .form-elenco span {
      padding-left: 9vw;
      font-size: 1.9vw;
      margin-bottom: 2vw;
    }

    #form-numero-due .form-domanda {
      font-size: 1.8vw;
      width: 74.2%;
      padding: 2vw 0 0 8vw;
    }

    #form-numero-due .form-domanda p::first-line {
      font-size: 2vw;
    }

    #form-numero-due button {
      margin-left: 17vw;
      width: 39%;
    }
  }
  @media screen and (max-width: 600px) {
    .data {
      padding-left: 15vw;
      margin-left: 5vw;
    }

    .data input {
      border-radius: 2vw;
      padding: 1vw 2vw 1vw 0;
    }

    #font-data {
      font-size: 3vw;
    }

    .riga-elenco label {
      font-size: 4vw;
    }

    #form-numero-due form input[type="text"] {
      width: 80%;
      border: 0.7vw solid #6667AB;
      padding: 1.6vw 2vw;
      font-size: 3vw;
      margin-bottom: 2vw;
      margin-top: 1vw;

    }

    #form-numero-due form #div-istruzione {
      padding-left: 12vw;
    }

    #form-numero-due {
      width: 90vw;
    }

    input[type="checkbox"]::before {
      width: 4vw;
      height: 4vw;
      margin-right: 2.5vw;
    }

    #form-numero-due .form-elenco span {
      padding-left: 15vw;
      font-size: 3.5vw;
      margin-bottom: 3vw;
    }

    #form-numero-due .form-domanda {
      font-size: 3.2vw;
      width: 85%;
      padding: 2vw 0 0 5vw;
      margin-left: 15vw;
    }

    #form-numero-due .form-domanda p::first-line {
      font-size: 3.5vw;
    }

    .riga-elenco {
      margin-top: 3vw;
      margin-bottom: 1vw;
    }

    #form-numero-due button {
      margin-left: 28vw;
      width: 40%;
    }
  }

  #form-uno {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10vw;
  }

  #form-numero-tre span {
    display: flex;
    align-items: center;
    padding-left: 3vw;
    font-size: 1.3vw;
    font-family: Eina01-regular;
    color: #5D5E9B;
    margin-top: 0.5vw;
  }

  #form-due span {
    padding-left: 0
  }

  #form-uno span:first-of-type {
    margin-top: 2vw;
  }

  #form-numero-tre #form-due {
    width: 60%;
  }

  #form-numero-tre form input[type="text"] {
    width: 90%;
    padding-right: 0;
    margin-right: 0;
  }

  #form-due {
    width: 50%;
  }

  #form-due form {
    padding-left: 1.5vw;
    width: 100%;
  }

  .aggiungi-div {
    display: flex;
    flex-direction: column;
  }

  #form-numero-tre .form-domanda {
    font-size: 1.2vw;
    width: 60%;
    margin-left: 0.5vw;
    padding: 2vw 0 0 3vw;
  }

  #form-numero-tre input[type="checkbox"]::before {
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 1vw;
  }


  #form-numero-tre button {
    width: 61%;
    margin-left: 6.5vw;
  }

  #form-due .form-domanda {
    width: 90%;
    margin-top: 0.5vw;
    padding: 0 0 2vw 1.5vw;
    border-radius: 2vw;
  }

  #box-esperienza {
    padding-top: 1vw;
    padding-bottom: 8vw;
    border-radius: 2vw;
  }

  #box-esperienza::placeholder {
    display: block;
  }

  .data input {
    width: 50%;
    margin: 0;
    border-radius: 0.8vw;
    padding: 0.3vw 0.2vw;
    font-family: Eina01-bold;
    border: 2px solid #5D5E9B;
    text-align: center;
  }

  .data {
    display: flex;
    padding-left: 5vw;
    align-items: center;
    margin-left: 2vw;
    margin-bottom: 2vw;
  }

  #font-data {
    font-family: Eina01-regular;
    font-size: 1.3vw;
    color: #5D5E9B;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    #form-numero-tre .form-domanda {
      font-size: 1.8vw;
      padding: 2vw 0 0 8vw;
    }

    #form-due .form-domanda {
      font-size: 1.8vw;
      margin-left: 1vw;
      margin-top: 3vw;
      margin-bottom: 2vw;
      padding: 1vw 0 4vw 2.5vw;
      border-radius: 2vw;
    }

    #form-numero-tre input[type="checkbox"]::before {
      width: 2.3vw;
      height: 2.3vw;
      margin-right: 1vw;
    }

    #form-numero-tre span {
      margin-top: 1vw;
      padding-left: 6vw;
      font-size: 1.9vw;
    }

    #form-numero-tre span:first-of-type {
      margin-top: 3vw;
    }

    #form-numero-tre form input[type="text"] {
      width: 90%;
      border: 0.3vw solid #5D5E9B;
    }

    #form-due form {
      padding-left: 2vw;
    }

    #form-due span {
      padding-left: 0
    }

    #form-numero-tre button {
      margin-left: 8vw;
      width: 50%;
    }

    #textbox {
      padding-top: 1vw;
      padding-bottom: 11vw;
      border-radius: 2vw;
    }

    .data {
      padding-left: 8vw;
      margin-left: 2vw;
    }

    #font-data {
      font-size: 1.5vw;
    }
  }

  @media screen and (max-width: 600px) {
    #form-numero-tre .form-domanda {
      font-size: 3.2vw;
      padding: 2vw 0 0 10vw;
    }

    #form-due .form-domanda {
      font-size: 3.2vw;
      margin-top: 5vw;
      width: 85%;
      margin-left: 3vw;
      margin-bottom: 2vw;
      padding: 3vw 0 6vw 4vw;
      border-radius: 2vw;
    }

    #form-numero-tre input[type="checkbox"]::before {
      width: 4vw;
      height: 4vw;
      margin-right: 2vw;
    }

    #form-numero-tre #form-due {
      width: 80%;
    }

    #form-numero-tre span {
      margin-top: 2vw;
      padding-left: 7vw;
      font-size: 3.5vw;
    }

    #form-numero-tre span:first-of-type {
      margin-top: 5vw;
    }

    #form-numero-tre form input[type="text"] {
      width: 89%;
      border: 0.5vw solid #5D5E9B;
    }

    #form-due form {
      padding-left: 4vw;
    }

    #form-due span {
      padding-left: 0
    }

    #form-numero-tre button {
      width: 60%;
      margin-left: 15vw;
    }

    #box-esperienza {
      padding-top: 2vw;
      padding-bottom: 20vw;
      border-radius: 2vw;
    }

    .data {
      padding-left: 15vw;
      margin-left: 5vw;
    }

    .data input {
      border-radius: 2vw;
      padding: 1vw 2vw 1vw 0;
    }

    #font-data {
      font-size: 3vw;
    }

    #form-numero-tre button {
      margin-left: 20vw;
      width: 45%;
    }
  }

  #form-numero-quattro .form-domanda {
    font-size: 1.2vw;
    width: 70%;
    padding: 2vw 0 0 5vw;
  }

  #form-numero-quattro input[type="checkbox"]::before {
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 1vw;
  }

  #competenze {
    display: none;
  }


  #form-numero-quattro form input[type="text"] {
    width: 80%;
  }

  #form-numero-quattro span {
    display: flex;
    align-items: center;
    padding-left: 1vw;
    font-size: 1.3vw;
    font-family: Eina01-regular;
    color: #5D5E9B;
    margin-top: 1vw;
  }

  #form-numero-quattro span:nth-of-type(2) {
    margin-bottom: 2vw;
  }

  #form-numero-quattro form {
    width: 70%;
    padding-left: 4vw;
  }

  #form-numero-quattro .form-elenco {
    margin-top: 1vw;
  }

  #form-numero-quattro .riga-elenco label {

    font-size: 1.6vw;
  }

  #form-numero-quattro label {
    font-size: 1.3vw;
  }

  #form-numero-quattro button {
    width: 62%;
    margin-left: 5vw;
  }

  #textbox {
    padding-top: 1vw;
    padding-bottom: 8vw;
    border-radius: 2vw;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    #form-numero-quattro .form-domanda {
      font-size: 1.8vw;
      padding: 2vw 0 0 8vw;
    }

    #form-numero-quattro input[type="checkbox"]::before {
      width: 2.3vw;
      height: 2.3vw;
      margin-right: 1vw;
    }

    #form-numero-quattro .riga-elenco label {
      font-size: 2.2vw;
    }

    #form-numero-quattro label {
      font-size: 1.9vw;
    }

    #form-numero-quattro span {
      margin-top: 1vw;
      padding-left: 1vw;
      font-size: 1.9vw;
    }

    #form-numero-quattro form input[type="text"] {
      width: 80%;
      border: 0.3vw solid #5D5E9B;
    }

    #form-numero-quattro form {
      padding-left: 7vw;
    }

    #form-numero-quattro button {
      width: 50%;
      margin-left: 10vw;
    }

    #textbox {
      padding-top: 1vw;
      padding-bottom: 11vw;
      border-radius: 2vw;
    }
  }

  @media screen and (max-width: 600px) {

    #form-numero-quattro .form-domanda {
      font-size: 3.2vw;
      width: 65%;
      padding: 2vw 0 0 8vw;
    }

    #form-numero-quattro input[type="checkbox"]::before {
      width: 4vw;
      height: 4vw;
      margin-right: 2vw;
    }

    #form-numero-quattro .riga-elenco label:first-of-type {
      font-size: 3.9vw;
    }

    #form-numero-quattro label {
      font-size: 3.2vw;
    }

    #form-numero-quattro span {
      margin-top: 1vw;
      padding-left: 2.5vw;
      font-size: 3.5vw;
    }

    #form-numero-quattro form input[type="text"] {
      width: 88%;
      border: 0.5vw solid #5D5E9B;
    }

    #form-numero-quattro form {
      padding-left: 7vw;
    }

    #form-numero-quattro button {
      width: 50%;
      margin-left: 15vw;
    }

    #textbox {
      padding-top: 2vw;
      padding-bottom: 20vw;
      border-radius: 2vw;
    }
  }

  #form-numero-cinque .form-domanda {
    font-size: 1.2vw;
    width: 60%;
    padding: 2vw 0 0 2vw;
  }

  #form-numero-cinque .form-elenco {
    width: 70%;
    margin-top: 2vw;
  }

  #form-numero-cinque .form-elenco div {
    display: flex;
    flex-direction: column;
  }

  #form-numero-cinque input[type="checkbox"]::before {
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 1vw;
  }

  #form-numero-cinque form input[type="text"], .certificazioni {
    width: 85%;
  }

  #form-numero-cinque span {
    display: flex;
    align-items: center;
    font-size: 1.3vw;
    padding-left: 2vw;
    font-family: Eina01-regular;
    color: #5D5E9B;
    margin-bottom: 0.5vw;
  }

  #form-numero-cinque button {
    width: 60%;
    margin-left: 6.5vw;
  }

  #form-numero-cinque .riga-elenco label {
    font-size: 1.6vw;
  }

  .certificazioni {
    cursor: pointer;
    padding-top: 1vw;
    padding-bottom: 8vw;
    border-radius: 2vw;
  }

  .certificazioni p {
    display: block;
    width: 80%;
  }

  .div-certificazione {
    padding-left: 3vw;
  }

  .file-input {
    font-family: Eina01-bold;
    font-size: 1.4vw;
    color: #5D5E9B;
    margin-bottom: 2vw;
    margin-left: 2vw;
  }

  .file-input::file-selector-button {
    display: none;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    #form-numero-cinque .form-domanda {
      font-size: 1.8vw;
      padding: 2vw 0 0 8vw;
    }

    #form-numero-cinque input[type="checkbox"]::before {
      width: 2.3vw;
      height: 2.3vw;
      margin-right: 1vw;
    }

    #form-numero-cinque label {
      font-size: 1.9vw;
    }

    #form-numero-cinque span {
      margin-top: 1vw;
      padding-left: 1vw;
      font-size: 1.9vw;
    }

    #form-numero-cinque form input[type="text"], .certificazioni {
      width: 80%;
      border: 0.3vw solid #5D5E9B;
    }

    .file-input {
      font-size: 1.9vw;
    }

    #caricamento-file {
      padding-top: 1vw;
      padding-bottom: 11vw;
      border-radius: 2vw;
    }

    #form-numero-cinque button {
      width: 50%;
      margin-left: 9.5vw;
    }
  }
  @media screen and (max-width: 600px) {
    #form-numero-cinque .form-domanda {
      font-size: 3.2vw;
      width: 65%;
      padding: 2vw 0 0 10vw;
    }

    #form-numero-cinque input[type="checkbox"]::before {
      width: 4vw;
      height: 4vw;
      margin-right: 2vw;
    }

    #form-numero-cinque label {
      font-size: 3.2vw;
    }

    #form-numero-cinque span {
      margin-top: 1vw;
      padding-left: 2.5vw;
      font-size: 3.5vw;
    }

    #form-numero-cinque form input[type="text"], .certificazioni {
      width: 88%;
      border: 0.5vw solid #5D5E9B;
    }

    .file-input {
      font-size: 2.5vw;
    }

    #caricamento-file {
      padding-top: 2vw;
      padding-bottom: 20vw;
      border-radius: 2vw;
    }

    #form-numero-cinque button {
      width: 50%;
      margin-left: 15vw;
    }
  }

  #form-numero-sei form {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #scheda-curriculum {
    margin: 3vw 0;
    width: 70%;
    height: 45vw;
    box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
  }

  #form-numero-sei button {
    margin-left: 0.5vw;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    #scheda-curriculum {
      margin: 3vw 0;
      width: 90%;
      height: 55vw;
      box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (max-width: 600px) {
    #scheda-curriculum {
      margin: 3vw 0;
      width: 80%;
      height: 85vw;
      box-shadow: 0px 12px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }







`

// TODO: modalita desktop manca il padding top  (parlaci delle tue esperienze)

const UpperBar = (props) => {
    console.log(props.form);
    return (
        <div id="numero-punti">
            <div className="punto-spazio"></div>
            <div id="primo-punto" className="punto-numero" onClick={() => {
                props.changeForm(1);
            }}>
                <div className="punto-cerchio"> 1</div>
                <span id="punto-numero-uno" className={props.form === 1 ? "" : "font-zero"}>Contatti</span></div>
            <div className="punto-numero" onClick={() => {
                props.changeForm(2);
            }}>
                <div className="punto-cerchio"> 2</div>
                <span id="punto-numero-due" className={props.form === 2 ? "" : "font-zero"}>Istruzione</span></div>
            <div className="punto-numero" onClick={() => {
                props.changeForm(3);
            }}>
                <div className="punto-cerchio"> 3</div>
                <span id="punto-numero-tre" className={props.form === 3 ? "" : "font-zero"}>Esperienze</span></div>
            <div className="punto-numero" onClick={() => {
                props.changeForm(4);
            }}>
                <div className="punto-cerchio"> 4</div>
                <span id="punto-numero-quattro" className={props.form === 4 ? "" : "font-zero"}>Competenze</span></div>
            <div className="punto-numero" onClick={() => {
                props.changeForm(5);
            }}>
                <div className="punto-cerchio"> 5</div>
                <span id="punto-numero-cinque" className={props.form === 5 ? "" : "font-zero"}>Certificazioni</span>
            </div>
            <div className="punto-numero" onClick={() => {
                props.changeForm(6);
            }}>
                <div className="punto-cerchio"> 6</div>
                <span id="punto-numero-sei" className={props.form === 6 ? "" : "font-zero"}>Layout</span></div>
        </div>
    )
}

function DataFiller(props) {

    console.log("DATA2",props.curriculumData);

    if(localStorage.getItem("data")===null){


        if(props.curriculumData!==undefined){
            localStorage.setItem("data", JSON.stringify(props.curriculumData));
        }else{
            localStorage.setItem("data", JSON.stringify(
                {
                    form1: {
                        "Nome": "",
                        "Cognome": "",
                        "Indirizzo": "",
                        "Email": "",
                        "Città": "",
                        "CAP": "",
                        "Numero di telefono": ""
                    },
                    form2: {},
                    form3: [],
                    form4: {
                        "linguistiche": [],
                        "generic": []
                    }
                }
            ));
        }
    }
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

    console.log(data);

    const updateData = (formNumber, formData) => {
        setData({
            ...data,
            [`form${formNumber}`]: formData
        })
        localStorage.setItem("data", JSON.stringify(data));
    }

    const [form, setForm] = useState(1);

    //save data on database
    const saveData = () => {
        props.pushCurriculumData(data);
    }

    return (
        <MainContainer>


            <main>
                <UpperBar changeForm={setForm} form={form}/>
                <section>
                    {form === 1 &&
                        <Form1 changeForm={setForm}
                               updateData={(dataUp) => updateData(1, dataUp)} data={data.form1}
                               saveData={saveData}
                        />
                    }
                    {form === 2 &&
                        <Form2 changeForm={setForm}
                               updateData={(dataUp) => updateData(2, dataUp)} data={data.form2}
                               saveData={saveData}
                        />
                    }
                    {form === 3 && <Form3 changeForm={setForm}
                                          updateData={(dataUp) => updateData(3, dataUp)} data={data.form3}
                                          saveData={saveData}
                        />
                    }
                    {form === 4 && <Form4 changeForm={setForm}
                                            updateData={(dataUp) => updateData(4, dataUp)} data={data.form4}
                                          saveData={saveData}
                    />}
                    {form === 5 && <Form5 changeForm={setForm}
                                            updateData={(dataUp) => updateData(5, dataUp)} data={data.form5}
                                          saveData={saveData}
                    />}
                    {form === 6 && <Form6 changeForm={setForm} setPage={(i)=>{
                        props.setPage(i);
                    }}/>}
                </section>
            </main>
        </MainContainer>

    )
}


// <script>
// function DivSuccessivo(idForm,idSpan) {
//     var formDaMostrare = document.getElementById(idForm);
//     var spanDaMostrare = document.getElementById(idSpan);
//     // Nascondi tutti i form
//     var forms = document.getElementsByClassName("form-numero");
//     var puntiNumerati = document.getElementsByClassName("punto-numero");
//     for (var i = 0; i < forms.length; i++) {
//         forms[i].style.display = "none";
//         var spans = puntiNumerati[i].getElementsByTagName('span');
//         for (var j = 0; j < spans.length; j++) {
//             spans[j].style.fontSize = '0';
//         }
//     }
//     var larghezzaSchermo = window.innerWidth;
//     // Mostra il form da rendere visibile
//     formDaMostrare.style.display = "flex";
//     if(larghezzaSchermo <= 600){
//         spanDaMostrare.style.fontSize = '2.7vw';
//     } else if((larghezzaSchermo > 60) && (larghezzaSchermo < 1000)){
//         spanDaMostrare.style.fontSize = '1.7vw';
//     }
//     else{
//         spanDaMostrare.style.fontSize = '1.2vw';
//     }
// }
// function redirect(link) {
//     window.location.href = link;
// }
// </script>


/*
TODO:
    ALL:
        - Modificare css per centrare gli oggetti senza padding
        - Required
    CV1:
    CV2:
    CV3:
    CV4:
        - Aggiungere Tendina Grado Di conoscenza Lingue
    CV5:
 */

export default DataFiller
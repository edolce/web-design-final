import GoNextButton from "./Components/GoNextButton";
import {useState} from "react";
import Entry from "./Components/Entry";
import DateEntry from "./Components/DateEntry";
import styled from "styled-components";

const GoNextButtonCss = styled.button`
  width: 20vw;
  height: 4vw;
  background-color: #5D5E9B;
  border-radius: 2vw;
  border: none;
  color: white;
  font-family: Eina01-bold;
  font-size: 1.6vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  cursor: pointer;

  &:hover {
    background-color: #3F3F76;
  }
`

function Form6(props) {
    return (
        <div id="form-numero-sei" className="form-numero">
            <div className="form-domanda"><p>Ecco fatto!<br/>Divertiti a personalizzarlo come preferisci!</p></div>
            <form>
                <div id="scheda-curriculum">

                </div>
                <GoNextButtonCss type="button" onClick={() => props.changeForm(1)}>Modifica Layout</GoNextButtonCss>
            </form>
        </div>
    )
}
export default Form6;
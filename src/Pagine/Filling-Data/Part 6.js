import GoNextButton from "./Components/GoNextButton";
import {useState} from "react";
import Entry from "./Components/Entry";
import DateEntry from "./Components/DateEntry";
import styled from "styled-components";
import Curriculum from "../Curriculum/Curriculum";

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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #scheda-curriculum {
      overflow-y: scroll;
    }
`

function Form6(props) {
    return (
        <div id="form-numero-sei" className="form-numero">
            <div className="form-domanda"><p>Ecco fatto!<br/>Divertiti a personalizzarlo come preferisci!</p></div>
            <Container>
                <div id="scheda-curriculum">
                    <Curriculum/>
                </div>

                <GoNextButtonCss type="button" onClick={() => props.setPage(7)}>Modifica Layout</GoNextButtonCss>
            </Container>
        </div>
    )
}
export default Form6;
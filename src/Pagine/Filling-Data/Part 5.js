import GoNextButton from "./Components/GoNextButton";
import {useState} from "react";
import Entry from "./Components/Entry";
import DateEntry from "./Components/DateEntry";
import FormDomanda from "./Components/FormDomanda";
import FormWithEntries from "./Components/FormWithEntries";
import ResetAdd from "./Components/ResetAdd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-left: 20vw;
  padding-top: 2vw;
`

function Form5(props) {

    const [certificazioni, setCertificazioni] = useState([]);

    const handleAdd = () => {
        setCertificazioni([...certificazioni, []]);
        //uncheck Nessuna Esperienza
        document.querySelector("#reset").checked = false;
    }

    const handleRemove = (i) => {
        let temp = [...certificazioni];
        temp.splice(i, 1);
        setCertificazioni(temp);

        //check if empty
        if (temp.length === 0) {
            document.querySelector("#reset").checked = true;
        }
    }

    const handleReset = () => {
        setCertificazioni([]);
    }

    const entries = [
        "Tipologia di certificazione",
        "Carica la certificazione"
    ]

    return (
        <div id="form-numero-cinque" className="form-numero">
            <FormDomanda
                first="Manca poco!"
                second="Questo è un punto fondamentale: inserisci le tue competenze."
            />
            <Container>
                <ResetAdd
                    handleReset={() => handleReset()}
                    handleAdd={() => handleAdd()}
                />
            </Container>
            <FormWithEntries
                entries={entries}
                blocks={certificazioni}
                handleAdd={() => handleAdd()}
                handleRemove={(i) => handleRemove(i)}
            />
            {/*<form className="form-elenco">*/}
            {/*    {*/}
            {/*        certificazioni.map((e, i) => {*/}
            {/*            return (*/}
            {/*                <div className="aggiungi-div show-animation" id={"aggiungi-div" + (i + 1)}>*/}
            {/*                    {entries.map((entry) => {*/}
            {/*                        if (entry === "Carica la certificazione") return <input id="textbox" type="file"/>*/}
            {/*                        return <Entry name={entry}/>*/}
            {/*                    })}*/}
            {/*                    <button type="button" onClick={() => handleRemove(i)}>Rimuovi</button>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*    <span><input type="checkbox" onClick={() => handleAdd()}/>Aggiungi</span>*/}
            {/*    <GoNextButton form={5} changeForm={props.changeForm}/>*/}
            {/*</form>*/}
            <GoNextButton form={5} changeForm={props.changeForm}/>
        </div>
    )
}
export default Form5;
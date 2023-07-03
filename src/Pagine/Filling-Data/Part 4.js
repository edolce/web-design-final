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

function Form4(props) {

    const handleAdd = (type) => {
        if (type === "generic") {
            initData("generic")
            //uncheck Nessuna Esperienza
            document.querySelector("#generic #reset").checked = false;
        } else {
            initData("linguistiche")
            //uncheck Nessuna Esperienza
            document.querySelector("#lang #reset").checked = false;
        }
    }

    const handleRemove = (type, i) => {

        //check if empty
        if (props.data[type].length === 0) {
            document.querySelector(`#${type} #reset`).checked = true;
        }


        removeSpecificData(type, i)
    }

    const handleReset = (type) => {

        resetData(type);
    }

    const linguistica = [
        "Lingua",
        "Grado di espressione",
        "Grado di comprensione",
        "Grado di scrittura",
        "Dettagli di utilizzo"
    ]

    const generic = [
        "Competenza",
        "Grado di utilizzo",
        "Dettagli di utilizzo"
    ]


    //DYNAMIC DATA
    const initData = (type) => {
        const entries = type === "generic" ? generic : linguistica;

        //initialize data
        const data = {};
        entries.forEach((entry) => {
            data[entry] = "";
        })

        const newData = [...props.data[type], data];
        props.updateData({...props.data, [type]: newData});
    }

    const removeSpecificData = (type, index) => {
        const newData = [...props.data[type]];
        newData.splice(index, 1);
        props.updateData({...props.data, [type]: newData});
    }

    const resetData = (type) => {
        props.updateData({...props.data, [type]: []});
    }

    const updateData = (type, event, index, key) => {
        const newData = [...props.data[type]];
        newData[index][key] = event.target.value;
        props.updateData({...props.data, [type]: newData});

        //change color back to normal
        event.target.style.border = "";
        event.target.style.backgroundColor = "";
    }


    const ChangeFormHandler = () => {

        //check if all fields are filled
        let allFilled = true;
        Object.keys(props.data).forEach((key) => {
            props.data[key].forEach((entry) => {
                Object.keys(entry).forEach((key) => {
                    if (entry[key] === "") {
                        allFilled = false;
                    }
                })
            })
        })

        if (allFilled) {
            props.changeForm(5);
        } else {
            //find empty fields and change color
            Object.keys(props.data).forEach((key) => {
                props.data[key].forEach((entry, i) => {
                    Object.keys(entry).forEach((key2) => {
                        if (entry[key2] === "") {
                            let father;
                            if (key === "linguistiche")
                                father = document.querySelector(`.leng-util`);

                            else
                                father = document.querySelector(`.generic-util`);

                            const element = father.querySelector('#'+CSS.escape(`${key2}-${i}`));

                            if (element === null) {
                                return
                            }else{
                            }
                            element.style.border = "2px solid red";
                            element.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                        }
                    })
                })
            })
        }
    }

    return (
        <div id="form-numero-quattro" className="form-numero">
            <FormDomanda
                first="Siamo quasi alla fine!"
                second="Questo è un punto fondamentale: inserisci le tue competenze."
            />

            <Container id="lang">
                <div className="riga-elenco"><label>Competenze linguistiche</label></div>
                <ResetAdd handleReset={() => handleReset("linguistiche")} handleAdd={() => handleAdd("linguistiche")}/>
            </Container>
            <div className="leng-util" style={
                {
                    width: "100%",
                    paddingLeft: "20vw",
                }
            }>
                <FormWithEntries
                    entries={linguistica}
                    blocks={props.data.linguistiche}
                    handleAdd={() => handleAdd("linguistiche")}
                    handleRemove={(i) => handleRemove("linguistiche", i)}
                    handleChange={(event, i, key) => updateData("linguistiche", event, i, key)}
                />
            </div>

            <Container id="generic">
                <div className="riga-elenco"><label>Competenze generiche</label></div>
                <ResetAdd handleReset={() => handleReset("generic")} handleAdd={() => handleAdd("generic")}/>
            </Container>
            <div className="generic-util" style={
                {
                    width: "100%",
                    paddingLeft: "20vw",
                }
            }>
                <FormWithEntries
                    entries={generic}
                    blocks={props.data.generic}
                    handleAdd={() => handleAdd("generic")}
                    handleRemove={(i) => handleRemove("generic", i)}
                    handleChange={(event, i, key) => updateData("generic", event, i, key)}
                />
            </div>

            <GoNextButton form={4} changeForm={ChangeFormHandler}/>
        </div>
    )
}

export default Form4;
import GoNextButton from "./Components/GoNextButton";
import {useEffect, useState} from "react";
import Entry from "./Components/Entry";
import DateEntry from "./Components/DateEntry";
import ResetAdd from "./Components/ResetAdd";
import FormDomanda from "./Components/FormDomanda";
import FormWithEntries from "./Components/FormWithEntries";

const Form3 = (props) => {

    const handleAdd = () => {
        //uncheck reset
        document.getElementById("reset").checked = false;
        initData();
    }

    const handleRemove = (index) => {
        if (props.data.length === 0) {
            document.getElementById("reset").checked = true;
        }
        removeSpecificData(index);

    }

    const handleReset = () => {
        resetData();
    }

    const entries = [
        "Ruolo",
        "Ente",
        "Città",
        "CAP",
        "Data inizio",
        "Data fine",
        "Esperienza"
    ]



    //DYNAMIC DATA
    const initData=() => {
        //initialize data
            const data = {};
            entries.forEach((entry) => {
                data[entry] = "";
            })
            props.updateData([...props.data,data]);
    }

    const removeSpecificData = (index) => {
        const newData = [...props.data];
        newData.splice(index, 1);
        props.updateData(newData);
    }

    const resetData = () => {
        props.updateData([]);
    }

    const updateData = (event,index, key) => {
        const newData = [...props.data];
        newData[index] = {...newData[index], [key]: event.target.value};
        props.updateData(newData);

        //reset color
        const element = document.getElementById(key+"-"+index);
        if (element === null) return;
        element.style.border = "";
        element.style.backgroundColor = "";
    }


    useEffect(() => {
        //check the checkbox
        document.getElementById("reset").checked = props.data.length === 0;
    })

    const ChangeFormHandler = () => {
        //check if all data is filled
        let filled = true;
        props.data.forEach((data) => {
            Object.keys(data).forEach((key) => {
                if (data[key] === "") {
                    filled = false;
                }
            })
        })
        if (filled) {
            props.saveData();
            props.changeForm(4);
        } else {

            //find empty fields and change color
            props.data.forEach((data, i) => {
                Object.keys(data).forEach((key) => {
                    if (data[key] === "") {
                        const element = document.getElementById(key+"-"+i);
                        if (element === null) return;
                        element.style.border = "2px solid red";
                        element.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                    }
                })
            })
        }
    }

    return (
        <div id="form-numero-tre" className="form-numero">
            <div id="form-uno">
                <FormDomanda
                    first="Molto bene! "
                    second="Ora è importante parlare delle tue esperienze professionali."
                />
                <ResetAdd handleReset={handleReset} handleAdd={handleAdd}/>
            </div>
            <div id="form-due">
                <FormDomanda
                    first="Parlaci delle tue esperienze!"
                    second="Comincia dalla più recente.."
                />
                <FormWithEntries
                    entries={entries}
                    blocks={props.data}
                    handleAdd={handleAdd}
                    handleRemove={(i) => handleRemove(i)}
                    handleChange={(event,i, key) => updateData(event,i, key)}
                />
                <GoNextButton form={3} changeForm={
                    ChangeFormHandler
                }/>
            </div>
        </div>
    )
}
export default Form3;
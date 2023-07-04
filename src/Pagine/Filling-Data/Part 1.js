import GoNextButton from "./Components/GoNextButton";
import Entry from "./Components/Entry";
import FormDomanda from "./Components/FormDomanda";
import {useEffect, useState} from "react";

const Form1 = (props) => {

    const handleChange = (event,name) => {
        props.updateData({...props.data, [name]: event.target.value});
        // bring back to black
        event.target.style.backgroundColor = "";
        event.target.style.border = "";

    }



    const entries = [
        "Nome",
        "Cognome",
        "Indirizzo",
        "Email",
        "Città",
        "CAP",
        "Numero di telefono"
    ]



    useEffect(() => {
        //initialize data
        if (props.data === undefined) {
            const data = {};
            entries.forEach((entry) => {
                data[entry] = "";
            })
            props.updateData(data);
        }

    })

    const ChangeFormHandler = () => {
        //check if all fields are filled
        let allFilled = true;
        for (let key in props.data) {
            if (props.data[key] === "") {
                allFilled = false;
                break;
            }
        }
        if (allFilled) {
            props.changeForm(2);
            props.saveData();
        }
        else {
            //find empty fields and change color
            Object.keys(props.data).forEach((key) => {
                if (props.data[key] === "") {
                    const element = document.getElementById(key);
                    element.style.border = "2px solid red";
                    element.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                }
            })
        }

    }

    return (
        <div id="form-numero-uno" className="form-numero">
            <FormDomanda
                first="Come possono contattarti i recruiter?"
                second="Inserisci tutte le tue informazioni di contatto."
            />
            <form>
                {entries.map((entry) => {
                    return <Entry key={entry} name={entry} value={props.data[entry]} handleChange={(event) => handleChange(event,entry)}/>
                })}
            </form>
            <GoNextButton form={1} changeForm={ChangeFormHandler}/>
        </div>
    )
}

export default Form1;
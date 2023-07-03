import GoNextButton from "./Components/GoNextButton";
import {useEffect, useState} from "react";
import Entry from "./Components/Entry";
import DateEntry from "./Components/DateEntry";

const Form2 = (props) => {

    const handleChange = (event,key,name) => {
        props.updateData({...props.data, [key]: {...props.data[key], [name]: event.target.value}});
        // bring back to black
        event.target.style.backgroundColor = "";
        event.target.style.border = "";
    }

    console.log(props.data);

    const [checked, setChecked] = useState({
        Superiori: props.data["BOOL-Superiori"]?props.data["BOOL-Superiori"]:false,
        Triennale: props.data["BOOL-Triennale"]?props.data["BOOL-Triennale"]:false,
        Magistrale: props.data["BOOL-Magistrale"]?props.data["BOOL-Magistrale"]:false,
        Dottorato: props.data["BOOL-Dottorato"]?props.data["BOOL-Dottorato"]:false,
        Master: props.data["BOOL-Master"]?props.data["BOOL-Master"]:false,
        Altro: props.data["BOOL-Altro"]?props.data["BOOL-Altro"]:false
    });


    useEffect(() => {
        //check the checkbox
        Object.keys(checked).forEach((check) => {
            if (checked[check]) {
                document.getElementById(check).checked = true;
            }
        })
    })

    const handleCheckboxChange = (event) => {
        setChecked({...checked, [event.target.id]: event.target.checked});

        if (event.target.checked) {

            //get entry dict to push for data
            const entry = entries[event.target.id];
            const data = {};
            entry.forEach((entry) => {
                data[entry] = "";
            })
            props.updateData({...props.data, [event.target.id]: data, [`BOOL-${event.target.id}`]: event.target.checked});
        }else{
            //remove entry dict from data
            const data = props.data;
            delete data[event.target.id];
            props.updateData({...data, [`BOOL-${event.target.id}`]: event.target.checked});
        }
    }

    const entries = {
        Superiori: [
            "Nome scuola",
            "Città",
            "Data inizio",
            "Data fine"
        ],
        Triennale: [
            "Nome università",
            "Città",
            "Data inizio",
            "Data fine"
        ],
        Magistrale: [
            "Nome università",
            "Città",
            "Data inizio",
            "Data fine"
        ],
        Dottorato: [
            "Nome università",
            "Città",
            "Data inizio",
            "Data fine"
        ],
        Master: [
            "Nome università",
            "Città",
            "Data inizio",
            "Data fine"
        ],
        Altro: [
            "Nome università",
            "Città",
            "Data inizio",
            "Data fine"
        ]
    }


    const ChangeFormHandler = () => {
        //check if all fields are filled
        let allFilled = true;
        for (let key in props.data) {
            if (key.includes("BOOL")) {
                continue;
            }
            for (let entry in props.data[key]) {
                if (props.data[key][entry] === "") {
                    allFilled = false;
                    break;
                }
            }
            if (props.data[key] === "") {
                allFilled = false;
                break;
            }
        }


        if (allFilled) {
            props.changeForm(3);
        }
        else {
            //find empty fields and change color
            Object.keys(props.data).forEach((key) => {
                if (key.includes("BOOL")) {
                    return;
                }
                Object.keys(props.data[key]).forEach((entry) => {
                    if (props.data[key][entry] === "") {
                        const element = document.getElementById(key + "-" + entry);
                        element.style.border = "2px solid red";
                        element.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                    }
                })
            })
        }
    }

    return (
        <div id="form-numero-due" className="form-numero">
            <div className="form-domanda"><p>Ottimo inizio! <br/>Ora seleziona il tuo grado di formazione.</p></div>
            <form className="form-elenco">
                <div id="checkbox-div">
                    {Object.keys(checked).map((key) => {
                        return <span><input type="checkbox" id={key} onChange={handleCheckboxChange}/>{key}</span>
                    })}
                </div>
                <div id="div-istruzione">
                    {
                        Object.keys(checked).map((key) => {
                            if (checked[key]) {
                                return (
                                    <div className="blocco-istruzioni" id={key + "-div"}>
                                        <div className="riga-elenco"><label>{key}</label></div>
                                        {entries[key].map((entry) => {
                                            if (entry === "Data inizio" || entry === "Data fine")
                                                return ( <DateEntry entry={entry} id={key+"-"+entry} value={props.data[key] ? props.data[key][entry] : ""} handleChange={(event) => handleChange(event,key,entry)}></DateEntry>)
                                            else return <Entry name={entry} id={key+"-"+entry} value={props.data[key] ? props.data[key][entry] : ""} handleChange={(event) => handleChange(event,key,entry)}/>
                                        })}
                                    </div>
                                )

                            }
                        })
                    }
                </div>
            </form>
            <GoNextButton form={2} changeForm={ChangeFormHandler}/>
        </div>

    )
}
export default Form2;
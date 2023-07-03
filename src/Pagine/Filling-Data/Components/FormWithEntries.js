import DateEntry from "./DateEntry";
import Entry from "./Entry";
import GoNextButton from "./GoNextButton";

const FormWithEntries = (props) => {

    return <form className="form-elenco">
        {
            props.blocks.map((block, i) => {
                return (
                    <div className="aggiungi-div show-animation" id={"aggiungi-div" + (i + 1)} key={i}>
                        <span onClick={() => {
                            props.handleRemove(i)
                        }}><input type="checkbox" name="checkbox-group" id="aggiungi1" className="remove" checked={true}
                                  readOnly={true}/>Rimuovi</span>
                        {props.entries.map((entry) => {
                            if (entry === "Data inizio" || entry === "Data fine")
                                return (<DateEntry entry={entry} key={entry}
                                                    handleChange={(event) => props.handleChange(event, i, entry)}
                                                    value={block[entry]}
                                                   id={entry+"-"+i}
                                ></DateEntry>)
                            if (entry === "Carica la certificazione")
                                return <>
                                    <div className="certificazioni" id="certificazioni1">
                                        <p>Seleziona il file .pdf della tua certificazione (Max 10Mb)</p>
                                    </div>
                                    <input type="file" className="file-input" id={entry+"-"+i}
                                             onChange={(event) => props.handleChange(event, i, entry)}
                                    />
                                </>
                            return <Entry name={entry} key={entry}
                                            handleChange={(event) => props.handleChange(event, i, entry)}
                                            value={block[entry]}
                                          id={entry+"-"+i}
                            />
                        })}
                    </div>
                )
            })
        }
    </form>
}

export default FormWithEntries;
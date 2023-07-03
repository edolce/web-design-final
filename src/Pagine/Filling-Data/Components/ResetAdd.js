const ResetAdd = (props) => {
    return (
        <><span><input type="checkbox" name="checkbox-group" id="reset" onClick={props.handleReset} defaultChecked={true}/>Nessuna esperienza</span>
            <span><input type="checkbox" name="checkbox-group" id="aggiungi1" className="add" onChange={props.handleAdd} checked={true}/>Aggiungi</span>
        </>
    )
}

export default ResetAdd
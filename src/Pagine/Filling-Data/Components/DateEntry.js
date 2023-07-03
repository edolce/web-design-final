const DateEntry = (props) => {
    //select data
    return (
        <>
            <label>{props.entry}</label>
            <div className="data"><input id= {props.id? props.id : ""} type="date" value={
                props.value
            } onChange={
                (event) => {
                    props.handleChange(event);
                }
            }/></div>
        </>
    )
}

export default DateEntry;
const Entry = (props) => {
    return (
        <>
            <label>{props.name}</label>
            <input type="text" placeholder="Digita qui" onChange={props.handleChange} id= {props.id? props.id : props.name} value={props.value}/>
        </>
    )
}

export default Entry;
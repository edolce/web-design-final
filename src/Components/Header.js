import "./Header.css";
import Utente from "../img/icona-utente.png";
import Logo from "../img/Logo Employable.png";
import {useState} from "react";

function Header(props) {

    const [dropdownDisplay, setDropdownDisplay] = useState('none');

    return (
        <header>
            <img id="logo-EmPloyable" src={Logo} alt="" onClick={() => props.setPage(0)}/>
            <nav>
                <a className="nav-cv" onClick={() => props.setPage(1)}>Curriculum</a>
                <a className="nav-cv" onClick={() => props.setPage(0)}>Portfolio</a>
            </nav>
            <div id="profilo-utente" onClick={() => setDropdownDisplay(dropdownDisplay === 'none' ? 'flex' : 'none')}>
                <img src={Utente} alt=""/>
                <div className="dropdown" style={{display: dropdownDisplay}}>

                    {props.isUserLogged ? (
                            <div>
                                <h2 onClick={() => props.setPage(3)}> Profilo <div id="foto-profilo"><img src={Utente} alt=""/></div></h2>
                                <h2 onClick={props.disableLogin}> Log Out </h2>
                            </div>
                    ) : (
                        <div>
                            <h2 onClick={()=>{setTimeout(props.enableLogin, 400);}}> Accedi <div id="foto-profilo"><img src={Utente} alt=""/></div></h2>
                            <h2 onClick={()=>{setTimeout(props.enableRegister, 400);}}> Registrati </h2>
                        </div>
                    )
                    }
                </div>
            </div>
        </header>
    )
    {
        // return (
        //     <header>
        //         <img id="logo-EmPloyable" src={Logo} alt="" onClick={()=>props.setPage(0)}/>
        //         <nav>
        //             <a id="nav-cv" onClick={()=>props.setPage(1)}>Esplora CV</a>
        //             <a onClick={()=>props.setPage(2)}>Crea CV</a>
        //         </nav>
        //         <div id="profilo-utente" onClick={()=>setDropdownDisplay(dropdownDisplay === 'none' ? 'flex' : 'none')}>
        //             <img src={Utente} alt=""/>
        //             <div className="dropdown" style={{display: dropdownDisplay}}>
        //                 <h2 onClick={()=>props.setPage(3)}> Accedi <div id="foto-profilo"><img src={Utente} alt=""/></div></h2>
        //                 <h2 onClick={()=>props.setPage(4)}> Registrati </h2>
        //             </div>
        //         </div>
        //     </header>
        // )
    }
}

export default Header;
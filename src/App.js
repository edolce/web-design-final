import './App.css';
import {useEffect, useState} from "react";
import Header from "./Components/Header";
import HomePage from "./Pagine/HomePage";
import ExploreCV from "./Pagine/ExploreCV";
import DataFiller from "./Pagine/DataFiller";
import Login from "./Pagine/Login";
import Register from "./Pagine/Register";
import Assistenza from "./Pagine/Assistenza";
import Airtable from "airtable";
import login from "./Pagine/Login";
import ModifyCv from "./Pagine/ModifyCv";


function App() {

    Airtable.configure({apiKey: 'pat8dg4JF7CXEfjJG.16925ba134fa0a0eb6e978bada7af8915f64208856d40fb176b3745112ba842b'})
    const curriculumTable = Airtable.base('appD7zFEQQV1CFqoL').table('Curriculums');

    const userTable = Airtable.base('appD7zFEQQV1CFqoL').table('Users');

    let curriculums = []

    curriculumTable.select().all().then((records) => {
        records.forEach((record) => {
            //from string list separated by comma to array
            record["fields"]["tags"] = record["fields"]["tags"].split(",")
            if (record["fields"]["profile-image"] === undefined) {
                record["fields"]["profile-image"] = []
                record["fields"]["profile-image"][0] = {
                    "url": "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                }
            }


            curriculums.push(
                //insert id in fileds
                {
                    "id": record["id"],
                    "fullName": record["fields"]["full-name"],
                    "email": record["fields"]["email"],
                    "address": record["fields"]["address"],
                    "phoneNumber": record["fields"]["phone-number"],
                    "description": record["fields"]["description"],
                    "tags": record["fields"]["tags"],
                    "profileImage": record["fields"]["profile-image"][0]["url"]
                }
            );
        });
    });

    const [page, setPage] = useState(7);

    const [exploreCV, setExploreCV] = useState(curriculums);
    const [isLoginVisible, setLoginVisibility] = useState(false)

    const [isLogged, setLogStatus] = useState(false)

    const [user, setUser] = useState(null);

    const checkLoginCredentials = (email, password) => {
        Airtable.base('appD7zFEQQV1CFqoL').table('Users').select().all().then((records) => {
            records.forEach((record) => {
                if (record["fields"]["email"] === email && record["fields"]["password"] === password) {
                    setLoginVisibility(false)
                    setLogStatus(true)
                    setPage(0)
                    //fetch user info
                    setUser({
                        "id": record["id"],
                        "name": record["fields"]["name"],
                        "surname": record["fields"]["surname"],
                        "email": record["fields"]["email"],
                        "profileImage": record["fields"]["profile-image"][0]["url"]
                    })
                }
            });
        });
    }


    const checkNicknameAndEmail = async (username, email) => {
        const users = [];

        try {
            const records = await Airtable.base('appD7zFEQQV1CFqoL').table('Users').select().all();

            records.forEach((record) => {
                users.push(record["fields"]["name"]);
                users.push(record["fields"]["email"]);
            });

            if (users.includes(username)) {
                console.log("username already taken");
                return false;
            }

            if (users.includes(email)) {
                console.log("email already taken");
                return false;
            }

            return true;
        } catch (error) {
            console.log("Error fetching records:", error);
            return false;
        }
    }

    const register = async (nick, email, password) => {
        await userTable.create([
            {
                "fields": {
                    "name": nick,
                    "email": email,
                    "password": password,
                    "profile-image": [
                        {
                            "url": "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                        }
                    ]
                }
            }
        ]);
        setRegisterVisibility(false)
        checkLoginCredentials(email, password)
        //setPage(6)
    }


    const [isRegisterVisible, setRegisterVisibility] = useState(false)

    return (
        <div className="App">
            {isLoginVisible && <Login checkLogin={checkLoginCredentials} close={
                () => setLoginVisibility(false)
            }/>}
            {isRegisterVisible && <Register register={register} registerSuccess={() => setRegisterVisibility(false)}
                                            checkNicknameAndEmail={checkNicknameAndEmail}
                                            close={() => setRegisterVisibility(false)}
            />}
            {page !== 3 && page !== 4 && <Header isUserLogged={isLogged} setPage={(pageN) => setPage(pageN)}
                                                 enableLogin={() => setLoginVisibility(true)}
                                                 enableRegister={() => setRegisterVisibility(true)}
                                                 disableLogin={() => {
                                                     setLogStatus(false)
                                                     setUser(null)
                                                     console.log("logout")
                                                 }}/>}
            {page === 0 && <HomePage setPage={(pageN) => setPage(pageN)}/>}
            {page === 1 && <ExploreCV data={exploreCV}/>}
            {page === 2 && <DataFiller setPage={(pageN) => setPage(pageN)}/>}
            {page === 5 && <Assistenza setPage={(pageN) => setPage(pageN)}/>}
            {/*page === 6 && <AreaPersonale setPage={(pageN) => setPage(pageN)} user={user}/>*/}
            {page === 7 && <ModifyCv setPage={(pageN) => setPage(pageN)}/>}
        </div>
    );
}


/*
  TODO: Pagina ExploreCV [1]:
    far funzionare i filtri | Fetchare i dati dal database | Fixare filtri | Togliere quando tolto

  TODO: Pagina DataFiller [2]:
    far funzionare lo scorrimento | Salvare I dati nel database | Salvare session | Aggiungere un modo per arrivare a questa pagina



  TODO: Pagina Login [3]:

  TODO: Pagina Register [4]:

  TODO: Pagina Assistenza [5]:
    far funzionare l'invio della richiesta (DATABASE)

  TODO: Pagina Area Personale [6]:
    TUTTO

  TODO: Mettere Pointer ovunque




  TODO: Design Fixs
    - Fixare logo e home page description same padding left
    - Fixare section image del portfolio principale width 100%
    - Aggiungere un po di spazio tra portfolio principale e descrizione (same of footer and last curriculum)



 */

export default App;

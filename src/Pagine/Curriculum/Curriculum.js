import styled from "styled-components";


const CurriculumContainer = styled.div`

  .a4-container {
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin-top: 0;
  }

  .section {
    margin-bottom: 20px;
  }

  .section h2 {
    font-size: 18px;
    margin: 0;
    padding: 5px 0;
  }

  .section ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .section ul li {
    margin-bottom: 5px;
  }

  .section ul li strong {
    display: inline-block;
    width: 100px;
    font-weight: bold;
  }

  .section ul li span {
    display: inline-block;
  }
`

const Curriculum = (props) => {
    return (
        <CurriculumContainer>
            <div className="a4-container">
                <h1>Curriculum Vitae</h1>

                <div className="section">
                    <h2>Dati personali</h2>
                    <ul>
                        <li><strong>Nome:</strong> Mario Rossi</li>
                        <li><strong>Data di nascita:</strong> 10 gennaio 1980</li>
                        <li><strong>Email:</strong> mario.rossi@example.com</li>
                        <li><strong>Telefono:</strong> 0123456789</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Istruzione</h2>
                    <ul>
                        <li><strong>2000-2004:</strong> Laurea in Informatica presso l'Università XYZ</li>
                        <li><strong>1995-2000:</strong> Diploma di maturità scientifica presso il Liceo ABC</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Esperienza lavorativa</h2>
                    <ul>
                        <li>
                            <strong>2010-oggi:</strong> Sviluppatore software presso Azienda XYZ
                            <br/>
                                <span>Responsabilità principali: sviluppo di applicazioni web e gestione del team di sviluppo.</span>
                        </li>
                        <li>
                            <strong>2005-2010:</strong> Programmatore presso Azienda ABC
                            <br/>
                                <span>Responsabilità principali: manutenzione e sviluppo di software interno.</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Competenze tecniche</h2>
                    <ul>
                        <li><strong>Linguaggi di programmazione:</strong> HTML, CSS, JavaScript, Python</li>
                        <li><strong>Framework:</strong> React, Angular, Django</li>
                        <li><strong>Database:</strong> MySQL, PostgreSQL</li>
                        <li><strong>Altri strumenti:</strong> Git, Docker</li>
                    </ul>
                </div>
            </div>
        </CurriculumContainer>
    )
}

export default Curriculum
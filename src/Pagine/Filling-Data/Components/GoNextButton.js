import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 9vw;
  width: 100%;

    @media screen and (min-width: 601px) and (max-width: 1000px) {
    padding-right: 3vw;
      
    }
  
    @media only screen and (max-width: 600px) {
    }
`

const GoNextButtonCss = styled.button`
  width: 20vw;
  height: 4vw;
  background-color: #5D5E9B;
  border-radius: 2vw;
  border: none;
  color: white;
  font-family: Eina01-bold;
  font-size: 1.6vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  cursor: pointer;

  &:hover {
    background-color: #3F3F76;
  }


  @media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 34vw;
    height: 7vw;
    border-radius: 4vw;
    font-size: 2.8vw;
  }
  
    @media only screen and (max-width: 600px) {
      width: 34vw;
      height: 7vw;
      border-radius: 4vw;
      font-size: 2.8vw;
    }
`

const GoNextButton = (props) => {
    //Check if all the fields are filled
    if (props.form === 6) {
        props.form = 0;
    }
    return (
        <Container>
            <GoNextButtonCss onClick={props.changeForm}>Avanti</GoNextButtonCss>
        </Container>
    )
}

export default GoNextButton;
import styled from "styled-components";
import logo from '/dices.png';



const StartGame = ( {toggle}) => {
  return (
    <Container>
        <div>
            <img src={logo} alt="start_dice" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now!!</Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        h1 {
            font-size: 96px;
            white-space: nowrap;
            text-transform: uppercase;
        }
    }
`;

const Button = styled.button`
    color: white;
    padding: 10px 8px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`

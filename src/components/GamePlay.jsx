import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice";
import TotalScore from "./TotalScore"
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {


    if(!selectedNumber) {
      setError("You have not selected any Number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber === randomNumber){
      setScore((prev) => prev+randomNumber)
    }else {
      setScore((prev) => prev-2)
    }
    setSelectedNumber(undefined)
  
  }

  const resetScore = () =>{
    setScore(0);
  }

  
  return (
    <MainContainer>
        <div className="top_section">
          <TotalScore score={score}/>
          <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
          <Button className="variant" onClick={resetScore}>Reset</Button>
          <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        { showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
  padding-top: 15px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;

    .variant {
      color: black;
      padding: 10px 8px;
      background: white;
      border-radius: 5px;
      min-width: 220px;
      border: none;
      font-size: 16px;
      border: 1px solid black;
      transition: 0.4s background ease-in;
      cursor: pointer;

      &:hover {
          background-color: black;
          color: white;
          border: 1px solid transparent;
          transition: 0.3s background ease-in;
      }
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
    `;
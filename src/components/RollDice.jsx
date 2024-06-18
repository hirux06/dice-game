import { useState } from "react";
import styled from "styled-components";


const RollDice = ({currentDice, rollDice}) => {


  





  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`../../public/dices/dice_${currentDice}.png`} alt="heebe" />
      </div>
      <p>Clikc on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;

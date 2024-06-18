import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play this dice game..</h2>
      <div className="text">
        <p>1. Select a number from above shown numbers.</p>
        <p>2. Then click on the dice to get the computer generated roll</p>
        <p>If the selected number is equal to the computer generated roll then you will get the same point as the dice index</p>
        <p>Else, if you get wrong guess then 2 point will be deducted from the total score</p>
        <p>** Remember the score may also be negative **</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #fbf1f1;
    border-radius: 10px;
    margin-bottom: 30px;

    padding: 20px;
    h2 {
        font-size: 24px;
    }
    .text {
        margin: 24px;
    }
`
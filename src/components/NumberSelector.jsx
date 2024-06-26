import styled from "styled-components";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }
  
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {arr.map((value,idx) => (
                <Box $ifSelected={value === selectedNumber} key={idx} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
    }
    .error {
        color: red;
        font-weight: 500;
        margin-bottom: 2px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.$ifSelected ? "black" : "white")};
    color: ${(props) => (!props.$ifSelected ? "black" : "white")};
`;
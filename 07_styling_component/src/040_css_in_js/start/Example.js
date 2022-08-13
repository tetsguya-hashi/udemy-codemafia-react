import { useState } from "react";
import styled from 'styled-components'

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>ぼたん</StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>ぼたん</OrangeButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

const StyledButton = styled.button`
  margin: auto;
  border-radius: 999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected ? 'pink' : ','};
`;
const OrangeButton = styled(StyledButton)`
  background-color: orange;
  :hover {
    color: red;
  }
`;
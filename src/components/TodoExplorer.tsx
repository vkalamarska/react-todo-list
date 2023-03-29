import { useState } from "react";
import styled, { css } from "styled-components";
import DoneIcon from "../assets/done-icon.svg";

const TodoContainer = styled.div`
  width: 40%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  box-shadow: 0px 17px 85px 14px rgba(197, 197, 197, 0.62);
`;

const InputContainer = styled.input`
  padding: 16px 0 16px 60px;
  border: none;
  background: white;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: 24px;

  ::placeholder {
    color: rgba(197, 197, 197, 0.62);
  }
  :focus {
    outline: none;
  }
`;

// const DoneButton = styled.button`
//   margin: 10px 0;
//   border: none;
//   background-image: url(${DoneIcon});
//   background-size: 35%;
//   background-repeat: no-repeat;
//   background-position: center;
//   cursor: pointer;
// `;

const Label = styled.label`
  margin: 5px 0;
  padding: 16px 0 16px 16px;
  display: flex;
  justify-items: center;
  gap: 25px;
  border: none;
  background: white;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

const Icon = styled.svg`
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  margin: 0;
  width: 26px;
  height: 26px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 50%;
  transition: all 150ms;
  cursor: pointer;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const LabelText = styled.span<{ isChecked: boolean }>`
  font-size: 24px;

  ${(props) =>
    props.isChecked
      ? css`
          text-decoration: line-through;
          color: rgba(197, 197, 197, 0.62);
        `
      : ""}
`;

const Checkbox = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <CheckboxContainer>
        <HiddenCheckbox
          checked={isChecked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <StyledCheckbox checked={isChecked} />
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CheckboxContainer>
      <LabelText isChecked={isChecked}>Cleaning</LabelText>
    </>
  );
};

const TodoExplorer = () => {
  return (
    <TodoContainer>
      <InputContainer placeholder="What needs to be done?"></InputContainer>
      <Label>
        <Checkbox></Checkbox>
      </Label>
    </TodoContainer>
  );
};

export default TodoExplorer;

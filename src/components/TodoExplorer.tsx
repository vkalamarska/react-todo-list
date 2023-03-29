import { useState } from "react";
import styled, { css } from "styled-components";
import DoneIcon from "../assets/done-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";

const TodoContainer = styled.div`
  width: 40%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  box-shadow: 0px 17px 85px 14px rgba(197, 197, 197, 0.62);
`;

const InputContainer = styled.input`
  margin: 0 0 5px 0;
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

const List = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
  margin-bottom: 5px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 16px;
  background-color: white;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const DeleteButton = styled.button`
  padding: 8px;
  border: none;
  background-image: url(${DeleteIcon});
  background-color: white;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  :hover {
    fill: "papayawhip";
  }
`;

const Label = styled.label`
  display: flex;

  gap: 25px;
  border: none;
  background: white;
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

interface CheckboxProps {
  labelText: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelText }) => {
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
      <LabelText isChecked={isChecked}>{labelText}</LabelText>
    </>
  );
};

const TodoExplorer = () => {
  const [labelText, setLabelText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoContainer>
      <InputContainer
        placeholder="What needs to be done?"
        value={labelText}
        onChange={(e) => setLabelText(e.target.value)}
      ></InputContainer>
      <List>
        <LabelContainer>
          <Label>
            <Checkbox labelText={labelText}></Checkbox>
          </Label>
          <DeleteButton></DeleteButton>
        </LabelContainer>
      </List>
    </TodoContainer>
  );
};

export default TodoExplorer;

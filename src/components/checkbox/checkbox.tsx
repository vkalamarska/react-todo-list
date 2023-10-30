import React from "react";
import { TodoItem } from "../todo-explorer/todo-explorer";
import {
  Label,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  LabelText,
} from "./checkbox.styles";

interface CheckboxProps {
  item: TodoItem;
  setChecked: (val: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ item, setChecked }) => {
  return (
    <Label>
      <CheckboxContainer>
        <HiddenCheckbox
          checked={item.isChecked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <StyledCheckbox checked={item.isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <LabelText isChecked={item.isChecked}>{item.label}</LabelText>
    </Label>
  );
};

export default Checkbox;

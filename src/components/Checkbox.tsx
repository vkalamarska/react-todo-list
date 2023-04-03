import styled, { css } from "styled-components";
import { useState } from "react";
import { TodoItem } from "./TodoExplorer";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 25px;
  border: none;
  background: white;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  margin: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
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

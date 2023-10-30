import styled from "styled-components";
import DoneIcon from "../../assets/done-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

const TodoContainer = styled.div<{ isDarkMode: boolean }>`
  width: 40%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  box-shadow: 0px 17px 85px 14px rgba(197, 197, 197, 0.62);

  ${(p) =>
    p.isDarkMode &&
    `
    box-shadow: 0px 17px 85px 14px rgba(118, 118, 118, 0.62);
    `}
`;

const InputWrapper = styled.div`
  margin: 0 0 3px 0;
  padding: 16px 16px 16px 20px;
  gap: 25px;
  display: flex;
  justify-items: center;
  background-color: white;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const InputContainer = styled.input`
  padding: 0;
  border: none;
  font-size: 24px;

  ::placeholder {
    color: rgba(197, 197, 197, 0.62);
  }
  :focus {
    outline: none;
  }
`;

const DoneButton = styled.button`
  padding: 0 9px;
  border: none;
  background-image: url(${DoneIcon});
  background-color: white;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const List = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
`;

const LabelContainer = styled.div`
  margin-bottom: 3px;
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

export {
  DeleteButton,
  DeleteIcon,
  DoneButton,
  DoneIcon,
  InputContainer,
  InputWrapper,
  LabelContainer,
  List,
  TodoContainer,
};

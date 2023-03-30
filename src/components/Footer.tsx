import styled, { css } from "styled-components";
import { useState } from "react";

const FooterContainer = styled.div`
  margin: 0 0 3px 0;
  padding: 10px 15px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  color: #777;
  font-size: 14px;
  background-color: white;
`;

const ItemLeft = styled.span``;

const StatusContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const AllItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }
`;

const ActiveItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }
`;

const CompletedItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }
`;

const ClearCompleted = styled.button`
  border: none;
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid #777;
  }
`;

interface FooterProps {
  labelText: string;
  todoItems: string[];
  isChecked: boolean;
}

const Footer: React.FC<FooterProps> = ({ labelText, todoItems, isChecked }) => {
  const handleComletedItems = () => {
    // const completedItems = todoItems.filter((item, i) => i>0,  === isChecked )
    // setTodoItems(completedItems);
  };

  return (
    <FooterContainer>
      <ItemLeft>2 items left</ItemLeft>
      <StatusContainer>
        <AllItems>All</AllItems>
        <ActiveItems labelText={labelText}>Active</ActiveItems>
        <CompletedItems labelText={labelText} onClick={}>
          Completed
        </CompletedItems>
      </StatusContainer>
      <ClearCompleted>Clear Completed</ClearCompleted>
    </FooterContainer>
  );
};

export default Footer;
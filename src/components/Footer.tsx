import styled, { css } from "styled-components";
import { useState } from "react";
import { FilterType, TodoItem } from "./TodoExplorer";

const FooterContainer = styled.div`
  padding: 10px 15px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
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

  :active {
    background-color: rgba(175, 47, 47, 0.15);
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

  :active {
    background-color: rgba(175, 47, 47, 0.15);
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

  :active {
    background-color: rgba(175, 47, 47, 0.15);
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
  todoItems: TodoItem[];
  setFilter: (val: FilterType) => void;
  deleteMultiple: (ides: number[]) => void;
}

const Footer: React.FC<FooterProps> = ({
  todoItems,
  setFilter,
  deleteMultiple,
}) => {
  const handleDeleteCompleted = () => {
    const allCheckedItems = todoItems.filter((item) => item.isChecked === true);
    deleteMultiple(allCheckedItems.map((i) => i.id));
  };

  const itemLeftStatus = () => {
    const arrayLength = todoItems.filter(
      (item) => item.isChecked === false
    ).length;

    const itemsWord = arrayLength === 1 ? "item" : "items";

    return `${arrayLength} ${itemsWord} left`;
  };

  return (
    <FooterContainer>
      <ItemLeft>{itemLeftStatus()}</ItemLeft>
      <StatusContainer>
        <AllItems onClick={() => setFilter("all")}>All</AllItems>
        <ActiveItems onClick={() => setFilter("unchecked")}>Active</ActiveItems>
        <CompletedItems onClick={() => setFilter("checked")}>
          Completed
        </CompletedItems>
      </StatusContainer>
      <ClearCompleted onClick={() => handleDeleteCompleted()}>
        Clear Completed
      </ClearCompleted>
    </FooterContainer>
  );
};

export default Footer;

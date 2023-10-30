import { FilterType, TodoItem } from "../todo-explorer/todo-explorer";
import React from "react";
import {
  FooterContainer,
  ItemLeft,
  StatusContainer,
  AllItems,
  ActiveItems,
  CompletedItems,
  ClearCompleted,
} from "./footer.styles";

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

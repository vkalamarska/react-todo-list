import { useState } from "react";
import styled, { css } from "styled-components";
import DoneIcon from "../assets/done-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";
import Checkbox from "./Checkbox";
import Footer from "./Footer";

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

export interface TodoItem {
  id: number;
  label: string;
  isChecked: boolean;
}

export type FilterType = "all" | "checked" | "unchecked";

const getUniqueId = (todoItems: TodoItem[]): number => {
  if (!todoItems.length) return 0;
  const highestId = todoItems.map((item) => item.id).sort((a, b) => b - a)[0];
  return highestId + 1;
};

interface IProps {
  isDarkMode: boolean;
}

const TodoExplorer = ({ isDarkMode }) => {
  const [inputText, setInputText] = useState("");

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const [filter, setFilter] = useState<FilterType>("all");

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTodoItems([
        ...todoItems,
        { id: getUniqueId(todoItems), label: inputText, isChecked: false },
      ]);
      setInputText("");
    }
  };

  const handleDelete = (id: number) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const deleteMultiple = (ides: number[]) => {
    const newTodoItems = todoItems.filter((item) => !ides.includes(item.id));
    setTodoItems(newTodoItems);
  };

  const handleCheck = (id: number, value: boolean) => {
    const allOtherItems = todoItems.filter((item) => item.id !== id);
    const updatedItem = todoItems.find((item) => item.id === id)!;
    setTodoItems([...allOtherItems, { ...updatedItem, isChecked: value }]);
  };

  const handleDoneButton = () => {
    const allChecked = todoItems.map((item) => ({
      ...item,
      isChecked: true,
    }));
    setTodoItems(allChecked);
    if (todoItems.every((items) => items.isChecked === true)) {
      const allUnchecked = todoItems.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setTodoItems(allUnchecked);
    }
  };

  const filterItems = (item: TodoItem): boolean => {
    if (filter === "checked") {
      return item.isChecked;
    }

    if (filter === "unchecked") {
      return !item.isChecked;
    }

    return true;
  };

  return (
    <TodoContainer isDarkMode={isDarkMode}>
      <InputWrapper>
        {todoItems.length > 0 && (
          <DoneButton onClick={() => handleDoneButton()}></DoneButton>
        )}
        <InputContainer
          placeholder="What needs to be done?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleEnter}
        ></InputContainer>
      </InputWrapper>
      <List>
        {todoItems
          .filter(filterItems)
          .sort((a, b) => a.id - b.id)
          .map((item, i) => (
            <LabelContainer>
              <Checkbox
                item={item}
                setChecked={(val) => handleCheck(item.id, val)}
              ></Checkbox>
              {
                <DeleteButton
                  onClick={() => handleDelete(item.id)}
                ></DeleteButton>
              }
            </LabelContainer>
          ))}
      </List>
      {todoItems.length > 0 && (
        <Footer
          setFilter={setFilter}
          todoItems={todoItems}
          deleteMultiple={deleteMultiple}
        ></Footer>
      )}
    </TodoContainer>
  );
};

export default TodoExplorer;

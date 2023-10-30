import { useEffect, useState } from "react";
import Checkbox from "../checkbox/checkbox";
import Footer from "../footer/footer";
import {
  TodoContainer,
  InputWrapper,
  DoneButton,
  InputContainer,
  List,
  LabelContainer,
  DeleteButton,
} from "./todo-explorer.styles";

export interface TodoItem {
  id: number;
  label: string;
  isChecked: boolean;
}

export type FilterType = "all" | "checked" | "unchecked";

const getTodosFromStorage = (): TodoItem[] => {
  const storageData = localStorage.getItem("todo-items");
  if (!storageData) return [];

  return JSON.parse(storageData) || [];
};

interface IProps {
  isDarkMode: boolean;
}

const TodoExplorer = ({ isDarkMode }: IProps) => {
  const [inputText, setInputText] = useState("");

  const storageTodoItems = getTodosFromStorage();

  const [todoItems, setTodoItems] = useState<TodoItem[]>(storageTodoItems);

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTodoItems([
        ...todoItems,
        { id: new Date().getTime(), label: inputText, isChecked: false },
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

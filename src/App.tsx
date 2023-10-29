import styled from "styled-components";
import TodoExplorer from "./components/TodoExplorer";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const AppWrapper = styled.section<{ isDarkMode: boolean }>`
  width: 100%;
  min-height: 100%;
  padding: 0 0 50px 0;
  background-color: #f5f5f5;

  ${(p) =>
    p.isDarkMode &&
    `
       background-color: #1d1d1d;
    `}
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div<{ isDarkMode: boolean }>`
  margin: 0 auto;
  font-size: 100px;
  color: rgba(175, 47, 47, 0.15);

  ${(p) =>
    p.isDarkMode &&
    `
     color: #d3d3d3;
    `}
`;

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(!checked);
  };

  return (
    <AppWrapper isDarkMode={isDarkMode}>
      <HeaderContainer>
        <div />
        <Header isDarkMode={isDarkMode}>todos</Header>
        <div>
          {" "}
          <DarkModeSwitch
            checked={!isDarkMode}
            onChange={toggleDarkMode}
            size={50}
            moonColor="rgba(175, 47, 47, 0.15)"
            sunColor="#d3d3d3"
          />
        </div>
      </HeaderContainer>
      <TodoExplorer isDarkMode={isDarkMode}></TodoExplorer>
    </AppWrapper>
  );
}

export default App;

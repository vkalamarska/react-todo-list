import styled from "styled-components";
import TodoExplorer from "./components/TodoExplorer";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  width: 40%;
  margin: auto;
  font-size: 100px;
  color: rgba(175, 47, 47, 0.15);
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header>todos</Header>
      <TodoExplorer></TodoExplorer>
    </AppWrapper>
  );
}

export default App;

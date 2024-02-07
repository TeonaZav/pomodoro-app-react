import { styled } from "styled-components";

import ButtonPanel from "./components/ButtonPanel";




function App() {
  return (
    <ButtonPanel />
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSettingsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

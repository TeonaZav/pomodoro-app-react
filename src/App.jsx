import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import ButtonPanel from "./components/ButtonPanel";
import Timer from "./components/Timer";
import IconSettings from "./assets/icon-settings.svg";
import SettingsProvider from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <StyledApp>
        <GlobalStyles />
        <h1>pomodoro</h1>
        <ButtonPanel />
        <Timer />
        <StyledSettingsButton>
          <img src={IconSettings} alt="settings icon" />
        </StyledSettingsButton>
      
      </StyledApp>
    </SettingsProvider>
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

import { styled } from "styled-components";
import GlobalStyleWrapper from "./GlobalStyleWrapper";
import ButtonPanel from "./components/ButtonPanel";
import Timer from "./components/Timer";
import SettingsButton from "./components/settings/SettingsButton";
import Settings from "./components/settings/Settings";
import SettingsProvider from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <StyledApp>
        <GlobalStyleWrapper />
        <h1>pomodoro</h1>
        <ButtonPanel />
        <Timer />
        <SettingsButton />
        <Settings />
      </StyledApp>
    </SettingsProvider>
  );
}

export default App;

const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

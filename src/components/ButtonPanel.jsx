import { useState, useContext } from "react";
import { styled } from "styled-components";
import { SettingsContext } from "../context/SettingsContext";
const ButtonPanel = () => {
  const [active, setActive] = useState("pomodoro");

  const { settings, setSettings, resetTimer } = useContext(SettingsContext);

  const handleActive = (e) => {
    setActive(e.target.value);
    const activeState = e.target.value;
    setSettings((prevSettings) => {
      return { ...prevSettings, active: activeState };
    });
    resetTimer();
  };

  return (
    <StyledPanel>
      <StyledButton
        $activeColor={settings.activeColor}
        className={active === "pomodoro" ? "active" : ""}
        onClick={handleActive}
        value="pomodoro"
      >
        pomodoro
      </StyledButton>
      <StyledButton
        $activeColor={settings.activeColor}
        onClick={handleActive}
        value="shortBreak"
        className={active === "shortBreak" ? "active" : ""}
      >
        short break
      </StyledButton>
      <StyledButton
        $activeColor={settings.activeColor}
        onClick={handleActive}
        value="longBreak"
        className={active === "longBreak" ? "active" : ""}
      >
        long break
      </StyledButton>
    </StyledPanel>
  );
};

export default ButtonPanel;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  width: 10rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  border: none;
  cursor: pointer;
  background-color: #161932;
  color: rgba(215, 224, 255, 0.401);
  
  &.active {
    background-color: ${(props) =>  props.$activeColor};
    color: #1e213f;
  }
`;

const StyledPanel = styled.div`
  width: 32.7rem;
  height: 6.3rem;
  border-radius: 3.2rem;
  background: #161932;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.8rem;
`;

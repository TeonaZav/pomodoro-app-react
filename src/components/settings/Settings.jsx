import { useContext, useState } from "react";
import { styled } from "styled-components";
import { SettingsContext } from "../../context/SettingsContext";
import IconClose from "./../../assets/icon-close.svg";
import ColorBtn from "./ColorBtn";
import FontBtn from "./FontBtn";

const Settings = () => {
  const { settings, setSettings, closeModal, show, resetTimer } =
    useContext(SettingsContext);

  const [pomodoro, setPomodoro] = useState(1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [activeColor, setActiveColor] = useState("#70F3F8");
  const [activeFont, setActiveFont] = useState("Space Mono");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "pomodoro":
        setPomodoro(+value);
        break;
      case "shortBreak":
        setShortBreak(+value);
        break;
      case "longBreak":
        setLongBreak(+value);
        break;
      case "activeColor":
        setActiveColor(value);
        break;
      case "activeFont":
        setActiveFont(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSettings({
      ...settings,
      pomodoro,
      shortBreak,
      longBreak,
      activeColor,
      activeFont,
    });
    resetTimer();
    closeModal();
  };

  return (
    <SettingsModal className={!show ? "modal hidden" : "modal"}>
      <SettingsHeader>
        <h2>Settings</h2>
        <button onClick={closeModal} className="btn-close">
          <img src={IconClose} alt="close icon" />
        </button>
      </SettingsHeader>

      <SettingsForm onSubmit={handleSubmit}>
        <h3>TIME (MINUTES)</h3>
        <div className="input-wrapper">
          <TextBox>
            <label htmlFor="pomodoro">pomodoro</label>
            <input
              className="input"
              type="number"
              name="pomodoro"
              id="pomodoro"
              onChange={handleChange}
              value={pomodoro}
            />
          </TextBox>
          <TextBox>
            <label htmlFor="shortBreak">short break</label>
            <input
              className="input"
              type="number"
              name="shortBreak"
              id="shortBreak"
              onChange={handleChange}
              value={shortBreak}
            />
          </TextBox>
          <TextBox>
            <label htmlFor="longBreak">long break</label>
            <input
              className="input"
              type="number"
              name="longBreak"
              id="longBreak"
              onChange={handleChange}
              value={longBreak}
            />
          </TextBox>
        </div>
        <SmallCt>
          <h3>FONTS</h3>
          <div className="radio-buttons">
            <FontBtn
              id="font1"
              value="Kumbh Sans"
              onChange={handleChange}
              fontName="Kumbh Sans"
              activeFont={activeFont}
            />
            <FontBtn
              id="font2"
              value="Roboto Slab"
              onChange={handleChange}
              fontName="Roboto Slab"
              activeFont={activeFont}
            />
            <FontBtn
              id="font3"
              value="Space Mono"
              onChange={handleChange}
              fontName="Space Mono"
              activeFont={activeFont}
            />
          </div>
        </SmallCt>
        <SmallCt>
          <h3>COLOR</h3>
          <div className="radio-buttons">
            <ColorBtn
              id="red"
              value="#F87070"
              onChange={handleChange}
              checked={activeColor === "#F87070"}
              color="#F87070"
              activeColor={activeColor}
            />
            <ColorBtn
              id="green"
              value="#70F3F8"
              onChange={handleChange}
              checked={activeColor === "#70F3F8"}
              color="#70F3F8"
              activeColor={activeColor}
            />
            <ColorBtn
              id="purple"
              value="#D881F8"
              onChange={handleChange}
              checked={activeColor === "#D881F8"}
              color="#D881F8"
              activeColor={activeColor}
            />
          </div>
        </SmallCt>

        <ButtonApply type="submit">Apply</ButtonApply>
      </SettingsForm>
    </SettingsModal>
  );
};

export default Settings;

const SettingsModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 32.7rem;
  height: 57.5rem;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border-radius: 1.5rem;
  transition: opacity 0.5s ease-out, transform 1.1s ease-out,
    visibility 0.5s ease-out;
  opacity: 1;
  visibility: visible;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -50%) scale(0.95);
  }

  @media (min-width: 48em) {
    width: 54rem;
    height: 49rem;
  }
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  height: 10%;
  font-size: 1.6rem;
  .btn-close {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding: 1rem 2.4rem 0 2.4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.043);
  text-align: center;

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 0;
    margin-bottom: 2.4rem;
  }
  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 48em) {
    padding: 1.6rem 2.4rem 0 2.4rem;
    .input-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }
    h3 {
      align-self: flex-start;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    width: 14rem;
    height: 4rem;
    border: none;
    background-color: #eff1fa;
    border-radius: 1rem;
    position: relative;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  label {
    color: #999999;
    font-size: 1.2rem;
    align-self: flex-start;
  }

  @media (min-width: 48em) {
    width: 14rem;
    flex-direction: column;
    input {
      width: 100%;
      height: 4.8rem;
    }
  }
`;

const SmallCt = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.043);
  text-align: center;

  .radio-buttons {
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 1.6rem;
  }

  @media (min-width: 48em) {
    flex-direction: row;
    height: 9rem;
    padding-block: 1.6rem;
    .radio-buttons {
      width: 30%;
    }
  }
`;

const ButtonApply = styled.button`
  width: 14rem;
  height: 5.3rem;
  font-weight: 600;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  overflow: hidden;
  pointer-events: auto;
  transform: translateY(50%);
  background-color: #f87070;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #ed7777;
  }
`;

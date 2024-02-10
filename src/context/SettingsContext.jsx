import { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const [show, setshow] = useState(false);
  const [timerKey, setTimerKey] = useState(0); 

  const [settings, setSettings] = useState({
    pomodoro: 1,
    shortBreak: 5,
    longBreak: 15,
    active: "pomodoro",
    activeColor: "#70F3F8",
    activeFont: "Space Mono",
   
  });

  const resetTimer = () => {
    setTimerKey(prevKey => prevKey + 1); 
  };

  const handlePause = () => {
    setPlaying(!playing);
  };

  const showModal = () => {
    setshow(true);
  };
  const closeModal = () => {
    setshow(false);
  };
  return (
    <SettingsContext.Provider
      value={{
        show,
        playing,
        timerKey,
        resetTimer,
        setPlaying,
        handlePause,
        settings,
        setSettings,
        showModal,
        closeModal,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

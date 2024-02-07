import { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);

  const handlePause = () => {
    setPlaying(!playing);
  };



  const [settings, setSettings] = useState({
    pomodoro: 1,
    shortBreak: 5,
    longBreak: 15,
    active: "pomodoro",
    activeColor: "#70F3F8",
  });

  return (
    <SettingsContext.Provider
      value={{ playing, setPlaying, handlePause, settings, setSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

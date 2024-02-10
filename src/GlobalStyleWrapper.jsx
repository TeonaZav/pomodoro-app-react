import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import GlobalStyles from "./GlobalStyles";

const GlobalStyleWrapper = () => {
  const { settings} = useContext(SettingsContext);

  return <GlobalStyles $font={settings.activeFont} />;
};

export default GlobalStyleWrapper;

import { useContext } from "react";
import { styled } from "styled-components";
import IconSettings from "./../../assets/icon-settings.svg";
import { SettingsContext } from "./../../context/SettingsContext";

const SettingsButton = () => {
  const { showModal } = useContext(SettingsContext);

  return (
    <StyledSettingsButton onClick={showModal}>
      <img src={IconSettings} alt="settings icon" />
    </StyledSettingsButton>
  );
};

export default SettingsButton;

const StyledSettingsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

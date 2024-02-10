import { styled } from "styled-components";
import IconCheck from "./../../assets/icon-check.png";

const FontBtn = ({ fontName, activeFont, id, handleChange, ...props }) => {
  return (
    <FontButton>
      <input
        type="radio"
        className="radio"
        name="activeFont"
        id={id}
        onChange={handleChange}
        checked={activeFont === fontName}
        {...props}
      />
      <label
        htmlFor={id}
        style={{ fontFamily: fontName }}
        className={activeFont === fontName ? "active" : ""}
      >
        Aa
      </label>
    </FontButton>
  );
};

export default FontBtn;

const FontButton = styled.div`
  width: 4em;
  height: 4rem;

  label {
    display: inline-block;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    padding: 2rem 1rem;
    position: relative;
    cursor: pointer;
  }

  label:before {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  input[type="radio"] + label {
    background-color: #eff1fa;
    color: #1e213f;
    font-size: 1.6rem;
    line-height: 0;
    &.active {
      background-color: #161932;
      color: #ffffff;
    }
  }

  input[type="radio"] {
    display: none;
  }
`;

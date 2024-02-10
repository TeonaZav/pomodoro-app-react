import { styled } from "styled-components";
import IconCheck from "./../../assets/icon-check.png";

const ColorBtn = ({ color, activeColor, id, handleChange, ...props }) => {
  return (
    <ColorButton $color={color}>
      <input
        type="radio"
        className="radio"
        name="activeColor"
        id={id}
        onChange={handleChange}
        checked={activeColor === color}
        {...props}
      />
      <label htmlFor={id}>
        {activeColor === color && <img src={IconCheck} alt="icon check" />}
      </label>
    </ColorButton>
  );
};

export default ColorBtn;

const ColorButton = styled.div`
  width: 4em;
  height: 4rem;
  cursor: pointer;
  label {
    display: inline-block;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    width: 4em;
    height: 4rem;
    position: relative;
    cursor: pointer;
  }

  label:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="radio"] + label {
    background-color: ${(props) => props.$color};
    color: #1e213f;
    img {
      width: 1.6rem;
      height: 1.4rem;
      margin-top: 1.4rem;
    }
    cursor: pointer;
  }

  input[type="radio"] {
    display: none;
  }
`;

import React, { createContext, useContext, useState } from "react";
import { styled } from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";
const renderTime = ({ remainingTime }) => {
  const mins =
    Math.floor((remainingTime % 3600) / 60) >= 10
      ? Math.floor((remainingTime % 3600) / 60)
      : "0" + Math.floor((remainingTime % 3600) / 60);
  const secs =
    remainingTime % 60 >= 10 ? remainingTime % 60 : "0" + (remainingTime % 60);

  return <p className="timer-text">{`${mins}:${secs}`}</p>;
};

const Timer = () => {
  const { playing, handlePause, settings } =
    useContext(SettingsContext);

  return (
    <StyledTimerDisplay>
      <CountdownCircleTimer
        size={267}
        isPlaying={playing}
        isGrowing
        duration={settings[settings.active] * 60}
        strokeWidth={10}
        rotation
        trailColor="#d881f80"
        colors={settings.activeColor}
        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
      <button className="btn-pause" onClick={handlePause}>
        {playing ? "pause" : "start"}
      </button>
    </StyledTimerDisplay>
  );
};

export default Timer;

const StyledTimerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: 50px 50px 100px 0px #121530, -50px -50px 100px 0px #272c5a;
  position: relative;

  .timer-text {
    color: #d7e0ff;
    text-align: center;
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: -5px;
  }

  .btn-pause {
    color: #d7e0ff;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1.3rem;
    text-transform: uppercase;
    background-color: transparent;
    text-align: center;
    border: none;
    cursor: pointer;
    padding: 0 0 0 1.3rem;
    position: absolute;
    bottom: 20%;
  }
`;

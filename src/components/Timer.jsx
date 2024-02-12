import React, { createContext, useContext, useState } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
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
  const { playing, handlePause, settings, timerKey } =
    useContext(SettingsContext);

  const isTablet = useMediaQuery({ query: "(min-width: 48em)" });

  return (
    <StyledTimerDisplay>
      <div className="inner-wrapper">
        <CountdownCircleTimer
          key={timerKey}
          size={isTablet ? 350 : 250}
          isPlaying={playing}
          isGrowing
          duration={settings[settings.active] * 60}
          strokeWidth={10}
          rotation
          trailColor="#d881f80"
          colors={settings.activeColor}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          className="timer-bg"
        >
          {renderTime}
        </CountdownCircleTimer>
        <button className="btn-pause" onClick={handlePause}>
          {playing ? "pause" : "start"}
        </button>
      </div>
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
  margin-bottom: 5rem;
  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background-color: #161932;
    border-radius: 100%;
    .timer-text {
      color: #d7e0ff;
      text-align: center;
      font-size: 7rem;
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
  }

  @media (min-width: 48em) {
    width: 41rem;
    height: 41rem;

    .inner-wrapper {
      .timer-text {
        font-size: 10rem;
      }
      .btn-pause {
        font-size: 1.8rem;
      }
    }
  }
`;

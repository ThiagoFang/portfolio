import { useEffect, useState } from "react";
import * as C from "./styles";

export const DigitalClock = () => {
  const [clock, setClock] = useState({
    hour: "00",
    minutes: "00",
    seconds: "00",
  });

  const setTime = (hour: number, minutes: number, seconds: number) => {
    let newHour = `${hour}`;
    let newMinutes = `${minutes}`;
    let newSeconds = `${seconds}`;

    if (hour < 10) newHour = "0" + hour;
    if (minutes < 10) newMinutes = "0" + minutes;
    if (seconds < 10) newSeconds = "0" + seconds;

    setClock({ hour: newHour, minutes: newMinutes, seconds: newSeconds });
  };

  const getCurrentTime = () => {
    const date: Date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setTime(hour, minutes, seconds);
  };

  useEffect(() => {
    setInterval(getCurrentTime, 1000);
  }, []);

  return (
    <C.Container>
      <C.Hour>{clock.hour}</C.Hour>:<C.Minutes>{clock.minutes}</C.Minutes>:
      <C.Seconds>{clock.seconds}</C.Seconds>
    </C.Container>
  );
};

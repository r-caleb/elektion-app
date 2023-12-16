"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 text-white h-full p-6">
      Élections dans :
      <div className="w-[480px]">
        <span>{` ${String(days).padStart(2, "0")} jours`}</span>:
        <span>{` ${String(hours).padStart(2, "0")} heures`}</span>:
        <span>{` ${String(minutes).padStart(2, "0")} minutes`}</span>:
        <span>{` ${String(seconds).padStart(2, "0")} secondes`}</span>
      </div>
    </div>
  );
}

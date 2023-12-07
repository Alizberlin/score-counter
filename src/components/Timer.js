import React, { useState, useEffect } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IconButton} from "@mui/material";

export const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="fixed top-1/2 inset-x-0 max-w-max mx-auto -mt-7 bg-bg-800 rounded-lg p-2 text-red-400" style={{fontFamily: "Nanum Gothic"}} >
      <p className="text-xl">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons flex justify-around">
        <IconButton size="small" variant="contained" className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? <PauseIcon/> : <PlayArrowIcon />}
        </IconButton>
        <IconButton size="small" variant="contained" className="stopwatch-button" onClick={reset}>
          <RestartAltIcon/>
        </IconButton>
      </div>
    </div>
  );
}
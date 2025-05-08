"use client";

import { useState, useEffect } from "react";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";
import NavBar from "../components/NavBar";

export default function PomodoroPage() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [selectedTimer, setSelectedTimer] = useState("Pomodoro");
    const [numPomodoros, setNumPomodoros] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined = undefined;

        if (isRunning && time > 0) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
            if (numPomodoros % 4 === 0) {
                setSelectedTimer("Long Break");
            } else {
                setSelectedTimer("Short Break");
            }
            setNumPomodoros(0);
            console.log("Timer finished!");
        }

        // Cleanup function
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleSkip = () => {
        setIsRunning(false);

        if (selectedTimer === "Pomodoro") {
            setNumPomodoros(numPomodoros + 1);
            if (numPomodoros % 4 === 0) {
                setSelectedTimer("Long Break");
                setTime(15 * 60);
            } else {
                setSelectedTimer("Short Break");
                setTime(5 * 60);
            }
        } else if (selectedTimer === "Short Break") {
            setSelectedTimer("Pomodoro");
            setTime(25 * 60);
        } else {
            setSelectedTimer("Pomodoro");
            setTime(25 * 60);
        }
    };

    return (
        <div
            className={`flex flex-col w-full h-full flex-col items-center justify-center overflow-hidden ${
                selectedTimer === "Pomodoro"
                    ? "bg-custom-red transition-colors duration-500"
                    : selectedTimer === "Short Break"
                    ? "bg-custom-turquoise transition-colors duration-500"
                    : "bg-custom-blue transition-colors duration-500"
            }`}
        >
            <NavBar />
            <div className="flex flex-col items-center w-1/3 mt-8 h-screen">
                <div className="flex flex-col bg-custom-light w-full pl-16 pr-16 pt-2 pb-8">
                    <div className="flex flex-row place-content-evenly">
                        <button
                            onClick={(event) => {
                                setSelectedTimer("Pomodoro");
                            }}
                            className={`text-sm pl-2 pr-2 pt-2 pb-2 rounded-sm ${
                                selectedTimer === "Pomodoro"
                                    ? "bg-custom-dark"
                                    : "bg-transparent"
                            }`}
                        >
                            Pomotoro
                        </button>
                        <button
                            onClick={(event) => {
                                setSelectedTimer("Short Break");
                            }}
                            className={`text-sm pl-2 pr-2 pt-2 pb-2 rounded-sm ${
                                selectedTimer === "Short Break"
                                    ? "bg-custom-dark"
                                    : "bg-transparent"
                            }`}
                        >
                            Short Break
                        </button>
                        <button
                            onClick={(event) => {
                                setSelectedTimer("Long Break");
                            }}
                            className={`text-sm pl-2 pr-2 pt-2 pb-2 rounded-sm ${
                                selectedTimer === "Long Break"
                                    ? "bg-custom-dark"
                                    : "bg-transparent"
                            }`}
                        >
                            Long Break
                        </button>
                    </div>
                    <TimerDisplay time={time} />
                    <TimerControls
                        onStart={handleStart}
                        onPause={handlePause}
                        onSkip={handleSkip}
                        isRunning={isRunning}
                    />
                </div>
            </div>
        </div>
    );
}

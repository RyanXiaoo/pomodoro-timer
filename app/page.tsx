"use client";

import { useState, useEffect } from "react";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";

export default function PomodoroPage() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25 * 60);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined = undefined;

        if (isRunning && time > 0) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
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

    const handleReset = () => {
        setIsRunning(false);
        setTime(25 * 60);
    };

    return (
        <div className="flex flex-col items-center w-1/3 mt-8 h-screen">
            <div className="flex flex-col bg-white w-5/6 pl-16 pr-16 pt-2 pb-8">
                <div className="flex flex-row justify-between">
                    <div className="text-sm m-4">Pomodoro</div>
                    <div className="text-sm m-4">Short Break</div>
                    <div className="text-sm m-4">Long Break</div>
                </div>
                <TimerDisplay time={time} />
                <TimerControls
                    onStart={handleStart}
                    onPause={handlePause}
                    onReset={handleReset}
                    isRunning={isRunning}
                />
            </div>
        </div>
    );
}

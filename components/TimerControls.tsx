"use client";

import { useState } from "react";
interface TimerControlsProps {
    onStart: () => void;
    onPause: () => void;
    onSkip: () => void;
    isRunning: boolean;
}



export default function TimerControl({
    onStart,
    onPause,
    onSkip,
    isRunning,
}: TimerControlsProps) {
    
    return (
        <div className="flex justify-center gap-4 bg-gray-700 p-4 m-2 rounded-lg shadow-xl">
            {isRunning ? (
                <button
                    onClick={onPause}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                    Pause
                </button>
            ) : (
                <button
                    onClick={onStart}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                    Start
                </button>
            )}
            <button
                onClick={onSkip}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
                Reset
            </button>
        </div>
    );
}

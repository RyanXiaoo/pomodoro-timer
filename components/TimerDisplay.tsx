interface TimerDisplayProps {
    time: number; // Time in seconds
}

export default function TimerDisplay({ time }: TimerDisplayProps) {
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div className="text-center text-8xl font-mono p-4 rounded-lg shadow-xl bg-gray-800 text-white">
            {formatTime(time)}
        </div>
    );
}

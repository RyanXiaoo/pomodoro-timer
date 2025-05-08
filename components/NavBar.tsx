import Image from "next/image";
import checkmark from "@/images/checkmark.svg";

export default function NavBar() {
    return (
        <div className="flex items-center space-between w-1/3 pt-4 border-b-1 border-gray-600">
            <div className="flex flex-row items-center justify-center mr-4 w-1/3">
                <Image
                    src={checkmark}
                    alt="checkmark"
                    className="flex w-4 h-4"
                />
                <div className={` font-bold flex text-left w-full m-2`}>
                    Pomofocus
                </div>
            </div>
            <div className="flex justify-between items-center w-2/3 h-full">
                <div className="flex justify-center items-center bg-custom-light w-1/4 h-2/3 rounded-sm text-sm p-1">
                    Report
                </div>
                <div className="flex justify-center items-center bg-custom-light w-1/4 h-2/3 rounded-sm text-sm p-1">
                    Settings
                </div>
                <div className="flex justify-center items-center bg-custom-light w-1/4 h-2/3 rounded-sm text-sm p-1">
                    Sign In
                </div>
            </div>
        </div>
    );
}

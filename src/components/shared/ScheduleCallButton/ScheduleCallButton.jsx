"use client"
import Link from "next/link";

const ScheduleCallButton = () => {
    return (
        <Link href="tel:+8801986298579" target="_blank">
            <button className="bg-primary text-white h-10 px-8  rounded-3xl font-semibold shadow-lg shadow-purple-300 cursor-pointer transition-transform duration-700 ease transform hover:translate-x-1 hover:shadow-xl">
                Schedule a Call
            </button>
        </Link> 
    );
};

export default ScheduleCallButton;
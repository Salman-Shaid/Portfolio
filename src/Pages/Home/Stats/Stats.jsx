import React from "react";
import CountUp from "react-countup";

const Stats = () => {
    const stats = [
        { label: "Happy Clients", value: 5, icon: "😊" },
        { label: "Projects Completed", value: 87, icon: "🚀" },
        { label: "Years of Experience", value: 2, icon: "🎯" },
        { label: "Cups of Coffee", value: 20, icon: "☕" },
    ];

    return (
        <div className="bg-[#252734] container my-20 mx-auto rounded-lg text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">My Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-5xl">{stat.icon}</span>
                            <CountUp
                                start={0}
                                end={stat.value}
                                duration={3}
                                separator=","
                                className="text-4xl font-bold"
                            />
                            <p className="text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;

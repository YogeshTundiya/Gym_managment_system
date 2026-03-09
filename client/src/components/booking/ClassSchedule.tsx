"use client";

import { useState } from "react";

// Mock data based on design
const mockClasses = [
    {
        id: 1,
        time: "09:00 AM",
        duration: "60 Minutes",
        title: "Morning Vinyasa Flow",
        description: "Awaken your senses and find your balance in this dynamic morning flow suitable for all levels of experience.",
        category: "MIND & BODY",
        categoryColor: "text-purple-600 bg-purple-50",
        statusBadge: { text: "3 Spots Left", type: "warning" },
        trainer: { name: "Sarah Jenkins", role: "Yoga Specialist", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
        imageTheme: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        time: "05:30 PM",
        duration: "45 Minutes",
        title: "High Intensity Burn",
        description: "A fast-paced workout designed to maximize calorie burn and improve cardiovascular health through explosive movements.",
        category: "CARDIO",
        categoryColor: "text-red-500 bg-red-50",
        statusBadge: { text: "Open for Guests", type: "success" },
        trainer: { name: "Mike Ross", role: "FITZONE Coach", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
        imageTheme: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        time: "07:00 PM",
        duration: "60 Minutes",
        title: "Dance Cardio Party",
        description: "Forget the workout, join the party! A fun-filled session that combines high energy music with easy-to-follow dance steps.",
        category: "DANCE",
        categoryColor: "text-orange-500 bg-orange-50",
        statusBadge: { text: "Last Spot!", type: "alert" },
        trainer: { name: "Anita Cruz", role: "Zumba Pro", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1bf32c?q=80&w=200&auto=format&fit=crop" },
        imageTheme: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop"
    }
];

export const ClassSchedule = () => {
    const [activeDay, setActiveDay] = useState("Today");
    const days = ["Today", "Tomorrow", "Wednesday", "Thursday"];

    return (
        <section id="schedule" className="st-section w-full bg-[#f8fafc] py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-[#CCA028]/20 text-[#0F2E23] text-xs font-bold tracking-widest rounded-full mb-6 uppercase">
                        DAILY SCHEDULE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#121c22] mb-4">
                        Today at FITZONE
                    </h2>
                    <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
                        Join our community and transform your fitness journey with expert-led classes
                        for every level.
                    </p>
                </div>

                {/* Day Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeDay === day
                                ? "bg-[#0F2E23] text-white shadow-md"
                                : "bg-background-card text-[#64748b] border border-gray-200 hover:border-[#0F2E23] hover:text-[#0F2E23]"
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Class List */}
                <div className="space-y-6">
                    {mockClasses.map((cls) => (
                        <div key={cls.id} className="bg-background-card rounded-[32px] p-6 flex flex-col md:flex-row gap-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">

                            {/* Image Column */}
                            <div className="w-full md:w-[280px] h-[200px] rounded-2xl relative overflow-hidden flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url('${cls.imageTheme}')` }}>
                                <span className="absolute top-4 left-4 bg-white text-xs font-bold px-3 py-1.5 rounded-full text-[#121c22]">
                                    {cls.time}
                                </span>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 flex flex-col py-2">
                                {/* Top Row: Tags & Duration */}
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider ${cls.categoryColor}`}>
                                            {cls.category}
                                        </span>

                                        {cls.statusBadge && (
                                            <span className={`flex items-center gap-1 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider ${cls.statusBadge.type === 'warning' ? 'text-orange-600 bg-orange-50' :
                                                cls.statusBadge.type === 'alert' ? 'text-red-600 bg-red-50' :
                                                    'text-green-700 bg-green-50'
                                                }`}>
                                                {cls.statusBadge.type === 'success' && (
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                                {cls.statusBadge.type === 'warning' && (
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857" />
                                                    </svg>
                                                )}
                                                {cls.statusBadge.type === 'alert' && (
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                )}
                                                {cls.statusBadge.text}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {cls.duration}
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl font-bold text-[#121c22] mb-2">{cls.title}</h3>
                                <p className="text-[#64748b] text-sm leading-relaxed mb-6 max-w-lg">
                                    {cls.description}
                                </p>

                                {/* Footer: Trainer & CTA */}
                                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${cls.trainer.avatar}')` }}>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#121c22]">{cls.trainer.name}</p>
                                            <p className="text-xs text-[#64748b]">{cls.trainer.role}</p>
                                        </div>
                                    </div>

                                    <button className="w-full sm:w-auto px-8 py-3 bg-[#0F2E23] text-white font-semibold rounded-xl hover:bg-[#0A1F17] transition-colors whitespace-nowrap">
                                        Book a Trial
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

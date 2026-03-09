"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, User, CheckCircle2, XCircle, Plus } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function ClientSchedulePage() {
    const { openModal } = useActionModal();
    // Mock Schedule Data
    const schedule = [
        {
            date: "Today, Oct 24",
            sessions: [
                { id: "S-1", type: "Personal Training", trainer: "Mike Johnson", time: "18:00 - 19:00", location: "Free Weights Zone", status: "Upcoming" },
            ]
        },
        {
            date: "Tomorrow, Oct 25",
            sessions: [
                { id: "S-2", type: "HIIT Class", trainer: "Sarah Connor", time: "07:00 - 08:00", location: "Studio A", status: "Upcoming" },
                { id: "S-3", type: "Yoga Flow", trainer: "Emma Watson", time: "19:00 - 20:00", location: "Studio B", status: "Upcoming" }
            ]
        },
        {
            date: "Yesterday, Oct 23",
            sessions: [
                { id: "S-4", type: "Personal Training", trainer: "Mike Johnson", time: "18:00 - 19:00", location: "Free Weights Zone", status: "Completed" }
            ]
        }
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">My Schedule</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your upcoming classes and PT sessions.</p>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                    <button onClick={() => openModal('Book Session', 'Booking wizard for new classes and PT will open here.')} className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all hover:-translate-y-0.5">
                        <Plus className="w-4 h-4" />
                        Book Session
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Schedule List */}
                <div className="lg:col-span-2 space-y-8">
                    {schedule.map((day, idx) => (
                        <div key={idx} className="space-y-4">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                                {day.date}
                            </h2>
                            
                            <div className="space-y-3">
                                {day.sessions.map((session, sIdx) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                                        key={session.id} 
                                        className={`bg-white dark:bg-dark-card p-5 rounded-2xl border ${
                                            session.status === "Upcoming" 
                                            ? "border-gray-200 dark:border-dark-border hover:border-brand-primary dark:hover:border-brand-primary" 
                                            : "border-gray-100 dark:border-dark-border/50 opacity-70"
                                        } shadow-sm transition-colors group flex flex-col sm:flex-row gap-4 sm:items-center justify-between`}
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                                                    session.type === "Personal Training" 
                                                    ? "bg-brand-primary/10 text-brand-primary dark:text-brand-accent" 
                                                    : "bg-blue-50 dark:bg-blue-900/20 text-blue-500"
                                                }`}>
                                                    {session.status === "Completed" ? <CheckCircle2 className="w-6 h-6" /> : <CalendarIcon className="w-6 h-6" />}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{session.type}</h3>
                                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5">{session.trainer}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-dark-bg px-2.5 py-1 rounded-md">
                                                    <Clock className="w-4 h-4 text-brand-primary dark:text-brand-accent scale-90" />
                                                    <span className="font-medium">{session.time}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-dark-bg px-2.5 py-1 rounded-md">
                                                    <MapPin className="w-4 h-4 text-brand-primary dark:text-brand-accent scale-90" />
                                                    <span className="font-medium">{session.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-dark-border pt-4 sm:pt-0 sm:pl-4 flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                                            {session.status === "Upcoming" ? (
                                                <>
                                                    <button onClick={() => openModal('Reschedule Session', `Choose a new date and time to reschedule your ${session.type}.`, 'Reschedule')} className="flex-1 sm:flex-none px-4 py-2 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold transition-colors border border-gray-200 dark:border-dark-border">
                                                        Reschedule
                                                    </button>
                                                    <button onClick={() => openModal('Cancel Session', `Are you sure you want to cancel your ${session.type}? This action cannot be undone.`, 'Cancel Booking')} className="flex-1 sm:flex-none px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-sm font-semibold transition-colors">
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <span className="w-full text-center px-4 py-2 bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-500 rounded-lg text-sm font-bold">
                                                    Completed
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Stats & Info */}
                <div className="space-y-6">
                    {/* Remaining Tokens */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white shadow-lg relative overflow-hidden border border-gray-800 lg:sticky lg:top-24">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="mb-6 relative z-10 flex items-center justify-between">
                            <h3 className="font-bold text-gray-300">PT Tokens Available</h3>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                                <User className="w-5 h-5 text-brand-primary" />
                            </div>
                        </div>
                        
                        <div className="mb-6 relative z-10">
                            <span className="text-6xl font-black tracking-tight leading-none text-white drop-shadow-sm">8</span>
                            <span className="text-gray-400 font-medium ml-2">/ 12 total</span>
                        </div>

                        <div className="space-y-3 relative z-10">
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-primary rounded-full" style={{ width: '66%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 text-center">Refills automatically on Nov 1</p>
                        </div>
                        
                        <button onClick={() => openModal('Purchase PT Tokens', 'Select a token package to purchase.', 'View Packages')} className="mt-6 w-full py-3 bg-white/10 hover:bg-dark-card0 text-white rounded-xl font-bold text-sm backdrop-blur-md transition-colors border border-white/10">
                            Buy More Tokens
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

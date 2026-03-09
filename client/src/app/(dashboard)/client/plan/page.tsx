"use client";

import { CheckCircle2, Trophy, Flame, ChevronRight, Activity, Calendar, Zap } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function ClientPlanPage() {
    const { openModal } = useActionModal();
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Active Membership</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your plan and track your workout routines.</p>
            </div>

            {/* Current Plan Card */}
            <div className="bg-gradient-to-br from-[#0D5C46] to-black rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden border border-gray-800">
                <div className="absolute right-0 top-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                            Active Plan
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-white drop-shadow-md">Annual Premium</h2>
                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Valid until Oct 24, 2027
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                            <div className="font-medium">$1,200.00 / year</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 shrink-0">
                        <button onClick={() => openModal('Upgrade Plan', 'Explore our premium plans to get more from your membership.', 'View Upgrades')} className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-gray-900 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-brand-primary/25 text-center">
                            Upgrade Plan
                        </button>
                        <button onClick={() => openModal('View Invoice', 'Downloading the latest invoice...', 'Download')} className="px-6 py-3 bg-white/10 hover:bg-dark-card0 text-white border border-white/20 rounded-xl font-semibold transition-colors backdrop-blur-md text-center">
                            View Invoice
                        </button>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Access Pass</p>
                        <p className="font-bold">24/7 Global Access</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Guest Passes</p>
                        <p className="font-bold">Unlimited</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">PT Tokens</p>
                        <p className="font-bold">12 per Month</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Status</p>
                        <p className="font-bold text-brand-primary">FITZONE Member</p>
                    </div>
                </div>
            </div>

            {/* Workout Routines Header */}
            <div className="pt-4 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Assigned Routines</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Custom split designed by Mike Johnson.</p>
                </div>
                <button className="text-sm font-semibold text-brand-primary hover:underline">View All</button>
            </div>

            {/* Workout Routine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Day 1: Push */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-gray-50 dark:bg-dark-bg rounded-xl flex items-center justify-center text-gray-900 dark:text-white font-bold group-hover:scale-110 transition-transform">
                            D1
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Done
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Push Day (Chest/Triceps/Shoulders)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> 6 Exercises • 45-60 Mins
                    </p>

                    <div className="space-y-3 mb-6">
                        {['Bench Press (4x10)', 'Overhead Press (3x12)', 'Tricep Extensions (3x15)'].map((ex, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                {ex}
                            </div>
                        ))}
                    </div>

                    <button onClick={() => openModal('Workout Details', 'Detailed breakdown of sets and reps will be displayed here.')} className="w-full py-2.5 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border text-gray-900 dark:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-border">
                        View Details <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Day 2: Pull */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border-2 border-brand-primary shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-4 right-4 h-3 w-3">
                        <span className="absolute inset-0 rounded-full bg-brand-primary opacity-75 animate-ping duration-1000"></span>
                        <span className="absolute inset-0 rounded-full bg-brand-primary scale-75"></span>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary font-bold group-hover:scale-110 transition-transform">
                            D2
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Pull Day (Back/Biceps)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> 5 Exercises • 45 Mins
                    </p>

                    <div className="space-y-3 mb-6">
                        {['Deadlifts (4x8)', 'Pull-ups (3x10)', 'Barbell Rows (3x12)'].map((ex, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                {ex}
                            </div>
                        ))}
                    </div>

                    <button onClick={() => openModal('Workout Tracking', 'Starting live workout tracker...', 'Start')} className="w-full py-2.5 bg-brand-primary hover:bg-brand-secondary text-gray-900 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
                        Start Workout <Zap className="w-4 h-4" />
                    </button>
                </div>

                {/* Day 3: Legs */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-gray-50 dark:bg-dark-bg rounded-xl flex items-center justify-center text-gray-900 dark:text-white font-bold group-hover:scale-110 transition-transform">
                            D3
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Leg Day (Quads/Hams/Calves)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> 6 Exercises • 60 Mins
                    </p>

                    <div className="space-y-3 mb-6 opacity-60">
                        {['Squats (4x10)', 'Leg Press (3x15)', 'Calf Raises (4x20)'].map((ex, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                {ex}
                            </div>
                        ))}
                    </div>

                    <button onClick={() => openModal('Workout Details', 'Detailed breakdown of sets and reps will be displayed here.')} className="w-full py-2.5 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border text-gray-900 dark:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-border">
                        View Details <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, ChevronRight, Activity, Calendar, Share2, Download, Filter, Plus, Search, User, FilterIcon, Scale } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function ClientAnalyticsPage() {
    const { openModal } = useActionModal();
    // Mock Data
    const workoutVolume = [
        { name: 'Mon', value: 4500 }, { name: 'Tue', value: 0 },
        { name: 'Wed', value: 5200 }, { name: 'Thu', value: 3800 },
        { name: 'Fri', value: 6100 }, { name: 'Sat', value: 0 },
        { name: 'Sun', value: 2000 },
    ];

    const weightProgress = [
        { name: 'W1', value: 85.2 }, { name: 'W2', value: 84.8 },
        { name: 'W3', value: 84.5 }, { name: 'W4', value: 83.9 },
        { name: 'W5', value: 83.2 }, { name: 'W6', value: 82.5 },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Analytics & Progress</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Track your fitness journey and workout consistency.</p>
                </div>
                
                <div className="flex gap-3">
                    <button onClick={() => openModal('Share Progress', 'Share your stats on social media.', 'Share')} className="px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-brand-primary/25 text-center flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" /> Share Progress
                    </button>
                    <button onClick={() => openModal('Export Data', 'Download your fitness data as PDF/CSV.', 'Download')} className="px-6 py-2.5 bg-white/10 hover:bg-dark-card0 text-white border border-white/20 rounded-xl font-semibold transition-colors backdrop-blur-md text-center flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" /> Export Data
                    </button>
                </div>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Current Streak", value: "4 Days", trend: "Personal Best: 12", icon: Flame, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
                    { label: "Workouts (MTD)", value: "14", trend: "+2 vs last month", icon: Activity, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { label: "Avg. Duration", value: "52m", trend: "Optimal range", icon: Trophy, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                    { label: "Total Volume", value: "21.6k", trend: "+5% vs last week", icon: Trophy, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <button onClick={() => openModal('Filter Analytics', 'Filter your data by specific date ranges and exercise types.')} className="p-2 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border rounded-lg transition-colors border border-gray-200 dark:border-dark-border">
                                <Filter className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-dark-border">
                            {stat.trend}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weight Progress Chart */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Scale className="w-5 h-5 text-brand-primary" /> Body Weight
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Goal: 80.0 kg</p>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">82.5 <span className="text-sm font-medium text-gray-500">kg</span></span>
                            <p className="text-xs font-medium text-green-500">-2.7 kg overall</p>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <AreaChart data={weightProgress} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#CAF028" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#CAF028" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', padding: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value} kg`, 'Weight']}
                                />
                                <Area type="monotone" dataKey="value" stroke="#CAF028" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" dot={{ r: 4, fill: '#CAF028', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Workout Volume Chart */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Volume Load</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total weight lifted per week</p>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <BarChart data={workoutVolume} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={32}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(val) => `${val/1000}k`} />
                                <Tooltip 
                                    cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value} kg`, 'Volume']}
                                />
                                <Bar dataKey="value" fill="#111827" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Activity, Calendar, Award, ArrowUpRight, Clock, Target, CreditCard, ChevronRight, Zap, User } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', visits: 3 },
    { name: 'Week 2', visits: 4 },
    { name: 'Week 3', visits: 2 },
    { name: 'Week 4', visits: 5 },
    { name: 'Week 5', visits: 4 },
];

export default function ClientDashboardPage() {
    const { openModal } = useActionModal();
    return (
        <div className="max-w-6xl mx-auto space-y-8">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Welcome back, John! 👋</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Here is what&apos;s happening with your fitness journey.</p>
                </div>
                <div className="flex items-center gap-3">
                        <button onClick={() => openModal('Workout Details', 'Detailed breakdown of sets and reps will be displayed here.')} className="w-full py-2.5 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border text-gray-900 dark:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-border">
                            View Details <ChevronRight className="w-4 h-4" />
                        </button>
                        <button onClick={() => openModal('Workout Tracking', 'Starting live workout tracker...', 'Start')} className="w-full py-2.5 bg-brand-primary hover:bg-brand-secondary text-gray-900 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
                            Start Workout <Zap className="w-4 h-4" />
                        </button>
                </div>
            </div>

            {/* Overview Stats (FITZONE Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Primary Metric - Solid Green */}
                <div className="bg-brand-primary rounded-2xl p-6 text-white shadow-md relative overflow-hidden group border border-brand-primary">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Activity size={32} className="text-white/80" />
                        </div>
                    </div>
                    <p className="text-sm font-medium text-white/80 mb-1 relative z-10">Workouts This Month</p>
                    <h3 className="text-4xl font-bold mb-4 relative z-10">18</h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm relative z-10">
                        <ArrowUpRight size={14} />
                        <span>+4 from last month</span>
                    </div>
                </div>

                {/* White Card 1 */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Membership</p>
                        <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <User size={16} />
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Active</h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                        <span className="bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md">Renews in 18 days</span>
                    </div>
                </div>

                {/* White Card 2 */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">PT Credits</p>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <CreditCard size={16} />
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">4 <span className="text-lg text-gray-400 font-medium">/ 12</span></h3>
                    <div className="flex items-start gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <span className="leading-tight">Sessions remaining</span>
                    </div>
                </div>

                {/* White Card 3 */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Reward Points</p>
                        <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
                            <Award size={16} />
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">2.4k</h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 max-w-[120px]">
                        <span>Redeemable for merchandise</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Activity Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Attendance Overview</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Your FITZONE visits over the last 5 weeks.</p>
                        </div>
                        <select className="bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-sm rounded-lg px-3 py-1.5 outline-none text-gray-700 dark:text-gray-300">
                            <option>Last 5 Weeks</option>
                            <option>Last 3 Months</option>
                        </select>
                    </div>
                    <div className="h-64" style={{ minHeight: 0 }}>
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0D5C46" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0D5C46" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                                <Tooltip
                                    cursor={{ stroke: '#0D5C46', strokeWidth: 1, strokeDasharray: '3 3' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="visits" stroke="#0D5C46" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Dynamic QR Code & Schedule */}
                <div className="space-y-8">

                    {/* QR Code Container */}
                    <div className="bg-white dark:bg-dark-card p-8 rounded-2xl text-center border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none relative overflow-hidden group">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent dark:bg-brand-primary rounded-full blur-3xl opacity-50 dark:opacity-20 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-gray-900 dark:text-white font-serif font-bold text-xl mb-1 relative z-10">Instant Check-in</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 relative z-10">Scan at the front desk</p>

                        <div className="relative z-10 bg-white p-4 rounded-2xl inline-block shadow-sm border border-gray-100 dark:border-dark-border">
                            {/* Dummy QR Code Image using standard UI elements to fake one */}
                            <div className="w-32 h-32 border-4 border-gray-900 dark:border-white border-dashed rounded-lg flex items-center justify-center p-2 relative">
                                <div className="absolute top-0 left-0 w-3 h-3 bg-gray-900 dark:bg-white"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 bg-gray-900 dark:bg-white"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-gray-900 dark:bg-white"></div>
                                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-sm border-2 border-white dark:border-dark-border outline outline-2 outline-gray-900 dark:outline-white"></div>
                            </div>
                        </div>
                        <p className="mt-4 text-xs font-medium text-brand-primary dark:text-brand-accent uppercase tracking-widest relative z-10">ID: FIT-4829</p>
                    </div>

                    {/* Upcoming Schedule */}
                    <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Up Next</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-100 dark:border-dark-border">
                                <div className="w-12 h-12 bg-white dark:bg-dark-card text-brand-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-transparent dark:border-dark-border">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">HIIT Training</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1"><Clock size={12} /> Today, 06:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-100 dark:border-dark-border">
                                <div className="w-12 h-12 bg-white dahover:bg-dark-card text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-transparent dark:border-dark-border">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">PT with Marcus</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1"><Clock size={12} /> Tomorrow, 08:30 AM</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-4 text-sm font-medium text-brand-primary dark:text-brand-accent hover:text-brand-secondary transition-colors">
                            View full schedule &rarr;
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

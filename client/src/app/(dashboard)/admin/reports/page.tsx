"use client";

import { motion } from "framer-motion";
import { Download, Calendar, Filter, Users, TrendingUp, Activity, UserPlus, CreditCard, ChevronDown } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export default function AdminReportsPage() {
    const { openModal } = useActionModal();
    // Mock Data
    const attendanceData = [
        { name: 'Mon', value: 120 }, { name: 'Tue', value: 145 },
        { name: 'Wed', value: 130 }, { name: 'Thu', value: 155 },
        { name: 'Fri', value: 180 }, { name: 'Sat', value: 210 },
        { name: 'Sun', value: 190 },
    ];

    const revenueData = [
        { name: 'Jan', value: 65000 }, { name: 'Feb', value: 72000 },
        { name: 'Mar', value: 68000 }, { name: 'Apr', value: 85000 },
        { name: 'May', value: 92000 }, { name: 'Jun', value: 110000 },
    ];

    const retentionData = [
        { name: 'W1', value: 98 }, { name: 'W2', value: 95 },
        { name: 'W3', value: 94 }, { name: 'W4', value: 96 },
        { name: 'W5', value: 92 }, { name: 'W6', value: 91 },
    ];

    const planDistribution = [
        { name: 'Annual', value: 45 },
        { name: 'Monthly', value: 30 },
        { name: '6-Month', value: 15 },
        { name: 'Trial', value: 10 },
    ];
    const COLORS = ['#CAF028', '#0D5C46', '#111827', '#64748b'];

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Reports & Analytics</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Deep dive into your FITZONE performance metrics.</p>
                </div>
                
                <div className="flex gap-3">
                    <button onClick={() => openModal('Filter Reports', 'Advanced date and category filters for reports...') } className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-card rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-dark-border shadow-sm whitespace-nowrap hover:bg-gray-50 dark:hover:bg-dark-border transition-all">
                        <Filter className="w-4 h-4 text-gray-400" />
                        Filters
                    </button>
                    <button onClick={() => openModal('Export Report', 'Exporting current report view to PDF/CSV...') } className="flex items-center gap-2 px-4 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>
                </div>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Members", value: "1,248", trend: "+12.5%", icon: Users, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { label: "Avg. Daily Attendance", value: "342", trend: "+5.2%", icon: Activity, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                    { label: "New Signups (MTD)", value: "84", trend: "+18.1%", icon: UserPlus, color: "text-brand-primary", bg: "bg-brand-primary/10" },
                    { label: "MRR", value: "$45.2k", trend: "+8.4%", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                            <div className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                                <TrendingUp className="w-3 h-3" />
                                {stat.trend} vs last period
                            </div>
                        </div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Render Area: Large Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Growth</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly recurring revenue (6 months)</p>
                        </div>
                        <button onClick={() => openModal('More Options', 'Additional chart settings...', 'Close') } className="p-2 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border rounded-lg transition-colors border border-gray-200 dark:border-dark-border">
                            <Filter className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                    <div className="flex-1 min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#CAF028" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#CAF028" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(val) => `$${val/1000}k`} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', padding: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`$${value.toLocaleString()}`, 'Revenue']}
                                />
                                <Area type="monotone" dataKey="value" stroke="#CAF028" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Secondary Chart 1: Plan Distribution */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Active Plans</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current subscription breakdown</p>
                    </div>
                    <div className="flex-1 min-h-[200px] flex items-center justify-center relative">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <PieChart>
                                <Pie
                                    data={planDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {planDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value}%`, 'Members']}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">100%</span>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider">TOTAL</span>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {planDistribution.map((plan, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{plan.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Secondary Chart 2: Weekly Attendance */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col lg:col-span-2">
                    <div className="mb-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Peak Hours / Attendance</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Weekly traffic patterns</p>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={24}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                                <Tooltip 
                                    cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value} people`, 'Attendance']}
                                />
                                <Bar dataKey="value" fill="#111827" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Secondary Chart 3: Retention Rate */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Retention Rate</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">6-week trailing retention</p>
                    </div>
                    <div className="flex-1 min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <LineChart data={retentionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} domain={['dataMin - 5', 100]} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', padding: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value}%`, 'Retention']}
                                />
                                <Line type="monotone" dataKey="value" stroke="#0D5C46" strokeWidth={3} dot={{ r: 4, fill: '#0D5C46', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

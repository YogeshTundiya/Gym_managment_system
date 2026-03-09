"use client";

import { motion } from "framer-motion";
import { Plus, ShieldAlert, CalendarCheck, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight, Clock, UserPlus, CreditCard as CardIcon, MoreVertical } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
    { name: 'Jan', total: 400000, pt: 120000 },
    { name: 'Feb', total: 450000, pt: 135000 },
    { name: 'Mar', total: 420000, pt: 125000 },
    { name: 'Apr', total: 580000, pt: 180000 },
    { name: 'May', total: 610000, pt: 195000 },
    { name: 'Jun', total: 650000, pt: 210000 },
];

export default function AdminDashboard() {
    const { openModal } = useActionModal();
    return (
        <div className="max-w-7xl mx-auto space-y-8">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Forms & Compliance</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage waivers, health screenings, and contract signatures.</p>
                </div>

                {/* Top Action Buttons (Matching design) */}
                <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-card rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-dark-border shadow-sm whitespace-nowrap hover:bg-gray-50 dark:hover:bg-dark-border transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Import PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <Plus size={16} />
                        New Form Template
                    </button>
                </div>
            </div>

            {/* Primary Financial & CRM Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Solid primary colored card like "Pending Approvals" in the mockup */}
                <div className="bg-brand-primary rounded-2xl p-6 text-white shadow-md relative overflow-hidden group border border-brand-primary">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-white/80">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-white/80 mb-1 relative z-10">Pending Approvals</p>
                    <h3 className="text-4xl font-bold mb-4 relative z-10">14</h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                        </svg>
                        <span>2 new today</span>
                    </div>
                </div>

                {/* White Card 1 */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Waivers</p>
                        <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">842</h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        <span>+5% from last month</span>
                    </div>
                </div>

                {/* White Card 2 with Yellow Accent */}
                <div className="bg-white dark:bg-[var(--color-dark-card)] rounded-2xl p-6 border border-gray-200 dark:border-[var(--color-dark-border)] shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expiring Soon</p>
                        <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s9.75 4.365 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">28</h3>
                    <div className="flex items-start gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-500 max-w-[140px]">
                        <span className="text-base leading-none">⚠</span>
                        <span className="leading-tight">Action needed within 7 days</span>
                    </div>
                </div>

                {/* White Card 3 with Blue Accent */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Contract Value</p>
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <span className="font-bold text-sm">$</span>
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">$12.4k</h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        <span>+12% vs last month</span>
                    </div>
                </div>
            </div>

            {/* Secondary Row: Charts & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm dark:shadow-none border border-gray-200 dark:border-dark-border">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Forecast & Collections</h2>
                        <select className="bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-sm rounded-lg px-3 py-1.5 outline-none text-gray-700 dark:text-gray-300">
                            <option>This Year (2026)</option>
                        </select>
                    </div>
                    <div className="h-72" style={{ minHeight: 0 }}>
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                            <BarChart data={revenueData} barSize={32} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(val) => `₹${val / 1000}k`} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Bar dataKey="total" name="Total Memberships" fill="#0D5C46" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="pt" name="PT Collections" fill="#111827" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* CRM Updates & Alerts - Combined Card */}
                <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden flex flex-col">

                    {/* Top Alert Section (Red bg) */}
                    <div className="bg-red-50/80 dark:bg-red-950/30 border-b border-red-100 dark:border-red-900/50 p-6 flex-shrink-0 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex gap-4 mb-4 relative z-10">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <ShieldAlert size={24} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-md mb-1 inline-block">Scanner Alert</span>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Michael Chen</h3>
                            </div>
                        </div>

                        <p className="text-sm text-red-800 dark:text-red-400 font-medium relative z-10 mb-5">
                            Access Denied: Membership expired 3 days ago.
                        </p>

                        <div className="flex gap-3 relative z-10">
                            <button className="flex-1 bg-white dark:bg-white text-red-600 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors border border-red-100 dark:border-none">
                                View Profile
                            </button>
                            <button onClick={() => openModal('More Actions', 'Additional client actions (suspend, cancel) will be available soon.')} className="flex-1 bg-[#DE0000] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-dark-card transition-colors">
                                Send WhatsApp
                            </button>
                        </div>
                    </div>

                    {/* Bottom Pipeline Section */}
                    <div className="p-6 flex-1 bg-white dark:bg-transparent">
                        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                            <CalendarCheck size={18} className="text-[#CCA028]" />
                            Renewal Pipeline (7 Days)
                        </h2>

                        <div className="space-y-4">
                            {[
                                { name: "Sarah Connor", plan: "Annual Premium", due: "Due in 2 days" },
                                { name: "David Kim", plan: "Monthly Basic", due: "Due in 4 days" },
                                { name: "Emma Watson", plan: "6-Month FITZONE", due: "Due in 6 days" },
                            ].map((client) => (
                                <div key={client.name} className="flex items-center justify-between border-b border-gray-50 dark:border-[#1F2937] pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{client.name}</h4>
                                        <p className="text-xs text-gray-400 mt-0.5">{client.plan}</p>
                                    </div>
                                    <span className="text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 rounded-md">
                                        {client.due}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

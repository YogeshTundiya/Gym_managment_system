"use client";

import { useState } from "react";
import { CheckCircle2, MoreVertical, Search, SlidersHorizontal, UserPlus, XCircle, AlertCircle, HeartPulse, Clock, FileText, Plus } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function AdminClientsPage() {
    const { openModal } = useActionModal();
    const [searchQuery, setSearchQuery] = useState("");

    // Mock clients list
    const clients = [
        { id: "CL-0129", name: "Sarah Connor", email: "sarah@example.com", phone: "+1 234-567-8901", status: "Active", risk: "Low", lastVisit: "Today, 10:30 AM", plan: "Annual Premium" },
        { id: "CL-0130", name: "Michael Chen", email: "michael@example.com", phone: "+1 234-567-8902", status: "Inactive", risk: "High", lastVisit: "3 days ago", plan: "Monthly Basic" },
        { id: "CL-0131", name: "David Kim", email: "david@example.com", phone: "+1 234-567-8903", status: "Active", risk: "Low", lastVisit: "Yesterday, 6:15 PM", plan: "6-Month FITZONE" },
        { id: "CL-0132", name: "Emma Watson", email: "emma@example.com", phone: "+1 234-567-8904", status: "Active", risk: "Medium", lastVisit: "2 days ago", plan: "Annual Premium" },
        { id: "CL-0133", name: "James Bond", email: "james@example.com", phone: "+1 234-567-8905", status: "Pending", risk: "Low", lastVisit: "Never", plan: "Trial" },
        { id: "CL-0134", name: "Natasha Romanoff", email: "natasha@example.com", phone: "+1 234-567-8906", status: "Active", risk: "Low", lastVisit: "Today, 8:00 AM", plan: "Monthly Basic" },
        { id: "CL-0135", name: "Tony Stark", email: "tony@example.com", phone: "+1 234-567-8907", status: "Active", risk: "High", lastVisit: "1 week ago", plan: "Annual Premium" },
        { id: "CL-0136", name: "Steve Rogers", email: "steve@example.com", phone: "+1 234-567-8908", status: "Inactive", risk: "Medium", lastVisit: "1 month ago", plan: "6-Month FITZONE" },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/50';
            case 'Inactive': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50';
            case 'Pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/50';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700';
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Client Directory</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your active members, leads, and churn risks.</p>
                </div>
                
                <div className="flex gap-3">
                    <button onClick={() => openModal('Filters', 'Advanced filtering options will be available soon.')} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-card rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-dark-border shadow-sm whitespace-nowrap hover:bg-gray-50 dark:hover:bg-dark-border transition-all">
                        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                        Filters
                    </button>
                    <button onClick={() => openModal('Add Client', 'Client creation form is under development.')} className="flex items-center gap-2 px-4 py-2 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <Plus className="w-4 h-4" />
                        Add Client
                    </button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Active", value: "842", trend: "+12", trendUp: true },
                    { label: "At Risk", value: "28", trend: "-5", trendUp: true }, /* Less risk is "up" normally but visually trendUp=true implies good */
                    { label: "New This Month", value: "45", trend: "+15%", trendUp: true },
                    { label: "Avg. Retention", value: "14 mos", trend: "+1 mo", trendUp: true },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                            <span className={`text-xs font-semibold mb-1 ${
                                stat.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                            }`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm overflow-hidden flex flex-col">
                
                {/* Search & Actions Bar */}
                <div className="p-4 border-b border-gray-100 dark:border-dark-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50 dark:bg-transparent">
                    <div className="relative w-full sm:max-w-md">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Search clients by name, email, or ID..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-accent transition-colors text-gray-900 dark:text-white shadow-sm"
                        />
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <select className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 text-sm rounded-xl px-4 py-2.5 outline-none shadow-sm flex-1 sm:flex-none">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Pending</option>
                        </select>
                        <select className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 text-sm rounded-xl px-4 py-2.5 outline-none shadow-sm flex-1 sm:flex-none">
                            <option>All Plans</option>
                            <option>Annual Premium</option>
                            <option>Monthly Basic</option>
                            <option>6-Month FITZONE</option>
                        </select>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50 dark:bg-dark-bg/50 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-dark-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold w-12">
                                    <input type="checkbox" className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary w-4 h-4 cursor-pointer" />
                                </th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Client Details</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Status</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Plan & Risk</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Last Visit</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right text-transparent">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-[#1F2937]">
                            {clients.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-50/50 dark:hover:bg-[#1a2332] transition-colors group">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary w-4 h-4 cursor-pointer" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary dark:text-brand-accent flex items-center justify-center font-bold">
                                                {client.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 dark:text-white">{client.name}</div>
                                                <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{client.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusStyle(client.status)}`}>
                                            {client.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">{client.plan}</div>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <span className="text-gray-500 dark:text-gray-400 text-xs">Risk:</span>
                                            <span className={`text-xs font-semibold ${
                                                client.risk === 'Low' ? 'text-green-500' : client.risk === 'High' ? 'text-red-500' : 'text-amber-500'
                                            }`}>
                                                {client.risk}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-900 dark:text-white font-medium">{client.lastVisit}</div>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">ID: {client.id}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => openModal('Message Client', 'Messaging portal will open here in the next update.', 'Send')} className="p-2 text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors rounded-lg bg-gray-50 dark:bg-dark-bg hover:bg-brand-primary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                                            </button>
                                            <button onClick={() => openModal('Edit Client', 'Client profile editor will be available here.', 'Save')} className="p-2 text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors rounded-lg bg-gray-50 dark:bg-dark-bg hover:bg-brand-primary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
                                            </button>
                                            <button onClick={() => openModal('More Actions', 'Additional client actions (suspend, cancel) will be available soon.')} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg bg-gray-50 dark:bg-dark-bg">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 dark:border-[#1F2937] flex items-center justify-between text-sm">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">8</span> of <span className="font-semibold text-gray-900 dark:text-white">842</span> results
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#151D2A] rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1e2a3c] transition-colors disabled:opacity-50">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 border border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#151D2A] rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-[#1e2a3c] transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

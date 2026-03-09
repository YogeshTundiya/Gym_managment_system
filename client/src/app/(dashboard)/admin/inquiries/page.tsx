"use client";

import { motion } from "framer-motion";
import { Plus, Search, MoreVertical, Phone, MessageSquare, Calendar } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
import { useState } from "react";

export default function AdminInquiriesPage() {
    const { openModal } = useActionModal();
    const [searchQuery, setSearchQuery] = useState("");

    // Mock Kanban Data
    const columns = [
        {
            id: "new",
            title: "New Leads",
            color: "border-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/10",
            items: [
                { id: "INQ-001", name: "Alex Johnson", source: "Website", time: "2 hours ago", phone: "+1 234-567-8900", email: "alex@example.com", assignedTo: "Sarah", interest: "Personal Training" },
                { id: "INQ-002", name: "Jessica Smith", source: "Instagram", time: "5 hours ago", phone: "+1 234-567-8901", email: "jessica@example.com", assignedTo: "Unassigned", interest: "Yoga Classes" },
            ]
        },
        {
            id: "contacted",
            title: "Contacted",
            color: "border-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/10",
            items: [
                { id: "INQ-003", name: "Ryan Reynolds", source: "Referral", time: "Yesterday", phone: "+1 234-567-8902", email: "ryan@example.com", assignedTo: "Mike", interest: "Annual Premium" },
                { id: "INQ-004", name: "Tom Hardy", source: "Walk-in", time: "Yesterday", phone: "+1 234-567-8903", email: "tom@example.com", assignedTo: "Mike", interest: "Monthly Basic" },
                { id: "INQ-005", name: "Chris Evans", source: "Website", time: "2 days ago", phone: "+1 234-567-8904", email: "chris@example.com", assignedTo: "Sarah", interest: "6-Month FITZONE" },
            ]
        },
        {
            id: "trial",
            title: "Trial / Follow-up",
            color: "border-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/10",
            items: [
                { id: "INQ-006", name: "Scarlett J.", source: "Facebook", time: "3 days ago", phone: "+1 234-567-8905", email: "scarlett@example.com", assignedTo: "Sarah", interest: "Annual Premium", nextAction: "Call tomorrow" },
            ]
        },
        {
            id: "converted",
            title: "Converted",
            color: "border-green-500",
            bg: "bg-green-50 dark:bg-green-900/10",
            items: [
                { id: "INQ-007", name: "Mark Ruffalo", source: "Website", time: "Oct 24", phone: "+1 234-567-8906", email: "mark@example.com", assignedTo: "Mike", interest: "Annual Premium", value: "$1,200" },
                { id: "INQ-008", name: "Jeremy Renner", source: "Walk-in", time: "Oct 22", phone: "+1 234-567-8907", email: "jeremy@example.com", assignedTo: "Sarah", interest: "Monthly Basic", value: "$99" },
            ]
        }
    ];

    return (
        <div className="max-w-7xl md:max-w-[1600px] mx-auto space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Inquiry Pipeline</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Track and manage leads from new inquiry to converted member.</p>
                </div>
                
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Search leads..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white shadow-sm"
                        />
                    </div>
                    <button onClick={() => openModal('New Lead', 'Form to manually add a lead will be available soon.', 'Add')} className="flex items-center gap-2 px-4 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <Plus className="w-4 h-4" />
                        New Lead
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
                <div className="flex gap-6 h-full min-w-max items-start">
                    {columns.map((col) => (
                        <div key={col.id} className="w-80 h-full flex flex-col rounded-2xl bg-gray-50/50 dark:bg-dark-bg/50 border border-gray-100 dark:border-dark-border/50 max-h-full">
                            {/* Column Header */}
                            <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-dark-border shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full border-2 ${col.color} bg-white dark:bg-gray-900`}></div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{col.title}</h3>
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card px-2 py-0.5 rounded-full border border-gray-200 dark:border-dark-border">
                                        {col.items.length}
                                    </span>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                            
                            {/* Cards Area */}
                            <div className="p-3 flex-1 overflow-y-auto space-y-3 custom-scrollbar">
                                {col.items.map((item, idx) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        key={item.id} 
                                        className="bg-white dark:bg-dark-card p-4 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex gap-2 items-center flex-wrap">
                                                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                                                    {item.source}
                                                </span>
                                                <select 
                                                defaultValue={'nextAction' in item ? item.nextAction as string : "Follow Up"} 
                                                className="text-sm bg-transparent font-medium outline-none cursor-pointer"
                                            >
                                                <option value="Follow Up">Follow Up</option>
                                                <option value="Call Scheduled">Call Scheduled</option>
                                                <option value="Trial Booked">Trial Booked</option>
                                                <option value="Not Interested">Not Interested</option>
                                            </select>
                                            </div>
                                            <button className="text-gray-300 dark:text-gray-600 hover:text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">{item.name}</h4>
                                        <p className="text-xs text-brand-primary dark:text-brand-accent font-medium mb-4">{item.interest}</p>
                                        
                                        {'nextAction' in item && (
                                            <div className="flex items-center gap-2 mb-3 bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-primary dark:text-brand-accent p-2 rounded-lg text-sm font-medium border border-brand-primary/10">
                                                <Calendar className="w-4 h-4" />
                                                <span>{item.nextAction as string}</span>
                                            </div>
                                        )}

                                        <div className="pt-3 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary dark:text-brand-accent flex items-center justify-center text-xs font-bold" title={`Assigned to ${item.assignedTo}`}>
                                                    {item.assignedTo.charAt(0)}
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {'value' in item ? <span className="font-bold text-green-600 dark:text-green-400">{item.value as string}</span> : item.assignedTo}
                                                </span>
                                            </div>

                                            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => openModal('WhatsApp', 'Opening WhatsApp Web integration...')} className="w-7 h-7 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors" title="WhatsApp">
                                                    <MessageSquare className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => openModal('Call Client', 'Initiating VOIP call...')} className="w-7 h-7 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors" title="Call">
                                                    <Phone className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Column Footer */}
                            <button onClick={() => openModal('Add Board Column', 'Creating a new pipeline stage...')} className="p-3 mx-3 mb-3 mt-1 border-2 border-dashed border-gray-200 dark:border-dark-border text-gray-400 dark:text-gray-500 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-card hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm font-semibold flex items-center justify-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Card
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

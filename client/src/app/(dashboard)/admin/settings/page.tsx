"use client";

import { useState } from "react";
import { Save, Upload, User, Users, Lock, CreditCard, Bell, Database, Mail, Smartphone, Globe, Building2, Wallet, Shield } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function AdminSettingsPage() {
    const { openModal } = useActionModal();
    const [activeTab, setActiveTab] = useState("general");

    const tabs = [
        { id: "general", name: "FITZONE Profile", icon: Building2 },
        { id: "team", name: "Team Members", icon: Users },
        { id: "billing", name: "Billing & Plans", icon: Wallet },
        { id: "notifications", name: "Notifications", icon: Bell },
        { id: "security", name: "Security", icon: Shield },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Settings & Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Configure your FITZONE profile, team access, and system preferences.</p>
                </div>
                
                <div className="flex gap-3">
                    <button onClick={() => openModal('Settings Saved', 'Your configuration changes have been saved successfully.')} className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-dark-bordernd-secondary whitespace-nowrap transition-all">
                        <Save className="w-4 h-4" />
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Settings Sidebar */}
                <div className="w-full lg:w-64 shrink-0 space-y-1">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                    isActive 
                                    ? "bg-brand-primary/10 text-brand-primary dark:text-brand-accent" 
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-card hover:text-gray-900 dark:hover:text-white"
                                }`}
                            >
                                <tab.icon className={`w-5 h-5 ${isActive ? "text-brand-primary dark:text-brand-accent" : "text-gray-400"}`} />
                                {tab.name}
                            </button>
                        );
                    })}
                </div>

                {/* Settings Content Area */}
                <div className="flex-1 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl p-6 lg:p-8 shadow-sm">
                    {/* General Settings Tab */}
                    {activeTab === "general" && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">FITZONE Profile</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Update your business details and contact information.</p>
                            </div>

                            {/* Logo Upload */}
                            <div className="flex items-start gap-6">
                                <div className="shrink-0">
                                    <div className="w-24 h-24 rounded-2xl bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border flex items-center justify-center relative group overflow-hidden">
                                        <div className="w-10 h-10 bg-brand-primary text-white flex items-center justify-center font-bold text-xl rounded-lg">G</div>
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white">
                                            <Upload className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5 pt-2">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">FITZONE Logo</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                                        This will be displayed on your invoices, member portals, and booking pages. Recommended size: 256x256px.
                                    </p>
                                    <div className="flex gap-4 items-center">
                                        <button onClick={(e) => { e.preventDefault(); openModal('Upload Logo', 'Please select an image to upload.'); }} className="text-sm font-semibold text-brand-primary dark:text-brand-accent hover:underline">Change Logo</button>
                                        <button onClick={(e) => { e.preventDefault(); openModal('Remove Logo', 'Are you sure you want to revert to the default logo?'); }} className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors">Remove</button>
                                    </div>
                                </div>
                            </div>

                            {/* Form Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-dark-border">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Business Name</label>
                                    <input type="text" defaultValue="FITZONE Fitness" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tax ID / GST Number</label>
                                    <input type="text" defaultValue="GSTIN-123456789" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Support Email</label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="email" defaultValue="support@fitzone.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Support Phone</label>
                                    <div className="relative">
                                        <Smartphone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                    </div>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Website URL</label>
                                    <div className="relative">
                                        <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="url" defaultValue="https://fitzone.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                    </div>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Physical Address</label>
                                    <textarea rows={3} defaultValue="123 Fitness Ave, Suite 100\nMetropolis, NY 10001\nUnited States" className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow resize-none"></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for other tabs */}
                    {activeTab !== "general" && (
                        <div className="h-64 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                            <div className="w-16 h-16 bg-gray-50 dark:bg-dark-bg rounded-full flex items-center justify-center mb-4 text-gray-400">
                                {activeTab === "team" && <Users className="w-8 h-8" />}
                                {activeTab === "billing" && <CreditCard className="w-8 h-8" />}
                                {activeTab === "notifications" && <Bell className="w-8 h-8" />}
                                {activeTab === "security" && <Shield className="w-8 h-8" />}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {tabs.find(t => t.id === activeTab)?.name} Config
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                                This section is currently under development and will be available in the next update.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

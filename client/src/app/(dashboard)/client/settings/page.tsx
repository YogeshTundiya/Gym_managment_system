"use client";

import { useState } from "react";
import { User, Bell, Shield, Wallet, Smartphone, Mail, CreditCard, Lock, Save, Camera, Upload, Key, MapPin } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function ClientSettingsPage() {
    const { openModal } = useActionModal();
    const [activeTab, setActiveTab] = useState("profile");

    const tabs = [
        { id: "profile", name: "Personal Info", icon: User },
        { id: "billing", name: "Payment Methods", icon: Wallet },
        { id: "notifications", name: "Notifications", icon: Bell },
        { id: "security", name: "Security", icon: Shield },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Account Settings</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your profile, preferences, and security.</p>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                    <button onClick={() => openModal('Settings Saved', 'Your preferences have been updated.')} className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <Save className="w-4 h-4" />
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Settings Sidebar */}
                <div className="w-full md:w-64 shrink-0 space-y-1">
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
                <div className="flex-1 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl p-6 md:p-8 shadow-sm">
                    
                    {/* Profile Tab */}
                    {activeTab === "profile" && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Personal Information</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Update your photo and personal details.</p>
                            </div>

                            {/* Avatar Upload */}
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border flex items-center justify-center overflow-hidden">
                                        <User className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white border-2 border-white dark:border-[#151D2A] shadow-sm hover:bg-brand-secondary transition-colors">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <div>
                                    <div className="flex gap-3">
                                        <button onClick={(e) => { e.preventDefault(); openModal('Upload Avatar', 'Please select an image to upload as your profile picture.'); }} className="px-4 py-2 bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white text-sm font-semibold rounded-lg border border-gray-200 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-border transition-colors">Upload New</button>
                                        <button onClick={(e) => { e.preventDefault(); openModal('Remove Avatar', 'Are you sure you want to remove your profile picture?'); }} className="px-4 py-2 text-gray-500 hover:text-red-500 text-sm font-semibold transition-colors">Remove</button>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">JPG, GIF or PNG. Max size 2MB.</p>
                                </div>
                            </div>

                            {/* Form Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100 dark:border-dark-border">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                                    <input type="text" defaultValue="Alex" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                                    <input type="text" defaultValue="Johnson" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="email" defaultValue="alex.johnson@example.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                                    <div className="relative">
                                        <Smartphone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === "security" && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Security & Access</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your password and session security.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Change Password</h3>
                                    
                                    <div className="space-y-4 max-w-md">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current Password</label>
                                            <div className="relative">
                                                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                                <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">New Password</label>
                                            <div className="relative">
                                                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                                <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white transition-shadow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100 dark:border-dark-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Two-Factor Authentication</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account.</p>
                                        </div>
                                        <button className="px-4 py-2 bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white text-sm font-semibold rounded-lg border border-gray-200 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-border transition-colors">
                                            Enable 2FA
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100 dark:border-dark-border">
                                    <button className="text-red-500 hover:text-red-600 font-semibold text-sm transition-colors">
                                        Delete Account
                                    </button>
                                    <p className="text-xs text-gray-500 mt-1">Permanently remove your account and all data.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for Billing & Notifications */}
                    {["billing", "notifications"].includes(activeTab) && (
                        <div className="h-64 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                            <div className="w-16 h-16 bg-gray-50 dark:bg-[#0F1623] rounded-full flex items-center justify-center mb-4 text-gray-400">
                                {activeTab === "billing" && <CreditCard className="w-8 h-8" />}
                                {activeTab === "notifications" && <Bell className="w-8 h-8" />}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {tabs.find(t => t.id === activeTab)?.name} Details
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                                Manage your preferences in this section. Feature coming soon.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { QrCode, Camera, ScanLine, UserCheck, Search, Users, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function AdminScannerPage() {
    const [isScanning, setIsScanning] = useState(false);
    
    // Mock recent scans
    const recentScans = [
        { id: "RC-001", name: "Michael Chen", time: "2 min ago", status: "Access Granted", type: "Annual Premium" },
        { id: "RC-002", name: "Sarah Connor", time: "15 min ago", status: "Access Granted", type: "Monthly Basic" },
        { id: "RC-003", name: "David Kim", time: "1 hour ago", status: "Access Denied", type: "Expired" },
        { id: "RC-004", name: "Emma Watson", time: "2 hours ago", status: "Access Granted", type: "6-Month FITZONE" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">QR Scanner</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Verify member access and attendance instantly.</p>
                </div>
                
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Search manually by name or ID..." 
                            className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-white dark:bg-[#151D2A] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Scanner Area */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900 dark:bg-black rounded-3xl p-4 md:p-8 aspect-video relative overflow-hidden flex items-center justify-center border border-zinc-800"
                    >
                        {isScanning ? (
                            <>
                                {/* Simulated Camera View */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 blur-sm"></div>
                                <div className="absolute inset-0 bg-black/40"></div>
                                
                                {/* Overlay Target */}
                                <div className="relative z-10 w-full max-w-sm aspect-square border-2 border-brand-primary/50 rounded-2xl">
                                    {/* Scanning Animation Line */}
                                    <motion.div 
                                        animate={{ 
                                            y: ['0%', '100%', '0%'],
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="w-full h-1 bg-brand-primary shadow-[0_0_15px_5px_rgba(202,240,40,0.4)] absolute"
                                    />
                                    {/* Corner Markers */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-primary rounded-tl-xl -translate-x-1 -translate-y-1"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-primary rounded-tr-xl translate-x-1 -translate-y-1"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-primary rounded-bl-xl -translate-x-1 translate-y-1"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-primary rounded-br-xl translate-x-1 translate-y-1"></div>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center z-10">
                                <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border border-zinc-700">
                                    <Camera className="w-10 h-10 text-zinc-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Camera is off</h3>
                                <p className="text-zinc-400 text-sm max-w-sm">Tap the button below to start the camera and begin scanning QR codes.</p>
                            </div>
                        )}
                    </motion.div>

                    <div className="flex justify-center">
                        <button 
                            onClick={() => setIsScanning(!isScanning)}
                            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1 ${
                                isScanning 
                                ? "bg-red-500 text-white hover:bg-red-600 shadow-red-500/25" 
                                : "bg-brand-primary text-brand-secondary hover:bg-[#b0d12e] shadow-brand-primary/25"
                            }`}
                        >
                            {isScanning ? <Camera className="w-6 h-6" /> : <ScanLine className="w-6 h-6" />}
                            {isScanning ? "Stop Scanning" : "Start Scanner"}
                        </button>
                    </div>
                </div>

                {/* Sidebar area: Stats & Activity */}
                <div className="flex flex-col gap-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-[#151D2A] p-5 rounded-2xl border border-gray-200 dark:border-[#1F2937] text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-3">
                                <UserCheck className="w-5 h-5" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">142</h4>
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mt-1">Check-ins Today</p>
                        </div>
                        <div className="bg-white dark:bg-[#151D2A] p-5 rounded-2xl border border-gray-200 dark:border-[#1F2937] text-center shadow-sm">
                            <div className="w-10 h-10 mx-auto bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mb-3">
                                <Users className="w-5 h-5" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">45</h4>
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mt-1">Active Now</p>
                        </div>
                    </div>

                    {/* Recent Scans */}
                    <div className="bg-white dark:bg-[#151D2A] rounded-2xl border border-gray-200 dark:border-[#1F2937] overflow-hidden shadow-sm flex-1 flex flex-col">
                        <div className="p-5 border-b border-gray-100 dark:border-[#1F2937]">
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <ScanLine className="w-4 h-4 text-brand-primary" />
                                Recent Scans
                            </h3>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto px-5 py-2">
                            <div className="divide-y divide-gray-100 dark:divide-[#1F2937]">
                                {recentScans.map((scan, i) => (
                                    <div key={i} className="py-4 flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                scan.status === "Access Granted" 
                                                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
                                                : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                                            }`}>
                                                {scan.status === "Access Granted" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{scan.name}</h4>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <span className="text-gray-500 dark:text-gray-400">{scan.id}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                                    <span className={`font-medium ${
                                                        scan.status === "Access Granted" 
                                                        ? "text-green-600 dark:text-green-400" 
                                                        : "text-red-600 dark:text-red-400"
                                                    }`}>
                                                        {scan.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{scan.time}</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                                                {scan.type}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-100 dark:border-[#1F2937] bg-gray-50 dark:bg-transparent">
                            <button className="w-full text-center text-sm font-medium text-brand-primary dark:text-brand-accent hover:underline">
                                View Full History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

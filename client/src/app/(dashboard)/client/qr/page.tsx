"use client";

import { motion } from "framer-motion";
import { QrCode, ShieldCheck, ScanLine, AlertCircle, RefreshCw, Calendar, Clock, MapPin } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";

export default function ClientQRPage() {
    const { openModal } = useActionModal();
    return (
        <div className="max-w-2xl mx-auto space-y-8 flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Access Pass</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto">Scan this QR code at the front desk or turnstiles to enter the facility.</p>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-dark-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-dark-border relative overflow-hidden group w-full max-w-sm"
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-500 rounded-full text-sm font-bold mb-8 shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                        Active Member
                    </div>

                    {/* QR Code Container */}
                    <div className="relative p-4 bg-white rounded-3xl shadow-lg border-4 border-gray-50 dark:border-gray-800">
                        {/* Scanning Animation */}
                        <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden">
                            <motion.div 
                                animate={{ y: ['0%', '200%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-full h-1 bg-brand-primary shadow-[0_0_15px_5px_rgba(202,240,40,0.5)]"
                            />
                        </div>

                        {/* Note: Replacing actual QR SVG with an iconic representation due to placeholder limits. Using Lucide QrCode + styling to look like a real QR block. */}
                        <div className="w-48 h-48 md:w-56 md:h-56 bg-white flex items-center justify-center relative">
                            {/* Four Corner Squares of a QR Code */}
                            <div className="absolute top-2 left-2 w-10 h-10 border-4 border-black rounded-tl-xl flex items-center justify-center"><div className="w-4 h-4 bg-black rounded-sm"></div></div>
                            <div className="absolute top-2 right-2 w-10 h-10 border-4 border-black rounded-tr-xl flex items-center justify-center"><div className="w-4 h-4 bg-black rounded-sm"></div></div>
                            <div className="absolute bottom-2 left-2 w-10 h-10 border-4 border-black rounded-bl-xl flex items-center justify-center"><div className="w-4 h-4 bg-black rounded-sm"></div></div>
                            
                            {/* Center Dots (Simulated) */}
                            <div className="w-24 h-24 flex flex-wrap gap-2 items-center justify-center opacity-80">
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                                <div className="w-4 h-4 bg-black rounded-sm opacity-0"></div>
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                            </div>
                            
                            {/* Logo inside QR */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-xl flex items-center justify-center rounded-lg z-10">
                                <span className="font-bold text-xl text-brand-primary">G</span>
                            </div>
                        </div>
                    </div>

                    {/* Member Details */}
                    <div className="mt-8 text-center space-y-1 w-full">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Alex Johnson</h2>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-mono">ID: GF-8932-441</p>
                    </div>

                    {/* Auto-refresh indicator */}
                        <button onClick={() => openModal('Manual Refresh', 'A new QR code has been generated.', 'Close')} className="mt-6 flex items-center justify-center gap-2 p-3 bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-border rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border transition-all group">
                            <RefreshCw className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform duration-500" />
                            Refresh Code Manually
                        </button>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="flex gap-4 w-full max-w-sm">
                <div className="flex-1 bg-white dark:bg-[#151D2A] p-4 rounded-2xl border border-gray-100 dark:border-[#1F2937] shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Home Club</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Downtown FITZONE</p>
                    </div>
                </div>
                <button onClick={() => openModal('Contact Support', 'Opening support chat or form...', 'Contact')} className="w-full py-4 mt-8 border-2 border-dashed border-gray-200 dark:border-[#1F2937] text-gray-500 dark:text-gray-400 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-dark-card transition-colors flex items-center justify-center gap-2">
                            <AlertCircle className="w-5 h-5" /> Code not working?
                    </button>
            </div>
        </div>
    );
}

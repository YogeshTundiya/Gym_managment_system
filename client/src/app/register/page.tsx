"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadGenSection } from "@/components/sections/LeadGenSection";
import { WaiverForm } from "@/components/forms/WaiverForm";
import { useRouter } from "next/navigation";

export default function Register() {
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);
    const router = useRouter();

    const handleWaiverComplete = () => {
        router.push("/client");
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center p-4 bg-[#0A0A0A] font-sans relative overflow-hidden">
            {/* Animated Ambient Background overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#0D5C46] rounded-full mix-blend-screen filter blur-[150px]" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }} 
                    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#107A5C] rounded-full mix-blend-screen filter blur-[150px]" 
                />
            </div>

            {/* Back to Home Link */}
            <Link href="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-[#64748b] hover:text-white transition-colors text-sm font-medium tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10 backdrop-blur-sm">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Return to Site
            </Link>

            {/* Central Animated Card */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-[550px] bg-[#0d0d0d]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_0_80px_rgba(13,92,70,0.15)] overflow-hidden flex flex-col pt-10 px-6 sm:px-12 pb-12 max-h-[90vh] custom-scrollbar overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {/* Custom Progress Switcher */}
                <div className="w-full bg-black/50 p-1.5 rounded-full border border-white/5 mb-10 relative flex pointer-events-none">
                    <div 
                        className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0D5C46] rounded-full shadow-lg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ left: currentStep === 1 ? '6px' : 'calc(50%)' }}
                    />
                    <div className={`flex-1 relative z-10 py-3 text-sm font-semibold tracking-wide text-center transition-colors duration-500 flex items-center justify-center gap-2 ${currentStep === 1 ? 'text-white' : 'text-[#555]'}`}>
                        <UserPlus size={16} /> Contact
                    </div>
                    <div className={`flex-1 relative z-10 py-3 text-sm font-semibold tracking-wide text-center transition-colors duration-500 flex items-center justify-center gap-2 ${currentStep === 2 ? 'text-white' : 'text-[#555]'}`}>
                        <FileText size={16} /> Waiver
                    </div>
                </div>

                <div className="w-full relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 ? (
                            <motion.div
                                key="step1Form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <LeadGenSection onComplete={() => setCurrentStep(2)} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2Form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <WaiverForm onComplete={handleWaiverComplete} />
                                
                                <button 
                                    onClick={() => setCurrentStep(1)}
                                    className="w-full mt-4 py-3 text-[#888] hover:text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                    Back to Contact Details
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] sm:text-xs text-[#555] leading-relaxed">
                        By proceeding with registration, you acknowledge and agree to FITZONE's secure data processing, <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a>, and our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                    </p>
                </div>

            </motion.div>
        </main>
    );
}

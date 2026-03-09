"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadGenSectionProps {
    onComplete?: () => void;
}

export const LeadGenSection = ({ onComplete }: LeadGenSectionProps) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        goal: "Weight Loss",
    });
    const [otp, setOtp] = useState("");

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Trigger completion callback to move to waiver
        if(onComplete) onComplete();
    };

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-white mb-2">Step 1: Contact Details</h2>
                <p className="text-[#888888] text-sm">Provide your initial contact details and verify your phone number via OTP.</p>
            </div>

            <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-5">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-medium text-[#888] pl-1">First Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="w-4 h-4 text-[#555]" />
                                        </div>
                                        <input
                                            type="text" required placeholder="Jane"
                                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner"
                                            value={formData.fullName.split(' ')[0] || ''}
                                            onChange={(e) => {
                                                const last = formData.fullName.split(' ')[1] || '';
                                                setFormData({ ...formData, fullName: `${e.target.value} ${last}`.trim() });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-medium text-[#888] pl-1">Last Name</label>
                                    <input
                                        type="text" required placeholder="Doe"
                                        className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner"
                                        value={formData.fullName.split(' ')[1] || ''}
                                        onChange={(e) => {
                                            const first = formData.fullName.split(' ')[0] || '';
                                            setFormData({ ...formData, fullName: `${first} ${e.target.value}`.trim() });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-medium text-[#888] pl-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="w-4 h-4 text-[#555]" />
                                    </div>
                                    <input
                                        type="email" required placeholder="jane@example.com"
                                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner"
                                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-medium text-[#888] pl-1">Preferred Tier</label>
                                <div className="relative">
                                    <select
                                        className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all appearance-none text-sm shadow-inner"
                                        value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    >
                                        <option>Essential</option>
                                        <option>Emerald FITZONE</option>
                                        <option>Private Club</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#555]">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full h-14 mt-6 bg-[#0D5C46] hover:bg-[#0A4A38] text-white rounded-xl font-bold tracking-wide transition-all text-sm shadow-[0_0_20px_rgba(13,92,70,0.4)] flex items-center justify-center gap-2 group relative overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Continue to Verification
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-center backdrop-blur-sm">
                                <p className="text-[#888] text-sm mb-1">We've sent a 4-digit code to</p>
                                <strong className="text-white tracking-wide">{formData.email}</strong>
                            </div>

                            <div className="space-y-1.5 flex flex-col items-center">
                                <label className="text-[11px] font-medium text-[#888] uppercase tracking-wide">Enter OTP</label>
                                <input
                                    type="text" maxLength={4} required placeholder="• • • •"
                                    className="w-48 bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] rounded-xl px-4 py-4 text-center text-3xl tracking-[0.5em] text-white font-mono shadow-inner transition-all"
                                    value={otp} onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-3 mt-8 pt-4">
                                <button type="button" onClick={() => setStep(1)} className="flex-1 h-14 bg-[#141414] text-[#888] hover:text-white rounded-xl font-semibold border border-white/5 hover:bg-[#1a1a1a] transition-all text-sm">
                                    Back
                                </button>
                                <button type="submit" className="flex-[2] h-14 bg-[#0D5C46] hover:bg-[#0A4A38] text-white rounded-xl font-bold tracking-wide transition-all text-sm shadow-[0_0_20px_rgba(13,92,70,0.4)] flex items-center justify-center gap-2">
                                    <CheckCircle2 size={18} />
                                    Verify Code
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

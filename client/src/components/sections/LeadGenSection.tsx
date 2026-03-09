"use client";

import { useState } from "react";

export const LeadGenSection = () => {
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
        // Basic validation could go here
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Lead submitted successfully! (Mock)");
        setStep(1);
        setFormData({ fullName: "", phone: "", email: "", goal: "Weight Loss" });
        setOtp("");
    };

    return (
        <section className="st-section w-full relative overflow-hidden bg-[#121c22]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#121c22] via-[#121c22]/95 to-transparent z-10" />
                <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop')" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-20 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Copy */}
                <div className="flex-1 text-white">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                        Begin Your <br />
                        <span className="italic text-[#CCA028]">Journey</span>
                    </h2>
                    <p className="text-white/80 text-lg max-w-sm mb-12 leading-relaxed">
                        Our membership advisors are ready to curate your experience. Leave your details for a private tour.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#F5F3ED] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-[#0A1F17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-sm">+1 (800) FITZONE</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#F5F3ED] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-[#0A1F17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-sm">concierge@fitzone.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full max-w-lg">
                    <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-6">
                        {step === 1 ? (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-white/80 mb-2 uppercase tracking-wide">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jane"
                                            className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#0F2E23] rounded-xl px-4 py-4 outline-none transition-colors text-[#111827]"
                                            value={formData.fullName.split(' ')[0] || ''}
                                            onChange={(e) => {
                                                const last = formData.fullName.split(' ')[1] || '';
                                                setFormData({ ...formData, fullName: `${e.target.value} ${last}`.trim() });
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-white/80 mb-2 uppercase tracking-wide">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Doe"
                                            className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#0F2E23] rounded-xl px-4 py-4 outline-none transition-colors text-[#111827]"
                                            value={formData.fullName.split(' ')[1] || ''}
                                            onChange={(e) => {
                                                const first = formData.fullName.split(' ')[0] || '';
                                                setFormData({ ...formData, fullName: `${first} ${e.target.value}`.trim() });
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#6B7280] mb-2 uppercase tracking-wide">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="jane@example.com"
                                        className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#0F2E23] rounded-xl px-4 py-4 outline-none transition-colors text-[#111827]"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#6B7280] mb-2 uppercase tracking-wide">
                                        Preferred Tier
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#0F2E23] rounded-xl px-4 py-4 outline-none transition-colors text-[#111827] appearance-none"
                                            value={formData.goal}
                                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        >
                                            <option>Essential</option>
                                            <option>Emerald FITZONE</option>
                                            <option>Private Club</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#111827]/60">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0A1F17] text-white rounded-xl py-4 font-semibold hover:bg-[#0F2E23] transition-colors mt-2 flex items-center justify-center gap-2 shadow-md"
                                >
                                    Send Enquiry
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-center text-white/80 text-sm mb-6">
                                    We&apos;ve sent a 4-digit code to <br /> <strong className="text-white">{formData.email}</strong>
                                </p>
                                <div>
                                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase tracking-wide text-center">
                                        Enter OTP
                                    </label>
                                    <input
                                        type="text"
                                        maxLength={4}
                                        required
                                        placeholder="• • • •"
                                        className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#0F2E23] rounded-xl px-4 py-4 text-center text-2xl tracking-[1em] outline-none transition-colors text-[#111827] font-mono"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-3 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="flex-1 bg-gray-100 text-gray-600 rounded-xl py-4 font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] bg-[#0A1F17] text-white rounded-xl py-4 font-semibold hover:bg-[#0F2E23] transition-colors"
                                    >
                                        Verify & Complete
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

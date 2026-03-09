"use client";

import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const PARQ_QUESTIONS = [
    "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
    "Do you feel pain in your chest when you do physical activity?",
    "In the past month, have you had chest pain when you were not doing physical activity?",
    "Do you lose your balance because of dizziness or do you ever lose consciousness?",
    "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
];

export const WaiverForm = () => {
    const sigCanvas = useRef<SignatureCanvas>(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    // Array of booleans or null (unanswered)
    const [parqAnswers, setParqAnswers] = useState<(boolean | null)[]>(
        Array(PARQ_QUESTIONS.length).fill(null)
    );

    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const clearSignature = () => {
        sigCanvas.current?.clear();
    };

    const setAnswer = (index: number, value: boolean) => {
        const newAnswers = [...parqAnswers];
        newAnswers[index] = value;
        setParqAnswers(newAnswers);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (sigCanvas.current?.isEmpty()) {
            alert("Please provide a signature before submitting.");
            return;
        }
        if (!agreedToTerms) {
            alert("Please agree to the trial waiver terms.");
            return;
        }
        if (parqAnswers.includes(null)) {
            alert("Please answer all PAR-Q questions.");
            return;
        }

        // Check if any parq answer is "Yes" (true)
        const needsClearance = parqAnswers.some(ans => ans === true);

        if (needsClearance) {
            alert("Based on your answers, you may need medical clearance before participating. A coach will contact you.");
        } else {
            alert("Registration complete! Welcome to FITZONE.");
        }

        // Reset flow mock
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        setParqAnswers(Array(PARQ_QUESTIONS.length).fill(null));
        setAgreedToTerms(false);
        clearSignature();
    };

    return (
        <section className="st-section w-full bg-[#f4f5f6] py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-full bg-[#0F2E23] mx-auto flex items-center justify-center mb-6 shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#121c22] mb-3">Guest Registration</h2>
                    <p className="text-[#64748b]">Please complete the following health screening and waiver to begin your trial.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Section 1: Personal Details */}
                    <div className="bg-background-card rounded-2xl md:rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <svg className="w-5 h-5 text-[#0F2E23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h3 className="text-xl font-bold text-[#121c22]">Personal Details</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-[#121c22] mb-2">First Name</label>
                                <input
                                    type="text" required placeholder="Jane"
                                    className="w-full bg-background-card border border-gray-200 focus:border-[#0F2E23] rounded-xl px-4 py-3 outline-none transition-colors"
                                    value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#121c22] mb-2">Last Name</label>
                                <input
                                    type="text" required placeholder="Doe"
                                    className="w-full bg-background-card border border-gray-200 focus:border-[#0F2E23] rounded-xl px-4 py-3 outline-none transition-colors"
                                    value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#121c22] mb-2">Email Address</label>
                                <input
                                    type="email" required placeholder="jane.doe@example.com"
                                    className="w-full bg-background-card border border-gray-200 focus:border-[#0F2E23] rounded-xl px-4 py-3 outline-none transition-colors"
                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#121c22] mb-2">Phone Number</label>
                                <input
                                    type="tel" required placeholder="+1 (555) 000-0000"
                                    className="w-full bg-background-card border border-gray-200 focus:border-[#0F2E23] rounded-xl px-4 py-3 outline-none transition-colors"
                                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: PAR-Q */}
                    <div className="bg-background-card rounded-2xl md:rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <svg className="w-5 h-5 text-[#0F2E23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h3 className="text-xl font-bold text-[#121c22]">Physical Activity Readiness (PAR-Q)</h3>
                        </div>
                        <p className="text-sm text-[#64748b] mb-8 pb-6 border-b border-gray-100">
                            Please answer the following questions honestly to ensure your safety during physical activity.
                        </p>

                        <div className="space-y-6">
                            {PARQ_QUESTIONS.map((question, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                                    <p className="text-[#121c22] text-sm md:pr-8 flex-1 leading-relaxed">
                                        {question}
                                    </p>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => setAnswer(index, true)}
                                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors border ${parqAnswers[index] === true
                                                ? "bg-[#0F2E23] border-[#0F2E23] text-white"
                                                : "bg-background-card border-gray-200 text-[#475569] hover:border-[#0F2E23]"
                                                }`}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAnswer(index, false)}
                                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors border ${parqAnswers[index] === false
                                                ? "bg-[#0F2E23] border-[#0F2E23] text-white"
                                                : "bg-background-card border-gray-200 text-[#475569] hover:border-[#0F2E23]"
                                                }`}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Waiver & Signature */}
                    <div className="bg-background-card rounded-2xl md:rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <svg className="w-5 h-5 text-[#0F2E23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <h3 className="text-xl font-bold text-[#121c22]">Trial Waiver & Release</h3>
                        </div>

                        <div className="bg-[#f8fafc] p-6 rounded-2xl mb-8">
                            <h4 className="font-bold text-xs text-[#475569] mb-4 tracking-wider uppercase">Assumption of Risk, Release and Waiver of Liability</h4>
                            <div className="h-32 overflow-y-auto text-xs text-[#64748b] leading-relaxed pr-4 custom-scrollbar">
                                In consideration of being permitted to participate in any way in the activities and programs offered by FITZONE, I, for myself, my personal representatives, heirs, and next of kin:
                                <br /><br />
                                1. Acknowledge, agree, and represent that I understand the nature of High Intensity Training and related fitness activities and that I am qualified, in good health, and in proper physical condition to participate in such Activity.
                                <br /><br />
                                2. Fully understand that: (a) FITNESS ACTIVITIES INVOLVE RISKS AND DANGERS OF SERIOUS BODILY INJURY, INCLUDING PERMANENT DISABILITY, PARALYSIS, AND DEATH (&quot;RISKS&quot;); (b) these Risks and dangers may be caused by my own actions or inactions, the actions or inactions of others participating in the Activity, the condition in which the Activity takes place, or THE NEGLIGENCE OF THE &quot;RELEASEES&quot; NAMED BELOW.
                            </div>
                        </div>

                        <label className="flex items-start gap-4 cursor-pointer mb-8 group">
                            <div className="relative flex items-center justify-center mt-1">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                />
                                <div className="w-6 h-6 rounded border-2 border-gray-300 peer-checked:bg-[#0F2E23] peer-checked:border-[#0F2E23] transition-colors flex items-center justify-center group-hover:border-[#0F2E23]">
                                    <svg className={`w-4 h-4 text-white ${agreedToTerms ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-[#475569] text-sm leading-relaxed pt-1">
                                I have read, understood and agree to the terms of the Trial Waiver & Release Form.
                            </span>
                        </label>

                        <div>
                            <label className="block text-sm font-semibold text-[#121c22] mb-4">Digital Signature</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-2xl relative bg-background-card overflow-hidden group">
                                <SignatureCanvas
                                    ref={sigCanvas}
                                    penColor="#121c22"
                                    canvasProps={{ className: 'signature-canvas w-full h-48 cursor-crosshair touch-none' }}
                                />

                                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-30 group-focus-within:opacity-0 transition-opacity">
                                    <svg className="w-6 h-6 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span className="text-sm font-medium text-slate-500">Sign here with your mouse or touch screen</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={clearSignature}
                                    className="absolute bottom-4 right-4 text-[10px] font-bold tracking-widest text-[#64748b] hover:text-[#121c22] uppercase z-10 bg-white/80 px-2 py-1 rounded"
                                >
                                    Clear Signature
                                </button>
                            </div>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-[#0F2E23] text-white rounded-2xl font-bold text-lg hover:bg-[#0A1F17] transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                        Complete Registration
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                </form>

            </div>
        </section>
    );
};

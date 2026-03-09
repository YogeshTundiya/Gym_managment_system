"use client";

import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Check, Edit3, ShieldAlert } from "lucide-react";

const PARQ_QUESTIONS = [
    "Has your doctor ever said that you have a heart condition?",
    "Do you feel pain in your chest when you do physical activity?",
    "In the past month, have you had chest pain when you were not active?",
    "Do you lose your balance because of dizziness or lose consciousness?",
    "Do you have a bone or joint problem that could be made worse?",
];

interface WaiverFormProps {
    onComplete?: () => void;
}

export const WaiverForm = ({ onComplete }: WaiverFormProps) => {
    const sigCanvas = useRef<SignatureCanvas>(null);
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

        const needsClearance = parqAnswers.some(ans => ans === true);

        if (needsClearance) {
            alert("Based on your answers, you may need medical clearance before participating. A coach will contact you.");
        } else {
            alert("Registration complete! Welcome to FITZONE.");
            if(onComplete) onComplete();
        }
    };

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-white mb-2">Step 2: Medical & Waiver</h2>
                <p className="text-[#888888] text-sm">Please complete your health screening and provide a digital signature.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* Section 1: PAR-Q */}
                <div className="bg-[#141414] rounded-2xl p-6 border border-white/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                        <div className="w-8 h-8 rounded-full bg-[#0D5C46]/20 flex items-center justify-center text-[#0D5C46]">
                            <ShieldAlert size={16} />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Physical Readiness (PAR-Q)</h3>
                    </div>

                    <div className="space-y-4">
                        {PARQ_QUESTIONS.map((question, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/5 transition-colors">
                                <p className="text-[#A2C7B8] text-xs sm:text-sm sm:pr-4 flex-1">
                                    {question}
                                </p>
                                <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-[#333] shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => setAnswer(index, true)}
                                        className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${parqAnswers[index] === true
                                            ? "bg-[#0D5C46] text-white shadow-md"
                                            : "text-[#888] hover:text-white"
                                            }`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setAnswer(index, false)}
                                        className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${parqAnswers[index] === false
                                            ? "bg-white/10 text-white shadow-md"
                                            : "text-[#888] hover:text-white"
                                            }`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Waiver & Signature */}
                <div className="bg-[#141414] rounded-2xl p-6 border border-white/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white">
                            <Edit3 size={16} />
                        </div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Release & Signature</h3>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-xl mb-6 border border-[#222]">
                        <div className="h-28 overflow-y-auto text-xs text-[#666] leading-relaxed pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            In consideration of being permitted to participate in any way in the activities and programs offered by FITZONE, I, for myself, my personal representatives, heirs, and next of kin:
                            <br /><br />
                            1. Acknowledge, agree, and represent that I understand the nature of High Intensity Training and related fitness activities and that I am qualified, in good health, and in proper physical condition to participate in such Activity.
                            <br /><br />
                            2. Fully understand that: (a) FITNESS ACTIVITIES INVOLVE RISKS AND DANGERS OF SERIOUS BODILY INJURY, INCLUDING PERMANENT DISABILITY, PARALYSIS, AND DEATH ("RISKS"); (b) these Risks and dangers may be caused by my own actions or inactions, the actions or inactions of others participating in the Activity, the condition in which the Activity takes place, or THE NEGLIGENCE OF THE "RELEASEES" NAMED BELOW.
                        </div>
                    </div>

                    <label className="flex items-center gap-4 cursor-pointer mb-6 group bg-white/5 p-4 rounded-xl border border-transparent hover:border-white/10 transition-colors">
                        <div className="relative flex items-center justify-center shrink-0">
                            <input
                                type="checkbox" className="peer sr-only"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />
                            <div className="w-5 h-5 rounded border border-[#555] peer-checked:bg-[#0D5C46] peer-checked:border-[#0D5C46] transition-all flex items-center justify-center group-hover:border-white">
                                <Check size={12} className={`text-white transition-transform ${agreedToTerms ? 'scale-100' : 'scale-0'}`} />
                            </div>
                        </div>
                        <span className="text-[#A2C7B8] text-xs font-medium">
                            I have read, understood and agree to the terms of the Trial Waiver & Release Form.
                        </span>
                    </label>

                    <div className="relative">
                        <div className="border border-dashed border-[#444] rounded-xl relative bg-[#1a1a1a] overflow-hidden group hover:border-[#666] transition-colors">
                            <SignatureCanvas
                                ref={sigCanvas}
                                penColor="#ffffff"
                                canvasProps={{ className: 'signature-canvas w-full h-40 cursor-crosshair touch-none' }}
                            />

                            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-30 group-focus-within:opacity-0 transition-opacity">
                                <span className="text-xs font-semibold tracking-widest uppercase text-[#888]">Sign Here</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={clearSignature}
                            className="absolute bottom-2 right-2 text-[10px] font-bold tracking-wider text-[#888] hover:text-white uppercase z-10 bg-[#222] hover:bg-[#333] px-3 py-1.5 rounded transition-colors"
                        >
                            Clear
                        </button>
                    </div>

                </div>

                <div className="flex gap-4 pt-4">
                    <button type="submit" className="w-full h-14 bg-[#0D5C46] hover:bg-[#0A4A38] text-white rounded-xl font-bold tracking-wide transition-all text-sm shadow-[0_0_20px_rgba(13,92,70,0.4)] hover:shadow-[0_0_30px_rgba(13,92,70,0.6)] flex items-center justify-center gap-2">
                        <Check size={18} />
                        Complete Registration
                    </button>
                </div>

            </form>
        </div>
    );
};

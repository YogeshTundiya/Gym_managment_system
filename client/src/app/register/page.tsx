"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LeadGenSection } from "@/components/sections/LeadGenSection";
import { WaiverForm } from "@/components/forms/WaiverForm";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    const handleWaiverComplete = () => {
        router.push("/client");
    };

    return (
        <main className="w-full flex flex-col lg:flex-row bg-[#0A0A0A] font-sans">
            {/* Left Side: Elegant Green Gradient Info Panel */}
            <div className="hidden lg:flex flex-col relative w-full lg:w-[40%] sticky top-[73px] h-[calc(100vh-73px)] border-r border-white/5 bg-gradient-to-br from-[#0D5C46] via-[#0A4A38] to-[#05251C] overflow-hidden">
                
                {/* Ambient glow overlay for depth */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#107A5C] rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#CCA028] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 w-full h-full p-8 lg:p-12 xl:p-16 flex flex-col justify-between">
                    <div className="mb-4 xl:mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#A2C7B8] hover:text-white text-sm font-medium transition-colors mb-8 xl:mb-12 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit">
                            <ArrowLeft className="w-4 h-4" />
                            Return to Site
                        </Link>

                        <h1 className="text-3xl xl:text-5xl font-semibold text-white mb-4 xl:mb-6 leading-tight">
                            Start Your <br/>Journey Today
                        </h1>
                        <p className="text-[#A2C7B8] text-sm xl:text-lg mb-8 max-w-sm leading-relaxed">
                            Join an exclusive community of athletes committed to peak performance. Complete your digital waiver below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full shrink-0 mt-auto pb-4">
                        <div className="p-4 xl:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl flex flex-col justify-start">
                            <span className="inline-block px-3 py-1 bg-[#CCA028]/20 text-[#CCA028] text-[10px] xl:text-xs font-bold tracking-widest rounded-full mb-2 xl:mb-3 uppercase w-fit">
                                Step 1
                            </span>
                            <h3 className="text-white text-sm xl:text-base font-medium mb-1">Contact Details</h3>
                            <p className="text-[#A2C7B8] text-[10px] xl:text-xs leading-relaxed">Provide your contact details and verify your phone via OTP.</p>
                        </div>
                        <div className="p-4 xl:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 shadow-lg flex flex-col justify-start">
                            <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] xl:text-xs font-bold tracking-widest rounded-full mb-2 xl:mb-3 uppercase w-fit">
                                Step 2
                            </span>
                            <h3 className="text-white text-sm xl:text-base font-medium mb-1">Health Waiver</h3>
                            <p className="text-[#A2C7B8] text-[10px] xl:text-xs leading-relaxed">Complete your mandatory health declaration and digital signature.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form Content */}
            <div className="w-full lg:w-[60%] px-6 py-12 lg:px-24 bg-[#0A0A0A] relative flex flex-col min-h-[calc(100vh-73px)]">
                <div className="max-w-xl mx-auto py-8 w-full">
                    <div className="lg:hidden mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-white font-semibold transition-colors bg-[#141414] px-4 py-2 rounded-full border border-white/5">
                            <ArrowLeft className="w-4 h-4" />
                            Return
                        </Link>
                    </div>

                    <div className="text-left mb-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                            Guest Registration
                        </h2>
                        <p className="text-[#888888] text-sm lg:text-base leading-relaxed">
                            Please follow the steps below carefully to complete your health screening and gain access to your FITZONE trial.
                        </p>
                    </div>

                    {/* Form Sections */}
                    <div className="space-y-12">
                        {/* Wrapper to give the forms a nice cohesive boundary matching the dark theme */}
                        <div className="bg-[#141414] p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                            {/* Subtle top highlight */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A4A38] to-[#0D5C46]"></div>
                            
                            <LeadGenSection />
                        </div>

                        <div className="bg-[#141414] p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                            {/* Subtle top highlight */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D5C46] to-[#107A5C]"></div>
                            
                            <WaiverForm onComplete={handleWaiverComplete} />
                        </div>
                    </div>

                    <div className="mt-12 text-center pb-8">
                        <p className="text-[#555] text-xs leading-relaxed max-w-sm mx-auto">
                            By submitting these forms, you securely agree to FITZONE's Terms of Service and Medical Liability Policies.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

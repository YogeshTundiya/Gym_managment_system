import { LeadGenSection } from "@/components/sections/LeadGenSection";
import { WaiverForm } from "@/components/forms/WaiverForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Register() {
    return (
        <main className="min-h-screen w-full flex bg-[#0A0A0A] font-sans">
            {/* Left Side: Elegant Green Gradient Info Panel */}
            <div className="hidden lg:flex flex-col relative w-[40%] p-16 sticky top-0 h-screen overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D5C46] via-[#0A4A38] to-[#05251C]"></div>

                {/* Soft glow overlay for depth */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#107A5C] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-md">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#A2C7B8] hover:text-white text-sm font-medium transition-colors mb-16">
                            <ArrowLeft className="w-4 h-4" />
                            Return to Site
                        </Link>

                        <h1 className="text-5xl font-semibold text-white mb-6 leading-tight">
                            Start Your Journey Today
                        </h1>
                        <p className="text-[#A2C7B8] text-lg mb-12 max-w-sm leading-relaxed">
                            Join an exclusive community of athletes committed to peak performance. Elevate your training in our world-class facilities.
                        </p>

                        <div className="mt-8 space-y-6 max-w-sm">
                            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 shadow-2xl">
                                <span className="inline-block px-3 py-1 bg-[#CCA028]/20 text-[#CCA028] text-xs font-bold tracking-widest rounded-full mb-3 uppercase">
                                    Step 1
                                </span>
                                <h3 className="text-white font-medium mb-1">Lead Generation</h3>
                                <p className="text-[#A2C7B8] text-sm leading-relaxed">Provide your initial contact details and verify your phone number via OTP.</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 shadow-xl opacity-80">
                                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold tracking-widest rounded-full mb-3 uppercase">
                                    Step 2
                                </span>
                                <h3 className="text-white font-medium mb-1">Health Waiver</h3>
                                <p className="text-[#A2C7B8] text-sm leading-relaxed">Complete your mandatory health declaration and sign your PAR-Q form.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form Content scrollable */}
            <div className="w-full lg:w-[60%] h-screen overflow-y-auto px-6 py-12 lg:px-24 bg-[#0A0A0A] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="max-w-xl mx-auto py-8">
                    <div className="lg:hidden mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-white font-semibold transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Return
                        </Link>
                    </div>

                    <div className="text-left mb-16">
                        <h2 className="text-4xl font-semibold text-white mb-4">
                            Complete Registration
                        </h2>
                        <p className="text-[#888888] text-base">
                            Please follow the steps below carefully to gain access to your FITZONE membership portal.
                        </p>
                    </div>

                    {/* Form Sections */}
                    <div className="space-y-16">
                        <div className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-[#222]">
                            <LeadGenSection />
                        </div>

                        <div className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-[#222]">
                            <WaiverForm />
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-[#555] text-xs">By submitting these forms, you agree to our Terms of Service.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

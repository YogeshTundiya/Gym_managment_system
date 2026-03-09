"use client";

import React from "react";
import Link from "next/link";

export const Packages = () => {
    return (
        <section className="st-section w-full bg-[#f8fafc] py-24 relative overflow-hidden" id="packages">
            {/* Background Decorators */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d1f4e1]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e0f2fe]/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[#EAE8E2] text-[#CCA028] text-xs font-bold tracking-widest rounded-full mb-6 uppercase">
                        Exclusivity Defined
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#0F2E23] mb-6 tracking-tight">
                        Elevate Your Standard
                    </h2>
                    <p className="text-[#6B7280] text-lg md:text-xl">
                        Experience a sanctuary of peak performance. Choose a membership
                        tier tailored to your lifestyle and unlock unparalleled access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12 pb-10">

                    {/* Essential Plan */}
                    <div className="bg-background-card rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                        <div className="mb-8">
                            <div className="w-10 h-10 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6">
                                <svg className="w-5 h-5 text-[#CCA028]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-3xl font-bold text-[#111827] mb-2">Essential</h3>
                        </div>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="font-serif text-5xl font-extrabold text-[#111827]">₹14,900</span>
                            <span className="text-[#6B7280] font-medium">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                24/7 Access
                            </li>
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                Standard Classes
                            </li>
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                Sauna & Steam
                            </li>
                        </ul>
                        <Link href="/checkout/essential" className="w-full py-4 rounded-xl border border-[#111827] text-[#111827] font-semibold hover:bg-[#111827] hover:text-white transition-colors block text-center">
                            Select Plan
                        </Link>
                    </div>

                    {/* Emerald FITZONE Plan (Most Popular) */}
                    <div className="bg-[#0F2E23] rounded-[32px] p-10 shadow-2xl relative transform md:-translate-y-4 overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-[#CCA028] text-white text-[10px] font-bold px-6 py-2 rounded-bl-[20px] tracking-widest uppercase">
                            Most Refined
                        </div>

                        <div className="mb-8 mt-2">
                            <div className="w-12 h-12 rounded-full bg-[#CCA028]/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#CCA028]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-3xl font-bold text-white mb-2">Emerald FITZONE</h3>
                        </div>
                        <div className="flex items-baseline gap-1 mb-8 text-white">
                            <span className="font-serif text-6xl font-extrabold">₹29,900</span>
                            <span className="text-white/70 font-medium">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-white/90 text-sm">
                                <CheckIconLight />
                                Unlimited Personal Training
                            </li>
                            <li className="flex items-center gap-3 text-white/90 text-sm">
                                <CheckIconLight />
                                Private Locker & Laundry
                            </li>
                            <li className="flex items-center gap-3 text-white/90 text-sm">
                                <CheckIconLight />
                                Recovery Lounge Access
                            </li>
                            <li className="flex items-center gap-3 text-white/90 text-sm">
                                <CheckIconLight />
                                Guest Passes (4/mo)
                            </li>
                        </ul>
                        <Link href="/checkout/emerald-elite" className="w-full py-4 rounded-xl bg-[#CCA028] text-white font-bold hover:bg-[#B38C22] transition-colors shadow-lg block text-center">
                            Apply For Membership
                        </Link>
                    </div>

                    {/* Private Club Plan */}
                    <div className="bg-background-card rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                        <div className="mb-8">
                            <div className="w-10 h-10 rounded-full bg-[#FAFAF8] flex items-center justify-center mb-6">
                                <svg className="w-5 h-5 text-[#CCA028]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11V7a2 2 0 114 0v4h1a1 1 0 010 2H7a1 1 0 010-2h1z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-3xl font-bold text-[#111827] mb-2">Private Club</h3>
                        </div>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="font-serif text-5xl font-extrabold text-[#111827]">₹59,900</span>
                            <span className="text-[#6B7280] font-medium">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                All Emerald Benefits
                            </li>
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                Dedicated Concierge
                            </li>
                            <li className="flex items-center gap-3 text-[#475569] text-sm">
                                <CheckIcon active={true} />
                                Spa Treatments Included
                            </li>
                        </ul>
                        <Link href="/contact" className="w-full py-4 rounded-xl border border-[#111827] text-[#111827] font-semibold hover:bg-[#111827] hover:text-white transition-colors block text-center">
                            Contact Us
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

const CheckIcon = ({ active }: { active: boolean }) => {
    if (!active) {
        return (
            <div className="w-5 h-5 rounded-full bg-[#EAE8E2] flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        );
    }
    return (
        <div className="w-5 h-5 rounded-full bg-[#CCA028]/20 flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 text-[#CCA028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
};

const CheckIconLight = () => (
    <div className="w-5 h-5 rounded-full bg-[#CCA028]/30 flex items-center justify-center shrink-0">
        <svg className="w-3 h-3 text-[#CCA028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

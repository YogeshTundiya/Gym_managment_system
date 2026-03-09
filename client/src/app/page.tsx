"use client";

import { useRef } from "react";
import { Packages } from "@/components/sections/Packages";
import { ClassSchedule } from "@/components/booking/ClassSchedule";
import { Reviews } from "@/components/sections/Reviews";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    // Initial Splash text
    tl.to(".splash-text", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.5,
    });

    // 5 vertical panels lift up
    tl.to(".splash-panel", {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.1,
    }, "-=0.4");

    // Hide container
    tl.set(".splash-container", { display: "none" });

    // Hero Text Stagger
    tl.fromTo(".hero-text-anim",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
      "-=0.8"
    );

    // Grid Cards Stagger (Hero)
    tl.fromTo(".action-card-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.5"
    );

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Splash Screen */}
      <div className="splash-container fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
        {/* Background Panels */}
        <div className="absolute inset-0 flex w-full h-full pointer-events-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="splash-panel flex-1 h-full bg-[#121c22] scale-x-[1.01]" />
          ))}
        </div>

        {/* Text */}
        <div className="splash-text relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.3em] sm:tracking-[0.4em] pointer-events-none text-center px-4">
          FITZONE
        </div>
      </div>

      <div className="text-center pt-20">
        <div className="hero-text-anim inline-block px-4 py-1.5 bg-[#CCA028]/20 text-[#0F2E23] text-xs font-bold tracking-widest rounded-full mb-6 uppercase">
          Elevate Your Training
        </div>
        <h1 className="hero-text-anim font-serif text-5xl md:text-7xl font-bold text-[#121c22] leading-tight mb-6">
          Welcome to <br />
          <span className="text-[#0F2E23]">FITZONE</span>
        </h1>
        <p className="hero-text-anim text-[#64748b] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
          Leading the fitness revolution with modern facilities, FITZONE coaching,
          and a community-focused training environment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link href="/register" className="hero-text-anim w-full md:w-auto px-8 py-4 bg-[#0F2E23] text-white rounded-full font-semibold hover:bg-[#0A1F17] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 block text-center">
            Start Free Trial
          </Link>
          <Link href="/facility" className="hero-text-anim w-full md:w-auto px-8 py-4 bg-background-card text-[#121c22] border border-gray-200 rounded-full font-semibold hover:border-[#0F2E23] hover:text-[#0F2E23] transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Facility Tour
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-16 pb-20">
        <Link href="/#packages" className="action-card-anim row-span-2 col-span-1 md:col-span-2 bg-[#0F2E23] rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02] block">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-16 backdrop-blur-sm">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-3">Join the Revolution</h3>
            <p className="text-green-100 max-w-md mb-8">Access premium equipment, specialized zones, and a supportive community to reach your goals faster.</p>
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider group-hover:gap-5 transition-all">
              View Packages
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>

        <Link href="/#schedule" className="action-card-anim col-span-1 bg-background-card rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 block">
          <div className="w-12 h-12 bg-[#f4f5f6] rounded-xl flex items-center justify-center text-[#121c22] mb-12 group-hover:bg-[#121c22] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#121c22] mb-2">Class Schedule</h3>
            <p className="text-[#64748b] text-sm mb-6">Find and book your next sweat session.</p>
            <div className="flex items-center text-[#0F2E23] text-sm font-semibold group-hover:underline">
              View Timetable &rarr;
            </div>
          </div>
        </Link>

        <Link href="/#trainers" className="action-card-anim col-span-1 bg-background-card rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 block">
          <div className="w-12 h-12 bg-[#f4f5f6] rounded-xl flex items-center justify-center text-[#121c22] mb-12 group-hover:bg-[#121c22] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#121c22] mb-2">Meet the Trainers</h3>
            <p className="text-[#64748b] text-sm mb-6">Explore profiles of our FITZONE coaching staff.</p>
            <div className="flex items-center text-[#0F2E23] text-sm font-semibold group-hover:underline">
              View Profiles &rarr;
            </div>
          </div>
        </Link>

        <Link href="/register" className="action-card-anim col-span-1 md:col-span-2 bg-background-card rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#fff1f2] rounded-xl flex items-center justify-center text-[#e11d48]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#121c22]">Guest Waiver & PAR-Q</h3>
              <p className="text-[#64748b] text-sm">Sign your compliance forms digitally before arriving.</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#121c22] group-hover:border-[#121c22] group-hover:text-white transition-colors shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      <Packages />
      <ClassSchedule />

      {/* Inside the Zone Gallery Section */}
      <section className="st-section w-full max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121c22] mb-4">Inside the Zone</h2>
          <p className="text-[#64748b] text-lg">
            Explore our state-of-the-art facilities designed to give you the ultimate
            training experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">

          <div className="md:col-span-2 md:row-span-2 bg-slate-200 rounded-[32px] overflow-hidden relative group">
            {/* Mock visual placeholder styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" }} />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <p className="text-white/80 text-sm font-semibold tracking-wider uppercase mb-1">Main Floor</p>
              <h3 className="text-white text-2xl font-bold">Free Weights & Machines</h3>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 bg-slate-200 rounded-[32px] overflow-hidden relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')" }} />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-white font-bold">Functional Turf Area</h3>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 bg-slate-200 rounded-[32px] overflow-hidden relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1721099163762-344c8549620f?q=80&w=1470&auto=format&fit=crop')" }} />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-white font-bold">Locker Rooms</h3>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 bg-slate-200 rounded-[32px] overflow-hidden relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop')" }} />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-white font-bold">Yoga Studio</h3>
            </div>
          </div>

        </div>
      </section>

      <Reviews />

      {/* Meet Your FITZONE Trainers */}
      <section id="trainers" className="st-section w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121c22] mb-4">Meet Your FITZONE Trainers</h2>
            <p className="text-[#64748b] text-lg">
              Our team of certified professionals is here to guide your journey with
              personalized strategies and unwavering support.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Carousel arrows mock */}
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F2E23] hover:border-[#0F2E23] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F2E23] hover:border-[#0F2E23] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trainer 1 */}
          <div className="bg-background-card rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-[300px] bg-cover bg-center relative p-4 flex flex-col justify-between items-start" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop')" }}>
              <span className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 font-bold rounded-full text-slate-800">STRENGTH EXPERT</span>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#121c22]">James Wilson</h3>
                  <p className="text-sm text-[#0F2E23] font-medium mt-1">Head of Performance</p>
                </div>
                <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-2 py-1 rounded-md text-sm">
                  ⭐ 4.9
                </div>
              </div>
              <p className="text-[#64748b] text-sm mt-4 mb-6 leading-relaxed">
                With over 12 years of experience in FITZONE coaching, James specializes in biomechanics and metabolic conditioning.
              </p>
              <div className="flex flex-wrap gap-2 mb-8 text-xs font-medium text-slate-500">
                <span className="px-3 py-1 border border-gray-100 rounded-full">Weightlifting</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">Injury Rehab</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">Nutrition</span>
              </div>
              <Link href="/trainers/james" className="w-full py-4 bg-[#121c22] text-white rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="bg-background-card rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-[300px] bg-cover bg-center relative p-4 flex flex-col justify-between items-end" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1470&auto=format&fit=crop')" }}>
              <span className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 font-bold rounded-full text-[#0F2E23]">MIND & BODY</span>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#121c22]">Elena Rodriguez</h3>
                  <p className="text-sm text-[#0F2E23] font-medium mt-1">Yoga & Pilates Lead</p>
                </div>
                <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-2 py-1 rounded-md text-sm">
                  ⭐ 5.0
                </div>
              </div>
              <p className="text-[#64748b] text-sm mt-4 mb-6 leading-relaxed">
                Elena brings a holistic approach to fitness, blending core stability training with mindfulness to improve flexibility and mental clarity.
              </p>
              <div className="flex flex-wrap gap-2 mb-8 text-xs font-medium text-slate-500">
                <span className="px-3 py-1 border border-gray-100 rounded-full">Hatha Yoga</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">Core Balance</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">Mobility</span>
              </div>
              <Link href="/trainers/elena" className="w-full py-4 bg-[#121c22] text-white rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trainer 3 */}
          <div className="bg-background-card rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-[300px] bg-cover bg-center relative p-4 flex flex-col justify-between items-end" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1470&auto=format&fit=crop')" }}>
              <span className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 font-bold rounded-full text-slate-800">HIIT SPECIALIST</span>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#121c22]">David Kim</h3>
                  <p className="text-sm text-[#0F2E23] font-medium mt-1">HIIT & Burn Expert</p>
                </div>
                <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-2 py-1 rounded-md text-sm">
                  ⭐ 4.8
                </div>
              </div>
              <p className="text-[#64748b] text-sm mt-4 mb-6 leading-relaxed">
                The energy in David&apos;s sessions is unmatched. He focuses on functional movement patterns to build high-performance bodies.
              </p>
              <div className="flex flex-wrap gap-2 mb-8 text-xs font-medium text-slate-500">
                <span className="px-3 py-1 border border-gray-100 rounded-full">Fat Loss</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">Athletic Drills</span>
                <span className="px-3 py-1 border border-gray-100 rounded-full">TRX</span>
              </div>
              <Link href="/trainers/david" className="w-full py-4 bg-[#121c22] text-white rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Info Strip */}
      <section className="st-section w-full bg-[#0F2E23] mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-16 text-white grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Certified Coaches</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
              Every trainer on our team holds nationally recognized certifications.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Safe Environment</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
              Top-tier hygiene standards and safe equipment maintenance schedules.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Community Driven</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
              A supportive culture where members celebrate each other&apos;s wins.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

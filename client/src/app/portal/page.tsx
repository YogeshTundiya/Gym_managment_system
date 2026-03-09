"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ShieldAlert, ArrowRight, UserPlus, LogIn, Dumbbell, Activity, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortalPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleAutoFill = (role: "admin" | "client") => {
        setEmail(role === "admin" ? "admin@elite.com" : "client@elite.com");
        setPassword("demo123");
        setError("");
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (email === "admin@elite.com" && password === "demo123") {
            router.push("/admin");
        } else if (email === "client@elite.com" && password === "demo123") {
            router.push("/client");
        } else {
            setError("Invalid credentials. Please use the demo accounts.");
        }
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                className="relative z-10 w-full max-w-[500px] bg-[#0d0d0d]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_0_80px_rgba(13,92,70,0.15)] overflow-hidden flex flex-col items-center justify-start py-10 px-6 sm:px-12"
            >
                {/* Custom Animated Tab Switcher */}
                <div className="w-full bg-black/50 p-1.5 rounded-full border border-white/5 mb-10 relative flex">
                    <div 
                        className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0D5C46] rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ left: isLogin ? '6px' : 'calc(50%)' }}
                    />
                    <button 
                        onClick={() => { setIsLogin(true); setError(""); }}
                        className={`flex-1 relative z-10 py-3 text-sm font-semibold tracking-wide transition-colors ${isLogin ? 'text-white' : 'text-[#888] hover:text-white'}`}
                    >
                        Sign In
                    </button>
                    <button 
                        onClick={() => { setIsLogin(false); setError(""); }}
                        className={`flex-1 relative z-10 py-3 text-sm font-semibold tracking-wide transition-colors ${!isLogin ? 'text-white' : 'text-[#888] hover:text-white'}`}
                    >
                        Create Account
                    </button>
                </div>

                <div className="w-full text-center mb-8 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? "loginHeader" : "signupHeader"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                                {isLogin ? <Dumbbell className="text-[#A2C7B8]" size={32} /> : <UserPlus className="text-[#0D5C46]" size={32} />}
                            </div>
                            <h2 className="text-3xl font-semibold text-white mb-2">
                                {isLogin ? "Welcome Back" : "Join the Elite"}
                            </h2>
                            <p className="text-[#888888] text-sm">
                                {isLogin ? "Enter your credentials to access your portal." : "Register to start your fitness journey."}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="w-full relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {isLogin ? (
                            <motion.div
                                key="loginForm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <form onSubmit={handleLoginSubmit} className="space-y-4">
                                    {/* Demo Helper */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                                        <p className="text-[10px] font-semibold text-[#888] uppercase tracking-widest mb-3 text-center">Demo Quick Access</p>
                                        <div className="flex gap-3">
                                            <button type="button" onClick={() => handleAutoFill("admin")} className="flex-1 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-transparent hover:border-white/5 text-[#A2C7B8] text-xs font-semibold transition-all">
                                                Admin Demo
                                            </button>
                                            <button type="button" onClick={() => handleAutoFill("client")} className="flex-1 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-transparent hover:border-white/5 text-[#A2C7B8] text-xs font-semibold transition-all">
                                                Client Demo
                                            </button>
                                        </div>
                                    </div>

                                    {error && (
                                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 items-center text-red-400 text-sm">
                                            <ShieldAlert className="w-4 h-4 shrink-0" />
                                            {error}
                                        </motion.div>
                                    )}

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-medium text-[#888] pl-1">Email / Member ID</label>
                                        <input name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner" placeholder="name@email.com" />
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-end pl-1 pr-2">
                                            <label className="text-[11px] font-medium text-[#888]">Password</label>
                                            <a href="#" className="text-[10px] font-medium text-[#0D5C46] hover:text-[#107A5C] transition-colors">Forgot validation?</a>
                                        </div>
                                        <div className="relative">
                                            <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner pr-12" placeholder="••••••••" />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#888] transition-colors">
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full h-14 mt-8 bg-[#0D5C46] hover:bg-[#0A4A38] text-white rounded-xl font-bold tracking-wide transition-all text-sm shadow-[0_0_20px_rgba(13,92,70,0.4)] hover:shadow-[0_0_30px_rgba(13,92,70,0.6)] flex items-center justify-center gap-2 group overflow-hidden relative">
                                        <span className="relative z-10 flex items-center gap-2">
                                            <LogIn size={18} />
                                            Sign In
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signupForm"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <form onSubmit={handleSignupSubmit} className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="space-y-1.5 flex-1">
                                            <label className="text-[11px] font-medium text-[#888] pl-1">First Name</label>
                                            <input type="text" required className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner" placeholder="John" />
                                        </div>
                                        <div className="space-y-1.5 flex-1">
                                            <label className="text-[11px] font-medium text-[#888] pl-1">Last Name</label>
                                            <input type="text" required className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner" placeholder="Doe" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-medium text-[#888] pl-1">Email</label>
                                        <input type="email" required className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner" placeholder="john@example.com" />
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-medium text-[#888] pl-1">Password</label>
                                        <div className="relative">
                                            <input type={showPassword ? "text" : "password"} required className="w-full px-5 py-3.5 rounded-xl bg-[#141414] border border-white/5 focus:bg-[#1a1a1a] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] text-white transition-all placeholder:text-[#555] text-sm shadow-inner pr-12" placeholder="••••••••" />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#888] transition-colors">
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Feature benefits inside signup to replace the split screen info */}
                                    <div className="py-4 space-y-2">
                                        <div className="flex items-center gap-3 text-xs text-[#888]">
                                            <CheckCircle2 size={14} className="text-[#0D5C46]" /> <span>Personalized Dashboard</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-[#888]">
                                            <CheckCircle2 size={14} className="text-[#0D5C46]" /> <span>Seamless Class Bookings</span>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full h-14 mt-4 bg-white hover:bg-gray-200 text-[#0A0A0A] rounded-xl font-bold tracking-wide transition-all text-sm flex items-center justify-center gap-2 group overflow-hidden relative">
                                        <span className="relative z-10 flex items-center gap-2">
                                            <UserPlus size={18} />
                                            Create Account
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </main>
    );
}

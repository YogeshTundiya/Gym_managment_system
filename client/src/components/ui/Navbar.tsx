"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-background-main/80 backdrop-blur-md sticky top-0 z-[100] border-b border-gray-100 flex flex-col relative">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#CCA028] rounded-xl flex items-center justify-center text-[#0F2E23]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                    <span className="font-serif text-xl font-bold text-[#111827] tracking-tight">FITZONE</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
                    <Link href="/register" className="flex items-center gap-2 cursor-pointer hover:text-[#0A1F17] transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Join FITZONE
                    </Link>
                    <Link href="/portal" className="flex items-center gap-2 text-[#CCA028] cursor-pointer hover:text-[#b38b1f] transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#CCA028]"></span>
                        Portal Login
                    </Link>
                </div>

                {/* Mobile Menu Toggle button */}
                <button 
                    className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col px-6 py-4 bg-white border-t border-gray-100 shadow-lg absolute top-full left-0 w-full z-[200]">
                    <Link 
                        href="/register" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 py-3 text-sm font-medium text-[#6B7280] hover:text-[#0A1F17] border-b border-gray-50"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Join FITZONE
                    </Link>
                    <Link 
                        href="/portal" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 py-3 text-sm font-medium text-[#CCA028] hover:text-[#b38b1f]"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#CCA028]"></span>
                        Portal Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

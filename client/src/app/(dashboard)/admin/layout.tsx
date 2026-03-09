"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LayoutDashboard, Users, CreditCard, Activity, Settings, LogOut, MessageSquare, Plus, QrCode, PanelRightClose, PanelRightOpen, Moon, Sun, Menu, Bell, X } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navigation = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "QR Scanner", href: "/admin/scanner", icon: QrCode },
        { name: "Clients", href: "/admin/clients", icon: Users },
        { name: "Billing", href: "/admin/billing", icon: CreditCard },
        { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
        { name: "Reports & Analytics", href: "/admin/reports", icon: Activity },
        { name: "Manage & Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex transition-colors duration-300">
            {/* Sidebar Navigation */}
            {/* Desktop Sidebar */}
            <aside
                className={`fixed hidden lg:flex flex-col top-0 left-0 z-40 h-screen transition-all duration-300 bg-white dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border ${isCollapsed ? 'w-20' : 'w-64'
                    }`}
            >
                <div className={`h-16 flex items-center transition-all duration-300 border-b border-gray-100 dark:border-dark-border ${isCollapsed ? 'justify-center px-0' : 'justify-between px-4'}`}>
                    <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${isCollapsed ? 'hidden' : 'w-auto'}`}>
                        <div className="w-8 h-8 rounded-lg bg-brand-primary flex flex-shrink-0 items-center justify-center text-white font-bold">
                            G
                        </div>
                        <span className="font-serif text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
                            FITZONE
                        </span>
                    </div>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={`p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors ${isCollapsed ? "mx-auto" : ""}`}
                        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isCollapsed ? <PanelRightOpen size={18} /> : <PanelRightClose size={18} />}
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar flex flex-col gap-1">
                    {/* Menu Header */}
                    {!isCollapsed && <div className="px-3 mb-2 text-xs font-bold tracking-wider text-gray-400 dark:text-gray-500">MENU</div>}
                    <button className={`w-full py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors ${isCollapsed ? "px-0" : ""}`}>
                        <Plus size={18} className="min-w-[18px]" />
                        {!isCollapsed && <span className="whitespace-nowrap">New Inquiry</span>}
                    </button>

                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                title={isCollapsed ? item.name : undefined}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? "bg-brand-accent text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent"
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                                    } ${isCollapsed ? "justify-center" : ""}`}
                            >
                                <item.icon className={`w-5 h-5 min-w-[20px] ${isActive ? "text-brand-primary dark:text-brand-accent" : "text-gray-400"}`} />
                                {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-2">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${isCollapsed ? "justify-center" : ""}`}
                            title={isCollapsed ? "Toggle Theme" : undefined}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5 min-w-[20px]" /> : <Moon className="w-5 h-5 min-w-[20px]" />}
                            {!isCollapsed && <span className="whitespace-nowrap">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
                        </button>
                    )}

                    <Link
                        href="/portal"
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors ${isCollapsed ? "justify-center" : ""}`}
                        title={isCollapsed ? "Sign Out" : undefined}
                    >
                        <LogOut className="w-5 h-5 min-w-[20px]" />
                        {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
                    </Link>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    {/* Sidebar */}
                    <aside className="fixed top-0 left-0 w-72 h-full bg-white dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border flex flex-col shadow-2xl">
                        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 dark:border-dark-border">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary flex flex-shrink-0 items-center justify-center text-white font-bold">
                                    G
                                </div>
                                <span className="font-serif text-lg font-bold text-gray-900 dark:text-white">FITZONE</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
                            <div className="px-3 mb-2 text-xs font-bold tracking-wider text-gray-400 dark:text-gray-500">MENU</div>
                            <button className="w-full py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors">
                                <Plus size={18} className="min-w-[18px]" />
                                <span>New Inquiry</span>
                            </button>

                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                                            ? "bg-brand-accent text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent"
                                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                                            }`}
                                    >
                                        <item.icon className={`w-5 h-5 min-w-[20px] ${isActive ? "text-brand-primary dark:text-brand-accent" : "text-gray-400"}`} />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-2">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {theme === 'dark' ? <Sun className="w-5 h-5 min-w-[20px]" /> : <Moon className="w-5 h-5 min-w-[20px]" />}
                                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                                </button>
                            )}
                            <Link
                                href="/portal"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                            >
                                <LogOut className="w-5 h-5 min-w-[20px]" />
                                <span>Sign Out</span>
                            </Link>
                        </div>
                    </aside>
                </div>
            )}

            {/* Main Content Area */}
            <div className={`transition-all duration-300 ${isCollapsed ? 'lg:pl-20' : 'lg:pl-64'} min-h-screen w-full`}>
                {/* Header Navbar */}
                <header className="h-16 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card rounded-lg"
                        >
                            <Menu size={20} />
                        </button>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">Dashboard Overview</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0F1623]"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-dark-border">
                            <div className="w-8 h-8 rounded-full bg-brand-secondary text-white flex items-center justify-center font-bold text-sm">
                                AD
                            </div>
                            <div className="hidden md:block text-sm">
                                <p className="font-semibold text-gray-900 dark:text-white leading-none">Admin User</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Manager Component</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-6 lg:p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
    )
}

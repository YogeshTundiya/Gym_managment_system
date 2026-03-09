"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LayoutDashboard, Calendar, Dumbbell, Activity, Settings, LogOut, QrCode, PanelRightClose, PanelRightOpen, Moon, Sun, Menu, Bell, User } from "lucide-react";

export default function ClientLayout({
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
        { name: "Dashboard", href: "/client", icon: LayoutDashboard },
        { name: "My Schedule", href: "/client/schedule", icon: Calendar },
        { name: "My Plan", href: "/client/plan", icon: Dumbbell },
        { name: "Analytics", href: "/client/analytics", icon: Activity },
        { name: "QR Check-in", href: "/client/qr", icon: QrCode },
        { name: "Settings", href: "/client/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 flex">
            {/* Sidebar Navigation */}
            <aside
                className={`fixed inset-y-0 left-0 bg-white dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border z-40 hidden md:flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
            >
                <div className={`h-16 flex items-center border-b border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-6'}`}>
                    <Link href="/" className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isCollapsed ? 'hidden' : 'w-auto'}`}>
                        <div className="w-8 h-8 bg-brand-primary min-w-8 rounded-full flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </div>
                        <span className="font-serif text-lg font-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">FitZone</span>
                    </Link>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={`p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isCollapsed ? "mx-auto" : ""}`}
                        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isCollapsed ? <PanelRightOpen className="w-5 h-5" /> : <PanelRightClose className="w-5 h-5" />}
                    </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto overflow-x-hidden">
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-2">Menu</div>
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
                </nav>

                <div className="p-4 border-t border-gray-100 dark:border-dark-border flex flex-col gap-2">
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

                    {/* Empty block, button moved to top */}

                    <Link
                        href="/portal"
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors ${isCollapsed ? "justify-center" : ""}`}
                        title={isCollapsed ? "Sign Out" : undefined}
                    >
                        <LogOut className="w-5 h-5 min-w-[20px]" />
                        {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
                    </Link>
                </div>
            </aside>

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
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">Welcome back, Alex</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-primary rounded-full border-2 border-white dark:border-[#0F1623]"></span>
                        </button>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border">
                            <User size={16} className="text-gray-600 dark:text-gray-300" />
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

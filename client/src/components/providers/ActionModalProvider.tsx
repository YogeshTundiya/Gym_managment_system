"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

type ModalState = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonText: string;
};

type ActionModalContextType = {
    openModal: (title: string, description?: string, buttonText?: string) => void;
    closeModal: () => void;
};

const ActionModalContext = createContext<ActionModalContextType | undefined>(undefined);

export function useActionModal() {
    const context = useContext(ActionModalContext);
    if (!context) {
        throw new Error("useActionModal must be used within an ActionModalProvider");
    }
    return context;
}

export function ActionModalProvider({ children }: { children: ReactNode }) {
    const [modalState, setModalState] = useState<ModalState>({
        isOpen: false,
        title: "",
        description: "",
        buttonText: "Confirm",
    });

    const openModal = (title: string, description: string = "This action will be fully implemented in the next major update.", buttonText: string = "Confirm") => {
        setModalState({ isOpen: true, title, description, buttonText });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        document.body.style.overflow = "unset";
    };

    const renderCustomContent = () => {
        const descText = <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">{modalState.description}</p>;

        switch (modalState.title) {
            case 'Add Client':
            case 'New Lead':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white" />
                            </div>
                        </div>
                    </div>
                );
            case 'Message Client':
            case 'WhatsApp':
            case 'Contact Support':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea rows={4} placeholder="Type your message here..." className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white resize-none"></textarea>
                        </div>
                    </div>
                );
            case 'Filters':
            case 'Filter Reports':
            case 'Filter Analytics':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Date Range</label>
                                <select className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white">
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>This Month</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Status</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <input type="checkbox" className="rounded text-brand-primary focus:ring-brand-primary" defaultChecked /> Active
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <input type="checkbox" className="rounded text-brand-primary focus:ring-brand-primary" /> Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Export CSV':
            case 'Export Report':
            case 'Export Data':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Export Format</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <label className="flex items-center justify-center p-3 border-2 border-brand-primary bg-brand-primary/5 rounded-xl cursor-pointer hover:bg-brand-primary/10 transition-colors">
                                        <input type="radio" name="format" value="csv" className="sr-only" defaultChecked />
                                        <span className="text-sm font-bold text-brand-primary">CSV Matrix</span>
                                    </label>
                                    <label className="flex items-center justify-center p-3 border-2 border-gray-200 dark:border-[#1F2937] hover:border-brand-primary/50 rounded-xl cursor-pointer transition-colors">
                                        <input type="radio" name="format" value="pdf" className="sr-only" />
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">PDF Report</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Book Session':
            case 'Reschedule Session':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Select Date</label>
                                <input type="date" className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0F1623] border border-gray-200 dark:border-[#1F2937] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Available Times</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button className="py-2 text-xs font-semibold border-2 border-gray-200 dark:border-[#1F2937] rounded-lg text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors">09:00 AM</button>
                                    <button className="py-2 text-xs font-semibold border-2 border-brand-primary bg-brand-primary/10 rounded-lg text-brand-primary transition-colors">10:30 AM</button>
                                    <button className="py-2 text-xs font-semibold border-2 border-gray-200 dark:border-[#1F2937] rounded-lg text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors">02:00 PM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Purchase PT Tokens':
            case 'Upgrade Plan':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="space-y-3 flex flex-col gap-2">
                            <label className="flex items-start gap-3 p-4 border-2 border-brand-primary bg-brand-primary/5 rounded-xl cursor-pointer hover:bg-brand-primary/10 transition-colors">
                                <input type="radio" name="package" className="mt-1 flex-shrink-0 text-brand-primary focus:ring-brand-primary bg-transparent border-gray-300" defaultChecked />
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">Pro Package</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10 Sessions + 2 Bonus</p>
                                </div>
                                <div className="font-bold text-brand-primary text-sm">$499</div>
                            </label>
                            <label className="flex items-start gap-3 p-4 border-2 border-gray-200 dark:border-[#1F2937] rounded-xl cursor-pointer hover:border-brand-primary/50 transition-colors">
                                <input type="radio" name="package" className="mt-1 flex-shrink-0 text-brand-primary focus:ring-brand-primary bg-transparent border-gray-300" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">Basic Package</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 Sessions</p>
                                </div>
                                <div className="font-bold text-gray-900 dark:text-white text-sm">$275</div>
                            </label>
                        </div>
                    </div>
                );
            case 'Workout Details':
            case 'Workout Tracking':
                return (
                    <div className="space-y-4 mb-8 text-left">
                        {descText}
                        <div className="bg-gray-50 dark:bg-[#0F1623] p-4 rounded-xl border border-gray-200 dark:border-[#1F2937]">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-gray-900 dark:text-white text-sm">Bench Press</span>
                                <span className="text-xs font-semibold px-2 py-1 rounded bg-brand-primary/10 text-brand-primary">4 Sets x 10 Reps</span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-gray-900 dark:text-white text-sm">Incline Dumbbell Press</span>
                                <span className="text-xs font-semibold px-2 py-1 rounded bg-brand-primary/10 text-brand-primary">3 Sets x 12 Reps</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-900 dark:text-white text-sm">Cable Crossovers</span>
                                <span className="text-xs font-semibold px-2 py-1 rounded bg-brand-primary/10 text-brand-primary">3 Sets x 15 Reps</span>
                            </div>
                        </div>
                    </div>
                );
            case 'Upload Logo':
            case 'Upload Avatar':
                return (
                    <div className="space-y-4 mb-8 text-center text-left">
                        {descText}
                        <div className="border-2 border-dashed border-gray-300 dark:border-[#1F2937] rounded-2xl p-8 hover:bg-gray-50 dark:hover:bg-[#151D2A] transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Click to upload or drag & drop</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                    </div>
                );
            default:
                return descText;
        }
    };

    return (
        <ActionModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {/* Global Modal */}
            <AnimatePresence>
                {modalState.isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white dark:bg-[#151D2A] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden pointer-events-auto border border-gray-100 dark:border-[#1F2937]"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary dark:text-brand-accent rounded-2xl flex items-center justify-center">
                                            <Info className="w-6 h-6" />
                                        </div>
                                        <button 
                                            onClick={closeModal}
                                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-50 dark:bg-[#0F1623] hover:bg-gray-100 dark:hover:bg-[#1e2a3c] rounded-xl transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{modalState.title}</h3>
                                    
                                    {renderCustomContent()}
                                    
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={closeModal}
                                            className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-[#0F1623] hover:bg-gray-100 dark:hover:bg-[#1e2a3c] text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition-colors border border-gray-200 dark:border-[#1F2937] text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={closeModal}
                                            className="flex-1 px-4 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl font-semibold transition-colors shadow-sm text-sm"
                                        >
                                            {modalState.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </ActionModalContext.Provider>
    );
}

"use client";

import { useState } from "react";
import { CreditCard, DollarSign, TrendingUp, TrendingDown, Download, Filter, FileText, CheckCircle2, Clock, AlertCircle, MoreVertical, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";
import { useActionModal } from "@/components/providers/ActionModalProvider";
export default function AdminBillingPage() {
    const { openModal } = useActionModal();
    // Mock data
    const transactions = [
        { id: "TXN-8923", client: "Sarah Connor", amount: "$1,200.00", date: "Today, 10:30 AM", status: "Completed", description: "Annual Premium" },
        { id: "TXN-8924", client: "Michael Chen", amount: "$99.00", date: "Today, 09:15 AM", status: "Pending", description: "Monthly Basic" },
        { id: "TXN-8925", client: "David Kim", amount: "$550.00", date: "Yesterday", status: "Completed", description: "6-Month FITZONE" },
        { id: "TXN-8926", client: "Emma Watson", amount: "$150.00", date: "Yesterday", status: "Failed", description: "Personal Training x2" },
        { id: "TXN-8927", client: "Natasha Romanoff", amount: "$99.00", date: "Oct 24, 2026", status: "Completed", description: "Monthly Basic" },
        { id: "TXN-8928", client: "Tony Stark", amount: "$2,400.00", date: "Oct 24, 2026", status: "Completed", description: "VIP Lifetime (Installment 1)" },
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Completed': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case 'Pending': return <Clock className="w-4 h-4 text-amber-500" />;
            case 'Failed': return <AlertCircle className="w-4 h-4 text-red-500" />;
            default: return null;
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Completed': return 'text-green-600 dark:text-green-400';
            case 'Pending': return 'text-amber-600 dark:text-amber-400';
            case 'Failed': return 'text-red-600 dark:text-red-400';
            default: return 'text-gray-500';
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Billing & Revenue</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage transactions, invoices, and financial reports.</p>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                    <button onClick={() => openModal('Export CSV', 'Exporting transaction data to CSV format.', 'Export')} className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-card rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-dark-border shadow-sm whitespace-nowrap hover:bg-gray-50 dark:hover:bg-dark-border transition-all">
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button onClick={() => openModal('Create Invoice', 'Form to manually create a new invoice will be added.', 'Create')} className="flex items-center gap-2 px-4 py-2.5 bg-brand-primary rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary whitespace-nowrap transition-all">
                        <FileText className="w-4 h-4" />
                        Create Invoice
                    </button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Revenue */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group border border-gray-800">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/30 transition-colors duration-500"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                            <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-400 bg-white/10 px-2 py-1 rounded-lg backdrop-blur-md">
                            <TrendingUp className="w-4 h-4" />
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-400 relative z-10 mb-1">Total Revenue (This Month)</p>
                    <h3 className="text-4xl font-bold tracking-tight relative z-10">$124,500.00</h3>
                </div>

                {/* Outstanding Payments */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center border border-amber-100 dark:border-amber-900/30">
                            <AlertCircle className="w-6 h-6 text-amber-500" />
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Outstanding Payments</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$4,250.00</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="font-semibold text-gray-900 dark:text-white">12</span> invoices pending
                    </div>
                </div>

                {/* Failed Transactions */}
                <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center border border-red-100 dark:border-red-900/30">
                            <CreditCard className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg">
                            <TrendingDown className="w-4 h-4" />
                            <span>-2.1%</span>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Failed Collects (MTD)</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$850.00</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <button onClick={() => openModal('Retry All Failed Payments', 'Attempting to re-process all failed transactions.', 'Retry All')} className="text-brand-primary dark:text-brand-accent font-semibold hover:underline">Retry All Failed</button>
                    </div>
                </div>
            </div>

            {/* Recent Transactions List */}
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h2>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors">
                            <Filter className="w-4 h-4" />
                            Filter Options
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50/50 dark:bg-dark-bg/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-dark-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Transaction Details</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Date</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Amount</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Status</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-[#1F2937]">
                            {transactions.map((txn, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-[#1a2332] transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 dark:text-white">{txn.client}</span>
                                            <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{txn.description} • {txn.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                        {txn.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-gray-900 dark:text-white">{txn.amount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(txn.status)}
                                            <span className={`font-medium ${getStatusStyle(txn.status)}`}>
                                                {txn.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {txn.status === 'Failed' ? (
                                            <button onClick={() => openModal('Retry Payment', `Retrying transaction ${txn.id} for ${txn.client}.`, 'Retry')} className="text-brand-primary dark:text-brand-accent text-sm font-semibold hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                                                Retry
                                            </button>
                                        ) : (
                                            <button onClick={() => openModal('Download Receipt', `Downloading receipt for transaction ${txn.id}.`, 'Download')} className="text-brand-primary dark:text-brand-accent text-sm font-semibold hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                                                Download
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="p-4 border-t border-gray-100 dark:border-[#1F2937] text-center">
                    <button onClick={() => openModal('Load More Transactions', 'Loading additional transaction history.', 'Load')} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Load More Transactions
                    </button>
                </div>
            </div>
        </div>
    );
}

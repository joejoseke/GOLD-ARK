import React, { useState, useMemo } from 'react';
import type { Ticket } from '../types';
import { PowerIcon, PrinterIcon, QrCodeIcon, MagnifyingGlassIcon } from './common/icons';
import { printTicket } from '../utils/printTicket';
import { printEtimmsReceipt } from '../utils/printEtimmsReceipt';

interface CashierDashboardViewProps {
    paidTickets: Ticket[];
    onLogout: () => void;
    onStartNewOrder: () => void;
    onViewTables: () => void;
}

const TransactionCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => (
    <div className="bg-surface-card dark:bg-surface-dark-card rounded-xl shadow p-4 flex flex-col space-y-4 transition-shadow hover:shadow-lg">
        <div className="flex justify-between items-baseline border-b border-gray-200 dark:border-gray-700 pb-2">
            <div>
                <span className="font-bold text-lg text-text-main dark:text-text-dark-main">Ticket #{ticket.id.slice(-6)}</span>
                <p className="text-sm text-text-secondary dark:text-text-dark-secondary capitalize">{ticket.paymentMethod}</p>
            </div>
            <span className="text-xs text-text-secondary dark:text-text-dark-secondary flex-shrink-0 ml-2 text-right">{new Date(ticket.paidAt!).toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center my-2">
            <span className="text-text-secondary dark:text-text-dark-secondary">Total Paid</span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">Ksh {ticket.total.toFixed(2)}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button 
                onClick={() => printTicket(ticket, true)} 
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 dark:bg-gray-600 text-text-main dark:text-text-dark-main text-sm font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                title="Print Standard Receipt"
            >
                <PrinterIcon className="h-5 w-5" />
                <span>Print Receipt</span>
            </button>
            <button 
                onClick={() => printEtimmsReceipt(ticket)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-secondary transition-colors"
                title="Print ETIMMS Receipt"
            >
                <QrCodeIcon className="h-5 w-5" />
                <span>Print ETIMMS</span>
            </button>
        </div>
    </div>
);


const CashierDashboardView: React.FC<CashierDashboardViewProps> = ({ paidTickets, onLogout, onStartNewOrder, onViewTables }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTickets = useMemo(() => {
        if (!searchQuery.trim()) {
            return paidTickets;
        }
        return paidTickets.filter(ticket => 
            ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, paidTickets]);

    return (
        <div className="h-full w-full bg-surface-main dark:bg-surface-dark text-text-main dark:text-text-dark-main flex flex-col">
            <header className="flex-shrink-0 bg-surface-card/80 dark:bg-surface-dark-card/80 backdrop-blur-sm p-4 flex items-center justify-between sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-bold">Cashier Dashboard</h1>
                <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-white">
                    <PowerIcon className="h-5 w-5" />
                    <span className="font-semibold hidden sm:inline">Logout</span>
                </button>
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                
                <div className="bg-surface-card dark:bg-surface-dark-card rounded-xl p-4 shadow grid grid-cols-1 md:grid-cols-2 gap-4">
                     <button 
                        onClick={onViewTables}
                        className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg text-xl hover:bg-brand-secondary transition-colors"
                    >
                        Manage Tables
                    </button>
                    <button 
                        onClick={onStartNewOrder}
                        className="w-full bg-green-600 text-white font-bold py-4 rounded-lg text-xl hover:bg-green-700 transition-colors"
                    >
                        Start Counter Order
                    </button>
                </div>
                
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                        <h2 className="text-2xl font-bold text-text-main dark:text-text-dark-main">Recent Transactions</h2>
                        <div className="relative w-full md:w-auto md:max-w-xs">
                           <input
                                type="text"
                                placeholder="Search by Ticket ID..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-surface-card dark:bg-surface-dark-card focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            />
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {filteredTickets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {filteredTickets.map(ticket => (
                                <TransactionCard key={ticket.id} ticket={ticket} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-surface-card dark:bg-surface-dark-card rounded-xl shadow">
                            <p className="text-text-secondary dark:text-text-dark-secondary">
                                {searchQuery ? 'No transactions found.' : 'No paid transactions yet.'}
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CashierDashboardView;
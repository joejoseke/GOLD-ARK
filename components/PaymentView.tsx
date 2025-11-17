import React, { useState } from 'react';
import type { Ticket } from '../types';
import { ArrowLeftIcon, CreditCardIcon, BanknotesIcon, DevicePhoneMobileIcon, PayPalIcon } from './common/icons';

interface PaymentViewProps {
  ticket: Ticket;
  onProcessPayment: (paymentMethod: 'cash' | 'card' | 'mpesa' | 'paypal') => void;
  onBack: () => void;
  isProcessing: boolean;
}

const PaymentView: React.FC<PaymentViewProps> = ({ ticket, onProcessPayment, onBack, isProcessing }) => {
  const [method, setMethod] = useState<'cash' | 'card' | 'mpesa' | 'paypal' | null>(null);

  const handlePayment = (paymentMethod: 'cash' | 'card' | 'mpesa' | 'paypal') => {
    setMethod(paymentMethod);
    onProcessPayment(paymentMethod);
  };
  
  const Spinner = () => (
    <>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </>
  );

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-surface-card dark:bg-surface-dark-card rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 relative">
          <button onClick={onBack} disabled={isProcessing} className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <h2 className="text-3xl font-bold text-center">Payment</h2>
        </div>

        <div className="p-8 text-center">
          <p className="text-lg text-text-secondary dark:text-text-dark-secondary">Total Amount Due</p>
          <p className="text-6xl font-bold my-4 text-brand-primary dark:text-brand-light">Ksh {ticket.total.toFixed(2)}</p>
        </div>

        <div className="px-8 pb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Choose Payment & Submit to ETIMS</h3>
            <div className="grid grid-cols-2 gap-4">
                <button 
                    onClick={() => handlePayment('cash')}
                    disabled={isProcessing}
                    className="p-4 rounded-lg bg-green-600 text-white font-bold text-xl hover:bg-green-700 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 flex flex-col justify-center items-center gap-2 aspect-square"
                >
                    {isProcessing && method === 'cash' ? <Spinner /> : (
                        <>
                            <BanknotesIcon className="h-8 w-8"/>
                            <span>Cash</span>
                        </>
                    )}
                </button>
                <button
                    onClick={() => handlePayment('card')}
                    disabled={isProcessing}
                    className="p-4 rounded-lg bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 flex flex-col justify-center items-center gap-2 aspect-square"
                >
                     {isProcessing && method === 'card' ? <Spinner /> : (
                        <>
                            <CreditCardIcon className="h-8 w-8"/>
                            <span>Card</span>
                        </>
                    )}
                </button>
                 <button
                    onClick={() => handlePayment('mpesa')}
                    disabled={isProcessing}
                    className="p-4 rounded-lg bg-green-800 text-white font-bold text-xl hover:bg-green-900 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 flex flex-col justify-center items-center gap-2 aspect-square"
                >
                     {isProcessing && method === 'mpesa' ? <Spinner /> : (
                        <>
                            <DevicePhoneMobileIcon className="h-8 w-8"/>
                            <span>M-Pesa</span>
                        </>
                    )}
                </button>
                <button
                    onClick={() => handlePayment('paypal')}
                    disabled={isProcessing}
                    className="p-4 rounded-lg bg-blue-800 text-white font-bold text-xl hover:bg-blue-900 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 flex flex-col justify-center items-center gap-2 aspect-square"
                >
                     {isProcessing && method === 'paypal' ? <Spinner /> : (
                        <>
                            <PayPalIcon className="h-8 w-8"/>
                            <span>PayPal</span>
                        </>
                    )}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
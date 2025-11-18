import React, { useState, useCallback } from 'react';
import type { User } from '../types';
import { USERS } from '../constants';
import { EnvelopeIcon, LockClosedIcon } from './common/icons';

interface LoginViewProps {
  onLogin: (user: User) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showTestCreds, setShowTestCreds] = useState(false);

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const foundUser = USERS.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

    if (foundUser) {
      onLogin(foundUser);
    } else {
      setError('Invalid email or password.');
    }
  }, [email, password, onLogin]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-surface-main dark:bg-surface-dark text-text-main dark:text-text-dark-main p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-primary dark:text-brand-light">Gold Ark Restaurant</h1>
          <p className="text-text-secondary dark:text-text-dark-secondary">Please sign in to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className="bg-surface-card dark:bg-surface-dark-card p-8 rounded-2xl shadow-xl space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary dark:text-text-dark-secondary mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="user@neon.pos"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-surface-main dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary dark:text-text-dark-secondary mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-surface-main dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg text-lg hover:bg-brand-secondary transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <button onClick={() => setShowTestCreds(!showTestCreds)} className="font-bold mb-1 w-full text-left">
            For testing: {showTestCreds ? '▼' : '►'}
          </button>
          {showTestCreds && (
            <div className="text-left text-xs space-y-1 pt-2">
              <p><strong className="capitalize">all roles:</strong> password is 'password'</p>
              <ul>
                {USERS.map(u => <li key={u.id}><strong className="capitalize">{u.role}:</strong> {u.email}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginView;
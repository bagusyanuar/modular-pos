import React from 'react';
import { GTypography } from '@genpos/ui/typography';
import { GTextfield } from '@genpos/ui/textfield';
import { GPasswordfield } from '@genpos/ui/passwordfield';
import { GCheckbox } from '@genpos/ui/checkbox';
import { GButton } from '@genpos/ui/button';
import { LuArrowRight } from 'react-icons/lu';
import { useLogin } from '../../hooks';

const FormLogin = () => {
  const {
    activeTab,
    setActiveTab,
    isLoading,
    identifier,
    setIdentifier,
    handleLogin,
    tabs,
  } = useLogin();

  return (
    <div className="flex-1 bg-white p-10 md:p-16 flex flex-col justify-center">
      <div className="mb-10">
        <GTypography variant="h3" className="mb-1 text-slate-800">
          POS System Access
        </GTypography>
        <GTypography variant="p" color="muted" align="left">
          Select your role and enter credentials to open the register.
        </GTypography>
      </div>

      {/* Role Tabs */}
      <div className="flex bg-slate-50 p-1.5 rounded-xl mb-10 border border-slate-100 shadow-inner">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            disabled={isLoading}
            className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 text-center ${
              activeTab === tab
                ? 'bg-white text-orange-500 shadow-sm ring-1 ring-slate-200/50'
                : 'text-slate-400 hover:text-slate-600'
            } ${isLoading && 'opacity-50 cursor-not-allowed'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Input Fields */}
      <div className="flex flex-col gap-6 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2 px-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-400"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <GTypography
              variant="small"
              className="text-slate-700 font-semibold text-xs tracking-wide uppercase"
            >
              Staff ID / Email
            </GTypography>
          </div>
          <GTextfield
            placeholder="e.g., CSH-001 or john@store.com"
            className="w-full bg-slate-50/50 border-slate-200 focus-within:border-orange-500"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <GTypography
                variant="small"
                className="text-slate-700 font-semibold text-xs tracking-wide uppercase"
              >
                Authorize PIN / Password
              </GTypography>
            </div>
            <a
              href="#"
              className={`text-xs font-bold text-orange-500 hover:text-orange-600 hover:underline ${
                isLoading && 'pointer-events-none opacity-50'
              }`}
            >
              Recover Access
            </a>
          </div>
          <GPasswordfield
            placeholder="••••••••"
            className="w-full bg-slate-50/50 border-slate-200 focus-within:border-orange-500"
            disabled={isLoading}
          />
        </div>

        <div className="mt-1 px-1">
          <GCheckbox
            label="Keep this terminal signed in"
            disabled={isLoading}
          />
        </div>

        <GButton
          className="w-full mt-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-lg py-3 shadow-md shadow-orange-500/20 transition-all font-semibold text-base"
          suffixIcon={LuArrowRight}
          onClick={handleLogin}
          loading={isLoading}
        >
          Sign in to Dashboard
        </GButton>
      </div>

      {/* Right Panel Footer */}
      <div className="mt-auto pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse"></div>
          <GTypography variant="small" className="text-slate-400 font-medium">
            Local Synced
          </GTypography>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
          >
            SUPPORT
          </a>
          <a
            href="#"
            className="text-xs font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
          >
            SYS LOG
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

import React from 'react';
import { useLogin } from '../hooks/useLogin';
import logoImg from '../../../../assets/logo.png';
import { GButton } from '@genpos/ui/button';
import { GTextfield } from '@genpos/ui/textfield';
import { GPasswordfield } from '@genpos/ui/passwordfield';
import { GCheckbox } from '@genpos/ui/checkbox';
import { GLabel } from '@genpos/ui/label';
import { LuMail, LuLock, LuArrowRight } from '@genpos/ui/icons';

const FormLogin = () => {
  const {
    identifier,
    setIdentifier,
    password,
    setPassword,
    isLoading,
    handleLogin,
  } = useLogin();

  return (
    <form
      onSubmit={handleLogin}
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white p-6"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1.5">
          <img src={logoImg} alt="Logo" className="h-6 w-6" />
          <h1 className="text-xl font-semibold text-neutral-700">Genossys</h1>
        </div>
        <div className="rounded-md border border-neutral-200 px-2 py-1 shadow-sm">
          <h1 className="text-xs font-semibold text-neutral-700">
            Point of Sales
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="mb-5 flex w-full flex-col items-center justify-center gap-1">
          <h1 className="text-lg leading-none font-semibold text-neutral-700">
            Welcome Back
          </h1>
          <p className="text-xs leading-none font-normal text-neutral-500">
            Please enter your details to sign in
          </p>
        </div>
        <div className="w-full px-8">
          <div className="mb-1.5 w-full">
            <GLabel>Email</GLabel>
            <GTextfield
              prefixIcon={LuMail}
              placeholder="Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-2 w-full">
            <GLabel>Password</GLabel>
            <GPasswordfield
              prefixIcon={LuLock}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-5 flex w-full items-center justify-between">
            <GCheckbox label="Keep Me Sign In" size="sm" disabled={isLoading} />
            <a
              href="#"
              className="text-xs font-semibold text-orange-500 hover:text-orange-600 hover:underline"
            >
              Recover Access
            </a>
          </div>
          <GButton
            className="w-full"
            suffixIcon={LuArrowRight}
            loading={isLoading}
            type="submit"
          >
            Sign in to Dashboard
          </GButton>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-between border-t border-neutral-100 pt-4">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Online
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-xs font-semibold text-neutral-400 transition-colors hover:text-orange-500">
            Privacy
          </button>
          <button className="cursor-pointer text-xs font-semibold text-neutral-400 transition-colors hover:text-orange-500">
            Help Desk
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;

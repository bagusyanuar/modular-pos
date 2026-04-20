import React from 'react';
import logoImg from '../../../../assets/logo.png';

const FormLogin = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login clicked, setting dummy cookies...');

    // Simulasi set cookie dummy (berlaku 1 hari)
    const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
    document.cookie = `accessToken=dummy_access_token; expires=${expires}; path=/`;
    document.cookie = `refreshToken=dummy_refresh_token; expires=${expires}; path=/`;

    // Redirect ke root domain (Admin App)
    window.location.replace('/');
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white p-6">
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
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <h1 className="text-lg leading-none font-semibold text-neutral-700">
            Welcome Back
          </h1>
          <p className="text-xs leading-none font-normal text-neutral-500">
            Please enter your details to sign in
          </p>
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
    </div>
  );
};

export default FormLogin;

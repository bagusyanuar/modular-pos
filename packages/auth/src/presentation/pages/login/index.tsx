import React from 'react';
import { Illustration, FormLogin } from '../../components';

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* Wrapper */}
      <div className="w-full max-w-5xl bg-white rounded-4xl shadow-2xl flex overflow-hidden min-h-[600px]">
        <Illustration />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;

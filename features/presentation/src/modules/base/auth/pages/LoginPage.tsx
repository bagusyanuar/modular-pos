import React from 'react';
import Illustration from '../components/Illustration';
import FormLogin from '../components/FormLogin';

const LoginPage = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-gray-50 p-4">
      {/* Background Ornaments for Page */}
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-orange-100/50 blur-[120px]" />
      <div className="absolute right-[-5%] bottom-[-5%] h-[30%] w-[30%] rounded-full bg-orange-100/30 blur-[100px]" />

      <div className="relative z-10 grid h-130 w-3xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
        <Illustration />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;

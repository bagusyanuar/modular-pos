import React from 'react';
import Illustration from '../components/Illustration';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-stone-100">
      <div className="grid h-130 w-3xl grid-cols-2 overflow-hidden rounded-xl shadow-2xl">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

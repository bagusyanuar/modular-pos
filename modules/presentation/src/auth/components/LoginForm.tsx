import React from 'react';
import { LuStore, LuMail, LuLock } from '@genpos/ui/icons';
import { GTypography } from '@genpos/ui/typography';
import { GTextfield } from '@genpos/ui/textfield';
import { GPasswordfield } from '@genpos/ui/passwordfield';
import { GCheckbox } from '@genpos/ui/checkbox';
import { GButton } from '@genpos/ui/button';
import { GLabel } from '@genpos/ui/label';
import { useLogin } from '../hooks/useLogin';

const LoginForm: React.FC = () => {
  const { handleLogin, isLoading } = useLogin();
  return (
    <div className="flex h-full w-full flex-col justify-center bg-white px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
            <LuStore className="h-5 w-5 text-white" />
          </div>
          <span className="font-lato text-lg font-bold tracking-tight text-gray-700">
            Genossys
          </span>
        </div>
        <div className="rounded-lg border border-gray-300 px-3.5 py-1.5 shadow-xs">
          <p className="text-xs font-bold text-neutral-500">ERP</p>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col justify-center">
        <div className="mb-5 w-full">
          <GTypography
            as="h1"
            variant="large"
            weight="bold"
            className="text-gray-700"
          >
            Welcome Back
          </GTypography>
          <GTypography as="p" className="text-xs" color="muted">
            Please enter your details to sign in
          </GTypography>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <div className="w-full">
            <GLabel htmlFor="username">Email</GLabel>
            <GTextfield
              prefixIcon={LuMail}
              placeholder="Enter your username"
              id="username"
            />
          </div>
          <div className="w-full">
            <GLabel htmlFor="password">Password</GLabel>
            <GPasswordfield prefixIcon={LuLock} placeholder="" id="password" />
          </div>
          <div className="my-2 flex w-full items-center justify-between">
            <div className="flex items-center gap-1.5">
              <GCheckbox size="sm" label="Remember me" />
            </div>
            <GTypography
              as="p"
              className="text-xs"
              color="primary"
              weight="semibold"
            >
              Forgot password?
            </GTypography>
          </div>
          <GButton
            variant="primary"
            size="default"
            onClick={() => handleLogin()}
            loading={isLoading}
          >
            Sign in
          </GButton>
          <div className="mt-1 flex items-center justify-center gap-1.5">
            <GTypography as="p" className="text-xs" color="muted">
              Don't have an account?{' '}
            </GTypography>
            <GTypography as="p" className="text-xs" color="primary">
              Request Access
            </GTypography>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <GTypography as="p" className="text-xs" color="muted">
          @2025 Genossys
        </GTypography>
        <div className="flex items-center gap-1.5">
          <GTypography as="p" className="text-xs" color="muted">
            Terms of Use
          </GTypography>
          <GTypography as="p" className="text-xs" color="muted">
            |
          </GTypography>
          <GTypography as="p" className="text-xs" color="muted">
            Privacy Policy
          </GTypography>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

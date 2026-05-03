import React from 'react';
import { LuStore, LuMail, LuLock } from '@genossys-erp/ui/icons';
import { Typography } from '@genossys-erp/ui/components/typography';
import { Textfield } from '@genossys-erp/ui/components/textfield';
import { Passwordfield } from '@genossys-erp/ui/components/passwordfield';
import { Checkbox } from '@genossys-erp/ui/components/checkbox';
import { Button } from '@genossys-erp/ui/components/button';
import { Label } from '@genossys-erp/ui/components/label';
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
          <Typography
            as="h1"
            variant="large"
            weight="bold"
            className="text-gray-700"
          >
            Welcome Back
          </Typography>
          <Typography as="p" className="text-xs" color="muted">
            Please enter your details to sign in
          </Typography>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <div className="w-full">
            <Label htmlFor="username">Email</Label>
            <Textfield
              type="email"
              prefixIcon={LuMail}
              placeholder="Enter your username"
              id="username"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="password">Password</Label>
            <Passwordfield prefixIcon={LuLock} placeholder="" id="password" />
          </div>
          <div className="my-2 flex w-full items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Checkbox size="sm" label="Remember me" />
            </div>
            <Typography
              as="p"
              className="text-xs"
              color="primary"
              weight="semibold"
            >
              Forgot password?
            </Typography>
          </div>
          <Button
            variant="primary"
            size="default"
            onClick={() => handleLogin()}
            loading={isLoading}
          >
            Sign in
          </Button>
          <div className="mt-1 flex items-center justify-center gap-1.5">
            <Typography as="p" className="text-xs" color="muted">
              Don't have an account?{' '}
            </Typography>
            <Typography as="p" className="text-xs" color="primary">
              Request Access
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <Typography as="p" className="text-xs" color="muted">
          @2025 Genossys
        </Typography>
        <div className="flex items-center gap-1.5">
          <Typography as="p" className="text-xs" color="muted">
            Terms of Use
          </Typography>
          <Typography as="p" className="text-xs" color="muted">
            |
          </Typography>
          <Typography as="p" className="text-xs" color="muted">
            Privacy Policy
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

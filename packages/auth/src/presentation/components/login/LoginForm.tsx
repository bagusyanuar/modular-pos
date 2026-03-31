import { GTextfield } from '@genpos/ui/textfield';
import { GPasswordfield } from '@genpos/ui/passwordfield';
import { GButton } from '@genpos/ui/button';
import { LuArrowRight } from 'react-icons/lu';

const LoginForm = () => {
  return (
    <div className="w-full h-full bg-white p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm text-neutral-500">
          Enter your credentials to login
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <GTextfield placeholder="Enter your username" />
        <GPasswordfield placeholder="Enter your password" />
        <GButton text="Sign In" suffixIcon={LuArrowRight} />
      </div>
    </div>
  );
};

export default LoginForm;

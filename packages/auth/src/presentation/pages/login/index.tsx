import { Illustration, LoginForm } from '../../components';
const LoginPage = () => {
  return (
    <div className="w-full h-dvh bg-orange-100 flex items-center justify-center">
      <div className="w-3xl bg-white rounded-xl h-120 shadow-lg grid grid-cols-2 overflow-hidden">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

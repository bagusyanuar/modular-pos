import { FormPanel, IllustrationPanel } from '../../components';

const LoginPage = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-orange-100">
      <div className="w-3xl bg-white rounded-xl h-120 shadow-lg grid grid-cols-2 overflow-hidden">
        <IllustrationPanel />
        <FormPanel />
      </div>
    </div>
  );
};

export default LoginPage;

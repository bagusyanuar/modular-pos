import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    navigate('/dashboard');
  };
  return {
    isLoading,
    handleLogin,
  };
};

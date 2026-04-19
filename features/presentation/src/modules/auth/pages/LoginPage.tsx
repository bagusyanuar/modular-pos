import React from 'react';

const LoginPage = () => {
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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600">GenPOS</h1>
          <p className="mt-2 text-gray-600">Silakan login untuk melanjutkan</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                defaultValue="admin@genpos.test"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                defaultValue="password123"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
                placeholder="Masukkan password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-orange-500 transition-colors hover:bg-orange-700 active:bg-orange-800"
          >
            Masuk Sekarang
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2024 GenPOS Monorepo System</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

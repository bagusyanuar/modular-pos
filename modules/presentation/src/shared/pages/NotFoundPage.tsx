import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GButton } from '@genpos/ui/button';
import { GTypography } from '@genpos/ui/typography';
import { LuArrowLeft, LuHouse } from 'react-icons/lu';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 py-12 text-center md:px-12">
      <div className="flex max-w-lg flex-col items-center">
        {/* Illustration - Optimized for 768px height to avoid scrolling */}
        <div className="mb-6 h-48 w-full overflow-hidden rounded-2xl bg-white shadow-sm sm:h-64">
          <img
            src="/404-illustration.png"
            alt="404 Illustration"
            className="h-full w-full object-contain p-4"
          />
        </div>

        {/* 404 Header */}
        <GTypography
          as="h1"
          variant="large"
          weight="bold"
          className="mb-1 text-5xl leading-none text-orange-500 sm:text-6xl"
        >
          404
        </GTypography>

        {/* Title */}
        <GTypography
          as="h2"
          variant="large"
          weight="semibold"
          className="mb-3 text-xl text-gray-800 sm:text-2xl"
        >
          Halaman Tidak Ditemukan
        </GTypography>

        {/* Description */}
        <GTypography
          as="p"
          color="muted"
          className="mb-8 max-w-sm text-sm sm:text-base"
        >
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Silakan
          kembali ke halaman sebelumnya atau ke beranda.
        </GTypography>

        {/* Action Buttons */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <GButton
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate(-1)}
          >
            <LuArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </GButton>
          <GButton
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => navigate('/')}
          >
            <LuHouse className="mr-2 h-4 w-4" />
            Ke Beranda
          </GButton>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-12 opacity-50">
        <GTypography
          as="p"
          className="text-xs font-medium tracking-widest text-gray-400 uppercase"
        >
          Genossys ERP System
        </GTypography>
      </div>
    </div>
  );
};

export default NotFoundPage;

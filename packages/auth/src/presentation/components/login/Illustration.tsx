import React from 'react';
import { GTypography } from '@genpos/ui/typography';
import { LuStore } from 'react-icons/lu';

const Illustration = () => {
  return (
    <div className="hidden md:flex flex-col flex-1 bg-orange-500 p-12 text-white relative">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8 z-10">
        <LuStore size={24} strokeWidth={3} className="text-white" />
        <GTypography
          variant="h4"
          color="white"
          className="font-bold tracking-widest m-0"
        >
          GENPOS
        </GTypography>
      </div>

      <div className="z-10 mt-4">
        <GTypography
          variant="h1"
          color="white"
          className="leading-[1.1] mb-2 tracking-tight"
        >
          Seamless Sales.
        </GTypography>
        <GTypography
          variant="h1"
          color="white"
          className="leading-[1.1] font-light"
        >
          Everywhere.
        </GTypography>
        <div className="w-16 h-1 bg-orange-300 mt-6 rounded-full"></div>
      </div>

      {/* Abstract Graphic Element (Sales/Retail vibe) */}
      <div className="relative flex-1 flex items-center justify-center mt-12 z-10 w-full">
        <div className="w-full max-w-[280px] bg-orange-400/20 backdrop-blur-md border border-orange-300/20 rounded-2xl p-6 relative z-10">
          {/* Online indicator */}
          <div className="absolute -top-4 -right-4 bg-orange-300/40 backdrop-blur-lg text-white text-[10px] tracking-wider font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-orange-200"></div>
            TERMINAL ONLINE
          </div>

          <div className="w-8 h-8 rounded-full border-2 border-orange-300/40 border-t-orange-200 animate-spin mb-4"></div>

          {/* Fake Sales Chart */}
          <div className="flex items-end gap-2.5 h-32 mt-4 opacity-80">
            <div className="flex-1 bg-orange-300/40 rounded-t-sm h-12 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 bg-orange-300/40 rounded-t-sm h-20 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 bg-orange-300/40 rounded-t-sm h-16 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 bg-orange-300/80 rounded-t-sm h-28 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 bg-orange-300/40 rounded-t-sm h-14 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 bg-orange-300/40 rounded-t-sm h-24 flex justify-center items-end pb-1">
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
            </div>
          </div>

          {/* Fake Transaction Cards */}
          <div className="flex gap-4 mt-6">
            <div className="flex-1 h-10 bg-orange-300/20 rounded-lg p-2 flex flex-col justify-center border border-orange-300/10">
              <div className="w-1/2 h-1.5 bg-orange-200/40 rounded-full mb-2"></div>
              <div className="w-4/5 h-2 bg-orange-100/80 rounded-full"></div>
            </div>
            <div className="flex-1 h-10 bg-orange-300/20 rounded-lg p-2 flex flex-col justify-center border border-orange-300/10">
              <div className="w-1/2 h-1.5 bg-orange-200/40 rounded-full mb-2"></div>
              <div className="w-4/5 h-2 bg-orange-100/80 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Background Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border-[0.5px] border-orange-300/20 rounded-full z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[0.5px] border-orange-300/10 rounded-full z-0"></div>
      </div>

      {/* Footer Text */}
      <div className="mt-auto pt-6 z-10 w-full">
        <GTypography
          variant="small"
          color="white"
          className="font-semibold block mb-1"
        >
          Trusted by 10,000+ retail stores worldwide.
        </GTypography>
        <div className="flex gap-4 text-orange-100/80 text-xs font-medium">
          <span>• PCI-DSS Compliant</span>
          <span>• Realtime Sync</span>
        </div>
      </div>
    </div>
  );
};

export default Illustration;

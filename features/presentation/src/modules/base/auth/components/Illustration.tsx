import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../../../assets/login-illustration.png';

const Illustration = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden bg-orange-500 p-8 text-white">
      {/* --- BACKGROUND ORNAMENTS --- */}
      {/* Main Mesh Gradient Layer */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-400 via-orange-500 to-orange-700" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Animated Ornaments */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-orange-800/30 blur-3xl"
      />

      {/* Decorative Lines/Squares */}
      <div className="absolute top-1/4 -left-4 h-32 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-10 right-1/4 h-px w-32 bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="absolute right-10 bottom-20 flex gap-1 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-white" />
        ))}
      </div>

      {/* Glassmorphism Corner */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rotate-45 border border-white/10 bg-white/5 backdrop-blur-sm" />

      {/* --- CONTENT LAYER --- */}
      {/* Top Content: Brand & Tagline */}
      <div className="z-10 space-y-3">
        <div className="space-y-2">
          <h2 className="text-lg leading-tight font-bold">
            Akselerasi Bisnis <br /> Tanpa Batas.
          </h2>
          <p className="max-w-xs text-xs leading-relaxed font-normal text-balance text-orange-50/90">
            Kelola operasional, stok otomatis, dan laporan penjualan real-time
            dalam satu platform terpadu.
          </p>
        </div>
      </div>

      {/* Middle Content: Illustration Area */}
      <div className="relative flex w-full flex-1 items-center justify-center py-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute h-64 w-64 rounded-full bg-white/10 blur-[100px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src={heroImg}
          alt="GenPOS Illustration"
          className="relative z-10 w-full max-w-[280px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* Footer Content: Improved Copywriting */}
      <div className="z-10 w-full border-t border-white/10 pt-6">
        <p className="text-[10px] font-bold tracking-[0.2em] text-orange-100/60 uppercase">
          The Next Generation of Point of Sale System
        </p>
      </div>
    </div>
  );
};

export default Illustration;

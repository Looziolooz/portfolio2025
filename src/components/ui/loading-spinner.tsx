// components/ui/loading-spinner.tsx - CREA QUESTO FILE
'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <motion.div
        className="w-12 h-12 border-4 border-[#D97D55] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
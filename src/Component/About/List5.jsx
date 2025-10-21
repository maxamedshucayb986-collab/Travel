import React from 'react';
import { motion } from 'framer-motion';
import { FaChild } from 'react-icons/fa';

export default function AgeRange() {
  return (
    <motion.section
      className="max-w-md mx-auto bg-white dark:bg-white rounded-2xl shadow-lg p-8 text-center mt-10 cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl font-bold">👶 Da’da Ardayda</h2>
      </div>
      <p className="text-black dark:text-black mb-2 hover:text-white">Da’da ugu yar ee dugsigu qabilo: <span className="font-semibold">4 jir</span></p>
      <p className="text-black dark:text-black mb-2 hover:text-white">Da’da ugu weyn ee dugsigu qabilo: <span className="font-semibold">15 jir</span></p>
    </motion.section>
  );
}

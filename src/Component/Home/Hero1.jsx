import React from "react";
import { motion } from "framer-motion";

function Hordhac() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-500 min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.3)" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          📘 Dugsiga Luqmaan Alxakiim
        </motion.h1>

        <motion.h2
          className="text-xl font-semibold text-blue-700 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          ⏯ Hordhac
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Dugsiga <span className="font-bold text-blue-800">Luqmaan Alxakiim </span> 
          waa xarun waxbarasho oo ku taalla magaalada Muqdisho, taas oo isku daraysa 
          waxbarashada casriga ah iyo dhaqanka wanaagsan. Dugsigu waxa uu si joogto 
          ah uga shaqeeyaa kobcinta aqoonta, akhlaaqda, iyo mustaqbalka ardayda Soomaaliyeed.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Hordhac;

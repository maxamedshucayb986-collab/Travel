// Footer.jsx // Footer qurux badan React + TailwindCSS + Framer Motion // Waxaa ku jira macluumaadka xiriirka iyo animations fudud.

import React from 'react'; import { motion } from 'framer-motion'; import { FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() { return ( <motion.footer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-blue-900 text-slate-200 mt-10 py-8 px-6" > <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Xogta Xiriirka */} <div> <h3 className="text-lg font-semibold mb-3">📞 Contact Information</h3> <ul className="space-y-2 text-sm"> <li className="flex items-center gap-2">📞 0618886940</li> <li className="flex items-center gap-2">📞 0618886941</li> <li className="flex items-center gap-2">📞 0618886943</li> <li className="flex items-center gap-2">📞 0618886944</li> <li className="flex items-center gap-2">📞 0618886947</li> </ul> </div>

{/* Facebook Link */}
    <div>
      <h3 className="text-lg font-semibold mb-3">🌐 Social Media</h3>
      <a
        href="https://www.facebook.com/DugsigaLuqmaanAlxakiim"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-500 transition"
      >
        <FaFacebook className="text-blue-500" /> Dugsiga Luqmaan Alxakiim
      </a>
    </div>

    {/* Goobta */}
    <div>
      <h3 className="text-lg font-semibold mb-3">📍 Location</h3>
      <a
        href="https://www.google.com/maps?q=Muqdisho,+Albaraka,+Buula+Xubay,+Ceel+Qalaw,+Tawfiiq"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-2 text-sm text-white hover:text-blue-500"
      >
        <FaMapMarkerAlt className="mt-1 text-red-600" />
        Muqdisho – Xaafadaha Albaraka, Buula Xubay, Ceel Qalaw & Tawfiiq
      </a>
    </div>
  </div>

  {/* Hoos Footer */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="mt-8 border-t border-slate-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm"
  >
    <p>© {new Date().getFullYear()}Luqman Al-Hakim School. All Rights Reserved.</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mt-3 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
    >
     Go Up ↑
    </motion.button>
  </motion.div>
</motion.footer>

); }
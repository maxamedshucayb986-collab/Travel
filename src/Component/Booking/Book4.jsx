// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-900 to-blue-700 text-white mt-10 py-10 px-6 shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">📞 Contact</h3>
          <ul className="space-y-2 text-sm">
            {[ "📞 0618886940","📞 0618886941","📞 0618886943","📞 0618886944","📞 0618886947" ].map((num, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-yellow-300 transition relative group cursor-pointer">
               {num}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">🌐 Follow Us</h3>
          <a
            href="https://www.facebook.com/DugsigaLuqmaanAlxakiim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition relative group cursor-pointer"
          >
            <FaFacebook className="text-blue-500" /> Dugsiga Luqmaan Alxakiim
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="https://wa.me/0618886940"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white mt-2 hover:text-green-400 transition relative group cursor-pointer"
          >
            <FaWhatsapp className="text-green-400" /> Chat on WhatsApp
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">📍 Location</h3>
          <a
            href="https://www.google.com/maps?q=Muqdisho,+Albaraka,+Buula+Xubay,+Ceel+Qalaw,+Tawfiiq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm hover:text-yellow-300 transition relative group cursor-pointer"
          >
            <FaMapMarkerAlt className="mt-1 text-red-500" />
            Muqdisho – Xaafadaha Albaraka, Buula Xubay, Ceel Qalaw & Tawfiiq
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 border-t border-white/30 pt-5 flex flex-col sm:flex-row justify-between items-center text-sm"
      >
        <p>© {new Date().getFullYear()} Luqman Al-Hakim School. All Rights Reserved.</p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-3 sm:mt-0 px-4 py-2 bg-yellow-500 text-blue-900 rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Go Up ↑
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

function XogtaXiriirka() {
  const numbers = ["0618886940", "0618886941", "0618886943", "0618886944", "0618886947"];

  return (
    <div className="bg-gradient-to-r from-white to-white py-16 px-6 min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center">
          📞 Contact Information
        </h1>

        {/* WhatsApp & Phone Numbers */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-3">
            ☎ WhatsApp Phone
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {numbers.map((num, index) => (
              <motion.a
                key={index}
                href={`tel:${num}`}
                className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 text-gray-700 font-medium hover:bg-blue-500 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                <FaWhatsapp className="text-green-500 text-xl group-hover:text-white" />
                {num}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Facebook */}
        <motion.div
          className="mb-6 flex items-center gap-3 bg-blue-50 rounded-lg p-4 hover:bg-blue-500 hover:text-white transition"
          whileHover={{ scale: 1.03 }}
        >
          <FaFacebook className="text-blue-900 text-2xl" />
          <p className="text-gray-700 font-medium hover:text-white">
            Facebook: <a
              href="https://www.facebook.com/DugsigaLuqmaanAlxakiim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Dugsiga Luqmaan Alxakiim
            </a>
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 hover:bg-blue-500 hover:text-white transition"
          whileHover={{ scale: 1.03 }}
        >
          <FaMapMarkerAlt className="text-red-600 text-2xl" />
          <p className="text-gray-700 font-medium hover:text-white">
            Muqdisho – Xaafadaha <span className="text-blue-900">Albaraka, Buula Xubay, Ceel Qalaw & Tawfiiq</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default XogtaXiriirka;
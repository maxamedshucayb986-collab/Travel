// Section6.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Section6() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
       La xidhiidh oo hadda isdiiwaangeli
        </h2>
        <p className="text-gray-200 mb-8 leading-relaxed">
          Haddii aad rabto inaad arday ku diiwaangeliso dugsiga, fadlan nagala soo xiriir ama buuxi foomka admissions-ka. Waxaan ku siin doonaa taageero dhameystiran.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a href="tel:0618886940" className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            <FaPhone /> Call Us
          </a>
          <a href="https://wa.me/0618886940" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-lg hover:bg-green-400 transition">
            <FaWhatsapp /> WhatsApp
          </a>
          <Link to="/customer" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            <FaEnvelope /> Apply Now
          </Link>
        </div>

        <p className="text-sm text-gray-300">
          📍 Muqdisho – Xaafadaha Albaraka, Buula Xubay, Ceel Qalaw & Tawfiiq
        </p>
      </motion.div>
    </section>
  );
}

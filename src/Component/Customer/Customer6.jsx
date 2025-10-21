// AdmissionSection5.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdmissionSection5() {
  return (
    <section className="bg-blue-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
          Ready to Join Luqmaan Al Xakiim?
        </h2>
        <p className="text-gray-200 mb-8 leading-relaxed">
          Buuxi foomka admissions-ka si aad u xaqiijiso booska ardaygaaga. 
          Waxaan ku siin doonaa taageero dhameystiran oo ku saabsan diiwaangelinta.
        </p>

        <Link to="/customer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition flex items-center gap-3 mx-auto"
          >
            Apply Now <FaArrowRight />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

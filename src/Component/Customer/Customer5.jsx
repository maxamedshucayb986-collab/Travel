// AdmissionSection4.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaCertificate, FaLaptop, FaUsers } from "react-icons/fa";

export default function AdmissionSection4() {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-green-600 text-3xl" />,
      title: "Qiime Macquul ah",
      desc: "Waxbarasho tayo leh oo leh kharash ku habboon, iyadoo aan tayada waxbarashada la dhimayn.",
    },
    {
      icon: <FaCertificate className="text-blue-600 text-3xl" />,
      title: "Shahaado La Aamini Karo",
      desc: "Ardayda dhammeeya fasalka waxay helaan shahaadooyin aqoonsi leh oo rasmi ah.",
    },
    {
      icon: <FaLaptop className="text-purple-600 text-3xl" />,
      title: "Xirfado Casri ah",
      desc: "Waxbarashada waxaa lagu daraa barashada kombiyuutarka iyo xirfadaha casriga ah.",
    },
    {
      icon: <FaUsers className="text-orange-600 text-3xl" />,
      title: "Daryeel & Taageero",
      desc: "Macallimiinta waxay si dhow ula socdaan horumarka ardayga, anshaxa iyo tarbiyada.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
          Kharashka & Faa’iidooyinka
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

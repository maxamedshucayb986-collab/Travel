// AdmissionSection2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUserGraduate, FaIdCard } from "react-icons/fa";

export default function AdmissionSection2() {
  const requirements = [
    {
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      title: "Da’da Ardayga",
      desc: "Dugsigu wuxuu aqbalaa arday da’doodu u dhexeyso 4 ilaa 15 sano jir.",
    },
    {
      icon: <FaFileAlt className="text-green-600 text-3xl" />,
      title: "Dukumiintiyada Loo Baahan Yahay",
      desc: "Waraaqda dhalashada, sawir 2x2 ah, iyo buugga waxbarashada hore haddii uu jiro.",
    },
    {
      icon: <FaIdCard className="text-orange-600 text-3xl" />,
      title: "Warqad Aqoonsi",
      desc: "Waalidka/mas’uulka wuxuu keenayaa aqoonsi (ID card ama Passport).",
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
          Shuruudaha Gelitaanka
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {requirements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
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

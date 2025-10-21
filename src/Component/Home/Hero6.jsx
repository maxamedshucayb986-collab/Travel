// Section3.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBaby, FaBookReader, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function Section3() {
  const programs = [
    {
      icon: <FaBaby className="text-pink-500 text-4xl" />,
      title: "KG & Pre-School",
      desc: "Waxaan bixinaa waxbarasho ku habboon carruurta yaryar iyadoo lagu daro ciyaar iyo akhris aasaasi ah.",
    },
    {
      icon: <FaBookReader className="text-blue-500 text-4xl" />,
      title: "Primary",
      desc: "Ardayda waxaa lagu baraa maadooyinka aasaasiga ah sida xisaabta, sayniska, iyo luqadaha.",
    },
    {
      icon: <FaGraduationCap className="text-green-500 text-4xl" />,
      title: "Quraan & Tarbiya",
      desc: "Waxaan xooga saarnaa xifdinta Qur’aanka Kariimka iyo tarbiyad wanaagsan.",
    },
    {
      icon: <FaLaptopCode className="text-purple-500 text-4xl" />,
      title: "Technology & Skills",
      desc: "Ardayda waxaa lagu baraa xirfadaha casriga sida kombiyuutarka iyo IT-ga.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
     Barnaamijyadayada
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition"
            >
              <div className="mb-4 flex justify-center">{prog.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {prog.title}
              </h3>
              <p className="text-gray-600 text-sm">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

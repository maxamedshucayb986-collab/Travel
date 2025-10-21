// AdmissionSection3.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaUserCheck, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

export default function AdmissionSection3() {
  const steps = [
    {
      icon: <FaClipboardList className="text-blue-600 text-3xl" />,
      title: "1. Buuxinta Foomka",
      desc: "Waalidka/mas’uulka wuxuu buuxiyaa foomka codsiga gelitaanka.",
    },
    {
      icon: <FaUserCheck className="text-green-600 text-3xl" />,
      title: "2. Gudbinta Dukumiintiyada",
      desc: "Waxaa la keenaa waraaqaha dhalashada, sawirrada, iyo aqoonsiga.",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-600 text-3xl" />,
      title: "3. Qiimeynta Ardayga",
      desc: "Ardayga waxaa lagu sameynayaa wareysi ama imtixaan fudud (hadba fasalka).",
    },
    {
      icon: <FaCheckCircle className="text-orange-600 text-3xl" />,
      title: "4. Ansixinta & Diiwaangelinta",
      desc: "Marka la aqbalo, ardayga si rasmi ah ayaa loogu diiwaan geliyaa.",
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
          Habka Diiwaangelinta
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
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

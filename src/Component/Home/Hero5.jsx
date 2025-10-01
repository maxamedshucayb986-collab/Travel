// EducationList.jsx
// Qaybaha Waxbarashada ee Dugsiga Luqmaan Alxakiim
// React component oo isticmaala TailwindCSS + Framer Motion + react-icons

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaQuran, FaSchool, FaBaby } from 'react-icons/fa';

export default function EducationList() {
  const items = [
    {
      id: 1,
      icon: <FaBook className="w-6 h-6" />,
      title: 'Qaybta Hingaada',
      desc: 'Barashada qoraalka iyo akhriska afka hooyo.',
    },
    {
      id: 2,
      icon: <FaQuran className="w-6 h-6" />,
      title: "Qaybta Qur'aanka Kariimka",
      desc: 'Akhriska, xifdinta iyo tajwiidka Qur’aanka.',
    },
    {
      id: 3,
      icon: <FaSchool className="w-6 h-6" />,
      title: 'Qaybta Dugsiga Hoose & Dhexe',
      desc: 'Maadooyinka waxbarashada rasmiga ah.',
    },
    {
      id: 4,
      icon: <FaBaby className="w-6 h-6" />,
      title: 'Qaybta Xannaanada Carruurta',
      desc: 'Daryeel iyo waxbarasho carruurta da’da yar.',
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 text-blue-500">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-center mb-6"
      >
        🏫 Qaybaha Waxbarashada
      </motion.h2>

      <motion.p className="text-center text-sm text-blue-500 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Dugsiga Luqmaan Alxakiim waxa uu bixiya qaybahan hoose:
      </motion.p>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <motion.article
            key={it.id}
            variants={card}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200 cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 group-hover:text-white">
              {it.icon}
            </div>
            <div>
              <h3 className="text-md font-semibold">{it.title}</h3>
              <p className="text-sm">{it.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
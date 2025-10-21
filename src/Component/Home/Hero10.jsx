// Section9.jsx
import React from "react";
import { motion } from "framer-motion";

// Teacher Profiles – beddel sawirada iyo magacyada haddii loo baahdo
const teachers = [
  {
    name: "Aamina Yusuf",
    role: "Macallimad KG & Pre-School",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Ahmed Ali",
    role: "Macallin Primary",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Fatima Mohamed",
    role: "Macallimad Qur'an & Tarbiya",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Hassan Abdullahi",
    role: "Macallin Technology & Skills",
    img: "https://i.pravatar.cc/150?img=13",
  },
];

export default function Section9() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
  La kulan Macallimiintayada
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-2 hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full border-2 border-blue-900 mb-4 transition group-hover:border-white"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-1 group-hover:text-white transition">{teacher.name}</h3>
              <p className="text-black group-hover:text-gray-200 transition">{teacher.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

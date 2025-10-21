// Section4.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Section4() {
  const testimonials = [
    {
      name: "Ummul khayr Cabdi",
      role: "Waalid",
      text: "Dugsiga Luqmaan Al Xakiim wuxuu leeyahay macallimiin tayo leh, caruurtayduna waxay ku barteen akhlaaq iyo Qur’aan intaba.",
      img: "https://i.pinimg.com/736x/bd/70/a5/bd70a5dcfabb306bc858fdd5fe56a8ce.jpg",
    },
    {
      name: "Maxamed Xasan",
      role: "Waalid",
      text: "Waxaan jeclahay nidaamka waxbarashada casriga ah oo lagu daray diinta. Wiilkayga aad buu u horumaray.",
      img: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg",
    },
    {
      name: "Fartuun Axmed",
      role: "Hooyo",
      text: "Ardayda waxaa lagu barbaarinayaa anshax iyo aqoon. Waxaan aad ugu qanacsanahay dugsiga.",
      img: "https://i.pinimg.com/1200x/5e/65/49/5e6549dd2268fff2b9068f861e99ee04.jpg",
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
      Maxay Waalidiintu Yidhaahdaan
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-blue-600 text-2xl mb-3" />
              <p className="text-gray-700 italic mb-4">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-600"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-blue-800">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaBookOpen, FaUsers } from "react-icons/fa";

function About() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
    hover: { scale: 1.08, rotate: 1 },
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8"
        >
          ℹ Ku Saabsan Dugsiga Luqmaan Alxakiim
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed text-center mb-12"
        >
          Dugsiga <span className="text-blue-700 font-semibold">Luqmaan Al-xakiim </span> 
          waa xarun waxbarasho tayo sare leh oo ka go’an kobcinta aqoonta iyo akhlaaqda ardayda. 
          Waxay isku daraa barashada culuumta maadiga ah iyo barashada Qur’aanka Kariimka, 
          si ay u soo saarto jiil leh aqoon iyo anshax wanaag.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            {
              icon: <FaSchool className="text-3xl text-blue-600 mb-3" />,
              title: "Taariikh",
              desc: "Waxaa la aasaasay si loogu adeego bulshada, iyadoo xoogga la saarayo waxbarashada tayada leh."
            },
            {
              icon: <FaBookOpen className="text-3xl text-green-600 mb-3" />,
              title: "Hadaf",
              desc: "Inuu noqdo xarun waxbarasho hormuud ah oo soo saarta jiil aqoon iyo akhlaaq isku dara."
            },
            {
              icon: <FaUsers className="text-3xl text-purple-600 mb-3" />,
              title: "Himilada",
              desc: "Bixinta waxbarasho tayo sare leh, barashada Qur’aanka Kariimka, iyo la shaqeynta waalidiinta si loo dhiso mustaqbal ifaya."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Glow Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-100 text-blue-800 rounded-2xl shadow-lg p-6 text-center"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl font-semibold mb-2"
          >
            “Waxbarasho waa furaha guusha mustaqbalka!”
          </motion.h2>
          <p className="text-sm text-gray-600">
            Waxaan ku dadaaleynaa in arday walba uu gaaro himiladiisa aqooneed iyo anshaxeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

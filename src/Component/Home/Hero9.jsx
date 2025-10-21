// Section8.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Da'da ugu yar ee la aqbalo waa imisa?",
    answer: "Carruurta ugu yar ee dugsigu qabilo waa 4 sano.",
  },
  {
    question: "Sidee loo diiwaangelin karaa arday cusub?",
    answer: "Waxaad buuxin kartaa foomka admissions-ka online ama dugsiga si toos ah ugu soo booqo xafiiska admissions-ka.",
  },
  {
    question: "Ma jiraan khidmad dheeraad ah oo waxbarasho?",
    answer: "Waxbarashada waxaa ku jira khidmadta fasalka, buugaagta, iyo qalabka waxbarashada; khidmad dheeraad ah waa mid kooban oo la ogeysiiyo.",
  },
  {
    question: "Sidee looga qaybqaataa xafladaha iyo tartamada dugsiga?",
    answer: "Ardayda iyo waalidiintu waxaa lagu casuumaa dhammaan xafladaha iyo tartamada; ogeysiis ayaa horay loo siinayaa.",
  },
];

export default function Section8() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
Su'aalaha Inta Badan La Isweydiiyo
        </motion.h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border rounded-xl p-4 cursor-pointer hover:bg-blue-50 transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-blue-900">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section5.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function Section5() {
  const [openIndex, setOpenIndex] = useState(null);

  const news = [
    {
      title: "Imtixaanka Shahri-ga 1aad",
      date: "15 Oct 2025",
      desc: "Ardayda dugsiga waxaa loo geli doonaa imtixaanka semester-ka 1aad.",
      full: "Imtixaanka waxaa la bilaabi doonaa 15-ka Oktoobar 2025 waxaana lagu geli doonaa dhammaan fasallada dugsiga hoose iyo sare. Ujeedadu waa in lagu qiimeeyo horumarka ardayda ee rubucii hore ee sanadka, iyadoo natiijooyinka lagu soo bandhigi doono si hufan.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/485792042_1241617437761086_4428897816750442221_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N2c8q-Du3BoQ7kNvwGmh2Yb&_nc_oc=Adl1wldqMda83Qv0SQ5jkB2IWgd6cVZ_OA8ZyUymyPfYLlmRwWekJtNpL8FQiv8ZmSI&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=MoXJQduBj_neG7ve0k9nsw&oh=00_AfdDhB8tTLJfdqUb6d14GegTjApWlC4gup5nPFF9umVEAQ&oe=68F97F47",
    },
    {
      title: "Xaflada Quraan Dhameystir",
      date: "25 Nov 2025",
      desc: "Ardayda dhammeeyay xifdinta Qur’aanka waxaa loo qaban doonaa xaflad weyn.",
      full: "Xafladdan waxaa lagu qaban doonaa hoolka weyn ee dugsiga, waxaana lagu casuumi doonaa waalidiinta, maamulka iyo bulshada deegaanka. Ardayda dhammeeyay Qur’aanka waxay heli doonaan abaalmarinno gaar ah iyo shahaadooyin sharaf ah.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487732172_1246387293950767_5709418859755660650_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jq3tyUr4VacQ7kNvwEpQZ2X&_nc_oc=Adl1kSDw7x3e9muog6na8edcspFzdgYZzX6elucIvWSkEz4C3awO7nwVfBismqbs9cc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=NhGQ7knwk2dNk1eAYyFrlA&oh=00_AfdFehKGB7ru9ZN1bEHpVtZ3NgvQNHX-rrSjSx_w8gwduw&oe=68F98BDF",
    },
    {
      title: "Maamulka & Macallimiinta Cusub",
      date: "5 Dec 2025",
      desc: "Dugsigu wuxuu soo kordhiyay macallimiin cusub si loo horumariyo tayada waxbarashada.",
      full: "Macallimiinta cusub waxay leeyihiin khibrad sare oo waxbarid iyo tababar ah. Waxaa sidoo kale la sameeyay qorshe cusub oo lagu kobcinayo ardayda dhinaca akhlaaqda, diinta, iyo xirfadaha casriga ah.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/532158091_1366346295288199_2520923764946813410_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qP4237l0WX0Q7kNvwEqtFTu&_nc_oc=Adm5HyUUaOopdy8E1KuMoiXrm22AH6SIT2z4GwTTX1atvlxZ6xLlajxi90gZ6ocjehs&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=-uUt_TinLcUyHAwK4gVV6w&oh=00_AfeC1XFIWHpS4JpqAZz1fSjwB2OzaK4XTvgpUABPgeDTiw&oe=68F9829E",
    },
  ];

  const toggleReadMore = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
          Wararkii Ugu Dambeeyay & Dhacdooyinka
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Sawirka siduu yahay */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <div className="flex items-center gap-2 text-blue-600 text-sm mb-2">
                  <FaCalendarAlt /> {item.date}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                {/* Qaybta faahfaahinta dheeraadka ah */}
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-700 text-sm mb-4 bg-blue-50 p-3 rounded-lg"
                  >
                    {item.full}
                  </motion.p>
                )}

                <button
                  onClick={() => toggleReadMore(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
                >
                  {openIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

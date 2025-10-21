// Section2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaUsers, FaSchool } from "react-icons/fa";

export default function Section2() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Sawirka Dugsiga */}
        <motion.img
          src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487324465_1246388560617307_299250803992270810_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UViTkhtlldoQ7kNvwGn28MJ&_nc_oc=AdmwN3soiYBzx5p9R7bwrdwO21P0olcZwA8-EzCd4wsbgoi-yXHr7-V3wYrpVUX2nx8&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=iHPi-8yUIBYbuH2YHuE-VA&oh=00_AfcC_NYm2WHKYvk7U4uCY9dsXoTmj94nTnmw09xVBwvlyw&oe=68F9770D"
          alt="School Building"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* Qoraalka ku saabsan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif italic">
            About Luqmaan Al Xakiim
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Luqmaan Al Xakiim School waa dugsi casri ah oo bixiya waxbarasho tayo sare leh, 
            isku dhafaya aqoonta diinta iyo tan casriga ah. Waxaan diiradda saarnaa 
            barbaarinta arday leh akhlaaq, aqoon iyo xirfado nolosha.
          </p>

          {/* Why Choose Us */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-blue-600 text-2xl" />
              <span>Macallimiin Khibrad leh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-blue-600 text-2xl" />
              <span>Manhaj tayo leh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-600 text-2xl" />
              <span>Xanaaneyn & Tarbiyo</span>
            </div>
            <div className="flex items-center gap-3">
              <FaSchool className="text-blue-600 text-2xl" />
              <span>Goob waxbarasho casri ah</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

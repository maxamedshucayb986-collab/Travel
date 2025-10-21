// Section7.jsx
import React from "react";
import { motion } from "framer-motion";

// Gallery images – beddel URLs haddii aad rabto sawiradaaga gaarka ah
const gallery = [
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/488246997_1252016033387893_3475284841076329208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AhoYwcJkWEkQ7kNvwETjsFF&_nc_oc=AdktY-yKMtX_jgjtw1Jymk0RH4qlK88e8E-j0joU0cyWUHZ7OGtfi8rpK1erfBiP33Q&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=zWrbFRIXcAbnH_P4D0n3yA&oh=00_AfeCHJn8b3yfy5gwvfN9qK-PbNuQD8J7JjekpyoViD1FTQ&oe=68F9770B",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487311863_1244820964107400_8870205889345444201_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OtiQp0NbzIkQ7kNvwHhs6Hk&_nc_oc=AdnG0xMhok7eUv3jDmxlwQpCggSCpBGwe80ecPC-2DDitN24dOxfpuLREQOgosyzdaw&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=MdfZJGB3CI7aIIu3zhT-9w&oh=00_Afe0lU6iYjZpSt0dil0IeMDCu0UMEpN8495eVCeICKpEAg&oe=68F99265",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/488536288_1252792599976903_8467262024536707206_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=07s9l_9ASvsQ7kNvwHnGWbk&_nc_oc=AdnaXgg1KR0jKSidiSks5fxPlx1bEBN9kdDQdqCuPPeDoML6nE-7Eyh1pA3ZZTxHSx0&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Cvr_YuU0q2kO1gqMvRz8pA&oh=00_AffbJXzFeCK9085j5rNbtfXzBJaoA4GRFfeaiFTXk3cKFA&oe=68F97D46",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/489702985_1257617912827705_7721397093700198446_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NGdwaGuen8oQ7kNvwHkK6WR&_nc_oc=AdmtjhQ1ah0Orz1nLYoW1VRDOLYKvocChNi4s6MCAGPkrv1SDoIP9FrMWq5OWxOt8Uo&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Y4BLHtl2ITJizS2uSuQHag&oh=00_AfdmQYH-yWnTZNpM4URRA8yXDTtIibvVja7WgK3vsHQltw&oe=68F975B5",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/489430156_1251997346723095_6891907258480697239_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U-_NSKlzYScQ7kNvwHFsqeX&_nc_oc=AdmzJUxcIrWsL0GjycMzpE7Ypis-IMJ8dk_q8TRmqGf_p_6kz4XJQospPVdf-QexGnk&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=d_d47Ddz744JnDAmDqafaA&oh=00_Afey-uFHdrTXqHUXet79dv_EQkyeJnqkfRnxoiUrjVoaDw&oe=68F9849E",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487391184_1246387600617403_6861425289252904508_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jOv2PM1ywdYQ7kNvwHFuwyC&_nc_oc=Admbbqn2vOSOYoTrA6mYYsU0LvL8G_yQw-qCc7PbWfpFF88zSXq_1HdIQb0cSsLlMaw&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Ifphi_sER2tTZ0JFwWHaNA&oh=00_AffyrAiHeScVr5a3uHwtXt8CfFhgORD0R1R7OGMwncqK3A&oe=68F983D6",
];

export default function Section7() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 italic"
        >
       Qodobbada Dugsiga
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

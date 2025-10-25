// Section7.jsx
import React from "react";
import { motion } from "framer-motion";

// Gallery images – beddel URLs haddii aad rabto sawiradaaga gaarka ah
const gallery = [
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/489702985_1257617912827705_7721397093700198446_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VMx2ukeZZqYQ7kNvwHwYsAq&_nc_oc=AdmrtBH5-zCM3nDR9wmblerbsvzvHjI7vEXhiii8gbZju2SLOULPfpxsWGP56aBJxrc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=ga2k-FG7uUo_818NKEmn9g&oh=00_AfeAMNSbMuUsKWSlpm-sQIKMcucx3qOoIBA2A4j0Jn4_AA&oe=6902E875",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487391184_1246387600617403_6861425289252904508_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vqM1YNOPvZ8Q7kNvwG9hygT&_nc_oc=AdnpOo28ySzapiI_EirLK31JNmJWGG_ttzBR8_od5pwQvY9l2OfD9luYQVb2-LS0DNI&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=o9JnjhESaK1XvhjQN3dRZQ&oh=00_Afcwy2PKztp4_GLS-zzV-IAlBbwMmUluFlGKZPIq5ZzMNg&oe=6902BE56",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/489455452_1252792399976923_2140345343707810823_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6Py5xYrdZC4Q7kNvwGsnKgP&_nc_oc=AdkToP7OE5Ud5Nl_SKz-iR_3oTj51FxJHX3R2USUruBQEKh11e528-guclg1E1ndJQc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=fC5OLQ22AJ5Un7YVvj9frw&oh=00_AfenlDEV7g3LdXnUh9bzx9uzQIyhCjfX-x1vuE59pLaWpw&oe=6902C652",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487311863_1244820964107400_8870205889345444201_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zOFl2FMsUaAQ7kNvwFKiV6z&_nc_oc=AdmvPAIls3WHbb8T7JNFHmFyh-Ws0nNgc3zKV5BUWxGEglWFJ8zULplspLau2HLPPcI&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=FcJx6zCl15DMg5IQkf7OoA&oh=00_Afc3PJkEdEbz8zGKKacgKgIVFS-WYwZJnEma_oIAFQM5hQ&oe=6902CCE5",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/489430156_1251997346723095_6891907258480697239_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2Y91iZaotGQQ7kNvwGAFnvg&_nc_oc=AdlmL_G8UUZ36LOgBk2UjYOo-uVp1PV9l70hpYQ7ErxtNX_0nTqsBzsg9YZd18Aptcc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=zAFKBXEQSYJgoCkems6nlA&oh=00_Aff5WG53mOda-UaZXOkN5Akxznf7n-SS0X2sGzLIBf2gug&oe=6902BF1E",
  "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/488536288_1252792599976903_8467262024536707206_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BoiuTYtFxy8Q7kNvwEgugnW&_nc_oc=Adk0sP_fVBCLalGQAX0LAuGVLRl8P75Offrgm7P1Aes-HZVCWk3UDB2rLCh8N__qa-0&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=d-k7d3GtM-_QcauhobR53g&oh=00_Afdhbjaz--DnofRuJkQvNMDC5QLKKuxlNY_Sr3KGwTBU2w&oe=6902B7C6",
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

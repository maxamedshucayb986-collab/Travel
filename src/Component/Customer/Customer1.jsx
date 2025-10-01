import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CustomerReviews() {
  const allReviews = [
    {
      id: 1,
      name: "Ali Mohamed",
      rating: 5,
      comment: "Socdaal cajiib ah! Runtii aad ayaan ugu riyaaqay waayo-aragnimada, si weyn ayaa loogu taliyay!",
      photo: "https://i.pinimg.com/736x/b9/84/71/b984714c32ed762bf15296f9147d77d7.jpg",
    },
    {
      id: 2,
      name: "Amina Yusuf",
      rating: 4,
      comment: "Safar aad u fiican, hagaha wuxuu ahaa xirfadle. Dib u qabsan doona!",
      photo: "https://i.pinimg.com/736x/b3/9d/e0/b39de0b8bb76e7e98415249adb91e4cc.jpg",
    },
    {
      id: 3,
      name: "Mohamed Abdi",
      rating: 5,
      comment: "Waayo-aragnimada ugu fiicnayd noloshayda, xusuus aan la ilaawi karin!",
      photo: "https://i.pinimg.com/736x/b9/84/71/b984714c32ed762bf15296f9147d77d7.jpg",
    },
    {
      id: 4,
      name: "Hodan Ahmed",
      rating: 4,
      comment: "Runtii adeeg wanaagsan, kaliya daahitaan yar laakiin guud ahaan aad u fiican.",
      photo: "https://i.pinimg.com/736x/de/3e/10/de3e10d5fdd8166d74634ac0fd804af2.jpg",
    },
    {
      id: 5,
      name: "Khalid Warsame",
      rating: 5,
      comment: "Aad loogu talinayo! Wax walba waxay ahaayeen kuwo siman oo si wanaagsan loo habeeyey.",
      photo: "https://i.pinimg.com/736x/7b/1b/12/7b1b122e34f6b667651d2eb7f544f0eb.jpg",
    },
    {
      id: 6,
      name: "Ifrah Ali",
      rating: 5,
      comment: "Shaqaale cajiib ah iyo hagaha dalxiiska, xaqiiqdii waan soo laaban doonaa!",
      photo: "https://i.pinimg.com/1200x/1b/4d/20/1b4d2067ecc642859a6ba67dc8d73ddd.jpg",
    },
    {
      id: 7,
      name: "Nasteexo Abukar",
      rating: 4,
      comment: "Safar qurxoon, ammaan badan oo xiiso leh.",
      photo: "https://i.pinimg.com/1200x/27/c9/5c/27c95c4c4410062aa12fe97e5452b46f.jpg",
    },
    {
      id: 8,
      name: "Omar Hussein",
      rating: 5,
      comment: "Mid ka mid ah tacaburradii ugu fiicnaa ee aan soo maray, wax walbaa waxay ahaayeen kuwo qumman.",
      photo: "https://i.pinimg.com/736x/1d/49/dc/1d49dce2dede51a7a3951e2c00a96361.jpg",
    },
    {
      id: 9,
      name: "Sagal Ibrahim",
      rating: 5,
      comment: "Gaar ah! Waxaan jeclaystay soo dhawaynta iyo hufnaanta.",
      photo: "https://i.pinimg.com/1200x/92/47/5f/92475ff163cb2b8b5ab023ebbd2bdea4.jpg",
    },
    {
      id: 10,
      name: "Mahad Farah",
      rating: 4,
      comment: "Adeeg wanaagsan guud ahaan, xoogaa camiran.",
      photo: "https://i.pinimg.com/736x/8f/a8/91/8fa8911784a91a92c271583b850df56a.jpg",
    },
    {
      id: 11,
      name: "Zahra Mohamed",
      rating: 5,
      comment: "Ku qumman si kasta, hubaal mar kale ayaan ballan qabsan doonaa!",
      photo: "https://i.pinimg.com/736x/cc/ab/83/ccab83352c0f4f83eb199f28525e93bd.jpg",
    },
    {
      id: 12,
      name: "Abdirahman Ali",
      rating: 5,
      comment: "Khibrad heer sare ah, oo u qalma dinaar kasta!",
      photo: "https://i.pinimg.com/736x/34/5b/d4/345bd49a51c06d374dc173aa88259720.jpg",
    },
  ];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-3xl font-bold mb-10 text-center text-blue-500"
      >
        Customer Reviews
      </motion.h1>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentReviews.map((rev, index) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300 p-6 rounded-xl shadow-lg cursor-pointer"
          >
            <div className="flex items-center mb-3">
              <img
                src={rev.photo}
                alt={rev.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{rev.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < rev.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p>{rev.comment}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
        >
          Prev
        </button>

        <span className="px-4 py-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </section>
  );
}

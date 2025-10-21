import React, { useState } from "react";

const AdmissionsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    parentName: "",
    contact: "",
    classLevel: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      age: "",
      parentName: "",
      contact: "",
      classLevel: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 mt-20">
      <h1 className="text-4xl font-bold text-blue-500 mb-10 text-blue-0 animate-fadeIn">
        Admissions Form
      </h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-lg animate-slideUp">
          Form successfully submitted!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 animate-slideUp"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Parent / Guardian Name
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Class Level
          </label>
          <select
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            <option value="">Select Class</option>
            <option value="KG1">الفصل الاول</option>
            <option value="KG2">الفصل الثاني</option>
            <option value="Grade 1">الفصل الثالث</option>
            <option value="Grade 2">الفصل الرابع</option>
            <option value="Grade 3">الفصل الخامس</option>
            <option value="Grade 4">الفصل السادس</option>
            <option value="Grade 5">الفصل السابع</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Submit
        </button>
      </form>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AdmissionsForm;
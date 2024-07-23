import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import sk1 from '../assets/sk.jpg';
import sk3 from '../assets/sk3.jpg';
import sk4 from '../assets/sk4.jpg';

const successStories = [
  {
    name: "Venira Citra",
    role: "Frontend Developer",
    story: "Venira Citra, student Maxy yang berhasil menguasai Laravel dalam waktu singkat dan dapat kesempatan magang. Swipe up yuk untuk mendengar kisah sukses belajarnya di dunia pemrograman!🌟👩‍💻",
    image: sk1
  },
  {
    name: "Hans",
    role: "UI/UX Designer",
    story: "Hans adalah alumni UI/UX Design batch 10 yang memiilih belajar di Maxy Academy karena silabusnya relevan dan mendukung karirnya. Selain itu, Hans juga sukses magang di PT Inti Teknologi.",
    image: sk3
  },
  {
    name: "Amanda Eka Agustin",
    role: "Digital Marketing",
    story: "Saya, Amanda Eka Agustin, selama belajar di Maxy saya dibimbing oleh mentor berpengalaman yang tidak hanya memberikan teori tetapi juga materi praktis.",
    image: sk4
  },
  // Tambahkan lebih banyak cerita sukses di sini
];

const SuccessStoryCard = ({ name, role, story, image }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-white/70 backdrop-blur-xl rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img className="w-full md:w-1/3 h-48 object-cover md:h-auto" src={image} alt={name} />
      <div className="p-6 flex flex-col justify-start">
        <h2 className="text-2xl text-yellow-400 font-bold mb-2">{name}</h2>
        <h3 className="text-lg text-gray-700 mb-2">{role}</h3>
        <p className="text-gray-700 mb-4">{story}</p>
      </div>
    </motion.div>
  );
};

const SuccessStoryList = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-5xl font-bold text-start text-yellow-400 mb-8">Cerita Sukses</h1>
      <div className="flex flex-wrap justify-start gap-8">
        {successStories.map((story, index) => (
          <SuccessStoryCard
            key={index}
            name={story.name}
            role={story.role}
            story={story.story}
            image={story.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoryList;

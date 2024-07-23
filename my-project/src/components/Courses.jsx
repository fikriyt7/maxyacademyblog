import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faStar, faClipboard, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

const courses = [
  {
    title: "Rapid Bootcamp Frontend",
    description: "Siap untuk memulai karir, Menyelesaikan bootcamp dengan pemahaman yang kuat tentang teknologi frontend dan mampu mengembangkan aplikasi web modern.",
    image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Rapid Bootcamp Backend",
    description: "Selesaikan bootcamp dengan kemampuan yang solid dalam pengembangan backend, siap untuk menghadapi tantangan nyata dalam industri teknologi.",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Rapid Bootcamp UI/UX",
    description: "Mengembangkan keterampilan yang diperlukan untuk merancang antarmuka pengguna yang menarik dan pengalaman pengguna yang intuitif.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Digital Marketing",
    description: "Menguasai keterampilan pemasaran digital yang diperlukan untuk meningkatkan visibilitas merek, menghasilkan lalu lintas, dan memaksimalkan konversi.",
    image: "https://media.istockphoto.com/id/1652679812/id/foto/teknologi-bisnis-pemasaran-digital-iklan-situs-web-email-jaringan-media-sosial-seo-video-sem.jpg?s=1024x1024&w=is&k=20&c=rUhafvtfxdZNvdq7ilTZd1z2I4B_pM2QRvcWaY4xr20=",
    link: "#"
  }
  // Tambahkan lebih banyak kursus di sini
];

const Course = ({ title, description, image, link, onShowDetails }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="min-w-[300px] max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex flex-wrap items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faBook} className="text-gray-800" />
            <span>9 Modul</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <span>4.5</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faClipboard} className="text-gray-800" />
            <span>25 Kuis dan latihan</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faCertificate} className="text-gray-800" />
            <span>Sertifikat</span>
          </div>
        </div>
        <button 
          onClick={() => onShowDetails({ title, description, image, link })}
          className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </motion.div>
  );
};

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const showDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeDetails = () => {
    setSelectedCourse(null);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hidden">
        {courses.map((course, index) => (
          <Course 
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            link={course.link}
            onShowDetails={showDetails}
          />
        ))}
      </div>

      {selectedCourse && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeDetails}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
            <img className="w-full h-48 object-cover mb-4" src={selectedCourse.image} alt={selectedCourse.title} />
            <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
            <a href={selectedCourse.link} className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
              Kunjungi Kursus
            </a>
          </motion.div>
        </motion.div>
      )}

      {/* Custom cursor element */}
      <div className="custom-cursor"></div>
    </div>
  );
};

export default CourseList;

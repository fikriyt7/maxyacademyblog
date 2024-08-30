import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import desa from '../assets/desa.png';
import kkn from '../assets/logokkn.png';
import logouniv from '../assets/logouniv.png';
import pramandane from '../assets/pramandane.png';
import fikri from '../assets/fikri.png';
import nanda from '../assets/nanda.png';
import suwandi from '../assets/suwandi.png';
import eva from '../assets/eva.png'
import kia from '../assets/kia.jpeg'
import ridho from '../assets/ridho.png'
import nisa from '../assets/nisa.jpg'
import ulfa from '../assets/ulfa.jpg'
import tika from '../assets/tika.jpg'

import doni from '../assets/doni.png';
const developers = [
  {
    name: 'Pramandane Setya Yuda',
    role: 'Teknik',
    email: 'pramandane@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: pramandane,
    bio: 'Developer.',
  },
  {
    name: 'Zainul Fikri',
    role: 'Teknik',
    email: 'zainul@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: fikri,
    bio: 'Frontend Developer',
  },
  {
    name: 'Nanda',
    role: 'Teknik',
    email: 'nanda@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: nanda,
    bio: 'Developer',
  },
  {
    name: 'M. Suwandi Pranata',
    role: 'Teknik',
    email: 'suwandi@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: suwandi,
    bio: 'Developer',
  },
  {
    name: 'M. Doni Paizurahman',
    role: 'Teknik',
    email: 'doni@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: doni,
    bio: 'Developer',
  },
  {
    name: 'Eva Aprilia Nandika Putri',
    role: 'Pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: eva,
    bio: 'Pendidikan sekolah dasar',
  },
  {
    name: 'Bq. juni Artika',
    role: 'Pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: tika,
    bio: 'Pendidikan sekolah dasar',
  },
  {
    name: 'Nisa Ariani',
    role: 'Pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: nisa,
    bio: 'Pendidikan sekolah dasar',
  },
  {
    name: 'Nurul Hafifatul Jannah',
    role: 'Pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: ulfa,
    bio: 'Pendidikan sekolah dasar',
  },
  {
    name: 'M.ridho Azhar',
    role: 'Pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: ridho,
    bio: 'Pendidikan sekolah dasar',
  },
  {
    name: 'Saknahi',
    role: 'pendidikan',
    email: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    photo: kia,
    bio: 'Pendidikan bahasa inggris',
  },
];

const DeveloperCard = ({ developer }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={developer.photo}
        alt={developer.name}
        className="w-28 h-28 rounded-full mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-semibold text-gray-900">{developer.name}</h3>
      <p className="text-gray-600 mb-4">{developer.role}</p>
      <p className="text-gray-500 mb-6">{developer.bio}</p>
      <div className="flex space-x-4">
        <a href={`mailto:${developer.email}`} className="text-green-600 hover:text-green-800">
          <FaEnvelope size={20} />
        </a>
        <a href={developer.linkedin} className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={20} />
        </a>
        <a href={developer.github} className="text-gray-800 hover:text-gray-900">
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

const DeveloperInfo = () => {
  return (
    <section className="flex flex-col items-center p-6 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-col items-center mb-6">
        <div className="flex justify-center space-x-6 mb-4">
          <img
            src={desa}
            alt="Logo Desa"
            className="h-16"
          />
          <img
            src={logouniv}
            alt="Logo Universitas"
            className="h-16"
          />
          <img
            src={kkn}
            alt="Logo KKN"
            className="h-16"
          />
        </div>
        <h2 className="text-4xl font-bold text-white">Tim Pengembang</h2>
        <p className="mt-2 text-center max-w-2xl text-white">
          Website Desa Gelora berbasis SDGs  dikembangkan oleh Kelompok KKN 14 Desa Gelora Universitas Hamzanwadi tahun 202.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {developers.map((developer, index) => (
          <DeveloperCard key={index} developer={developer} />
        ))}
      </div>
    </section>
  );
};

export default DeveloperInfo;

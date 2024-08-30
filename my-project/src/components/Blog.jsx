// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList'; // Pastikan path ini benar

// Contoh data blog, ganti dengan data nyata atau fetch dari API
const blogData = [
  {
    id: '1',
    title: '3 upaya intervensi Pencegahan stunting',
    description: 'Kementerian Kesehatan ditugaskan untuk menurunkan angka stunting dari 24% ke 14% di tahun 2024. Untuk itu ada 3 upaya intervensi atau program yang dilakukan untuk menurunkan stunting.Intervensi akan fokus diarahkan pada wanita sebelum melahirkan, baik remaja di kelas 7 keatas dan juga pada saat ibunya hamil itu adalah titik yang paling rawan menyebabkan stunting, serta pemberian makanan tambahan berupa protein hewani pada anak usia 6-24 bulan. ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRS3A83a4jltPQATl65vTTyAd27xgCZ-cHA&s',
    link: '/blog/1'
  },
  {
    id: '2',
    title: 'UPAYA PENCEGAHAN MENINGKATNYA PERNIKAHAN DINI MELALUI LITERASI KEARIFAN LOKAL PADA PENDIDIKANTINGKAT DASAR',
    description: 'Acara ini dihadiri oleh puluhan mahasiswa dari berbagai prodi yang sangat antusias untuk mengasah keterampilan di bidang IT dan bisnis.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9x-I7y6VKMRym1tFLWmTl5o-r865JkRPSA&s',
    link: '/blog/2'
  }
];

const Blog = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <BlogList blogs={blogData} />
      </div>
    </section>
  );
};

export default Blog;
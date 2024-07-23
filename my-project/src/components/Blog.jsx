// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList'; // Pastikan path ini benar

// Contoh data blog, ganti dengan data nyata atau fetch dari API
const blogData = [
  {
    id: '1',
    title: 'Maxy Academy mengadakan roadshow di Universitas Slamet Riyadi (UNISRI)',
    description: ' Solo. Acara ini dihadiri oleh berbagai kalangan mahasiswa, mulai dari lulusan SMA/K, diploma, sarjana, hingga magister dari semua jurusan, dan berlangsung di Auditorium UNISRI. Maxy.... ',
    image: 'https://media.licdn.com/dms/image/D5622AQG3JgobUAllRw/feedshare-shrink_800/0/1721642240479?e=1724284800&v=beta&t=4u29Xa3L-HTn2Ix-35EICWZg0fcQv8LVZWgLf1eRPbg',
    link: '/blog/1'
  },
  {
    id: '2',
    title: 'Maxy Academy telah menyelenggarakan program 1 Day bootcamp di Universitas Ma Chung',
    description: 'Acara ini dihadiri oleh puluhan mahasiswa dari berbagai prodi yang sangat antusias untuk mengasah keterampilan di bidang IT dan bisnis.',
    image: 'https://media.licdn.com/dms/image/D5622AQGhgX_6Lw00Vg/feedshare-shrink_800/0/1721379172292?e=1724284800&v=beta&t=IZrnNBjP-elASGjd917IgrUC_fZNXIm4ixj6zZaONhQ',
    link: '/blog/2'
  },
  {
    id: '3',
    title: 'Maxy Academy Adakan Seminar bertema Business Model Canvas dan MBKM Mandiri untuk Membangkitkan Minat dalam Dunia Industri Digital.',
    description: 'Maxy Academy dengan bangga mengumumkan keberhasilan penyelengaraan seminar terbaru yang dihadiri oleh puluhan Mahasiswa yang terpilih dari prodi di Universitas Negeri Surabaya (UNESA) .',
    image: 'https://media.licdn.com/dms/image/D5622AQEtSKBfD0VrmA/feedshare-shrink_800/0/1721364029311?e=1724284800&v=beta&t=DEDaSoZTRH8uBJBxF0Ao2TZHDqpQKjfPvdYJZPp234A',
    link: '/blog/3'
  },
  {
    id: '4',
    title: 'Maxy Academy bekerjasama dengan Sekolah Tinggi Informatika dan Komputer (STIKI) Malang dalam mengembangkan EduTech untuk talenta digital..',
    description: 'Melalui program Magang dan Studi Independen Bersertifikat (MSIB) dan MBKM Mandiri, kami berkomitmen untuk mempersiapkan mahasiswa dengan skill yang relevan di industri digital .',
    image: 'https://media.licdn.com/dms/image/D5622AQEwouhWE0eIcA/feedshare-shrink_800/0/1721380846464?e=1724284800&v=beta&t=zXwExFJjJcVABRA01uRvB-fxfMGnAECdeAO0SExd57g',
    link: '/blog/4'
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
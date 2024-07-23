import React from 'react';
import backgroundImage from '../assets/bg1.png';

const Event = () => {
  return (

    <div className="mt-20 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="mt-10 relative flex flex-col lg:flex-row items-center justify-between p-6 lg:p-14 bg-white bg-opacity-10 rounded-lg shadow-lg space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-yellow-400">MAXY Academy</h1>
          <p className="text-sm lg:text-base text-white">Maksimalkan potensi dan persiapkan karirmu Dikemas dalam bentuk mini bootcamp yang telah teruji, mahasiswa akan mendapatkan pembelajaran intensif dengan para ahli selama satu bulan dengan praktek lapangan melalui proyek nyata.</p>
          
          <div className="flex flex-wrap items-center space-x-2">
            <span className="bg-black text-white px-2 py-1 rounded-md text-xs lg:text-sm">9 Modul</span>
            <span className="bg-black text-white px-2 py-1 rounded-md text-xs lg:text-sm">4.5</span>
            <span className="bg-black text-white px-2 py-1 rounded-md text-xs lg:text-sm">25 Kuis dan latihan</span>
            <span className="bg-black text-white px-2 py-1 rounded-md text-xs lg:text-sm">Sertifikat</span>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-4">
            <span className="text-yellow-500 text-xl lg:text-2xl font-bold">Rp....</span>
            <span className="line-through text-gray-500 text-sm lg:text-base">Rp....</span>
          </div>
          
          <div className="flex flex-wrap items-center space-x-2 lg:space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 text-xs lg:text-base">Hubungi Kami</button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-xs lg:text-base">
              <a href="https://maxy.academy/login">Daftar Sekarang</a>
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/rorz4nWuD9Q"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

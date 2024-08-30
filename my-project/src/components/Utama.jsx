import React from 'react';
import backgroundImage from '../assets/bg1.png';

const Event = () => {
  return (

    <div className="mt-20 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="mt-10 relative flex flex-col lg:flex-row items-center justify-between p-6 lg:p-14 bg-white bg-opacity-10 rounded-lg shadow-lg space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-yellow-300">DESA GELORA</h1>
          <p className="text-sm lg:text-base text-white">SDGs merupakan komitmen global dan nasional dalam upaya untuk menyejahterakan masyarakat mencakup 17 tujuan dan sasaran global tahun 2030 yang dideklarasikan baik oleh negara maju maupun negara berkembang di Sidang Umum PBB pada September 2015.  17 Tujuan tersebut yaitu:

(1) Tanpa Kemiskinan; (2) Tanpa Kelaparan; (3) Kehidupan Sehat dan Sejahtera; (4) Pendidikan Berkualitas; (5) Kesetaraan Gender; (6) Air Bersih dan Sanitasi Layak; (7) Energi Bersih dan Terjangkau; (8) Pekerjaan Layak dan Pertumbuhan Ekonomi; (9) Industri, Inovasi dan Infrastruktur; (10) Berkurangnya Kesenjangan; (11) Kota dan Permukiman yang Berkelanjutan; (12) Konsumsi dan Produksi yang Bertanggung Jawab; (13) Penanganan Perubahan Iklim; (14) Ekosistem Lautan; (15) Ekosistem Daratan; (16) Perdamaian, Keadilan dan Kelembagaan yang Tangguh; (17) Kemitraan untuk Mencapai Tujuan.</p>
          
          
          
          <div className="flex flex-wrap items-center space-x-2 lg:space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 text-xs lg:text-base">Hubungi Kami</button>
          
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/8UF-xOxHsnU?si=Mg6cIQcCzeVRQEWt"
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

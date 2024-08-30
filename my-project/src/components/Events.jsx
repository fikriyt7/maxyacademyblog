import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow, FaInfoCircle, FaBuilding, FaUsers } from 'react-icons/fa';

const ProfileDesa = () => {
  const villageInfo = {
    name: 'DESA GELORA',
    description: 'kec.sikur Kab.lombok timur NTB.',
    imageUrl: 'https://gledeknews.com/wp-content/uploads/2020/05/KANTOR-DESA-GELORA.jpeg',
    stats: [
      { label: 'Penduduk', value: '7312 Jiwa' },
      { label: 'Luas Wilayah', value: '428.873  Ha' },
      { label: 'Jumlah RT/RW', value: '- RT / - RW' },
      { label: 'Sekolah', value: '- Sekolah' },
    ],
  };

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Village Header */}
        <div className="mb-8">
          <motion.img
            src={villageInfo.imageUrl}
            alt="Desa Brang Kolong"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center mt-4">
            <h1 className="text-4xl font-bold text-gray-800">{villageInfo.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{villageInfo.description}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {villageInfo.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl text-gray-600 mb-2">{stat.label}</div>
                <div className="text-xl font-semibold text-gray-800">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <FaLocationArrow size={30} className="text-blue-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Lokasi</h3>
              <p className="text-gray-600">Temukan lokasi desa di peta.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <FaInfoCircle size={30} className="text-green-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Informasi</h3>
              <p className="text-gray-600">Pelajari lebih lanjut tentang sejarah dan budaya desa.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <FaBuilding size={30} className="text-red-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Fasilitas</h3>
              <p className="text-gray-600">Temukan fasilitas dan layanan di desa.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <FaUsers size={30} className="text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Komunitas</h3>
              <p className="text-gray-600">Bergabung dengan komunitas desa dan aktivitas sosial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDesa;

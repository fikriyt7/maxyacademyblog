import React, { useState } from 'react';
import { FaShieldAlt, FaHandsHelping, FaRecycle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

Modal.setAppElement('#root');

function ServicesSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024');

  const services = [
    {
      id: 1,
      icon: <FaShieldAlt size={50} />,
      title: 'Analisis Risiko Santanig',
      description: 'Menganalisis potensi risiko santanig dan rekomendasi tindakan pencegahan.',
      detail: 'Analisis Risiko Santanig memungkinkan identifikasi dini terhadap risiko potensial...',
    },
    {
      id: 2,
      icon: <FaHandsHelping size={50} />,
      title: 'Mitigasi Dampak',
      description: 'Meminimalkan dampak negatif santanig terhadap komunitas dan lingkungan.',
      detail: 'Mitigasi Dampak adalah langkah-langkah yang diambil untuk mengurangi efek negatif...',
    },
    {
      id: 3,
      icon: <FaRecycle size={50} />,
      title: 'Pemulihan dan Rehabilitasi',
      description: 'Dukungan untuk pemulihan setelah terjadinya santanig, termasuk rehabilitasi sosial dan ekonomi.',
      detail: 'Pemulihan dan Rehabilitasi membantu masyarakat kembali pulih setelah bencana...',
    },
  ];

  const chartData = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'],
    datasets: [
      {
        label: `Jumlah Kasus Stanting (${selectedYear})`,
        data: [20, 18, 22, 19, 24, 16, 30, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#374151', // text-gray-800
        },
      },
      x: {
        ticks: {
          color: '#374151', // text-gray-800
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#374151', // text-gray-800
        },
      },
    },
  };

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <section className="services bg-gradient-to-r from-blue-400 to-indigo-600 py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Layanan Kami</h2>
      <h1 className="text-4xl font-bold text-center text-white mb-8">FITUR LAINYA DALM PENGEMBANGAN!!!.....loading</h1>
      
      {/* Carousel untuk Layanan */}
      <div className="carousel-container max-w-7xl mx-auto mb-8">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          className="service-carousel"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card p-6 bg-white rounded-lg shadow-lg text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(service)}
            >
              <div className="icon mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </Carousel>
      </div>

      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Detail"
          className="modal bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
          overlayClassName="modal-overlay bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedService.title}</h2>
            <p className="text-gray-600 mb-4">{selectedService.detail}</p>
            <button
              onClick={closeModal}
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Tutup
            </button>
          </motion.div>
        </Modal>
      )}

      {/* Filter dan Statistik Chart */}
      <div className="chart-section bg-white rounded-lg shadow-lg p-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Statistik Data Stanting di Desa</h3>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="py-2 px-4 bg-gray-200 rounded-lg text-gray-800"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="chart-container" style={{ height: '450px' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

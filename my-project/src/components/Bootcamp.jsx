// src/components/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Bagaimana cara mendaftar bootcamp di Maxy Academy?',
    answer: 'Registrasi melalui website https://maxy.academy atau Whatsapp Maxy Academy (https://wa.me/628113955599) dan isi form pendaftaran kami. Selanjutnya, team Maxy Academy akan menghubungi lebih lanjut untuk proses setelah pendaftaran.',
  },
  {
    question: 'Apakah ada program cicilan?',
    answer:'Ada, menggunakan Edufund program cicilan hingga 12x dengan bunga yang terjangkau.',
  },
  {
    question: 'Siapa yang bisa ikut Maxy Academy?',
    answer: 'Mahasiswa semester 5 hingga fresh graduate.',
  },
  {
    question: 'Bagaimana tahapan bootcamp di Maxy Academy?',
    answer: 'Mahasiswa akan mengikuti bootcamp selama 1 bulan dengan durasi 2 jam setiap harinya pada hari Senin hingga Jumat. Setiap akhir materi pembelajaran, mahasiswa akan diberikan assessment untuk mempraktekkan ilmu yang diperoleh. Pada 2 minggu pertama bootcamp, mahasiswa akan melakukan matchmaking dengan perusahaan. Kemudian pada minggu ke-3, mahasiswa telah mendapat list perusahaan mana yang cocok dan ingin menjadikan intern. Setelah menyelesaikan bootcamp di minggu ke-4, mahasiswa dapat memulai magang di perusahaan.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12">Apa sih yang Kamu Bingungin?</p>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg justify-start text-start ">{faq.question}</h4>
                <span className="text-xl text-start">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div
                className={`mt-4 text-gray-600 transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                }`}
              >
                {activeIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href='https://api.whatsapp.com/send/?phone=628113955599&text&type=phone_number&app_absent=0' className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
            Punya Pertanyaan Lebih Lanjut?
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

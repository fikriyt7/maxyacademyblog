// src/components/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Apa itu stunting?',
    answer: 'Stunting adalah kondisi di mana anak memiliki tinggi badan yang lebih rendah dari standar usia mereka akibat kekurangan gizi kronis dalam periode pertumbuhan penting, terutama pada 1.000 hari pertama kehidupan.',
  },
  {
    question: 'Apa saja penyebab utama stunting?',
    answer:'Penyebab utama stunting meliputi kurangnya asupan gizi yang memadai, infeksi berulang, serta kondisi sanitasi dan kebersihan yang buruk.',
  },
  {
    question: 'Bagaimana cara mencegah stunting?',
    answer: 'Pencegahan stunting dapat dilakukan dengan memberikan asupan gizi yang cukup sejak kehamilan, praktik pemberian ASI eksklusif selama 6 bulan pertama, memperbaiki sanitasi lingkungan, serta memberikan edukasi tentang pentingnya nutrisi kepada ibu hamil dan orang tua.',
  },
  {
    question: 'Apa yang di maskud dengan pernikahan dini',
    answer: '.Pernikahan dini adalah pernikahan yang dilakukan oleh individu yang belum mencapai usia dewasa, biasanya di bawah usia 18 tahun.',
  },
  {
    question: 'Apa risiko yang dihadapi oleh anak yang menikah dini?',
    answer: 'Risiko pernikahan dini termasuk tingginya angka komplikasi kehamilan dan persalinan, putus sekolah, serta peningkatan risiko kekerasan dalam rumah tangga.',
  },
  {
    question: 'Mengapa pernikahan dini masih sering terjadi?',
    answer: 'Pernikahan dini sering terjadi karena faktor budaya, tekanan sosial, kemiskinan, serta kurangnya akses terhadap pendidikan.',
  },
  {
    question: 'Bagaimana cara mencegah pernikahan dini?',
    answer: 'Pencegahan pernikahan dini dapat dilakukan melalui pendidikan, kampanye kesadaran, penegakan hukum terkait usia minimum pernikahan, serta pemberdayaan perempuan untuk meningkatkan kemandirian ekonomi dan sosial.',
  },
  {
    question: 'Mengapa pendidikan penting bagi anak-anak?',
    answer: 'Pendidikan memberikan anak-anak keterampilan dan pengetahuan yang diperlukan untuk masa depan mereka, membantu mereka mengembangkan potensi penuh mereka, dan meningkatkan peluang mereka untuk mendapatkan pekerjaan yang baik.',
  },
  {
    question: 'Apa dampak negatif dari kurangnya pendidikan',
    answer: 'Kurangnya pendidikan dapat menyebabkan peningkatan kemiskinan, kesulitan mendapatkan pekerjaan, serta rendahnya kualitas hidup.',
  },
  {
    question: 'Bagaimana pendidikan dapat membantu mencegah stunting dan pernikahan dini?',
    answer: 'Pendidikan memberikan pengetahuan tentang gizi yang tepat, pentingnya kesehatan reproduksi, serta hak-hak anak, yang semuanya dapat membantu mencegah stunting dan pernikahan dini.',
  },
  {
    question: 'Apa yang dapat dilakukan untuk meningkatkan akses pendidikan?',
    answer: 'Untuk meningkatkan akses pendidikan, perlu adanya peningkatan fasilitas sekolah, pemberian beasiswa, program bantuan untuk anak-anak dari keluarga kurang mampu, serta kampanye kesadaran tentang pentingnya pendidikan.',
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
          <a href='' className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
            Punya Pertanyaan Lebih Lanjut?
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

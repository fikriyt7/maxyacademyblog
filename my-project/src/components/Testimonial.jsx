// src/components/Testimonials.jsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: ' Saya student Digital Career Bootcamp Maxy batch 10. Berkat program penyaluran magang di Maxy Academy, Saya sukses menjadi UI/UX Designer Intern di PT. Bringin Inti Teknologi',
    name: 'Adhika',
    role: 'Student',
    rating: 5,
  },
  {
    id: 2,
    text: 'Saya berhasil keterima magang di Bringin Inti Teknologi sebagai Digital Marketing! Pengalaman Saya  yang paling berkesan adalaha Mentor Maxy sangat expert dibidangnya dan respontif terhadap pertanyaan.',
    name: ' Muhammad Alif Rizky',
    role: 'Digital Marketing',
    rating: 4,
  },
  {
    id: 3,
    text: 'Saya merekomendasikan maxy academy buat siapapun yang mau upgrade skill',
    name: 'Awan',
    role: 'ui/ux Designer',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Apa Kata Mereka?</h2>
        <p className="text-gray-600 mb-8">Ayo raih kesempatan mengikuti bootcamp di maxy academy</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-yellow-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
              <div className="flex justify-center mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

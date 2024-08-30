// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logoimage from '../assets/desa.png';
import apps from '../assets/apps.png';
import appss from '../assets/appss.png';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logoimage} alt="BiznisUp Logo" className="mb-4" />
        </div>
        <div>
          <h5 className="mb-4 font-bold">Alamat</h5>
          <p>Jalan Tgh. Moh. Saleh
          Kecamatan Sikur Kabupaten Lombok Timur Provinsi Nusa Tenggara Barat , Kode Pos 83662</p>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Menu</h5>
          <ul>
            <li><a href="#" className="hover:underline">Beranda</a></li>
            <li><a href="#" className="hover:underline">SDGs</a></li>
            <li><a href="#" className="hover:underline">Artikel</a></li>
            <li><a href="#" className="hover:underline">Layanan Kami</a></li>
            <li><a href="#" className="hover:underline">Faq</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Sosial Media Kami</h5>
          <div className="flex space-x-4 mb-4">
            <a href="h" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/kkn_14_desa_gelora/" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="https://youtuD9Q" className="text-white hover:text-gray-400"><FaYoutube /></a>
            <a href="https://wwom/company/maxyacademy/" className="text-white hover:text-gray-400"><FaLinkedin /></a>
          </div>
          <h5 className="mb-4 font-bold">Temukan Kami</h5>
          <div className="flex space-x-4">
            <a href="" className="hover:opacity-75"><img src={apps} alt="App Store" /></a>
            <a href="#" className="hover:opacity-75"><img src={appss} alt="Google Play" /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        Desa gelora/kkn_bindes_univ.hamzanwadi &copy;2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

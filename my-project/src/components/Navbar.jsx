import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Pastikan package ini terpasang

import desa from '../assets/desa.png';

function Navbar({ refs }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white/50 p-4 text-black backdrop-blur-md shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <img className="h-14 w-14" src={desa} alt="Logo Desa" />
                        <span className="ml-3 text-xl font-semibold text-gray-900">DESA GELORA</span>
                    </div>
                </div>
                <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-full max-w-md">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="w-full p-2 pl-10 rounded-full border-2 border-transparent border-yellow-400 focus:border-yellow-300 bg-white/50 text-black placeholder-gray-700 focus:outline-none"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
                </form>
                <button 
                    className="md:hidden flex items-center" 
                    aria-label="Toggle menu"
                    onClick={toggleMobileMenu}
                >
                    <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="#utama" className="hover:text-yellow-400 transition duration-300" onClick={() => scrollToSection(refs.utamaRef)}>Beranda</Link>
                    <div className="relative">
                        <button 
                            className="hover:text-yellow-400 flex items-center transition duration-300"
                            onClick={toggleDropdown}
                        >
                            SDGs Desa
                            <ChevronDownIcon className={`w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 bg-white rounded-md shadow-lg w-40 animate-fade-in">
                                <Link to="#stunting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => scrollToSection(refs.stuntingRef)}>Stunting</Link>
                                <Link to="#pernikahan-dini" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => scrollToSection(refs.pernikahanDiniRef)}>Pernikahan Dini</Link>
                                <Link to="#literasi-pendidikan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => scrollToSection(refs.literasiPendidikanRef)}>Literasi Pendidikan</Link>
                                <Link to="#kesehatan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => scrollToSection(refs.kesehatanRef)}>Kesehatan</Link>
                            </div>
                        )}
                    </div>
                    <Link to="#events" className="hover:text-yellow-400 transition duration-300" onClick={() => scrollToSection(refs.eventsRef)}>Profil Desa</Link>
                    <Link to="#blog" className="hover:text-yellow-400 transition duration-300" onClick={() => scrollToSection(refs.blogRef)}>Artikel</Link>
                    <Link to="#success-stories" className="hover:text-yellow-400 transition duration-300" onClick={() => scrollToSection(refs.successStoriesRef)}>Layanan Kami</Link>
                    <Link to="#bootcamp" className="hover:text-yellow-400 transition duration-300" onClick={() => scrollToSection(refs.bootcampRef)}>Faq</Link>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white/50 backdrop-blur-sm shadow-lg absolute top-full left-0 w-full`}>
                <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md p-4 mx-auto">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="w-full p-2 pl-10 rounded-full border-2 border-transparent border-yellow-400 focus:border-yellow-300 bg-white text-black placeholder-gray-700 focus:outline-none"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
                </form>
                <div className="flex flex-col space-y-2 p-4">
                    <Link to="#utama" className="hover:text-yellow-400 transition duration-300" onClick={() => { scrollToSection(refs.utamaRef); setIsMobileMenuOpen(false); }}>Beranda</Link>
                    <div className="relative">
                        <button 
                            className="hover:text-yellow-400 flex items-center transition duration-300"
                            onClick={toggleDropdown}
                        >
                            SDGs Desa
                            <ChevronDownIcon className={`w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2 bg-white rounded-md shadow-lg w-full animate-fade-in">
                                <Link to="#stunting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => { scrollToSection(refs.stuntingRef); setIsMobileMenuOpen(false); }}>Stunting</Link>
                                <Link to="#pernikahan-dini" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => { scrollToSection(refs.pernikahanDiniRef); setIsMobileMenuOpen(false); }}>Pernikahan Dini</Link>
                                <Link to="#literasi-pendidikan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => { scrollToSection(refs.literasiPendidikanRef); setIsMobileMenuOpen(false); }}>Literasi Pendidikan</Link>
                                <Link to="#kesehatan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300" onClick={() => { scrollToSection(refs.kesehatanRef); setIsMobileMenuOpen(false); }}>Kesehatan</Link>
                            </div>
                        )}
                    </div>
                    <Link to="#events" className="hover:text-yellow-400 transition duration-300" onClick={() => { scrollToSection(refs.eventsRef); setIsMobileMenuOpen(false); }}>Profil Desa</Link>
                    <Link to="#blog" className="hover:text-yellow-400 transition duration-300" onClick={() => { scrollToSection(refs.blogRef); setIsMobileMenuOpen(false); }}>Artikel</Link>
                    <Link to="#success-stories" className="hover:text-yellow-400 transition duration-300" onClick={() => { scrollToSection(refs.successStoriesRef); setIsMobileMenuOpen(false); }}>Layanan Kami</Link>
                    <Link to="#bootcamp" className="hover:text-yellow-400 transition duration-300" onClick={() => { scrollToSection(refs.bootcampRef); setIsMobileMenuOpen(false); }}>faq</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Ensure this package is installed

function Navbar({ refs }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle search submit logic here
        console.log('Searching for:', searchTerm);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white/50 p-4 text-black backdrop-blur-md shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl text-yellow-300 font-bold">Maxy Academy</h1>
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
                   
                    <Link to="#utama" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.utamaRef)}> Home</Link>
                    <Link to="#courses" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.coursesRef)}>Courses</Link>
                    <Link to="#events" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.eventsRef)}>Events</Link>
                    <Link to="#blog" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.blogRef)}>Blog</Link>
                    <Link to="#success-stories" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.successStoriesRef)}>Success Stories</Link>
                    <Link to="#bootcamp" className="hover:text-yellow-300" onClick={() => scrollToSection(refs.bootcampRef)}>Faq</Link>
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
                    <Link to="#utama" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.utamaRef); setIsMobileMenuOpen(false); }}>Home</Link>
                    <Link to="#courses" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.coursesRef); setIsMobileMenuOpen(false); }}>Courses</Link>
                    <Link to="#events" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.eventsRef); setIsMobileMenuOpen(false); }}>Events</Link>
                    <Link to="#blog" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.blogRef); setIsMobileMenuOpen(false); }}>Blog</Link>
                    <Link to="#bootcamp" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.bootcampRef); setIsMobileMenuOpen(false); }}>Bootcamp</Link>
                    <Link to="#success-stories" className="hover:text-yellow-300" onClick={() => { scrollToSection(refs.successStoriesRef); setIsMobileMenuOpen(false); }}>Success Stories</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

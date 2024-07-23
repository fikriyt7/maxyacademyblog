import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    title: "Hackathon",
    date: "Soon 2024/2025",
    description: "Partisipasi dalam hackathon selama 3 hari untuk membangun website dan berkolaborasi dengan tim.",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Maxy Talks",
    date: "Soon 2024/2025",
    description: "Ikuti sesi Maxy Talks dan berbicara langsung dengan profesional industri.",
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    title: "Virtual Internship",
    date: "Soon 2024/2025",
    description: "Ikuti sesi Internship berkolaborasi dengan tim membuat website dengan studi case langsung dari perusahaan.",
    image: "https://images.unsplash.com/photo-1616587896649-79b16d8b173d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  }
];

const EventPoster = ({ title, date, description, image, link, onToggleDetails, showDetails }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white rounded-lg overflow-hidden shadow-lg m-4 flex-shrink-0 w-80"
      whileHover={{ scale: 1.05}}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <img className="w-full h-80 object-cover" src={image} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4">{date}</p>
        <button 
          onClick={onToggleDetails}
          className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
        >
          <span className="mr-2">{showDetails ? 'Tutup Detail' : 'Lihat Detail'}</span>
          <FontAwesomeIcon 
            icon={showDetails ? faArrowUp : faArrowDown} 
            className="text-xl"
          />
        </button>
        {showDetails && (
          <motion.div 
            className="mt-4 text-gray-200 bg-black bg-opacity-75 p-4 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <p>{description}</p>
            <a href={link} className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300 mt-2 block">
              Kunjungi Acara
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const EventList = () => {
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full relative container mx-auto px-4 py-6 bg-cover bg-center backdrop-blur-sm"
      style={{ backgroundImage: "url('https://media.istockphoto.com/id/1055056612/id/foto/coding-larut-malam.jpg?s=1024x1024&w=is&k=20&c=W8UkrFgLkmqoIEdHYW5BHaEAWHIjp5LKsRrx7l4hRWo=')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-5xl font-bold text-center mb-8 text-white">Upcoming Events</h1>
      <div className="relative flex flex-wrap justify-center gap-6 py-4">
        {events.map((event, index) => (
          <EventPoster 
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            link={event.link}
            showDetails={expandedEventIndex === index}
            onToggleDetails={() => toggleDetails(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EventList;

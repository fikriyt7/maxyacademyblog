import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={news.image} alt={news.title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
        <p className="text-gray-700 mb-4">{news.description}</p>
        <Link to={/news/${news.id}} className="text-yellow-500 hover:underline">Baca Selengkapnya</Link>
      </div>
    </div>
  );
};

export default NewsCard;
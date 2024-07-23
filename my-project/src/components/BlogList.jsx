import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogList = ({ blogs }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-base mb-4">{blog.description}</p>
              <Link
                to={blog.link}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

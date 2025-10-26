import React from 'react'
import { motion } from 'framer-motion'

export default function DestinationCard({ dest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-shadow transition-smooth"
    >
      <div className="h-44 md:h-56 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.place}
          className="w-full h-full object-cover transform transition-smooth"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{dest.place}</h3>
          <div className="text-sm text-yellow-500 font-bold">{'★'.repeat(Math.round(dest.rating))}</div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{dest.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-block text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">{dest.category}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Rating: {dest.rating}</span>
        </div>
      </div>
    </motion.div>
  )
}

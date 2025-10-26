import React, { useEffect, useMemo, useState } from 'react'
import DestinationCard from './components/DestinationCard'
import FilterBar from './components/FilterBar'
import data from './data/destinations.json'
import { motion } from 'framer-motion'

export default function App() {
  const [activeCat, setActiveCat] = useState('All')
  const [search, setSearch] = useState('')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const categories = useMemo(() => {
    const s = new Set(data.map(d => d.category))
    return Array.from(s)
  }, [])

  const filtered = useMemo(() => {
    return data.filter(d => {
      const matchCat = activeCat === 'All' ? true : d.category === activeCat
      const q = search.trim().toLowerCase()
      const matchSearch = q === '' ? true : (d.place.toLowerCase().includes(q) || d.description.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCat, search])

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Travel Explorer</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Discover curated destinations — responsive, animated, and with dark mode.</p>
          </div>
          <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">Built with React, Vite, TailwindCSS & Framer Motion</div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <FilterBar
            categories={categories}
            active={activeCat}
            onChange={setActiveCat}
            search={search}
            setSearch={setSearch}
            dark={dark}
            toggleDark={() => setDark(s => !s)}
          />
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map(dest => (
            <DestinationCard dest={dest} key={dest.id} />
          ))}
        </motion.div>

        <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Use the buttons above to filter. Search titles or descriptions. Enjoy ✈️</p>
        </footer>
      </div>
    </div>
  )
}

import React from 'react'

export default function FilterBar({ categories, active, onChange, search, setSearch, dark, toggleDark }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onChange('All')}
          className={`px-3 py-1 rounded-full text-sm transition-smooth ${active==='All' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 dark:bg-gray-700/40 dark:text-gray-200'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-3 py-1 rounded-full text-sm transition-smooth ${active===cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 dark:bg-gray-700/40 dark:text-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search destinations..."
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none"
        />
        <button
          onClick={toggleDark}
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm transition-smooth"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  )
}

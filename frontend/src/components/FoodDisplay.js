import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'
import { motion, AnimatePresence } from 'framer-motion'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const filtered = food_list.filter(item => category === "All" || item.category === category);

  return (
    <div className='py-8' id='FoodDisplay'>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <motion.h2 
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-3xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight'
          >
            {category === "All" ? "Top Selections" : `${category}`}
          </motion.h2>
          <motion.p 
            key={`${category}-count`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-3 text-[15px] font-inter"
          >
            {filtered.length} {filtered.length === 1 ? 'dish' : 'dishes'} available
          </motion.p>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-32 text-slate-400 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
          >
            <span className="text-8xl mb-6 opacity-50 grayscale">🍽️</span>
            <p className="text-2xl font-outfit font-bold text-slate-700">No dishes found</p>
            <p className="text-[15px] mt-2 font-inter">Try selecting a different category</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12'
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <FoodItem key={item._id} id={item._id} {...item} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FoodDisplay

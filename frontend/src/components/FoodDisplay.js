import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'
import { motion, AnimatePresence } from 'framer-motion'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const filtered = food_list.filter(item => category === "All" || item.category === category);

  return (
    <div className='py-8' id='FoodDisplay'>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <motion.h2 
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className='text-2xl md:text-3xl font-outfit font-medium text-surface-900 tracking-tight'
          >
            {category === "All" ? "All items" : category}
          </motion.h2>
          <motion.p 
            key={`${category}-count`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-surface-500 mt-2 text-[14px] font-inter"
          >
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </motion.p>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border border-surface-200/50 shadow-sm"
          >
            <p className="text-xl font-outfit font-medium text-surface-900">No items found</p>
            <p className="text-[14px] mt-2 font-inter text-surface-500">Select a different category to view more options.</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10'
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

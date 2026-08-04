import React, { useRef } from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import { motion, useInView } from "framer-motion";

const ExploreMenu = ({ category, setCategory }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="px-6 py-20 bg-surface-50" id="ExploreMenu" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] md:text-[48px] font-outfit font-medium text-surface-900 tracking-tight"
            >
              Menu
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-surface-500 md:text-right max-w-sm font-inter text-[15px] leading-relaxed"
          >
            Select a category to filter our extensive collection of premium dishes.
          </motion.p>
        </div>

        {/* Menu Items Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar relative items-center"
        >
          {menu_list.map((menu, index) => {
            const isSelected = category === menu.menu_name;
            
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setCategory((prev) => prev === menu.menu_name ? "All" : menu.menu_name)}
              >
                <div className={`
                  flex items-center gap-3 pr-5 pl-2 py-2 rounded-full transition-all duration-300 border
                  ${isSelected ? "bg-surface-900 border-surface-900 shadow-sm" : "bg-white border-surface-200 hover:border-surface-300"}
                `}>
                  <img
                    src={menu.menu_image}
                    alt={menu.menu_name}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                  />
                  <span className={`text-[14px] font-inter font-medium transition-colors duration-300 
                    ${isSelected ? "text-white" : "text-surface-600"}`}>
                    {menu.menu_name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreMenu;

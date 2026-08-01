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
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="px-6 py-24 bg-surface-50 relative overflow-hidden" id="ExploreMenu" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block bg-orange-100 text-orange-600 text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"
            >
              Our Menu
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-slate-900 tracking-tight"
            >
              Explore by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Category
              </span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 md:text-right max-w-sm font-inter text-[15px] leading-relaxed"
          >
            Discover your next favorite dish — from sizzling street food to gourmet fine dining. Every craving, covered.
          </motion.p>
        </div>

        {/* Menu Items Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 items-start justify-start hide-scrollbar relative"
        >
          {menu_list.map((menu, index) => {
            const isSelected = category === menu.menu_name;
            
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-5 cursor-pointer group w-[120px] md:w-[140px]"
                onClick={() => setCategory((prev) => prev === menu.menu_name ? "All" : menu.menu_name)}
              >
                <div className={`
                  relative rounded-[2rem] p-2 transition-all duration-300 bg-white shadow-sm group-hover:shadow-premium
                  ${isSelected ? "ring-2 ring-orange-500 shadow-lg scale-105" : "border border-slate-100"}
                `}>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      src={menu.menu_image}
                      alt={menu.menu_name}
                      className={`w-full aspect-square object-cover transition-transform duration-700 ease-out
                        ${isSelected ? "scale-110" : "group-hover:scale-110"}
                      `}
                    />
                  </div>
                  
                  {isSelected && (
                    <motion.div 
                      layoutId="category-outline"
                      className="absolute -inset-2 border-2 border-orange-500/30 rounded-[2.5rem] z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    ></motion.div>
                  )}
                </div>
                
                <p className={`text-[15px] font-outfit font-semibold text-center transition-colors duration-300 
                  ${isSelected ? "text-orange-600" : "text-slate-600 group-hover:text-slate-900"}`}>
                  {menu.menu_name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreMenu;

import React, { useState, useContext, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { setlogin, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsMenuVisible(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" }
  ];

  const isDarkHeader = location.pathname === "/" || location.pathname === "/about";
  const useLightText = isDarkHeader && !scrolled;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-b border-surface-200/60 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: 'smooth' });
            else navigate("/");
          }}
          className="cursor-pointer group flex items-center gap-2"
        >
          <img
            src={assets.logo}
            alt="Yumzy Logo"
            className={`w-32 transition-all duration-500 ${useLightText ? "brightness-0 invert opacity-100" : "opacity-90 group-hover:opacity-100"}`}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                onClick={(e) => {
                  if (location.pathname === link.path) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={({ isActive }) => `
                  relative font-inter text-[14px] font-medium transition-colors duration-300
                  ${isActive 
                    ? (useLightText ? "text-white" : "text-surface-900") 
                    : (useLightText ? "text-white/70 hover:text-white" : "text-surface-500 hover:text-surface-900")}
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${useLightText ? "bg-white" : "bg-surface-900"}`}
                    initial={false}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#Contact" className={`font-inter text-[14px] font-medium transition-colors duration-300 ${useLightText ? "text-white/70 hover:text-white" : "text-surface-500 hover:text-surface-900"}`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          
          {/* Cart Icon */}
          <button 
            onClick={() => {
              if (token) navigate("/cart");
              else { alert("Please sign in to access the cart."); setlogin(true); }
            }}
            className={`relative p-2.5 rounded-full transition-all duration-300 ${useLightText ? "hover:bg-white/10 text-white" : "hover:bg-surface-100 text-surface-900"}`}
          >
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {token && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_0_2px_var(--bg-color)]" style={{'--bg-color': useLightText && !scrolled ? 'transparent' : 'white'}}></span>
            )}
          </button>

          {/* Auth Button or Profile Dropdown */}
          {!token ? (
            <button
              onClick={() => setlogin(true)}
              className={`hidden md:flex items-center justify-center font-inter text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
                useLightText 
                  ? "bg-white text-surface-900 hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                  : "bg-surface-900 text-white hover:bg-surface-800 shadow-premium"
              }`}
            >
              Sign In
            </button>
          ) : (
            <div className="relative">
              <button 
                onClick={toggleMenuVisibility}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 focus:outline-none ${useLightText ? "border-white/20 hover:border-white/40 bg-white/10" : "border-surface-200 hover:border-surface-300 bg-surface-50"}`}
              >
                <svg className={`w-4 h-4 ${useLightText ? "text-white" : "text-surface-700"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isMenuVisible && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-surface-100 overflow-hidden py-1.5 z-50"
                  >
                    <div className="px-4 py-2 border-b border-surface-50 mb-1.5">
                      <p className="text-[11px] font-medium text-surface-400 uppercase tracking-wider">Account</p>
                    </div>
                    
                    <button
                      onClick={() => { setIsMenuVisible(false); navigate("/myorders"); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-inter text-surface-700 hover:bg-surface-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Order History
                    </button>
                    
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-inter text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

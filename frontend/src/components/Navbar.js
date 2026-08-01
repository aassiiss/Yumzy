import React, { useState, useContext, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { login, setlogin, token, setToken } = useContext(StoreContext);
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

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-premium border-b border-gray-100 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => navigate("/")}
          className="cursor-pointer group flex items-center gap-2"
        >
          <img
            src={assets.logo}
            alt="Yumzy Logo"
            className="w-32 md:w-36 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => `
                  relative font-medium text-[15px] transition-colors duration-300
                  ${isActive ? "text-orange-600 font-semibold" : "text-gray-600 hover:text-orange-500"}
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#Contact" className="font-medium text-[15px] text-gray-600 hover:text-orange-500 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-5 md:gap-7 relative">
          
          {/* Cart Icon */}
          <button 
            onClick={() => {
              if (token) navigate("/cart");
              else { alert("Please sign in to access the cart."); setlogin(true); }
            }}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <img src={assets.basket_icon} alt="Cart" className="w-6 h-6 opacity-80" />
            {token && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
            )}
          </button>

          {/* Auth Button or Profile Dropdown */}
          {!token ? (
            <button
              onClick={() => setlogin(true)}
              className="hidden md:block bg-slate-900 text-white font-medium px-6 py-2.5 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          ) : (
            <div className="relative">
              <button 
                onClick={toggleMenuVisibility}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border-2 border-transparent hover:border-orange-200 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="w-5 h-5 opacity-70"
                />
              </button>
              
              <AnimatePresence>
                {isMenuVisible && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden py-2"
                  >
                    <div className="px-4 py-3 border-b border-gray-50 mb-2">
                      <p className="text-sm font-semibold text-gray-900">My Account</p>
                    </div>
                    
                    <button
                      onClick={() => { setIsMenuVisible(false); navigate("/myorders"); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <img src={assets.bag_icon} alt="Orders" className="w-4 h-4 opacity-70" />
                      Order History
                    </button>
                    
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <img src={assets.logout_icon} alt="Logout" className="w-4 h-4 opacity-70" />
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

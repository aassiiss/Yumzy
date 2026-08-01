import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [currState, setCurrState] = useState("Login");
  const { setlogin, url, setToken } = useContext(StoreContext);
  const [data, setdata] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const OnchangeHandler = (event) => {
    const { name, value } = event.target;
    setdata({ ...data, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let newurl = url + (currState === "Login" ? "/api/v1/user/login" : "/api/v1/user/signup");
    
    try {
      const response = await axios.post(newurl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setlogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder-slate-400";

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex justify-center items-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[440px]"
      >
        <form
          onSubmit={onSubmit}
          className="bg-white rounded-3xl shadow-premium p-8 flex flex-col gap-5 relative overflow-hidden"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setlogin(false)}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors group"
          >
            <img src={assets.cross} className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" alt="close" />
          </button>

          {/* Header */}
          <div className="mb-2 mt-2">
            <h1 className="text-3xl font-outfit font-bold text-slate-900 tracking-tight">
              {currState === "Login" ? "Welcome back" : "Create account"}
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-inter">
              {currState === "Login"
                ? "Enter your details to access your account."
                : "Sign up to start ordering premium food."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currState}
              initial={{ opacity: 0, x: currState === "Login" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currState === "Login" ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              {currState === "Signup" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={data.name}
                  onChange={OnchangeHandler}
                  className={inputClass}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={OnchangeHandler}
                className={inputClass}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={OnchangeHandler}
                className={inputClass}
                required
              />
            </motion.div>
          </AnimatePresence>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-1">
            <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
            <p className="text-xs text-slate-500 leading-relaxed font-inter">
              By continuing, you agree to our{" "}
              <span className="text-slate-900 font-medium cursor-pointer hover:underline">Terms of Service</span> and{" "}
              <span className="text-slate-900 font-medium cursor-pointer hover:underline">Privacy Policy</span>.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Please wait...
              </>
            ) : currState}
          </button>

          {/* Switch */}
          <div className="text-center mt-2">
            <p className="text-[14px] text-slate-500 font-inter">
              {currState === "Login" ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                onClick={() => setCurrState(currState === "Login" ? "Signup" : "Login")}
              >
                {currState === "Login" ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;

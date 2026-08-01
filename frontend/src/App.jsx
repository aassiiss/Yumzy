import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { StoreContext } from "./context/StoreContext";
import Verify from "./pages/Verify";
import { useContext } from "react";
import MyOrders from "./pages/MyOrders";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

function App() {
  const { login } = useContext(StoreContext);
  return (
    <>
      {login ? (<Login/>) : (<></>)}
      <div className="min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

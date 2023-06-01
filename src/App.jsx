import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/layouts/Navbar";
import Footer from "./assets/layouts/Footer";
import AboutUs from "./assets/pages/AboutUs";
import ContactUs from "./assets/pages/ContactUs";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Home from "./assets/pages/Home";
import HotelsProvider from "./assets/pages/HotelsProvider";
import HotelDetails from "./assets/pages/HotelDetails";
import Payment from "./assets/pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hotelsprovider" element={<HotelsProvider />} />
          <Route path="/hoteldetails" element={<HotelDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

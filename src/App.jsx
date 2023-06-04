import 'flowbite';
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useReducer } from 'react'
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
import ProfilePage from "./assets/pages/ProfilePage";
import { Main } from "./assets/pages/Admin/Main Page/Main";
import { DashBoard } from "./assets/pages/Admin/DashBoard";
import { Nav } from "./assets/pages/Admin/Nav";
import { Aside } from "./assets/pages/Admin/Aside";
import { Hotels } from "./assets/pages/Admin/Providers Page/Hotels";
import { Users } from "./assets/pages/Admin/Users Page/Users";
import { Rooms } from "./assets/pages/Admin/Rooms Page/Rooms";
import { Requests } from "./assets/pages/Admin/Requests Page/Requests";
import ProviderLogin from "./assets/pages/server_provider/ProviderLogin";
import ProviderSignup from "./assets/pages/server_provider/ProviderSignup";
import Profile from "./assets/pages/server_provider/Profile";
import NotFoundPage from "./assets/pages/NotFoundPage";
import axios from "axios";
function App() {
  const [userType, setUserType] = useState('client');
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0)


  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  useEffect(() => {
    axios.get("http://localhost:5500/api/auth/userType", {
      headers: {
        'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` || null
      }
    })
      .then((res) => {
        res.data.error == 'Null token' ? 
        setUserType('client') :
        setUserType(res.data.user_type)
      })
  }, [reducer])

  return (
    <>
      {userType === "admin" && (
        <BrowserRouter>
          <Nav />
          <Aside />
          <Routes>
            <Route path="/" element={<DashBoard forceUpdate={forceUpdate}/>} />
            <Route path="/main" element={<Main  />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/users" element={<Users />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      )}
      {userType == "client" && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login forceUpdate={forceUpdate} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hotelsprovider" element={<HotelsProvider />} />
            <Route path="/hoteldetails" element={<HotelDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/userprofile" element={<ProfilePage />} />
            <Route path="/providerlogin" element={<ProviderLogin forceUpdate={forceUpdate} />} />
            <Route path="/providersignup" element={<ProviderSignup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {userType == "provider" && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/providerprofile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/providerprofile" element={<Profile />} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

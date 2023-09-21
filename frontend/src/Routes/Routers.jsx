import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import Doctors from "../Pages/Doctors/Doctors";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     
      
    </Routes>
  );
};

export default Routers;

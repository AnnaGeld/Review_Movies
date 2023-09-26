import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import Movies from "../Pages/Movies/Movie";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


import MoviesDetails from "../Pages/Movies/MoviesDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MoviesDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
     
      
    </Routes>
  );
};

export default Routers;

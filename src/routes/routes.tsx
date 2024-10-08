import { Routes , Route } from "react-router-dom";
import Home from "../Page/Home";






import React from 'react'

const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Artist" element={<Home />} />
    <Route path="/Album" element={<Home />} />
    <Route path="/Genres" element={<Home />} />
</Routes>
    
    </>
  )
}

export default AllRoutes
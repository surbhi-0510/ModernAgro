import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Current} from '../Current/Current';
import {Fivedays} from '../Fivedays/Fivedays';
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/current" element={<Current/>}/>
        <Route path="/fivedays" element={<Fivedays/>}/>
    </Routes>
  )
}

export default Allroutes
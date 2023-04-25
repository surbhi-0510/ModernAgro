import React from "react";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Calculator from "./Components/Calculator";
import ProfitLoss from "./Components/ProfitLoss";
import Unitconversion from "./Components/Unitconversion";

function App() {
  return (
    <div>
      {/* <Calculator/> */}
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Calculator/>}></Route>
        <Route path={"/profit-loss"} element={<ProfitLoss/>}></Route>
        <Route path={"/unit-conversion"} element={<Unitconversion/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

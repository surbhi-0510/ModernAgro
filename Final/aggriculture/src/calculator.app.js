import React from "react";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import NavBar from "./calculator.component/Components/NavBar";
import Calculator from "./calculator.component/Components/Calculator";
import ProfitLoss from "./calculator.component/Components/ProfitLoss";
import Unitconversion from "./calculator.component/Components/Unitconversion";

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
import React from "react";
import "./ProfitLoss.css";

const ProfitLoss = () => {
  let [CP, setCp] = React.useState("");
  let [SP, setSp] = React.useState("");
  let buttonClicked = () => {
    // console.log("*", CP, SP);
    if (CP !== "" && SP !== "") {
      let cont = document.querySelector("#cont");
      cont.innerHTML = "";
      let profit__loss = document.createElement("div");
      let percentage = document.createElement("div");
      // console.log("*", CP, SP);
      if (SP - CP > 0) {
        const profit = SP - CP;
        const profit_percent = ((profit / CP) * 100).toFixed(2);
        // console.log("profit", profit);
        // profit__loss.innerHTML = "Profit : " + profit;
        profit__loss.innerHTML = "लाभ : " + profit;
        // percentage.innerHTML = "Profit Percentage : " + profit_percent;
        percentage.innerHTML = "लाभ प्रतिशत : " + profit_percent;
      } else if (SP - CP < 0) {
        const loss = CP - SP;
        const loss_percent = ((loss / CP) * 100).toFixed(2);
        // console.log("loss", loss);
        // profit__loss.innerHTML = "Loss : " + loss;
        profit__loss.innerHTML = "हानि : " + loss;
        // percentage.innerHTML = "Loss Percentage: " + loss_percent;
        percentage.innerHTML = "हानि प्रतिशत : " + loss_percent;
      } else {
        profit__loss.innerHTML = "No Profit No Loss";
        percentage.innerHTML = "";
      }
      cont.append(profit__loss, percentage);
    } else {
      alert("Please Fill Both Details!!");
    }
  };
  return (
    <div className="apps">
      <div className="app_calculator_profitloss">
        <div className="priceDiv">
          {/* <div>Cost Price(CP): </div> */}
          <div>लागत मूल्य (सी.पी.): </div>
          <input type="number" onChange={(e) => setCp(e.target.value)} />
        </div>
        <div className="priceDiv">
          {/* <div>Selling Price(SP): </div> */}
          <div>विक्रय मूल्य (एस.पी.): </div>
          <input type="number" onChange={(e) => setSp(e.target.value)} />
        </div>
        {/* <button onClick={() => buttonClicked()}>Calculate</button> */}
        <button onClick={() => buttonClicked()}>गणना</button>
        <div id="cont"></div>
      </div>
    </div>
  );
};

export default ProfitLoss;

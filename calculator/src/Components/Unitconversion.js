import React from "react";
import "./Unitconversion.css";
const Unitconversion = () => {
  let factors1 = [1, 0.001, 0.000621, 3.28084, 1.09361];
  let factors2 = [1000, 1, 0.621, 3280.84, 1093.61];
  let factors3 = [1609.34, 1.60934, 1, 5280, 1760];
  let factors4 = [0.3048, 0.0003048, 0.000189394, 1, 0.333333];
  let factors5 = [0.9144, 0.0009144, 0.000568182, 3, 1];
  let factors = [factors1, factors2, factors3, factors4, factors5];

  function convertUnit(e) {
    e.preventDefault();
    console.log("form");
    // Grab the correct conversion factor from our arrays
    let fromIndex = document.lengthCon.fromUnit.selectedIndex;
    let toIndex = document.lengthCon.toUnit.selectedIndex;
    let factor = factors[fromIndex][toIndex];
    // Create the text that we want to write on the middle line
    let fromUnitText =
      document.lengthCon.fromUnit.options[
        document.lengthCon.fromUnit.selectedIndex
      ].text;
    let toUnitText =
      document.lengthCon.toUnit.options[document.lengthCon.toUnit.selectedIndex]
        .text;
    document.getElementById("formula").innerHTML =
      fromUnitText + " = " + factor + " " + toUnitText;
    // Check the input box to make sure we have a valid number
    if (isNaN(document.lengthCon.fromValue.value))
      document.getElementById("toValue").innerHTML = "Not a valid number";
    // Output the converted number...last number on last line
    else {
      // document.getElementById("toValue").innerHTML = "Answer = "+factor * document.lengthCon.fromValue.value;
      document.getElementById("toValue").innerHTML =
        "उत्तर = " + factor * document.lengthCon.fromValue.value;
    }
  }

  return (
    <div className="appss">
      <div id="calc" className="app_calculator_unitconvert">
        <form name="lengthCon" onSubmit={convertUnit}>
          {/* <p className="title pUnitConvert">To</p> */}
          <p className="title pUnitConvert">किस से</p>
          <select name="fromUnit" onChange={convertUnit}>
            {/* <option> meters</option>
            <option> kilometers</option>
            <option> miles</option>
            <option> feet </option>
            <option> yards</option> */}
            <option> मीटर की दूरी पर</option>
            <option> किलोमीटर</option>
            <option> मील</option>
            <option> फीट </option>
            <option> गज</option>
          </select>

          {/* <p className="title pUnitConvert">From/p> */}
          <p className="title pUnitConvert">किस में</p>
          <select name="toUnit" onChange={convertUnit}>
            {/* <option> meters</option>
            <option> kilometers</option>
            <option> miles</option>
            <option> feet </option>
            <option> yards</option> */}
            <option>मीटर की दूरी पर</option>
            <option> किलोमीटर</option>
            <option> मील</option>
            <option> फीट </option>
            <option> गज</option>
          </select>

          <p colSpan="4" id="formula" className="conversion pUnitConvert">
            1 मीटर = 1 मीटर
          </p>

          {/* <p className="pUnitConvert">Enter value below:</p> */}
          <p className="pUnitConvert">नीचे मान दर्ज करें:</p>
          <p className="pUnitConvert">
            <input
              type="number"
              name="fromValue"
              className="inputUnitConvert"
              // value=""
            />
          </p>
          <input
            type="submit"
            className="submit inputUnitConvert"
            value="सब्मिट करें"
          />
          <p className="pUnitConvert">
            <span id="toValue"> 1</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Unitconversion;

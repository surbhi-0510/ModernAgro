let buttclicked = () => {
  let CP = document.querySelector("#cps").value;
  console.log('cp',CP)
  let SP = document.querySelector("#sps").value;
  console.log('sp',SP)
  if(CP!="" && SP!="")
  {
    let cont = document.querySelector("#cont");
    cont.innerHTML="";
    let profit__loss = document.createElement("div");
    let percentage = document.createElement("div");
    console.log('*',CP,SP)
    if (SP-CP>0) {
        const profit = SP - CP;
        const profit_percent = ((profit / CP) * 100).toFixed(2);

        console.log('profit',profit)

        profit__loss.innerHTML = "Profit : " + profit;
        percentage.innerHTML = "Profit Percentage : " + profit_percent;
    } 
    else if (SP-CP<0) {
        const loss = CP - SP;
        const loss_percent = ((loss / CP) * 100).toFixed(2);

        console.log('loss',loss)

        profit__loss.innerHTML = "Loss : " + loss;
        percentage.innerHTML = "Loss Percentage : " + loss_percent;
    } else {
        profit__loss.innerHTML = "No Profit No Loss";
        percentage.innerHTML = "";
    }
    cont.append(profit__loss, percentage);
  }
  else{
    alert("Please Fill Both Details!!")
  }
};

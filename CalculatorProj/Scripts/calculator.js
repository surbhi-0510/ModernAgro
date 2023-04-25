// numbers calculation
var but = document.querySelectorAll("#keyboard>div");
var disp = document.querySelector("#ip");
for (let i = 0; i < but.length; i++) {
  but[i].addEventListener("click", press);
}
function press() {
  var key = event.target.innerText;
  switch (key) {
    case "C":
      disp.innerText = "";
      break;
    case "=":
      if (disp.innerText != "") {
        disp.innerText = eval(disp.innerText);
      }
      break;
    default:
      disp.innerText += key;
  }
}


// direct to new pages
var buts = document.querySelectorAll('#extra>div')
for(let i=0;i<buts.length;i++){
  buts[i].addEventListener('click',redirect)
}
function redirect(){
  var key = event.target.innerText;
  // console.log('key',key)
  if(key=="Profit/Loss"){
    window.location.href="profit-loss.html"
  }
  else{
    window.location.href="areaconvert.html"
  }
}


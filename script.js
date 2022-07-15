 //change properties of site when pressing checkbox
    function clck(checkboxx) {
if(checkboxx.checked){
    
    document.getElementById('nightModeText').style.display='block';
    document.getElementById("upper1").style.width = "40%";
    document.getElementById("upper1").style.height = "537px";
    document.getElementById("startFunction").style.padding ="0px 0px 0px 0px";
    document.getElementById("bodyy").style.border = "3px solid silver";
    document.getElementById("bodyy").style.background = "gray";
    document.getElementById("starter").innerHTML = "Click there to change site to day mode!";
    document.getElementById("upper1").style.background = "silver";
    document.getElementById("upper2").style.background = "silver";
    document.getElementById("down1").style.background = "silver";
    document.getElementById("down2").style.background = "silver";
    document.getElementById("nightModeText").style.animation = "show 2s forwards";
    document.getElementById("bodyy").style.animation = "nightFont 2s forwards";
    document.getElementById("sun").style.animation = "hide 0.5s forwards";
    document.getElementById('moon').style.display= 'block';
    document.getElementById("moon").style.animation = "show 2s forwards";
}
else {
  document.getElementById("bodyy").style.animation = "dayFont 2s forwards";
    document.getElementById("upper1").style.border = "none";
    document.getElementById("upper1").style.width = "40%";
    document.getElementById("upper1").style.height = "537px";
    document.getElementById("startFunction").style.margin ="100px 6px 6px 50px";
    document.getElementById("bodyy").style.border = "3px solid greenyellow";
    document.getElementById("bodyy").style.background = "green";
    document.getElementById("starter").innerHTML = "Click there to change site to night mode!";
    document.getElementById("upper1").style.background = "greenyellow";
    document.getElementById("upper2").style.background = "greenyellow";
    document.getElementById("down1").style.background = "greenyellow";
    document.getElementById("down2").style.background = "greenyellow";
    document.getElementById("sun").style.animation = "show 2s forwards";
    document.getElementById("moon").style.animation = "hide 2s forwards";
    document.getElementById("nightModeText").style.animation = "hide 2s forwards";
    
}
}
//clock script
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  //update every second
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

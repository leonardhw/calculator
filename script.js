"use strict";
let state = "none";
let addsub = [];
let divmult = 1;
let prevVal = 0;
let currentval = "";
let fullVal = "";
let sum = 0;

const updateScreen = () => {
  if (isNaN(parseInt(currentval))) {
    $("#screen").html("");
  } else {
    $("#screen").html(currentval);
  }
};
const updateScreenfull = () => {
  $("#screenfull").html(fullVal);
};
const cleardata = () => {
  currentval = "";
  fullVal = "";
  sum = 0;
  prevVal = 0;
  state = "none";
  addsub = [];
};
const updateMode = (input) => {
  if (state != "none") {
    switch (state) {
      case "-":
        addsub.push(prevVal);
        prevVal = 0 - parseInt(currentval);
        currentval = "";
        state = input;
        break;
      case "+":
        addsub.push(prevVal);
        prevVal = parseInt(currentval);
        currentval = "";
        state = input;
        break;
      case "multiply":
        prevVal = prevVal * parseInt(currentval);
        currentval = "";
        state = input;
        break;
      case "divide":
        prevVal = prevVal / parseInt(currentval);
        currentval = "";
        state = input;
        break;
    }
  } else if (input != "=") {
    prevVal = parseInt(currentval);
    currentval = "";
    sum = 0;
    state = input;
  }
  if (input == "=") {
    if (!prevVal) prevVal = parseInt(currentval);
    addsub.push(prevVal);
    console.log(addsub, "ADD SUB");
    console.log(prevVal, "prevVal");
    for (let i = 0; i < addsub.length; i++) {
      sum += addsub[i];
    }
  }
};
$("#0").click(() => {
  currentval += "0";
  updateScreen();
});
$("#1").click(() => {
  currentval += "1";
  updateScreen();
});
$("#2").click(() => {
  currentval += "2";
  updateScreen();
});
$("#3").click(() => {
  currentval += "3";
  updateScreen();
});
$("#4").click(() => {
  currentval += "4";
  updateScreen();
});
$("#5").click(() => {
  currentval += "5";
  updateScreen();
});
$("#6").click(() => {
  currentval += "6";
  updateScreen();
});
$("#7").click(() => {
  currentval += "7";
  updateScreen();
});
$("#8").click(() => {
  currentval += "8";
  updateScreen();
});
$("#9").click(() => {
  currentval += "9";
  updateScreen();
});
$("#-").click(() => {
  if (currentval != "") {
    fullVal += currentval + " - ";
    updateScreenfull();
    updateMode("-");
    currentval = "";
    updateScreen();
  }
});
$("#C").click(() => {
  cleardata();
  updateScreenfull();
  updateScreen();
});
$("#plus").click(() => {
  if (currentval != "") {
    fullVal += currentval + " + ";
    updateScreenfull();
    updateMode("+");
    currentval = "";
    updateScreen();
  }
});
$("#multiply").click(() => {
  if (currentval != "") {
    fullVal += currentval + " &times ";
    updateScreenfull();
    updateMode("multiply");
    updateScreen();
  }
});
$("#divide").click(() => {
  if (currentval != "") {
    fullVal += currentval + " &divide ";
    updateScreenfull();
    updateMode("divide");
    updateScreen();
  }
});
$("#equals").click(() => {
  fullVal += currentval + " = ";
  updateMode("=");
  // fullVal += sum;
  currentval = sum;
  updateScreenfull();
  updateScreen();
  cleardata();
});

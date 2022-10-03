var billAmount = "";
var digitCount = 0; //Counts the numbers
let decimalPoint = false;
var allDigitButtons = document.querySelectorAll(".digits");

document.addEventListener("keydown", function(e) {
  typeValue(e.key);
});

for (let i = 0; i < allDigitButtons.length; i++) {
  allDigitButtons[i].addEventListener("click", function() {
    var buttonValue = this.value;
    typeValue(buttonValue);
  });
}

document.querySelector(".all-clear").addEventListener("click", function() {
  setScreenValue(0);
  digitCount = 0;
  decimalPoint = false;
  billAmount = "";
});



//Function that puts user input into calculator screen
function typeValue(key) {
  if (isFinite(key) && digitCount < 9) {
    //Check if the digit is 0 and decimalPoint isn't true
    if (key == "0" && !decimalPoint && checkEmpty()) {}
    else {
      billAmount += key;
      digitCount++;
      setScreenValue(billAmount);
    }
    //Checks if user adds decimal point
  } else if (key === '.' && !billAmount.includes('.')) {
    if (checkEmpty()) {
      billAmount += "0";
    }
    billAmount += key;
    decimalPoint = true;
    setScreenValue(billAmount);
  }
  //Checks if user uses backspace
  else if (key === 'Backspace') {
    if (billAmount.slice(-1) != '.') { //Checks if last element in string is peroid, if NOT reduce digitCount
      digitCount--;
    }
    billAmount = billAmount.slice(0, -1);
    if (checkEmpty()) {
      setScreenValue(0);
      digitCount = 0;
      decimalPoint = false;
    } else {
      setScreenValue(billAmount);
    }
  }
}

//Function that checks if user input is empty, sets screen value to 0
function checkEmpty() {
  if (billAmount.length == 0) {
    return true;
  } else {
    return false
  }
}

//Function that sets the screen's value
function setScreenValue(screenValue) {
  document.getElementById("calculator-screen").value = screenValue;
}

var bill = 0.0;
var billWithTip = 0.0;
var tipPercent = 0.0;
var tip = 0.0;
let inputValid = false;
var temp;


//Bill section
//Checks if the bill input is valid
document.querySelector(".next-btn").addEventListener("click", function(){
  inputValid = false;
  if(checkValid()){
    bill = temp;    //Stores value of the bill
    temp = document.getElementById("next");
    document.getElementsByClassName("form-label")[0].innerHTML = "Enter Amount"
    temp.href = "#service";
  }else{
    temp = document.getElementById("next");
    document.getElementsByClassName("form-label")[0].innerHTML = "Please Enter Valid Amount"
    temp.href = "#bill";
  }
});

//Adds action listener to all buttons in Rate section
for (let i = 0; i < 4; i++){
  document.querySelectorAll("#rate-btn")[i].addEventListener("click", function(){
    tipPercent = document.querySelectorAll(".btn")[i].value;
    if(checkValid()){
      this.href="#receipt";
      addReceiptValue(inputValid)
    }else{
      this.href = "#bill";
    }
  });
}

//Rounds-up the bill
document.getElementsByClassName("btn-roundup")[0].addEventListener("click", function(){
  var text = document.getElementById("new-bill-amount");
  text.innerHTML = Math.ceil(billWithTip);
});

//Function that sets inputValid that checks if bill is entered correctly
function checkValid(){
  temp = document.getElementById("typeNumber").value;
  if (temp > 0 && !temp.includes("e")){
    inputValid = true;
    return inputValid;
  } else{
    return inputValid;
  }
}

//Function that adds value to the receipt
function addReceiptValue(inputValid, i){
  var tipText = document.getElementById("tip");
  var billText = document.getElementById("bill-amount");
  var newBillText = document.getElementById("new-bill-amount");
  if(checkValid){
    tip = parseFloat(tipPercent*bill).toFixed(2);
    billWithTip = (parseFloat(bill) + parseFloat(tip)).toFixed(2);
    billText.innerHTML= bill;
    tipText.innerHTML = tip;
    newBillText.innerHTML = billWithTip;
  }
}


function helpMessage(){
alert("[HELP]: Select the \'Begin\' button to start and it will guide you through the whole process. At the end, it will give you your receipt which will calculate your total bill based on your answers.");
}

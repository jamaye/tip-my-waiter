var billAmount = 0.0;
var tipPercent = 0.0;
var tip = 0.0;
let inputValid = false;
var temp;


//Bill section
//Checks if the input is valid
document.querySelector(".next-btn").addEventListener("click", function(){
  inputValid = false;
  temp = document.getElementById("typeNumber").value;
  if(checkValid(temp)){
    console.log("inputValid:" + inputValid);    //
    billAmount = temp;    //Stores value of the bill
    temp = document.getElementById("next");
    document.getElementsByClassName("form-label")[0].innerHTML = "Enter Amount"
    temp.href = "#service";
  }else{
    console.log("inputValid:" + inputValid);   //
    temp = document.getElementById("next");
    document.getElementsByClassName("form-label")[0].innerHTML = "Please Enter Valid Amount"
    temp.href = "#bill";
  }
});

function checkValid(value){
  var label ="";
  if (temp > 0 && !temp.includes("e")){
    inputValid = true;
    return inputValid;
  } else{
    document.getElementById("typeNumber").value = "";
    return inputValid;
  }
}


//Rating Section
for (let i = 0; i < 4; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    tipPercent = this.value;
    checkToContinue(inputValid, i)
  });
}


function checkToContinue(inputValid, i){
  var text = document.getElementById("tip");
  if(inputValid == true){
    text.innerHTML = parseFloat(tipPercent*billAmount).toFixed(2);
  }
}

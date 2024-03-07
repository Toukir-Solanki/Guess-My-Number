"use strict";

// --------- Generated Random numbers ----------//
const number_display = Math.trunc(Math.random() * 20 + 1);
console.log(number_display);

//-----------------------------------------------------------



//---------------Reload the page(again button)---------------
document.querySelector('.again').addEventListener('click', function(){
   location.reload();
})

//---------------updating the status-------------------------
let score_board = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess_value = Number(document.querySelector(".guess").value);

  if (!guess_value) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess_value === number_display) {
    document.querySelector(".message").textContent = "✅ Correct Number";
    document.querySelector(".number").textContent = number_display;
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  } else if (guess_value > number_display) {
   if(score_board > 1){
      document.querySelector(".message").textContent = "📈 Number is too big!";
      score_board--;
      document.querySelector(".score").textContent = score_board;
   }else{
      document.querySelector(".message").textContent = "💥 Gamer Over Boss :(";
      document.querySelector(".score").textContent = 0;
   }
  } else if (guess_value < number_display) {
   if(score_board > 1){
      document.querySelector(".message").textContent = "📉Number is too small!";
    score_board--;
    document.querySelector(".score").textContent = score_board;
   }else{
      document.querySelector(".message").textContent = "💥 Gamer Over Boss :(";
      document.querySelector(".score").textContent = 0;
   }
    
  }
});
//-----------------------------------------------------------
 


"use strict";

// --------- Generated Random numbers -----------------------
const number_display = Math.trunc(Math.random() * 20 + 1);

//-----------------------------------------------------------


//---------------Reload the page(again button)--------------------------
document.querySelector('.again').addEventListener('click', function(){
   location.reload();
})
//----------------------------------------------------------------------



//---------------updating the status---------------------------------------
let score_board = 20;

document.querySelector(".check").addEventListener("click", function () {
 const guess_value = Number(document.querySelector(".guess").value);
 const messageElement = document.querySelector(".message");
 const scoreElement = document.querySelector(".score");
 const numberElement = document.querySelector(".number");
 const bodyElement = document.querySelector('body');

 if (!guess_value) {
    messageElement.textContent = "⛔ No Number";
 } else if (guess_value === number_display) {
    messageElement.textContent = "✅ Correct Number";
    numberElement.textContent = number_display;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
 } else {
    const message = guess_value > number_display ? "📈 Number is too big!" : "📉 Number is too small!";
    if (score_board > 1) {
      messageElement.textContent = message;
      score_board--;
      scoreElement.textContent = score_board;
    } else {
      messageElement.textContent = "💥 Gamer Over Boss :(";
      scoreElement.textContent = 0;
    }
 }
});

//------------------------------------------------------------------------------
 


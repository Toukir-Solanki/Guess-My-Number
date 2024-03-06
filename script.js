"use strict";

document.querySelector(".check").addEventListener("click", function () {
   const guess_value = Number(document.querySelector('.guess').value);
   console.log(guess_value);

   if (!guess_value){
    document.querySelector('.message').textContent = "⛔ No Number"
   }





});



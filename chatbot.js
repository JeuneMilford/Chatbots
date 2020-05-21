const userInput =document.querySelector("userInput"); 

const submit =document.querySelector("submit"); 

const weightloss =document.querySelector("weightloss"); 

 
 

submit.addEventListener("click", response); 

 
 
 

function response() 
( 

    weightloss.textContent ="Hello" + userInput.value; 
// სამი ღილაკი, +1, -1 და reset. 
const number = document.querySelector("#number");
const plusOne = document.querySelector("#plusOne");
const minusOne = document.querySelector("#minusOne");
const restBnt = document.querySelector("#restBnt");
let count = 0

plusOne.addEventListener("click",function(){
  count ++;
  number.textContent = count;
})

minusOne.addEventListener("click",function(){
  count --;
  number.textContent = count;
})

restBnt.addEventListener("click",function(){
  count = 0
  number.textContent = count;
})

// ფერების გადამრთველი ფუნქციები
const buttons = document.querySelector("#buttons");
const redBtn = document.querySelector("#redBtn");
const orangedBtn = document.querySelector("#orangedBtn");
const greenredBtn = document.querySelector("#greenredBtn");
const yellowBtn = document.querySelector("#yellowBtn");
const purpleBtn = document.querySelector("#purpleBtn");


function colors(color){
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = color;
  buttons.appendChild(box);
}

redBtn.addEventListener("click", function() {
  colors("red")
});

orangedBtn.addEventListener("click", function() {
  colors("orange")
});

greenredBtn.addEventListener("click", function() {
  colors("green")
});

yellowBtn.addEventListener("click", function() {
  colors("yellow")
});

purpleBtn.addEventListener("click", function() {
  colors("purple")
});



// ToDo list


const inp = document.querySelector("#inp");
const inputBtn = document.querySelector("#inputBtn");
const list = document.querySelector("#list");

inputBtn.addEventListener("click", function() {
  const text = inp.value;
  if (text === "") return; 

  const p = document.createElement("p"); 
  p.textContent = text;

  list.appendChild(p);
  inp.value = ""; 
});









console.log(inputBtn);











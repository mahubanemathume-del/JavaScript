  //Activity 1
document.getElementById("button1").addEventListener("click",function (){
        document.getElementById ("title").textContent="Hello Desiree!";
})
  //Activity 2  
document.getElementById("button2").addEventListener("click",function (){
    document.querySelector("body").style.backgroundColor = "aqua";
})
  //Activity 4
document.getElementById("button4").addEventListener("click",function (){
    document.querySelectorAll(".heading").forEach(h => h.style.color = "red");
})
  //Activity 3
document.getElementById("button3").addEventListener("click",function () {
  document.getElementById("info");
  info.style.display = (info.style.display === "none") ? "block" : "none";
});
  //Activity 5
let counter = 0;
document.getElementById("button5").addEventListener("click", function () {
    counter++;
    document.getElementById("count").textContent = counter;
  });
document.getElementById("button6").addEventListener("click", function () {
    counter--;
    document.getElementById("count").textContent = counter;
  });

   //Challenging Activity
 let score = 0;  
const buttons = document.querySelectorAll(".answer");
    buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      if (btn.dataset.correct === "true") {
        score = 1; 
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("result").style.color = "green";
      } else {
        score = -1;
        document.getElementById("result").textContent = "Incorrect!";
        document.getElementById("result").style.color = "red";
      }
      document.getElementById("score").textContent = score;
    });
  });

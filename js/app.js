let words =["Sevinc","Programmer", "Photographer"]
const element=document.getElementById("demo");
currentWord = -1;
window.setInterval(function(){ // 4
    currentWord++; // 5
    if(currentWord > words.length) currentWord = 0; // 6
    element.textContent = words[currentWord]; // 7
 }, 2000); // -- 4 

//  SCroll up and down
// Register
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
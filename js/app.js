let words =["Sevinc","Programmer", "Photographer"]
const element=document.getElementById("demo");
currentWord = -1;
window.setInterval(function(){ // 4
    currentWord++; // 5
    if(currentWord > words.length) currentWord = 0; // 6
    element.textContent = words[currentWord]; // 7
 }, 2000); // -- 4 

//  SCroll up and down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar-main-div").style.top = "0";
  } else {
    document.getElementsByClassName("navbar-main-div").style.top = "-50px";
  }
}
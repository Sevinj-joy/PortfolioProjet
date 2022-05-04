let words =["Sevinc","Programmer", "Photographer"]
const element=document.getElementById("demo");
currentWord = -1;
window.setInterval(function(){ // 4
    currentWord++; // 5
    if(currentWord > words.length) currentWord = 0; // 6
    element.textContent = words[currentWord]; // 7
 }, 2000); // -- 4 

//  SCroll up and down
window.onscroll  =function(){myFunction()
};
let navbar= document.getElementsByClassName("navbar-main-div");
let sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >=sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}
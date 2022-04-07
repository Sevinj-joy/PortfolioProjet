let words =["Sevinc","Programmer", "Photographer"]
const element=document.getElementById("demo");
currentWord = -1;
window.setInterval(function(){ // 4
    currentWord++; // 5
    if(currentWord > words.length) currentWord = 0; // 6
    element.textContent = words[currentWord]; // 7
 }, 3000); // -- 4 

// setTimeout(function(){element.innerHTML+="Sevinc"},5000);
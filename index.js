
var buttonList = document.querySelectorAll("button");

// play sounds on clicking the buttons

for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function (){ 
        clicked(this.innerHTML);
        animation(this.innerHTML);
    });
}

// play sounds on pressing the keys

document.addEventListener("keypress",function(event){ 
    clicked(event.key);
    animation(event.key);
 });

function clicked(letter){
    switch (letter) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;
    
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();            
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();            
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();            
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();            
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();            
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();            
            break;
        
        default:
            break;
    }
}

function animation(key){
    var c = "."+key;
    var cl = document.querySelector(c);
    cl.classList.add("pressed");
    setTimeout(function(){
        cl.classList.remove("pressed");
    },100)
}
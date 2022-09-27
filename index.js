let i;
let audio;

for(i=0; i<7; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function() {
    let keyListner = this.innerHTML;
    buttonAnimation(keyListner);
    switch(keyListner) {
        case 'w': {
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case 'a': {
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case 's': {
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case 'd': {
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        case 'j': {
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case 'k': {
            
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;;
        }
        case 'l': {
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
    }
    
});
}
document.addEventListener('keypress', function(event) {
    let boardListner = event.key;
    buttonAnimation(event.key);
    switch(boardListner) {
        case 'w': {
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case 'a': {
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case 's': {
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case 'd': {
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        case 'j': {
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case 'k': {
            
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;;
        }
        case 'l': {
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
    }
});
function buttonAnimation(currentKey) {
    anime = document.querySelector("."+currentKey).classList;
    anime.add("pressed");
    setTimeout(function() {
        anime.remove("pressed");
    }, 100);
}

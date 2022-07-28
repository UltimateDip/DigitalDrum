var buttons = document.querySelectorAll("button");


for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
      var pressedKey = this.innerHTML;
      playSound(pressedKey);
      makeAnimation(pressedKey);
    });
}


document.addEventListener("keypress",function(event){
    var pressedKey = event.key;
    playSound(pressedKey);
    makeAnimation(pressedKey);
})


function playSound(pressedKey){
    switch (pressedKey) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            console.log(pressedKey);
            break;
    }
}

function makeAnimation(pressedKey){
    var pressedButton = document.querySelector("."+pressedKey);
    if(pressedButton==null){
        console.log(pressedKey);
        return;
    }
    pressedButton.classList.toggle("pressed");
    setTimeout(function(){
        pressedButton.classList.toggle("pressed");
    },100);
}
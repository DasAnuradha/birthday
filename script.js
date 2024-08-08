// let play = document.getElementById("play");
// let showClickButton = document.getElementById("showClickButton");

// function playMusic() {
//     let audio = new Audio("chin_tapak_dum_dum.mp3");
//     audio.play();
//     showClickButton.style.display = "inline"; // Show the "click" button
// }

// play.addEventListener("click", playMusic);

let play = document.getElementById("play");
let showClickButton = document.getElementById("showClickButton");

function playMusic() {
    let audio = new Audio("chin_tapak_dum_dum.mp3");
    audio.play();
    setTimeout(function() {
        showClickButton.style.display = "inline"; // Show the "click" button after 1 second
    }, 2500);
}

play.addEventListener("click", playMusic);



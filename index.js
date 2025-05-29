let homePoint = document.getElementById("home-point");
let guestPoint = document.getElementById("guest-point");

let homescore = 0;
let guestscore = 0;

function addoneh(){
    homescore += 1;
    homePoint.innerText = homescore;
}

function addoneg(){
    guestscore += 1;
    guestPoint.innerText = guestscore;
}

function addtwoh(){
    homescore += 2;
    homePoint.innerText = homescore;
}

function addtwog(){
    guestscore += 2;
    guestPoint.innerText = guestscore;
}

function addthreeh(){
    homescore += 3;
    homePoint.innerText = homescore;
}

function addthreeg(){
    guestscore += 3;
    guestPoint.innerText = guestscore;
}

function resetscores(){
    guestscore = 0;
    guestPoint.innerText = 0;
    homescore = 0;
    homePoint.innerText = 0;
}



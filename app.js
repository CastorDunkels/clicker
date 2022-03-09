let nugget = 0;
let health = 1;
let HealthButton = document.querySelector(".NuggetHealth");
let NuggetButton = document.querySelector(".Nugget");
let NuggetCounter = document.querySelector(".Nugget-count");
let HealthDisplay = document.querySelector(".HP");

NuggetButton.addEventListener("click", Nugget);
HealthButton.addEventListener("click", NuggetHealth);

function SetNugget(n) {
    nugget = n;
    NuggetCounter.innerHTML = "Nugget-count: " + nugget + "st";
}
function Nugget(event) { 
    console.log(event);
    if(event.pointerType === ""){
        return;
    }
    rndNum = Math.floor(Math.random() * 10); 
    if (rndNum == 0) {
        SetNugget(nugget + 1); 
    }

    console.log(health);
}
function SetHealth(h){
    /*if(h === 0){

    }*/
    if(h < 0){
        h = 0;
    }
    if(h > 10){
        h = 10;
    } 
    health = h;
    HealthDisplay.innerHTML = health;
}

function NuggetHealth() {
    if (nugget >= 1 && (health > 1 || health < 10)) {
        SetNugget(nugget - 1);
        SetHealth(health + 2);
    }
}

SetHealth(10);

setInterval(() => {
    SetHealth(health - 1);
}, 2000);
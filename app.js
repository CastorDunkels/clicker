let nugget = 0;
let health = 1;
let points = 0;
let HealthButton = document.querySelector(".NuggetHealth");
let NuggetButton = document.querySelector(".Nugget");
let NuggetCounter = document.querySelector(".Nugget-count");
let HealthDisplay = document.querySelector(".HP");
let PointAmount = document.querySelector(".Score");
let StartOver = document.querySelector(".RestartButton");
let NuggetAquired = document.querySelector(".GetNugget");

NuggetButton.addEventListener("click", Nugget);
HealthButton.addEventListener("click", NuggetHealth);
StartOver.addEventListener("click", RestartButton);

function SetPoints(p) {
    points = p;
    PointAmount.innerHTML = "Score:" + points;
}
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
        if (nugget + 1){
            document.querySelector(".GetNugget").style.display="block";
        }
    }

    console.log(health);
}

function SetHealth(h){
    if(h === 0){
        document.querySelector(".Death").style.display="block";
    }
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
    if (nugget >= 1 && (health >= 1 && health < 10)) {
        SetNugget(nugget - 1);
        SetHealth(health + 2);
    }
}



function RestartButton(){
    location.reload();
    return false;
}

SetHealth(10);


if(points >= 100){
    setInterval(() => {
        SetHealth(health - 1); //i need to fix this 
    }, 50000);
}
else {
    setInterval(() => {
        SetHealth(health - 1);
    }, 2000);
}
SetPoints(0);
setInterval(() => {
    SetPoints(points + 1);
}, 400);

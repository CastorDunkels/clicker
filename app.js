let nugget = 0;
let health = 1;
let HealthButton = document.querySelector(".NuggetHealth");
let NuggetButton = document.querySelector(".Nugget");
let NuggetCounter = document.querySelector(".Nugget-count");

NuggetButton.addEventListener("click", Nugget);
HealthButton.addEventListener("click", NuggetHealth);

function Nugget() {

rndNum = Math.floor(Math.random() * 10);  //gotta fix health stuff but not right now
if (rndNum == 0) {
    nugget += 1 *health
}
NuggetCounter.innerHTML = "Nugget-count: " + nugget + "st";
console.log(health);
}

function NuggetHealth() {
    if (nugget >= 1) {
        nugget--;
        health ++;
    }
}
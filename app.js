let nugget = 0;
let upgrade = 1;
let UpgradeButton = document.querySelector(".NuggetUpgrade");
let NuggetButton = document.querySelector(".Nugget");
let NuggetCounter = document.querySelector(".Nugget-count");

NuggetButton.addEventListener("click", Nugget);
UpgradeButton.addEventListener("click", NuggetUpgrade);

function Nugget() {

rndNum = Math.floor(Math.random() * 10);
if (rndNum == 0) {
    nugget += 1 *upgrade
}
NuggetCounter.innerHTML = "Nugget-count: " + nugget + "st";
console.log(upgrade);
}

function NuggetUpgrade() {
    if (nugget >= 1) {
        nugget--;
        upgrade *= 4;
    }
}
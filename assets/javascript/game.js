let team1shoot = document.querySelector("#teamone-shoot-button");
let team1shots = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals");

let team2shoot = document.querySelector("#teamtwo-shoot-button");
let team2shots = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals");

team1shoot.addEventListener("click", function () {
    console.log("")
    let newteam1shoot = Number(team1shots.innerHTML) + 1;
    team1shots.innerHTML = newteam1shoot
});

team2shoot.addEventListener("click", function () {
    console.log("")
    let newteam2shoot = Number(team2shots.innerHTML) + 1;
    team2shots.innerHTML = newteam2shoot
});
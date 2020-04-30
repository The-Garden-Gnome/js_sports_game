let team1shoot = document.querySelector("#teamone-shoot-button");
let team1shots = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals");

let team2shoot = document.querySelector("#teamtwo-shoot-button");
let team2shots = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals");

team1shoot.addEventListener("click", function () {
    let newteam1shoot = Number(team1shots.innerHTML) + 1;
    team1shots.innerHTML = newteam1shoot;
    if (Math.random() >= .5)
    return
    let newteam1goals = Number(team1goals.innerHTML) + 1;
    team1goals.innerHTML = newteam1goals;
});

team2shoot.addEventListener("click", function () {
    let newteam2shoot = Number(team2shots.innerHTML) + 1;
    team2shots.innerHTML = newteam2shoot;
    if (Math.random() >= .5)
    return
    let newteam2goals = Number(team2goals.innerHTML) + 1;
    team2goals.innerHTML = newteam2goals;
});
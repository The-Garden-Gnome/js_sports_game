let goalsTeam1 = 0;
let goalsTeam2 = 0;
let shotsTeam1 = 0;
let shotsTeam2 = 0;
let resetCount = 0;

let team1shoot = document.querySelector("#teamone-shoot-button");
let team1shots = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals");

let team2shoot = document.querySelector("#teamtwo-shoot-button");
let team2shots = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals");

let resetnumber = document.querySelector("#num-resets");
let reset = document.querySelector("#reset-button");

team1shoot.addEventListener("click",
    function () {
        shotsTeam1 += 1;
        team1shots.innerText = shotsTeam1;
        let myAudioElement = new Audio('assets/media/vex_mythoclast.mp3');
        myAudioElement.addEventListener("canplaythrough", event => {
            myAudioElement.play();
          });
        if (Math.random() >= .5) {
            goalsTeam1 += 1;
            team1goals.innerText = goalsTeam1;
        }
    });

team2shoot.addEventListener("click",
    function () {
        shotsTeam2 += 1;
        team2shots.innerText = shotsTeam2;
        let myAudioElement = new Audio('assets/media/vex_mythoclast.mp3');
        myAudioElement.addEventListener("canplaythrough", event => {
            myAudioElement.play();
          });
        if (Math.random() >= .5) {
            goalsTeam2 += 1;
            team2goals.innerText = goalsTeam2;
        }
    });

reset.addEventListener("click",
    function () {
        resetCount += 1;
        resetnumber.innerText = resetCount
        let myAudioElement = new Audio('assets/media/get_back_out_there.mp3');
        myAudioElement.addEventListener("canplaythrough", event => {
            myAudioElement.play();
          });

        goalsTeam1 = 0;
        goalsTeam2 = 0;
        shotsTeam1 = 0;
        shotsTeam2 = 0;

        team1goals.innerText = goalsTeam1;
        team1shots.innerText = shotsTeam1;
        team2goals.innerText = goalsTeam2;
        team2shots.innerText = shotsTeam2;
    });

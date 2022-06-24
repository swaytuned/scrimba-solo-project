//write to scoreboard
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeScore = 0;
let guestScore = 0;
//FOULS
let foulsAtHome = document.getElementById("fouls-home");
let foulsAtGuest = document.getElementById("fouls-guest");
let foulsByHome = 4;
let foulsByGuest = 4;


//score goes up by 1
function homePlusOne(){
homeScore += 1
scoreHome.textContent = homeScore
console.log(score)
}
//score goes up by 2
function homePlusTwo(){
    homeScore += 2
scoreHome.textContent = homeScore
}
//score goes up by 3
function homePlusThree(){
    homeScore += 3
scoreHome.textContent = homeScore
}

//score goes up by 1
function guestPlusOne(){
    guestScore += 1
    scoreGuest.textContent = guestScore
    console.log(count)
    }
    //score goes up by 2
    function guestPlusTwo(){
        guestScore += 2
    scoreGuest.textContent = guestScore
    }
    //score goes up by 3
    function guestPlusThree(){
        guestScore += 3
    scoreGuest.textContent = guestScore
    }
    // resets scores
    function reset(){
        homeScore = 0
        guestScore = 0
        foulsByHome = 4
        foulsByGuest = 4

        scoreHome.textContent = homeScore
        scoreGuest.textContent = guestScore
        foulsAtHome.textContent = foulsByHome
        foulsAtGuest.textContent = foulsByGuest
    }
    //foul subtraction
    function foulsHome(){
        foulsByHome += -1
        foulsAtHome.textContent = foulsByHome
    }

    function foulsGuest(){
        foulsByGuest += -1
        foulsAtGuest.textContent = foulsByGuest
    }
let playBtn = document.getElementById("play");
let stopBtn = document.getElementById("stop");
let hourInput = document.querySelector("input[name=hour]");
let minInput = document.querySelector("input[name=minute]");
let secInput = document.querySelector("input[name=seconds]");
let info = document.getElementById("info-text");
let timeoutID;

function test() {
    if (secInput.value === '' && minInput.value === '' && hourInput.value === '' || hourInput.value == 0 && secInput.value == 0 && minInput.value == 0) {
        info.innerHTML = "Fields are empty.";
        console.log("Fields are empty.");
    } else if (hourInput.value > 99 || minInput.value > 59 || secInput.value > 59) {
        info.innerHTML = "Incorrect input(s).";
        console.log("Incorrect inputs.")
    } else {
        // console.log(hourInput.value);
        // console.log(minInput.value);
        // console.log(secInput.value);
        // playBtn.innerText = "PAUSE";
        info.innerHTML = "TIME WAITS FOR NO MAN!"
        playBtn.removeEventListener("click", test)
        timeoutID = window.setInterval(timeCounter, 1*1000);        
    }
}

function timeCounter() {
    if (hourInput.value == 0 && minInput.value == 0 || hourInput.value == '' && minInput.value == '') {
        secInput.value -= 1;
        if (secInput.value == 0) {
            window.clearInterval(timeoutID);
            playBtn.addEventListener("click", test);
            info.innerHTML = "TIME'S UP!!!"
            console.log("Done!")
        }
    } else if (minInput.value > 0) {
        if (secInput.value > 0) {
            secInput.value -= 1;
        } else if (secInput.value == 0 || secInput.value == '') {
            secInput.value = 59;
            minInput.value -= 1;
        }
    }  else if (hourInput.value > 0) {
        if (minInput.value == 0 && secInput.value == 0 || minInput.value == '' && secInput.value == '') {
            hourInput.value -= 1;
            minInput.value = 59;
            secInput.value = 59;
        } else if (minInput.value >= 0 && secInput.value > 0) {
            secInput.value -= 1;
        }

    }
}

function stop() {
    hourInput.value = 0;
    minInput.value = 0;
    secInput.value = 0;
    window.clearInterval(timeoutID);
    playBtn.addEventListener("click", test)

    info.innerHTML = "Oh Oh. Time Stopped For You?! That's Amazing!"
    console.log("Stopped!");

}

playBtn.addEventListener("click", test);
//playBtn.addEventListener("click", runTimer);

stopBtn.addEventListener("click", stop);
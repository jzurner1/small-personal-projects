function formatTime(millisec) {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = (hours >= 10) ? hours : "0" + hours;
        minutes = minutes - (hours * 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    if (hours != "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
}

function setTime(time) {
    document.getElementById('timer').innerHTML = time;
}

function pause() {
    if (paused) {
        document.getElementById("pause-button").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" onclick="pause()" width="120" height="120" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>'
        paused = false;
    } else {
        document.getElementById("pause-button").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" onclick="pause()" width="120" height="120" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>'
        paused = true;
    }
}

function reset() {
    if (!paused) {
        pause();
    }
    reset1 = true;
}


let paused = false;
let timePaused = 0;
let start = Date.now();
let reset1 = false;



// loop every second
setInterval(function() {
    if (reset1 && !paused) {
        start = Date.now();
        reset1 = false;
    }

    if (paused && !reset1) {
        timePaused += 1;
    } else if (!reset1) {
        let delta = Date.now() - start - (timePaused * 1000); // milliseconds elapsed since start
        console.log(delta);
        setTime(formatTime(delta))
    }
}, 1000);

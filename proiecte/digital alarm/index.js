const ceas = document.getElementById("clock-container");
const containerOra = document.getElementById("container_ora");
const containerMin = document.getElementById("container_min");
const containerSec = document.getElementById("container_sec");
const containerDate = document.getElementById("container_date");

const alarmOra = document.getElementById("alarm_ora");
const alarmMin = document.getElementById("alarm_min");
const alarmSec = document.getElementById("alarm_sec");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let alarmTime = "";

const alarmSound = new Audio("alarm.mp3");
alarmSound.loop = true;

function addZero(nr) {
    if(nr < 10) {
    return "0" + nr;
    }

    return nr;
}

function updateTime() {
    // Obiect nou Date
    const date = new Date();

    const ora = addZero(date.getHours());
    const min = addZero(date.getMinutes());
    const sec = addZero(date.getSeconds());

    containerDate.textContent = date.getFullYear() + " - " + (date.getMonth() + 1) + " - " + week[date.getDay()];

    containerOra.textContent = ora;
    containerMin.textContent = min;
    containerSec.textContent = sec;

    const currentTime = "" + ora + min + sec;

    if(alarmTime == currentTime) {
        alarmSound.play();
        ceas.classList.add("alarm");
    }
}

// Functie - creeaza elementele pentru meniul alarmei
function createAlarmMenu() {
    for(let i = 0; i < 24; i++) {
        alarmOra.options[alarmOra.options.length] = new Option(addZero(i), addZero(i));
    }
    for(let i = 1; i < 60; i++) {
        alarmMin.options[alarmMin.options.length] = new Option(addZero(i), addZero(i));
        alarmSec.options[alarmSec.options.length] = new Option(addZero(i), addZero(i));
    }
}


function setAlarm() {
    const selectedOra = alarmOra.options[alarmOra.selectedIndex].value;
    const selectedMin = alarmMin.options[alarmMin.selectedIndex].value;
    const selectedSec = alarmSec.options[alarmSec.selectedIndex].value;

    alarmTime = alarmTime + selectedOra + selectedMin + selectedSec;

    alarmOra.disabled = true;
    alarmMin.disabled = true;
    alarmSec.disabled = true;
}

function cancelAlarm() {
    alarmTime = "";

    alarmOra.disabled = false;
    alarmMin.disabled = false;
    alarmSec.disabled = false;

    alarmSound.pause();
    ceas.classList.remove("alarm");
}

createAlarmMenu();
updateTime();
setInterval(updateTime, 1000);
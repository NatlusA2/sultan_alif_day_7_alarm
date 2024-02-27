selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
setAlarmBtn = document.querySelector("button");
content = document.querySelector(".content")
let alarmTime;

ringtone = new Audio("pipa.m4a");

for (let i = 12; i > 0; i--) {
    i = 1 < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 60; i >= 0; i--) {
    i = 1 < 10 ? i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12){
        h = h - 12;
        ampm = "PM";
    }

        h = h == 0 ? h = 12 : h;
        h = h < 10 ? "0" + h : h ;
        m = m < 10 ? "0" + m : m ;
        s = s < 10 ? "0" + s : s ;
    
        currentTime.innerText =  `${h}:${m}:${s} ${ampm}`;
        
       if(alarmTime == `${h}:${m} ${ampm}` ){
        console.log("hudang!");   
        ringtone.play();
        ringtone.loop = true;
       }

}, 1000);


function setAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    console.log(time)

    if(time.includes("hour") || time.includes("minute") || time.includes("AM/PM") ){
        return alert("input waktu terlebih dahulu");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "matikan alarm";
}

setAlarmBtn.addEventListener("click", setAlarm)

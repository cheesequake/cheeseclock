let counter_active = 1;
let tempDate=0;
let srNoint = 1;
function play_clicked(){
    counter_active = 0;
    document.getElementById("playbutton").classList.add("disappear");
    document.getElementById("postplayrow").classList.remove("disappear");
    document.getElementById("playbutton").classList.remove("reappear");
    document.getElementById("postplayrow").classList.add("reappear");
    const startTime = new Date();
    const startcounting = setInterval(() => {
        const currentTime = new Date();
        const difference = currentTime-startTime;
        document.getElementById("stopmin").textContent = parseInt(difference/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("stopsec").textContent = parseInt((difference%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("stopmilsec").textContent = parseInt(((difference%60000))%1000).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false});
        if(counter_active!=0){
            tempDate = difference;
            clearInterval(startcounting);
        }
    }, 100);
}

function pause_clicked(){
    document.getElementById("postplayrow").classList.add("disappear");
    document.getElementById("postpauserow").classList.remove("disappear");
    document.getElementById("postplayrow").classList.remove("reappear");
    document.getElementById("postpauserow").classList.add("reappear");
    counter_active=1;
}

function lap_clicked(){
    var newLap = document.createElement("div");
    var srNo = document.createElement("div");
    var lapTime = document.createElement("div");
    srNo.textContent = srNoint;
    srNoint++;
    let lapMin = document.getElementById("stopmin").textContent;
    let lapSec = document.getElementById("stopsec").textContent;
    let lapMil = document.getElementById("stopmilsec").textContent;
    lapTime.textContent=lapMin+":"+lapSec+":"+lapMil;
    newLap.appendChild(srNo);
    newLap.appendChild(lapTime);
    newLap.classList.add("lapDiv");
    srNo.classList.add("lapDivCol");
    lapTime.classList.add("lapDivCol");
    document.getElementById("lapScreen").appendChild(newLap);
    document.getElementById("lapScreen").scrollTo(0,document.getElementById("lapScreen").scrollHeight);
    if(srNoint==2){
        document.getElementById("1").play();
    }
    else if(srNoint==3){
        document.getElementById("2").play();
    }
    else if(srNoint==4){
        document.getElementById("3").play();
    }
    else if(srNoint==5){
        document.getElementById("4").play();
    }
    else if(srNoint==6){
        document.getElementById("5").play();
    }
    else{
        document.getElementById("6").pause();
        document.getElementById("6").currentTime=0;
        document.getElementById("6").play();
    }
}

function stop_clicked(){
    document.getElementById("postpauserow").classList.add("disappear");
    document.getElementById("playbutton").classList.remove("disappear");
    document.getElementById("postpauserow").classList.remove("reappear");
    document.getElementById("playbutton").classList.add("reappear");
    document.getElementById("stopmin").textContent = "00";
    document.getElementById("stopsec").textContent = "00";
    document.getElementById("stopmilsec").textContent = "000";
    document.getElementById("lapScreen").textContent="";
    srNoint=1;
    tempDate=0;
    counter_active=1;
}

function playagain_clicked(){
    document.getElementById("postplayrow").classList.remove("disappear");
    document.getElementById("postpauserow").classList.add("disappear");
    document.getElementById("postplayrow").classList.add("reappear");
    document.getElementById("postpauserow").classList.remove("reappear");
    counter_active=0;
    const startTime = new Date();
    const startcounting = setInterval(() => {
        const currentTime = new Date();
        const difference = currentTime-startTime + tempDate;
        document.getElementById("stopmin").textContent = parseInt(difference/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("stopsec").textContent = parseInt((difference%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("stopmilsec").textContent = parseInt(((difference%60000))%1000).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false});
        if(counter_active!=0){
            tempDate = difference;
            clearInterval(startcounting);
        }
    }, 100);
}
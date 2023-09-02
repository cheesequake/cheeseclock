let currenthr = 0;
let currentmin = 0;
let currentsec = 0;
let currenttime = 0;
let timeractive = 1;
document.getElementById("displayhr").textContent = currenthr.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
document.getElementById("displaymin").textContent = currentmin.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
document.getElementById("displaysec").textContent = currentsec.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

document.getElementById("uphour").addEventListener("click", increasehr, false);

function increasehr(){
    document.getElementById("displayhr").textContent = (++currenthr).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    if(currenthr==0){
        document.getElementById("hourdown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("hourdown").classList.remove("inactivebutton");
    }
}

function decreasehr(){
    if(currenthr==0){
        document.getElementById("displayhr").textContent = currenthr.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        document.getElementById("hourdown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("hourdown").classList.remove("inactivebutton");
        document.getElementById("displayhr").textContent = (--currenthr).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        if(currenthr==0){
            document.getElementById("hourdown").classList.add("inactivebutton");
        }
    }
}

function increasemin(){
    document.getElementById("displaymin").textContent = (++currentmin).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    if(currentmin==0){
        document.getElementById("mindown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("mindown").classList.remove("inactivebutton");
    }
}

function decreasemin(){
    if(currentmin==0){
        document.getElementById("displaymin").textContent = currentmin.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        document.getElementById("mindown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("mindown").classList.remove("inactivebutton");
        document.getElementById("displaymin").textContent = (--currentmin).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        if(currentmin==0){
            document.getElementById("mindown").classList.add("inactivebutton");
        }
    }
}

function increasesec(){
    document.getElementById("displaysec").textContent = (++currentsec).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    if(currentsec==0){
        document.getElementById("secdown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("secdown").classList.remove("inactivebutton");
    }
}

function decreasesec(){
    if(currentsec==0){
        document.getElementById("displaysec").textContent = currentsec.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        document.getElementById("secdown").classList.add("inactivebutton");
    }
    else{
        document.getElementById("secdown").classList.remove("inactivebutton");
        document.getElementById("displaysec").textContent = (--currentsec).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        if(currentsec==0){
            document.getElementById("secdown").classList.add("inactivebutton");
        }
    }
}

function timerplay_clicked(){
    let startTime = parseInt(document.getElementById("displayhr").innerHTML)*3600000+parseInt(document.getElementById("displaymin").innerHTML)*60000+parseInt(document.getElementById("displaysec").innerHTML)*1000;
    if(startTime==0){
        return;
    }
    timeractive=0;
    document.getElementById("timerplaybutton").classList.add("disappear");
    document.getElementById("timerpostplayrow").classList.add("reappear");
    document.getElementById("timerplaybutton").classList.remove("reappear");
    document.getElementById("timerpostplayrow").classList.remove("disappear");
    const backcounter = setInterval(()=>{
        if(timeractive!=0){
            clearInterval(backcounter);
            currenttime = 0;
            currenthr = 0;
            currentmin = 0;
            currentsec =  0;
            document.getElementById("displayhr").textContent =  currenthr.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                    });
            document.getElementById("displaymin").textContent =  currentmin.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                    });
            document.getElementById("displaysec").textContent =  currentsec.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                    });
            
            timeractive=1;
        }
        let currenttime = startTime-1000;
        currenthr = (parseInt(currenttime/3600000));
        currentmin = (parseInt((currenttime%3600000)/60000));
        currentsec =  (parseInt(((currenttime%3600000)%60000)/1000));
        document.getElementById("displayhr").textContent =  currenthr.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        document.getElementById("displaymin").textContent =  currentmin.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        document.getElementById("displaysec").textContent =  currentsec.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        startTime=startTime-1000;
        if(startTime==0){
            document.getElementById("finisher").play();
            document.getElementById("timerplaybutton").classList.remove("disappear");
            document.getElementById("timerpostplayrow").classList.remove("reappear");
            document.getElementById("timerplaybutton").classList.add("reappear");
            document.getElementById("timerpostplayrow").classList.add("disappear");
            document.getElementById("timerpostpauserow").classList.remove("reappear");
            document.getElementById("timerpostpauserow").classList.add("disappear");
            clearInterval(backcounter);
            document.getElementById("hourdown").classList.add("inactivebutton");
            document.getElementById("mindown").classList.add("inactivebutton");
            document.getElementById("secdown").classList.add("inactivebutton");
        }
        if(timeractive!=0){
            clearInterval(backcounter);
            timerstop_clicked;
        }
    },1000);
}

function timerpause_clicked(){
    document.getElementById("timerpostpauserow").classList.remove("disappear");
    document.getElementById("timerpostplayrow").classList.remove("reappear");
    document.getElementById("timerpostpauserow").classList.add("reappear");
    document.getElementById("timerpostplayrow").classList.add("disappear");
    timeractive=1;
}

function timerstop_clicked(){
    document.getElementById("timerplaybutton").classList.remove("disappear");
    document.getElementById("timerpostplayrow").classList.remove("reappear");
    document.getElementById("timerplaybutton").classList.add("reappear");
    document.getElementById("timerpostplayrow").classList.add("disappear");
    document.getElementById("timerpostpauserow").classList.remove("reappear");
    document.getElementById("timerpostpauserow").classList.add("disappear");
    currenttime = 0;
    currenthr = 0;
    currentmin = 0;
    currentsec =  0;
    document.getElementById("displayhr").textContent =  currenthr.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
    document.getElementById("displaymin").textContent =  currentmin.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
    document.getElementById("displaysec").textContent =  currentsec.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
    timeractive=1;
}

function timerplayagain_clicked(){
    document.getElementById("timerpostpauserow").classList.add("disappear");
    document.getElementById("timerpostplayrow").classList.add("reappear");
    document.getElementById("timerpostpauserow").classList.remove("reappear");
    document.getElementById("timerpostplayrow").classList.remove("disappear");
    timeractive=0;
    timerplay_clicked();
}
document.onload = analog_active();

function analog_active(){
    document.getElementById("analog").style.display = "flex";
    document.getElementById("digital").style.display = "none";
    document.getElementById("global").style.display = "none";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "none";
}
function digital_active(){
    document.getElementById("analog").style.display = "none";
    document.getElementById("digital").style.display = "flex";
    document.getElementById("global").style.display = "none";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "none";
}
function global_active(){
    document.getElementById("analog").style.display = "none";
    document.getElementById("digital").style.display = "none";
    document.getElementById("global").style.display = "flex";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "none";
}
function stopwatch_active(){
    document.getElementById("analog").style.display = "none";
    document.getElementById("digital").style.display = "none";
    document.getElementById("global").style.display = "none";
    document.getElementById("stopwatch").style.display = "flex";
    document.getElementById("timer").style.display = "none";
}
function timer_active(){
    document.getElementById("analog").style.display = "none";
    document.getElementById("digital").style.display = "none";
    document.getElementById("global").style.display = "none";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "flex";
}

function colorPanelActive(){
    document.getElementById("colorpanel").classList.remove("inactivebutton");
}
function colorPanelOff(){
    document.getElementById("colorpanel").classList.add("inactivebutton");
}
let colorButtonCounter=0;
function RGBOff(){
    if(colorButtonCounter==0){
        document.getElementById("colorpanel").classList.add("sliderRight");
        colorButtonCounter=1;
        document.getElementById("master").style.backgroundColor = "#ffffff";
        document.getElementById("rgbslider").style.backgroundColor="white";
        document.getElementById("colorpanel").style.backgroundColor="#222222";
        let containersAll = document.getElementsByClassName("container");
        for(var i=0;i<containersAll.length;i++){
            containersAll.item(i).classList.remove("light");
        }
        let iconsAll = document.getElementsByClassName("icon");
        for(var i=0;i<iconsAll.length;i++){
            iconsAll.item(i).classList.remove("light");
        }
        let countriesAll = document.getElementsByClassName("countryname");
        let timezonesAll = document.getElementsByClassName("timezonetime");
        for(var i=0;i<countriesAll.length;i++){
            countriesAll.item(i).classList.remove("light");
            timezonesAll.item(i).classList.remove("light");
        }
        document.getElementById("footerp").classList.remove("light");
    }
    else{
        document.getElementById("colorpanel").classList.remove("sliderRight");
        colorButtonCounter=0;
        document.getElementById("master").style.backgroundColor = "#222222";
        document.getElementById("rgbslider").style.backgroundColor="#222222";
        document.getElementById("colorpanel").style.backgroundColor="white";
        let containersAll = document.getElementsByClassName("container")
        for(var i=0;i<containersAll.length;i++){
            containersAll.item(i).classList.add("light");
        }
        let iconsAll = document.getElementsByClassName("icon");
        for(var i=0;i<iconsAll.length;i++){
            iconsAll.item(i).classList.add("light");
        }
        let countriesAll = document.getElementsByClassName("countryname");
        let timezonesAll = document.getElementsByClassName("timezonetime");
        for(var i=0;i<countriesAll.length;i++){
            countriesAll.item(i).classList.add("light");
            timezonesAll.item(i).classList.add("light");
        }
        document.getElementById("footerp").classList.add("light");
    }
    
}

document.getElementById("colorpanel").addEventListener("mouseover",colorPanelActive);
document.getElementById("colorpanel").addEventListener("mouseout", colorPanelOff);
document.getElementById("colorpanel").addEventListener("click", RGBOff);
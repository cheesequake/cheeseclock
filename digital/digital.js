
setInterval(()=>{
    const date = new Date();
    if(date.getHours()<10){
        document.getElementById("digihour").textContent = `0${date.getHours()}`;
    }
    else{
        document.getElementById("digihour").textContent = date.getHours();
    }
    if(date.getMinutes()<10){
        document.getElementById("digimin").textContent = `0${date.getMinutes()}`;
    }
    else{
        document.getElementById("digimin").textContent = date.getMinutes();
    }
    if(date.getSeconds()<10){
        document.getElementById("digisec").textContent = `0${date.getSeconds()}`;
    }
    else{
        document.getElementById("digisec").textContent = date.getSeconds();
    }
    document.getElementById("dateonli").textContent = date.toDateString();
},1000);

setInterval(()=>{
    document.getElementById("colon1").classList.toggle("colactive");
    document.getElementById("colon2").classList.toggle("colactive");
},500);
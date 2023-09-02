
setInterval(()=>{
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    document.getElementById("hourHand").style.rotate = `${(((hrs/12)*360)-90)+((mins/60)*30)}deg`;
    document.getElementById("minuteHand").style.rotate = `${(((mins/60)*360)-90)+((secs/60)*6)}deg`;
    document.getElementById("secondHand").style.rotate = `${((secs/60)*360)-90}deg`;
    document.getElementById("dateanalog").textContent = date.toDateString();
},1000);
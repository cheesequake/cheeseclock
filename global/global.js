setInterval(()=>{
    const loadTime = new Date();
    document.getElementById("IST").textContent = ((loadTime.getUTCHours()+5)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes()+30)%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("FINST").textContent = ((loadTime.getUTCHours()+3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((loadTime.getUTCHours()-5)<0){
        document.getElementById("USAST").textContent = ((24+loadTime.getUTCHours()-5)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("USAST").textContent = ((loadTime.getUTCHours()-5)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("UKST").textContent = ((loadTime.getUTCHours()+1)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("JAPST").textContent = ((loadTime.getUTCHours()+9)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("SAST").textContent = ((loadTime.getUTCHours()+4)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("ESST").textContent = ((loadTime.getUTCHours()+2)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((loadTime.getUTCHours()-4)<0){
        document.getElementById("CAST").textContent = ((24+loadTime.getUTCHours()-4)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("CAST").textContent = ((loadTime.getUTCHours()-4)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("RUST").textContent = ((loadTime.getUTCHours()+3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("CHST").textContent = ((loadTime.getUTCHours()+8)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("AUST").textContent = ((loadTime.getUTCHours()+10)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes()+30)%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("FRST").textContent = ((loadTime.getUTCHours()+2)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("GERST").textContent = ((loadTime.getUTCHours()+2)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((loadTime.getUTCHours()-3)<0){
        document.getElementById("BRST").textContent = ((24+loadTime.getUTCHours()-3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("BRST").textContent = ((loadTime.getUTCHours()-3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("MAST").textContent = ((loadTime.getUTCHours()+8)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((loadTime.getUTCMinutes())).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
},1000)
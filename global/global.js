setInterval(()=>{
    const loadTime = new Date();
    let currentHr = loadTime.getUTCHours();
    let currentMin = loadTime.getUTCMinutes();
    document.getElementById("IST").textContent = (Math.ceil((currentHr+5)%24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin+30)%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("FINST").textContent = (Math.ceil((currentHr+2)%24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((currentHr-5)<0){
        document.getElementById("USAST").textContent = (Math.ceil((24+currentHr-5)%24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("USAST").textContent = ((currentHr-5)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("UKST").textContent = ((currentHr)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("JAPST").textContent = ((currentHr+9)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("SAST").textContent = ((currentHr+4)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("ESST").textContent = ((currentHr+1)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((currentHr-5)<0){
        document.getElementById("CAST").textContent = ((24+currentHr-5)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("CAST").textContent = ((currentHr-4)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("RUST").textContent = ((currentHr+3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("CHST").textContent = ((currentHr+8)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("AUST").textContent = ((currentHr+10)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin+30)%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("FRST").textContent = ((currentHr+2)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("GERST").textContent = ((currentHr+1)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if((currentHr-3)<0){
        document.getElementById("BRST").textContent = ((24+currentHr-3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    else{
        document.getElementById("BRST").textContent = ((currentHr-3)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    document.getElementById("MAST").textContent = ((currentHr+8)%24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+((currentMin)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
},1000)
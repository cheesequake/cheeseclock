const timeZoneMap = [
    {"IST" : "Asia/Kolkata"},
    {"FINST" : "Europe/Helsinki"},
    {"USAST" : "America/New_York"},
    {"UKST" : "Europe/London"},
    {"JAPST" : "Asia/Tokyo"},
    {"SAST" : "Asia/Riyadh"},
    {"ESST" : "Europe/Madrid"},
    {"CAST" : "America/Toronto"},
    {"RUST" : "Europe/Moscow"},
    {"CHST" : "Asia/Shanghai"},
    {"AUST" : "Australia/Sydney"},
    {"FRST" : "Europe/Paris"},
    {"GERST" : "Europe/Berlin"},
    {"BRST" : "America/Sao_Paulo"},
    {"MAST" : "Asia/Singapore"},
]
function getTime(){
    timeZoneMap.map(async (e) => {
        const response = await fetch("http://worldtimeapi.org/api/timezone/"+Object.values(e)[0]);
        const ST = await response.json();
        const time = ST.datetime;
        document.getElementById(Object.keys(e)[0]).textContent = time.substring(11,13).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+time.substring(14,16).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    });
}
getTime();
setInterval(()=>{
    timeZoneMap.map(async (e) => {
        const response = await fetch("http://worldtimeapi.org/api/timezone/"+Object.values(e)[0]);
        const ST = await response.json();
        const time = ST.datetime;
        document.getElementById(Object.keys(e)[0]).textContent = time.substring(11,13).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+time.substring(14,16).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    })
},60000);
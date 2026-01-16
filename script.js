function updateClcok(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours=hours<10? "0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds= seconds<10?"0"+seconds:seconds;

    const timestr = hours+":"+minutes+":"+seconds;
    document.getElementById('clock').innerHTML=timestr;
}
setInterval(updateClcok,1000);

updateClcok();
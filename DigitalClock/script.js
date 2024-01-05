function updateTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now .getSeconds();

    hour= hour<10 ? "0"+hour : hour;
    minute= minute<10 ? "0"+minute : minute;
    second= second<10 ? "0"+second : second;


    const hourElem = document.getElementById("hours");
    const minuteElem = document.getElementById("minutes");
    const secondElem = document.getElementById("seconds");


    hourElem.textContent = hour;
    minuteElem.textContent = minute;
    secondElem.textContent = second;

}
setInterval(updateTime,1000);
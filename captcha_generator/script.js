const display = document.getElementById("status");
const body = document.body;
const submit  = document.getElementById("submit");
const refresh = document.getElementById("refresh");


const char = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let captcha = "";
body.onload = function generateCaptcha(){
    const captchaLength = 6;
    for(let i=0; i<captchaLength;i++){
        const randomIndex = Math.floor(Math.random()*char.length);
        captcha += char.substring(randomIndex,randomIndex +1);

    }

    document.getElementById("generator").value = captcha;
    display.innerText = "captcha generator"

}

submit.onclick = function checkinput(){
    const input = document.getElementById("client-text").value;
    if(input === ""){
        display.innerText = "Plaese enter the text shown below 👇";

    }else if(input === captcha){
        display.innerText = "matched "
    }else{
        display.innerText = "Not matched"
    }

}

refresh.onclick = function refreshcaptcha(){
    let newCaptcha = "";
    for(let i=0;i<captcha.length;i++){
        const randomChar = char[ Math.floor(Math.random()*char.length)];
        newCaptcha += randomChar;
    }
    captcha = newCaptcha;
    document.getElementById("generator").value = captcha;
    display.innerText = "captcha generator"

}
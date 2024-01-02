const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersCount ="0123456789";
const symbolsCount ="!@#$%^&*/?";


const passwordField = document.getElementById("Password-Field");
const lengthUsing = document.getElementById("passLength");
const lowerCaseUsing = document.getElementById("LowerCase");
const upperCaseUsing = document.getElementById("UpperCase");
const numbersUsing = document.getElementById("Numbers");
const symbolsUsing = document.getElementById("Symbols");


document.getElementById("Generate-btn").addEventListener("click",function(){
    const lengthUsed = lengthUsing.value;
    let charactersUsed = "";
    let password = "";

    if(lowerCaseUsing.checked){
        charactersUsed += lowerCaseLetters;
    }

    if(upperCaseUsing.checked){
        charactersUsed += upperCaseLetters;
    }
    if(numbersUsing.checked){
        charactersUsed+= numbersCount;
    }
    if(symbolsUsing.checked){
        charactersUsed+=symbolsCount;
    }
    for(let i=0;i<lengthUsed;i++){
        password += charactersUsed.charAt(Math.floor(Math.random()*charactersUsed.length));
    }
    passwordField.value = password;
})
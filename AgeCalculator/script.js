const dob = document.getElementById("dob");
const calculateBtn = document.getElementById("btn");
const result = document.getElementById("result");


calculateBtn.addEventListener("click",function(){
    const dobValue = new Date(dob.value);
    const ageInMs = Date.now() - dobValue.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);

    result.innerHTML = `your age is : ${age} years`
})

function calculatMaturityAmount(){
    const principle = parseFloat(document.getElementById("principle").value);
    const interest = parseFloat(document.getElementById("intrest").value);
    const tenure = parseFloat(document.getElementById("Tenure").value);


    const maturityAmount = principle + (principle*interest*tenure)/100;


    document.getElementById("result").innerText=`Maturity Amount: ${maturityAmount.toFixed(2)}`
 
}
document.getElementById("calculate-btn").addEventListener("click",calculatMaturityAmount);
function calculateBill(){
    const billAmount = parseFloat(document.getElementById("bill").value);
    const tipAmount = parseFloat(document.getElementById("tip").value);


    const totalBillAmount = billAmount+(tipAmount/100*100);

    document.getElementById("totalBill").innerText= `Total bill $: ${billAmount}`;
    document.getElementById("totalAmount").innerText =`Total bill after tip $: ${totalBillAmount}`;

}


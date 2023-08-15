document.querySelector("#withdrawBtn").addEventListener("click", function () {
    let withdrawField = document.querySelector("#withdrawField");
    let finalWithdrawValue = parseFloat(withdrawField.value);
    withdrawField.value = "";

    if (isNaN(finalWithdrawValue) || finalWithdrawValue <= 0) {
        alert("Please Input a Valid Number");
        return;
    }

    let withdrawAmount = document.querySelector(".withdrawAmount");
    let currentWithdrawAmount = parseFloat(withdrawAmount.innerText);
    let finalWithdrawAmount = currentWithdrawAmount + finalWithdrawValue;

    // BALANCE FIELD 
    let balanceField = document.querySelector(".balanceField");
    let currentBalance = parseFloat(balanceField.innerText);
    let finalBalance = currentBalance - finalWithdrawValue;

    // Update the fields
    if (finalBalance >= 0) {
        withdrawAmount.innerText = finalWithdrawAmount;
        balanceField.innerText = finalBalance;
    }
    else{
        alert("Not Enough Balance");
    }
});

document.querySelector("#depositBtn").addEventListener("click", function () {
    let depositValue = document.querySelector("#depositField");
    let finalDepositValue = parseFloat(depositValue.value);
    depositValue.value = "";

    if (isNaN(finalDepositValue) || finalDepositValue <= 0) {
        alert("Please Input a Valid Number");
        return;
    }

    let depositField = document.querySelector(".depositAmount");
    let depositAmount = depositField.innerText;
    let finalDepositAmount = parseFloat(depositAmount);
    let finalAmount = finalDepositValue + finalDepositAmount;

    // BALANCE FIELD 
    let balanceField = document.querySelector(".balanceField");
    let balanceValue = balanceField.innerText;
    let balanceInt = parseFloat(balanceValue);
    let finalBalance = balanceInt + finalDepositValue;

    // Update the fields
    depositField.innerText = finalAmount;
    balanceField.innerText = finalBalance;
});

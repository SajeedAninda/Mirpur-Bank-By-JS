document.querySelector(".loginBtn").addEventListener("click", function () {
    let emailInfo = document.querySelector(".emailInfo").value;
    let passInfo = document.querySelector(".passInfo").value;
    let actualEmail = "sajeedaninda@gmail.com";
    let actualPass = "aNiNda12345";
    if (emailInfo === actualEmail && passInfo === actualPass) {
        window.location.href = "bank.html";
    }
    else {
        alert("Please Submit Correct Login Info");
    }
})
document.querySelector("#btn").addEventListener("click", function () {
    let inputField = document.querySelector("#inputValue");
    let inputValue = inputField.value;
    let ogPrice = parseFloat(document.querySelector(".originalPrice").innerText);
    let discountedPrice = document.querySelector(".discount");
    let discountCalculation = (ogPrice - (ogPrice * 30) / 100);
    let wrongCoupon = document.querySelector(".wrongCoupon");
    inputField.value = "";
    if (inputValue == "aNiNdA27") {
        discountedPrice.innerText = discountCalculation;
        wrongCoupon.innerText = "";
    }
    else {
        wrongCoupon.innerText = "Wrong Coupon Code";
        discountedPrice.innerText = "10000";
    }
})
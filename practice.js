document.querySelector("#btn").addEventListener("click", function () {
    let ogPrice = parseFloat(document.querySelector(".originalPrice").innerText);
    let discount = document.querySelector(".discount");
    discountedPrice = ogPrice - ((ogPrice * 30) / 100);
    discount.innerText = discountedPrice;
})
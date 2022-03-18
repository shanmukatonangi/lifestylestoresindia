var cartProductsForBasket = JSON.parse(localStorage.getItem("cartStorageData"));

document.getElementById("btn").addEventListener("click", function () {
  console.log("hi");
  if (cartProductsForBasket.length > 0) {
    console.log("btn");
    window.location.href = "basket.html";
  }
});

document.getElementById("menButton").addEventListener("click", function () {
  window.location.href = "menPage.html";
});

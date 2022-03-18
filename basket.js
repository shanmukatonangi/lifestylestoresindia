var product = JSON.parse(localStorage.getItem("cartStorageData"));
//console.log(product);
var sum = 0;
product.forEach(function (item) {
  display(item.name, item.rating, item.img_url, item.MRP, item.rupeeSign);
});

function display(name, rating, image_url, MRP, rupee) {
  sum += MRP;
  var row = document.createElement("tr");
  row.setAttribute("id", "displayBasket");
  var td1 = document.createElement("td");
  var img = document.createElement("img");
  img.setAttribute("src", image_url);
  td1.append(img);
  var td2 = document.createElement("td");
  td2.textContent = name;
  var td3 = document.createElement("td");
  td3.textContent = rupee + MRP;

  var td4 = document.createElement("td");
  var selectTag = document.createElement("select");
  selectTag.setAttribute("id", "sel");
  var option1 = document.createElement("option");
  var option2 = document.createElement("option");
  var option3 = document.createElement("option");
  var option4 = document.createElement("option");
  option1.textContent = "1";
  option2.textContent = "2";
  option3.textContent = "3";
  option4.textContent = "4";
  selectTag.append(option1, option2, option3, option4);
  td4.append(selectTag);
  //var n = document.getElementById("sel").value;

  var td5 = document.createElement("td");
  td5.textContent = rupee + MRP;

  row.append(td1, td2, td3, td4, td5);
  var tbody = document.querySelector("tbody");
  tbody.append(row);
}
console.log(sum);
var tag = (document.getElementById("totalAmt").innerHTML =
  `<span>Subtotal : ₹ </span>` + sum);
